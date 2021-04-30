// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4UKJc":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "043affa210fd5d10be6d99797cacc1f4";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"3rfh7":[function(require,module,exports) {
var _Layer = require("./Layer");
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _LayerDefault = _parcelHelpers.interopDefault(_Layer);
var _Vector = require("./Vector");
var _VectorDefault = _parcelHelpers.interopDefault(_Vector);
var _Tile = require("./Tile");
var _TileDefault = _parcelHelpers.interopDefault(_Tile);
var _Color = require("./Color");
var _ColorDefault = _parcelHelpers.interopDefault(_Color);
var _Renderer = require("./Renderer");
var _RendererDefault = _parcelHelpers.interopDefault(_Renderer);
const WIDTH = 80;
const HEIGHT = 24;
const layers = {
  background: new _LayerDefault.default({
    size: new _VectorDefault.default(WIDTH, HEIGHT)
  }),
  actor: new _LayerDefault.default({
    size: new _VectorDefault.default(WIDTH, HEIGHT)
  })
};
const player = new _TileDefault.default({
  background: new _ColorDefault.default(0, 0, 0, 0),
  char: '@',
  color: new _ColorDefault.default(255, 0, 0),
  isVisible: true,
  pos: _VectorDefault.default.zero()
});
const backgroundTiles = Array.from({
  length: WIDTH * HEIGHT
}, (_, i) => {
  const x = i % WIDTH;
  const y = Math.floor(i / WIDTH);
  return new _TileDefault.default({
    char: '.',
    pos: new _VectorDefault.default(x, y)
  });
});
const renderer = new _RendererDefault.default();
renderer.addLayer('background', layers.background);
renderer.addLayer('actor', layers.actor);
renderer.onBeforeDraw(() => {
  layers.background.operations.forEach(op => {
    const newAlpha = (Math.sin(op.pos.x + op.pos.y + renderer.frames) + 1) / 2;
    op.color.a = newAlpha;
  });
});
const draw = () => {
  backgroundTiles.forEach(tile => layers.background.draw(tile));
  layers.actor.draw(player);
  renderer.commit();
  requestAnimationFrame(draw);
};
draw();
document.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowUp':
      {
        player.pos.add(new _VectorDefault.default(0, -1));
        break;
      }
    case 'ArrowDown':
      {
        player.pos.add(new _VectorDefault.default(0, 1));
        break;
      }
    case 'ArrowLeft':
      {
        player.pos.add(new _VectorDefault.default(-1, 0));
        break;
      }
    case 'ArrowRight':
      {
        player.pos.add(new _VectorDefault.default(1, 0));
        break;
      }
  }
  draw();
});

},{"./Layer":"6SxNg","./Vector":"1tlQo","./Tile":"4WLTo","./Color":"3OW9O","./Renderer":"58tfm","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"6SxNg":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _Vector = require("./Vector");
var _VectorDefault = _parcelHelpers.interopDefault(_Vector);
const drawingOperation = tile => ({
  tile,
  char: tile.char,
  color: tile.color.clone(),
  background: tile.background,
  pos: tile.pos.clone(),
  isVisible: tile.isVisible
});
class Layer {
  operations = [];
  constructor(options) {
    this.opacity = options.opacity || 1;
    this.isVisible = options.isVisible || true;
    this.pos = options.pos || _VectorDefault.default.zero();
    this.size = options.size;
    this._z = options.z || 0;
  }
  get z() {
    return this._z;
  }
  draw(tile) {
    this.operations.push(drawingOperation(tile));
  }
  clear() {
    this.operations = [];
  }
}
exports.default = Layer;

},{"./Vector":"1tlQo","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"1tlQo":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  add(v) {
    this.x += v.x;
    this.y += v.y;
  }
  clone() {
    return new Vector(this.x, this.y);
  }
  static zero() {
    return new Vector(0, 0);
  }
  static add(v1, v2) {
    return v1.clone().add(v2);
  }
}
exports.default = Vector;

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"4WLTo":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _Color = require("./Color");
var _ColorDefault = _parcelHelpers.interopDefault(_Color);
var _Vector = require("./Vector");
var _VectorDefault = _parcelHelpers.interopDefault(_Vector);
class Tile {
  id = Math.random().toString(36).slice(2);
  constructor(options) {
    this.char = options.char || ' ';
    this.color = options.color || new _ColorDefault.default();
    this.background = options.background || new _ColorDefault.default(0, 0, 0, 1);
    this.pos = options.pos || new _VectorDefault.default(0, 0);
    this.isVisible = options.isVisible || true;
  }
}
exports.default = Tile;

},{"./Color":"3OW9O","./Vector":"1tlQo","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"3OW9O":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
class Color {
  constructor(r = 255, g = 255, b = 255, a = 1) {
    this._r = r;
    this._g = g;
    this._b = b;
    this._a = a;
    this.makeCssString();
  }
  get r() {
    return this._r;
  }
  get g() {
    return this._g;
  }
  get b() {
    return this._b;
  }
  get a() {
    return this._a;
  }
  set r(value) {
    this._r = value;
    this.makeCssString();
  }
  set g(value) {
    this._g = value;
    this.makeCssString();
  }
  set b(value) {
    this._b = value;
    this.makeCssString();
  }
  set a(value) {
    this._a = value;
    this.makeCssString();
  }
  makeCssString() {
    this.cssString = `rgba(${this._r}, ${this._g}, ${this._b}, ${this._a})`;
  }
  toCssString() {
    return this.cssString;
  }
  clone() {
    return new Color(this._r, this._g, this._b, this._a);
  }
}
exports.default = Color;

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"58tfm":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
class Renderer {
  namedLayers = {};
  layers = [];
  layerElements = {};
  size = 30;
  frames = 0;
  beforeDraw = () => {};
  addLayer(name, layer) {
    if ((name in this.namedLayers)) {
      return new Error(`${name} layer already attached to renderer`);
    }
    this.namedLayers[name] = layer;
    this.layers.push(layer);
    return this;
  }
  onBeforeDraw(cb) {
    this.beforeDraw = cb;
  }
  commit() {
    this.beforeDraw();
    for (let [name, layer] of Object.entries(this.namedLayers)) {
      let layerEl = this.layerElements[name];
      if (!layerEl) {
        layerEl = document.createElement('div');
        layerEl.classList.add('asc-engine-layer');
        layerEl.style.top = `${layer.pos.y * this.size}px`;
        layerEl.style.left = `${layer.pos.x * this.size / 2}px`;
        layerEl.style.height = `${layer.size.y * this.size}px`;
        layerEl.style.width = `${layer.size.x * this.size / 2}px`;
        layerEl.style.zIndex = layer.z.toString();
        layerEl.style.fontSize = `${this.size}px`;
        document.getElementById('asc-engine-layer-container').appendChild(layerEl);
        this.layerElements[name] = layerEl;
      }
      for (let op of layer.operations) {
        let opEl = document.getElementById(`asc-engine-tile-${op.tile.id}`);
        if (!opEl) {
          opEl = document.createElement('div');
          opEl.id = `asc-engine-tile-${op.tile.id}`;
          opEl.classList.add('asc-engine-tile');
          layerEl.appendChild(opEl);
        }
        if (op.isVisible) {
          opEl.innerHTML = op.char.replace(/ /g, '&nbsp;');
          opEl.style.color = op.color.toCssString();
          opEl.style.background = op.background.toCssString();
          opEl.style.top = `${op.pos.y * this.size}px`;
          opEl.style.left = `${op.pos.x * this.size / 2}px`;
          opEl.style.display = 'block';
        } else {
          opEl.style.display = 'none';
        }
      }
      layer.clear();
    }
    this.frames++;
  }
  orderLayers() {
    this.layers = this.layers.sort((la, lb) => la.z - lb.z);
  }
}
exports.default = Renderer;

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}]},["4UKJc","3rfh7"], "3rfh7", "parcelRequire9069")

//# sourceMappingURL=index.7cacc1f4.js.map
