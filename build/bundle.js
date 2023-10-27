var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __toCommonJS = (from) => {
  const moduleCache = __toCommonJS.moduleCache ??= new WeakMap;
  var cached = moduleCache.get(from);
  if (cached)
    return cached;
  var to = __defProp({}, "__esModule", { value: true });
  var desc = { enumerable: false };
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key))
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
  }
  moduleCache.set(from, to);
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);

// node_modules/@yomguithereal/helpers/extend.js
var require_extend = __commonJS((exports, module) => {
  module.exports = function extend(array, values) {
    var l2 = values.length;
    if (l2 === 0)
      return;
    var l1 = array.length;
    array.length += l2;
    for (var i = 0;i < l2; i++)
      array[l1 + i] = values[i];
  };
});

// node_modules/graphology-utils/is-graph.js
var require_is_graph = __commonJS((exports, module) => {
  module.exports = function isGraph(value) {
    return value !== null && typeof value === "object" && typeof value.addUndirectedEdgeWithKey === "function" && typeof value.dropNode === "function" && typeof value.multi === "boolean";
  };
});

// node_modules/sigma/utils/matrices.js
var require_matrices = __commonJS((exports) => {
  var identity = function() {
    return Float32Array.of(1, 0, 0, 0, 1, 0, 0, 0, 1);
  };
  var scale = function(m, x, y) {
    m[0] = x;
    m[4] = typeof y === "number" ? y : x;
    return m;
  };
  var rotate = function(m, r) {
    var s = Math.sin(r), c = Math.cos(r);
    m[0] = c;
    m[1] = s;
    m[3] = -s;
    m[4] = c;
    return m;
  };
  var translate = function(m, x, y) {
    m[6] = x;
    m[7] = y;
    return m;
  };
  var multiply = function(a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];
    var b00 = b[0], b01 = b[1], b02 = b[2];
    var b10 = b[3], b11 = b[4], b12 = b[5];
    var b20 = b[6], b21 = b[7], b22 = b[8];
    a[0] = b00 * a00 + b01 * a10 + b02 * a20;
    a[1] = b00 * a01 + b01 * a11 + b02 * a21;
    a[2] = b00 * a02 + b01 * a12 + b02 * a22;
    a[3] = b10 * a00 + b11 * a10 + b12 * a20;
    a[4] = b10 * a01 + b11 * a11 + b12 * a21;
    a[5] = b10 * a02 + b11 * a12 + b12 * a22;
    a[6] = b20 * a00 + b21 * a10 + b22 * a20;
    a[7] = b20 * a01 + b21 * a11 + b22 * a21;
    a[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return a;
  };
  var multiplyVec2 = function(a, b, z) {
    if (z === undefined) {
      z = 1;
    }
    var a00 = a[0];
    var a01 = a[1];
    var a10 = a[3];
    var a11 = a[4];
    var a20 = a[6];
    var a21 = a[7];
    var b0 = b.x;
    var b1 = b.y;
    return { x: b0 * a00 + b1 * a10 + a20 * z, y: b0 * a01 + b1 * a11 + a21 * z };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.multiplyVec2 = exports.multiply = exports.translate = exports.rotate = exports.scale = exports.identity = undefined;
  exports.identity = identity;
  exports.scale = scale;
  exports.rotate = rotate;
  exports.translate = translate;
  exports.multiply = multiply;
  exports.multiplyVec2 = multiplyVec2;
});

// node_modules/sigma/utils/data.js
var require_data = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.HTML_COLORS = undefined;
  exports.HTML_COLORS = {
    black: "#000000",
    silver: "#C0C0C0",
    gray: "#808080",
    grey: "#808080",
    white: "#FFFFFF",
    maroon: "#800000",
    red: "#FF0000",
    purple: "#800080",
    fuchsia: "#FF00FF",
    green: "#008000",
    lime: "#00FF00",
    olive: "#808000",
    yellow: "#FFFF00",
    navy: "#000080",
    blue: "#0000FF",
    teal: "#008080",
    aqua: "#00FFFF",
    darkblue: "#00008B",
    mediumblue: "#0000CD",
    darkgreen: "#006400",
    darkcyan: "#008B8B",
    deepskyblue: "#00BFFF",
    darkturquoise: "#00CED1",
    mediumspringgreen: "#00FA9A",
    springgreen: "#00FF7F",
    cyan: "#00FFFF",
    midnightblue: "#191970",
    dodgerblue: "#1E90FF",
    lightseagreen: "#20B2AA",
    forestgreen: "#228B22",
    seagreen: "#2E8B57",
    darkslategray: "#2F4F4F",
    darkslategrey: "#2F4F4F",
    limegreen: "#32CD32",
    mediumseagreen: "#3CB371",
    turquoise: "#40E0D0",
    royalblue: "#4169E1",
    steelblue: "#4682B4",
    darkslateblue: "#483D8B",
    mediumturquoise: "#48D1CC",
    indigo: "#4B0082",
    darkolivegreen: "#556B2F",
    cadetblue: "#5F9EA0",
    cornflowerblue: "#6495ED",
    rebeccapurple: "#663399",
    mediumaquamarine: "#66CDAA",
    dimgray: "#696969",
    dimgrey: "#696969",
    slateblue: "#6A5ACD",
    olivedrab: "#6B8E23",
    slategray: "#708090",
    slategrey: "#708090",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    mediumslateblue: "#7B68EE",
    lawngreen: "#7CFC00",
    chartreuse: "#7FFF00",
    aquamarine: "#7FFFD4",
    skyblue: "#87CEEB",
    lightskyblue: "#87CEFA",
    blueviolet: "#8A2BE2",
    darkred: "#8B0000",
    darkmagenta: "#8B008B",
    saddlebrown: "#8B4513",
    darkseagreen: "#8FBC8F",
    lightgreen: "#90EE90",
    mediumpurple: "#9370DB",
    darkviolet: "#9400D3",
    palegreen: "#98FB98",
    darkorchid: "#9932CC",
    yellowgreen: "#9ACD32",
    sienna: "#A0522D",
    brown: "#A52A2A",
    darkgray: "#A9A9A9",
    darkgrey: "#A9A9A9",
    lightblue: "#ADD8E6",
    greenyellow: "#ADFF2F",
    paleturquoise: "#AFEEEE",
    lightsteelblue: "#B0C4DE",
    powderblue: "#B0E0E6",
    firebrick: "#B22222",
    darkgoldenrod: "#B8860B",
    mediumorchid: "#BA55D3",
    rosybrown: "#BC8F8F",
    darkkhaki: "#BDB76B",
    mediumvioletred: "#C71585",
    indianred: "#CD5C5C",
    peru: "#CD853F",
    chocolate: "#D2691E",
    tan: "#D2B48C",
    lightgray: "#D3D3D3",
    lightgrey: "#D3D3D3",
    thistle: "#D8BFD8",
    orchid: "#DA70D6",
    goldenrod: "#DAA520",
    palevioletred: "#DB7093",
    crimson: "#DC143C",
    gainsboro: "#DCDCDC",
    plum: "#DDA0DD",
    burlywood: "#DEB887",
    lightcyan: "#E0FFFF",
    lavender: "#E6E6FA",
    darksalmon: "#E9967A",
    violet: "#EE82EE",
    palegoldenrod: "#EEE8AA",
    lightcoral: "#F08080",
    khaki: "#F0E68C",
    aliceblue: "#F0F8FF",
    honeydew: "#F0FFF0",
    azure: "#F0FFFF",
    sandybrown: "#F4A460",
    wheat: "#F5DEB3",
    beige: "#F5F5DC",
    whitesmoke: "#F5F5F5",
    mintcream: "#F5FFFA",
    ghostwhite: "#F8F8FF",
    salmon: "#FA8072",
    antiquewhite: "#FAEBD7",
    linen: "#FAF0E6",
    lightgoldenrodyellow: "#FAFAD2",
    oldlace: "#FDF5E6",
    magenta: "#FF00FF",
    deeppink: "#FF1493",
    orangered: "#FF4500",
    tomato: "#FF6347",
    hotpink: "#FF69B4",
    coral: "#FF7F50",
    darkorange: "#FF8C00",
    lightsalmon: "#FFA07A",
    orange: "#FFA500",
    lightpink: "#FFB6C1",
    pink: "#FFC0CB",
    gold: "#FFD700",
    peachpuff: "#FFDAB9",
    navajowhite: "#FFDEAD",
    moccasin: "#FFE4B5",
    bisque: "#FFE4C4",
    mistyrose: "#FFE4E1",
    blanchedalmond: "#FFEBCD",
    papayawhip: "#FFEFD5",
    lavenderblush: "#FFF0F5",
    seashell: "#FFF5EE",
    cornsilk: "#FFF8DC",
    lemonchiffon: "#FFFACD",
    floralwhite: "#FFFAF0",
    snow: "#FFFAFA",
    lightyellow: "#FFFFE0",
    ivory: "#FFFFF0"
  };
});

// node_modules/sigma/utils/index.js
var require_utils = __commonJS((exports) => {
  var isPlainObject = function(value) {
    return typeof value === "object" && value !== null && value.constructor === Object;
  };
  var assign = function(target) {
    var objects = [];
    for (var _i = 1;_i < arguments.length; _i++) {
      objects[_i - 1] = arguments[_i];
    }
    target = target || {};
    for (var i = 0, l = objects.length;i < l; i++) {
      var o = objects[i];
      if (!o)
        continue;
      Object.assign(target, o);
    }
    return target;
  };
  var assignDeep = function(target) {
    var objects = [];
    for (var _i = 1;_i < arguments.length; _i++) {
      objects[_i - 1] = arguments[_i];
    }
    target = target || {};
    for (var i = 0, l = objects.length;i < l; i++) {
      var o = objects[i];
      if (!o)
        continue;
      for (var k in o) {
        if (isPlainObject(o[k])) {
          target[k] = assignDeep(target[k], o[k]);
        } else {
          target[k] = o[k];
        }
      }
    }
    return target;
  };
  var createElement = function(tag, style, attributes) {
    var element = document.createElement(tag);
    if (style) {
      for (var k in style) {
        element.style[k] = style[k];
      }
    }
    if (attributes) {
      for (var k in attributes) {
        element.setAttribute(k, attributes[k]);
      }
    }
    return element;
  };
  var getPixelRatio = function() {
    if (typeof window.devicePixelRatio !== "undefined")
      return window.devicePixelRatio;
    return 1;
  };
  var graphExtent = function(graph) {
    if (!graph.order)
      return { x: [0, 1], y: [0, 1] };
    var xMin = Infinity;
    var xMax = (-Infinity);
    var yMin = Infinity;
    var yMax = (-Infinity);
    graph.forEachNode(function(_, attr) {
      var { x, y } = attr;
      if (x < xMin)
        xMin = x;
      if (x > xMax)
        xMax = x;
      if (y < yMin)
        yMin = y;
      if (y > yMax)
        yMax = y;
    });
    return { x: [xMin, xMax], y: [yMin, yMax] };
  };
  var createNormalizationFunction = function(extent) {
    var _a = __read(extent.x, 2), minX = _a[0], maxX = _a[1], _b = __read(extent.y, 2), minY = _b[0], maxY = _b[1];
    var ratio = Math.max(maxX - minX, maxY - minY), dX = (maxX + minX) / 2, dY = (maxY + minY) / 2;
    if (ratio === 0 || Math.abs(ratio) === Infinity || isNaN(ratio))
      ratio = 1;
    if (isNaN(dX))
      dX = 0;
    if (isNaN(dY))
      dY = 0;
    var fn = function(data) {
      return {
        x: 0.5 + (data.x - dX) / ratio,
        y: 0.5 + (data.y - dY) / ratio
      };
    };
    fn.applyTo = function(data) {
      data.x = 0.5 + (data.x - dX) / ratio;
      data.y = 0.5 + (data.y - dY) / ratio;
    };
    fn.inverse = function(data) {
      return {
        x: dX + ratio * (data.x - 0.5),
        y: dY + ratio * (data.y - 0.5)
      };
    };
    fn.ratio = ratio;
    return fn;
  };
  var zIndexOrdering = function(extent, getter, elements) {
    return elements.sort(function(a, b) {
      var zA = getter(a) || 0, zB = getter(b) || 0;
      if (zA < zB)
        return -1;
      if (zA > zB)
        return 1;
      return 0;
    });
  };
  var parseColor = function(val) {
    var r = 0;
    var g = 0;
    var b = 0;
    var a = 1;
    if (val[0] === "#") {
      if (val.length === 4) {
        r = parseInt(val.charAt(1) + val.charAt(1), 16);
        g = parseInt(val.charAt(2) + val.charAt(2), 16);
        b = parseInt(val.charAt(3) + val.charAt(3), 16);
      } else {
        r = parseInt(val.charAt(1) + val.charAt(2), 16);
        g = parseInt(val.charAt(3) + val.charAt(4), 16);
        b = parseInt(val.charAt(5) + val.charAt(6), 16);
      }
      if (val.length === 9) {
        a = parseInt(val.charAt(7) + val.charAt(8), 16) / 255;
      }
    } else if (RGBA_TEST_REGEX.test(val)) {
      var match = val.match(RGBA_EXTRACT_REGEX);
      if (match) {
        r = +match[1];
        g = +match[2];
        b = +match[3];
        if (match[4])
          a = +match[4];
      }
    }
    return { r, g, b, a };
  };
  var floatArrayColor = function(val) {
    val = data_1.HTML_COLORS[val] || val;
    var _a = parseColor(val), r = _a.r, g = _a.g, b = _a.b, a = _a.a;
    return new Float32Array([r / 255, g / 255, b / 255, a]);
  };
  var floatColor = function(val) {
    if (typeof FLOAT_COLOR_CACHE[val] !== "undefined")
      return FLOAT_COLOR_CACHE[val];
    var parsed = parseColor(val);
    var { r, g, b } = parsed;
    var a = parsed.a;
    a = a * 255 | 0;
    INT32[0] = (a << 24 | b << 16 | g << 8 | r) & 4278190079;
    var color = FLOAT32[0];
    FLOAT_COLOR_CACHE[val] = color;
    return color;
  };
  var getCorrectionRatio = function(viewportDimensions, graphDimensions) {
    var viewportRatio = viewportDimensions.height / viewportDimensions.width;
    var graphRatio = graphDimensions.height / graphDimensions.width;
    if (viewportRatio < 1 && graphRatio > 1 || viewportRatio > 1 && graphRatio < 1) {
      return 1;
    }
    return Math.min(Math.max(graphRatio, 1 / graphRatio), Math.max(1 / viewportRatio, viewportRatio));
  };
  var matrixFromCamera = function(state, viewportDimensions, graphDimensions, padding, inverse) {
    var { angle, ratio, x, y } = state;
    var { width, height } = viewportDimensions;
    var matrix = (0, matrices_1.identity)();
    var smallestDimension = Math.min(width, height) - 2 * padding;
    var correctionRatio = getCorrectionRatio(viewportDimensions, graphDimensions);
    if (!inverse) {
      (0, matrices_1.multiply)(matrix, (0, matrices_1.scale)((0, matrices_1.identity)(), 2 * (smallestDimension / width) * correctionRatio, 2 * (smallestDimension / height) * correctionRatio));
      (0, matrices_1.multiply)(matrix, (0, matrices_1.rotate)((0, matrices_1.identity)(), -angle));
      (0, matrices_1.multiply)(matrix, (0, matrices_1.scale)((0, matrices_1.identity)(), 1 / ratio));
      (0, matrices_1.multiply)(matrix, (0, matrices_1.translate)((0, matrices_1.identity)(), -x, -y));
    } else {
      (0, matrices_1.multiply)(matrix, (0, matrices_1.translate)((0, matrices_1.identity)(), x, y));
      (0, matrices_1.multiply)(matrix, (0, matrices_1.scale)((0, matrices_1.identity)(), ratio));
      (0, matrices_1.multiply)(matrix, (0, matrices_1.rotate)((0, matrices_1.identity)(), angle));
      (0, matrices_1.multiply)(matrix, (0, matrices_1.scale)((0, matrices_1.identity)(), width / smallestDimension / 2 / correctionRatio, height / smallestDimension / 2 / correctionRatio));
    }
    return matrix;
  };
  var getMatrixImpact = function(matrix, cameraState, viewportDimensions) {
    var _a = (0, matrices_1.multiplyVec2)(matrix, { x: Math.cos(cameraState.angle), y: Math.sin(cameraState.angle) }, 0), x = _a.x, y = _a.y;
    return 1 / Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) / viewportDimensions.width;
  };
  var extractPixel = function(gl, x, y, array) {
    var data = array || new Uint8Array(4);
    gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, data);
    return data;
  };
  var canUse32BitsIndices = function(gl) {
    var webgl2 = typeof WebGL2RenderingContext !== "undefined" && gl instanceof WebGL2RenderingContext;
    return webgl2 || !!gl.getExtension("OES_element_index_uint");
  };
  var validateGraph = function(graph) {
    if (!(0, is_graph_1.default)(graph))
      throw new Error("Sigma: invalid graph instance.");
    graph.forEachNode(function(key, attributes) {
      if (!Number.isFinite(attributes.x) || !Number.isFinite(attributes.y)) {
        throw new Error("Sigma: Coordinates of node ".concat(key, " are invalid. A node must have a numeric 'x' and 'y' attribute."));
      }
    });
  };
  var __read = exports && exports.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === undefined || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  };
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.validateGraph = exports.canUse32BitsIndices = exports.extractPixel = exports.getMatrixImpact = exports.matrixFromCamera = exports.getCorrectionRatio = exports.floatColor = exports.floatArrayColor = exports.parseColor = exports.zIndexOrdering = exports.createNormalizationFunction = exports.graphExtent = exports.getPixelRatio = exports.createElement = exports.cancelFrame = exports.requestFrame = exports.assignDeep = exports.assign = exports.isPlainObject = undefined;
  var is_graph_1 = __importDefault(require_is_graph());
  var matrices_1 = require_matrices();
  var data_1 = require_data();
  exports.isPlainObject = isPlainObject;
  exports.assign = assign;
  exports.assignDeep = assignDeep;
  exports.requestFrame = typeof requestAnimationFrame !== "undefined" ? function(callback) {
    return requestAnimationFrame(callback);
  } : function(callback) {
    return setTimeout(callback, 0);
  };
  exports.cancelFrame = typeof cancelAnimationFrame !== "undefined" ? function(requestID) {
    return cancelAnimationFrame(requestID);
  } : function(requestID) {
    return clearTimeout(requestID);
  };
  exports.createElement = createElement;
  exports.getPixelRatio = getPixelRatio;
  exports.graphExtent = graphExtent;
  exports.createNormalizationFunction = createNormalizationFunction;
  exports.zIndexOrdering = zIndexOrdering;
  var INT8 = new Int8Array(4);
  var INT32 = new Int32Array(INT8.buffer, 0, 1);
  var FLOAT32 = new Float32Array(INT8.buffer, 0, 1);
  var RGBA_TEST_REGEX = /^\s*rgba?\s*\(/;
  var RGBA_EXTRACT_REGEX = /^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;
  exports.parseColor = parseColor;
  var FLOAT_COLOR_CACHE = {};
  for (htmlColor in data_1.HTML_COLORS) {
    FLOAT_COLOR_CACHE[htmlColor] = floatColor(data_1.HTML_COLORS[htmlColor]);
    FLOAT_COLOR_CACHE[data_1.HTML_COLORS[htmlColor]] = FLOAT_COLOR_CACHE[htmlColor];
  }
  var htmlColor;
  exports.floatArrayColor = floatArrayColor;
  exports.floatColor = floatColor;
  exports.getCorrectionRatio = getCorrectionRatio;
  exports.matrixFromCamera = matrixFromCamera;
  exports.getMatrixImpact = getMatrixImpact;
  exports.extractPixel = extractPixel;
  exports.canUse32BitsIndices = canUse32BitsIndices;
  exports.validateGraph = validateGraph;
});

// node_modules/sigma/utils/easings.js
var require_easings = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.cubicInOut = exports.cubicOut = exports.cubicIn = exports.quadraticInOut = exports.quadraticOut = exports.quadraticIn = exports.linear = undefined;
  var linear = function(k) {
    return k;
  };
  exports.linear = linear;
  var quadraticIn = function(k) {
    return k * k;
  };
  exports.quadraticIn = quadraticIn;
  var quadraticOut = function(k) {
    return k * (2 - k);
  };
  exports.quadraticOut = quadraticOut;
  var quadraticInOut = function(k) {
    if ((k *= 2) < 1)
      return 0.5 * k * k;
    return -0.5 * (--k * (k - 2) - 1);
  };
  exports.quadraticInOut = quadraticInOut;
  var cubicIn = function(k) {
    return k * k * k;
  };
  exports.cubicIn = cubicIn;
  var cubicOut = function(k) {
    return --k * k * k + 1;
  };
  exports.cubicOut = cubicOut;
  var cubicInOut = function(k) {
    if ((k *= 2) < 1)
      return 0.5 * k * k * k;
    return 0.5 * ((k -= 2) * k * k + 2);
  };
  exports.cubicInOut = cubicInOut;
  var easings = {
    linear: exports.linear,
    quadraticIn: exports.quadraticIn,
    quadraticOut: exports.quadraticOut,
    quadraticInOut: exports.quadraticInOut,
    cubicIn: exports.cubicIn,
    cubicOut: exports.cubicOut,
    cubicInOut: exports.cubicInOut
  };
  exports.default = easings;
});

// node_modules/sigma/utils/animate.js
var require_animate = __commonJS((exports) => {
  var animateNodes = function(graph, targets, opts, callback) {
    var options = Object.assign({}, exports.ANIMATE_DEFAULTS, opts);
    var easing = typeof options.easing === "function" ? options.easing : easings_1.default[options.easing];
    var start = Date.now();
    var startPositions = {};
    for (var node in targets) {
      var attrs = targets[node];
      startPositions[node] = {};
      for (var k in attrs)
        startPositions[node][k] = graph.getNodeAttribute(node, k);
    }
    var frame = null;
    var step = function() {
      frame = null;
      var p = (Date.now() - start) / options.duration;
      if (p >= 1) {
        for (var node2 in targets) {
          var attrs2 = targets[node2];
          for (var k2 in attrs2)
            graph.setNodeAttribute(node2, k2, attrs2[k2]);
        }
        if (typeof callback === "function")
          callback();
        return;
      }
      p = easing(p);
      for (var node2 in targets) {
        var attrs2 = targets[node2];
        var s = startPositions[node2];
        for (var k2 in attrs2)
          graph.setNodeAttribute(node2, k2, attrs2[k2] * p + s[k2] * (1 - p));
      }
      frame = (0, index_1.requestFrame)(step);
    };
    step();
    return function() {
      if (frame)
        (0, index_1.cancelFrame)(frame);
    };
  };
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.animateNodes = exports.ANIMATE_DEFAULTS = undefined;
  var index_1 = require_utils();
  var easings_1 = __importDefault(require_easings());
  exports.ANIMATE_DEFAULTS = {
    easing: "quadraticInOut",
    duration: 150
  };
  exports.animateNodes = animateNodes;
});

// node:events
var exports_events = {};
__export(exports_events, {
  prototype: () => {
    {
      return P;
    }
  },
  once: () => {
    {
      return M;
    }
  },
  default: () => {
    {
      return A;
    }
  },
  EventEmitter: () => {
    {
      return o;
    }
  }
});
var x, o, v, m, y, C, g, _, w, b, j, R, M, N, E, a, d, l, L, h, A, P;
var init_events = __esm(() => {
  x = function(t) {
    console && console.warn && console.warn(t);
  };
  o = function() {
    o.init.call(this);
  };
  v = function(t) {
    if (typeof t != "function")
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
  };
  m = function(t) {
    return t._maxListeners === undefined ? o.defaultMaxListeners : t._maxListeners;
  };
  y = function(t, e, n, r) {
    var i, f, s;
    if (v(n), f = t._events, f === undefined ? (f = t._events = Object.create(null), t._eventsCount = 0) : (f.newListener !== undefined && (t.emit("newListener", e, n.listener ? n.listener : n), f = t._events), s = f[e]), s === undefined)
      s = f[e] = n, ++t._eventsCount;
    else if (typeof s == "function" ? s = f[e] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), i = m(t), i > 0 && s.length > i && !s.warned) {
      s.warned = true;
      var u = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      u.name = "MaxListenersExceededWarning", u.emitter = t, u.type = e, u.count = s.length, x(u);
    }
    return t;
  };
  C = function() {
    if (!this.fired)
      return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  };
  g = function(t, e, n) {
    var r = { fired: false, wrapFn: undefined, target: t, type: e, listener: n }, i = C.bind(r);
    return i.listener = n, r.wrapFn = i, i;
  };
  _ = function(t, e, n) {
    var r = t._events;
    if (r === undefined)
      return [];
    var i = r[e];
    return i === undefined ? [] : typeof i == "function" ? n ? [i.listener || i] : [i] : n ? R(i) : b(i, i.length);
  };
  w = function(t) {
    var e = this._events;
    if (e !== undefined) {
      var n = e[t];
      if (typeof n == "function")
        return 1;
      if (n !== undefined)
        return n.length;
    }
    return 0;
  };
  b = function(t, e) {
    for (var n = new Array(e), r = 0;r < e; ++r)
      n[r] = t[r];
    return n;
  };
  j = function(t, e) {
    for (;e + 1 < t.length; e++)
      t[e] = t[e + 1];
    t.pop();
  };
  R = function(t) {
    for (var e = new Array(t.length), n = 0;n < e.length; ++n)
      e[n] = t[n].listener || t[n];
    return e;
  };
  M = function(t, e) {
    return new Promise(function(n, r) {
      function i(s) {
        t.removeListener(e, f), r(s);
      }
      function f() {
        typeof t.removeListener == "function" && t.removeListener("error", i), n([].slice.call(arguments));
      }
      E(t, e, f, { once: true }), e !== "error" && N(t, i, { once: true });
    });
  };
  N = function(t, e, n) {
    typeof t.on == "function" && E(t, "error", e, n);
  };
  E = function(t, e, n, r) {
    if (typeof t.on == "function")
      r.once ? t.once(e, n) : t.on(e, n);
    else if (typeof t.addEventListener == "function")
      t.addEventListener(e, function i(f) {
        r.once && t.removeEventListener(e, i), n(f);
      });
    else
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
  };
  a = typeof Reflect == "object" ? Reflect : null;
  d = a && typeof a.apply == "function" ? a.apply : function(e, n, r) {
    return Function.prototype.apply.call(e, n, r);
  };
  a && typeof a.ownKeys == "function" ? l = a.ownKeys : Object.getOwnPropertySymbols ? l = function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
  } : l = function(e) {
    return Object.getOwnPropertyNames(e);
  };
  L = Number.isNaN || function(e) {
    return e !== e;
  };
  o.EventEmitter = o;
  o.prototype._events = undefined;
  o.prototype._eventsCount = 0;
  o.prototype._maxListeners = undefined;
  h = 10;
  Object.defineProperty(o, "defaultMaxListeners", { enumerable: true, get: function() {
    return h;
  }, set: function(t) {
    if (typeof t != "number" || t < 0 || L(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    h = t;
  } });
  o.init = function() {
    (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || undefined;
  };
  o.prototype.setMaxListeners = function(e) {
    if (typeof e != "number" || e < 0 || L(e))
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this;
  };
  o.prototype.getMaxListeners = function() {
    return m(this);
  };
  o.prototype.emit = function(e) {
    for (var n = [], r = 1;r < arguments.length; r++)
      n.push(arguments[r]);
    var i = e === "error", f = this._events;
    if (f !== undefined)
      i = i && f.error === undefined;
    else if (!i)
      return false;
    if (i) {
      var s;
      if (n.length > 0 && (s = n[0]), s instanceof Error)
        throw s;
      var u = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
      throw u.context = s, u;
    }
    var c = f[e];
    if (c === undefined)
      return false;
    if (typeof c == "function")
      d(c, this, n);
    else
      for (var p = c.length, O = b(c, p), r = 0;r < p; ++r)
        d(O[r], this, n);
    return true;
  };
  o.prototype.addListener = function(e, n) {
    return y(this, e, n, false);
  };
  o.prototype.on = o.prototype.addListener;
  o.prototype.prependListener = function(e, n) {
    return y(this, e, n, true);
  };
  o.prototype.once = function(e, n) {
    return v(n), this.on(e, g(this, e, n)), this;
  };
  o.prototype.prependOnceListener = function(e, n) {
    return v(n), this.prependListener(e, g(this, e, n)), this;
  };
  o.prototype.removeListener = function(e, n) {
    var r, i, f, s, u;
    if (v(n), i = this._events, i === undefined)
      return this;
    if (r = i[e], r === undefined)
      return this;
    if (r === n || r.listener === n)
      --this._eventsCount === 0 ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, r.listener || n));
    else if (typeof r != "function") {
      for (f = -1, s = r.length - 1;s >= 0; s--)
        if (r[s] === n || r[s].listener === n) {
          u = r[s].listener, f = s;
          break;
        }
      if (f < 0)
        return this;
      f === 0 ? r.shift() : j(r, f), r.length === 1 && (i[e] = r[0]), i.removeListener !== undefined && this.emit("removeListener", e, u || n);
    }
    return this;
  };
  o.prototype.off = o.prototype.removeListener;
  o.prototype.removeAllListeners = function(e) {
    var n, r, i;
    if (r = this._events, r === undefined)
      return this;
    if (r.removeListener === undefined)
      return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : r[e] !== undefined && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete r[e]), this;
    if (arguments.length === 0) {
      var f = Object.keys(r), s;
      for (i = 0;i < f.length; ++i)
        s = f[i], s !== "removeListener" && this.removeAllListeners(s);
      return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
    }
    if (n = r[e], typeof n == "function")
      this.removeListener(e, n);
    else if (n !== undefined)
      for (i = n.length - 1;i >= 0; i--)
        this.removeListener(e, n[i]);
    return this;
  };
  o.prototype.listeners = function(e) {
    return _(this, e, true);
  };
  o.prototype.rawListeners = function(e) {
    return _(this, e, false);
  };
  o.listenerCount = function(t, e) {
    return typeof t.listenerCount == "function" ? t.listenerCount(e) : w.call(t, e);
  };
  o.prototype.listenerCount = w;
  o.prototype.eventNames = function() {
    return this._eventsCount > 0 ? l(this._events) : [];
  };
  A = o;
  P = o.prototype;
});

// node_modules/sigma/types.js
var require_types = __commonJS((exports) => {
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d2, b2) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
        d3.__proto__ = b3;
      } || function(d3, b3) {
        for (var p in b3)
          if (Object.prototype.hasOwnProperty.call(b3, p))
            d3[p] = b3[p];
      };
      return extendStatics(d2, b2);
    };
    return function(d2, b2) {
      if (typeof b2 !== "function" && b2 !== null)
        throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
      extendStatics(d2, b2);
      function __() {
        this.constructor = d2;
      }
      d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __);
    };
  }();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.TypedEventEmitter = undefined;
  var events_1 = (init_events(), __toCommonJS(exports_events));
  var TypedEventEmitter = function(_super) {
    __extends(TypedEventEmitter2, _super);
    function TypedEventEmitter2() {
      var _this = _super.call(this) || this;
      _this.rawEmitter = _this;
      return _this;
    }
    return TypedEventEmitter2;
  }(events_1.EventEmitter);
  exports.TypedEventEmitter = TypedEventEmitter;
});

// node_modules/sigma/core/camera.js
var require_camera = __commonJS((exports) => {
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d2, b2) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
        d3.__proto__ = b3;
      } || function(d3, b3) {
        for (var p in b3)
          if (Object.prototype.hasOwnProperty.call(b3, p))
            d3[p] = b3[p];
      };
      return extendStatics(d2, b2);
    };
    return function(d2, b2) {
      if (typeof b2 !== "function" && b2 !== null)
        throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
      extendStatics(d2, b2);
      function __() {
        this.constructor = d2;
      }
      d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __);
    };
  }();
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var animate_1 = require_animate();
  var easings_1 = __importDefault(require_easings());
  var utils_1 = require_utils();
  var types_1 = require_types();
  var DEFAULT_ZOOMING_RATIO = 1.5;
  var Camera = function(_super) {
    __extends(Camera2, _super);
    function Camera2() {
      var _this = _super.call(this) || this;
      _this.x = 0.5;
      _this.y = 0.5;
      _this.angle = 0;
      _this.ratio = 1;
      _this.minRatio = null;
      _this.maxRatio = null;
      _this.nextFrame = null;
      _this.previousState = null;
      _this.enabled = true;
      _this.previousState = _this.getState();
      return _this;
    }
    Camera2.from = function(state) {
      var camera = new Camera2;
      return camera.setState(state);
    };
    Camera2.prototype.enable = function() {
      this.enabled = true;
      return this;
    };
    Camera2.prototype.disable = function() {
      this.enabled = false;
      return this;
    };
    Camera2.prototype.getState = function() {
      return {
        x: this.x,
        y: this.y,
        angle: this.angle,
        ratio: this.ratio
      };
    };
    Camera2.prototype.hasState = function(state) {
      return this.x === state.x && this.y === state.y && this.ratio === state.ratio && this.angle === state.angle;
    };
    Camera2.prototype.getPreviousState = function() {
      var state = this.previousState;
      if (!state)
        return null;
      return {
        x: state.x,
        y: state.y,
        angle: state.angle,
        ratio: state.ratio
      };
    };
    Camera2.prototype.getBoundedRatio = function(ratio) {
      var r = ratio;
      if (typeof this.minRatio === "number")
        r = Math.max(r, this.minRatio);
      if (typeof this.maxRatio === "number")
        r = Math.min(r, this.maxRatio);
      return r;
    };
    Camera2.prototype.validateState = function(state) {
      var validatedState = {};
      if (typeof state.x === "number")
        validatedState.x = state.x;
      if (typeof state.y === "number")
        validatedState.y = state.y;
      if (typeof state.angle === "number")
        validatedState.angle = state.angle;
      if (typeof state.ratio === "number")
        validatedState.ratio = this.getBoundedRatio(state.ratio);
      return validatedState;
    };
    Camera2.prototype.isAnimated = function() {
      return !!this.nextFrame;
    };
    Camera2.prototype.setState = function(state) {
      if (!this.enabled)
        return this;
      this.previousState = this.getState();
      var validState = this.validateState(state);
      if (typeof validState.x === "number")
        this.x = validState.x;
      if (typeof validState.y === "number")
        this.y = validState.y;
      if (typeof validState.angle === "number")
        this.angle = validState.angle;
      if (typeof validState.ratio === "number")
        this.ratio = validState.ratio;
      if (!this.hasState(this.previousState))
        this.emit("updated", this.getState());
      return this;
    };
    Camera2.prototype.updateState = function(updater) {
      this.setState(updater(this.getState()));
      return this;
    };
    Camera2.prototype.animate = function(state, opts, callback) {
      var _this = this;
      if (!this.enabled)
        return;
      var options = Object.assign({}, animate_1.ANIMATE_DEFAULTS, opts);
      var validState = this.validateState(state);
      var easing = typeof options.easing === "function" ? options.easing : easings_1.default[options.easing];
      var start = Date.now(), initialState = this.getState();
      var fn = function() {
        var t = (Date.now() - start) / options.duration;
        if (t >= 1) {
          _this.nextFrame = null;
          _this.setState(validState);
          if (_this.animationCallback) {
            _this.animationCallback.call(null);
            _this.animationCallback = undefined;
          }
          return;
        }
        var coefficient = easing(t);
        var newState = {};
        if (typeof validState.x === "number")
          newState.x = initialState.x + (validState.x - initialState.x) * coefficient;
        if (typeof validState.y === "number")
          newState.y = initialState.y + (validState.y - initialState.y) * coefficient;
        if (typeof validState.angle === "number")
          newState.angle = initialState.angle + (validState.angle - initialState.angle) * coefficient;
        if (typeof validState.ratio === "number")
          newState.ratio = initialState.ratio + (validState.ratio - initialState.ratio) * coefficient;
        _this.setState(newState);
        _this.nextFrame = (0, utils_1.requestFrame)(fn);
      };
      if (this.nextFrame) {
        (0, utils_1.cancelFrame)(this.nextFrame);
        if (this.animationCallback)
          this.animationCallback.call(null);
        this.nextFrame = (0, utils_1.requestFrame)(fn);
      } else {
        fn();
      }
      this.animationCallback = callback;
    };
    Camera2.prototype.animatedZoom = function(factorOrOptions) {
      if (!factorOrOptions) {
        this.animate({ ratio: this.ratio / DEFAULT_ZOOMING_RATIO });
      } else {
        if (typeof factorOrOptions === "number")
          return this.animate({ ratio: this.ratio / factorOrOptions });
        else
          this.animate({
            ratio: this.ratio / (factorOrOptions.factor || DEFAULT_ZOOMING_RATIO)
          }, factorOrOptions);
      }
    };
    Camera2.prototype.animatedUnzoom = function(factorOrOptions) {
      if (!factorOrOptions) {
        this.animate({ ratio: this.ratio * DEFAULT_ZOOMING_RATIO });
      } else {
        if (typeof factorOrOptions === "number")
          return this.animate({ ratio: this.ratio * factorOrOptions });
        else
          this.animate({
            ratio: this.ratio * (factorOrOptions.factor || DEFAULT_ZOOMING_RATIO)
          }, factorOrOptions);
      }
    };
    Camera2.prototype.animatedReset = function(options) {
      this.animate({
        x: 0.5,
        y: 0.5,
        ratio: 1,
        angle: 0
      }, options);
    };
    Camera2.prototype.copy = function() {
      return Camera2.from(this.getState());
    };
    return Camera2;
  }(types_1.TypedEventEmitter);
  exports.default = Camera;
});

// node_modules/sigma/core/captors/captor.js
var require_captor = __commonJS((exports) => {
  var getPosition = function(e, dom) {
    var bbox = dom.getBoundingClientRect();
    return {
      x: e.clientX - bbox.left,
      y: e.clientY - bbox.top
    };
  };
  var getMouseCoords = function(e, dom) {
    var res = __assign(__assign({}, getPosition(e, dom)), { sigmaDefaultPrevented: false, preventSigmaDefault: function() {
      res.sigmaDefaultPrevented = true;
    }, original: e });
    return res;
  };
  var getWheelCoords = function(e, dom) {
    return __assign(__assign({}, getMouseCoords(e, dom)), { delta: getWheelDelta(e) });
  };
  var getTouchesArray = function(touches) {
    var arr = [];
    for (var i = 0, l2 = Math.min(touches.length, MAX_TOUCHES);i < l2; i++)
      arr.push(touches[i]);
    return arr;
  };
  var getTouchCoords = function(e, dom) {
    return {
      touches: getTouchesArray(e.touches).map(function(touch) {
        return getPosition(touch, dom);
      }),
      original: e
    };
  };
  var getWheelDelta = function(e) {
    if (typeof e.deltaY !== "undefined")
      return e.deltaY * -3 / 360;
    if (typeof e.detail !== "undefined")
      return e.detail / -9;
    throw new Error("Captor: could not extract delta from event.");
  };
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d2, b2) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
        d3.__proto__ = b3;
      } || function(d3, b3) {
        for (var p in b3)
          if (Object.prototype.hasOwnProperty.call(b3, p))
            d3[p] = b3[p];
      };
      return extendStatics(d2, b2);
    };
    return function(d2, b2) {
      if (typeof b2 !== "function" && b2 !== null)
        throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
      extendStatics(d2, b2);
      function __() {
        this.constructor = d2;
      }
      d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __);
    };
  }();
  var __assign = exports && exports.__assign || function() {
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length;i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getWheelDelta = exports.getTouchCoords = exports.getTouchesArray = exports.getWheelCoords = exports.getMouseCoords = exports.getPosition = undefined;
  var types_1 = require_types();
  exports.getPosition = getPosition;
  exports.getMouseCoords = getMouseCoords;
  exports.getWheelCoords = getWheelCoords;
  var MAX_TOUCHES = 2;
  exports.getTouchesArray = getTouchesArray;
  exports.getTouchCoords = getTouchCoords;
  exports.getWheelDelta = getWheelDelta;
  var Captor = function(_super) {
    __extends(Captor2, _super);
    function Captor2(container, renderer) {
      var _this = _super.call(this) || this;
      _this.container = container;
      _this.renderer = renderer;
      return _this;
    }
    return Captor2;
  }(types_1.TypedEventEmitter);
  exports.default = Captor;
});

// node_modules/sigma/core/captors/mouse.js
var require_mouse = __commonJS((exports) => {
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d2, b2) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
        d3.__proto__ = b3;
      } || function(d3, b3) {
        for (var p in b3)
          if (Object.prototype.hasOwnProperty.call(b3, p))
            d3[p] = b3[p];
      };
      return extendStatics(d2, b2);
    };
    return function(d2, b2) {
      if (typeof b2 !== "function" && b2 !== null)
        throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
      extendStatics(d2, b2);
      function __() {
        this.constructor = d2;
      }
      d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __);
    };
  }();
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o2, v2) {
    Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
  } : function(o2, v2) {
    o2["default"] = v2;
  });
  var __importStar = exports && exports.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var captor_1 = __importStar(require_captor());
  var DRAG_TIMEOUT = 100;
  var DRAGGED_EVENTS_TOLERANCE = 3;
  var MOUSE_INERTIA_DURATION = 200;
  var MOUSE_INERTIA_RATIO = 3;
  var MOUSE_ZOOM_DURATION = 250;
  var ZOOMING_RATIO = 1.7;
  var DOUBLE_CLICK_TIMEOUT = 300;
  var DOUBLE_CLICK_ZOOMING_RATIO = 2.2;
  var DOUBLE_CLICK_ZOOMING_DURATION = 200;
  var MouseCaptor = function(_super) {
    __extends(MouseCaptor2, _super);
    function MouseCaptor2(container, renderer) {
      var _this = _super.call(this, container, renderer) || this;
      _this.enabled = true;
      _this.draggedEvents = 0;
      _this.downStartTime = null;
      _this.lastMouseX = null;
      _this.lastMouseY = null;
      _this.isMouseDown = false;
      _this.isMoving = false;
      _this.movingTimeout = null;
      _this.startCameraState = null;
      _this.clicks = 0;
      _this.doubleClickTimeout = null;
      _this.currentWheelDirection = 0;
      _this.handleClick = _this.handleClick.bind(_this);
      _this.handleRightClick = _this.handleRightClick.bind(_this);
      _this.handleDown = _this.handleDown.bind(_this);
      _this.handleUp = _this.handleUp.bind(_this);
      _this.handleMove = _this.handleMove.bind(_this);
      _this.handleWheel = _this.handleWheel.bind(_this);
      _this.handleOut = _this.handleOut.bind(_this);
      container.addEventListener("click", _this.handleClick, false);
      container.addEventListener("contextmenu", _this.handleRightClick, false);
      container.addEventListener("mousedown", _this.handleDown, false);
      container.addEventListener("wheel", _this.handleWheel, false);
      container.addEventListener("mouseout", _this.handleOut, false);
      document.addEventListener("mousemove", _this.handleMove, false);
      document.addEventListener("mouseup", _this.handleUp, false);
      return _this;
    }
    MouseCaptor2.prototype.kill = function() {
      var container = this.container;
      container.removeEventListener("click", this.handleClick);
      container.removeEventListener("contextmenu", this.handleRightClick);
      container.removeEventListener("mousedown", this.handleDown);
      container.removeEventListener("wheel", this.handleWheel);
      container.removeEventListener("mouseout", this.handleOut);
      document.removeEventListener("mousemove", this.handleMove);
      document.removeEventListener("mouseup", this.handleUp);
    };
    MouseCaptor2.prototype.handleClick = function(e) {
      var _this = this;
      if (!this.enabled)
        return;
      this.clicks++;
      if (this.clicks === 2) {
        this.clicks = 0;
        if (typeof this.doubleClickTimeout === "number") {
          clearTimeout(this.doubleClickTimeout);
          this.doubleClickTimeout = null;
        }
        return this.handleDoubleClick(e);
      }
      setTimeout(function() {
        _this.clicks = 0;
        _this.doubleClickTimeout = null;
      }, DOUBLE_CLICK_TIMEOUT);
      if (this.draggedEvents < DRAGGED_EVENTS_TOLERANCE)
        this.emit("click", (0, captor_1.getMouseCoords)(e, this.container));
    };
    MouseCaptor2.prototype.handleRightClick = function(e) {
      if (!this.enabled)
        return;
      this.emit("rightClick", (0, captor_1.getMouseCoords)(e, this.container));
    };
    MouseCaptor2.prototype.handleDoubleClick = function(e) {
      if (!this.enabled)
        return;
      e.preventDefault();
      e.stopPropagation();
      var mouseCoords = (0, captor_1.getMouseCoords)(e, this.container);
      this.emit("doubleClick", mouseCoords);
      if (mouseCoords.sigmaDefaultPrevented)
        return;
      var camera = this.renderer.getCamera();
      var newRatio = camera.getBoundedRatio(camera.getState().ratio / DOUBLE_CLICK_ZOOMING_RATIO);
      camera.animate(this.renderer.getViewportZoomedState((0, captor_1.getPosition)(e, this.container), newRatio), {
        easing: "quadraticInOut",
        duration: DOUBLE_CLICK_ZOOMING_DURATION
      });
    };
    MouseCaptor2.prototype.handleDown = function(e) {
      if (!this.enabled)
        return;
      if (e.button === 0) {
        this.startCameraState = this.renderer.getCamera().getState();
        var _a = (0, captor_1.getPosition)(e, this.container), x2 = _a.x, y2 = _a.y;
        this.lastMouseX = x2;
        this.lastMouseY = y2;
        this.draggedEvents = 0;
        this.downStartTime = Date.now();
        this.isMouseDown = true;
      }
      this.emit("mousedown", (0, captor_1.getMouseCoords)(e, this.container));
    };
    MouseCaptor2.prototype.handleUp = function(e) {
      var _this = this;
      if (!this.enabled || !this.isMouseDown)
        return;
      var camera = this.renderer.getCamera();
      this.isMouseDown = false;
      if (typeof this.movingTimeout === "number") {
        clearTimeout(this.movingTimeout);
        this.movingTimeout = null;
      }
      var _a = (0, captor_1.getPosition)(e, this.container), x2 = _a.x, y2 = _a.y;
      var cameraState = camera.getState(), previousCameraState = camera.getPreviousState() || { x: 0, y: 0 };
      if (this.isMoving) {
        camera.animate({
          x: cameraState.x + MOUSE_INERTIA_RATIO * (cameraState.x - previousCameraState.x),
          y: cameraState.y + MOUSE_INERTIA_RATIO * (cameraState.y - previousCameraState.y)
        }, {
          duration: MOUSE_INERTIA_DURATION,
          easing: "quadraticOut"
        });
      } else if (this.lastMouseX !== x2 || this.lastMouseY !== y2) {
        camera.setState({
          x: cameraState.x,
          y: cameraState.y
        });
      }
      this.isMoving = false;
      setTimeout(function() {
        _this.draggedEvents = 0;
        _this.renderer.refresh();
      }, 0);
      this.emit("mouseup", (0, captor_1.getMouseCoords)(e, this.container));
    };
    MouseCaptor2.prototype.handleMove = function(e) {
      var _this = this;
      if (!this.enabled)
        return;
      var mouseCoords = (0, captor_1.getMouseCoords)(e, this.container);
      this.emit("mousemovebody", mouseCoords);
      if (e.target === this.container) {
        this.emit("mousemove", mouseCoords);
      }
      if (mouseCoords.sigmaDefaultPrevented)
        return;
      if (this.isMouseDown) {
        this.isMoving = true;
        this.draggedEvents++;
        if (typeof this.movingTimeout === "number") {
          clearTimeout(this.movingTimeout);
        }
        this.movingTimeout = window.setTimeout(function() {
          _this.movingTimeout = null;
          _this.isMoving = false;
        }, DRAG_TIMEOUT);
        var camera = this.renderer.getCamera();
        var _a = (0, captor_1.getPosition)(e, this.container), eX = _a.x, eY = _a.y;
        var lastMouse = this.renderer.viewportToFramedGraph({
          x: this.lastMouseX,
          y: this.lastMouseY
        });
        var mouse = this.renderer.viewportToFramedGraph({ x: eX, y: eY });
        var offsetX = lastMouse.x - mouse.x, offsetY = lastMouse.y - mouse.y;
        var cameraState = camera.getState();
        var x2 = cameraState.x + offsetX, y2 = cameraState.y + offsetY;
        camera.setState({ x: x2, y: y2 });
        this.lastMouseX = eX;
        this.lastMouseY = eY;
        e.preventDefault();
        e.stopPropagation();
      }
    };
    MouseCaptor2.prototype.handleWheel = function(e) {
      var _this = this;
      if (!this.enabled)
        return;
      e.preventDefault();
      e.stopPropagation();
      var delta = (0, captor_1.getWheelDelta)(e);
      if (!delta)
        return;
      var wheelCoords = (0, captor_1.getWheelCoords)(e, this.container);
      this.emit("wheel", wheelCoords);
      if (wheelCoords.sigmaDefaultPrevented)
        return;
      var ratioDiff = delta > 0 ? 1 / ZOOMING_RATIO : ZOOMING_RATIO;
      var camera = this.renderer.getCamera();
      var newRatio = camera.getBoundedRatio(camera.getState().ratio * ratioDiff);
      var wheelDirection = delta > 0 ? 1 : -1;
      var now = Date.now();
      if (this.currentWheelDirection === wheelDirection && this.lastWheelTriggerTime && now - this.lastWheelTriggerTime < MOUSE_ZOOM_DURATION / 5) {
        return;
      }
      camera.animate(this.renderer.getViewportZoomedState((0, captor_1.getPosition)(e, this.container), newRatio), {
        easing: "quadraticOut",
        duration: MOUSE_ZOOM_DURATION
      }, function() {
        _this.currentWheelDirection = 0;
      });
      this.currentWheelDirection = wheelDirection;
      this.lastWheelTriggerTime = now;
    };
    MouseCaptor2.prototype.handleOut = function() {
    };
    return MouseCaptor2;
  }(captor_1.default);
  exports.default = MouseCaptor;
});

// node_modules/sigma/core/quadtree.js
var require_quadtree = __commonJS((exports) => {
  var isRectangleAligned = function(rect) {
    return rect.x1 === rect.x2 || rect.y1 === rect.y2;
  };
  var getCircumscribedAlignedRectangle = function(rect) {
    var width = Math.sqrt(Math.pow(rect.x2 - rect.x1, 2) + Math.pow(rect.y2 - rect.y1, 2));
    var heightVector = {
      x: (rect.y1 - rect.y2) * rect.height / width,
      y: (rect.x2 - rect.x1) * rect.height / width
    };
    var tl = { x: rect.x1, y: rect.y1 };
    var tr = { x: rect.x2, y: rect.y2 };
    var bl = {
      x: rect.x1 + heightVector.x,
      y: rect.y1 + heightVector.y
    };
    var br = {
      x: rect.x2 + heightVector.x,
      y: rect.y2 + heightVector.y
    };
    var xL = Math.min(tl.x, tr.x, bl.x, br.x);
    var xR = Math.max(tl.x, tr.x, bl.x, br.x);
    var yT = Math.min(tl.y, tr.y, bl.y, br.y);
    var yB = Math.max(tl.y, tr.y, bl.y, br.y);
    return {
      x1: xL,
      y1: yT,
      x2: xR,
      y2: yT,
      height: yB - yT
    };
  };
  var squareCollidesWithQuad = function(x1, y1, w2, qx, qy, qw, qh) {
    return x1 < qx + qw && x1 + w2 > qx && y1 < qy + qh && y1 + w2 > qy;
  };
  var rectangleCollidesWithQuad = function(x1, y1, w2, h2, qx, qy, qw, qh) {
    return x1 < qx + qw && x1 + w2 > qx && y1 < qy + qh && y1 + h2 > qy;
  };
  var pointIsInQuad = function(x2, y2, qx, qy, qw, qh) {
    var xmp = qx + qw / 2, ymp = qy + qh / 2, top = y2 < ymp, left = x2 < xmp;
    return top ? left ? TOP_LEFT : TOP_RIGHT : left ? BOTTOM_LEFT : BOTTOM_RIGHT;
  };
  var buildQuadrants = function(maxLevel, data) {
    var stack = [0, 0];
    while (stack.length) {
      var level = stack.pop(), block = stack.pop();
      var topLeftBlock = 4 * block + BLOCKS, topRightBlock = 4 * block + 2 * BLOCKS, bottomLeftBlock = 4 * block + 3 * BLOCKS, bottomRightBlock = 4 * block + 4 * BLOCKS;
      var x2 = data[block + X_OFFSET], y2 = data[block + Y_OFFSET], width = data[block + WIDTH_OFFSET], height = data[block + HEIGHT_OFFSET], hw = width / 2, hh = height / 2;
      data[topLeftBlock + X_OFFSET] = x2;
      data[topLeftBlock + Y_OFFSET] = y2;
      data[topLeftBlock + WIDTH_OFFSET] = hw;
      data[topLeftBlock + HEIGHT_OFFSET] = hh;
      data[topRightBlock + X_OFFSET] = x2 + hw;
      data[topRightBlock + Y_OFFSET] = y2;
      data[topRightBlock + WIDTH_OFFSET] = hw;
      data[topRightBlock + HEIGHT_OFFSET] = hh;
      data[bottomLeftBlock + X_OFFSET] = x2;
      data[bottomLeftBlock + Y_OFFSET] = y2 + hh;
      data[bottomLeftBlock + WIDTH_OFFSET] = hw;
      data[bottomLeftBlock + HEIGHT_OFFSET] = hh;
      data[bottomRightBlock + X_OFFSET] = x2 + hw;
      data[bottomRightBlock + Y_OFFSET] = y2 + hh;
      data[bottomRightBlock + WIDTH_OFFSET] = hw;
      data[bottomRightBlock + HEIGHT_OFFSET] = hh;
      if (level < maxLevel - 1) {
        stack.push(bottomRightBlock, level + 1);
        stack.push(bottomLeftBlock, level + 1);
        stack.push(topRightBlock, level + 1);
        stack.push(topLeftBlock, level + 1);
      }
    }
  };
  var insertNode = function(maxLevel, data, containers, key, x2, y2, size) {
    var x1 = x2 - size, y1 = y2 - size, w2 = size * 2;
    var level = 0, block = 0;
    while (true) {
      if (level >= maxLevel) {
        containers[block] = containers[block] || [];
        containers[block].push(key);
        return;
      }
      var topLeftBlock = 4 * block + BLOCKS, topRightBlock = 4 * block + 2 * BLOCKS, bottomLeftBlock = 4 * block + 3 * BLOCKS, bottomRightBlock = 4 * block + 4 * BLOCKS;
      var collidingWithTopLeft = squareCollidesWithQuad(x1, y1, w2, data[topLeftBlock + X_OFFSET], data[topLeftBlock + Y_OFFSET], data[topLeftBlock + WIDTH_OFFSET], data[topLeftBlock + HEIGHT_OFFSET]);
      var collidingWithTopRight = squareCollidesWithQuad(x1, y1, w2, data[topRightBlock + X_OFFSET], data[topRightBlock + Y_OFFSET], data[topRightBlock + WIDTH_OFFSET], data[topRightBlock + HEIGHT_OFFSET]);
      var collidingWithBottomLeft = squareCollidesWithQuad(x1, y1, w2, data[bottomLeftBlock + X_OFFSET], data[bottomLeftBlock + Y_OFFSET], data[bottomLeftBlock + WIDTH_OFFSET], data[bottomLeftBlock + HEIGHT_OFFSET]);
      var collidingWithBottomRight = squareCollidesWithQuad(x1, y1, w2, data[bottomRightBlock + X_OFFSET], data[bottomRightBlock + Y_OFFSET], data[bottomRightBlock + WIDTH_OFFSET], data[bottomRightBlock + HEIGHT_OFFSET]);
      var collisions = [
        collidingWithTopLeft,
        collidingWithTopRight,
        collidingWithBottomLeft,
        collidingWithBottomRight
      ].reduce(function(acc, current) {
        if (current)
          return acc + 1;
        else
          return acc;
      }, 0);
      if (collisions === 0 && level === 0) {
        containers[OUTSIDE_BLOCK].push(key);
        if (!hasWarnedTooMuchOutside && containers[OUTSIDE_BLOCK].length >= 5) {
          hasWarnedTooMuchOutside = true;
          console.warn("sigma/quadtree.insertNode: At least 5 nodes are outside the global quadtree zone. You might have a problem with the normalization function or the custom bounding box.");
        }
        return;
      }
      if (collisions === 0)
        throw new Error("sigma/quadtree.insertNode: no collision (level: ".concat(level, ", key: ").concat(key, ", x: ").concat(x2, ", y: ").concat(y2, ", size: ").concat(size, ")."));
      if (collisions === 3)
        throw new Error("sigma/quadtree.insertNode: 3 impossible collisions (level: ".concat(level, ", key: ").concat(key, ", x: ").concat(x2, ", y: ").concat(y2, ", size: ").concat(size, ")."));
      if (collisions > 1) {
        containers[block] = containers[block] || [];
        containers[block].push(key);
        return;
      } else {
        level++;
      }
      if (collidingWithTopLeft)
        block = topLeftBlock;
      if (collidingWithTopRight)
        block = topRightBlock;
      if (collidingWithBottomLeft)
        block = bottomLeftBlock;
      if (collidingWithBottomRight)
        block = bottomRightBlock;
    }
  };
  var getNodesInAxisAlignedRectangleArea = function(maxLevel, data, containers, x1, y1, w2, h2) {
    var stack = [0, 0];
    var collectedNodes = [];
    var container;
    while (stack.length) {
      var level = stack.pop(), block = stack.pop();
      container = containers[block];
      if (container)
        (0, extend_1.default)(collectedNodes, container);
      if (level >= maxLevel)
        continue;
      var topLeftBlock = 4 * block + BLOCKS, topRightBlock = 4 * block + 2 * BLOCKS, bottomLeftBlock = 4 * block + 3 * BLOCKS, bottomRightBlock = 4 * block + 4 * BLOCKS;
      var collidingWithTopLeft = rectangleCollidesWithQuad(x1, y1, w2, h2, data[topLeftBlock + X_OFFSET], data[topLeftBlock + Y_OFFSET], data[topLeftBlock + WIDTH_OFFSET], data[topLeftBlock + HEIGHT_OFFSET]);
      var collidingWithTopRight = rectangleCollidesWithQuad(x1, y1, w2, h2, data[topRightBlock + X_OFFSET], data[topRightBlock + Y_OFFSET], data[topRightBlock + WIDTH_OFFSET], data[topRightBlock + HEIGHT_OFFSET]);
      var collidingWithBottomLeft = rectangleCollidesWithQuad(x1, y1, w2, h2, data[bottomLeftBlock + X_OFFSET], data[bottomLeftBlock + Y_OFFSET], data[bottomLeftBlock + WIDTH_OFFSET], data[bottomLeftBlock + HEIGHT_OFFSET]);
      var collidingWithBottomRight = rectangleCollidesWithQuad(x1, y1, w2, h2, data[bottomRightBlock + X_OFFSET], data[bottomRightBlock + Y_OFFSET], data[bottomRightBlock + WIDTH_OFFSET], data[bottomRightBlock + HEIGHT_OFFSET]);
      if (collidingWithTopLeft)
        stack.push(topLeftBlock, level + 1);
      if (collidingWithTopRight)
        stack.push(topRightBlock, level + 1);
      if (collidingWithBottomLeft)
        stack.push(bottomLeftBlock, level + 1);
      if (collidingWithBottomRight)
        stack.push(bottomRightBlock, level + 1);
    }
    return collectedNodes;
  };
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.rectangleCollidesWithQuad = exports.squareCollidesWithQuad = exports.getCircumscribedAlignedRectangle = exports.isRectangleAligned = undefined;
  var extend_1 = __importDefault(require_extend());
  var BLOCKS = 4;
  var MAX_LEVEL = 5;
  var OUTSIDE_BLOCK = 5460;
  var X_OFFSET = 0;
  var Y_OFFSET = 1;
  var WIDTH_OFFSET = 2;
  var HEIGHT_OFFSET = 3;
  var TOP_LEFT = 1;
  var TOP_RIGHT = 2;
  var BOTTOM_LEFT = 3;
  var BOTTOM_RIGHT = 4;
  var hasWarnedTooMuchOutside = false;
  exports.isRectangleAligned = isRectangleAligned;
  exports.getCircumscribedAlignedRectangle = getCircumscribedAlignedRectangle;
  exports.squareCollidesWithQuad = squareCollidesWithQuad;
  exports.rectangleCollidesWithQuad = rectangleCollidesWithQuad;
  var QuadTree = function() {
    function QuadTree2(params) {
      var _a;
      if (params === undefined) {
        params = {};
      }
      this.containers = (_a = {}, _a[OUTSIDE_BLOCK] = [], _a);
      this.cache = null;
      this.lastRectangle = null;
      var L2 = Math.pow(4, MAX_LEVEL);
      this.data = new Float32Array(BLOCKS * ((4 * L2 - 1) / 3));
      if (params.boundaries)
        this.resize(params.boundaries);
      else
        this.resize({
          x: 0,
          y: 0,
          width: 1,
          height: 1
        });
    }
    QuadTree2.prototype.add = function(key, x2, y2, size) {
      insertNode(MAX_LEVEL, this.data, this.containers, key, x2, y2, size);
      return this;
    };
    QuadTree2.prototype.resize = function(boundaries) {
      this.clear();
      this.data[X_OFFSET] = boundaries.x;
      this.data[Y_OFFSET] = boundaries.y;
      this.data[WIDTH_OFFSET] = boundaries.width;
      this.data[HEIGHT_OFFSET] = boundaries.height;
      buildQuadrants(MAX_LEVEL, this.data);
    };
    QuadTree2.prototype.clear = function() {
      var _a;
      this.containers = (_a = {}, _a[OUTSIDE_BLOCK] = [], _a);
      return this;
    };
    QuadTree2.prototype.point = function(x2, y2) {
      var nodes = this.containers[OUTSIDE_BLOCK].slice();
      var block = 0, level = 0;
      do {
        if (this.containers[block])
          (0, extend_1.default)(nodes, this.containers[block]);
        var quad = pointIsInQuad(x2, y2, this.data[block + X_OFFSET], this.data[block + Y_OFFSET], this.data[block + WIDTH_OFFSET], this.data[block + HEIGHT_OFFSET]);
        block = 4 * block + quad * BLOCKS;
        level++;
      } while (level <= MAX_LEVEL);
      return nodes;
    };
    QuadTree2.prototype.rectangle = function(x1, y1, x2, y2, height) {
      var lr = this.lastRectangle;
      if (lr && x1 === lr.x1 && x2 === lr.x2 && y1 === lr.y1 && y2 === lr.y2 && height === lr.height) {
        return this.cache;
      }
      this.lastRectangle = {
        x1,
        y1,
        x2,
        y2,
        height
      };
      if (!isRectangleAligned(this.lastRectangle))
        this.lastRectangle = getCircumscribedAlignedRectangle(this.lastRectangle);
      this.cache = getNodesInAxisAlignedRectangleArea(MAX_LEVEL, this.data, this.containers, x1, y1, Math.abs(x1 - x2) || Math.abs(y1 - y2), height);
      (0, extend_1.default)(this.cache, this.containers[OUTSIDE_BLOCK]);
      return this.cache;
    };
    return QuadTree2;
  }();
  exports.default = QuadTree;
});

// node_modules/sigma/core/labels.js
var require_labels = __commonJS((exports) => {
  var edgeLabelsToDisplayFromNodes = function(params) {
    var { graph, hoveredNode, highlightedNodes, displayedNodeLabels } = params;
    var worthyEdges = [];
    graph.forEachEdge(function(edge, _2, source, target) {
      if (source === hoveredNode || target === hoveredNode || highlightedNodes.has(source) || highlightedNodes.has(target) || displayedNodeLabels.has(source) && displayedNodeLabels.has(target)) {
        worthyEdges.push(edge);
      }
    });
    return worthyEdges;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.edgeLabelsToDisplayFromNodes = exports.LabelGrid = undefined;
  var LabelCandidate = function() {
    function LabelCandidate2(key, size) {
      this.key = key;
      this.size = size;
    }
    LabelCandidate2.compare = function(first, second) {
      if (first.size > second.size)
        return -1;
      if (first.size < second.size)
        return 1;
      if (first.key > second.key)
        return 1;
      return -1;
    };
    return LabelCandidate2;
  }();
  var LabelGrid = function() {
    function LabelGrid2() {
      this.width = 0;
      this.height = 0;
      this.cellSize = 0;
      this.columns = 0;
      this.rows = 0;
      this.cells = {};
    }
    LabelGrid2.prototype.resizeAndClear = function(dimensions, cellSize) {
      this.width = dimensions.width;
      this.height = dimensions.height;
      this.cellSize = cellSize;
      this.columns = Math.ceil(dimensions.width / cellSize);
      this.rows = Math.ceil(dimensions.height / cellSize);
      this.cells = {};
    };
    LabelGrid2.prototype.getIndex = function(pos) {
      var xIndex = Math.floor(pos.x / this.cellSize);
      var yIndex = Math.floor(pos.y / this.cellSize);
      return yIndex * this.columns + xIndex;
    };
    LabelGrid2.prototype.add = function(key, size, pos) {
      var candidate = new LabelCandidate(key, size);
      var index = this.getIndex(pos);
      var cell = this.cells[index];
      if (!cell) {
        cell = [];
        this.cells[index] = cell;
      }
      cell.push(candidate);
    };
    LabelGrid2.prototype.organize = function() {
      for (var k in this.cells) {
        var cell = this.cells[k];
        cell.sort(LabelCandidate.compare);
      }
    };
    LabelGrid2.prototype.getLabelsToDisplay = function(ratio, density) {
      var cellArea = this.cellSize * this.cellSize;
      var scaledCellArea = cellArea / ratio / ratio;
      var scaledDensity = scaledCellArea * density / cellArea;
      var labelsToDisplayPerCell = Math.ceil(scaledDensity);
      var labels = [];
      for (var k in this.cells) {
        var cell = this.cells[k];
        for (var i = 0;i < Math.min(labelsToDisplayPerCell, cell.length); i++) {
          labels.push(cell[i].key);
        }
      }
      return labels;
    };
    return LabelGrid2;
  }();
  exports.LabelGrid = LabelGrid;
  exports.edgeLabelsToDisplayFromNodes = edgeLabelsToDisplayFromNodes;
});

// node_modules/sigma/rendering/canvas/label.js
var require_label = __commonJS((exports) => {
  var drawLabel = function(context, data, settings) {
    if (!data.label)
      return;
    var { labelSize: size, labelFont: font, labelWeight: weight } = settings, color = settings.labelColor.attribute ? data[settings.labelColor.attribute] || settings.labelColor.color || "#000" : settings.labelColor.color;
    context.fillStyle = color;
    context.font = "".concat(weight, " ").concat(size, "px ").concat(font);
    context.fillText(data.label, data.x + data.size + 3, data.y + size / 3);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = drawLabel;
});

// node_modules/sigma/rendering/canvas/hover.js
var require_hover = __commonJS((exports) => {
  var drawHover = function(context, data, settings) {
    var { labelSize: size, labelFont: font, labelWeight: weight } = settings;
    context.font = "".concat(weight, " ").concat(size, "px ").concat(font);
    context.fillStyle = "#FFF";
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.shadowBlur = 8;
    context.shadowColor = "#000";
    var PADDING = 2;
    if (typeof data.label === "string") {
      var textWidth = context.measureText(data.label).width, boxWidth = Math.round(textWidth + 5), boxHeight = Math.round(size + 2 * PADDING), radius = Math.max(data.size, size / 2) + PADDING;
      var angleRadian = Math.asin(boxHeight / 2 / radius);
      var xDeltaCoord = Math.sqrt(Math.abs(Math.pow(radius, 2) - Math.pow(boxHeight / 2, 2)));
      context.beginPath();
      context.moveTo(data.x + xDeltaCoord, data.y + boxHeight / 2);
      context.lineTo(data.x + radius + boxWidth, data.y + boxHeight / 2);
      context.lineTo(data.x + radius + boxWidth, data.y - boxHeight / 2);
      context.lineTo(data.x + xDeltaCoord, data.y - boxHeight / 2);
      context.arc(data.x, data.y, radius, angleRadian, -angleRadian);
      context.closePath();
      context.fill();
    } else {
      context.beginPath();
      context.arc(data.x, data.y, data.size + PADDING, 0, Math.PI * 2);
      context.closePath();
      context.fill();
    }
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.shadowBlur = 0;
    (0, label_1.default)(context, data, settings);
  };
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var label_1 = __importDefault(require_label());
  exports.default = drawHover;
});

// node_modules/sigma/rendering/canvas/edge-label.js
var require_edge_label = __commonJS((exports) => {
  var drawEdgeLabel = function(context, edgeData, sourceData, targetData, settings) {
    var { edgeLabelSize: size, edgeLabelFont: font, edgeLabelWeight: weight } = settings, color = settings.edgeLabelColor.attribute ? edgeData[settings.edgeLabelColor.attribute] || settings.edgeLabelColor.color || "#000" : settings.edgeLabelColor.color;
    var label = edgeData.label;
    if (!label)
      return;
    context.fillStyle = color;
    context.font = "".concat(weight, " ").concat(size, "px ").concat(font);
    var sSize = sourceData.size;
    var tSize = targetData.size;
    var sx = sourceData.x;
    var sy = sourceData.y;
    var tx = targetData.x;
    var ty = targetData.y;
    var cx = (sx + tx) / 2;
    var cy = (sy + ty) / 2;
    var dx = tx - sx;
    var dy = ty - sy;
    var d2 = Math.sqrt(dx * dx + dy * dy);
    if (d2 < sSize + tSize)
      return;
    sx += dx * sSize / d2;
    sy += dy * sSize / d2;
    tx -= dx * tSize / d2;
    ty -= dy * tSize / d2;
    cx = (sx + tx) / 2;
    cy = (sy + ty) / 2;
    dx = tx - sx;
    dy = ty - sy;
    d2 = Math.sqrt(dx * dx + dy * dy);
    var textLength = context.measureText(label).width;
    if (textLength > d2) {
      var ellipsis = "\u2026";
      label = label + ellipsis;
      textLength = context.measureText(label).width;
      while (textLength > d2 && label.length > 1) {
        label = label.slice(0, -2) + ellipsis;
        textLength = context.measureText(label).width;
      }
      if (label.length < 4)
        return;
    }
    var angle;
    if (dx > 0) {
      if (dy > 0)
        angle = Math.acos(dx / d2);
      else
        angle = Math.asin(dy / d2);
    } else {
      if (dy > 0)
        angle = Math.acos(dx / d2) + Math.PI;
      else
        angle = Math.asin(dx / d2) + Math.PI / 2;
    }
    context.save();
    context.translate(cx, cy);
    context.rotate(angle);
    context.fillText(label, -textLength / 2, edgeData.size / 2 + size);
    context.restore();
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = drawEdgeLabel;
});

// node_modules/sigma/rendering/webgl/shaders/utils.js
var require_utils2 = __commonJS((exports) => {
  var loadShader = function(type, gl, source) {
    var glType = type === "VERTEX" ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER;
    var shader = gl.createShader(glType);
    if (shader === null) {
      throw new Error("loadShader: error while creating the shader");
    }
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    var successfullyCompiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!successfullyCompiled) {
      var infoLog = gl.getShaderInfoLog(shader);
      gl.deleteShader(shader);
      throw new Error("loadShader: error while compiling the shader:\n".concat(infoLog, "\n").concat(source));
    }
    return shader;
  };
  var loadVertexShader = function(gl, source) {
    return loadShader("VERTEX", gl, source);
  };
  var loadFragmentShader = function(gl, source) {
    return loadShader("FRAGMENT", gl, source);
  };
  var loadProgram = function(gl, shaders) {
    var program = gl.createProgram();
    if (program === null) {
      throw new Error("loadProgram: error while creating the program.");
    }
    var i, l2;
    for (i = 0, l2 = shaders.length;i < l2; i++)
      gl.attachShader(program, shaders[i]);
    gl.linkProgram(program);
    var successfullyLinked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!successfullyLinked) {
      gl.deleteProgram(program);
      throw new Error("loadProgram: error while linking the program.");
    }
    return program;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.loadProgram = exports.loadFragmentShader = exports.loadVertexShader = undefined;
  exports.loadVertexShader = loadVertexShader;
  exports.loadFragmentShader = loadFragmentShader;
  exports.loadProgram = loadProgram;
});

// node_modules/sigma/rendering/webgl/programs/common/program.js
var require_program = __commonJS((exports) => {
  var _a;
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Program = exports.AbstractProgram = undefined;
  var utils_1 = require_utils();
  var utils_2 = require_utils2();
  var SIZE_FACTOR_PER_ATTRIBUTE_TYPE = (_a = {}, _a[WebGL2RenderingContext.BOOL] = 1, _a[WebGL2RenderingContext.BYTE] = 1, _a[WebGL2RenderingContext.UNSIGNED_BYTE] = 1, _a[WebGL2RenderingContext.SHORT] = 2, _a[WebGL2RenderingContext.UNSIGNED_SHORT] = 2, _a[WebGL2RenderingContext.INT] = 4, _a[WebGL2RenderingContext.UNSIGNED_INT] = 4, _a[WebGL2RenderingContext.FLOAT] = 4, _a);
  var AbstractProgram = function() {
    function AbstractProgram2(_gl, _renderer) {
    }
    return AbstractProgram2;
  }();
  exports.AbstractProgram = AbstractProgram;
  var Program = function() {
    function Program2(gl, renderer) {
      var _this = this;
      this.array = new Float32Array;
      this.indicesArray = null;
      this.uniformLocations = {};
      this.attributeLocations = {};
      this.capacity = 0;
      this.verticesCount = 0;
      var definition = this.getDefinition();
      this.VERTICES = definition.VERTICES;
      this.ARRAY_ITEMS_PER_VERTEX = definition.ARRAY_ITEMS_PER_VERTEX;
      this.VERTEX_SHADER_SOURCE = definition.VERTEX_SHADER_SOURCE;
      this.FRAGMENT_SHADER_SOURCE = definition.FRAGMENT_SHADER_SOURCE;
      this.UNIFORMS = definition.UNIFORMS;
      this.ATTRIBUTES = definition.ATTRIBUTES;
      this.STRIDE = this.VERTICES * this.ARRAY_ITEMS_PER_VERTEX;
      this.gl = gl;
      this.renderer = renderer;
      var buffer = gl.createBuffer();
      if (buffer === null)
        throw new Error("Program: error while creating the webgl buffer.");
      this.buffer = buffer;
      var indicesBuffer = gl.createBuffer();
      if (indicesBuffer === null)
        throw new Error("Program: error while creating the webgl indices buffer.");
      this.indicesBuffer = indicesBuffer;
      this.vertexShader = (0, utils_2.loadVertexShader)(this.gl, this.VERTEX_SHADER_SOURCE);
      this.fragmentShader = (0, utils_2.loadFragmentShader)(this.gl, this.FRAGMENT_SHADER_SOURCE);
      this.program = (0, utils_2.loadProgram)(this.gl, [this.vertexShader, this.fragmentShader]);
      this.canUse32BitsIndices = (0, utils_1.canUse32BitsIndices)(this.gl);
      this.indicesType = this.canUse32BitsIndices ? gl.UNSIGNED_INT : gl.UNSIGNED_SHORT;
      this.IndicesArray = this.canUse32BitsIndices ? Uint32Array : Uint16Array;
      this.UNIFORMS.forEach(function(uniformName) {
        var location = _this.gl.getUniformLocation(_this.program, uniformName);
        if (location === null)
          throw new Error("Program: error while getting location for uniform \"".concat(uniformName, "\"."));
        _this.uniformLocations[uniformName] = location;
      });
      this.ATTRIBUTES.forEach(function(attr) {
        var location = _this.gl.getAttribLocation(_this.program, attr.name);
        if (location === -1)
          throw new Error("Program: error while getting location for attribute \"".concat(attr.name, "\"."));
        _this.attributeLocations[attr.name] = location;
      });
    }
    Program2.prototype.bind = function() {
      var _this = this;
      var gl = this.gl;
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
      if (this.indicesArray) {
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indicesBuffer);
      }
      for (var attributeName in this.attributeLocations) {
        gl.enableVertexAttribArray(this.attributeLocations[attributeName]);
      }
      var offset = 0;
      this.ATTRIBUTES.forEach(function(attr) {
        var location = _this.attributeLocations[attr.name];
        gl.vertexAttribPointer(location, attr.size, attr.type, attr.normalized || false, _this.ARRAY_ITEMS_PER_VERTEX * Float32Array.BYTES_PER_ELEMENT, offset);
        var sizeFactor = SIZE_FACTOR_PER_ATTRIBUTE_TYPE[attr.type];
        if (typeof sizeFactor !== "number")
          throw new Error("Program.bind: yet unsupported attribute type \"".concat(attr.type, "\"!"));
        offset += attr.size * sizeFactor;
      });
    };
    Program2.prototype.bufferData = function() {
      var gl = this.gl;
      this.gl.bufferData(gl.ARRAY_BUFFER, this.array, gl.DYNAMIC_DRAW);
      if (this.indicesArray) {
        this.gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indicesArray, gl.STATIC_DRAW);
      }
    };
    Program2.prototype.reallocateIndices = function() {
      return;
    };
    Program2.prototype.reallocate = function(capacity) {
      if (capacity === this.capacity)
        return;
      this.capacity = capacity;
      this.verticesCount = this.VERTICES * capacity;
      this.array = new Float32Array(this.verticesCount * this.ARRAY_ITEMS_PER_VERTEX);
      if (typeof this.reallocateIndices === "function")
        this.reallocateIndices();
    };
    Program2.prototype.hasNothingToRender = function() {
      return this.verticesCount === 0;
    };
    Program2.prototype.render = function(params) {
      if (this.hasNothingToRender())
        return;
      this.bind();
      this.bufferData();
      this.gl.useProgram(this.program);
      this.draw(params);
    };
    return Program2;
  }();
  exports.Program = Program;
});

// node_modules/sigma/rendering/webgl/programs/common/node.js
var require_node = __commonJS((exports) => {
  var createNodeCompoundProgram = function(programClasses) {
    return function() {
      function NodeCompoundProgram(gl, renderer) {
        this.programs = programClasses.map(function(Program) {
          return new Program(gl, renderer);
        });
      }
      NodeCompoundProgram.prototype.reallocate = function(capacity) {
        this.programs.forEach(function(program) {
          return program.reallocate(capacity);
        });
      };
      NodeCompoundProgram.prototype.process = function(offset, data) {
        this.programs.forEach(function(program) {
          return program.process(offset, data);
        });
      };
      NodeCompoundProgram.prototype.render = function(params) {
        this.programs.forEach(function(program) {
          return program.render(params);
        });
      };
      return NodeCompoundProgram;
    }();
  };
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d2, b2) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
        d3.__proto__ = b3;
      } || function(d3, b3) {
        for (var p in b3)
          if (Object.prototype.hasOwnProperty.call(b3, p))
            d3[p] = b3[p];
      };
      return extendStatics(d2, b2);
    };
    return function(d2, b2) {
      if (typeof b2 !== "function" && b2 !== null)
        throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
      extendStatics(d2, b2);
      function __() {
        this.constructor = d2;
      }
      d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __);
    };
  }();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createNodeCompoundProgram = exports.NodeProgram = exports.AbstractNodeProgram = undefined;
  var program_1 = require_program();
  var AbstractNodeProgram = function(_super) {
    __extends(AbstractNodeProgram2, _super);
    function AbstractNodeProgram2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    return AbstractNodeProgram2;
  }(program_1.AbstractProgram);
  exports.AbstractNodeProgram = AbstractNodeProgram;
  var NodeProgram = function(_super) {
    __extends(NodeProgram2, _super);
    function NodeProgram2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    NodeProgram2.prototype.process = function(offset, data) {
      var i = offset * this.STRIDE;
      if (data.hidden) {
        for (var l2 = i + this.STRIDE;i < l2; i++) {
          this.array[i] = 0;
        }
        return;
      }
      return this.processVisibleItem(i, data);
    };
    return NodeProgram2;
  }(program_1.Program);
  exports.NodeProgram = NodeProgram;
  exports.createNodeCompoundProgram = createNodeCompoundProgram;
});

// node_modules/sigma/rendering/webgl/shaders/node.point.vert.glsl.js
var require_node_point_vert_glsl = __commonJS((exports, module) => {
  (() => {
    var o2 = { d: (t2, e2) => {
      for (var n in e2)
        o2.o(e2, n) && !o2.o(t2, n) && Object.defineProperty(t2, n, { enumerable: true, get: e2[n] });
    }, o: (o3, t2) => Object.prototype.hasOwnProperty.call(o3, t2), r: (o3) => {
      typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(o3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(o3, "__esModule", { value: true });
    } }, t = {};
    o2.r(t), o2.d(t, { default: () => e });
    const e = "attribute vec2 a_position;\nattribute float a_size;\nattribute vec4 a_color;\n\nuniform float u_sizeRatio;\nuniform float u_pixelRatio;\nuniform mat3 u_matrix;\n\nvarying vec4 v_color;\nvarying float v_border;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  gl_Position = vec4(\n    (u_matrix * vec3(a_position, 1)).xy,\n    0,\n    1\n  );\n\n  // Multiply the point size twice:\n  //  - x SCALING_RATIO to correct the canvas scaling\n  //  - x 2 to correct the formulae\n  gl_PointSize = a_size / u_sizeRatio * u_pixelRatio * 2.0;\n\n  v_border = (0.5 / a_size) * u_sizeRatio;\n\n  // Extract the color:\n  v_color = a_color;\n  v_color.a *= bias;\n}\n";
    module.exports = t;
  })();
});

// node_modules/sigma/rendering/webgl/shaders/node.point.frag.glsl.js
var require_node_point_frag_glsl = __commonJS((exports, module) => {
  (() => {
    var e = { d: (n2, o3) => {
      for (var t in o3)
        e.o(o3, t) && !e.o(n2, t) && Object.defineProperty(n2, t, { enumerable: true, get: o3[t] });
    }, o: (e2, n2) => Object.prototype.hasOwnProperty.call(e2, n2), r: (e2) => {
      typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
    } }, n = {};
    e.r(n), e.d(n, { default: () => o2 });
    const o2 = "precision mediump float;\n\nvarying vec4 v_color;\nvarying float v_border;\n\nconst float radius = 0.5;\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  vec2 m = gl_PointCoord - vec2(0.5, 0.5);\n  float dist = radius - length(m);\n\n  float t = 0.0;\n  if (dist > v_border)\n    t = 1.0;\n  else if (dist > 0.0)\n    t = dist / v_border;\n\n  gl_FragColor = mix(transparent, v_color, t);\n}\n";
    module.exports = n;
  })();
});

// node_modules/sigma/rendering/webgl/programs/node.point.js
var require_node_point = __commonJS((exports) => {
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d2, b2) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
        d3.__proto__ = b3;
      } || function(d3, b3) {
        for (var p in b3)
          if (Object.prototype.hasOwnProperty.call(b3, p))
            d3[p] = b3[p];
      };
      return extendStatics(d2, b2);
    };
    return function(d2, b2) {
      if (typeof b2 !== "function" && b2 !== null)
        throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
      extendStatics(d2, b2);
      function __() {
        this.constructor = d2;
      }
      d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __);
    };
  }();
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var utils_1 = require_utils();
  var node_1 = require_node();
  var node_point_vert_glsl_1 = __importDefault(require_node_point_vert_glsl());
  var node_point_frag_glsl_1 = __importDefault(require_node_point_frag_glsl());
  var UNSIGNED_BYTE = WebGLRenderingContext.UNSIGNED_BYTE;
  var FLOAT = WebGLRenderingContext.FLOAT;
  var UNIFORMS = ["u_sizeRatio", "u_pixelRatio", "u_matrix"];
  var NodePointProgram = function(_super) {
    __extends(NodePointProgram2, _super);
    function NodePointProgram2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    NodePointProgram2.prototype.getDefinition = function() {
      return {
        VERTICES: 1,
        ARRAY_ITEMS_PER_VERTEX: 4,
        VERTEX_SHADER_SOURCE: node_point_vert_glsl_1.default,
        FRAGMENT_SHADER_SOURCE: node_point_frag_glsl_1.default,
        UNIFORMS,
        ATTRIBUTES: [
          { name: "a_position", size: 2, type: FLOAT },
          { name: "a_size", size: 1, type: FLOAT },
          { name: "a_color", size: 4, type: UNSIGNED_BYTE, normalized: true }
        ]
      };
    };
    NodePointProgram2.prototype.processVisibleItem = function(i, data) {
      var array = this.array;
      array[i++] = data.x;
      array[i++] = data.y;
      array[i++] = data.size;
      array[i] = (0, utils_1.floatColor)(data.color);
    };
    NodePointProgram2.prototype.draw = function(params) {
      var gl = this.gl;
      var _a = this.uniformLocations, u_sizeRatio = _a.u_sizeRatio, u_pixelRatio = _a.u_pixelRatio, u_matrix = _a.u_matrix;
      gl.uniform1f(u_sizeRatio, params.sizeRatio);
      gl.uniform1f(u_pixelRatio, params.pixelRatio);
      gl.uniformMatrix3fv(u_matrix, false, params.matrix);
      gl.drawArrays(gl.POINTS, 0, this.verticesCount);
    };
    return NodePointProgram2;
  }(node_1.NodeProgram);
  exports.default = NodePointProgram;
});

// node_modules/sigma/rendering/webgl/programs/common/edge.js
var require_edge = __commonJS((exports) => {
  var createEdgeCompoundProgram = function(programClasses) {
    return function() {
      function EdgeCompoundProgram(gl, renderer) {
        this.programs = programClasses.map(function(Program) {
          return new Program(gl, renderer);
        });
      }
      EdgeCompoundProgram.prototype.reallocate = function(capacity) {
        this.programs.forEach(function(program) {
          return program.reallocate(capacity);
        });
      };
      EdgeCompoundProgram.prototype.process = function(offset, sourceData, targetData, data) {
        this.programs.forEach(function(program) {
          return program.process(offset, sourceData, targetData, data);
        });
      };
      EdgeCompoundProgram.prototype.render = function(params) {
        this.programs.forEach(function(program) {
          return program.render(params);
        });
      };
      return EdgeCompoundProgram;
    }();
  };
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d2, b2) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
        d3.__proto__ = b3;
      } || function(d3, b3) {
        for (var p in b3)
          if (Object.prototype.hasOwnProperty.call(b3, p))
            d3[p] = b3[p];
      };
      return extendStatics(d2, b2);
    };
    return function(d2, b2) {
      if (typeof b2 !== "function" && b2 !== null)
        throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
      extendStatics(d2, b2);
      function __() {
        this.constructor = d2;
      }
      d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __);
    };
  }();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createEdgeCompoundProgram = exports.EdgeProgram = exports.AbstractEdgeProgram = undefined;
  var program_1 = require_program();
  var AbstractEdgeProgram = function(_super) {
    __extends(AbstractEdgeProgram2, _super);
    function AbstractEdgeProgram2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    return AbstractEdgeProgram2;
  }(program_1.AbstractProgram);
  exports.AbstractEdgeProgram = AbstractEdgeProgram;
  var EdgeProgram = function(_super) {
    __extends(EdgeProgram2, _super);
    function EdgeProgram2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    EdgeProgram2.prototype.process = function(offset, sourceData, targetData, data) {
      var i = offset * this.STRIDE;
      if (data.hidden || sourceData.hidden || targetData.hidden) {
        for (var l2 = i + this.STRIDE;i < l2; i++) {
          this.array[i] = 0;
        }
        return;
      }
      return this.processVisibleItem(i, sourceData, targetData, data);
    };
    return EdgeProgram2;
  }(program_1.Program);
  exports.EdgeProgram = EdgeProgram;
  exports.createEdgeCompoundProgram = createEdgeCompoundProgram;
});

// node_modules/sigma/rendering/webgl/shaders/edge.rectangle.vert.glsl.js
var require_edge_rectangle_vert_glsl = __commonJS((exports, module) => {
  (() => {
    var e = { d: (n2, o3) => {
      for (var t in o3)
        e.o(o3, t) && !e.o(n2, t) && Object.defineProperty(n2, t, { enumerable: true, get: o3[t] });
    }, o: (e2, n2) => Object.prototype.hasOwnProperty.call(e2, n2), r: (e2) => {
      typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
    } }, n = {};
    e.r(n), e.d(n, { default: () => o2 });
    const o2 = 'attribute vec4 a_color;\nattribute vec2 a_normal;\nattribute vec2 a_position;\n\nuniform mat3 u_matrix;\nuniform float u_sizeRatio;\nuniform float u_zoomRatio;\nuniform float u_correctionRatio;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\n\nconst float minThickness = 1.7;\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float normalLength = length(a_normal);\n  vec2 unitNormal = a_normal / normalLength;\n\n  // We require edges to be at least `minThickness` pixels thick *on screen*\n  // (so we need to compensate the size ratio):\n  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);\n\n  // Then, we need to retrieve the normalized thickness of the edge in the WebGL\n  // referential (in a ([0, 1], [0, 1]) space), using our "magic" correction\n  // ratio:\n  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;\n\n  // Here is the proper position of the vertex\n  gl_Position = vec4((u_matrix * vec3(a_position + unitNormal * webGLThickness, 1)).xy, 0, 1);\n\n  // For the fragment shader though, we need a thickness that takes the "magic"\n  // correction ratio into account (as in webGLThickness), but so that the\n  // antialiasing effect does not depend on the zoom level. So here\'s yet\n  // another thickness version:\n  v_thickness = webGLThickness / u_zoomRatio;\n\n  v_normal = unitNormal;\n  v_color = a_color;\n  v_color.a *= bias;\n}\n';
    module.exports = n;
  })();
});

// node_modules/sigma/rendering/webgl/shaders/edge.rectangle.frag.glsl.js
var require_edge_rectangle_frag_glsl = __commonJS((exports, module) => {
  (() => {
    var e = { d: (n2, t2) => {
      for (var o2 in t2)
        e.o(t2, o2) && !e.o(n2, o2) && Object.defineProperty(n2, o2, { enumerable: true, get: t2[o2] });
    }, o: (e2, n2) => Object.prototype.hasOwnProperty.call(e2, n2), r: (e2) => {
      typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
    } }, n = {};
    e.r(n), e.d(n, { default: () => t });
    const t = "precision mediump float;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\n\nconst float feather = 0.001;\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  float dist = length(v_normal) * v_thickness;\n\n  float t = smoothstep(\n    v_thickness - feather,\n    v_thickness,\n    dist\n  );\n\n  gl_FragColor = mix(v_color, transparent, t);\n}\n";
    module.exports = n;
  })();
});

// node_modules/sigma/rendering/webgl/programs/edge.rectangle.js
var require_edge_rectangle = __commonJS((exports) => {
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d2, b2) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
        d3.__proto__ = b3;
      } || function(d3, b3) {
        for (var p in b3)
          if (Object.prototype.hasOwnProperty.call(b3, p))
            d3[p] = b3[p];
      };
      return extendStatics(d2, b2);
    };
    return function(d2, b2) {
      if (typeof b2 !== "function" && b2 !== null)
        throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
      extendStatics(d2, b2);
      function __() {
        this.constructor = d2;
      }
      d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __);
    };
  }();
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var utils_1 = require_utils();
  var edge_1 = require_edge();
  var edge_rectangle_vert_glsl_1 = __importDefault(require_edge_rectangle_vert_glsl());
  var edge_rectangle_frag_glsl_1 = __importDefault(require_edge_rectangle_frag_glsl());
  var UNSIGNED_BYTE = WebGLRenderingContext.UNSIGNED_BYTE;
  var FLOAT = WebGLRenderingContext.FLOAT;
  var UNIFORMS = ["u_matrix", "u_zoomRatio", "u_sizeRatio", "u_correctionRatio"];
  var EdgeRectangleProgram = function(_super) {
    __extends(EdgeRectangleProgram2, _super);
    function EdgeRectangleProgram2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    EdgeRectangleProgram2.prototype.getDefinition = function() {
      return {
        VERTICES: 4,
        ARRAY_ITEMS_PER_VERTEX: 5,
        VERTEX_SHADER_SOURCE: edge_rectangle_vert_glsl_1.default,
        FRAGMENT_SHADER_SOURCE: edge_rectangle_frag_glsl_1.default,
        UNIFORMS,
        ATTRIBUTES: [
          { name: "a_position", size: 2, type: FLOAT },
          { name: "a_normal", size: 2, type: FLOAT },
          { name: "a_color", size: 4, type: UNSIGNED_BYTE, normalized: true }
        ]
      };
    };
    EdgeRectangleProgram2.prototype.reallocateIndices = function() {
      var l2 = this.verticesCount;
      var size = l2 + l2 / 2;
      var indices = new this.IndicesArray(size);
      for (var i = 0, c = 0;i < l2; i += 4) {
        indices[c++] = i;
        indices[c++] = i + 1;
        indices[c++] = i + 2;
        indices[c++] = i + 2;
        indices[c++] = i + 1;
        indices[c++] = i + 3;
      }
      this.indicesArray = indices;
    };
    EdgeRectangleProgram2.prototype.processVisibleItem = function(i, sourceData, targetData, data) {
      var thickness = data.size || 1;
      var x1 = sourceData.x;
      var y1 = sourceData.y;
      var x2 = targetData.x;
      var y2 = targetData.y;
      var color = (0, utils_1.floatColor)(data.color);
      var dx = x2 - x1;
      var dy = y2 - y1;
      var len = dx * dx + dy * dy;
      var n1 = 0;
      var n2 = 0;
      if (len) {
        len = 1 / Math.sqrt(len);
        n1 = -dy * len * thickness;
        n2 = dx * len * thickness;
      }
      var array = this.array;
      array[i++] = x1;
      array[i++] = y1;
      array[i++] = n1;
      array[i++] = n2;
      array[i++] = color;
      array[i++] = x1;
      array[i++] = y1;
      array[i++] = -n1;
      array[i++] = -n2;
      array[i++] = color;
      array[i++] = x2;
      array[i++] = y2;
      array[i++] = n1;
      array[i++] = n2;
      array[i++] = color;
      array[i++] = x2;
      array[i++] = y2;
      array[i++] = -n1;
      array[i++] = -n2;
      array[i] = color;
    };
    EdgeRectangleProgram2.prototype.draw = function(params) {
      var gl = this.gl;
      var _a = this.uniformLocations, u_matrix = _a.u_matrix, u_zoomRatio = _a.u_zoomRatio, u_correctionRatio = _a.u_correctionRatio, u_sizeRatio = _a.u_sizeRatio;
      gl.uniformMatrix3fv(u_matrix, false, params.matrix);
      gl.uniform1f(u_zoomRatio, params.zoomRatio);
      gl.uniform1f(u_sizeRatio, params.sizeRatio);
      gl.uniform1f(u_correctionRatio, params.correctionRatio);
      if (!this.indicesArray)
        throw new Error("EdgeRectangleProgram: indicesArray should be allocated when drawing!");
      gl.drawElements(gl.TRIANGLES, this.indicesArray.length, this.indicesType, 0);
    };
    return EdgeRectangleProgram2;
  }(edge_1.EdgeProgram);
  exports.default = EdgeRectangleProgram;
});

// node_modules/sigma/rendering/webgl/shaders/edge.arrowHead.vert.glsl.js
var require_edge_arrowHead_vert_glsl = __commonJS((exports, module) => {
  (() => {
    var e = { d: (a3, n2) => {
      for (var t in n2)
        e.o(n2, t) && !e.o(a3, t) && Object.defineProperty(a3, t, { enumerable: true, get: n2[t] });
    }, o: (e2, a3) => Object.prototype.hasOwnProperty.call(e2, a3), r: (e2) => {
      typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
    } }, a2 = {};
    e.r(a2), e.d(a2, { default: () => n });
    const n = "attribute vec2 a_position;\nattribute vec2 a_normal;\nattribute float a_radius;\nattribute vec4 a_color;\nattribute vec3 a_barycentric;\n\nuniform mat3 u_matrix;\nuniform float u_sizeRatio;\nuniform float u_correctionRatio;\n\nvarying vec4 v_color;\n\nconst float minThickness = 1.7;\nconst float bias = 255.0 / 254.0;\nconst float arrowHeadWidthLengthRatio = 0.66;\nconst float arrowHeadLengthThicknessRatio = 2.5;\n\nvoid main() {\n  float normalLength = length(a_normal);\n  vec2 unitNormal = a_normal / normalLength;\n\n  // These first computations are taken from edge.vert.glsl and\n  // edge.clamped.vert.glsl. Please read it to get better comments on what's\n  // happening:\n  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);\n  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;\n  float webGLNodeRadius = a_radius * 2.0 * u_correctionRatio / u_sizeRatio;\n  float webGLArrowHeadLength = webGLThickness * 2.0 * arrowHeadLengthThicknessRatio;\n  float webGLArrowHeadHalfWidth = webGLArrowHeadLength * arrowHeadWidthLengthRatio / 2.0;\n\n  float da = a_barycentric.x;\n  float db = a_barycentric.y;\n  float dc = a_barycentric.z;\n\n  vec2 delta = vec2(\n      da * (webGLNodeRadius * unitNormal.y)\n    + db * ((webGLNodeRadius + webGLArrowHeadLength) * unitNormal.y + webGLArrowHeadHalfWidth * unitNormal.x)\n    + dc * ((webGLNodeRadius + webGLArrowHeadLength) * unitNormal.y - webGLArrowHeadHalfWidth * unitNormal.x),\n\n      da * (-webGLNodeRadius * unitNormal.x)\n    + db * (-(webGLNodeRadius + webGLArrowHeadLength) * unitNormal.x + webGLArrowHeadHalfWidth * unitNormal.y)\n    + dc * (-(webGLNodeRadius + webGLArrowHeadLength) * unitNormal.x - webGLArrowHeadHalfWidth * unitNormal.y)\n  );\n\n  vec2 position = (u_matrix * vec3(a_position + delta, 1)).xy;\n\n  gl_Position = vec4(position, 0, 1);\n\n  // Extract the color:\n  v_color = a_color;\n  v_color.a *= bias;\n}\n";
    module.exports = a2;
  })();
});

// node_modules/sigma/rendering/webgl/shaders/edge.arrowHead.frag.glsl.js
var require_edge_arrowHead_frag_glsl = __commonJS((exports, module) => {
  (() => {
    var e = { d: (o3, r2) => {
      for (var t in r2)
        e.o(r2, t) && !e.o(o3, t) && Object.defineProperty(o3, t, { enumerable: true, get: r2[t] });
    }, o: (e2, o3) => Object.prototype.hasOwnProperty.call(e2, o3), r: (e2) => {
      typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
    } }, o2 = {};
    e.r(o2), e.d(o2, { default: () => r });
    const r = "precision mediump float;\n\nvarying vec4 v_color;\n\nvoid main(void) {\n  gl_FragColor = v_color;\n}\n";
    module.exports = o2;
  })();
});

// node_modules/sigma/rendering/webgl/programs/edge.arrowHead.js
var require_edge_arrowHead = __commonJS((exports) => {
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d2, b2) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
        d3.__proto__ = b3;
      } || function(d3, b3) {
        for (var p in b3)
          if (Object.prototype.hasOwnProperty.call(b3, p))
            d3[p] = b3[p];
      };
      return extendStatics(d2, b2);
    };
    return function(d2, b2) {
      if (typeof b2 !== "function" && b2 !== null)
        throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
      extendStatics(d2, b2);
      function __() {
        this.constructor = d2;
      }
      d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __);
    };
  }();
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var utils_1 = require_utils();
  var edge_1 = require_edge();
  var edge_arrowHead_vert_glsl_1 = __importDefault(require_edge_arrowHead_vert_glsl());
  var edge_arrowHead_frag_glsl_1 = __importDefault(require_edge_arrowHead_frag_glsl());
  var UNSIGNED_BYTE = WebGLRenderingContext.UNSIGNED_BYTE;
  var FLOAT = WebGLRenderingContext.FLOAT;
  var UNIFORMS = ["u_matrix", "u_sizeRatio", "u_correctionRatio"];
  var EdgeArrowHeadProgram = function(_super) {
    __extends(EdgeArrowHeadProgram2, _super);
    function EdgeArrowHeadProgram2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    EdgeArrowHeadProgram2.prototype.getDefinition = function() {
      return {
        VERTICES: 3,
        ARRAY_ITEMS_PER_VERTEX: 9,
        VERTEX_SHADER_SOURCE: edge_arrowHead_vert_glsl_1.default,
        FRAGMENT_SHADER_SOURCE: edge_arrowHead_frag_glsl_1.default,
        UNIFORMS,
        ATTRIBUTES: [
          { name: "a_position", size: 2, type: FLOAT },
          { name: "a_normal", size: 2, type: FLOAT },
          { name: "a_radius", size: 1, type: FLOAT },
          { name: "a_color", size: 4, type: UNSIGNED_BYTE, normalized: true },
          { name: "a_barycentric", size: 3, type: FLOAT }
        ]
      };
    };
    EdgeArrowHeadProgram2.prototype.processVisibleItem = function(i, sourceData, targetData, data) {
      var thickness = data.size || 1;
      var radius = targetData.size || 1;
      var x1 = sourceData.x;
      var y1 = sourceData.y;
      var x2 = targetData.x;
      var y2 = targetData.y;
      var color = (0, utils_1.floatColor)(data.color);
      var dx = x2 - x1;
      var dy = y2 - y1;
      var len = dx * dx + dy * dy;
      var n1 = 0;
      var n2 = 0;
      if (len) {
        len = 1 / Math.sqrt(len);
        n1 = -dy * len * thickness;
        n2 = dx * len * thickness;
      }
      var array = this.array;
      array[i++] = x2;
      array[i++] = y2;
      array[i++] = -n1;
      array[i++] = -n2;
      array[i++] = radius;
      array[i++] = color;
      array[i++] = 1;
      array[i++] = 0;
      array[i++] = 0;
      array[i++] = x2;
      array[i++] = y2;
      array[i++] = -n1;
      array[i++] = -n2;
      array[i++] = radius;
      array[i++] = color;
      array[i++] = 0;
      array[i++] = 1;
      array[i++] = 0;
      array[i++] = x2;
      array[i++] = y2;
      array[i++] = -n1;
      array[i++] = -n2;
      array[i++] = radius;
      array[i++] = color;
      array[i++] = 0;
      array[i++] = 0;
      array[i] = 1;
    };
    EdgeArrowHeadProgram2.prototype.draw = function(params) {
      var gl = this.gl;
      var _a = this.uniformLocations, u_matrix = _a.u_matrix, u_sizeRatio = _a.u_sizeRatio, u_correctionRatio = _a.u_correctionRatio;
      gl.uniformMatrix3fv(u_matrix, false, params.matrix);
      gl.uniform1f(u_sizeRatio, params.sizeRatio);
      gl.uniform1f(u_correctionRatio, params.correctionRatio);
      gl.drawArrays(gl.TRIANGLES, 0, this.verticesCount);
    };
    return EdgeArrowHeadProgram2;
  }(edge_1.EdgeProgram);
  exports.default = EdgeArrowHeadProgram;
});

// node_modules/sigma/rendering/webgl/shaders/edge.clamped.vert.glsl.js
var require_edge_clamped_vert_glsl = __commonJS((exports, module) => {
  (() => {
    var e = { d: (o3, n2) => {
      for (var t in n2)
        e.o(n2, t) && !e.o(o3, t) && Object.defineProperty(o3, t, { enumerable: true, get: n2[t] });
    }, o: (e2, o3) => Object.prototype.hasOwnProperty.call(e2, o3), r: (e2) => {
      typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
    } }, o2 = {};
    e.r(o2), e.d(o2, { default: () => n });
    const n = "attribute vec4 a_color;\nattribute vec2 a_normal;\nattribute vec2 a_position;\nattribute float a_radius;\n\nuniform mat3 u_matrix;\nuniform float u_zoomRatio;\nuniform float u_sizeRatio;\nuniform float u_correctionRatio;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\n\nconst float minThickness = 1.7;\nconst float bias = 255.0 / 254.0;\nconst float arrowHeadLengthThicknessRatio = 2.5;\n\nvoid main() {\n  float normalLength = length(a_normal);\n  vec2 unitNormal = a_normal / normalLength;\n\n  // These first computations are taken from edge.vert.glsl. Please read it to\n  // get better comments on what's happening:\n  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);\n  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;\n\n  // Here, we move the point to leave space for the arrow head:\n  float direction = sign(a_radius);\n  float webGLNodeRadius = direction * a_radius * 2.0 * u_correctionRatio / u_sizeRatio;\n  float webGLArrowHeadLength = webGLThickness * 2.0 * arrowHeadLengthThicknessRatio;\n\n  vec2 compensationVector = vec2(-direction * unitNormal.y, direction * unitNormal.x) * (webGLNodeRadius + webGLArrowHeadLength);\n\n  // Here is the proper position of the vertex\n  gl_Position = vec4((u_matrix * vec3(a_position + unitNormal * webGLThickness + compensationVector, 1)).xy, 0, 1);\n\n  v_thickness = webGLThickness / u_zoomRatio;\n\n  v_normal = unitNormal;\n  v_color = a_color;\n  v_color.a *= bias;\n}\n";
    module.exports = o2;
  })();
});

// node_modules/sigma/rendering/webgl/programs/edge.clamped.js
var require_edge_clamped = __commonJS((exports) => {
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d2, b2) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
        d3.__proto__ = b3;
      } || function(d3, b3) {
        for (var p in b3)
          if (Object.prototype.hasOwnProperty.call(b3, p))
            d3[p] = b3[p];
      };
      return extendStatics(d2, b2);
    };
    return function(d2, b2) {
      if (typeof b2 !== "function" && b2 !== null)
        throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
      extendStatics(d2, b2);
      function __() {
        this.constructor = d2;
      }
      d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __);
    };
  }();
  var __assign = exports && exports.__assign || function() {
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length;i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var edge_rectangle_1 = __importDefault(require_edge_rectangle());
  var edge_clamped_vert_glsl_1 = __importDefault(require_edge_clamped_vert_glsl());
  var utils_1 = require_utils();
  var UNSIGNED_BYTE = WebGLRenderingContext.UNSIGNED_BYTE;
  var FLOAT = WebGLRenderingContext.FLOAT;
  var EdgeClampedProgram = function(_super) {
    __extends(EdgeClampedProgram2, _super);
    function EdgeClampedProgram2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    EdgeClampedProgram2.prototype.getDefinition = function() {
      return __assign(__assign({}, _super.prototype.getDefinition.call(this)), { ARRAY_ITEMS_PER_VERTEX: 6, VERTEX_SHADER_SOURCE: edge_clamped_vert_glsl_1.default, ATTRIBUTES: [
        { name: "a_position", size: 2, type: FLOAT },
        { name: "a_normal", size: 2, type: FLOAT },
        { name: "a_color", size: 4, type: UNSIGNED_BYTE, normalized: true },
        { name: "a_radius", size: 1, type: FLOAT }
      ] });
    };
    EdgeClampedProgram2.prototype.processVisibleItem = function(i, sourceData, targetData, data) {
      var thickness = data.size || 1;
      var x1 = sourceData.x;
      var y1 = sourceData.y;
      var x2 = targetData.x;
      var y2 = targetData.y;
      var color = (0, utils_1.floatColor)(data.color);
      var dx = x2 - x1;
      var dy = y2 - y1;
      var radius = targetData.size || 1;
      var len = dx * dx + dy * dy;
      var n1 = 0;
      var n2 = 0;
      if (len) {
        len = 1 / Math.sqrt(len);
        n1 = -dy * len * thickness;
        n2 = dx * len * thickness;
      }
      var array = this.array;
      array[i++] = x1;
      array[i++] = y1;
      array[i++] = n1;
      array[i++] = n2;
      array[i++] = color;
      array[i++] = 0;
      array[i++] = x1;
      array[i++] = y1;
      array[i++] = -n1;
      array[i++] = -n2;
      array[i++] = color;
      array[i++] = 0;
      array[i++] = x2;
      array[i++] = y2;
      array[i++] = n1;
      array[i++] = n2;
      array[i++] = color;
      array[i++] = radius;
      array[i++] = x2;
      array[i++] = y2;
      array[i++] = -n1;
      array[i++] = -n2;
      array[i++] = color;
      array[i] = -radius;
    };
    return EdgeClampedProgram2;
  }(edge_rectangle_1.default);
  exports.default = EdgeClampedProgram;
});

// node_modules/sigma/rendering/webgl/programs/edge.arrow.js
var require_edge_arrow = __commonJS((exports) => {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var edge_1 = require_edge();
  var edge_arrowHead_1 = __importDefault(require_edge_arrowHead());
  var edge_clamped_1 = __importDefault(require_edge_clamped());
  var EdgeArrowProgram = (0, edge_1.createEdgeCompoundProgram)([edge_clamped_1.default, edge_arrowHead_1.default]);
  exports.default = EdgeArrowProgram;
});

// node_modules/sigma/settings.js
var require_settings = __commonJS((exports) => {
  var validateSettings = function(settings) {
    if (typeof settings.labelDensity !== "number" || settings.labelDensity < 0) {
      throw new Error("Settings: invalid `labelDensity`. Expecting a positive number.");
    }
    var { minCameraRatio, maxCameraRatio } = settings;
    if (typeof minCameraRatio === "number" && typeof maxCameraRatio === "number" && maxCameraRatio < minCameraRatio) {
      throw new Error("Settings: invalid camera ratio boundaries. Expecting `maxCameraRatio` to be greater than `minCameraRatio`.");
    }
  };
  var resolveSettings = function(settings) {
    var resolvedSettings = (0, utils_1.assign)({}, exports.DEFAULT_SETTINGS, settings);
    resolvedSettings.nodeProgramClasses = (0, utils_1.assign)({}, exports.DEFAULT_NODE_PROGRAM_CLASSES, resolvedSettings.nodeProgramClasses);
    resolvedSettings.edgeProgramClasses = (0, utils_1.assign)({}, exports.DEFAULT_EDGE_PROGRAM_CLASSES, resolvedSettings.edgeProgramClasses);
    return resolvedSettings;
  };
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.resolveSettings = exports.validateSettings = exports.DEFAULT_EDGE_PROGRAM_CLASSES = exports.DEFAULT_NODE_PROGRAM_CLASSES = exports.DEFAULT_SETTINGS = undefined;
  var utils_1 = require_utils();
  var label_1 = __importDefault(require_label());
  var hover_1 = __importDefault(require_hover());
  var edge_label_1 = __importDefault(require_edge_label());
  var node_point_1 = __importDefault(require_node_point());
  var edge_rectangle_1 = __importDefault(require_edge_rectangle());
  var edge_arrow_1 = __importDefault(require_edge_arrow());
  exports.DEFAULT_SETTINGS = {
    hideEdgesOnMove: false,
    hideLabelsOnMove: false,
    renderLabels: true,
    renderEdgeLabels: false,
    enableEdgeClickEvents: false,
    enableEdgeWheelEvents: false,
    enableEdgeHoverEvents: false,
    defaultNodeColor: "#999",
    defaultNodeType: "circle",
    defaultEdgeColor: "#ccc",
    defaultEdgeType: "line",
    labelFont: "Arial",
    labelSize: 14,
    labelWeight: "normal",
    labelColor: { color: "#000" },
    edgeLabelFont: "Arial",
    edgeLabelSize: 14,
    edgeLabelWeight: "normal",
    edgeLabelColor: { attribute: "color" },
    stagePadding: 30,
    zoomToSizeRatioFunction: Math.sqrt,
    itemSizesReference: "screen",
    labelDensity: 1,
    labelGridCellSize: 100,
    labelRenderedSizeThreshold: 6,
    nodeReducer: null,
    edgeReducer: null,
    zIndex: false,
    minCameraRatio: null,
    maxCameraRatio: null,
    labelRenderer: label_1.default,
    hoverRenderer: hover_1.default,
    edgeLabelRenderer: edge_label_1.default,
    allowInvalidContainer: false,
    nodeProgramClasses: {},
    nodeHoverProgramClasses: {},
    edgeProgramClasses: {}
  };
  exports.DEFAULT_NODE_PROGRAM_CLASSES = {
    circle: node_point_1.default
  };
  exports.DEFAULT_EDGE_PROGRAM_CLASSES = {
    arrow: edge_arrow_1.default,
    line: edge_rectangle_1.default
  };
  exports.validateSettings = validateSettings;
  exports.resolveSettings = resolveSettings;
});

// node_modules/sigma/core/captors/touch.js
var require_touch = __commonJS((exports) => {
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d2, b2) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
        d3.__proto__ = b3;
      } || function(d3, b3) {
        for (var p in b3)
          if (Object.prototype.hasOwnProperty.call(b3, p))
            d3[p] = b3[p];
      };
      return extendStatics(d2, b2);
    };
    return function(d2, b2) {
      if (typeof b2 !== "function" && b2 !== null)
        throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
      extendStatics(d2, b2);
      function __() {
        this.constructor = d2;
      }
      d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __);
    };
  }();
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o2, v2) {
    Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
  } : function(o2, v2) {
    o2["default"] = v2;
  });
  var __importStar = exports && exports.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
  };
  var __read = exports && exports.__read || function(o2, n) {
    var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
    if (!m2)
      return o2;
    var i = m2.call(o2), r, ar = [], e;
    try {
      while ((n === undefined || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m2 = i["return"]))
          m2.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var captor_1 = __importStar(require_captor());
  var DRAG_TIMEOUT = 200;
  var TOUCH_INERTIA_RATIO = 3;
  var TOUCH_INERTIA_DURATION = 200;
  var TouchCaptor = function(_super) {
    __extends(TouchCaptor2, _super);
    function TouchCaptor2(container, renderer) {
      var _this = _super.call(this, container, renderer) || this;
      _this.enabled = true;
      _this.isMoving = false;
      _this.hasMoved = false;
      _this.touchMode = 0;
      _this.startTouchesPositions = [];
      _this.handleStart = _this.handleStart.bind(_this);
      _this.handleLeave = _this.handleLeave.bind(_this);
      _this.handleMove = _this.handleMove.bind(_this);
      container.addEventListener("touchstart", _this.handleStart, false);
      container.addEventListener("touchend", _this.handleLeave, false);
      container.addEventListener("touchcancel", _this.handleLeave, false);
      container.addEventListener("touchmove", _this.handleMove, false);
      return _this;
    }
    TouchCaptor2.prototype.kill = function() {
      var container = this.container;
      container.removeEventListener("touchstart", this.handleStart);
      container.removeEventListener("touchend", this.handleLeave);
      container.removeEventListener("touchcancel", this.handleLeave);
      container.removeEventListener("touchmove", this.handleMove);
    };
    TouchCaptor2.prototype.getDimensions = function() {
      return {
        width: this.container.offsetWidth,
        height: this.container.offsetHeight
      };
    };
    TouchCaptor2.prototype.dispatchRelatedMouseEvent = function(type, e, touch, emitter) {
      var mousePosition = touch || e.touches[0];
      var mouseEvent = new MouseEvent(type, {
        clientX: mousePosition.clientX,
        clientY: mousePosition.clientY,
        altKey: e.altKey,
        ctrlKey: e.ctrlKey
      });
      mouseEvent.isFakeSigmaMouseEvent = true;
      (emitter || this.container).dispatchEvent(mouseEvent);
    };
    TouchCaptor2.prototype.handleStart = function(e) {
      var _this = this;
      if (!this.enabled)
        return;
      e.preventDefault();
      if (e.touches.length === 1)
        this.dispatchRelatedMouseEvent("mousedown", e);
      var touches = (0, captor_1.getTouchesArray)(e.touches);
      this.touchMode = touches.length;
      this.startCameraState = this.renderer.getCamera().getState();
      this.startTouchesPositions = touches.map(function(touch) {
        return (0, captor_1.getPosition)(touch, _this.container);
      });
      this.lastTouches = touches;
      this.lastTouchesPositions = this.startTouchesPositions;
      if (this.touchMode === 2) {
        var _a = __read(this.startTouchesPositions, 2), _b = _a[0], x0 = _b.x, y0 = _b.y, _c = _a[1], x1 = _c.x, y1 = _c.y;
        this.startTouchesAngle = Math.atan2(y1 - y0, x1 - x0);
        this.startTouchesDistance = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2));
      }
      this.emit("touchdown", (0, captor_1.getTouchCoords)(e, this.container));
    };
    TouchCaptor2.prototype.handleLeave = function(e) {
      if (!this.enabled)
        return;
      e.preventDefault();
      if (e.touches.length === 0 && this.lastTouches && this.lastTouches.length) {
        this.dispatchRelatedMouseEvent("mouseup", e, this.lastTouches[0], document);
        if (!this.hasMoved) {
          this.dispatchRelatedMouseEvent("click", e, this.lastTouches[0]);
        }
      }
      if (this.movingTimeout) {
        this.isMoving = false;
        clearTimeout(this.movingTimeout);
      }
      switch (this.touchMode) {
        case 2:
          if (e.touches.length === 1) {
            this.handleStart(e);
            e.preventDefault();
            break;
          }
        case 1:
          if (this.isMoving) {
            var camera = this.renderer.getCamera();
            var cameraState = camera.getState(), previousCameraState = camera.getPreviousState() || { x: 0, y: 0 };
            camera.animate({
              x: cameraState.x + TOUCH_INERTIA_RATIO * (cameraState.x - previousCameraState.x),
              y: cameraState.y + TOUCH_INERTIA_RATIO * (cameraState.y - previousCameraState.y)
            }, {
              duration: TOUCH_INERTIA_DURATION,
              easing: "quadraticOut"
            });
          }
          this.hasMoved = false;
          this.isMoving = false;
          this.touchMode = 0;
          break;
      }
      this.emit("touchup", (0, captor_1.getTouchCoords)(e, this.container));
    };
    TouchCaptor2.prototype.handleMove = function(e) {
      var _a;
      var _this = this;
      if (!this.enabled)
        return;
      e.preventDefault();
      if (e.touches.length === 1)
        this.dispatchRelatedMouseEvent("mousemove", e);
      var touches = (0, captor_1.getTouchesArray)(e.touches);
      var touchesPositions = touches.map(function(touch) {
        return (0, captor_1.getPosition)(touch, _this.container);
      });
      this.lastTouches = touches;
      this.lastTouchesPositions = touchesPositions;
      this.hasMoved || (this.hasMoved = touchesPositions.some(function(position, idx) {
        var startPosition = _this.startTouchesPositions[idx];
        return position.x !== startPosition.x || position.y !== startPosition.y;
      }));
      if (!this.hasMoved) {
        return;
      }
      this.isMoving = true;
      if (this.movingTimeout)
        clearTimeout(this.movingTimeout);
      this.movingTimeout = window.setTimeout(function() {
        _this.isMoving = false;
      }, DRAG_TIMEOUT);
      var camera = this.renderer.getCamera();
      var startCameraState = this.startCameraState;
      switch (this.touchMode) {
        case 1: {
          var _b = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0]), xStart = _b.x, yStart = _b.y;
          var _c = this.renderer.viewportToFramedGraph(touchesPositions[0]), x2 = _c.x, y2 = _c.y;
          camera.setState({
            x: startCameraState.x + xStart - x2,
            y: startCameraState.y + yStart - y2
          });
          break;
        }
        case 2: {
          var newCameraState = {};
          var _d = touchesPositions[0], x0 = _d.x, y0 = _d.y;
          var _e = touchesPositions[1], x1 = _e.x, y1 = _e.y;
          var angleDiff = Math.atan2(y1 - y0, x1 - x0) - this.startTouchesAngle;
          var ratioDiff = Math.hypot(y1 - y0, x1 - x0) / this.startTouchesDistance;
          var newRatio = camera.getBoundedRatio(startCameraState.ratio / ratioDiff);
          newCameraState.ratio = newRatio;
          newCameraState.angle = startCameraState.angle + angleDiff;
          var dimensions = this.getDimensions();
          var touchGraphPosition = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0], { cameraState: startCameraState });
          var smallestDimension = Math.min(dimensions.width, dimensions.height);
          var dx = smallestDimension / dimensions.width;
          var dy = smallestDimension / dimensions.height;
          var ratio = newRatio / smallestDimension;
          var x2 = x0 - smallestDimension / 2 / dx;
          var y2 = y0 - smallestDimension / 2 / dy;
          _a = __read([
            x2 * Math.cos(-newCameraState.angle) - y2 * Math.sin(-newCameraState.angle),
            y2 * Math.cos(-newCameraState.angle) + x2 * Math.sin(-newCameraState.angle)
          ], 2), x2 = _a[0], y2 = _a[1];
          newCameraState.x = touchGraphPosition.x - x2 * ratio;
          newCameraState.y = touchGraphPosition.y + y2 * ratio;
          camera.setState(newCameraState);
          break;
        }
      }
      this.emit("touchmove", (0, captor_1.getTouchCoords)(e, this.container));
    };
    return TouchCaptor2;
  }(captor_1.default);
  exports.default = TouchCaptor;
});

// node_modules/sigma/utils/edge-collisions.js
var require_edge_collisions = __commonJS((exports) => {
  var isPixelColored = function(gl, x2, y2) {
    var pixels = new Uint8Array(4);
    gl.readPixels(x2, gl.drawingBufferHeight - y2, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
    return pixels[3] > 0;
  };
  var doEdgeCollideWithPoint = function(x2, y2, xS, yS, xT, yT, thickness) {
    if (x2 < xS - thickness && x2 < xT - thickness)
      return false;
    if (y2 < yS - thickness && y2 < yT - thickness)
      return false;
    if (x2 > xS + thickness && x2 > xT + thickness)
      return false;
    if (y2 > yS + thickness && y2 > yT + thickness)
      return false;
    var distance = Math.abs((xT - xS) * (yS - y2) - (xS - x2) * (yT - yS)) / Math.sqrt(Math.pow(xT - xS, 2) + Math.pow(yT - yS, 2));
    return distance < thickness / 2;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.doEdgeCollideWithPoint = exports.isPixelColored = undefined;
  exports.isPixelColored = isPixelColored;
  exports.doEdgeCollideWithPoint = doEdgeCollideWithPoint;
});

// node_modules/sigma/sigma.js
var require_sigma = __commonJS((exports) => {
  var applyNodeDefaults = function(settings, key, data) {
    if (!data.hasOwnProperty("x") || !data.hasOwnProperty("y"))
      throw new Error("Sigma: could not find a valid position (x, y) for node \"".concat(key, "\". All your nodes must have a number \"x\" and \"y\". Maybe your forgot to apply a layout or your \"nodeReducer\" is not returning the correct data?"));
    if (!data.color)
      data.color = settings.defaultNodeColor;
    if (!data.label && data.label !== "")
      data.label = null;
    if (data.label !== undefined && data.label !== null)
      data.label = "" + data.label;
    else
      data.label = null;
    if (!data.size)
      data.size = 2;
    if (!data.hasOwnProperty("hidden"))
      data.hidden = false;
    if (!data.hasOwnProperty("highlighted"))
      data.highlighted = false;
    if (!data.hasOwnProperty("forceLabel"))
      data.forceLabel = false;
    if (!data.type || data.type === "")
      data.type = settings.defaultNodeType;
    if (!data.zIndex)
      data.zIndex = 0;
    return data;
  };
  var applyEdgeDefaults = function(settings, key, data) {
    if (!data.color)
      data.color = settings.defaultEdgeColor;
    if (!data.label)
      data.label = "";
    if (!data.size)
      data.size = 0.5;
    if (!data.hasOwnProperty("hidden"))
      data.hidden = false;
    if (!data.hasOwnProperty("forceLabel"))
      data.forceLabel = false;
    if (!data.type || data.type === "")
      data.type = settings.defaultEdgeType;
    if (!data.zIndex)
      data.zIndex = 0;
    return data;
  };
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d2, b2) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
        d3.__proto__ = b3;
      } || function(d3, b3) {
        for (var p in b3)
          if (Object.prototype.hasOwnProperty.call(b3, p))
            d3[p] = b3[p];
      };
      return extendStatics(d2, b2);
    };
    return function(d2, b2) {
      if (typeof b2 !== "function" && b2 !== null)
        throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
      extendStatics(d2, b2);
      function __() {
        this.constructor = d2;
      }
      d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __);
    };
  }();
  var __assign = exports && exports.__assign || function() {
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length;i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  var __values = exports && exports.__values || function(o2) {
    var s = typeof Symbol === "function" && Symbol.iterator, m2 = s && o2[s], i = 0;
    if (m2)
      return m2.call(o2);
    if (o2 && typeof o2.length === "number")
      return {
        next: function() {
          if (o2 && i >= o2.length)
            o2 = undefined;
          return { value: o2 && o2[i++], done: !o2 };
        }
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var extend_1 = __importDefault(require_extend());
  var camera_1 = __importDefault(require_camera());
  var mouse_1 = __importDefault(require_mouse());
  var quadtree_1 = __importDefault(require_quadtree());
  var types_1 = require_types();
  var utils_1 = require_utils();
  var labels_1 = require_labels();
  var settings_1 = require_settings();
  var touch_1 = __importDefault(require_touch());
  var matrices_1 = require_matrices();
  var edge_collisions_1 = require_edge_collisions();
  var X_LABEL_MARGIN = 150;
  var Y_LABEL_MARGIN = 50;
  var Sigma = function(_super) {
    __extends(Sigma2, _super);
    function Sigma2(graph, container, settings) {
      if (settings === undefined) {
        settings = {};
      }
      var _this = _super.call(this) || this;
      _this.elements = {};
      _this.canvasContexts = {};
      _this.webGLContexts = {};
      _this.activeListeners = {};
      _this.quadtree = new quadtree_1.default;
      _this.labelGrid = new labels_1.LabelGrid;
      _this.nodeDataCache = {};
      _this.edgeDataCache = {};
      _this.nodesWithForcedLabels = [];
      _this.edgesWithForcedLabels = [];
      _this.nodeExtent = { x: [0, 1], y: [0, 1] };
      _this.matrix = (0, matrices_1.identity)();
      _this.invMatrix = (0, matrices_1.identity)();
      _this.correctionRatio = 1;
      _this.customBBox = null;
      _this.normalizationFunction = (0, utils_1.createNormalizationFunction)({
        x: [0, 1],
        y: [0, 1]
      });
      _this.graphToViewportRatio = 1;
      _this.width = 0;
      _this.height = 0;
      _this.pixelRatio = (0, utils_1.getPixelRatio)();
      _this.displayedNodeLabels = new Set;
      _this.displayedEdgeLabels = new Set;
      _this.highlightedNodes = new Set;
      _this.hoveredNode = null;
      _this.hoveredEdge = null;
      _this.renderFrame = null;
      _this.renderHighlightedNodesFrame = null;
      _this.needToProcess = false;
      _this.checkEdgesEventsFrame = null;
      _this.nodePrograms = {};
      _this.nodeHoverPrograms = {};
      _this.edgePrograms = {};
      _this.settings = (0, settings_1.resolveSettings)(settings);
      (0, settings_1.validateSettings)(_this.settings);
      (0, utils_1.validateGraph)(graph);
      if (!(container instanceof HTMLElement))
        throw new Error("Sigma: container should be an html element.");
      _this.graph = graph;
      _this.container = container;
      _this.createWebGLContext("edges", { preserveDrawingBuffer: true });
      _this.createCanvasContext("edgeLabels");
      _this.createWebGLContext("nodes");
      _this.createCanvasContext("labels");
      _this.createCanvasContext("hovers");
      _this.createWebGLContext("hoverNodes");
      _this.createCanvasContext("mouse");
      for (var key in _this.webGLContexts) {
        var gl = _this.webGLContexts[key];
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.BLEND);
      }
      for (var type in _this.settings.nodeProgramClasses) {
        var NodeProgramClass = _this.settings.nodeProgramClasses[type];
        _this.nodePrograms[type] = new NodeProgramClass(_this.webGLContexts.nodes, _this);
        var NodeHoverProgram = NodeProgramClass;
        if (type in _this.settings.nodeHoverProgramClasses) {
          NodeHoverProgram = _this.settings.nodeHoverProgramClasses[type];
        }
        _this.nodeHoverPrograms[type] = new NodeHoverProgram(_this.webGLContexts.hoverNodes, _this);
      }
      for (var type in _this.settings.edgeProgramClasses) {
        var EdgeProgramClass = _this.settings.edgeProgramClasses[type];
        _this.edgePrograms[type] = new EdgeProgramClass(_this.webGLContexts.edges, _this);
      }
      _this.resize();
      _this.camera = new camera_1.default;
      _this.bindCameraHandlers();
      _this.mouseCaptor = new mouse_1.default(_this.elements.mouse, _this);
      _this.touchCaptor = new touch_1.default(_this.elements.mouse, _this);
      _this.bindEventHandlers();
      _this.bindGraphHandlers();
      _this.handleSettingsUpdate();
      _this.refresh();
      return _this;
    }
    Sigma2.prototype.createCanvas = function(id) {
      var canvas = (0, utils_1.createElement)("canvas", {
        position: "absolute"
      }, {
        class: "sigma-".concat(id)
      });
      this.elements[id] = canvas;
      this.container.appendChild(canvas);
      return canvas;
    };
    Sigma2.prototype.createCanvasContext = function(id) {
      var canvas = this.createCanvas(id);
      var contextOptions = {
        preserveDrawingBuffer: false,
        antialias: false
      };
      this.canvasContexts[id] = canvas.getContext("2d", contextOptions);
      return this;
    };
    Sigma2.prototype.createWebGLContext = function(id, options) {
      var canvas = this.createCanvas(id);
      var contextOptions = __assign({ preserveDrawingBuffer: false, antialias: false }, options || {});
      var context;
      context = canvas.getContext("webgl2", contextOptions);
      if (!context)
        context = canvas.getContext("webgl", contextOptions);
      if (!context)
        context = canvas.getContext("experimental-webgl", contextOptions);
      this.webGLContexts[id] = context;
      return this;
    };
    Sigma2.prototype.bindCameraHandlers = function() {
      var _this = this;
      this.activeListeners.camera = function() {
        _this.scheduleRender();
      };
      this.camera.on("updated", this.activeListeners.camera);
      return this;
    };
    Sigma2.prototype.unbindCameraHandlers = function() {
      this.camera.removeListener("updated", this.activeListeners.camera);
      return this;
    };
    Sigma2.prototype.mouseIsOnNode = function(_a, _b, size) {
      var { x: x2, y: y2 } = _a;
      var { x: nodeX, y: nodeY } = _b;
      return x2 > nodeX - size && x2 < nodeX + size && y2 > nodeY - size && y2 < nodeY + size && Math.sqrt(Math.pow(x2 - nodeX, 2) + Math.pow(y2 - nodeY, 2)) < size;
    };
    Sigma2.prototype.getQuadNodes = function(position) {
      var mouseGraphPosition = this.viewportToFramedGraph(position);
      return this.quadtree.point(mouseGraphPosition.x, 1 - mouseGraphPosition.y);
    };
    Sigma2.prototype.getNodeAtPosition = function(position) {
      var { x: x2, y: y2 } = position;
      var quadNodes = this.getQuadNodes(position);
      var minDistance = Infinity, nodeAtPosition = null;
      for (var i = 0, l2 = quadNodes.length;i < l2; i++) {
        var node = quadNodes[i];
        var data = this.nodeDataCache[node];
        var nodePosition = this.framedGraphToViewport(data);
        var size = this.scaleSize(data.size);
        if (!data.hidden && this.mouseIsOnNode(position, nodePosition, size)) {
          var distance = Math.sqrt(Math.pow(x2 - nodePosition.x, 2) + Math.pow(y2 - nodePosition.y, 2));
          if (distance < minDistance) {
            minDistance = distance;
            nodeAtPosition = node;
          }
        }
      }
      return nodeAtPosition;
    };
    Sigma2.prototype.bindEventHandlers = function() {
      var _this = this;
      this.activeListeners.handleResize = function() {
        _this.scheduleRender();
      };
      window.addEventListener("resize", this.activeListeners.handleResize);
      this.activeListeners.handleMove = function(e) {
        var baseEvent = {
          event: e,
          preventSigmaDefault: function() {
            e.preventSigmaDefault();
          }
        };
        var nodeToHover = _this.getNodeAtPosition(e);
        if (nodeToHover && _this.hoveredNode !== nodeToHover && !_this.nodeDataCache[nodeToHover].hidden) {
          if (_this.hoveredNode)
            _this.emit("leaveNode", __assign(__assign({}, baseEvent), { node: _this.hoveredNode }));
          _this.hoveredNode = nodeToHover;
          _this.emit("enterNode", __assign(__assign({}, baseEvent), { node: nodeToHover }));
          _this.scheduleHighlightedNodesRender();
          return;
        }
        if (_this.hoveredNode) {
          var data = _this.nodeDataCache[_this.hoveredNode];
          var pos = _this.framedGraphToViewport(data);
          var size = _this.scaleSize(data.size);
          if (!_this.mouseIsOnNode(e, pos, size)) {
            var node = _this.hoveredNode;
            _this.hoveredNode = null;
            _this.emit("leaveNode", __assign(__assign({}, baseEvent), { node }));
            _this.scheduleHighlightedNodesRender();
            return;
          }
        }
        if (_this.settings.enableEdgeHoverEvents === true) {
          _this.checkEdgeHoverEvents(baseEvent);
        } else if (_this.settings.enableEdgeHoverEvents === "debounce") {
          if (!_this.checkEdgesEventsFrame)
            _this.checkEdgesEventsFrame = (0, utils_1.requestFrame)(function() {
              _this.checkEdgeHoverEvents(baseEvent);
              _this.checkEdgesEventsFrame = null;
            });
        }
      };
      var createMouseListener = function(eventType) {
        return function(e) {
          var baseEvent = {
            event: e,
            preventSigmaDefault: function() {
              e.preventSigmaDefault();
            }
          };
          var isFakeSigmaMouseEvent = e.original.isFakeSigmaMouseEvent;
          var nodeAtPosition = isFakeSigmaMouseEvent ? _this.getNodeAtPosition(e) : _this.hoveredNode;
          if (nodeAtPosition)
            return _this.emit("".concat(eventType, "Node"), __assign(__assign({}, baseEvent), { node: nodeAtPosition }));
          if (eventType === "wheel" ? _this.settings.enableEdgeWheelEvents : _this.settings.enableEdgeClickEvents) {
            var edge = _this.getEdgeAtPoint(e.x, e.y);
            if (edge)
              return _this.emit("".concat(eventType, "Edge"), __assign(__assign({}, baseEvent), { edge }));
          }
          return _this.emit("".concat(eventType, "Stage"), baseEvent);
        };
      };
      this.activeListeners.handleClick = createMouseListener("click");
      this.activeListeners.handleRightClick = createMouseListener("rightClick");
      this.activeListeners.handleDoubleClick = createMouseListener("doubleClick");
      this.activeListeners.handleWheel = createMouseListener("wheel");
      this.activeListeners.handleDown = createMouseListener("down");
      this.mouseCaptor.on("mousemove", this.activeListeners.handleMove);
      this.mouseCaptor.on("click", this.activeListeners.handleClick);
      this.mouseCaptor.on("rightClick", this.activeListeners.handleRightClick);
      this.mouseCaptor.on("doubleClick", this.activeListeners.handleDoubleClick);
      this.mouseCaptor.on("wheel", this.activeListeners.handleWheel);
      this.mouseCaptor.on("mousedown", this.activeListeners.handleDown);
      return this;
    };
    Sigma2.prototype.bindGraphHandlers = function() {
      var _this = this;
      var graph = this.graph;
      this.activeListeners.graphUpdate = function() {
        _this.scheduleRefresh();
      };
      this.activeListeners.dropNodeGraphUpdate = function(e) {
        delete _this.nodeDataCache[e.key];
        if (_this.hoveredNode === e.key)
          _this.hoveredNode = null;
        _this.activeListeners.graphUpdate();
      };
      this.activeListeners.dropEdgeGraphUpdate = function(e) {
        delete _this.edgeDataCache[e.key];
        if (_this.hoveredEdge === e.key)
          _this.hoveredEdge = null;
        _this.activeListeners.graphUpdate();
      };
      this.activeListeners.clearEdgesGraphUpdate = function() {
        _this.edgeDataCache = {};
        _this.hoveredEdge = null;
        _this.activeListeners.graphUpdate();
      };
      this.activeListeners.clearGraphUpdate = function() {
        _this.nodeDataCache = {};
        _this.hoveredNode = null;
        _this.activeListeners.clearEdgesGraphUpdate();
      };
      graph.on("nodeAdded", this.activeListeners.graphUpdate);
      graph.on("nodeDropped", this.activeListeners.dropNodeGraphUpdate);
      graph.on("nodeAttributesUpdated", this.activeListeners.graphUpdate);
      graph.on("eachNodeAttributesUpdated", this.activeListeners.graphUpdate);
      graph.on("edgeAdded", this.activeListeners.graphUpdate);
      graph.on("edgeDropped", this.activeListeners.dropEdgeGraphUpdate);
      graph.on("edgeAttributesUpdated", this.activeListeners.graphUpdate);
      graph.on("eachEdgeAttributesUpdated", this.activeListeners.graphUpdate);
      graph.on("edgesCleared", this.activeListeners.clearEdgesGraphUpdate);
      graph.on("cleared", this.activeListeners.clearGraphUpdate);
      return this;
    };
    Sigma2.prototype.unbindGraphHandlers = function() {
      var graph = this.graph;
      graph.removeListener("nodeAdded", this.activeListeners.graphUpdate);
      graph.removeListener("nodeDropped", this.activeListeners.dropNodeGraphUpdate);
      graph.removeListener("nodeAttributesUpdated", this.activeListeners.graphUpdate);
      graph.removeListener("eachNodeAttributesUpdated", this.activeListeners.graphUpdate);
      graph.removeListener("edgeAdded", this.activeListeners.graphUpdate);
      graph.removeListener("edgeDropped", this.activeListeners.dropEdgeGraphUpdate);
      graph.removeListener("edgeAttributesUpdated", this.activeListeners.graphUpdate);
      graph.removeListener("eachEdgeAttributesUpdated", this.activeListeners.graphUpdate);
      graph.removeListener("edgesCleared", this.activeListeners.clearEdgesGraphUpdate);
      graph.removeListener("cleared", this.activeListeners.clearGraphUpdate);
    };
    Sigma2.prototype.checkEdgeHoverEvents = function(payload) {
      var edgeToHover = this.hoveredNode ? null : this.getEdgeAtPoint(payload.event.x, payload.event.y);
      if (edgeToHover !== this.hoveredEdge) {
        if (this.hoveredEdge)
          this.emit("leaveEdge", __assign(__assign({}, payload), { edge: this.hoveredEdge }));
        if (edgeToHover)
          this.emit("enterEdge", __assign(__assign({}, payload), { edge: edgeToHover }));
        this.hoveredEdge = edgeToHover;
      }
      return this;
    };
    Sigma2.prototype.getEdgeAtPoint = function(x2, y2) {
      var e_1, _a;
      var _this = this;
      var _b = this, edgeDataCache = _b.edgeDataCache, nodeDataCache = _b.nodeDataCache;
      if (!(0, edge_collisions_1.isPixelColored)(this.webGLContexts.edges, x2 * this.pixelRatio, y2 * this.pixelRatio))
        return null;
      var _c = this.viewportToGraph({ x: x2, y: y2 }), graphX = _c.x, graphY = _c.y;
      var transformationRatio = 0;
      this.graph.someEdge(function(key, _2, sourceId, targetId, _a2, _b2) {
        var { x: xs, y: ys } = _a2;
        var { x: xt, y: yt } = _b2;
        if (edgeDataCache[key].hidden || nodeDataCache[sourceId].hidden || nodeDataCache[targetId].hidden)
          return false;
        if (xs !== xt || ys !== yt) {
          var graphLength = Math.sqrt(Math.pow(xt - xs, 2) + Math.pow(yt - ys, 2));
          var _c2 = _this.graphToViewport({ x: xs, y: ys }), vp_xs = _c2.x, vp_ys = _c2.y;
          var _d = _this.graphToViewport({ x: xt, y: yt }), vp_xt = _d.x, vp_yt = _d.y;
          var viewportLength = Math.sqrt(Math.pow(vp_xt - vp_xs, 2) + Math.pow(vp_yt - vp_ys, 2));
          transformationRatio = graphLength / viewportLength;
          return true;
        }
      });
      if (!transformationRatio)
        return null;
      var edges = this.graph.filterEdges(function(key, edgeAttributes, sourceId, targetId, sourcePosition, targetPosition) {
        if (edgeDataCache[key].hidden || nodeDataCache[sourceId].hidden || nodeDataCache[targetId].hidden)
          return false;
        if ((0, edge_collisions_1.doEdgeCollideWithPoint)(graphX, graphY, sourcePosition.x, sourcePosition.y, targetPosition.x, targetPosition.y, _this.scaleSize(edgeDataCache[key].size * transformationRatio))) {
          return true;
        }
      });
      if (edges.length === 0)
        return null;
      var selectedEdge = edges[edges.length - 1];
      var highestZIndex = (-Infinity);
      try {
        for (var edges_1 = __values(edges), edges_1_1 = edges_1.next();!edges_1_1.done; edges_1_1 = edges_1.next()) {
          var edge = edges_1_1.value;
          var zIndex = this.graph.getEdgeAttribute(edge, "zIndex");
          if (zIndex >= highestZIndex) {
            selectedEdge = edge;
            highestZIndex = zIndex;
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (edges_1_1 && !edges_1_1.done && (_a = edges_1.return))
            _a.call(edges_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      return selectedEdge;
    };
    Sigma2.prototype.process = function() {
      var _this = this;
      var graph = this.graph;
      var settings = this.settings;
      var dimensions = this.getDimensions();
      var nodeZExtent = [Infinity, (-Infinity)];
      var edgeZExtent = [Infinity, (-Infinity)];
      this.quadtree.clear();
      this.labelGrid.resizeAndClear(dimensions, settings.labelGridCellSize);
      this.highlightedNodes = new Set;
      this.nodeExtent = (0, utils_1.graphExtent)(graph);
      this.nodesWithForcedLabels = [];
      this.edgesWithForcedLabels = [];
      var nullCamera = new camera_1.default;
      var nullCameraMatrix = (0, utils_1.matrixFromCamera)(nullCamera.getState(), this.getDimensions(), this.getGraphDimensions(), this.getSetting("stagePadding") || 0);
      this.normalizationFunction = (0, utils_1.createNormalizationFunction)(this.customBBox || this.nodeExtent);
      var nodesPerPrograms = {};
      var nodes = graph.nodes();
      for (var i = 0, l2 = nodes.length;i < l2; i++) {
        var node = nodes[i];
        var attr = Object.assign({}, graph.getNodeAttributes(node));
        if (settings.nodeReducer)
          attr = settings.nodeReducer(node, attr);
        var data = applyNodeDefaults(this.settings, node, attr);
        nodesPerPrograms[data.type] = (nodesPerPrograms[data.type] || 0) + 1;
        this.nodeDataCache[node] = data;
        this.normalizationFunction.applyTo(data);
        if (data.forceLabel)
          this.nodesWithForcedLabels.push(node);
        if (this.settings.zIndex) {
          if (data.zIndex < nodeZExtent[0])
            nodeZExtent[0] = data.zIndex;
          if (data.zIndex > nodeZExtent[1])
            nodeZExtent[1] = data.zIndex;
        }
      }
      for (var type in this.nodePrograms) {
        if (!this.nodePrograms.hasOwnProperty(type)) {
          throw new Error("Sigma: could not find a suitable program for node type \"".concat(type, "\"!"));
        }
        this.nodePrograms[type].reallocate(nodesPerPrograms[type] || 0);
        nodesPerPrograms[type] = 0;
      }
      if (this.settings.zIndex && nodeZExtent[0] !== nodeZExtent[1])
        nodes = (0, utils_1.zIndexOrdering)(nodeZExtent, function(node2) {
          return _this.nodeDataCache[node2].zIndex;
        }, nodes);
      var normalizationRatio = this.normalizationFunction.ratio;
      for (var i = 0, l2 = nodes.length;i < l2; i++) {
        var node = nodes[i];
        var data = this.nodeDataCache[node];
        this.quadtree.add(node, data.x, 1 - data.y, this.scaleSize(data.size, 1) / normalizationRatio);
        if (typeof data.label === "string" && !data.hidden)
          this.labelGrid.add(node, data.size, this.framedGraphToViewport(data, { matrix: nullCameraMatrix }));
        var nodeProgram = this.nodePrograms[data.type];
        if (!nodeProgram)
          throw new Error("Sigma: could not find a suitable program for node type \"".concat(data.type, "\"!"));
        nodeProgram.process(nodesPerPrograms[data.type]++, data);
        if (data.highlighted && !data.hidden)
          this.highlightedNodes.add(node);
      }
      this.labelGrid.organize();
      var edgesPerPrograms = {};
      var edges = graph.edges();
      for (var i = 0, l2 = edges.length;i < l2; i++) {
        var edge = edges[i];
        var attr = Object.assign({}, graph.getEdgeAttributes(edge));
        if (settings.edgeReducer)
          attr = settings.edgeReducer(edge, attr);
        var data = applyEdgeDefaults(this.settings, edge, attr);
        edgesPerPrograms[data.type] = (edgesPerPrograms[data.type] || 0) + 1;
        this.edgeDataCache[edge] = data;
        if (data.forceLabel && !data.hidden)
          this.edgesWithForcedLabels.push(edge);
        if (this.settings.zIndex) {
          if (data.zIndex < edgeZExtent[0])
            edgeZExtent[0] = data.zIndex;
          if (data.zIndex > edgeZExtent[1])
            edgeZExtent[1] = data.zIndex;
        }
      }
      for (var type in this.edgePrograms) {
        if (!this.edgePrograms.hasOwnProperty(type)) {
          throw new Error("Sigma: could not find a suitable program for edge type \"".concat(type, "\"!"));
        }
        this.edgePrograms[type].reallocate(edgesPerPrograms[type] || 0);
        edgesPerPrograms[type] = 0;
      }
      if (this.settings.zIndex && edgeZExtent[0] !== edgeZExtent[1])
        edges = (0, utils_1.zIndexOrdering)(edgeZExtent, function(edge2) {
          return _this.edgeDataCache[edge2].zIndex;
        }, edges);
      for (var i = 0, l2 = edges.length;i < l2; i++) {
        var edge = edges[i];
        var data = this.edgeDataCache[edge];
        var extremities = graph.extremities(edge), sourceData = this.nodeDataCache[extremities[0]], targetData = this.nodeDataCache[extremities[1]];
        this.edgePrograms[data.type].process(edgesPerPrograms[data.type]++, sourceData, targetData, data);
      }
      return this;
    };
    Sigma2.prototype.handleSettingsUpdate = function() {
      this.camera.minRatio = this.settings.minCameraRatio;
      this.camera.maxRatio = this.settings.maxCameraRatio;
      this.camera.setState(this.camera.validateState(this.camera.getState()));
      return this;
    };
    Sigma2.prototype.renderLabels = function() {
      if (!this.settings.renderLabels)
        return this;
      var cameraState = this.camera.getState();
      var labelsToDisplay = this.labelGrid.getLabelsToDisplay(cameraState.ratio, this.settings.labelDensity);
      (0, extend_1.default)(labelsToDisplay, this.nodesWithForcedLabels);
      this.displayedNodeLabels = new Set;
      var context = this.canvasContexts.labels;
      for (var i = 0, l2 = labelsToDisplay.length;i < l2; i++) {
        var node = labelsToDisplay[i];
        var data = this.nodeDataCache[node];
        if (this.displayedNodeLabels.has(node))
          continue;
        if (data.hidden)
          continue;
        var _a = this.framedGraphToViewport(data), x2 = _a.x, y2 = _a.y;
        var size = this.scaleSize(data.size);
        if (!data.forceLabel && size < this.settings.labelRenderedSizeThreshold)
          continue;
        if (x2 < -X_LABEL_MARGIN || x2 > this.width + X_LABEL_MARGIN || y2 < -Y_LABEL_MARGIN || y2 > this.height + Y_LABEL_MARGIN)
          continue;
        this.displayedNodeLabels.add(node);
        this.settings.labelRenderer(context, __assign(__assign({ key: node }, data), { size, x: x2, y: y2 }), this.settings);
      }
      return this;
    };
    Sigma2.prototype.renderEdgeLabels = function() {
      if (!this.settings.renderEdgeLabels)
        return this;
      var context = this.canvasContexts.edgeLabels;
      context.clearRect(0, 0, this.width, this.height);
      var edgeLabelsToDisplay = (0, labels_1.edgeLabelsToDisplayFromNodes)({
        graph: this.graph,
        hoveredNode: this.hoveredNode,
        displayedNodeLabels: this.displayedNodeLabels,
        highlightedNodes: this.highlightedNodes
      }).concat(this.edgesWithForcedLabels);
      var displayedLabels = new Set;
      for (var i = 0, l2 = edgeLabelsToDisplay.length;i < l2; i++) {
        var edge = edgeLabelsToDisplay[i], extremities = this.graph.extremities(edge), sourceData = this.nodeDataCache[extremities[0]], targetData = this.nodeDataCache[extremities[1]], edgeData = this.edgeDataCache[edge];
        if (displayedLabels.has(edge))
          continue;
        if (edgeData.hidden || sourceData.hidden || targetData.hidden) {
          continue;
        }
        this.settings.edgeLabelRenderer(context, __assign(__assign({ key: edge }, edgeData), { size: this.scaleSize(edgeData.size) }), __assign(__assign(__assign({ key: extremities[0] }, sourceData), this.framedGraphToViewport(sourceData)), { size: this.scaleSize(sourceData.size) }), __assign(__assign(__assign({ key: extremities[1] }, targetData), this.framedGraphToViewport(targetData)), { size: this.scaleSize(targetData.size) }), this.settings);
        displayedLabels.add(edge);
      }
      this.displayedEdgeLabels = displayedLabels;
      return this;
    };
    Sigma2.prototype.renderHighlightedNodes = function() {
      var _this = this;
      var context = this.canvasContexts.hovers;
      context.clearRect(0, 0, this.width, this.height);
      var render = function(node) {
        var data = _this.nodeDataCache[node];
        var _a = _this.framedGraphToViewport(data), x2 = _a.x, y2 = _a.y;
        var size = _this.scaleSize(data.size);
        _this.settings.hoverRenderer(context, __assign(__assign({ key: node }, data), { size, x: x2, y: y2 }), _this.settings);
      };
      var nodesToRender = [];
      if (this.hoveredNode && !this.nodeDataCache[this.hoveredNode].hidden) {
        nodesToRender.push(this.hoveredNode);
      }
      this.highlightedNodes.forEach(function(node) {
        if (node !== _this.hoveredNode)
          nodesToRender.push(node);
      });
      nodesToRender.forEach(function(node) {
        return render(node);
      });
      var nodesPerPrograms = {};
      nodesToRender.forEach(function(node) {
        var type2 = _this.nodeDataCache[node].type;
        nodesPerPrograms[type2] = (nodesPerPrograms[type2] || 0) + 1;
      });
      for (var type in this.nodeHoverPrograms) {
        this.nodeHoverPrograms[type].reallocate(nodesPerPrograms[type] || 0);
        nodesPerPrograms[type] = 0;
      }
      nodesToRender.forEach(function(node) {
        var data = _this.nodeDataCache[node];
        _this.nodeHoverPrograms[data.type].process(nodesPerPrograms[data.type]++, data);
      });
      this.webGLContexts.hoverNodes.clear(this.webGLContexts.hoverNodes.COLOR_BUFFER_BIT);
      for (var type in this.nodeHoverPrograms) {
        var program = this.nodeHoverPrograms[type];
        program.render({
          matrix: this.matrix,
          width: this.width,
          height: this.height,
          pixelRatio: this.pixelRatio,
          zoomRatio: this.camera.ratio,
          sizeRatio: 1 / this.scaleSize(),
          correctionRatio: this.correctionRatio
        });
      }
    };
    Sigma2.prototype.scheduleHighlightedNodesRender = function() {
      var _this = this;
      if (this.renderHighlightedNodesFrame || this.renderFrame)
        return;
      this.renderHighlightedNodesFrame = (0, utils_1.requestFrame)(function() {
        _this.renderHighlightedNodesFrame = null;
        _this.renderHighlightedNodes();
        _this.renderEdgeLabels();
      });
    };
    Sigma2.prototype.render = function() {
      var _this = this;
      this.emit("beforeRender");
      var exitRender = function() {
        _this.emit("afterRender");
        return _this;
      };
      if (this.renderFrame) {
        (0, utils_1.cancelFrame)(this.renderFrame);
        this.renderFrame = null;
      }
      this.resize();
      if (this.needToProcess)
        this.process();
      this.needToProcess = false;
      this.clear();
      if (!this.graph.order)
        return exitRender();
      var mouseCaptor = this.mouseCaptor;
      var moving = this.camera.isAnimated() || mouseCaptor.isMoving || mouseCaptor.draggedEvents || mouseCaptor.currentWheelDirection;
      var cameraState = this.camera.getState();
      var viewportDimensions = this.getDimensions();
      var graphDimensions = this.getGraphDimensions();
      var padding = this.getSetting("stagePadding") || 0;
      this.matrix = (0, utils_1.matrixFromCamera)(cameraState, viewportDimensions, graphDimensions, padding);
      this.invMatrix = (0, utils_1.matrixFromCamera)(cameraState, viewportDimensions, graphDimensions, padding, true);
      this.correctionRatio = (0, utils_1.getMatrixImpact)(this.matrix, cameraState, viewportDimensions);
      this.graphToViewportRatio = this.getGraphToViewportRatio();
      var params = {
        matrix: this.matrix,
        width: this.width,
        height: this.height,
        pixelRatio: this.pixelRatio,
        zoomRatio: this.camera.ratio,
        sizeRatio: 1 / this.scaleSize(),
        correctionRatio: this.correctionRatio
      };
      for (var type in this.nodePrograms) {
        var program = this.nodePrograms[type];
        program.render(params);
      }
      if (!this.settings.hideEdgesOnMove || !moving) {
        for (var type in this.edgePrograms) {
          var program = this.edgePrograms[type];
          program.render(params);
        }
      }
      if (this.settings.hideLabelsOnMove && moving)
        return exitRender();
      this.renderLabels();
      this.renderEdgeLabels();
      this.renderHighlightedNodes();
      return exitRender();
    };
    Sigma2.prototype.getCamera = function() {
      return this.camera;
    };
    Sigma2.prototype.setCamera = function(camera) {
      this.unbindCameraHandlers();
      this.camera = camera;
      this.bindCameraHandlers();
    };
    Sigma2.prototype.getContainer = function() {
      return this.container;
    };
    Sigma2.prototype.getGraph = function() {
      return this.graph;
    };
    Sigma2.prototype.setGraph = function(graph) {
      if (graph === this.graph)
        return;
      this.unbindGraphHandlers();
      this.nodeDataCache = {};
      this.edgeDataCache = {};
      this.displayedNodeLabels.clear();
      this.displayedEdgeLabels.clear();
      this.highlightedNodes.clear();
      this.hoveredNode = null;
      this.hoveredEdge = null;
      this.nodesWithForcedLabels.length = 0;
      this.edgesWithForcedLabels.length = 0;
      if (this.checkEdgesEventsFrame !== null) {
        (0, utils_1.cancelFrame)(this.checkEdgesEventsFrame);
        this.checkEdgesEventsFrame = null;
      }
      this.graph = graph;
      this.bindGraphHandlers();
      this.refresh();
    };
    Sigma2.prototype.getMouseCaptor = function() {
      return this.mouseCaptor;
    };
    Sigma2.prototype.getTouchCaptor = function() {
      return this.touchCaptor;
    };
    Sigma2.prototype.getDimensions = function() {
      return { width: this.width, height: this.height };
    };
    Sigma2.prototype.getGraphDimensions = function() {
      var extent = this.customBBox || this.nodeExtent;
      return {
        width: extent.x[1] - extent.x[0] || 1,
        height: extent.y[1] - extent.y[0] || 1
      };
    };
    Sigma2.prototype.getNodeDisplayData = function(key) {
      var node = this.nodeDataCache[key];
      return node ? Object.assign({}, node) : undefined;
    };
    Sigma2.prototype.getEdgeDisplayData = function(key) {
      var edge = this.edgeDataCache[key];
      return edge ? Object.assign({}, edge) : undefined;
    };
    Sigma2.prototype.getNodeDisplayedLabels = function() {
      return new Set(this.displayedNodeLabels);
    };
    Sigma2.prototype.getEdgeDisplayedLabels = function() {
      return new Set(this.displayedEdgeLabels);
    };
    Sigma2.prototype.getSettings = function() {
      return __assign({}, this.settings);
    };
    Sigma2.prototype.getSetting = function(key) {
      return this.settings[key];
    };
    Sigma2.prototype.setSetting = function(key, value) {
      this.settings[key] = value;
      (0, settings_1.validateSettings)(this.settings);
      this.handleSettingsUpdate();
      this.scheduleRefresh();
      return this;
    };
    Sigma2.prototype.updateSetting = function(key, updater) {
      this.settings[key] = updater(this.settings[key]);
      (0, settings_1.validateSettings)(this.settings);
      this.handleSettingsUpdate();
      this.scheduleRefresh();
      return this;
    };
    Sigma2.prototype.resize = function() {
      var previousWidth = this.width, previousHeight = this.height;
      this.width = this.container.offsetWidth;
      this.height = this.container.offsetHeight;
      this.pixelRatio = (0, utils_1.getPixelRatio)();
      if (this.width === 0) {
        if (this.settings.allowInvalidContainer)
          this.width = 1;
        else
          throw new Error("Sigma: Container has no width. You can set the allowInvalidContainer setting to true to stop seeing this error.");
      }
      if (this.height === 0) {
        if (this.settings.allowInvalidContainer)
          this.height = 1;
        else
          throw new Error("Sigma: Container has no height. You can set the allowInvalidContainer setting to true to stop seeing this error.");
      }
      if (previousWidth === this.width && previousHeight === this.height)
        return this;
      this.emit("resize");
      for (var id in this.elements) {
        var element = this.elements[id];
        element.style.width = this.width + "px";
        element.style.height = this.height + "px";
      }
      for (var id in this.canvasContexts) {
        this.elements[id].setAttribute("width", this.width * this.pixelRatio + "px");
        this.elements[id].setAttribute("height", this.height * this.pixelRatio + "px");
        if (this.pixelRatio !== 1)
          this.canvasContexts[id].scale(this.pixelRatio, this.pixelRatio);
      }
      for (var id in this.webGLContexts) {
        this.elements[id].setAttribute("width", this.width * this.pixelRatio + "px");
        this.elements[id].setAttribute("height", this.height * this.pixelRatio + "px");
        this.webGLContexts[id].viewport(0, 0, this.width * this.pixelRatio, this.height * this.pixelRatio);
      }
      return this;
    };
    Sigma2.prototype.clear = function() {
      this.webGLContexts.nodes.clear(this.webGLContexts.nodes.COLOR_BUFFER_BIT);
      this.webGLContexts.edges.clear(this.webGLContexts.edges.COLOR_BUFFER_BIT);
      this.webGLContexts.hoverNodes.clear(this.webGLContexts.hoverNodes.COLOR_BUFFER_BIT);
      this.canvasContexts.labels.clearRect(0, 0, this.width, this.height);
      this.canvasContexts.hovers.clearRect(0, 0, this.width, this.height);
      this.canvasContexts.edgeLabels.clearRect(0, 0, this.width, this.height);
      return this;
    };
    Sigma2.prototype.refresh = function() {
      this.needToProcess = true;
      this.render();
      return this;
    };
    Sigma2.prototype.scheduleRender = function() {
      var _this = this;
      if (!this.renderFrame) {
        this.renderFrame = (0, utils_1.requestFrame)(function() {
          _this.render();
        });
      }
      return this;
    };
    Sigma2.prototype.scheduleRefresh = function() {
      this.needToProcess = true;
      this.scheduleRender();
      return this;
    };
    Sigma2.prototype.getViewportZoomedState = function(viewportTarget, newRatio) {
      var _a = this.camera.getState(), ratio = _a.ratio, angle = _a.angle, x2 = _a.x, y2 = _a.y;
      var ratioDiff = newRatio / ratio;
      var center = {
        x: this.width / 2,
        y: this.height / 2
      };
      var graphMousePosition = this.viewportToFramedGraph(viewportTarget);
      var graphCenterPosition = this.viewportToFramedGraph(center);
      return {
        angle,
        x: (graphMousePosition.x - graphCenterPosition.x) * (1 - ratioDiff) + x2,
        y: (graphMousePosition.y - graphCenterPosition.y) * (1 - ratioDiff) + y2,
        ratio: newRatio
      };
    };
    Sigma2.prototype.viewRectangle = function() {
      var marginX = 0 * this.width / 8, marginY = 0 * this.height / 8;
      var p1 = this.viewportToFramedGraph({ x: 0 - marginX, y: 0 - marginY }), p2 = this.viewportToFramedGraph({ x: this.width + marginX, y: 0 - marginY }), h2 = this.viewportToFramedGraph({ x: 0, y: this.height + marginY });
      return {
        x1: p1.x,
        y1: p1.y,
        x2: p2.x,
        y2: p2.y,
        height: p2.y - h2.y
      };
    };
    Sigma2.prototype.framedGraphToViewport = function(coordinates, override) {
      if (override === undefined) {
        override = {};
      }
      var recomputeMatrix = !!override.cameraState || !!override.viewportDimensions || !!override.graphDimensions;
      var matrix = override.matrix ? override.matrix : recomputeMatrix ? (0, utils_1.matrixFromCamera)(override.cameraState || this.camera.getState(), override.viewportDimensions || this.getDimensions(), override.graphDimensions || this.getGraphDimensions(), override.padding || this.getSetting("stagePadding") || 0) : this.matrix;
      var viewportPos = (0, matrices_1.multiplyVec2)(matrix, coordinates);
      return {
        x: (1 + viewportPos.x) * this.width / 2,
        y: (1 - viewportPos.y) * this.height / 2
      };
    };
    Sigma2.prototype.viewportToFramedGraph = function(coordinates, override) {
      if (override === undefined) {
        override = {};
      }
      var recomputeMatrix = !!override.cameraState || !!override.viewportDimensions || !override.graphDimensions;
      var invMatrix = override.matrix ? override.matrix : recomputeMatrix ? (0, utils_1.matrixFromCamera)(override.cameraState || this.camera.getState(), override.viewportDimensions || this.getDimensions(), override.graphDimensions || this.getGraphDimensions(), override.padding || this.getSetting("stagePadding") || 0, true) : this.invMatrix;
      var res = (0, matrices_1.multiplyVec2)(invMatrix, {
        x: coordinates.x / this.width * 2 - 1,
        y: 1 - coordinates.y / this.height * 2
      });
      if (isNaN(res.x))
        res.x = 0;
      if (isNaN(res.y))
        res.y = 0;
      return res;
    };
    Sigma2.prototype.viewportToGraph = function(viewportPoint, override) {
      if (override === undefined) {
        override = {};
      }
      return this.normalizationFunction.inverse(this.viewportToFramedGraph(viewportPoint, override));
    };
    Sigma2.prototype.graphToViewport = function(graphPoint, override) {
      if (override === undefined) {
        override = {};
      }
      return this.framedGraphToViewport(this.normalizationFunction(graphPoint), override);
    };
    Sigma2.prototype.getGraphToViewportRatio = function() {
      var graphP1 = { x: 0, y: 0 };
      var graphP2 = { x: 1, y: 1 };
      var graphD = Math.sqrt(Math.pow(graphP1.x - graphP2.x, 2) + Math.pow(graphP1.y - graphP2.y, 2));
      var viewportP1 = this.graphToViewport(graphP1);
      var viewportP2 = this.graphToViewport(graphP2);
      var viewportD = Math.sqrt(Math.pow(viewportP1.x - viewportP2.x, 2) + Math.pow(viewportP1.y - viewportP2.y, 2));
      return viewportD / graphD;
    };
    Sigma2.prototype.getBBox = function() {
      return (0, utils_1.graphExtent)(this.graph);
    };
    Sigma2.prototype.getCustomBBox = function() {
      return this.customBBox;
    };
    Sigma2.prototype.setCustomBBox = function(customBBox) {
      this.customBBox = customBBox;
      this.scheduleRender();
      return this;
    };
    Sigma2.prototype.kill = function() {
      this.emit("kill");
      this.removeAllListeners();
      this.unbindCameraHandlers();
      window.removeEventListener("resize", this.activeListeners.handleResize);
      this.mouseCaptor.kill();
      this.touchCaptor.kill();
      this.unbindGraphHandlers();
      this.quadtree = new quadtree_1.default;
      this.nodeDataCache = {};
      this.edgeDataCache = {};
      this.nodesWithForcedLabels = [];
      this.edgesWithForcedLabels = [];
      this.highlightedNodes.clear();
      if (this.renderFrame) {
        (0, utils_1.cancelFrame)(this.renderFrame);
        this.renderFrame = null;
      }
      if (this.renderHighlightedNodesFrame) {
        (0, utils_1.cancelFrame)(this.renderHighlightedNodesFrame);
        this.renderHighlightedNodesFrame = null;
      }
      var container = this.container;
      while (container.firstChild)
        container.removeChild(container.firstChild);
    };
    Sigma2.prototype.scaleSize = function(size, cameraRatio) {
      if (size === undefined) {
        size = 1;
      }
      if (cameraRatio === undefined) {
        cameraRatio = this.camera.ratio;
      }
      return size / this.settings.zoomToSizeRatioFunction(cameraRatio) * (this.getSetting("itemSizesReference") === "positions" ? cameraRatio * this.graphToViewportRatio : 1);
    };
    Sigma2.prototype.getCanvases = function() {
      return __assign({}, this.elements);
    };
    return Sigma2;
  }(types_1.TypedEventEmitter);
  exports.default = Sigma;
});

// node_modules/sigma/index.js
var require_sigma2 = __commonJS((exports) => {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Sigma = exports.MouseCaptor = exports.QuadTree = exports.Camera = undefined;
  var sigma_1 = __importDefault(require_sigma());
  exports.Sigma = sigma_1.default;
  var camera_1 = __importDefault(require_camera());
  exports.Camera = camera_1.default;
  var quadtree_1 = __importDefault(require_quadtree());
  exports.QuadTree = quadtree_1.default;
  var mouse_1 = __importDefault(require_mouse());
  exports.MouseCaptor = mouse_1.default;
  exports.default = sigma_1.default;
});

// node_modules/graphology/dist/graphology.umd.min.js
var require_graphology_umd_min = __commonJS((exports, module) => {
  (function(t, e) {
    typeof exports == "object" && typeof module != "undefined" ? module.exports = e() : typeof define == "function" && define.amd ? define(e) : (t = typeof globalThis != "undefined" ? globalThis : t || self).graphology = e();
  })(exports, function() {
    function t(e2) {
      return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t2) {
        return typeof t2;
      } : function(t2) {
        return t2 && typeof Symbol == "function" && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
      }, t(e2);
    }
    function e(t2, e2) {
      t2.prototype = Object.create(e2.prototype), t2.prototype.constructor = t2, r(t2, e2);
    }
    function n(t2) {
      return n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
        return t3.__proto__ || Object.getPrototypeOf(t3);
      }, n(t2);
    }
    function r(t2, e2) {
      return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
        return t3.__proto__ = e3, t3;
      }, r(t2, e2);
    }
    function i() {
      if (typeof Reflect == "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy == "function")
        return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), true;
      } catch (t2) {
        return false;
      }
    }
    function o2(t2, e2, n2) {
      return o2 = i() ? Reflect.construct.bind() : function(t3, e3, n3) {
        var i2 = [null];
        i2.push.apply(i2, e3);
        var o3 = new (Function.bind.apply(t3, i2));
        return n3 && r(o3, n3.prototype), o3;
      }, o2.apply(null, arguments);
    }
    function a2(t2) {
      var e2 = typeof Map == "function" ? new Map : undefined;
      return a2 = function(t3) {
        if (t3 === null || (i2 = t3, Function.toString.call(i2).indexOf("[native code]") === -1))
          return t3;
        var i2;
        if (typeof t3 != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (e2 !== undefined) {
          if (e2.has(t3))
            return e2.get(t3);
          e2.set(t3, a3);
        }
        function a3() {
          return o2(t3, arguments, n(this).constructor);
        }
        return a3.prototype = Object.create(t3.prototype, { constructor: { value: a3, enumerable: false, writable: true, configurable: true } }), r(a3, t3);
      }, a2(t2);
    }
    function c(t2) {
      if (t2 === undefined)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t2;
    }
    var u = function() {
      for (var t2 = arguments[0], e2 = 1, n2 = arguments.length;e2 < n2; e2++)
        if (arguments[e2])
          for (var r2 in arguments[e2])
            t2[r2] = arguments[e2][r2];
      return t2;
    };
    function d2(t2, e2, n2, r2) {
      var i2 = t2._nodes.get(e2), o3 = null;
      return i2 ? o3 = r2 === "mixed" ? i2.out && i2.out[n2] || i2.undirected && i2.undirected[n2] : r2 === "directed" ? i2.out && i2.out[n2] : i2.undirected && i2.undirected[n2] : o3;
    }
    function s(e2) {
      return t(e2) === "object" && e2 !== null;
    }
    function h2(t2) {
      var e2;
      for (e2 in t2)
        return false;
      return true;
    }
    function p(t2, e2, n2) {
      Object.defineProperty(t2, e2, { enumerable: false, configurable: false, writable: true, value: n2 });
    }
    function f(t2, e2, n2) {
      var r2 = { enumerable: true, configurable: true };
      typeof n2 == "function" ? r2.get = n2 : (r2.value = n2, r2.writable = false), Object.defineProperty(t2, e2, r2);
    }
    function l2(t2) {
      return !!s(t2) && !(t2.attributes && !Array.isArray(t2.attributes));
    }
    typeof Object.assign == "function" && (u = Object.assign);
    var g2, y2 = { exports: {} }, w2 = typeof Reflect == "object" ? Reflect : null, v2 = w2 && typeof w2.apply == "function" ? w2.apply : function(t2, e2, n2) {
      return Function.prototype.apply.call(t2, e2, n2);
    };
    g2 = w2 && typeof w2.ownKeys == "function" ? w2.ownKeys : Object.getOwnPropertySymbols ? function(t2) {
      return Object.getOwnPropertyNames(t2).concat(Object.getOwnPropertySymbols(t2));
    } : function(t2) {
      return Object.getOwnPropertyNames(t2);
    };
    var b2 = Number.isNaN || function(t2) {
      return t2 != t2;
    };
    function m2() {
      m2.init.call(this);
    }
    y2.exports = m2, y2.exports.once = function(t2, e2) {
      return new Promise(function(n2, r2) {
        function i2(n3) {
          t2.removeListener(e2, o3), r2(n3);
        }
        function o3() {
          typeof t2.removeListener == "function" && t2.removeListener("error", i2), n2([].slice.call(arguments));
        }
        U(t2, e2, o3, { once: true }), e2 !== "error" && function(t3, e3, n3) {
          typeof t3.on == "function" && U(t3, "error", e3, n3);
        }(t2, i2, { once: true });
      });
    }, m2.EventEmitter = m2, m2.prototype._events = undefined, m2.prototype._eventsCount = 0, m2.prototype._maxListeners = undefined;
    var k = 10;
    function _2(t2) {
      if (typeof t2 != "function")
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t2);
    }
    function G(t2) {
      return t2._maxListeners === undefined ? m2.defaultMaxListeners : t2._maxListeners;
    }
    function x2(t2, e2, n2, r2) {
      var i2, o3, a3, c2;
      if (_2(n2), (o3 = t2._events) === undefined ? (o3 = t2._events = Object.create(null), t2._eventsCount = 0) : (o3.newListener !== undefined && (t2.emit("newListener", e2, n2.listener ? n2.listener : n2), o3 = t2._events), a3 = o3[e2]), a3 === undefined)
        a3 = o3[e2] = n2, ++t2._eventsCount;
      else if (typeof a3 == "function" ? a3 = o3[e2] = r2 ? [n2, a3] : [a3, n2] : r2 ? a3.unshift(n2) : a3.push(n2), (i2 = G(t2)) > 0 && a3.length > i2 && !a3.warned) {
        a3.warned = true;
        var u2 = new Error("Possible EventEmitter memory leak detected. " + a3.length + " " + String(e2) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        u2.name = "MaxListenersExceededWarning", u2.emitter = t2, u2.type = e2, u2.count = a3.length, c2 = u2, console && console.warn && console.warn(c2);
      }
      return t2;
    }
    function E2() {
      if (!this.fired)
        return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function A2(t2, e2, n2) {
      var r2 = { fired: false, wrapFn: undefined, target: t2, type: e2, listener: n2 }, i2 = E2.bind(r2);
      return i2.listener = n2, r2.wrapFn = i2, i2;
    }
    function L2(t2, e2, n2) {
      var r2 = t2._events;
      if (r2 === undefined)
        return [];
      var i2 = r2[e2];
      return i2 === undefined ? [] : typeof i2 == "function" ? n2 ? [i2.listener || i2] : [i2] : n2 ? function(t3) {
        for (var e3 = new Array(t3.length), n3 = 0;n3 < e3.length; ++n3)
          e3[n3] = t3[n3].listener || t3[n3];
        return e3;
      }(i2) : D(i2, i2.length);
    }
    function S(t2) {
      var e2 = this._events;
      if (e2 !== undefined) {
        var n2 = e2[t2];
        if (typeof n2 == "function")
          return 1;
        if (n2 !== undefined)
          return n2.length;
      }
      return 0;
    }
    function D(t2, e2) {
      for (var n2 = new Array(e2), r2 = 0;r2 < e2; ++r2)
        n2[r2] = t2[r2];
      return n2;
    }
    function U(t2, e2, n2, r2) {
      if (typeof t2.on == "function")
        r2.once ? t2.once(e2, n2) : t2.on(e2, n2);
      else {
        if (typeof t2.addEventListener != "function")
          throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t2);
        t2.addEventListener(e2, function i(o3) {
          r2.once && t2.removeEventListener(e2, i), n2(o3);
        });
      }
    }
    function N2(t2) {
      if (typeof t2 != "function")
        throw new Error("obliterator/iterator: expecting a function!");
      this.next = t2;
    }
    Object.defineProperty(m2, "defaultMaxListeners", { enumerable: true, get: function() {
      return k;
    }, set: function(t2) {
      if (typeof t2 != "number" || t2 < 0 || b2(t2))
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t2 + ".");
      k = t2;
    } }), m2.init = function() {
      this._events !== undefined && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || undefined;
    }, m2.prototype.setMaxListeners = function(t2) {
      if (typeof t2 != "number" || t2 < 0 || b2(t2))
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t2 + ".");
      return this._maxListeners = t2, this;
    }, m2.prototype.getMaxListeners = function() {
      return G(this);
    }, m2.prototype.emit = function(t2) {
      for (var e2 = [], n2 = 1;n2 < arguments.length; n2++)
        e2.push(arguments[n2]);
      var r2 = t2 === "error", i2 = this._events;
      if (i2 !== undefined)
        r2 = r2 && i2.error === undefined;
      else if (!r2)
        return false;
      if (r2) {
        var o3;
        if (e2.length > 0 && (o3 = e2[0]), o3 instanceof Error)
          throw o3;
        var a3 = new Error("Unhandled error." + (o3 ? " (" + o3.message + ")" : ""));
        throw a3.context = o3, a3;
      }
      var c2 = i2[t2];
      if (c2 === undefined)
        return false;
      if (typeof c2 == "function")
        v2(c2, this, e2);
      else {
        var u2 = c2.length, d3 = D(c2, u2);
        for (n2 = 0;n2 < u2; ++n2)
          v2(d3[n2], this, e2);
      }
      return true;
    }, m2.prototype.addListener = function(t2, e2) {
      return x2(this, t2, e2, false);
    }, m2.prototype.on = m2.prototype.addListener, m2.prototype.prependListener = function(t2, e2) {
      return x2(this, t2, e2, true);
    }, m2.prototype.once = function(t2, e2) {
      return _2(e2), this.on(t2, A2(this, t2, e2)), this;
    }, m2.prototype.prependOnceListener = function(t2, e2) {
      return _2(e2), this.prependListener(t2, A2(this, t2, e2)), this;
    }, m2.prototype.removeListener = function(t2, e2) {
      var n2, r2, i2, o3, a3;
      if (_2(e2), (r2 = this._events) === undefined)
        return this;
      if ((n2 = r2[t2]) === undefined)
        return this;
      if (n2 === e2 || n2.listener === e2)
        --this._eventsCount == 0 ? this._events = Object.create(null) : (delete r2[t2], r2.removeListener && this.emit("removeListener", t2, n2.listener || e2));
      else if (typeof n2 != "function") {
        for (i2 = -1, o3 = n2.length - 1;o3 >= 0; o3--)
          if (n2[o3] === e2 || n2[o3].listener === e2) {
            a3 = n2[o3].listener, i2 = o3;
            break;
          }
        if (i2 < 0)
          return this;
        i2 === 0 ? n2.shift() : function(t3, e3) {
          for (;e3 + 1 < t3.length; e3++)
            t3[e3] = t3[e3 + 1];
          t3.pop();
        }(n2, i2), n2.length === 1 && (r2[t2] = n2[0]), r2.removeListener !== undefined && this.emit("removeListener", t2, a3 || e2);
      }
      return this;
    }, m2.prototype.off = m2.prototype.removeListener, m2.prototype.removeAllListeners = function(t2) {
      var e2, n2, r2;
      if ((n2 = this._events) === undefined)
        return this;
      if (n2.removeListener === undefined)
        return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : n2[t2] !== undefined && (--this._eventsCount == 0 ? this._events = Object.create(null) : delete n2[t2]), this;
      if (arguments.length === 0) {
        var i2, o3 = Object.keys(n2);
        for (r2 = 0;r2 < o3.length; ++r2)
          (i2 = o3[r2]) !== "removeListener" && this.removeAllListeners(i2);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
      }
      if (typeof (e2 = n2[t2]) == "function")
        this.removeListener(t2, e2);
      else if (e2 !== undefined)
        for (r2 = e2.length - 1;r2 >= 0; r2--)
          this.removeListener(t2, e2[r2]);
      return this;
    }, m2.prototype.listeners = function(t2) {
      return L2(this, t2, true);
    }, m2.prototype.rawListeners = function(t2) {
      return L2(this, t2, false);
    }, m2.listenerCount = function(t2, e2) {
      return typeof t2.listenerCount == "function" ? t2.listenerCount(e2) : S.call(t2, e2);
    }, m2.prototype.listenerCount = S, m2.prototype.eventNames = function() {
      return this._eventsCount > 0 ? g2(this._events) : [];
    }, typeof Symbol != "undefined" && (N2.prototype[Symbol.iterator] = function() {
      return this;
    }), N2.of = function() {
      var t2 = arguments, e2 = t2.length, n2 = 0;
      return new N2(function() {
        return n2 >= e2 ? { done: true } : { done: false, value: t2[n2++] };
      });
    }, N2.empty = function() {
      return new N2(function() {
        return { done: true };
      });
    }, N2.fromSequence = function(t2) {
      var e2 = 0, n2 = t2.length;
      return new N2(function() {
        return e2 >= n2 ? { done: true } : { done: false, value: t2[e2++] };
      });
    }, N2.is = function(t2) {
      return t2 instanceof N2 || typeof t2 == "object" && t2 !== null && typeof t2.next == "function";
    };
    var O = N2, j2 = {};
    j2.ARRAY_BUFFER_SUPPORT = typeof ArrayBuffer != "undefined", j2.SYMBOL_SUPPORT = typeof Symbol != "undefined";
    var C2 = O, M2 = j2, z = M2.ARRAY_BUFFER_SUPPORT, W = M2.SYMBOL_SUPPORT;
    var P2 = function(t2) {
      var e2 = function(t3) {
        return typeof t3 == "string" || Array.isArray(t3) || z && ArrayBuffer.isView(t3) ? C2.fromSequence(t3) : typeof t3 != "object" || t3 === null ? null : W && typeof t3[Symbol.iterator] == "function" ? t3[Symbol.iterator]() : typeof t3.next == "function" ? t3 : null;
      }(t2);
      if (!e2)
        throw new Error("obliterator: target is not iterable nor a valid iterator.");
      return e2;
    }, R2 = P2, K = function(t2, e2) {
      for (var n2, r2 = arguments.length > 1 ? e2 : 1 / 0, i2 = r2 !== 1 / 0 ? new Array(r2) : [], o3 = 0, a3 = R2(t2);; ) {
        if (o3 === r2)
          return i2;
        if ((n2 = a3.next()).done)
          return o3 !== e2 && (i2.length = o3), i2;
        i2[o3++] = n2.value;
      }
    }, T = function(t2) {
      function n2(e2) {
        var n3;
        return (n3 = t2.call(this) || this).name = "GraphError", n3.message = e2, n3;
      }
      return e(n2, t2), n2;
    }(a2(Error)), B = function(t2) {
      function n2(e2) {
        var r2;
        return (r2 = t2.call(this, e2) || this).name = "InvalidArgumentsGraphError", typeof Error.captureStackTrace == "function" && Error.captureStackTrace(c(r2), n2.prototype.constructor), r2;
      }
      return e(n2, t2), n2;
    }(T), F = function(t2) {
      function n2(e2) {
        var r2;
        return (r2 = t2.call(this, e2) || this).name = "NotFoundGraphError", typeof Error.captureStackTrace == "function" && Error.captureStackTrace(c(r2), n2.prototype.constructor), r2;
      }
      return e(n2, t2), n2;
    }(T), I = function(t2) {
      function n2(e2) {
        var r2;
        return (r2 = t2.call(this, e2) || this).name = "UsageGraphError", typeof Error.captureStackTrace == "function" && Error.captureStackTrace(c(r2), n2.prototype.constructor), r2;
      }
      return e(n2, t2), n2;
    }(T);
    function Y(t2, e2) {
      this.key = t2, this.attributes = e2, this.clear();
    }
    function q(t2, e2) {
      this.key = t2, this.attributes = e2, this.clear();
    }
    function J(t2, e2) {
      this.key = t2, this.attributes = e2, this.clear();
    }
    function V(t2, e2, n2, r2, i2) {
      this.key = e2, this.attributes = i2, this.undirected = t2, this.source = n2, this.target = r2;
    }
    Y.prototype.clear = function() {
      this.inDegree = 0, this.outDegree = 0, this.undirectedDegree = 0, this.undirectedLoops = 0, this.directedLoops = 0, this.in = {}, this.out = {}, this.undirected = {};
    }, q.prototype.clear = function() {
      this.inDegree = 0, this.outDegree = 0, this.directedLoops = 0, this.in = {}, this.out = {};
    }, J.prototype.clear = function() {
      this.undirectedDegree = 0, this.undirectedLoops = 0, this.undirected = {};
    }, V.prototype.attach = function() {
      var t2 = "out", e2 = "in";
      this.undirected && (t2 = e2 = "undirected");
      var n2 = this.source.key, r2 = this.target.key;
      this.source[t2][r2] = this, this.undirected && n2 === r2 || (this.target[e2][n2] = this);
    }, V.prototype.attachMulti = function() {
      var t2 = "out", e2 = "in", n2 = this.source.key, r2 = this.target.key;
      this.undirected && (t2 = e2 = "undirected");
      var i2 = this.source[t2], o3 = i2[r2];
      if (o3 === undefined)
        return i2[r2] = this, void (this.undirected && n2 === r2 || (this.target[e2][n2] = this));
      o3.previous = this, this.next = o3, i2[r2] = this, this.target[e2][n2] = this;
    }, V.prototype.detach = function() {
      var t2 = this.source.key, e2 = this.target.key, n2 = "out", r2 = "in";
      this.undirected && (n2 = r2 = "undirected"), delete this.source[n2][e2], delete this.target[r2][t2];
    }, V.prototype.detachMulti = function() {
      var t2 = this.source.key, e2 = this.target.key, n2 = "out", r2 = "in";
      this.undirected && (n2 = r2 = "undirected"), this.previous === undefined ? this.next === undefined ? (delete this.source[n2][e2], delete this.target[r2][t2]) : (this.next.previous = undefined, this.source[n2][e2] = this.next, this.target[r2][t2] = this.next) : (this.previous.next = this.next, this.next !== undefined && (this.next.previous = this.previous));
    };
    function H(t2, e2, n2, r2, i2, o3, a3) {
      var c2, u2, d3, s2;
      if (r2 = "" + r2, n2 === 0) {
        if (!(c2 = t2._nodes.get(r2)))
          throw new F("Graph.".concat(e2, ': could not find the "').concat(r2, '" node in the graph.'));
        d3 = i2, s2 = o3;
      } else if (n2 === 3) {
        if (i2 = "" + i2, !(u2 = t2._edges.get(i2)))
          throw new F("Graph.".concat(e2, ': could not find the "').concat(i2, '" edge in the graph.'));
        var h3 = u2.source.key, p2 = u2.target.key;
        if (r2 === h3)
          c2 = u2.target;
        else {
          if (r2 !== p2)
            throw new F("Graph.".concat(e2, ': the "').concat(r2, '" node is not attached to the "').concat(i2, '" edge (').concat(h3, ", ").concat(p2, ")."));
          c2 = u2.source;
        }
        d3 = o3, s2 = a3;
      } else {
        if (!(u2 = t2._edges.get(r2)))
          throw new F("Graph.".concat(e2, ': could not find the "').concat(r2, '" edge in the graph.'));
        c2 = n2 === 1 ? u2.source : u2.target, d3 = i2, s2 = o3;
      }
      return [c2, d3, s2];
    }
    var Q = [{ name: function(t2) {
      return "get".concat(t2, "Attribute");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2, i2) {
        var o3 = H(this, e2, n2, t3, r2, i2), a3 = o3[0], c2 = o3[1];
        return a3.attributes[c2];
      };
    } }, { name: function(t2) {
      return "get".concat(t2, "Attributes");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2) {
        return H(this, e2, n2, t3, r2)[0].attributes;
      };
    } }, { name: function(t2) {
      return "has".concat(t2, "Attribute");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2, i2) {
        var o3 = H(this, e2, n2, t3, r2, i2), a3 = o3[0], c2 = o3[1];
        return a3.attributes.hasOwnProperty(c2);
      };
    } }, { name: function(t2) {
      return "set".concat(t2, "Attribute");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2, i2, o3) {
        var a3 = H(this, e2, n2, t3, r2, i2, o3), c2 = a3[0], u2 = a3[1], d3 = a3[2];
        return c2.attributes[u2] = d3, this.emit("nodeAttributesUpdated", { key: c2.key, type: "set", attributes: c2.attributes, name: u2 }), this;
      };
    } }, { name: function(t2) {
      return "update".concat(t2, "Attribute");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2, i2, o3) {
        var a3 = H(this, e2, n2, t3, r2, i2, o3), c2 = a3[0], u2 = a3[1], d3 = a3[2];
        if (typeof d3 != "function")
          throw new B("Graph.".concat(e2, ": updater should be a function."));
        var s2 = c2.attributes, h3 = d3(s2[u2]);
        return s2[u2] = h3, this.emit("nodeAttributesUpdated", { key: c2.key, type: "set", attributes: c2.attributes, name: u2 }), this;
      };
    } }, { name: function(t2) {
      return "remove".concat(t2, "Attribute");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2, i2) {
        var o3 = H(this, e2, n2, t3, r2, i2), a3 = o3[0], c2 = o3[1];
        return delete a3.attributes[c2], this.emit("nodeAttributesUpdated", { key: a3.key, type: "remove", attributes: a3.attributes, name: c2 }), this;
      };
    } }, { name: function(t2) {
      return "replace".concat(t2, "Attributes");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2, i2) {
        var o3 = H(this, e2, n2, t3, r2, i2), a3 = o3[0], c2 = o3[1];
        if (!s(c2))
          throw new B("Graph.".concat(e2, ": provided attributes are not a plain object."));
        return a3.attributes = c2, this.emit("nodeAttributesUpdated", { key: a3.key, type: "replace", attributes: a3.attributes }), this;
      };
    } }, { name: function(t2) {
      return "merge".concat(t2, "Attributes");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2, i2) {
        var o3 = H(this, e2, n2, t3, r2, i2), a3 = o3[0], c2 = o3[1];
        if (!s(c2))
          throw new B("Graph.".concat(e2, ": provided attributes are not a plain object."));
        return u(a3.attributes, c2), this.emit("nodeAttributesUpdated", { key: a3.key, type: "merge", attributes: a3.attributes, data: c2 }), this;
      };
    } }, { name: function(t2) {
      return "update".concat(t2, "Attributes");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2, i2) {
        var o3 = H(this, e2, n2, t3, r2, i2), a3 = o3[0], c2 = o3[1];
        if (typeof c2 != "function")
          throw new B("Graph.".concat(e2, ": provided updater is not a function."));
        return a3.attributes = c2(a3.attributes), this.emit("nodeAttributesUpdated", { key: a3.key, type: "update", attributes: a3.attributes }), this;
      };
    } }];
    var X = [{ name: function(t2) {
      return "get".concat(t2, "Attribute");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2) {
        var i2;
        if (this.type !== "mixed" && n2 !== "mixed" && n2 !== this.type)
          throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
        if (arguments.length > 2) {
          if (this.multi)
            throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
          var o3 = "" + t3, a3 = "" + r2;
          if (r2 = arguments[2], !(i2 = d2(this, o3, a3, n2)))
            throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o3, '" - "').concat(a3, '").'));
        } else {
          if (n2 !== "mixed")
            throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
          if (t3 = "" + t3, !(i2 = this._edges.get(t3)))
            throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
        }
        return i2.attributes[r2];
      };
    } }, { name: function(t2) {
      return "get".concat(t2, "Attributes");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3) {
        var r2;
        if (this.type !== "mixed" && n2 !== "mixed" && n2 !== this.type)
          throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
        if (arguments.length > 1) {
          if (this.multi)
            throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
          var i2 = "" + t3, o3 = "" + arguments[1];
          if (!(r2 = d2(this, i2, o3, n2)))
            throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(i2, '" - "').concat(o3, '").'));
        } else {
          if (n2 !== "mixed")
            throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
          if (t3 = "" + t3, !(r2 = this._edges.get(t3)))
            throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
        }
        return r2.attributes;
      };
    } }, { name: function(t2) {
      return "has".concat(t2, "Attribute");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2) {
        var i2;
        if (this.type !== "mixed" && n2 !== "mixed" && n2 !== this.type)
          throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
        if (arguments.length > 2) {
          if (this.multi)
            throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
          var o3 = "" + t3, a3 = "" + r2;
          if (r2 = arguments[2], !(i2 = d2(this, o3, a3, n2)))
            throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o3, '" - "').concat(a3, '").'));
        } else {
          if (n2 !== "mixed")
            throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
          if (t3 = "" + t3, !(i2 = this._edges.get(t3)))
            throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
        }
        return i2.attributes.hasOwnProperty(r2);
      };
    } }, { name: function(t2) {
      return "set".concat(t2, "Attribute");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2, i2) {
        var o3;
        if (this.type !== "mixed" && n2 !== "mixed" && n2 !== this.type)
          throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
        if (arguments.length > 3) {
          if (this.multi)
            throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
          var a3 = "" + t3, c2 = "" + r2;
          if (r2 = arguments[2], i2 = arguments[3], !(o3 = d2(this, a3, c2, n2)))
            throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(a3, '" - "').concat(c2, '").'));
        } else {
          if (n2 !== "mixed")
            throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
          if (t3 = "" + t3, !(o3 = this._edges.get(t3)))
            throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
        }
        return o3.attributes[r2] = i2, this.emit("edgeAttributesUpdated", { key: o3.key, type: "set", attributes: o3.attributes, name: r2 }), this;
      };
    } }, { name: function(t2) {
      return "update".concat(t2, "Attribute");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2, i2) {
        var o3;
        if (this.type !== "mixed" && n2 !== "mixed" && n2 !== this.type)
          throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
        if (arguments.length > 3) {
          if (this.multi)
            throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
          var a3 = "" + t3, c2 = "" + r2;
          if (r2 = arguments[2], i2 = arguments[3], !(o3 = d2(this, a3, c2, n2)))
            throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(a3, '" - "').concat(c2, '").'));
        } else {
          if (n2 !== "mixed")
            throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
          if (t3 = "" + t3, !(o3 = this._edges.get(t3)))
            throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
        }
        if (typeof i2 != "function")
          throw new B("Graph.".concat(e2, ": updater should be a function."));
        return o3.attributes[r2] = i2(o3.attributes[r2]), this.emit("edgeAttributesUpdated", { key: o3.key, type: "set", attributes: o3.attributes, name: r2 }), this;
      };
    } }, { name: function(t2) {
      return "remove".concat(t2, "Attribute");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2) {
        var i2;
        if (this.type !== "mixed" && n2 !== "mixed" && n2 !== this.type)
          throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
        if (arguments.length > 2) {
          if (this.multi)
            throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
          var o3 = "" + t3, a3 = "" + r2;
          if (r2 = arguments[2], !(i2 = d2(this, o3, a3, n2)))
            throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o3, '" - "').concat(a3, '").'));
        } else {
          if (n2 !== "mixed")
            throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
          if (t3 = "" + t3, !(i2 = this._edges.get(t3)))
            throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
        }
        return delete i2.attributes[r2], this.emit("edgeAttributesUpdated", { key: i2.key, type: "remove", attributes: i2.attributes, name: r2 }), this;
      };
    } }, { name: function(t2) {
      return "replace".concat(t2, "Attributes");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2) {
        var i2;
        if (this.type !== "mixed" && n2 !== "mixed" && n2 !== this.type)
          throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
        if (arguments.length > 2) {
          if (this.multi)
            throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
          var o3 = "" + t3, a3 = "" + r2;
          if (r2 = arguments[2], !(i2 = d2(this, o3, a3, n2)))
            throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o3, '" - "').concat(a3, '").'));
        } else {
          if (n2 !== "mixed")
            throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
          if (t3 = "" + t3, !(i2 = this._edges.get(t3)))
            throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
        }
        if (!s(r2))
          throw new B("Graph.".concat(e2, ": provided attributes are not a plain object."));
        return i2.attributes = r2, this.emit("edgeAttributesUpdated", { key: i2.key, type: "replace", attributes: i2.attributes }), this;
      };
    } }, { name: function(t2) {
      return "merge".concat(t2, "Attributes");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2) {
        var i2;
        if (this.type !== "mixed" && n2 !== "mixed" && n2 !== this.type)
          throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
        if (arguments.length > 2) {
          if (this.multi)
            throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
          var o3 = "" + t3, a3 = "" + r2;
          if (r2 = arguments[2], !(i2 = d2(this, o3, a3, n2)))
            throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o3, '" - "').concat(a3, '").'));
        } else {
          if (n2 !== "mixed")
            throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
          if (t3 = "" + t3, !(i2 = this._edges.get(t3)))
            throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
        }
        if (!s(r2))
          throw new B("Graph.".concat(e2, ": provided attributes are not a plain object."));
        return u(i2.attributes, r2), this.emit("edgeAttributesUpdated", { key: i2.key, type: "merge", attributes: i2.attributes, data: r2 }), this;
      };
    } }, { name: function(t2) {
      return "update".concat(t2, "Attributes");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2) {
        var i2;
        if (this.type !== "mixed" && n2 !== "mixed" && n2 !== this.type)
          throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
        if (arguments.length > 2) {
          if (this.multi)
            throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
          var o3 = "" + t3, a3 = "" + r2;
          if (r2 = arguments[2], !(i2 = d2(this, o3, a3, n2)))
            throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o3, '" - "').concat(a3, '").'));
        } else {
          if (n2 !== "mixed")
            throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
          if (t3 = "" + t3, !(i2 = this._edges.get(t3)))
            throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
        }
        if (typeof r2 != "function")
          throw new B("Graph.".concat(e2, ": provided updater is not a function."));
        return i2.attributes = r2(i2.attributes), this.emit("edgeAttributesUpdated", { key: i2.key, type: "update", attributes: i2.attributes }), this;
      };
    } }];
    var Z = O, $ = P2, tt = function() {
      var t2 = arguments, e2 = null, n2 = -1;
      return new Z(function() {
        for (var r2 = null;; ) {
          if (e2 === null) {
            if (++n2 >= t2.length)
              return { done: true };
            e2 = $(t2[n2]);
          }
          if ((r2 = e2.next()).done !== true)
            break;
          e2 = null;
        }
        return r2;
      });
    }, et = [{ name: "edges", type: "mixed" }, { name: "inEdges", type: "directed", direction: "in" }, { name: "outEdges", type: "directed", direction: "out" }, { name: "inboundEdges", type: "mixed", direction: "in" }, { name: "outboundEdges", type: "mixed", direction: "out" }, { name: "directedEdges", type: "directed" }, { name: "undirectedEdges", type: "undirected" }];
    function nt(t2, e2, n2, r2) {
      var i2 = false;
      for (var o3 in e2)
        if (o3 !== r2) {
          var a3 = e2[o3];
          if (i2 = n2(a3.key, a3.attributes, a3.source.key, a3.target.key, a3.source.attributes, a3.target.attributes, a3.undirected), t2 && i2)
            return a3.key;
        }
    }
    function rt(t2, e2, n2, r2) {
      var i2, o3, a3, c2 = false;
      for (var u2 in e2)
        if (u2 !== r2) {
          i2 = e2[u2];
          do {
            if (o3 = i2.source, a3 = i2.target, c2 = n2(i2.key, i2.attributes, o3.key, a3.key, o3.attributes, a3.attributes, i2.undirected), t2 && c2)
              return i2.key;
            i2 = i2.next;
          } while (i2 !== undefined);
        }
    }
    function it(t2, e2) {
      var n2, r2 = Object.keys(t2), i2 = r2.length, o3 = 0;
      return new O(function() {
        do {
          if (n2)
            n2 = n2.next;
          else {
            if (o3 >= i2)
              return { done: true };
            var a3 = r2[o3++];
            if (a3 === e2) {
              n2 = undefined;
              continue;
            }
            n2 = t2[a3];
          }
        } while (!n2);
        return { done: false, value: { edge: n2.key, attributes: n2.attributes, source: n2.source.key, target: n2.target.key, sourceAttributes: n2.source.attributes, targetAttributes: n2.target.attributes, undirected: n2.undirected } };
      });
    }
    function ot(t2, e2, n2, r2) {
      var i2 = e2[n2];
      if (i2) {
        var { source: o3, target: a3 } = i2;
        return r2(i2.key, i2.attributes, o3.key, a3.key, o3.attributes, a3.attributes, i2.undirected) && t2 ? i2.key : undefined;
      }
    }
    function at(t2, e2, n2, r2) {
      var i2 = e2[n2];
      if (i2) {
        var o3 = false;
        do {
          if (o3 = r2(i2.key, i2.attributes, i2.source.key, i2.target.key, i2.source.attributes, i2.target.attributes, i2.undirected), t2 && o3)
            return i2.key;
          i2 = i2.next;
        } while (i2 !== undefined);
      }
    }
    function ct(t2, e2) {
      var n2 = t2[e2];
      return n2.next !== undefined ? new O(function() {
        if (!n2)
          return { done: true };
        var t3 = { edge: n2.key, attributes: n2.attributes, source: n2.source.key, target: n2.target.key, sourceAttributes: n2.source.attributes, targetAttributes: n2.target.attributes, undirected: n2.undirected };
        return n2 = n2.next, { done: false, value: t3 };
      }) : O.of({ edge: n2.key, attributes: n2.attributes, source: n2.source.key, target: n2.target.key, sourceAttributes: n2.source.attributes, targetAttributes: n2.target.attributes, undirected: n2.undirected });
    }
    function ut(t2, e2) {
      if (t2.size === 0)
        return [];
      if (e2 === "mixed" || e2 === t2.type)
        return typeof Array.from == "function" ? Array.from(t2._edges.keys()) : K(t2._edges.keys(), t2._edges.size);
      for (var n2, r2, i2 = e2 === "undirected" ? t2.undirectedSize : t2.directedSize, o3 = new Array(i2), a3 = e2 === "undirected", c2 = t2._edges.values(), u2 = 0;(n2 = c2.next()).done !== true; )
        (r2 = n2.value).undirected === a3 && (o3[u2++] = r2.key);
      return o3;
    }
    function dt(t2, e2, n2, r2) {
      if (e2.size !== 0) {
        for (var i2, o3, a3 = n2 !== "mixed" && n2 !== e2.type, c2 = n2 === "undirected", u2 = false, d3 = e2._edges.values();(i2 = d3.next()).done !== true; )
          if (o3 = i2.value, !a3 || o3.undirected === c2) {
            var s2 = o3, h3 = s2.key, p2 = s2.attributes, f2 = s2.source, l3 = s2.target;
            if (u2 = r2(h3, p2, f2.key, l3.key, f2.attributes, l3.attributes, o3.undirected), t2 && u2)
              return h3;
          }
      }
    }
    function st(t2, e2) {
      if (t2.size === 0)
        return O.empty();
      var n2 = e2 !== "mixed" && e2 !== t2.type, r2 = e2 === "undirected", i2 = t2._edges.values();
      return new O(function() {
        for (var t3, e3;; ) {
          if ((t3 = i2.next()).done)
            return t3;
          if (e3 = t3.value, !n2 || e3.undirected === r2)
            break;
        }
        return { value: { edge: e3.key, attributes: e3.attributes, source: e3.source.key, target: e3.target.key, sourceAttributes: e3.source.attributes, targetAttributes: e3.target.attributes, undirected: e3.undirected }, done: false };
      });
    }
    function ht(t2, e2, n2, r2, i2, o3) {
      var a3, c2 = e2 ? rt : nt;
      if (n2 !== "undirected") {
        if (r2 !== "out" && (a3 = c2(t2, i2.in, o3), t2 && a3))
          return a3;
        if (r2 !== "in" && (a3 = c2(t2, i2.out, o3, r2 ? undefined : i2.key), t2 && a3))
          return a3;
      }
      if (n2 !== "directed" && (a3 = c2(t2, i2.undirected, o3), t2 && a3))
        return a3;
    }
    function pt(t2, e2, n2, r2) {
      var i2 = [];
      return ht(false, t2, e2, n2, r2, function(t3) {
        i2.push(t3);
      }), i2;
    }
    function ft(t2, e2, n2) {
      var r2 = O.empty();
      return t2 !== "undirected" && (e2 !== "out" && n2.in !== undefined && (r2 = tt(r2, it(n2.in))), e2 !== "in" && n2.out !== undefined && (r2 = tt(r2, it(n2.out, e2 ? undefined : n2.key)))), t2 !== "directed" && n2.undirected !== undefined && (r2 = tt(r2, it(n2.undirected))), r2;
    }
    function lt(t2, e2, n2, r2, i2, o3, a3) {
      var c2, u2 = n2 ? at : ot;
      if (e2 !== "undirected") {
        if (i2.in !== undefined && r2 !== "out" && (c2 = u2(t2, i2.in, o3, a3), t2 && c2))
          return c2;
        if (i2.out !== undefined && r2 !== "in" && (r2 || i2.key !== o3) && (c2 = u2(t2, i2.out, o3, a3), t2 && c2))
          return c2;
      }
      if (e2 !== "directed" && i2.undirected !== undefined && (c2 = u2(t2, i2.undirected, o3, a3), t2 && c2))
        return c2;
    }
    function gt(t2, e2, n2, r2, i2) {
      var o3 = [];
      return lt(false, t2, e2, n2, r2, i2, function(t3) {
        o3.push(t3);
      }), o3;
    }
    function yt(t2, e2, n2, r2) {
      var i2 = O.empty();
      return t2 !== "undirected" && (n2.in !== undefined && e2 !== "out" && (r2 in n2.in) && (i2 = tt(i2, ct(n2.in, r2))), n2.out !== undefined && e2 !== "in" && (r2 in n2.out) && (e2 || n2.key !== r2) && (i2 = tt(i2, ct(n2.out, r2)))), t2 !== "directed" && n2.undirected !== undefined && (r2 in n2.undirected) && (i2 = tt(i2, ct(n2.undirected, r2))), i2;
    }
    var wt = [{ name: "neighbors", type: "mixed" }, { name: "inNeighbors", type: "directed", direction: "in" }, { name: "outNeighbors", type: "directed", direction: "out" }, { name: "inboundNeighbors", type: "mixed", direction: "in" }, { name: "outboundNeighbors", type: "mixed", direction: "out" }, { name: "directedNeighbors", type: "directed" }, { name: "undirectedNeighbors", type: "undirected" }];
    function vt() {
      this.A = null, this.B = null;
    }
    function bt(t2, e2, n2, r2, i2) {
      for (var o3 in r2) {
        var a3 = r2[o3], c2 = a3.source, u2 = a3.target, d3 = c2 === n2 ? u2 : c2;
        if (!e2 || !e2.has(d3.key)) {
          var s2 = i2(d3.key, d3.attributes);
          if (t2 && s2)
            return d3.key;
        }
      }
    }
    function mt(t2, e2, n2, r2, i2) {
      if (e2 !== "mixed") {
        if (e2 === "undirected")
          return bt(t2, null, r2, r2.undirected, i2);
        if (typeof n2 == "string")
          return bt(t2, null, r2, r2[n2], i2);
      }
      var o3, a3 = new vt;
      if (e2 !== "undirected") {
        if (n2 !== "out") {
          if (o3 = bt(t2, null, r2, r2.in, i2), t2 && o3)
            return o3;
          a3.wrap(r2.in);
        }
        if (n2 !== "in") {
          if (o3 = bt(t2, a3, r2, r2.out, i2), t2 && o3)
            return o3;
          a3.wrap(r2.out);
        }
      }
      if (e2 !== "directed" && (o3 = bt(t2, a3, r2, r2.undirected, i2), t2 && o3))
        return o3;
    }
    function kt(t2, e2, n2) {
      var r2 = Object.keys(n2), i2 = r2.length, o3 = 0;
      return new O(function() {
        var a3 = null;
        do {
          if (o3 >= i2)
            return t2 && t2.wrap(n2), { done: true };
          var c2 = n2[r2[o3++]], u2 = c2.source, d3 = c2.target;
          a3 = u2 === e2 ? d3 : u2, t2 && t2.has(a3.key) && (a3 = null);
        } while (a3 === null);
        return { done: false, value: { neighbor: a3.key, attributes: a3.attributes } };
      });
    }
    function _t(t2, e2) {
      var { name: n2, type: r2, direction: i2 } = e2;
      t2.prototype[n2] = function(t3) {
        if (r2 !== "mixed" && this.type !== "mixed" && r2 !== this.type)
          return [];
        t3 = "" + t3;
        var e3 = this._nodes.get(t3);
        if (e3 === undefined)
          throw new F("Graph.".concat(n2, ': could not find the "').concat(t3, '" node in the graph.'));
        return function(t4, e4, n3) {
          if (t4 !== "mixed") {
            if (t4 === "undirected")
              return Object.keys(n3.undirected);
            if (typeof e4 == "string")
              return Object.keys(n3[e4]);
          }
          var r3 = [];
          return mt(false, t4, e4, n3, function(t5) {
            r3.push(t5);
          }), r3;
        }(r2 === "mixed" ? this.type : r2, i2, e3);
      };
    }
    function Gt(t2, e2) {
      var { name: n2, type: r2, direction: i2 } = e2, o3 = n2.slice(0, -1) + "Entries";
      t2.prototype[o3] = function(t3) {
        if (r2 !== "mixed" && this.type !== "mixed" && r2 !== this.type)
          return O.empty();
        t3 = "" + t3;
        var e3 = this._nodes.get(t3);
        if (e3 === undefined)
          throw new F("Graph.".concat(o3, ': could not find the "').concat(t3, '" node in the graph.'));
        return function(t4, e4, n3) {
          if (t4 !== "mixed") {
            if (t4 === "undirected")
              return kt(null, n3, n3.undirected);
            if (typeof e4 == "string")
              return kt(null, n3, n3[e4]);
          }
          var r3 = O.empty(), i3 = new vt;
          return t4 !== "undirected" && (e4 !== "out" && (r3 = tt(r3, kt(i3, n3, n3.in))), e4 !== "in" && (r3 = tt(r3, kt(i3, n3, n3.out)))), t4 !== "directed" && (r3 = tt(r3, kt(i3, n3, n3.undirected))), r3;
        }(r2 === "mixed" ? this.type : r2, i2, e3);
      };
    }
    function xt(t2, e2, n2, r2, i2) {
      for (var o3, a3, c2, u2, d3, s2, h3, p2 = r2._nodes.values(), f2 = r2.type;(o3 = p2.next()).done !== true; ) {
        var l3 = false;
        if (a3 = o3.value, f2 !== "undirected")
          for (c2 in u2 = a3.out) {
            d3 = u2[c2];
            do {
              if (s2 = d3.target, l3 = true, h3 = i2(a3.key, s2.key, a3.attributes, s2.attributes, d3.key, d3.attributes, d3.undirected), t2 && h3)
                return d3;
              d3 = d3.next;
            } while (d3);
          }
        if (f2 !== "directed") {
          for (c2 in u2 = a3.undirected)
            if (!(e2 && a3.key > c2)) {
              d3 = u2[c2];
              do {
                if ((s2 = d3.target).key !== c2 && (s2 = d3.source), l3 = true, h3 = i2(a3.key, s2.key, a3.attributes, s2.attributes, d3.key, d3.attributes, d3.undirected), t2 && h3)
                  return d3;
                d3 = d3.next;
              } while (d3);
            }
        }
        if (n2 && !l3 && (h3 = i2(a3.key, null, a3.attributes, null, null, null, null), t2 && h3))
          return null;
      }
    }
    function Et(t2) {
      if (!s(t2))
        throw new B('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');
      if (!("key" in t2))
        throw new B("Graph.import: serialized node is missing its key.");
      if (("attributes" in t2) && (!s(t2.attributes) || t2.attributes === null))
        throw new B("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");
    }
    function At(t2) {
      if (!s(t2))
        throw new B('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');
      if (!("source" in t2))
        throw new B("Graph.import: serialized edge is missing its source.");
      if (!("target" in t2))
        throw new B("Graph.import: serialized edge is missing its target.");
      if (("attributes" in t2) && (!s(t2.attributes) || t2.attributes === null))
        throw new B("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");
      if (("undirected" in t2) && typeof t2.undirected != "boolean")
        throw new B("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.");
    }
    vt.prototype.wrap = function(t2) {
      this.A === null ? this.A = t2 : this.B === null && (this.B = t2);
    }, vt.prototype.has = function(t2) {
      return this.A !== null && (t2 in this.A) || this.B !== null && (t2 in this.B);
    };
    var Lt, St = (Lt = 255 & Math.floor(256 * Math.random()), function() {
      return Lt++;
    }), Dt = new Set(["directed", "undirected", "mixed"]), Ut = new Set(["domain", "_events", "_eventsCount", "_maxListeners"]), Nt = { allowSelfLoops: true, multi: false, type: "mixed" };
    function Ot(t2, e2, n2) {
      var r2 = new t2.NodeDataClass(e2, n2);
      return t2._nodes.set(e2, r2), t2.emit("nodeAdded", { key: e2, attributes: n2 }), r2;
    }
    function jt(t2, e2, n2, r2, i2, o3, a3, c2) {
      if (!r2 && t2.type === "undirected")
        throw new I("Graph.".concat(e2, ": you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead."));
      if (r2 && t2.type === "directed")
        throw new I("Graph.".concat(e2, ": you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead."));
      if (c2 && !s(c2))
        throw new B("Graph.".concat(e2, ': invalid attributes. Expecting an object but got "').concat(c2, '"'));
      if (o3 = "" + o3, a3 = "" + a3, c2 = c2 || {}, !t2.allowSelfLoops && o3 === a3)
        throw new I("Graph.".concat(e2, ': source & target are the same ("').concat(o3, "\"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false."));
      var u2 = t2._nodes.get(o3), d3 = t2._nodes.get(a3);
      if (!u2)
        throw new F("Graph.".concat(e2, ': source node "').concat(o3, '" not found.'));
      if (!d3)
        throw new F("Graph.".concat(e2, ': target node "').concat(a3, '" not found.'));
      var h3 = { key: null, undirected: r2, source: o3, target: a3, attributes: c2 };
      if (n2)
        i2 = t2._edgeKeyGenerator();
      else if (i2 = "" + i2, t2._edges.has(i2))
        throw new I("Graph.".concat(e2, ': the "').concat(i2, '" edge already exists in the graph.'));
      if (!t2.multi && (r2 ? u2.undirected[a3] !== undefined : u2.out[a3] !== undefined))
        throw new I("Graph.".concat(e2, ': an edge linking "').concat(o3, '" to "').concat(a3, "\" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option."));
      var p2 = new V(r2, i2, u2, d3, c2);
      t2._edges.set(i2, p2);
      var f2 = o3 === a3;
      return r2 ? (u2.undirectedDegree++, d3.undirectedDegree++, f2 && (u2.undirectedLoops++, t2._undirectedSelfLoopCount++)) : (u2.outDegree++, d3.inDegree++, f2 && (u2.directedLoops++, t2._directedSelfLoopCount++)), t2.multi ? p2.attachMulti() : p2.attach(), r2 ? t2._undirectedSize++ : t2._directedSize++, h3.key = i2, t2.emit("edgeAdded", h3), i2;
    }
    function Ct(t2, e2, n2, r2, i2, o3, a3, c2, d3) {
      if (!r2 && t2.type === "undirected")
        throw new I("Graph.".concat(e2, ": you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead."));
      if (r2 && t2.type === "directed")
        throw new I("Graph.".concat(e2, ": you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead."));
      if (c2) {
        if (d3) {
          if (typeof c2 != "function")
            throw new B("Graph.".concat(e2, ': invalid updater function. Expecting a function but got "').concat(c2, '"'));
        } else if (!s(c2))
          throw new B("Graph.".concat(e2, ': invalid attributes. Expecting an object but got "').concat(c2, '"'));
      }
      var h3;
      if (o3 = "" + o3, a3 = "" + a3, d3 && (h3 = c2, c2 = undefined), !t2.allowSelfLoops && o3 === a3)
        throw new I("Graph.".concat(e2, ': source & target are the same ("').concat(o3, "\"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false."));
      var p2, f2, l3 = t2._nodes.get(o3), g3 = t2._nodes.get(a3);
      if (!n2 && (p2 = t2._edges.get(i2))) {
        if (!(p2.source.key === o3 && p2.target.key === a3 || r2 && p2.source.key === a3 && p2.target.key === o3))
          throw new I("Graph.".concat(e2, ': inconsistency detected when attempting to merge the "').concat(i2, '" edge with "').concat(o3, '" source & "').concat(a3, '" target vs. ("').concat(p2.source.key, '", "').concat(p2.target.key, '").'));
        f2 = p2;
      }
      if (f2 || t2.multi || !l3 || (f2 = r2 ? l3.undirected[a3] : l3.out[a3]), f2) {
        var y3 = [f2.key, false, false, false];
        if (d3 ? !h3 : !c2)
          return y3;
        if (d3) {
          var w3 = f2.attributes;
          f2.attributes = h3(w3), t2.emit("edgeAttributesUpdated", { type: "replace", key: f2.key, attributes: f2.attributes });
        } else
          u(f2.attributes, c2), t2.emit("edgeAttributesUpdated", { type: "merge", key: f2.key, attributes: f2.attributes, data: c2 });
        return y3;
      }
      c2 = c2 || {}, d3 && h3 && (c2 = h3(c2));
      var v3 = { key: null, undirected: r2, source: o3, target: a3, attributes: c2 };
      if (n2)
        i2 = t2._edgeKeyGenerator();
      else if (i2 = "" + i2, t2._edges.has(i2))
        throw new I("Graph.".concat(e2, ': the "').concat(i2, '" edge already exists in the graph.'));
      var b3 = false, m3 = false;
      l3 || (l3 = Ot(t2, o3, {}), b3 = true, o3 === a3 && (g3 = l3, m3 = true)), g3 || (g3 = Ot(t2, a3, {}), m3 = true), p2 = new V(r2, i2, l3, g3, c2), t2._edges.set(i2, p2);
      var k2 = o3 === a3;
      return r2 ? (l3.undirectedDegree++, g3.undirectedDegree++, k2 && (l3.undirectedLoops++, t2._undirectedSelfLoopCount++)) : (l3.outDegree++, g3.inDegree++, k2 && (l3.directedLoops++, t2._directedSelfLoopCount++)), t2.multi ? p2.attachMulti() : p2.attach(), r2 ? t2._undirectedSize++ : t2._directedSize++, v3.key = i2, t2.emit("edgeAdded", v3), [i2, true, b3, m3];
    }
    function Mt(t2, e2) {
      t2._edges.delete(e2.key);
      var { source: n2, target: r2, attributes: i2, undirected: o3 } = e2, a3 = n2 === r2;
      o3 ? (n2.undirectedDegree--, r2.undirectedDegree--, a3 && (n2.undirectedLoops--, t2._undirectedSelfLoopCount--)) : (n2.outDegree--, r2.inDegree--, a3 && (n2.directedLoops--, t2._directedSelfLoopCount--)), t2.multi ? e2.detachMulti() : e2.detach(), o3 ? t2._undirectedSize-- : t2._directedSize--, t2.emit("edgeDropped", { key: e2.key, attributes: i2, source: n2.key, target: r2.key, undirected: o3 });
    }
    var zt = function(n2) {
      function r2(t2) {
        var e2;
        if (e2 = n2.call(this) || this, typeof (t2 = u({}, Nt, t2)).multi != "boolean")
          throw new B("Graph.constructor: invalid 'multi' option. Expecting a boolean but got \"".concat(t2.multi, '".'));
        if (!Dt.has(t2.type))
          throw new B('Graph.constructor: invalid \'type\' option. Should be one of "mixed", "directed" or "undirected" but got "'.concat(t2.type, '".'));
        if (typeof t2.allowSelfLoops != "boolean")
          throw new B("Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got \"".concat(t2.allowSelfLoops, '".'));
        var r3 = t2.type === "mixed" ? Y : t2.type === "directed" ? q : J;
        p(c(e2), "NodeDataClass", r3);
        var i3 = "geid_" + St() + "_", o3 = 0;
        return p(c(e2), "_attributes", {}), p(c(e2), "_nodes", new Map), p(c(e2), "_edges", new Map), p(c(e2), "_directedSize", 0), p(c(e2), "_undirectedSize", 0), p(c(e2), "_directedSelfLoopCount", 0), p(c(e2), "_undirectedSelfLoopCount", 0), p(c(e2), "_edgeKeyGenerator", function() {
          var t3;
          do {
            t3 = i3 + o3++;
          } while (e2._edges.has(t3));
          return t3;
        }), p(c(e2), "_options", t2), Ut.forEach(function(t3) {
          return p(c(e2), t3, e2[t3]);
        }), f(c(e2), "order", function() {
          return e2._nodes.size;
        }), f(c(e2), "size", function() {
          return e2._edges.size;
        }), f(c(e2), "directedSize", function() {
          return e2._directedSize;
        }), f(c(e2), "undirectedSize", function() {
          return e2._undirectedSize;
        }), f(c(e2), "selfLoopCount", function() {
          return e2._directedSelfLoopCount + e2._undirectedSelfLoopCount;
        }), f(c(e2), "directedSelfLoopCount", function() {
          return e2._directedSelfLoopCount;
        }), f(c(e2), "undirectedSelfLoopCount", function() {
          return e2._undirectedSelfLoopCount;
        }), f(c(e2), "multi", e2._options.multi), f(c(e2), "type", e2._options.type), f(c(e2), "allowSelfLoops", e2._options.allowSelfLoops), f(c(e2), "implementation", function() {
          return "graphology";
        }), e2;
      }
      e(r2, n2);
      var i2 = r2.prototype;
      return i2._resetInstanceCounters = function() {
        this._directedSize = 0, this._undirectedSize = 0, this._directedSelfLoopCount = 0, this._undirectedSelfLoopCount = 0;
      }, i2.hasNode = function(t2) {
        return this._nodes.has("" + t2);
      }, i2.hasDirectedEdge = function(t2, e2) {
        if (this.type === "undirected")
          return false;
        if (arguments.length === 1) {
          var n3 = "" + t2, r3 = this._edges.get(n3);
          return !!r3 && !r3.undirected;
        }
        if (arguments.length === 2) {
          t2 = "" + t2, e2 = "" + e2;
          var i3 = this._nodes.get(t2);
          return !!i3 && i3.out.hasOwnProperty(e2);
        }
        throw new B("Graph.hasDirectedEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
      }, i2.hasUndirectedEdge = function(t2, e2) {
        if (this.type === "directed")
          return false;
        if (arguments.length === 1) {
          var n3 = "" + t2, r3 = this._edges.get(n3);
          return !!r3 && r3.undirected;
        }
        if (arguments.length === 2) {
          t2 = "" + t2, e2 = "" + e2;
          var i3 = this._nodes.get(t2);
          return !!i3 && i3.undirected.hasOwnProperty(e2);
        }
        throw new B("Graph.hasDirectedEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
      }, i2.hasEdge = function(t2, e2) {
        if (arguments.length === 1) {
          var n3 = "" + t2;
          return this._edges.has(n3);
        }
        if (arguments.length === 2) {
          t2 = "" + t2, e2 = "" + e2;
          var r3 = this._nodes.get(t2);
          return !!r3 && (r3.out !== undefined && r3.out.hasOwnProperty(e2) || r3.undirected !== undefined && r3.undirected.hasOwnProperty(e2));
        }
        throw new B("Graph.hasEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
      }, i2.directedEdge = function(t2, e2) {
        if (this.type !== "undirected") {
          if (t2 = "" + t2, e2 = "" + e2, this.multi)
            throw new I("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");
          var n3 = this._nodes.get(t2);
          if (!n3)
            throw new F('Graph.directedEdge: could not find the "'.concat(t2, '" source node in the graph.'));
          if (!this._nodes.has(e2))
            throw new F('Graph.directedEdge: could not find the "'.concat(e2, '" target node in the graph.'));
          var r3 = n3.out && n3.out[e2] || undefined;
          return r3 ? r3.key : undefined;
        }
      }, i2.undirectedEdge = function(t2, e2) {
        if (this.type !== "directed") {
          if (t2 = "" + t2, e2 = "" + e2, this.multi)
            throw new I("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");
          var n3 = this._nodes.get(t2);
          if (!n3)
            throw new F('Graph.undirectedEdge: could not find the "'.concat(t2, '" source node in the graph.'));
          if (!this._nodes.has(e2))
            throw new F('Graph.undirectedEdge: could not find the "'.concat(e2, '" target node in the graph.'));
          var r3 = n3.undirected && n3.undirected[e2] || undefined;
          return r3 ? r3.key : undefined;
        }
      }, i2.edge = function(t2, e2) {
        if (this.multi)
          throw new I("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");
        t2 = "" + t2, e2 = "" + e2;
        var n3 = this._nodes.get(t2);
        if (!n3)
          throw new F('Graph.edge: could not find the "'.concat(t2, '" source node in the graph.'));
        if (!this._nodes.has(e2))
          throw new F('Graph.edge: could not find the "'.concat(e2, '" target node in the graph.'));
        var r3 = n3.out && n3.out[e2] || n3.undirected && n3.undirected[e2] || undefined;
        if (r3)
          return r3.key;
      }, i2.areDirectedNeighbors = function(t2, e2) {
        t2 = "" + t2, e2 = "" + e2;
        var n3 = this._nodes.get(t2);
        if (!n3)
          throw new F('Graph.areDirectedNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type !== "undirected" && ((e2 in n3.in) || (e2 in n3.out));
      }, i2.areOutNeighbors = function(t2, e2) {
        t2 = "" + t2, e2 = "" + e2;
        var n3 = this._nodes.get(t2);
        if (!n3)
          throw new F('Graph.areOutNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type !== "undirected" && (e2 in n3.out);
      }, i2.areInNeighbors = function(t2, e2) {
        t2 = "" + t2, e2 = "" + e2;
        var n3 = this._nodes.get(t2);
        if (!n3)
          throw new F('Graph.areInNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type !== "undirected" && (e2 in n3.in);
      }, i2.areUndirectedNeighbors = function(t2, e2) {
        t2 = "" + t2, e2 = "" + e2;
        var n3 = this._nodes.get(t2);
        if (!n3)
          throw new F('Graph.areUndirectedNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type !== "directed" && (e2 in n3.undirected);
      }, i2.areNeighbors = function(t2, e2) {
        t2 = "" + t2, e2 = "" + e2;
        var n3 = this._nodes.get(t2);
        if (!n3)
          throw new F('Graph.areNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type !== "undirected" && ((e2 in n3.in) || (e2 in n3.out)) || this.type !== "directed" && (e2 in n3.undirected);
      }, i2.areInboundNeighbors = function(t2, e2) {
        t2 = "" + t2, e2 = "" + e2;
        var n3 = this._nodes.get(t2);
        if (!n3)
          throw new F('Graph.areInboundNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type !== "undirected" && (e2 in n3.in) || this.type !== "directed" && (e2 in n3.undirected);
      }, i2.areOutboundNeighbors = function(t2, e2) {
        t2 = "" + t2, e2 = "" + e2;
        var n3 = this._nodes.get(t2);
        if (!n3)
          throw new F('Graph.areOutboundNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type !== "undirected" && (e2 in n3.out) || this.type !== "directed" && (e2 in n3.undirected);
      }, i2.inDegree = function(t2) {
        t2 = "" + t2;
        var e2 = this._nodes.get(t2);
        if (!e2)
          throw new F('Graph.inDegree: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type === "undirected" ? 0 : e2.inDegree;
      }, i2.outDegree = function(t2) {
        t2 = "" + t2;
        var e2 = this._nodes.get(t2);
        if (!e2)
          throw new F('Graph.outDegree: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type === "undirected" ? 0 : e2.outDegree;
      }, i2.directedDegree = function(t2) {
        t2 = "" + t2;
        var e2 = this._nodes.get(t2);
        if (!e2)
          throw new F('Graph.directedDegree: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type === "undirected" ? 0 : e2.inDegree + e2.outDegree;
      }, i2.undirectedDegree = function(t2) {
        t2 = "" + t2;
        var e2 = this._nodes.get(t2);
        if (!e2)
          throw new F('Graph.undirectedDegree: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type === "directed" ? 0 : e2.undirectedDegree;
      }, i2.inboundDegree = function(t2) {
        t2 = "" + t2;
        var e2 = this._nodes.get(t2);
        if (!e2)
          throw new F('Graph.inboundDegree: could not find the "'.concat(t2, '" node in the graph.'));
        var n3 = 0;
        return this.type !== "directed" && (n3 += e2.undirectedDegree), this.type !== "undirected" && (n3 += e2.inDegree), n3;
      }, i2.outboundDegree = function(t2) {
        t2 = "" + t2;
        var e2 = this._nodes.get(t2);
        if (!e2)
          throw new F('Graph.outboundDegree: could not find the "'.concat(t2, '" node in the graph.'));
        var n3 = 0;
        return this.type !== "directed" && (n3 += e2.undirectedDegree), this.type !== "undirected" && (n3 += e2.outDegree), n3;
      }, i2.degree = function(t2) {
        t2 = "" + t2;
        var e2 = this._nodes.get(t2);
        if (!e2)
          throw new F('Graph.degree: could not find the "'.concat(t2, '" node in the graph.'));
        var n3 = 0;
        return this.type !== "directed" && (n3 += e2.undirectedDegree), this.type !== "undirected" && (n3 += e2.inDegree + e2.outDegree), n3;
      }, i2.inDegreeWithoutSelfLoops = function(t2) {
        t2 = "" + t2;
        var e2 = this._nodes.get(t2);
        if (!e2)
          throw new F('Graph.inDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type === "undirected" ? 0 : e2.inDegree - e2.directedLoops;
      }, i2.outDegreeWithoutSelfLoops = function(t2) {
        t2 = "" + t2;
        var e2 = this._nodes.get(t2);
        if (!e2)
          throw new F('Graph.outDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type === "undirected" ? 0 : e2.outDegree - e2.directedLoops;
      }, i2.directedDegreeWithoutSelfLoops = function(t2) {
        t2 = "" + t2;
        var e2 = this._nodes.get(t2);
        if (!e2)
          throw new F('Graph.directedDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type === "undirected" ? 0 : e2.inDegree + e2.outDegree - 2 * e2.directedLoops;
      }, i2.undirectedDegreeWithoutSelfLoops = function(t2) {
        t2 = "" + t2;
        var e2 = this._nodes.get(t2);
        if (!e2)
          throw new F('Graph.undirectedDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type === "directed" ? 0 : e2.undirectedDegree - 2 * e2.undirectedLoops;
      }, i2.inboundDegreeWithoutSelfLoops = function(t2) {
        t2 = "" + t2;
        var e2 = this._nodes.get(t2);
        if (!e2)
          throw new F('Graph.inboundDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
        var n3 = 0, r3 = 0;
        return this.type !== "directed" && (n3 += e2.undirectedDegree, r3 += 2 * e2.undirectedLoops), this.type !== "undirected" && (n3 += e2.inDegree, r3 += e2.directedLoops), n3 - r3;
      }, i2.outboundDegreeWithoutSelfLoops = function(t2) {
        t2 = "" + t2;
        var e2 = this._nodes.get(t2);
        if (!e2)
          throw new F('Graph.outboundDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
        var n3 = 0, r3 = 0;
        return this.type !== "directed" && (n3 += e2.undirectedDegree, r3 += 2 * e2.undirectedLoops), this.type !== "undirected" && (n3 += e2.outDegree, r3 += e2.directedLoops), n3 - r3;
      }, i2.degreeWithoutSelfLoops = function(t2) {
        t2 = "" + t2;
        var e2 = this._nodes.get(t2);
        if (!e2)
          throw new F('Graph.degreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
        var n3 = 0, r3 = 0;
        return this.type !== "directed" && (n3 += e2.undirectedDegree, r3 += 2 * e2.undirectedLoops), this.type !== "undirected" && (n3 += e2.inDegree + e2.outDegree, r3 += 2 * e2.directedLoops), n3 - r3;
      }, i2.source = function(t2) {
        t2 = "" + t2;
        var e2 = this._edges.get(t2);
        if (!e2)
          throw new F('Graph.source: could not find the "'.concat(t2, '" edge in the graph.'));
        return e2.source.key;
      }, i2.target = function(t2) {
        t2 = "" + t2;
        var e2 = this._edges.get(t2);
        if (!e2)
          throw new F('Graph.target: could not find the "'.concat(t2, '" edge in the graph.'));
        return e2.target.key;
      }, i2.extremities = function(t2) {
        t2 = "" + t2;
        var e2 = this._edges.get(t2);
        if (!e2)
          throw new F('Graph.extremities: could not find the "'.concat(t2, '" edge in the graph.'));
        return [e2.source.key, e2.target.key];
      }, i2.opposite = function(t2, e2) {
        t2 = "" + t2, e2 = "" + e2;
        var n3 = this._edges.get(e2);
        if (!n3)
          throw new F('Graph.opposite: could not find the "'.concat(e2, '" edge in the graph.'));
        var r3 = n3.source.key, i3 = n3.target.key;
        if (t2 === r3)
          return i3;
        if (t2 === i3)
          return r3;
        throw new F('Graph.opposite: the "'.concat(t2, '" node is not attached to the "').concat(e2, '" edge (').concat(r3, ", ").concat(i3, ")."));
      }, i2.hasExtremity = function(t2, e2) {
        t2 = "" + t2, e2 = "" + e2;
        var n3 = this._edges.get(t2);
        if (!n3)
          throw new F('Graph.hasExtremity: could not find the "'.concat(t2, '" edge in the graph.'));
        return n3.source.key === e2 || n3.target.key === e2;
      }, i2.isUndirected = function(t2) {
        t2 = "" + t2;
        var e2 = this._edges.get(t2);
        if (!e2)
          throw new F('Graph.isUndirected: could not find the "'.concat(t2, '" edge in the graph.'));
        return e2.undirected;
      }, i2.isDirected = function(t2) {
        t2 = "" + t2;
        var e2 = this._edges.get(t2);
        if (!e2)
          throw new F('Graph.isDirected: could not find the "'.concat(t2, '" edge in the graph.'));
        return !e2.undirected;
      }, i2.isSelfLoop = function(t2) {
        t2 = "" + t2;
        var e2 = this._edges.get(t2);
        if (!e2)
          throw new F('Graph.isSelfLoop: could not find the "'.concat(t2, '" edge in the graph.'));
        return e2.source === e2.target;
      }, i2.addNode = function(t2, e2) {
        var n3 = function(t3, e3, n4) {
          if (n4 && !s(n4))
            throw new B('Graph.addNode: invalid attributes. Expecting an object but got "'.concat(n4, '"'));
          if (e3 = "" + e3, n4 = n4 || {}, t3._nodes.has(e3))
            throw new I('Graph.addNode: the "'.concat(e3, '" node already exist in the graph.'));
          var r3 = new t3.NodeDataClass(e3, n4);
          return t3._nodes.set(e3, r3), t3.emit("nodeAdded", { key: e3, attributes: n4 }), r3;
        }(this, t2, e2);
        return n3.key;
      }, i2.mergeNode = function(t2, e2) {
        if (e2 && !s(e2))
          throw new B('Graph.mergeNode: invalid attributes. Expecting an object but got "'.concat(e2, '"'));
        t2 = "" + t2, e2 = e2 || {};
        var n3 = this._nodes.get(t2);
        return n3 ? (e2 && (u(n3.attributes, e2), this.emit("nodeAttributesUpdated", { type: "merge", key: t2, attributes: n3.attributes, data: e2 })), [t2, false]) : (n3 = new this.NodeDataClass(t2, e2), this._nodes.set(t2, n3), this.emit("nodeAdded", { key: t2, attributes: e2 }), [t2, true]);
      }, i2.updateNode = function(t2, e2) {
        if (e2 && typeof e2 != "function")
          throw new B('Graph.updateNode: invalid updater function. Expecting a function but got "'.concat(e2, '"'));
        t2 = "" + t2;
        var n3 = this._nodes.get(t2);
        if (n3) {
          if (e2) {
            var r3 = n3.attributes;
            n3.attributes = e2(r3), this.emit("nodeAttributesUpdated", { type: "replace", key: t2, attributes: n3.attributes });
          }
          return [t2, false];
        }
        var i3 = e2 ? e2({}) : {};
        return n3 = new this.NodeDataClass(t2, i3), this._nodes.set(t2, n3), this.emit("nodeAdded", { key: t2, attributes: i3 }), [t2, true];
      }, i2.dropNode = function(t2) {
        t2 = "" + t2;
        var e2, n3 = this._nodes.get(t2);
        if (!n3)
          throw new F('Graph.dropNode: could not find the "'.concat(t2, '" node in the graph.'));
        if (this.type !== "undirected") {
          for (var r3 in n3.out) {
            e2 = n3.out[r3];
            do {
              Mt(this, e2), e2 = e2.next;
            } while (e2);
          }
          for (var i3 in n3.in) {
            e2 = n3.in[i3];
            do {
              Mt(this, e2), e2 = e2.next;
            } while (e2);
          }
        }
        if (this.type !== "directed")
          for (var o3 in n3.undirected) {
            e2 = n3.undirected[o3];
            do {
              Mt(this, e2), e2 = e2.next;
            } while (e2);
          }
        this._nodes.delete(t2), this.emit("nodeDropped", { key: t2, attributes: n3.attributes });
      }, i2.dropEdge = function(t2) {
        var e2;
        if (arguments.length > 1) {
          var n3 = "" + arguments[0], r3 = "" + arguments[1];
          if (!(e2 = d2(this, n3, r3, this.type)))
            throw new F('Graph.dropEdge: could not find the "'.concat(n3, '" -> "').concat(r3, '" edge in the graph.'));
        } else if (t2 = "" + t2, !(e2 = this._edges.get(t2)))
          throw new F('Graph.dropEdge: could not find the "'.concat(t2, '" edge in the graph.'));
        return Mt(this, e2), this;
      }, i2.dropDirectedEdge = function(t2, e2) {
        if (arguments.length < 2)
          throw new I("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");
        if (this.multi)
          throw new I("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");
        var n3 = d2(this, t2 = "" + t2, e2 = "" + e2, "directed");
        if (!n3)
          throw new F('Graph.dropDirectedEdge: could not find a "'.concat(t2, '" -> "').concat(e2, '" edge in the graph.'));
        return Mt(this, n3), this;
      }, i2.dropUndirectedEdge = function(t2, e2) {
        if (arguments.length < 2)
          throw new I("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");
        if (this.multi)
          throw new I("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");
        var n3 = d2(this, t2, e2, "undirected");
        if (!n3)
          throw new F('Graph.dropUndirectedEdge: could not find a "'.concat(t2, '" -> "').concat(e2, '" edge in the graph.'));
        return Mt(this, n3), this;
      }, i2.clear = function() {
        this._edges.clear(), this._nodes.clear(), this._resetInstanceCounters(), this.emit("cleared");
      }, i2.clearEdges = function() {
        for (var t2, e2 = this._nodes.values();(t2 = e2.next()).done !== true; )
          t2.value.clear();
        this._edges.clear(), this._resetInstanceCounters(), this.emit("edgesCleared");
      }, i2.getAttribute = function(t2) {
        return this._attributes[t2];
      }, i2.getAttributes = function() {
        return this._attributes;
      }, i2.hasAttribute = function(t2) {
        return this._attributes.hasOwnProperty(t2);
      }, i2.setAttribute = function(t2, e2) {
        return this._attributes[t2] = e2, this.emit("attributesUpdated", { type: "set", attributes: this._attributes, name: t2 }), this;
      }, i2.updateAttribute = function(t2, e2) {
        if (typeof e2 != "function")
          throw new B("Graph.updateAttribute: updater should be a function.");
        var n3 = this._attributes[t2];
        return this._attributes[t2] = e2(n3), this.emit("attributesUpdated", { type: "set", attributes: this._attributes, name: t2 }), this;
      }, i2.removeAttribute = function(t2) {
        return delete this._attributes[t2], this.emit("attributesUpdated", { type: "remove", attributes: this._attributes, name: t2 }), this;
      }, i2.replaceAttributes = function(t2) {
        if (!s(t2))
          throw new B("Graph.replaceAttributes: provided attributes are not a plain object.");
        return this._attributes = t2, this.emit("attributesUpdated", { type: "replace", attributes: this._attributes }), this;
      }, i2.mergeAttributes = function(t2) {
        if (!s(t2))
          throw new B("Graph.mergeAttributes: provided attributes are not a plain object.");
        return u(this._attributes, t2), this.emit("attributesUpdated", { type: "merge", attributes: this._attributes, data: t2 }), this;
      }, i2.updateAttributes = function(t2) {
        if (typeof t2 != "function")
          throw new B("Graph.updateAttributes: provided updater is not a function.");
        return this._attributes = t2(this._attributes), this.emit("attributesUpdated", { type: "update", attributes: this._attributes }), this;
      }, i2.updateEachNodeAttributes = function(t2, e2) {
        if (typeof t2 != "function")
          throw new B("Graph.updateEachNodeAttributes: expecting an updater function.");
        if (e2 && !l2(e2))
          throw new B("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");
        for (var n3, r3, i3 = this._nodes.values();(n3 = i3.next()).done !== true; )
          (r3 = n3.value).attributes = t2(r3.key, r3.attributes);
        this.emit("eachNodeAttributesUpdated", { hints: e2 || null });
      }, i2.updateEachEdgeAttributes = function(t2, e2) {
        if (typeof t2 != "function")
          throw new B("Graph.updateEachEdgeAttributes: expecting an updater function.");
        if (e2 && !l2(e2))
          throw new B("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");
        for (var n3, r3, i3, o3, a3 = this._edges.values();(n3 = a3.next()).done !== true; )
          i3 = (r3 = n3.value).source, o3 = r3.target, r3.attributes = t2(r3.key, r3.attributes, i3.key, o3.key, i3.attributes, o3.attributes, r3.undirected);
        this.emit("eachEdgeAttributesUpdated", { hints: e2 || null });
      }, i2.forEachAdjacencyEntry = function(t2) {
        if (typeof t2 != "function")
          throw new B("Graph.forEachAdjacencyEntry: expecting a callback.");
        xt(false, false, false, this, t2);
      }, i2.forEachAdjacencyEntryWithOrphans = function(t2) {
        if (typeof t2 != "function")
          throw new B("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");
        xt(false, false, true, this, t2);
      }, i2.forEachAssymetricAdjacencyEntry = function(t2) {
        if (typeof t2 != "function")
          throw new B("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");
        xt(false, true, false, this, t2);
      }, i2.forEachAssymetricAdjacencyEntryWithOrphans = function(t2) {
        if (typeof t2 != "function")
          throw new B("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");
        xt(false, true, true, this, t2);
      }, i2.nodes = function() {
        return typeof Array.from == "function" ? Array.from(this._nodes.keys()) : K(this._nodes.keys(), this._nodes.size);
      }, i2.forEachNode = function(t2) {
        if (typeof t2 != "function")
          throw new B("Graph.forEachNode: expecting a callback.");
        for (var e2, n3, r3 = this._nodes.values();(e2 = r3.next()).done !== true; )
          t2((n3 = e2.value).key, n3.attributes);
      }, i2.findNode = function(t2) {
        if (typeof t2 != "function")
          throw new B("Graph.findNode: expecting a callback.");
        for (var e2, n3, r3 = this._nodes.values();(e2 = r3.next()).done !== true; )
          if (t2((n3 = e2.value).key, n3.attributes))
            return n3.key;
      }, i2.mapNodes = function(t2) {
        if (typeof t2 != "function")
          throw new B("Graph.mapNode: expecting a callback.");
        for (var e2, n3, r3 = this._nodes.values(), i3 = new Array(this.order), o3 = 0;(e2 = r3.next()).done !== true; )
          n3 = e2.value, i3[o3++] = t2(n3.key, n3.attributes);
        return i3;
      }, i2.someNode = function(t2) {
        if (typeof t2 != "function")
          throw new B("Graph.someNode: expecting a callback.");
        for (var e2, n3, r3 = this._nodes.values();(e2 = r3.next()).done !== true; )
          if (t2((n3 = e2.value).key, n3.attributes))
            return true;
        return false;
      }, i2.everyNode = function(t2) {
        if (typeof t2 != "function")
          throw new B("Graph.everyNode: expecting a callback.");
        for (var e2, n3, r3 = this._nodes.values();(e2 = r3.next()).done !== true; )
          if (!t2((n3 = e2.value).key, n3.attributes))
            return false;
        return true;
      }, i2.filterNodes = function(t2) {
        if (typeof t2 != "function")
          throw new B("Graph.filterNodes: expecting a callback.");
        for (var e2, n3, r3 = this._nodes.values(), i3 = [];(e2 = r3.next()).done !== true; )
          t2((n3 = e2.value).key, n3.attributes) && i3.push(n3.key);
        return i3;
      }, i2.reduceNodes = function(t2, e2) {
        if (typeof t2 != "function")
          throw new B("Graph.reduceNodes: expecting a callback.");
        if (arguments.length < 2)
          throw new B("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");
        for (var n3, r3, i3 = e2, o3 = this._nodes.values();(n3 = o3.next()).done !== true; )
          i3 = t2(i3, (r3 = n3.value).key, r3.attributes);
        return i3;
      }, i2.nodeEntries = function() {
        var t2 = this._nodes.values();
        return new O(function() {
          var e2 = t2.next();
          if (e2.done)
            return e2;
          var n3 = e2.value;
          return { value: { node: n3.key, attributes: n3.attributes }, done: false };
        });
      }, i2.export = function() {
        var t2 = this, e2 = new Array(this._nodes.size), n3 = 0;
        this._nodes.forEach(function(t3, r4) {
          e2[n3++] = function(t4, e3) {
            var n4 = { key: t4 };
            return h2(e3.attributes) || (n4.attributes = u({}, e3.attributes)), n4;
          }(r4, t3);
        });
        var r3 = new Array(this._edges.size);
        return n3 = 0, this._edges.forEach(function(e3, i3) {
          r3[n3++] = function(t3, e4, n4) {
            var r4 = { key: e4, source: n4.source.key, target: n4.target.key };
            return h2(n4.attributes) || (r4.attributes = u({}, n4.attributes)), t3 === "mixed" && n4.undirected && (r4.undirected = true), r4;
          }(t2.type, i3, e3);
        }), { options: { type: this.type, multi: this.multi, allowSelfLoops: this.allowSelfLoops }, attributes: this.getAttributes(), nodes: e2, edges: r3 };
      }, i2.import = function(t2) {
        var e2, n3, i3, o3, a3, c2 = this, u2 = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
        if (t2 instanceof r2)
          return t2.forEachNode(function(t3, e3) {
            u2 ? c2.mergeNode(t3, e3) : c2.addNode(t3, e3);
          }), t2.forEachEdge(function(t3, e3, n4, r3, i4, o4, a4) {
            u2 ? a4 ? c2.mergeUndirectedEdgeWithKey(t3, n4, r3, e3) : c2.mergeDirectedEdgeWithKey(t3, n4, r3, e3) : a4 ? c2.addUndirectedEdgeWithKey(t3, n4, r3, e3) : c2.addDirectedEdgeWithKey(t3, n4, r3, e3);
          }), this;
        if (!s(t2))
          throw new B("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");
        if (t2.attributes) {
          if (!s(t2.attributes))
            throw new B("Graph.import: invalid attributes. Expecting a plain object.");
          u2 ? this.mergeAttributes(t2.attributes) : this.replaceAttributes(t2.attributes);
        }
        if (t2.nodes) {
          if (i3 = t2.nodes, !Array.isArray(i3))
            throw new B("Graph.import: invalid nodes. Expecting an array.");
          for (e2 = 0, n3 = i3.length;e2 < n3; e2++) {
            Et(o3 = i3[e2]);
            var d3 = o3, h3 = d3.key, p2 = d3.attributes;
            u2 ? this.mergeNode(h3, p2) : this.addNode(h3, p2);
          }
        }
        if (t2.edges) {
          var f2 = false;
          if (this.type === "undirected" && (f2 = true), i3 = t2.edges, !Array.isArray(i3))
            throw new B("Graph.import: invalid edges. Expecting an array.");
          for (e2 = 0, n3 = i3.length;e2 < n3; e2++) {
            At(a3 = i3[e2]);
            var l3 = a3, g3 = l3.source, y3 = l3.target, w3 = l3.attributes, v3 = l3.undirected, b3 = v3 === undefined ? f2 : v3;
            "key" in a3 ? (u2 ? b3 ? this.mergeUndirectedEdgeWithKey : this.mergeDirectedEdgeWithKey : b3 ? this.addUndirectedEdgeWithKey : this.addDirectedEdgeWithKey).call(this, a3.key, g3, y3, w3) : (u2 ? b3 ? this.mergeUndirectedEdge : this.mergeDirectedEdge : b3 ? this.addUndirectedEdge : this.addDirectedEdge).call(this, g3, y3, w3);
          }
        }
        return this;
      }, i2.nullCopy = function(t2) {
        var e2 = new r2(u({}, this._options, t2));
        return e2.replaceAttributes(u({}, this.getAttributes())), e2;
      }, i2.emptyCopy = function(t2) {
        var e2 = this.nullCopy(t2);
        return this._nodes.forEach(function(t3, n3) {
          var r3 = u({}, t3.attributes);
          t3 = new e2.NodeDataClass(n3, r3), e2._nodes.set(n3, t3);
        }), e2;
      }, i2.copy = function(t2) {
        if (typeof (t2 = t2 || {}).type == "string" && t2.type !== this.type && t2.type !== "mixed")
          throw new I('Graph.copy: cannot create an incompatible copy from "'.concat(this.type, '" type to "').concat(t2.type, '" because this would mean losing information about the current graph.'));
        if (typeof t2.multi == "boolean" && t2.multi !== this.multi && t2.multi !== true)
          throw new I("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");
        if (typeof t2.allowSelfLoops == "boolean" && t2.allowSelfLoops !== this.allowSelfLoops && t2.allowSelfLoops !== true)
          throw new I("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");
        for (var e2, n3, r3 = this.emptyCopy(t2), i3 = this._edges.values();(e2 = i3.next()).done !== true; )
          jt(r3, "copy", false, (n3 = e2.value).undirected, n3.key, n3.source.key, n3.target.key, u({}, n3.attributes));
        return r3;
      }, i2.toJSON = function() {
        return this.export();
      }, i2.toString = function() {
        return "[object Graph]";
      }, i2.inspect = function() {
        var e2 = this, n3 = {};
        this._nodes.forEach(function(t2, e3) {
          n3[e3] = t2.attributes;
        });
        var r3 = {}, i3 = {};
        this._edges.forEach(function(t2, n4) {
          var o4, a4 = t2.undirected ? "--" : "->", c2 = "", u2 = t2.source.key, d3 = t2.target.key;
          t2.undirected && u2 > d3 && (o4 = u2, u2 = d3, d3 = o4);
          var s2 = "(".concat(u2, ")").concat(a4, "(").concat(d3, ")");
          n4.startsWith("geid_") ? e2.multi && (i3[s2] === undefined ? i3[s2] = 0 : i3[s2]++, c2 += "".concat(i3[s2], ". ")) : c2 += "[".concat(n4, "]: "), r3[c2 += s2] = t2.attributes;
        });
        var o3 = {};
        for (var a3 in this)
          this.hasOwnProperty(a3) && !Ut.has(a3) && typeof this[a3] != "function" && t(a3) !== "symbol" && (o3[a3] = this[a3]);
        return o3.attributes = this._attributes, o3.nodes = n3, o3.edges = r3, p(o3, "constructor", this.constructor), o3;
      }, r2;
    }(y2.exports.EventEmitter);
    typeof Symbol != "undefined" && (zt.prototype[Symbol.for("nodejs.util.inspect.custom")] = zt.prototype.inspect), [{ name: function(t2) {
      return "".concat(t2, "Edge");
    }, generateKey: true }, { name: function(t2) {
      return "".concat(t2, "DirectedEdge");
    }, generateKey: true, type: "directed" }, { name: function(t2) {
      return "".concat(t2, "UndirectedEdge");
    }, generateKey: true, type: "undirected" }, { name: function(t2) {
      return "".concat(t2, "EdgeWithKey");
    } }, { name: function(t2) {
      return "".concat(t2, "DirectedEdgeWithKey");
    }, type: "directed" }, { name: function(t2) {
      return "".concat(t2, "UndirectedEdgeWithKey");
    }, type: "undirected" }].forEach(function(t2) {
      ["add", "merge", "update"].forEach(function(e2) {
        var n2 = t2.name(e2), r2 = e2 === "add" ? jt : Ct;
        t2.generateKey ? zt.prototype[n2] = function(i2, o3, a3) {
          return r2(this, n2, true, (t2.type || this.type) === "undirected", null, i2, o3, a3, e2 === "update");
        } : zt.prototype[n2] = function(i2, o3, a3, c2) {
          return r2(this, n2, false, (t2.type || this.type) === "undirected", i2, o3, a3, c2, e2 === "update");
        };
      });
    }), function(t2) {
      Q.forEach(function(e2) {
        var { name: n2, attacher: r2 } = e2;
        r2(t2, n2("Node"), 0), r2(t2, n2("Source"), 1), r2(t2, n2("Target"), 2), r2(t2, n2("Opposite"), 3);
      });
    }(zt), function(t2) {
      X.forEach(function(e2) {
        var { name: n2, attacher: r2 } = e2;
        r2(t2, n2("Edge"), "mixed"), r2(t2, n2("DirectedEdge"), "directed"), r2(t2, n2("UndirectedEdge"), "undirected");
      });
    }(zt), function(t2) {
      et.forEach(function(e2) {
        (function(t3, e3) {
          var { name: n2, type: r2, direction: i2 } = e3;
          t3.prototype[n2] = function(t4, e4) {
            if (r2 !== "mixed" && this.type !== "mixed" && r2 !== this.type)
              return [];
            if (!arguments.length)
              return ut(this, r2);
            if (arguments.length === 1) {
              t4 = "" + t4;
              var o3 = this._nodes.get(t4);
              if (o3 === undefined)
                throw new F("Graph.".concat(n2, ': could not find the "').concat(t4, '" node in the graph.'));
              return pt(this.multi, r2 === "mixed" ? this.type : r2, i2, o3);
            }
            if (arguments.length === 2) {
              t4 = "" + t4, e4 = "" + e4;
              var a3 = this._nodes.get(t4);
              if (!a3)
                throw new F("Graph.".concat(n2, ':  could not find the "').concat(t4, '" source node in the graph.'));
              if (!this._nodes.has(e4))
                throw new F("Graph.".concat(n2, ':  could not find the "').concat(e4, '" target node in the graph.'));
              return gt(r2, this.multi, i2, a3, e4);
            }
            throw new B("Graph.".concat(n2, ": too many arguments (expecting 0, 1 or 2 and got ").concat(arguments.length, ")."));
          };
        })(t2, e2), function(t3, e3) {
          var { name: n2, type: r2, direction: i2 } = e3, o3 = "forEach" + n2[0].toUpperCase() + n2.slice(1, -1);
          t3.prototype[o3] = function(t4, e4, n3) {
            if (r2 === "mixed" || this.type === "mixed" || r2 === this.type) {
              if (arguments.length === 1)
                return dt(false, this, r2, n3 = t4);
              if (arguments.length === 2) {
                t4 = "" + t4, n3 = e4;
                var a4 = this._nodes.get(t4);
                if (a4 === undefined)
                  throw new F("Graph.".concat(o3, ': could not find the "').concat(t4, '" node in the graph.'));
                return ht(false, this.multi, r2 === "mixed" ? this.type : r2, i2, a4, n3);
              }
              if (arguments.length === 3) {
                t4 = "" + t4, e4 = "" + e4;
                var c3 = this._nodes.get(t4);
                if (!c3)
                  throw new F("Graph.".concat(o3, ':  could not find the "').concat(t4, '" source node in the graph.'));
                if (!this._nodes.has(e4))
                  throw new F("Graph.".concat(o3, ':  could not find the "').concat(e4, '" target node in the graph.'));
                return lt(false, r2, this.multi, i2, c3, e4, n3);
              }
              throw new B("Graph.".concat(o3, ": too many arguments (expecting 1, 2 or 3 and got ").concat(arguments.length, ")."));
            }
          };
          var a3 = "map" + n2[0].toUpperCase() + n2.slice(1);
          t3.prototype[a3] = function() {
            var t4, e4 = Array.prototype.slice.call(arguments), n3 = e4.pop();
            if (e4.length === 0) {
              var i3 = 0;
              r2 !== "directed" && (i3 += this.undirectedSize), r2 !== "undirected" && (i3 += this.directedSize), t4 = new Array(i3);
              var a4 = 0;
              e4.push(function(e5, r3, i4, o4, c3, u3, d3) {
                t4[a4++] = n3(e5, r3, i4, o4, c3, u3, d3);
              });
            } else
              t4 = [], e4.push(function(e5, r3, i4, o4, a5, c3, u3) {
                t4.push(n3(e5, r3, i4, o4, a5, c3, u3));
              });
            return this[o3].apply(this, e4), t4;
          };
          var c2 = "filter" + n2[0].toUpperCase() + n2.slice(1);
          t3.prototype[c2] = function() {
            var t4 = Array.prototype.slice.call(arguments), e4 = t4.pop(), n3 = [];
            return t4.push(function(t5, r3, i3, o4, a4, c3, u3) {
              e4(t5, r3, i3, o4, a4, c3, u3) && n3.push(t5);
            }), this[o3].apply(this, t4), n3;
          };
          var u2 = "reduce" + n2[0].toUpperCase() + n2.slice(1);
          t3.prototype[u2] = function() {
            var t4, e4, n3 = Array.prototype.slice.call(arguments);
            if (n3.length < 2 || n3.length > 4)
              throw new B("Graph.".concat(u2, ": invalid number of arguments (expecting 2, 3 or 4 and got ").concat(n3.length, ")."));
            if (typeof n3[n3.length - 1] == "function" && typeof n3[n3.length - 2] != "function")
              throw new B("Graph.".concat(u2, ": missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array."));
            n3.length === 2 ? (t4 = n3[0], e4 = n3[1], n3 = []) : n3.length === 3 ? (t4 = n3[1], e4 = n3[2], n3 = [n3[0]]) : n3.length === 4 && (t4 = n3[2], e4 = n3[3], n3 = [n3[0], n3[1]]);
            var r3 = e4;
            return n3.push(function(e5, n4, i3, o4, a4, c3, u3) {
              r3 = t4(r3, e5, n4, i3, o4, a4, c3, u3);
            }), this[o3].apply(this, n3), r3;
          };
        }(t2, e2), function(t3, e3) {
          var { name: n2, type: r2, direction: i2 } = e3, o3 = "find" + n2[0].toUpperCase() + n2.slice(1, -1);
          t3.prototype[o3] = function(t4, e4, n3) {
            if (r2 !== "mixed" && this.type !== "mixed" && r2 !== this.type)
              return false;
            if (arguments.length === 1)
              return dt(true, this, r2, n3 = t4);
            if (arguments.length === 2) {
              t4 = "" + t4, n3 = e4;
              var a4 = this._nodes.get(t4);
              if (a4 === undefined)
                throw new F("Graph.".concat(o3, ': could not find the "').concat(t4, '" node in the graph.'));
              return ht(true, this.multi, r2 === "mixed" ? this.type : r2, i2, a4, n3);
            }
            if (arguments.length === 3) {
              t4 = "" + t4, e4 = "" + e4;
              var c3 = this._nodes.get(t4);
              if (!c3)
                throw new F("Graph.".concat(o3, ':  could not find the "').concat(t4, '" source node in the graph.'));
              if (!this._nodes.has(e4))
                throw new F("Graph.".concat(o3, ':  could not find the "').concat(e4, '" target node in the graph.'));
              return lt(true, r2, this.multi, i2, c3, e4, n3);
            }
            throw new B("Graph.".concat(o3, ": too many arguments (expecting 1, 2 or 3 and got ").concat(arguments.length, ")."));
          };
          var a3 = "some" + n2[0].toUpperCase() + n2.slice(1, -1);
          t3.prototype[a3] = function() {
            var t4 = Array.prototype.slice.call(arguments), e4 = t4.pop();
            return t4.push(function(t5, n3, r3, i3, o4, a4, c3) {
              return e4(t5, n3, r3, i3, o4, a4, c3);
            }), !!this[o3].apply(this, t4);
          };
          var c2 = "every" + n2[0].toUpperCase() + n2.slice(1, -1);
          t3.prototype[c2] = function() {
            var t4 = Array.prototype.slice.call(arguments), e4 = t4.pop();
            return t4.push(function(t5, n3, r3, i3, o4, a4, c3) {
              return !e4(t5, n3, r3, i3, o4, a4, c3);
            }), !this[o3].apply(this, t4);
          };
        }(t2, e2), function(t3, e3) {
          var { name: n2, type: r2, direction: i2 } = e3, o3 = n2.slice(0, -1) + "Entries";
          t3.prototype[o3] = function(t4, e4) {
            if (r2 !== "mixed" && this.type !== "mixed" && r2 !== this.type)
              return O.empty();
            if (!arguments.length)
              return st(this, r2);
            if (arguments.length === 1) {
              t4 = "" + t4;
              var n3 = this._nodes.get(t4);
              if (!n3)
                throw new F("Graph.".concat(o3, ': could not find the "').concat(t4, '" node in the graph.'));
              return ft(r2, i2, n3);
            }
            if (arguments.length === 2) {
              t4 = "" + t4, e4 = "" + e4;
              var a3 = this._nodes.get(t4);
              if (!a3)
                throw new F("Graph.".concat(o3, ':  could not find the "').concat(t4, '" source node in the graph.'));
              if (!this._nodes.has(e4))
                throw new F("Graph.".concat(o3, ':  could not find the "').concat(e4, '" target node in the graph.'));
              return yt(r2, i2, a3, e4);
            }
            throw new B("Graph.".concat(o3, ": too many arguments (expecting 0, 1 or 2 and got ").concat(arguments.length, ")."));
          };
        }(t2, e2);
      });
    }(zt), function(t2) {
      wt.forEach(function(e2) {
        _t(t2, e2), function(t3, e3) {
          var { name: n2, type: r2, direction: i2 } = e3, o3 = "forEach" + n2[0].toUpperCase() + n2.slice(1, -1);
          t3.prototype[o3] = function(t4, e4) {
            if (r2 === "mixed" || this.type === "mixed" || r2 === this.type) {
              t4 = "" + t4;
              var n3 = this._nodes.get(t4);
              if (n3 === undefined)
                throw new F("Graph.".concat(o3, ': could not find the "').concat(t4, '" node in the graph.'));
              mt(false, r2 === "mixed" ? this.type : r2, i2, n3, e4);
            }
          };
          var a3 = "map" + n2[0].toUpperCase() + n2.slice(1);
          t3.prototype[a3] = function(t4, e4) {
            var n3 = [];
            return this[o3](t4, function(t5, r3) {
              n3.push(e4(t5, r3));
            }), n3;
          };
          var c2 = "filter" + n2[0].toUpperCase() + n2.slice(1);
          t3.prototype[c2] = function(t4, e4) {
            var n3 = [];
            return this[o3](t4, function(t5, r3) {
              e4(t5, r3) && n3.push(t5);
            }), n3;
          };
          var u2 = "reduce" + n2[0].toUpperCase() + n2.slice(1);
          t3.prototype[u2] = function(t4, e4, n3) {
            if (arguments.length < 3)
              throw new B("Graph.".concat(u2, ": missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array."));
            var r3 = n3;
            return this[o3](t4, function(t5, n4) {
              r3 = e4(r3, t5, n4);
            }), r3;
          };
        }(t2, e2), function(t3, e3) {
          var { name: n2, type: r2, direction: i2 } = e3, o3 = n2[0].toUpperCase() + n2.slice(1, -1), a3 = "find" + o3;
          t3.prototype[a3] = function(t4, e4) {
            if (r2 === "mixed" || this.type === "mixed" || r2 === this.type) {
              t4 = "" + t4;
              var n3 = this._nodes.get(t4);
              if (n3 === undefined)
                throw new F("Graph.".concat(a3, ': could not find the "').concat(t4, '" node in the graph.'));
              return mt(true, r2 === "mixed" ? this.type : r2, i2, n3, e4);
            }
          };
          var c2 = "some" + o3;
          t3.prototype[c2] = function(t4, e4) {
            return !!this[a3](t4, e4);
          };
          var u2 = "every" + o3;
          t3.prototype[u2] = function(t4, e4) {
            return !this[a3](t4, function(t5, n3) {
              return !e4(t5, n3);
            });
          };
        }(t2, e2), Gt(t2, e2);
      });
    }(zt);
    var Wt = function(t2) {
      function n2(e2) {
        var n3 = u({ type: "directed" }, e2);
        if (("multi" in n3) && n3.multi !== false)
          throw new B("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");
        if (n3.type !== "directed")
          throw new B('DirectedGraph.from: inconsistent "' + n3.type + '" type in given options!');
        return t2.call(this, n3) || this;
      }
      return e(n2, t2), n2;
    }(zt), Pt = function(t2) {
      function n2(e2) {
        var n3 = u({ type: "undirected" }, e2);
        if (("multi" in n3) && n3.multi !== false)
          throw new B("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");
        if (n3.type !== "undirected")
          throw new B('UndirectedGraph.from: inconsistent "' + n3.type + '" type in given options!');
        return t2.call(this, n3) || this;
      }
      return e(n2, t2), n2;
    }(zt), Rt = function(t2) {
      function n2(e2) {
        var n3 = u({ multi: true }, e2);
        if (("multi" in n3) && n3.multi !== true)
          throw new B("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");
        return t2.call(this, n3) || this;
      }
      return e(n2, t2), n2;
    }(zt), Kt = function(t2) {
      function n2(e2) {
        var n3 = u({ type: "directed", multi: true }, e2);
        if (("multi" in n3) && n3.multi !== true)
          throw new B("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");
        if (n3.type !== "directed")
          throw new B('MultiDirectedGraph.from: inconsistent "' + n3.type + '" type in given options!');
        return t2.call(this, n3) || this;
      }
      return e(n2, t2), n2;
    }(zt), Tt = function(t2) {
      function n2(e2) {
        var n3 = u({ type: "undirected", multi: true }, e2);
        if (("multi" in n3) && n3.multi !== true)
          throw new B("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");
        if (n3.type !== "undirected")
          throw new B('MultiUndirectedGraph.from: inconsistent "' + n3.type + '" type in given options!');
        return t2.call(this, n3) || this;
      }
      return e(n2, t2), n2;
    }(zt);
    function Bt(t2) {
      t2.from = function(e2, n2) {
        var r2 = u({}, e2.options, n2), i2 = new t2(r2);
        return i2.import(e2), i2;
      };
    }
    return Bt(zt), Bt(Wt), Bt(Pt), Bt(Rt), Bt(Kt), Bt(Tt), zt.Graph = zt, zt.DirectedGraph = Wt, zt.UndirectedGraph = Pt, zt.MultiGraph = Rt, zt.MultiDirectedGraph = Kt, zt.MultiUndirectedGraph = Tt, zt.InvalidArgumentsGraphError = B, zt.NotFoundGraphError = F, zt.UsageGraphError = I, zt;
  });
});

// node_modules/graphology-utils/defaults.js
var require_defaults = __commonJS((exports, module) => {
  var isLeaf = function(o2) {
    return !o2 || typeof o2 !== "object" || typeof o2 === "function" || Array.isArray(o2) || o2 instanceof Set || o2 instanceof Map || o2 instanceof RegExp || o2 instanceof Date;
  };
  var resolveDefaults = function(target, defaults) {
    target = target || {};
    var output = {};
    for (var k in defaults) {
      var existing = target[k];
      var def = defaults[k];
      if (!isLeaf(def)) {
        output[k] = resolveDefaults(existing, def);
        continue;
      }
      if (existing === undefined) {
        output[k] = def;
      } else {
        output[k] = existing;
      }
    }
    return output;
  };
  module.exports = resolveDefaults;
});

// node_modules/pandemonium/random.js
var require_random = __commonJS((exports, module) => {
  var createRandom = function(rng) {
    return function(a2, b2) {
      return a2 + Math.floor(rng() * (b2 - a2 + 1));
    };
  };
  var random = createRandom(Math.random);
  random.createRandom = createRandom;
  module.exports = random;
});

// node_modules/pandemonium/shuffle-in-place.js
var require_shuffle_in_place = __commonJS((exports, module) => {
  var createShuffleInPlace = function(rng) {
    var customRandom = createRandom(rng);
    return function(sequence) {
      var length = sequence.length, lastIndex = length - 1;
      var index = -1;
      while (++index < length) {
        var r = customRandom(index, lastIndex), value = sequence[r];
        sequence[r] = sequence[index];
        sequence[index] = value;
      }
    };
  };
  var createRandom = require_random().createRandom;
  var shuffleInPlace = createShuffleInPlace(Math.random);
  shuffleInPlace.createShuffleInPlace = createShuffleInPlace;
  module.exports = shuffleInPlace;
});

// node_modules/graphology-layout/circlepack.js
var require_circlepack = __commonJS((exports, module) => {
  var CircleWrap = function(id, x2, y2, r, circleWrap) {
    this.wrappedCircle = circleWrap || null;
    this.children = {};
    this.countChildren = 0;
    this.id = id || null;
    this.next = null;
    this.previous = null;
    this.x = x2 || null;
    this.y = y2 || null;
    if (circleWrap)
      this.r = 1010101;
    else
      this.r = r || 999;
  };
  var setNode = function(graph, parentCircle, posMap) {
    for (var key in parentCircle.children) {
      var circle = parentCircle.children[key];
      if (circle.hasChildren()) {
        setNode(graph, circle, posMap);
      } else {
        posMap[circle.id] = { x: circle.x, y: circle.y };
      }
    }
  };
  var enclosesNot = function(a2, b2) {
    var dr = a2.r - b2.r;
    var dx = b2.x - a2.x;
    var dy = b2.y - a2.y;
    return dr < 0 || dr * dr < dx * dx + dy * dy;
  };
  var enclosesWeak = function(a2, b2) {
    var dr = a2.r - b2.r + 0.000001;
    var dx = b2.x - a2.x;
    var dy = b2.y - a2.y;
    return dr > 0 && dr * dr > dx * dx + dy * dy;
  };
  var enclosesWeakAll = function(a2, B) {
    for (var i = 0;i < B.length; ++i) {
      if (!enclosesWeak(a2, B[i])) {
        return false;
      }
    }
    return true;
  };
  var encloseBasis1 = function(a2) {
    return new CircleWrap(null, a2.x, a2.y, a2.r);
  };
  var encloseBasis2 = function(a2, b2) {
    var { x: x1, y: y1, r: r1 } = a2, x2 = b2.x, y2 = b2.y, r2 = b2.r, x21 = x2 - x1, y21 = y2 - y1, r21 = r2 - r1, l2 = Math.sqrt(x21 * x21 + y21 * y21);
    return new CircleWrap(null, (x1 + x2 + x21 / l2 * r21) / 2, (y1 + y2 + y21 / l2 * r21) / 2, (l2 + r1 + r2) / 2);
  };
  var encloseBasis3 = function(a2, b2, c) {
    var { x: x1, y: y1, r: r1 } = a2, x2 = b2.x, y2 = b2.y, r2 = b2.r, x3 = c.x, y3 = c.y, r3 = c.r, a22 = x1 - x2, a3 = x1 - x3, b22 = y1 - y2, b3 = y1 - y3, c2 = r2 - r1, c3 = r3 - r1, d1 = x1 * x1 + y1 * y1 - r1 * r1, d2 = d1 - x2 * x2 - y2 * y2 + r2 * r2, d3 = d1 - x3 * x3 - y3 * y3 + r3 * r3, ab = a3 * b22 - a22 * b3, xa = (b22 * d3 - b3 * d2) / (ab * 2) - x1, xb = (b3 * c2 - b22 * c3) / ab, ya = (a3 * d2 - a22 * d3) / (ab * 2) - y1, yb = (a22 * c3 - a3 * c2) / ab, A2 = xb * xb + yb * yb - 1, B = 2 * (r1 + xa * xb + ya * yb), C2 = xa * xa + ya * ya - r1 * r1, r = -(A2 ? (B + Math.sqrt(B * B - 4 * A2 * C2)) / (2 * A2) : C2 / B);
    return new CircleWrap(null, x1 + xa + xb * r, y1 + ya + yb * r, r);
  };
  var encloseBasis = function(B) {
    switch (B.length) {
      case 1:
        return encloseBasis1(B[0]);
      case 2:
        return encloseBasis2(B[0], B[1]);
      case 3:
        return encloseBasis3(B[0], B[1], B[2]);
      default:
        throw new Error("graphology-layout/circlepack: Invalid basis length " + B.length);
    }
  };
  var extendBasis = function(B, p) {
    var i, j2;
    if (enclosesWeakAll(p, B))
      return [p];
    for (i = 0;i < B.length; ++i) {
      if (enclosesNot(p, B[i]) && enclosesWeakAll(encloseBasis2(B[i], p), B)) {
        return [B[i], p];
      }
    }
    for (i = 0;i < B.length - 1; ++i) {
      for (j2 = i + 1;j2 < B.length; ++j2) {
        if (enclosesNot(encloseBasis2(B[i], B[j2]), p) && enclosesNot(encloseBasis2(B[i], p), B[j2]) && enclosesNot(encloseBasis2(B[j2], p), B[i]) && enclosesWeakAll(encloseBasis3(B[i], B[j2], p), B)) {
          return [B[i], B[j2], p];
        }
      }
    }
    throw new Error("graphology-layout/circlepack: extendBasis failure !");
  };
  var score = function(node) {
    var a2 = node.wrappedCircle;
    var b2 = node.next.wrappedCircle;
    var ab = a2.r + b2.r;
    var dx = (a2.x * b2.r + b2.x * a2.r) / ab;
    var dy = (a2.y * b2.r + b2.y * a2.r) / ab;
    return dx * dx + dy * dy;
  };
  var enclose = function(circles, shuffleFunc) {
    var i = 0;
    var circlesLoc = circles.slice();
    var n = circles.length;
    var B = [];
    var p;
    var e;
    shuffleFunc(circlesLoc);
    while (i < n) {
      p = circlesLoc[i];
      if (e && enclosesWeak(e, p)) {
        ++i;
      } else {
        B = extendBasis(B, p);
        e = encloseBasis(B);
        i = 0;
      }
    }
    return e;
  };
  var place = function(b2, a2, c) {
    var dx = b2.x - a2.x, x2, a22, dy = b2.y - a2.y, y2, b22, d2 = dx * dx + dy * dy;
    if (d2) {
      a22 = a2.r + c.r;
      a22 *= a22;
      b22 = b2.r + c.r;
      b22 *= b22;
      if (a22 > b22) {
        x2 = (d2 + b22 - a22) / (2 * d2);
        y2 = Math.sqrt(Math.max(0, b22 / d2 - x2 * x2));
        c.x = b2.x - x2 * dx - y2 * dy;
        c.y = b2.y - x2 * dy + y2 * dx;
      } else {
        x2 = (d2 + a22 - b22) / (2 * d2);
        y2 = Math.sqrt(Math.max(0, a22 / d2 - x2 * x2));
        c.x = a2.x + x2 * dx - y2 * dy;
        c.y = a2.y + x2 * dy + y2 * dx;
      }
    } else {
      c.x = a2.x + c.r;
      c.y = a2.y;
    }
  };
  var intersects = function(a2, b2) {
    var dr = a2.r + b2.r - 0.000001, dx = b2.x - a2.x, dy = b2.y - a2.y;
    return dr > 0 && dr * dr > dx * dx + dy * dy;
  };
  var packEnclose = function(circles, shuffleFunc) {
    var n = circles.length;
    if (n === 0)
      return 0;
    var a2, b2, c, aa, ca, i, j2, k, sj, sk;
    a2 = circles[0];
    a2.x = 0;
    a2.y = 0;
    if (n <= 1)
      return a2.r;
    b2 = circles[1];
    a2.x = -b2.r;
    b2.x = a2.r;
    b2.y = 0;
    if (n <= 2)
      return a2.r + b2.r;
    c = circles[2];
    place(b2, a2, c);
    a2 = new CircleWrap(null, null, null, null, a2);
    b2 = new CircleWrap(null, null, null, null, b2);
    c = new CircleWrap(null, null, null, null, c);
    a2.next = c.previous = b2;
    b2.next = a2.previous = c;
    c.next = b2.previous = a2;
    pack:
      for (i = 3;i < n; ++i) {
        c = circles[i];
        place(a2.wrappedCircle, b2.wrappedCircle, c);
        c = new CircleWrap(null, null, null, null, c);
        j2 = b2.next;
        k = a2.previous;
        sj = b2.wrappedCircle.r;
        sk = a2.wrappedCircle.r;
        do {
          if (sj <= sk) {
            if (intersects(j2.wrappedCircle, c.wrappedCircle)) {
              b2 = j2;
              a2.next = b2;
              b2.previous = a2;
              --i;
              continue pack;
            }
            sj += j2.wrappedCircle.r;
            j2 = j2.next;
          } else {
            if (intersects(k.wrappedCircle, c.wrappedCircle)) {
              a2 = k;
              a2.next = b2;
              b2.previous = a2;
              --i;
              continue pack;
            }
            sk += k.wrappedCircle.r;
            k = k.previous;
          }
        } while (j2 !== k.next);
        c.previous = a2;
        c.next = b2;
        a2.next = b2.previous = b2 = c;
        aa = score(a2);
        while ((c = c.next) !== b2) {
          if ((ca = score(c)) < aa) {
            a2 = c;
            aa = ca;
          }
        }
        b2 = a2.next;
      }
    a2 = [b2.wrappedCircle];
    c = b2;
    var safety = 1e4;
    while ((c = c.next) !== b2) {
      if (--safety === 0) {
        break;
      }
      a2.push(c.wrappedCircle);
    }
    c = enclose(a2, shuffleFunc);
    for (i = 0;i < n; ++i) {
      a2 = circles[i];
      a2.x -= c.x;
      a2.y -= c.y;
    }
    return c.r;
  };
  var packHierarchy = function(parentCircle, shuffleFunc) {
    var r = 0;
    if (parentCircle.hasChildren()) {
      for (var key in parentCircle.children) {
        var circle = parentCircle.children[key];
        if (circle.hasChildren()) {
          circle.r = packHierarchy(circle, shuffleFunc);
        }
      }
      r = packEnclose(Object.values(parentCircle.children), shuffleFunc);
    }
    return r;
  };
  var packHierarchyAndShift = function(parentCircle, shuffleFunc) {
    packHierarchy(parentCircle, shuffleFunc);
    for (var key in parentCircle.children) {
      var circle = parentCircle.children[key];
      circle.applyPositionToChildren();
    }
  };
  var genericCirclePackLayout = function(assign, graph, options) {
    if (!isGraph(graph))
      throw new Error("graphology-layout/circlepack: the given graph is not a valid graphology instance.");
    options = resolveDefaults(options, DEFAULTS);
    var posMap = {}, positions = {}, nodes = graph.nodes(), center = options.center, hierarchyAttributes = options.hierarchyAttributes, shuffleFunc = shuffle.createShuffleInPlace(options.rng), scale = options.scale;
    var container = new CircleWrap;
    graph.forEachNode(function(key, attributes) {
      var r = attributes.size ? attributes.size : 1;
      var newCircleWrap = new CircleWrap(key, null, null, r);
      var parentContainer = container;
      hierarchyAttributes.forEach(function(v2) {
        var attr = attributes[v2];
        parentContainer = parentContainer.getChild(attr);
      });
      parentContainer.addChild(key, newCircleWrap);
    });
    packHierarchyAndShift(container, shuffleFunc);
    setNode(graph, container, posMap);
    var l2 = nodes.length, x2, y2, i;
    for (i = 0;i < l2; i++) {
      var node = nodes[i];
      x2 = center + scale * posMap[node].x;
      y2 = center + scale * posMap[node].y;
      positions[node] = {
        x: x2,
        y: y2
      };
      if (assign) {
        graph.setNodeAttribute(node, options.attributes.x, x2);
        graph.setNodeAttribute(node, options.attributes.y, y2);
      }
    }
    return positions;
  };
  var resolveDefaults = require_defaults();
  var isGraph = require_is_graph();
  var shuffle = require_shuffle_in_place();
  var DEFAULTS = {
    attributes: {
      x: "x",
      y: "y"
    },
    center: 0,
    hierarchyAttributes: [],
    rng: Math.random,
    scale: 1
  };
  CircleWrap.prototype.hasChildren = function() {
    return this.countChildren > 0;
  };
  CircleWrap.prototype.addChild = function(id, child) {
    this.children[id] = child;
    ++this.countChildren;
  };
  CircleWrap.prototype.getChild = function(id) {
    if (!this.children.hasOwnProperty(id)) {
      var circleWrap = new CircleWrap;
      this.children[id] = circleWrap;
      ++this.countChildren;
    }
    return this.children[id];
  };
  CircleWrap.prototype.applyPositionToChildren = function() {
    if (this.hasChildren()) {
      var root = this;
      for (var key in root.children) {
        var child = root.children[key];
        child.x += root.x;
        child.y += root.y;
        child.applyPositionToChildren();
      }
    }
  };
  var circlePackLayout = genericCirclePackLayout.bind(null, false);
  circlePackLayout.assign = genericCirclePackLayout.bind(null, true);
  module.exports = circlePackLayout;
});

// node_modules/graphology-layout/circular.js
var require_circular = __commonJS((exports, module) => {
  var genericCircularLayout = function(assign, graph, options) {
    if (!isGraph(graph))
      throw new Error("graphology-layout/random: the given graph is not a valid graphology instance.");
    options = resolveDefaults(options, DEFAULTS);
    var dimensions = options.dimensions;
    if (!Array.isArray(dimensions) || dimensions.length !== 2)
      throw new Error("graphology-layout/random: given dimensions are invalid.");
    var center = options.center;
    var scale = options.scale;
    var tau = Math.PI * 2;
    var offset = (center - 0.5) * scale;
    var l2 = graph.order;
    var x2 = dimensions[0];
    var y2 = dimensions[1];
    function assignPosition(i2, target) {
      target[x2] = scale * Math.cos(i2 * tau / l2) + offset;
      target[y2] = scale * Math.sin(i2 * tau / l2) + offset;
      return target;
    }
    var i = 0;
    if (!assign) {
      var positions = {};
      graph.forEachNode(function(node) {
        positions[node] = assignPosition(i++, {});
      });
      return positions;
    }
    graph.updateEachNodeAttributes(function(_2, attr) {
      assignPosition(i++, attr);
      return attr;
    }, {
      attributes: dimensions
    });
  };
  var resolveDefaults = require_defaults();
  var isGraph = require_is_graph();
  var DEFAULTS = {
    dimensions: ["x", "y"],
    center: 0.5,
    scale: 1
  };
  var circularLayout = genericCircularLayout.bind(null, false);
  circularLayout.assign = genericCircularLayout.bind(null, true);
  module.exports = circularLayout;
});

// node_modules/graphology-layout/random.js
var require_random2 = __commonJS((exports, module) => {
  var genericRandomLayout = function(assign, graph, options) {
    if (!isGraph(graph))
      throw new Error("graphology-layout/random: the given graph is not a valid graphology instance.");
    options = resolveDefaults(options, DEFAULTS);
    var dimensions = options.dimensions;
    if (!Array.isArray(dimensions) || dimensions.length < 1)
      throw new Error("graphology-layout/random: given dimensions are invalid.");
    var d2 = dimensions.length;
    var center = options.center;
    var rng = options.rng;
    var scale = options.scale;
    var offset = (center - 0.5) * scale;
    function assignPosition(target) {
      for (var i = 0;i < d2; i++) {
        target[dimensions[i]] = rng() * scale + offset;
      }
      return target;
    }
    if (!assign) {
      var positions = {};
      graph.forEachNode(function(node) {
        positions[node] = assignPosition({});
      });
      return positions;
    }
    graph.updateEachNodeAttributes(function(_2, attr) {
      assignPosition(attr);
      return attr;
    }, {
      attributes: dimensions
    });
  };
  var resolveDefaults = require_defaults();
  var isGraph = require_is_graph();
  var DEFAULTS = {
    dimensions: ["x", "y"],
    center: 0.5,
    rng: Math.random,
    scale: 1
  };
  var randomLayout = genericRandomLayout.bind(null, false);
  randomLayout.assign = genericRandomLayout.bind(null, true);
  module.exports = randomLayout;
});

// node_modules/graphology-layout/rotation.js
var require_rotation = __commonJS((exports, module) => {
  var genericRotation = function(assign, graph, angle, options) {
    if (!isGraph(graph))
      throw new Error("graphology-layout/rotation: the given graph is not a valid graphology instance.");
    options = resolveDefaults(options, DEFAULTS);
    if (options.degrees)
      angle *= RAD_CONVERSION;
    var dimensions = options.dimensions;
    if (!Array.isArray(dimensions) || dimensions.length !== 2)
      throw new Error("graphology-layout/random: given dimensions are invalid.");
    if (graph.order === 0) {
      if (assign)
        return;
      return {};
    }
    var xd = dimensions[0];
    var yd = dimensions[1];
    var xCenter = 0;
    var yCenter = 0;
    if (!options.centeredOnZero) {
      var xMin = Infinity;
      var xMax = (-Infinity);
      var yMin = Infinity;
      var yMax = (-Infinity);
      graph.forEachNode(function(node, attr) {
        var x2 = attr[xd];
        var y2 = attr[yd];
        if (x2 < xMin)
          xMin = x2;
        if (x2 > xMax)
          xMax = x2;
        if (y2 < yMin)
          yMin = y2;
        if (y2 > yMax)
          yMax = y2;
      });
      xCenter = (xMin + xMax) / 2;
      yCenter = (yMin + yMax) / 2;
    }
    var cos = Math.cos(angle);
    var sin = Math.sin(angle);
    function assignPosition(target) {
      var x2 = target[xd];
      var y2 = target[yd];
      target[xd] = xCenter + (x2 - xCenter) * cos - (y2 - yCenter) * sin;
      target[yd] = yCenter + (x2 - xCenter) * sin + (y2 - yCenter) * cos;
      return target;
    }
    if (!assign) {
      var positions = {};
      graph.forEachNode(function(node, attr) {
        var o2 = {};
        o2[xd] = attr[xd];
        o2[yd] = attr[yd];
        positions[node] = assignPosition(o2);
      });
      return positions;
    }
    graph.updateEachNodeAttributes(function(_2, attr) {
      assignPosition(attr);
      return attr;
    }, {
      attributes: dimensions
    });
  };
  var resolveDefaults = require_defaults();
  var isGraph = require_is_graph();
  var RAD_CONVERSION = Math.PI / 180;
  var DEFAULTS = {
    dimensions: ["x", "y"],
    centeredOnZero: false,
    degrees: false
  };
  var rotation = genericRotation.bind(null, false);
  rotation.assign = genericRotation.bind(null, true);
  module.exports = rotation;
});

// node_modules/graphology-utils/getters.js
var require_getters = __commonJS((exports) => {
  var coerceWeight = function(value) {
    if (typeof value !== "number" || isNaN(value))
      return 1;
    return value;
  };
  var createNodeValueGetter = function(nameOrFunction, defaultValue) {
    var getter = {};
    var coerceToDefault = function(v2) {
      if (typeof v2 === "undefined")
        return defaultValue;
      return v2;
    };
    if (typeof defaultValue === "function")
      coerceToDefault = defaultValue;
    var get = function(attributes) {
      return coerceToDefault(attributes[nameOrFunction]);
    };
    var returnDefault = function() {
      return coerceToDefault(undefined);
    };
    if (typeof nameOrFunction === "string") {
      getter.fromAttributes = get;
      getter.fromGraph = function(graph, node) {
        return get(graph.getNodeAttributes(node));
      };
      getter.fromEntry = function(node, attributes) {
        return get(attributes);
      };
    } else if (typeof nameOrFunction === "function") {
      getter.fromAttributes = function() {
        throw new Error("graphology-utils/getters/createNodeValueGetter: irrelevant usage.");
      };
      getter.fromGraph = function(graph, node) {
        return coerceToDefault(nameOrFunction(node, graph.getNodeAttributes(node)));
      };
      getter.fromEntry = function(node, attributes) {
        return coerceToDefault(nameOrFunction(node, attributes));
      };
    } else {
      getter.fromAttributes = returnDefault;
      getter.fromGraph = returnDefault;
      getter.fromEntry = returnDefault;
    }
    return getter;
  };
  var createEdgeValueGetter = function(nameOrFunction, defaultValue) {
    var getter = {};
    var coerceToDefault = function(v2) {
      if (typeof v2 === "undefined")
        return defaultValue;
      return v2;
    };
    if (typeof defaultValue === "function")
      coerceToDefault = defaultValue;
    var get = function(attributes) {
      return coerceToDefault(attributes[nameOrFunction]);
    };
    var returnDefault = function() {
      return coerceToDefault(undefined);
    };
    if (typeof nameOrFunction === "string") {
      getter.fromAttributes = get;
      getter.fromGraph = function(graph, edge) {
        return get(graph.getEdgeAttributes(edge));
      };
      getter.fromEntry = function(edge, attributes) {
        return get(attributes);
      };
      getter.fromPartialEntry = getter.fromEntry;
      getter.fromMinimalEntry = getter.fromEntry;
    } else if (typeof nameOrFunction === "function") {
      getter.fromAttributes = function() {
        throw new Error("graphology-utils/getters/createEdgeValueGetter: irrelevant usage.");
      };
      getter.fromGraph = function(graph, edge) {
        var extremities = graph.extremities(edge);
        return coerceToDefault(nameOrFunction(edge, graph.getEdgeAttributes(edge), extremities[0], extremities[1], graph.getNodeAttributes(extremities[0]), graph.getNodeAttributes(extremities[1]), graph.isUndirected(edge)));
      };
      getter.fromEntry = function(e, a2, s, t, sa, ta, u) {
        return coerceToDefault(nameOrFunction(e, a2, s, t, sa, ta, u));
      };
      getter.fromPartialEntry = function(e, a2, s, t) {
        return coerceToDefault(nameOrFunction(e, a2, s, t));
      };
      getter.fromMinimalEntry = function(e, a2) {
        return coerceToDefault(nameOrFunction(e, a2));
      };
    } else {
      getter.fromAttributes = returnDefault;
      getter.fromGraph = returnDefault;
      getter.fromEntry = returnDefault;
      getter.fromMinimalEntry = returnDefault;
    }
    return getter;
  };
  exports.createNodeValueGetter = createNodeValueGetter;
  exports.createEdgeValueGetter = createEdgeValueGetter;
  exports.createEdgeWeightGetter = function(name) {
    return createEdgeValueGetter(name, coerceWeight);
  };
});

// node_modules/graphology-layout-force/iterate.js
var require_iterate = __commonJS((exports, module) => {
  var {
    createNodeValueGetter,
    createEdgeValueGetter
  } = require_getters();
  module.exports = function iterate(graph, nodeStates, params) {
    const { nodeXAttribute: xKey, nodeYAttribute: yKey } = params;
    const { attraction, repulsion, gravity, inertia, maxMove } = params.settings;
    let { shouldSkipNode, shouldSkipEdge, isNodeFixed } = params;
    isNodeFixed = createNodeValueGetter(isNodeFixed);
    shouldSkipNode = createNodeValueGetter(shouldSkipNode, false);
    shouldSkipEdge = createEdgeValueGetter(shouldSkipEdge, false);
    const nodes = graph.filterNodes((n, attr) => {
      return !shouldSkipNode.fromEntry(n, attr);
    });
    const adjustedOrder = nodes.length;
    for (let i = 0;i < adjustedOrder; i++) {
      const n = nodes[i];
      const attr = graph.getNodeAttributes(n);
      const nodeState = nodeStates[n];
      if (!nodeState)
        nodeStates[n] = {
          dx: 0,
          dy: 0,
          x: attr[xKey] || 0,
          y: attr[yKey] || 0
        };
      else
        nodeStates[n] = {
          dx: nodeState.dx * inertia,
          dy: nodeState.dy * inertia,
          x: attr[xKey] || 0,
          y: attr[yKey] || 0
        };
    }
    if (repulsion)
      for (let i = 0;i < adjustedOrder; i++) {
        const n1 = nodes[i];
        const n1State = nodeStates[n1];
        for (let j2 = i + 1;j2 < adjustedOrder; j2++) {
          const n2 = nodes[j2];
          const n2State = nodeStates[n2];
          const dx = n2State.x - n1State.x;
          const dy = n2State.y - n1State.y;
          const distance = Math.sqrt(dx * dx + dy * dy) || 1;
          const repulsionX = repulsion / distance * dx;
          const repulsionY = repulsion / distance * dy;
          n1State.dx -= repulsionX;
          n1State.dy -= repulsionY;
          n2State.dx += repulsionX;
          n2State.dy += repulsionY;
        }
      }
    if (attraction)
      graph.forEachEdge((edge, attr, source, target, sourceAttr, targetAttr, undirected) => {
        if (source === target)
          return;
        if (shouldSkipNode.fromEntry(source, sourceAttr) || shouldSkipNode.fromEntry(target, targetAttr))
          return;
        if (shouldSkipEdge.fromEntry(edge, attr, source, target, sourceAttr, targetAttr, undirected))
          return;
        const n1State = nodeStates[source];
        const n2State = nodeStates[target];
        const dx = n2State.x - n1State.x;
        const dy = n2State.y - n1State.y;
        const distance = Math.sqrt(dx * dx + dy * dy) || 1;
        const attractionX = attraction * distance * dx;
        const attractionY = attraction * distance * dy;
        n1State.dx += attractionX;
        n1State.dy += attractionY;
        n2State.dx -= attractionX;
        n2State.dy -= attractionY;
      });
    if (gravity)
      for (let i = 0;i < adjustedOrder; i++) {
        const n = nodes[i];
        const nodeState = nodeStates[n];
        const { x: x2, y: y2 } = nodeState;
        const distance = Math.sqrt(x2 * x2 + y2 * y2) || 1;
        nodeStates[n].dx -= x2 * gravity * distance;
        nodeStates[n].dy -= y2 * gravity * distance;
      }
    const converged = false;
    for (let i = 0;i < adjustedOrder; i++) {
      const n = nodes[i];
      const nodeState = nodeStates[n];
      const distance = Math.sqrt(nodeState.dx * nodeState.dx + nodeState.dy * nodeState.dy);
      if (distance > maxMove) {
        nodeState.dx *= maxMove / distance;
        nodeState.dy *= maxMove / distance;
      }
      if (!isNodeFixed.fromGraph(graph, n)) {
        nodeState.x += nodeState.dx;
        nodeState.y += nodeState.dy;
        nodeState.fixed = false;
      } else {
        nodeState.fixed = true;
      }
    }
    return { converged };
  };
});

// node_modules/graphology-layout-force/helpers.js
var require_helpers = __commonJS((exports) => {
  exports.assignLayoutChanges = function(graph, nodeStates, params) {
    const { nodeXAttribute: x2, nodeYAttribute: y2 } = params;
    graph.updateEachNodeAttributes((n, attr) => {
      const state = nodeStates[n];
      if (!state || state.fixed)
        return attr;
      attr[x2] = state.x;
      attr[y2] = state.y;
      return attr;
    }, { attributes: ["x", "y"] });
  };
  exports.collectLayoutChanges = function(nodeStates) {
    const mapping = {};
    for (const n in nodeStates) {
      const state = nodeStates[n];
      mapping[n] = { x: state.x, y: state.y };
    }
    return mapping;
  };
});

// node_modules/graphology-layout-force/defaults.js
var require_defaults2 = __commonJS((exports, module) => {
  module.exports = {
    nodeXAttribute: "x",
    nodeYAttribute: "y",
    isNodeFixed: "fixed",
    shouldSkipNode: null,
    shouldSkipEdge: null,
    settings: {
      attraction: 0.0005,
      repulsion: 0.1,
      gravity: 0.0001,
      inertia: 0.6,
      maxMove: 200
    }
  };
});

// node_modules/graphology-layout-force/index.js
var require_graphology_layout_force = __commonJS((exports, module) => {
  var abstractSynchronousLayout = function(assign, graph, params) {
    if (!isGraph(graph))
      throw new Error("graphology-layout-force: the given graph is not a valid graphology instance.");
    if (typeof params === "number")
      params = { maxIterations: params };
    else
      params = params || {};
    const maxIterations = params.maxIterations;
    params = resolveDefaults(params, DEFAULTS);
    if (typeof maxIterations !== "number" || maxIterations <= 0)
      throw new Error("graphology-layout-force: you should provide a positive number of maximum iterations.");
    const nodeStates = {};
    let result = null;
    let i;
    for (i = 0;i < maxIterations; i++) {
      result = iterate(graph, nodeStates, params);
      if (result.converged)
        break;
    }
    if (assign) {
      helpers.assignLayoutChanges(graph, nodeStates, params);
      return;
    }
    return helpers.collectLayoutChanges(nodeStates);
  };
  var isGraph = require_is_graph();
  var resolveDefaults = require_defaults();
  var iterate = require_iterate();
  var helpers = require_helpers();
  var DEFAULTS = require_defaults2();
  var synchronousLayout = abstractSynchronousLayout.bind(null, false);
  synchronousLayout.assign = abstractSynchronousLayout.bind(null, true);
  module.exports = synchronousLayout;
});

// index.ts
var import_sigma = __toESM(require_sigma2(), 1);
var import_graphology = __toESM(require_graphology_umd_min(), 1);

// node_modules/graphology-layout/index.js
var $circlepack = require_circlepack();
var $circular = require_circular();
var $random = require_random2();
var $rotation = require_rotation();

// index.ts
var import_graphology_layout_force = __toESM(require_graphology_layout_force(), 1);
var graph = new import_graphology.DirectedGraph;
for (i = 0;i < 9; i++) {
  graph.addNode("State " + i, { size: 15 });
}
var i;
for (i = 0;i < 9; i++) {
  for (j2 = 0;j2 < i; j2++) {
    graph.addEdge("State " + i, "State " + j2, { type: "arrow", size: 7 });
  }
}
var j2;
var i;
$circlepack.assign(graph, { rng: () => Math.random() * 1 });
import_graphology_layout_force.default.assign(graph, { maxIterations: 500, repulsion: 30 });
var container = document.getElementById("sigma-container");
var zoomInBtn = document.getElementById("zoom-in");
var zoomOutBtn = document.getElementById("zoom-out");
var zoomResetBtn = document.getElementById("zoom-reset");
var labelsThresholdRange = document.getElementById("labels-threshold");
var renderer = new import_sigma.Sigma(graph, container, {
  minCameraRatio: 0.1,
  maxCameraRatio: 10
});
var camera = renderer.getCamera();
zoomInBtn.addEventListener("click", () => {
  camera.animatedZoom({ duration: 600 });
});
zoomOutBtn.addEventListener("click", () => {
  camera.animatedUnzoom({ duration: 600 });
});
zoomResetBtn.addEventListener("click", () => {
  camera.animatedReset({ duration: 600 });
});
labelsThresholdRange.addEventListener("input", () => {
  renderer.setSetting("labelRenderedSizeThreshold", +labelsThresholdRange.value);
});
labelsThresholdRange.value = renderer.getSetting("labelRenderedSizeThreshold") + "";
