"use strict;"
import {Sigma} from 'sigma';
import {DirectedGraph} from 'graphology';
import {circlepack} from 'graphology-layout';
import forceLayout from 'graphology-layout-force';

const graph = new DirectedGraph();

// Adding some nodes
for (var i = 0; i < 9; i++) {
  graph.addNode('State ' + i, {"size": 15});
}

// Adding an edge
for (var i = 0; i < 9; i++) {
  for (var j = 0; j<i; j++) {
    graph.addEdge('State ' + i, 'State ' + j, {type: "arrow", "size": 7, "color": "});
  }
}

// To directly assign the positions to the nodes:
circlepack.assign(graph, {"rng": () => Math.random()*1});
forceLayout.assign(graph, {maxIterations: 500, "repulsion": 30.0});

const container = document.getElementById("sigma-container") as HTMLElement;
const zoomInBtn = document.getElementById("zoom-in") as HTMLButtonElement;
const zoomOutBtn = document.getElementById("zoom-out") as HTMLButtonElement;
const zoomResetBtn = document.getElementById("zoom-reset") as HTMLButtonElement;
const labelsThresholdRange = document.getElementById("labels-threshold") as HTMLInputElement;

// Instanciate sigma:
const renderer = new Sigma(graph, container, {
  minCameraRatio: 0.1,
  maxCameraRatio: 10,
});
const camera = renderer.getCamera();

// Bind zoom manipulation buttons
zoomInBtn.addEventListener("click", () => {
  camera.animatedZoom({ duration: 600 });
});
zoomOutBtn.addEventListener("click", () => {
  camera.animatedUnzoom({ duration: 600 });
});
zoomResetBtn.addEventListener("click", () => {
  camera.animatedReset({ duration: 600 });
});

// Bind labels threshold to range input
labelsThresholdRange.addEventListener("input", () => {
  renderer.setSetting("labelRenderedSizeThreshold", +labelsThresholdRange.value);
});

// Set proper range initial value:
labelsThresholdRange.value = renderer.getSetting("labelRenderedSizeThreshold") + "";
