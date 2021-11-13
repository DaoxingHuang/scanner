module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by Sugar on 2020/5/25.
 */

/**
 * 小程序版本库版本号比较
 * @param v1
 * @param v2
 * @returns {number}
 */
var compareVersion = function compareVersion(v1, v2) {
  v1 = v1.split('.');
  v2 = v2.split('.');
  var len = Math.max(v1.length, v2.length);
  while (v1.length < len) {
    v1.push('0');
  }
  while (v2.length < len) {
    v2.push('0');
  }
  for (var i = 0; i < len; i++) {
    var num1 = parseInt(v1[i], 10);
    var num2 = parseInt(v2[i], 10);

    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }

  return 0;
};

var slice = Array.prototype.slice;

function invoke(array, method) {
  var args = slice.call(arguments, 2),
      result = [];
  for (var i = 0, len = array.length; i < len; i++) {
    result[i] = args.length ? array[i][method].apply(array[i], args) : array[i][method].call(array[i]);
  }
  return result;
}

function max(array, byProperty) {
  return find(array, byProperty, function (value1, value2) {
    return value1 >= value2;
  });
}

function min(array, byProperty) {
  return find(array, byProperty, function (value1, value2) {
    return value1 < value2;
  });
}

function fill(array, value) {
  var k = array.length;
  while (k--) {
    array[k] = value;
  }
  return array;
}

function find(array, byProperty, condition) {
  if (!array || array.length === 0) {
    return;
  }

  var i = array.length - 1,
      result = byProperty ? array[i][byProperty] : array[i];
  if (byProperty) {
    while (i--) {
      if (condition(array[i][byProperty], result)) {
        result = array[i][byProperty];
      }
    }
  } else {
    while (i--) {
      if (condition(array[i], result)) {
        result = array[i];
      }
    }
  }
  return result;
}

function toFixed(number, fractionDigits) {
  return parseFloat(Number(number).toFixed(fractionDigits));
}

function mergeMethods(a, b) {
  for (var prop in b) {
    if (b.hasOwnProperty(prop)) {
      a.prototype[prop] = b[prop];
    }
  }
  return a;
}

module.exports = {
  compareVersion: compareVersion,
  fill: fill,
  invoke: invoke,
  min: min,
  max: max,
  toFixed: toFixed,
  mergeMethods: mergeMethods
};

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(1),
    compareVersion = _require.compareVersion;

var canvasId = 'canvas-sugarjs';

Component({
  properties: {
    width: {
      type: Number,
      value: 400
    },
    height: {
      type: Number,
      value: 300
    }
  },
  data: {
    use2dCanvas: false // 2.9.0 后可用canvas 2d 接口
  },
  lifetimes: {
    attached: function attached() {
      // const {SDKVersion, pixelRatio: dpr} = wx.getSystemInfoSync()
      // const use2dCanvas = compareVersion(SDKVersion, '2.9.0') >= 0
      // this.dpr = dpr
      // this.setData({use2dCanvas}, () => {
      //   if (use2dCanvas) {
      //     const query = this.createSelectorQuery()
      //     query.select(`#${canvasId}`)
      //       .fields({node: true, size: true})
      //       .exec(res => {
      //         const canvas = res[0].node
      //         const ctx = canvas.getContext('2d')
      //         canvas.width = res[0].width * dpr
      //         canvas.height = res[0].height * dpr
      //         // 在调用后，之后创建的路径其横纵坐标会被缩放。多次调用倍数会相乘。
      //         ctx.scale(dpr, dpr)
      //         this.ctx = ctx
      //         this.canvas = canvas
      //       })
      //   } else {
      //     this.ctx = wx.createCanvasContext(canvasId, this)
      //   }
      // })
    }
  },
  methods: {}
});

/***/ })

/******/ });
//# sourceMappingURL=index.js.map