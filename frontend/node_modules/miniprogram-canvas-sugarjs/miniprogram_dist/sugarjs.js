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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Sugar on 2020/5/26.
 */

var _require = __webpack_require__(2),
    multiplyTransformMatrices = _require.multiplyTransformMatrices,
    qrDecompose = _require.qrDecompose,
    degreesToRadians = _require.degreesToRadians;

var ObjectClass = function () {
  function ObjectClass(options) {
    _classCallCheck(this, ObjectClass);

    this.type = 'object';
    this.originX = 'left';
    this.originY = 'top';
    this.top = 0;
    this.left = 0;
    this.width = 0;
    this.height = 0;
    this.originY = 'top';
    this.scaleX = 1;
    this.scaleY = 1;
    this.flipX = false;
    this.flipY = false;
    this.opacity = 1;
    this.angle = 0;
    this.skewX = 0;
    this.skewY = 0;
    this.stroke = null;
    this.strokeWidth = 1;
    this.strokeDashArray = null;
    this.strokeDashOffset = 0;
    this.padding = 0;
    this.cornerSize = 13;
    this.touchCornerSize = 24;
    this.transparentCorners = true;
    this.fill = 'rgb(0,0,0)';
    this.strokeWidth = 1;
    this.backgroundColor = '';
    this.borderColor = 'orange';
    this.borderDashArray = null;
    this.cornerColor = 'blue';
    this.cornerStrokeColor = null;
    this.cornerStyle = 'rect';
    this.cornerDashArray = null;
    this.centeredScaling = false;
    this.centeredRotation = true; // 如果为true，则将以物体中心为原点
    this.selectable = true;
    this.evented = true;
    this.visible = true;
    this.hasControls = true;
    this.hasBorders = true;
    this.lockMovementX = false;
    this.lockMovementY = false;
    this.lockRotation = false;
    this.lockScalingX = false;
    this.lockScalingY = false;
    this.lockSkewingX = false;
    this.lockSkewingY = false;
    this.selectionBackgroundColor = '';
    this.paintFirst = 'stroke';
    this.borderScaleFactor = 1;
    this.borderOpacityWhenMoving = 0.4;
    this.minScaleLimit = 0;
    this.__corner = 0;
  }

  ObjectClass.prototype.initialize = function initialize(options) {
    if (options) {
      this.setOptions(options);
    }
  };

  ObjectClass.prototype.setOptions = function setOptions(options) {
    this._setOptions(options);
    this._initGradient(options.fill, 'fill');
    this._initGradient(options.stroke, 'stroke');
    this._initPattern(options.fill, 'fill');
    this._initPattern(options.stroke, 'stroke');
  };

  /*
   * @private
   * 判断是否可渲染
   * @memberOf sugar.Object.prototype
   * @return {Boolean}
   */


  ObjectClass.prototype.isNotVisible = function isNotVisible() {
    return this.opacity === 0 || !this.width && !this.height || !this.visible;
  };

  /**
   * 在指定的上下文中渲染对象
   * @param {CanvasContext} ctx 微信<canvas>组件的绘图上下文
   */


  ObjectClass.prototype.render = function render(ctx) {
    if (this.isNotVisible()) {
      return;
    }
    ctx.save();
    // this._setupCompositeOperation(ctx)
    this.drawSelectionBackground(ctx);
    this.transform(ctx);
    // this._setOpacity(ctx)
    // this._setShadow(ctx, this)
    // if (this.shouldCache()) {
    //   this.renderCache()
    //   this.drawCacheOnCanvas(ctx);
    // } else {
    // this._removeCacheCanvas();
    this.drawObject(ctx);
    // if (this.objectCaching && this.statefullCache) {
    //   this.saveState({propertySet: 'cacheProperties'});
    // }
    // }
    ctx.restore();
  };

  ObjectClass.prototype.transform = function transform(ctx) {
    var m = this.calcOwnMatrix();
    // if (this.group && !this.group._transformDone) {
    //   m = this.calcTransformMatrix();
    // }
    // console.log(m)
    ctx.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
  };

  ObjectClass.prototype.drawObject = function drawObject(ctx, forClipping) {
    var originalFill = this.fill;
    var originalStroke = this.stroke;
    if (forClipping) {
      this.fill = 'black';
      this.stroke = '';
      // this._setClippingProperties(ctx) // TODO
    } else {
      this._renderBackground(ctx);
      this._setStrokeStyles(ctx, this);
      this._setFillStyles(ctx, this);
    }
    // 调用子类的_render方法，绘制到canvas
    this._render(ctx);
    // this._drawClipPath(ctx)
    this.fill = originalFill;
    this.stroke = originalStroke;
  };

  ObjectClass.prototype._removeShadow = function _removeShadow(ctx) {
    if (!this.shadow) {
      return;
    }

    ctx.shadowColor = '';
    ctx.shadowBlur = ctx.shadowOffsetX = ctx.shadowOffsetY = 0;
  };

  ObjectClass.prototype._applyPatternGradientTransform = function _applyPatternGradientTransform(ctx, filler) {
    if (!filler || !filler.toLive) {
      return { offsetX: 0, offsetY: 0 };
    }
    var t = filler.gradientTransform || filler.patternTransform;
    var offsetX = -this.width / 2 + filler.offsetX || 0,
        offsetY = -this.height / 2 + filler.offsetY || 0;

    if (filler.gradientUnits === 'percentage') {
      ctx.transform(this.width, 0, 0, this.height, offsetX, offsetY);
    } else {
      ctx.transform(1, 0, 0, 1, offsetX, offsetY);
    }
    if (t) {
      ctx.transform(t[0], t[1], t[2], t[3], t[4], t[5]);
    }
    return { offsetX: offsetX, offsetY: offsetY };
  };

  ObjectClass.prototype._renderPaintInOrder = function _renderPaintInOrder(ctx) {
    if (this.paintFirst === 'stroke') {
      this._renderStroke(ctx);
      this._renderFill(ctx);
    } else {
      this._renderFill(ctx);
      this._renderStroke(ctx);
    }
  };

  ObjectClass.prototype._render = function _render() {};

  ObjectClass.prototype._renderFill = function _renderFill(ctx) {
    if (!this.fill) {
      return;
    }

    ctx.save();
    // this._applyPatternGradientTransform(ctx, this.fill);
    if (this.fillRule === 'evenodd') {
      ctx.fill('evenodd');
    } else {
      ctx.fill();
    }
    ctx.restore();
  };

  ObjectClass.prototype._renderStroke = function _renderStroke(ctx) {};

  ObjectClass.prototype.getViewportTransform = function getViewportTransform() {
    if (this.canvas && this.canvas.viewportTransform) {
      return this.canvas.viewportTransform;
    }
    return [1, 0, 0, 1, 0, 0].concat();
  };

  /**
   * 为对象绘制背景，尺寸不变
   * @private
   * @param {CanvasRenderingContext2D} ctx
   */


  ObjectClass.prototype._renderBackground = function _renderBackground(ctx) {
    if (!this.backgroundColor) {
      return;
    }
    var dim = this._getNonTransformedDimensions();
    ctx.fillStyle = this.backgroundColor;

    ctx.fillRect(-dim.x / 2, -dim.y / 2, dim.x, dim.y);
    // if there is background color no other shadows
    // should be casted
    // this._removeShadow(ctx);
  };

  ObjectClass.prototype.getObjectOpacity = function getObjectOpacity() {
    var opacity = this.opacity;
    // if (this.group) {
    // opacity *= this.group.getObjectOpacity();
    // }
    return opacity;
  };

  ObjectClass.prototype._set = function _set(key, value) {
    console.log('set scaleX');
    var shouldConstrainValue = key === 'scaleX' || key === 'scaleY';

    if (shouldConstrainValue) {
      value = this._constrainScale(value);
    }
    if (key === 'scaleX' && value < 0) {
      this.flipX = !this.flipX;
      value *= -1;
    } else if (key === 'scaleY' && value < 0) {
      this.flipY = !this.flipY;
      value *= -1;
    }

    this[key] = value;

    return this;
  };

  ObjectClass.prototype._setOpacity = function _setOpacity(ctx) {
    if (this.group && !this.group._transformDone) {
      ctx.globalAlpha = this.getObjectOpacity();
    } else {
      ctx.globalAlpha *= this.opacity;
    }
  };

  ObjectClass.prototype._setStrokeStyles = function _setStrokeStyles(ctx, decl) {
    if (decl.stroke) {
      ctx.lineWidth = decl.strokeWidth;
      ctx.lineCap = decl.strokeLineCap;
      ctx.lineDashOffset = decl.strokeDashOffset;
      ctx.lineJoin = decl.strokeLineJoin;
      ctx.miterLimit = decl.strokeMiterLimit;
      ctx.strokeStyle = decl.stroke.toLive ? decl.stroke.toLive(ctx, this) : decl.stroke;
    }
  };

  ObjectClass.prototype._setFillStyles = function _setFillStyles(ctx, decl) {
    if (decl.fill) {
      ctx.fillStyle = decl.fill.toLive ? decl.fill.toLive(ctx, this) : decl.fill;
    }
  };

  ObjectClass.prototype._setClippingProperties = function _setClippingProperties(ctx) {
    ctx.globalAlpha = 1;
    ctx.strokeStyle = 'transparent';
    ctx.fillStyle = '#000000';
  };

  ObjectClass.prototype._setLineDash = function _setLineDash(ctx, dashArray, alternative) {
    if (!dashArray || dashArray.length === 0) {
      return;
    }
    if (1 & dashArray.length) {
      dashArray.push.apply(dashArray, dashArray);
    }
    if (supportsLineDash) {
      ctx.setLineDash(dashArray);
    } else {
      alternative && alternative(ctx);
    }
  };

  /**
   * 渲染对象的控件和边框
   * @param {CanvasRenderingContext2D} ctx
   * @param {Object} [styleOverride] 覆盖对象样式的属性
   */


  ObjectClass.prototype._renderControls = function _renderControls(ctx, styleOverride) {
    var vpt = this.getViewportTransform(),
        matrix = this.calcTransformMatrix(),
        options = void 0,
        drawBorders = void 0,
        drawControls = void 0;
    styleOverride = styleOverride || {};
    drawBorders = typeof styleOverride.hasBorders !== 'undefined' ? styleOverride.hasBorders : this.hasBorders;
    drawControls = typeof styleOverride.hasControls !== 'undefined' ? styleOverride.hasControls : this.hasControls;
    matrix = multiplyTransformMatrices(vpt, matrix);
    options = qrDecompose(matrix);
    ctx.save();
    ctx.translate(options.translateX, options.translateY);
    ctx.lineWidth = 1 * this.borderScaleFactor;
    if (!this.group) {
      ctx.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1;
    }
    if (styleOverride.forActiveSelection) {
      ctx.rotate(degreesToRadians(options.angle));
      drawBorders && this.drawBordersInGroup(ctx, options, styleOverride);
    } else {
      ctx.rotate(degreesToRadians(this.angle));
      drawBorders && this.drawBorders(ctx, styleOverride);
    }
    drawControls && this.drawControls(ctx, styleOverride);
    ctx.restore();
  };

  ObjectClass.prototype.rotate = function rotate(angle) {
    var shouldCenterOrigin = (this.originX !== 'center' || this.originY !== 'center') && this.centeredRotation;

    if (shouldCenterOrigin) {
      this._setOriginToCenter();
    }

    this.set('angle', angle);

    if (shouldCenterOrigin) {
      this._resetOrigin();
    }

    return this;
  };

  return ObjectClass;
}();

ObjectClass.__uid = 0;

module.exports = ObjectClass;

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by Sugar on 2020/5/26.
 */
var PointClass = __webpack_require__(3);

var _require = __webpack_require__(1),
    min = _require.min,
    max = _require.max;

var sqrt = Math.sqrt,
    atan2 = Math.atan2,
    pow = Math.pow,
    PiBy180 = Math.PI / 180,
    PiBy2 = Math.PI / 2;

/**
 * 逆向变换t
 * @param {Array} t 要变换的数据
 * @return {Array} 变换后的数据
 */
var invertTransform = function invertTransform(t) {
  var a = 1 / (t[0] * t[3] - t[1] * t[2]),
      r = [a * t[3], -a * t[1], -a * t[2], a * t[0]],
      o = transformPoint({ x: t[4], y: t[5] }, r, true);
  r[4] = -o.x;
  r[5] = -o.y;
  return r;
};

/**
 * 将变换t应用于点p
 * @static
 * @param  {sugar.Point} p 转变点
 * @param  {Array} t 矩阵
 * @param  {Boolean} [ignoreOffset] 指定是否不偏移
 * @return {sugar.Point} 转换后的点
 */
var transformPoint = function transformPoint(p, t, ignoreOffset) {
  if (ignoreOffset) {
    return new PointClass(t[0] * p.x + t[2] * p.y, t[1] * p.x + t[3] * p.y);
  }
  return new PointClass(t[0] * p.x + t[2] * p.y + t[4], t[1] * p.x + t[3] * p.y + t[5]);
};

/**
 * 用另一个对象的属性填充一个对象
 * @static
 * @param {Object} source 源对象
 * @param {Object} destination 目标对象
 * @return {Array} properties 要包括的属性名称
 */
var populateWithProperties = function populateWithProperties(source, destination, properties) {
  if (properties && Object.prototype.toString.call(properties) === '[object Array]') {
    for (var i = 0, len = properties.length; i < len; i++) {
      if (properties[i] in source) {
        destination[properties[i]] = source[properties[i]];
      }
    }
  }
};

/**
 * 获取图片。网络图片需先配置download域名才能生效。
 * @param {String} url
 * @param {Function} callback
 * @param {*} [context] 调用回调的上下文
 */
var loadImage = function loadImage(url, callback, context) {
  if (!url) {
    callback && callback.call(context, url);
    return;
  }

  var query = wx.createSelectorQuery();
  query.select('#sugarjs').fields({ node: true, size: true }).exec(function (res) {
    var canvas = res[0].node;
    wx.getImageInfo({
      src: url,
      success: function success(res) {
        /**
         * res数据结构
         width  number  图片原始宽度，单位px。不考虑旋转。
         height  number  图片原始高度，单位px。不考虑旋转。
         path  string  图片的本地路径
         orientation  string  拍照时设备方向
         type  string  图片格式
         */
        var img = canvas.createImage();
        img.src = res.path;
        img.onload = function (res) {
          callback && callback.call(context, img, false);
          img = img.onload = img.onerror = null;
        };

        img.onerror = function () {
          callback && callback.call(context, null, true);
          img = img.onload = img.onerror = null;
        };

        // callback && callback.call(context, res, false)
      },
      fail: function fail(err) {
        callback && callback.call(context, null, true);
      }
    });
  });
};

var degreesToRadians = function degreesToRadians(degrees) {
  return degrees * PiBy180;
};

var cos = function cos(angle) {
  if (angle === 0) {
    return 1;
  }
  if (angle < 0) {
    // cos(a) = cos(-a)
    angle = -angle;
  }
  var angleSlice = angle / PiBy2;
  switch (angleSlice) {
    case 1:
    case 3:
      return 0;
    case 2:
      return -1;
  }
  return Math.cos(angle);
};

var sin = function sin(angle) {
  if (angle === 0) {
    return 0;
  }
  var angleSlice = angle / PiBy2,
      sign = 1;
  if (angle < 0) {
    // sin(-a) = -sin(a)
    sign = -1;
  }
  switch (angleSlice) {
    case 1:
      return sign;
    case 2:
      return 0;
    case 3:
      return -sign;
  }
  return Math.sin(angle);
};

var sizeAfterTransform = function sizeAfterTransform(width, height, options) {
  var dimX = width / 2,
      dimY = height / 2,
      points = [{
    x: -dimX,
    y: -dimY
  }, {
    x: dimX,
    y: -dimY
  }, {
    x: -dimX,
    y: dimY
  }, {
    x: dimX,
    y: dimY
  }],
      transformMatrix = calcDimensionsMatrix(options),
      bbox = makeBoundingBoxFromPoints(points, transformMatrix);
  return {
    x: bbox.width,
    y: bbox.height
  };
};

var calcDimensionsMatrix = function calcDimensionsMatrix(options) {
  var scaleX = typeof options.scaleX === 'undefined' ? 1 : options.scaleX,
      scaleY = typeof options.scaleY === 'undefined' ? 1 : options.scaleY,
      scaleMatrix = [options.flipX ? -scaleX : scaleX, 0, 0, options.flipY ? -scaleY : scaleY, 0, 0],
      multiply = multiplyTransformMatrices;
  if (options.skewX) {
    scaleMatrix = multiply(scaleMatrix, [1, 0, Math.tan(degreesToRadians(options.skewX)), 1], true);
  }
  if (options.skewY) {
    scaleMatrix = multiply(scaleMatrix, [1, Math.tan(degreesToRadians(options.skewY)), 0, 1], true);
  }
  return scaleMatrix;
};

var multiplyTransformMatrices = function multiplyTransformMatrices(a, b, is2x2) {
  return [a[0] * b[0] + a[2] * b[1], a[1] * b[0] + a[3] * b[1], a[0] * b[2] + a[2] * b[3], a[1] * b[2] + a[3] * b[3], is2x2 ? 0 : a[0] * b[4] + a[2] * b[5] + a[4], is2x2 ? 0 : a[1] * b[4] + a[3] * b[5] + a[5]];
};

var makeBoundingBoxFromPoints = function makeBoundingBoxFromPoints(points, transform) {
  if (transform) {
    for (var i = 0; i < points.length; i++) {
      points[i] = transformPoint(points[i], transform);
    }
  }
  var xPoints = [points[0].x, points[1].x, points[2].x, points[3].x],
      minX = min(xPoints),
      maxX = max(xPoints),
      width = maxX - minX,
      yPoints = [points[0].y, points[1].y, points[2].y, points[3].y],
      minY = min(yPoints),
      maxY = max(yPoints),
      height = maxY - minY;

  return {
    left: minX,
    top: minY,
    width: width,
    height: height
  };
};

var qrDecompose = function qrDecompose(a) {
  var angle = atan2(a[1], a[0]),
      denom = pow(a[0], 2) + pow(a[1], 2),
      scaleX = sqrt(denom),
      scaleY = (a[0] * a[3] - a[2] * a[1]) / scaleX,
      skewX = atan2(a[0] * a[2] + a[1] * a[3], denom);
  return {
    angle: angle / PiBy180,
    scaleX: scaleX,
    scaleY: scaleY,
    skewX: skewX / PiBy180,
    skewY: 0,
    translateX: a[4],
    translateY: a[5]
  };
};

var rotateVector = function rotateVector(vector, radians) {
  var s = sin(radians),
      c = cos(radians),
      rx = vector.x * c - vector.y * s,
      ry = vector.x * s + vector.y * c;
  return {
    x: rx,
    y: ry
  };
};

var rotatePoint = function rotatePoint(point, origin, radians) {
  point.subtractEquals(origin);
  var v = rotateVector(point, radians);
  return new PointClass(v.x, v.y).addEquals(origin);
};

var calcRotateMatrix = function calcRotateMatrix(options) {
  if (!options.angle) {
    return [1, 0, 0, 1, 0, 0].concat();
  }
  var theta = degreesToRadians(options.angle),
      c = cos(theta),
      s = sin(theta);
  return [c, s, -s, c, 0, 0];
};

var composeMatrix = function composeMatrix(options) {
  var matrix = [1, 0, 0, 1, options.translateX || 0, options.translateY || 0],
      multiply = multiplyTransformMatrices;
  if (options.angle) {
    matrix = multiply(matrix, calcRotateMatrix(options));
  }
  if (options.scaleX !== 1 || options.scaleY !== 1 || options.skewX || options.skewY || options.flipX || options.flipY) {
    matrix = multiply(matrix, calcDimensionsMatrix(options));
  }
  return matrix;
};

module.exports = {
  invertTransform: invertTransform,
  transformPoint: transformPoint,
  populateWithProperties: populateWithProperties,
  makeBoundingBoxFromPoints: makeBoundingBoxFromPoints,
  loadImage: loadImage,
  degreesToRadians: degreesToRadians,
  cos: cos,
  sin: sin,
  sizeAfterTransform: sizeAfterTransform,
  calcDimensionsMatrix: calcDimensionsMatrix,
  multiplyTransformMatrices: multiplyTransformMatrices,
  qrDecompose: qrDecompose,
  rotateVector: rotateVector,
  rotatePoint: rotatePoint,
  calcRotateMatrix: calcRotateMatrix,
  composeMatrix: composeMatrix
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Sugar on 2020/5/26.
 */

var PointClass = function () {
  function PointClass(x, y) {
    _classCallCheck(this, PointClass);

    this.type = 'point';
    this.x = x;
    this.y = y;
  }

  /**
   * 向当前点添加另一点的值并返回新点
   * @param {sugar.Point} that
   * @return {sugar.Point} new PointClass
   */


  PointClass.prototype.add = function add(that) {
    return new PointClass(this.x + that.x, this.y + that.y);
  };

  /**
   * 在当前的点添加另一点
   * @param {sugar.Point} that
   * @return {sugar.Point} thisArg
   * @chainable
   */


  PointClass.prototype.addEquals = function addEquals(that) {
    this.x += that.x;
    this.y += that.y;
    return this;
  };

  /**
   * 在当前点加值并返回一个新的点
   * @param {Number} scalar
   * @return {sugar.Point} new PointClass
   */


  PointClass.prototype.scalarAdd = function scalarAdd(scalar) {
    return new PointClass(this.x + scalar, this.y + scalar);
  };

  /**
   * 在当前的点加值
   * @param {Number} scalar
   * @return {sugar.Point} thisArg
   */


  PointClass.prototype.scalarAddEquals = function scalarAddEquals(scalar) {
    this.x += scalar;
    this.y += scalar;
    return this;
  };

  /**
   * 向该点减另一点的值并返回新点
   * @param {sugar.Point} that
   * @return {sugar.Point} new PointClass
   */


  PointClass.prototype.subtract = function subtract(that) {
    return new PointClass(this.x - that.x, this.y - that.y);
  };

  /**
   * 在当前的点减值
   * @param {sugar.Point} that
   * @return {sugar.Point} thisArg
   * @chainable
   */


  PointClass.prototype.subtractEquals = function subtractEquals(that) {
    this.x -= that.x;
    this.y -= that.y;
    return this;
  };

  /**
   * 向当前点减值并返回新的点
   * @param {Number} scalar
   * @return {sugar.Point}
   */


  PointClass.prototype.scalarSubtract = function scalarSubtract(scalar) {
    return new PointClass(this.x - scalar, this.y - scalar);
  };

  /**
   * 当前点减值
   * @param {Number} scalar
   * @return {sugar.Point} thisArg
   */


  PointClass.prototype.scalarSubtractEquals = function scalarSubtractEquals(scalar) {
    this.x -= scalar;
    this.y -= scalar;
    return this;
  };

  PointClass.prototype.multiply = function multiply(scalar) {
    return new PointClass(this.x * scalar, this.y * scalar);
  };

  PointClass.prototype.multiplyEquals = function multiplyEquals(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  };

  PointClass.prototype.divide = function divide(scalar) {
    return new PointClass(this.x / scalar, this.y / scalar);
  };

  PointClass.prototype.divideEquals = function divideEquals(scalar) {
    this.x /= scalar;
    this.y /= scalar;
    return this;
  };

  /**
   * 如果此点等于另一点，则返回true
   * @param {sugar.Point} that
   * @return {Boolean}
   */


  PointClass.prototype.eq = function eq(that) {
    return this.x === that.x && this.y === that.y;
  };

  /**
   * 如果此点小于另一点，则返回true
   * @param {sugar.Point} that
   * @return {Boolean}
   */


  PointClass.prototype.lt = function lt(that) {
    return this.x < that.x && this.y < that.y;
  };

  /**
   * 如果此点小于或等于另一点，则返回true
   * @param {sugar.Point} that
   * @return {Boolean}
   */


  PointClass.prototype.lte = function lte(that) {
    return this.x <= that.x && this.y <= that.y;
  };

  /**
    * 如果此点大于另一点，则返回true
   * @param {sugar.Point} that
   * @return {Boolean}
   */


  PointClass.prototype.gt = function gt(that) {
    return this.x > that.x && this.y > that.y;
  };

  /**
   * 如果此点大于或等于另一点，则返回true
   * @param {sugar.Point} that
   * @return {Boolean}
   */


  PointClass.prototype.gte = function gte(that) {
    return this.x >= that.x && this.y >= that.y;
  };

  PointClass.prototype.lerp = function lerp(that, t) {
    if (typeof t === 'undefined') {
      t = 0.5;
    }
    t = Math.max(Math.min(1, t), 0);
    return new PointClass(this.x + (that.x - this.x) * t, this.y + (that.y - this.y) * t);
  };

  /**
   * 返回此点与另一点的距离
   * @param {sugar.Point} that
   * @return {Number}
   */


  PointClass.prototype.distanceFrom = function distanceFrom(that) {
    var dx = this.x - that.x,
        dy = this.y - that.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  /**
   * 返回此点与另一点之间的点
   * @param {sugar.Point} that
   * @return {sugar.Point}
   */


  PointClass.prototype.midPointFrom = function midPointFrom(that) {
    return this.lerp(that);
  };

  /**
   * 返回一个新点，该点是该点和另一个点的最小值
   * @param {sugar.Point} that
   * @return {sugar.Point}
   */


  PointClass.prototype.min = function min(that) {
    return new PointClass(Math.min(this.x, that.x), Math.min(this.y, that.y));
  };

  /**
   * 返回一个新点，该点是该点和另一个点的最大值
   * @param {sugar.Point} that
   * @return {sugar.Point}
   */


  PointClass.prototype.max = function max(that) {
    return new PointClass(Math.max(this.x, that.x), Math.max(this.y, that.y));
  };

  /**
   * 返回此点的字符串表示形式
   * @return {String}
   */


  PointClass.prototype.toString = function toString() {
    return this.x + ',' + this.y;
  };

  /**
   * 设置此点的x/y
   * @param {Number} x
   * @param {Number} y
   * @chainable
   */


  PointClass.prototype.setXY = function setXY(x, y) {
    this.x = x;
    this.y = y;
    return this;
  };

  /**
   * 设置此点的x
   * @param {Number} x
   * @chainable
   */


  PointClass.prototype.setX = function setX(x) {
    this.x = x;
    return this;
  };

  /**
   * 设置此点的y
   * @param {Number} y
   * @chainable
   */


  PointClass.prototype.setY = function setY(y) {
    this.y = y;
    return this;
  };

  /**
   * 从另一个点设置该点的x/y
   * @param {sugar.Point} that
   * @chainable
   */


  PointClass.prototype.setFromPoint = function setFromPoint(that) {
    this.x = that.x;
    this.y = that.y;
    return this;
  };

  /**
   * 和另一个点交换x和y
   * @param {sugar.Point} that
   */


  PointClass.prototype.swap = function swap(that) {
    var x = this.x,
        y = this.y;
    this.x = that.x;
    this.y = that.y;
    that.x = x;
    that.y = y;
  };

  /**
   * 返回该点的克隆实例
   * @return {sugar.Point}
   */


  PointClass.prototype.clone = function clone() {
    return new PointClass(this.x, this.y);
  };

  return PointClass;
}();

module.exports = PointClass;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by Sugar on 2020/5/26.
 */

function extend(destination, source, deep) {
  if (deep) {
    if (source instanceof Array) {
      destination = [];
      for (var i = 0, len = source.length; i < len; i++) {
        destination[i] = extend({}, source[i], deep);
      }
    } else if (source && (typeof source === 'undefined' ? 'undefined' : _typeof(source)) === 'object') {
      for (var property in source) {
        if (property === 'canvas') {
          destination[property] = extend({}, source[property]);
        } else if (source.hasOwnProperty(property)) {
          destination[property] = extend({}, source[property], deep);
        }
      }
    } else {
      destination = source;
    }
  } else {
    for (var property in source) {
      destination[property] = source[property];
    }
  }
  return destination;
}

function clone(object, deep) {
  return extend({}, object, deep);
}

module.exports = {
  extend: extend,
  clone: clone
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by Sugar on 2020/5/26.
 */
var ObjectClass = __webpack_require__(0);

var _require = __webpack_require__(4),
    clone = _require.clone;

var _require2 = __webpack_require__(2),
    loadImage = _require2.loadImage;

var ImageClass = function (_ObjectClass) {
  _inherits(ImageClass, _ObjectClass);

  function ImageClass(image, options) {
    _classCallCheck(this, ImageClass);

    var _this = _possibleConstructorReturn(this, _ObjectClass.call(this, options));

    _this.type = 'image';
    _this.cacheKey = ''; // 用于检索图像的标识key
    _this._filterScalingX = 1;
    _this._filterScalingY = 1;
    _this.cropX = 0;
    _this.cropY = 0;

    _this.initialize(image, options);
    return _this;
  }

  ImageClass.prototype.initialize = function initialize(element, options) {
    options || (options = {});
    // this.filters = [];
    this.cacheKey = 'texture' + ObjectClass.__uid++;
    this.setElement(element, options);
  };

  ImageClass.prototype.getElement = function getElement() {
    return this._element || {};
  };

  ImageClass.prototype.setElement = function setElement(element, options) {
    // this.removeTexture(this.cacheKey);
    // this.removeTexture(this.cacheKey + '_filtered');
    this._element = element;
    this._originalElement = element;
    this._initConfig(options);
    // if (this.filters.length !== 0) {
    //   this.applyFilters();
    // }

    return this;
  };

  ImageClass.prototype._initConfig = function _initConfig(options) {
    options || (options = {});
    this.setOptions(options);
    this._setWidthHeight(options);
  };

  ImageClass.prototype._setWidthHeight = function _setWidthHeight(options) {
    options || (options = {});
    var el = this.getElement();
    // el.width el.height为图像原始宽高
    var width = options.width || el.width || 0;
    var height = options.height || el.height || 0;
    this.width = width;
    this.height = height;
  };

  ImageClass.prototype._render = function _render(ctx) {
    this._stroke(ctx);
    this._renderPaintInOrder(ctx);
  };

  ImageClass.prototype._renderFill = function _renderFill(ctx) {
    // console.log('绘制图片', this)
    var elementToDraw = this._element;
    if (!elementToDraw) {
      return;
    }
    var dW = this.width,
        dH = this.height,

    // elementToDraw的width和height为图像原始宽高
    sW = Math.min(elementToDraw.width, dW * this._filterScalingX),
        sH = Math.min(elementToDraw.height, dH * this._filterScalingY),
        dx = -dW / 2,
        dy = -dH / 2,
        sX = Math.max(0, this.cropX * this._filterScalingX),
        sY = Math.max(0, this.cropY * this._filterScalingY);
    // console.log(sX, sY, sW, sH, dx, dy, dW, dH);
    elementToDraw && ctx.drawImage(elementToDraw, sX, sY, sW, sH, dx, dy, dW, dH);
    // elementToDraw && ctx.drawImage(elementToDraw, sX, sY, sW, sH, 0, 0, dW, dH)
    // elementToDraw && ctx.drawImage(elementToDraw, this.left, this.top, sW, sH)
  };

  ImageClass.prototype._stroke = function _stroke(ctx) {
    if (!this.stroke || this.strokeWidth === 0) {
      return;
    }
    var w = this.width / 2,
        h = this.height / 2;
    ctx.beginPath();
    ctx.moveTo(-w, -h);
    ctx.lineTo(w, -h);
    ctx.lineTo(w, h);
    ctx.lineTo(-w, h);
    ctx.lineTo(-w, -h);
    ctx.closePath();
  };

  /**
   * 图像是否应用了裁剪
   * @return {Boolean}
   */


  ImageClass.prototype.hasCrop = function hasCrop() {
    return this.cropX || this.cropY || this.width < this._element.width || this.height < this._element.height;
  };

  return ImageClass;
}(ObjectClass);

/**
 * 通过对象创建sugar.Image实例
 * @static
 * @param {Object} object
 * @param {Function} callback 图像创建成功后的回调
 */


ImageClass.fromObject = function (_object, callback) {
  var object = clone(_object);
  loadImage(object.src, function (img, isError) {
    if (isError) {
      callback && callback(null, true);
      return;
    }
    var image = new ImageClass(img, object);
    callback(image, false);
  }, null);
};

/**
 * 通过URL创建sugar.Image实例
 * @static
 * @param {String} url 图像URL
 * @param {Function} [callback]
 * @param {Object} [imgOptions]
 */
ImageClass.fromURL = function (url, callback, imgOptions) {
  loadImage(url, function (img, isError) {
    callback && callback(new ImageClass(img, imgOptions), isError);
  }, null);
};

module.exports = ImageClass;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Sugar on 2020/5/26.
 */
var ObjectClass = __webpack_require__(0);
var ColorClass = __webpack_require__(7);

var _require = __webpack_require__(4),
    clone = _require.clone;

var _require2 = __webpack_require__(2),
    populateWithProperties = _require2.populateWithProperties;

var GradientClass = function () {
  function GradientClass(options) {
    _classCallCheck(this, GradientClass);

    this.type = 'linear'; // linear 或 radial
    this.offsetX = 0;
    this.offsetY = 0;
    this.gradientTransform = null;
    this.gradientUnits = 'pixels';
    this.initialize(options);
  }

  GradientClass.prototype.initialize = function initialize(options) {
    options || (options = {});
    options.coords || (options.coords = {});

    var coords = void 0,
        _this = this;

    // sets everything, then coords and colorstops get sets again
    Object.keys(options).forEach(function (option) {
      _this[option] = options[option];
    });

    if (this.id) {
      this.id += '_' + ObjectClass.__uid++;
    } else {
      this.id = ObjectClass.__uid++;
    }

    coords = {
      x1: options.coords.x1 || 0,
      y1: options.coords.y1 || 0,
      x2: options.coords.x2 || 0,
      y2: options.coords.y2 || 0
    };

    if (this.type === 'radial') {
      coords.r1 = options.coords.r1 || 0;
      coords.r2 = options.coords.r2 || 0;
    }

    this.coords = coords;
    this.colorStops = options.colorStops.slice();
  };

  GradientClass.prototype.addColorStop = function addColorStop(colorStops) {
    for (var position in colorStops) {
      var color = new ColorClass(colorStops[position]);
      this.colorStops.push({
        offset: parseFloat(position),
        color: color.toRgb(),
        opacity: color.getAlpha()
      });
    }
    return this;
  };

  GradientClass.prototype.toObject = function toObject(propertiesToInclude) {
    var object = {
      type: this.type,
      coords: this.coords,
      colorStops: this.colorStops,
      offsetX: this.offsetX,
      offsetY: this.offsetY,
      gradientUnits: this.gradientUnits,
      gradientTransform: this.gradientTransform ? this.gradientTransform.concat() : this.gradientTransform
    };
    populateWithProperties(this, object, propertiesToInclude);

    return object;
  };

  /**
   * 返回CanvasGradient的实例
   * @param {CanvasContext} ctx
   * @return {CanvasGradient}
   */


  GradientClass.prototype.toLive = function toLive(ctx) {
    var gradient = void 0,
        coords = clone(this.coords),
        i = void 0,
        len = void 0;

    if (!this.type) {
      return;
    }

    if (this.type === 'linear') {
      gradient = ctx.createLinearGradient(coords.x1, coords.y1, coords.x2, coords.y2);
    } else if (this.type === 'radial') {
      gradient = ctx.createRadialGradient(coords.x1, coords.y1, coords.r1, coords.x2, coords.y2, coords.r2);
    }

    for (i = 0, len = this.colorStops.length; i < len; i++) {
      var color = this.colorStops[i].color,
          opacity = this.colorStops[i].opacity,
          offset = this.colorStops[i].offset;

      if (typeof opacity !== 'undefined') {
        color = new ColorClass(color).setAlpha(opacity).toRgba();
      }
      gradient.addColorStop(offset, color);
    }

    return gradient;
  };

  return GradientClass;
}();

/**
 * @private
 */


function __convertPercentUnitsToValues(instance, options, svgOptions, gradientUnits) {
  var propValue, finalValue;
  Object.keys(options).forEach(function (prop) {
    propValue = options[prop];
    if (propValue === 'Infinity') {
      finalValue = 1;
    } else if (propValue === '-Infinity') {
      finalValue = 0;
    } else {
      finalValue = parseFloat(options[prop], 10);
      if (typeof propValue === 'string' && /^(\d+\.\d+)%|(\d+)%$/.test(propValue)) {
        finalValue *= 0.01;
        if (gradientUnits === 'pixels') {
          // then we need to fix those percentages here in svg parsing
          if (prop === 'x1' || prop === 'x2' || prop === 'r2') {
            finalValue *= svgOptions.viewBoxWidth || svgOptions.width;
          }
          if (prop === 'y1' || prop === 'y2') {
            finalValue *= svgOptions.viewBoxHeight || svgOptions.height;
          }
        }
      }
    }
    options[prop] = finalValue;
  });
}

module.exports = GradientClass;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Sugar on 2020/5/26.
 */
var _require = __webpack_require__(1),
    max = _require.max,
    min = _require.min;

var ColorClass = function () {
  function ColorClass() {
    _classCallCheck(this, ColorClass);
  }

  ColorClass.prototype._tryParsingColor = function _tryParsingColor(color) {
    var source = void 0;

    if (color in ColorClass.colorNameMap) {
      color = ColorClass.colorNameMap[color];
    }

    if (color === 'transparent') {
      source = [255, 255, 255, 0];
    }

    if (!source) {
      source = ColorClass.sourceFromHex(color);
    }
    if (!source) {
      source = ColorClass.sourceFromRgb(color);
    }
    if (!source) {
      source = ColorClass.sourceFromHsl(color);
    }
    if (!source) {
      source = [0, 0, 0, 1];
    }
    if (source) {
      this.setSource(source);
    }
  };

  ColorClass.prototype._rgbToHsl = function _rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    var h = void 0,
        s = void 0,
        l = void 0,
        max = max([r, g, b]),
        min = min([r, g, b]);

    l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
  };

  ColorClass.prototype.getSource = function getSource() {
    return this._source;
  };

  ColorClass.prototype.setSource = function setSource(source) {
    this._source = source;
  };

  ColorClass.prototype.toRgb = function toRgb() {
    var source = this.getSource();
    return 'rgb(' + source[0] + ',' + source[1] + ',' + source[2] + ')';
  };

  ColorClass.prototype.toRgba = function toRgba() {
    var source = this.getSource();
    return 'rgba(' + source[0] + ',' + source[1] + ',' + source[2] + ',' + source[3] + ')';
  };

  ColorClass.prototype.toHsl = function toHsl() {
    var source = this.getSource(),
        hsl = this._rgbToHsl(source[0], source[1], source[2]);

    return 'hsl(' + hsl[0] + ',' + hsl[1] + '%,' + hsl[2] + '%)';
  };

  ColorClass.prototype.toHsla = function toHsla() {
    var source = this.getSource(),
        hsl = this._rgbToHsl(source[0], source[1], source[2]);

    return 'hsla(' + hsl[0] + ',' + hsl[1] + '%,' + hsl[2] + '%,' + source[3] + ')';
  };

  ColorClass.prototype.toHex = function toHex() {
    var source = this.getSource(),
        r = void 0,
        g = void 0,
        b = void 0;

    r = source[0].toString(16);
    r = r.length === 1 ? '0' + r : r;

    g = source[1].toString(16);
    g = g.length === 1 ? '0' + g : g;

    b = source[2].toString(16);
    b = b.length === 1 ? '0' + b : b;

    return r.toUpperCase() + g.toUpperCase() + b.toUpperCase();
  };

  ColorClass.prototype.toHexa = function toHexa() {
    var source = this.getSource(),
        a = void 0;

    a = Math.round(source[3] * 255);
    a = a.toString(16);
    a = a.length === 1 ? '0' + a : a;

    return this.toHex() + a.toUpperCase();
  };

  ColorClass.prototype.getAlpha = function getAlpha() {
    return this.getSource()[3];
  };

  ColorClass.prototype.setAlpha = function setAlpha(alpha) {
    var source = this.getSource();
    source[3] = alpha;
    this.setSource(source);
    return this;
  };

  ColorClass.prototype.toGrayscale = function toGrayscale() {
    var source = this.getSource(),
        average = parseInt((source[0] * 0.3 + source[1] * 0.59 + source[2] * 0.11).toFixed(0), 10),
        currentAlpha = source[3];
    this.setSource([average, average, average, currentAlpha]);
    return this;
  };

  ColorClass.prototype.toBlackWhite = function toBlackWhite(threshold) {
    var source = this.getSource(),
        average = (source[0] * 0.3 + source[1] * 0.59 + source[2] * 0.11).toFixed(0),
        currentAlpha = source[3];

    threshold = threshold || 127;

    average = Number(average) < Number(threshold) ? 0 : 255;
    this.setSource([average, average, average, currentAlpha]);
    return this;
  };

  ColorClass.prototype.overlayWith = function overlayWith(otherColor) {
    if (!(otherColor instanceof Color)) {
      otherColor = new ColorClass(otherColor);
    }

    var result = [],
        alpha = this.getAlpha(),
        otherAlpha = 0.5,
        source = this.getSource(),
        otherSource = otherColorClass.getSource(),
        i = void 0;

    for (i = 0; i < 3; i++) {
      result.push(Math.round(source[i] * (1 - otherAlpha) + otherSource[i] * otherAlpha));
    }

    result[3] = alpha;
    this.setSource(result);
    return this;
  };

  return ColorClass;
}();

ColorClass.reRGBa = /^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*((?:\d*\.?\d+)?)\s*)?\)$/i;

ColorClass.reHSLa = /^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/i;

ColorClass.reHex = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i;

ColorClass.colorNameMap = {
  aliceblue: '#F0F8FF',
  antiquewhite: '#FAEBD7',
  aqua: '#00FFFF',
  aquamarine: '#7FFFD4',
  azure: '#F0FFFF',
  beige: '#F5F5DC',
  bisque: '#FFE4C4',
  black: '#000000',
  blanchedalmond: '#FFEBCD',
  blue: '#0000FF',
  blueviolet: '#8A2BE2',
  brown: '#A52A2A',
  burlywood: '#DEB887',
  cadetblue: '#5F9EA0',
  chartreuse: '#7FFF00',
  chocolate: '#D2691E',
  coral: '#FF7F50',
  cornflowerblue: '#6495ED',
  cornsilk: '#FFF8DC',
  crimson: '#DC143C',
  cyan: '#00FFFF',
  darkblue: '#00008B',
  darkcyan: '#008B8B',
  darkgoldenrod: '#B8860B',
  darkgray: '#A9A9A9',
  darkgrey: '#A9A9A9',
  darkgreen: '#006400',
  darkkhaki: '#BDB76B',
  darkmagenta: '#8B008B',
  darkolivegreen: '#556B2F',
  darkorange: '#FF8C00',
  darkorchid: '#9932CC',
  darkred: '#8B0000',
  darksalmon: '#E9967A',
  darkseagreen: '#8FBC8F',
  darkslateblue: '#483D8B',
  darkslategray: '#2F4F4F',
  darkslategrey: '#2F4F4F',
  darkturquoise: '#00CED1',
  darkviolet: '#9400D3',
  deeppink: '#FF1493',
  deepskyblue: '#00BFFF',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1E90FF',
  firebrick: '#B22222',
  floralwhite: '#FFFAF0',
  forestgreen: '#228B22',
  fuchsia: '#FF00FF',
  gainsboro: '#DCDCDC',
  ghostwhite: '#F8F8FF',
  gold: '#FFD700',
  goldenrod: '#DAA520',
  gray: '#808080',
  grey: '#808080',
  green: '#008000',
  greenyellow: '#ADFF2F',
  honeydew: '#F0FFF0',
  hotpink: '#FF69B4',
  indianred: '#CD5C5C',
  indigo: '#4B0082',
  ivory: '#FFFFF0',
  khaki: '#F0E68C',
  lavender: '#E6E6FA',
  lavenderblush: '#FFF0F5',
  lawngreen: '#7CFC00',
  lemonchiffon: '#FFFACD',
  lightblue: '#ADD8E6',
  lightcoral: '#F08080',
  lightcyan: '#E0FFFF',
  lightgoldenrodyellow: '#FAFAD2',
  lightgray: '#D3D3D3',
  lightgrey: '#D3D3D3',
  lightgreen: '#90EE90',
  lightpink: '#FFB6C1',
  lightsalmon: '#FFA07A',
  lightseagreen: '#20B2AA',
  lightskyblue: '#87CEFA',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#B0C4DE',
  lightyellow: '#FFFFE0',
  lime: '#00FF00',
  limegreen: '#32CD32',
  linen: '#FAF0E6',
  magenta: '#FF00FF',
  maroon: '#800000',
  mediumaquamarine: '#66CDAA',
  mediumblue: '#0000CD',
  mediumorchid: '#BA55D3',
  mediumpurple: '#9370DB',
  mediumseagreen: '#3CB371',
  mediumslateblue: '#7B68EE',
  mediumspringgreen: '#00FA9A',
  mediumturquoise: '#48D1CC',
  mediumvioletred: '#C71585',
  midnightblue: '#191970',
  mintcream: '#F5FFFA',
  mistyrose: '#FFE4E1',
  moccasin: '#FFE4B5',
  navajowhite: '#FFDEAD',
  navy: '#000080',
  oldlace: '#FDF5E6',
  olive: '#808000',
  olivedrab: '#6B8E23',
  orange: '#FFA500',
  orangered: '#FF4500',
  orchid: '#DA70D6',
  palegoldenrod: '#EEE8AA',
  palegreen: '#98FB98',
  paleturquoise: '#AFEEEE',
  palevioletred: '#DB7093',
  papayawhip: '#FFEFD5',
  peachpuff: '#FFDAB9',
  peru: '#CD853F',
  pink: '#FFC0CB',
  plum: '#DDA0DD',
  powderblue: '#B0E0E6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#FF0000',
  rosybrown: '#BC8F8F',
  royalblue: '#4169E1',
  saddlebrown: '#8B4513',
  salmon: '#FA8072',
  sandybrown: '#F4A460',
  seagreen: '#2E8B57',
  seashell: '#FFF5EE',
  sienna: '#A0522D',
  silver: '#C0C0C0',
  skyblue: '#87CEEB',
  slateblue: '#6A5ACD',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#FFFAFA',
  springgreen: '#00FF7F',
  steelblue: '#4682B4',
  tan: '#D2B48C',
  teal: '#008080',
  thistle: '#D8BFD8',
  tomato: '#FF6347',
  turquoise: '#40E0D0',
  violet: '#EE82EE',
  wheat: '#F5DEB3',
  white: '#FFFFFF',
  whitesmoke: '#F5F5F5',
  yellow: '#FFFF00',
  yellowgreen: '#9ACD32'
};

function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}

ColorClass.fromRgb = function (color) {
  return ColorClass.fromSource(ColorClass.sourceFromRgb(color));
};

ColorClass.sourceFromRgb = function (color) {
  var match = color.match(ColorClass.reRGBa);
  if (match) {
    var r = parseInt(match[1], 10) / (/%$/.test(match[1]) ? 100 : 1) * (/%$/.test(match[1]) ? 255 : 1),
        g = parseInt(match[2], 10) / (/%$/.test(match[2]) ? 100 : 1) * (/%$/.test(match[2]) ? 255 : 1),
        b = parseInt(match[3], 10) / (/%$/.test(match[3]) ? 100 : 1) * (/%$/.test(match[3]) ? 255 : 1);

    return [parseInt(r, 10), parseInt(g, 10), parseInt(b, 10), match[4] ? parseFloat(match[4]) : 1];
  }
};

ColorClass.fromRgba = ColorClass.fromRgb;

ColorClass.fromHsl = function (color) {
  return ColorClass.fromSource(ColorClass.sourceFromHsl(color));
};

ColorClass.sourceFromHsl = function (color) {
  var match = color.match(ColorClass.reHSLa);
  if (!match) {
    return;
  }

  var h = (parseFloat(match[1]) % 360 + 360) % 360 / 360,
      s = parseFloat(match[2]) / (/%$/.test(match[2]) ? 100 : 1),
      l = parseFloat(match[3]) / (/%$/.test(match[3]) ? 100 : 1),
      r = void 0,
      g = void 0,
      b = void 0;

  if (s === 0) {
    r = g = b = l;
  } else {
    var q = l <= 0.5 ? l * (s + 1) : l + s - l * s,
        p = l * 2 - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), match[4] ? parseFloat(match[4]) : 1];
};

ColorClass.fromHsla = ColorClass.fromHsl;

ColorClass.fromHex = function (color) {
  return ColorClass.fromSource(ColorClass.sourceFromHex(color));
};

ColorClass.sourceFromHex = function (color) {
  if (color.match(ColorClass.reHex)) {
    var value = color.slice(color.indexOf('#') + 1),
        isShortNotation = value.length === 3 || value.length === 4,
        isRGBa = value.length === 8 || value.length === 4,
        r = isShortNotation ? value.charAt(0) + value.charAt(0) : value.substring(0, 2),
        g = isShortNotation ? value.charAt(1) + value.charAt(1) : value.substring(2, 4),
        b = isShortNotation ? value.charAt(2) + value.charAt(2) : value.substring(4, 6),
        a = isRGBa ? isShortNotation ? value.charAt(3) + value.charAt(3) : value.substring(6, 8) : 'FF';

    return [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), parseFloat((parseInt(a, 16) / 255).toFixed(2))];
  }
};

ColorClass.fromSource = function (source) {
  var oColor = new Color();
  oColorClass.setSource(source);
  return oColor;
};

module.exports = ColorClass;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Sugar on 2020/5/26.
 */
var ObjectClass = __webpack_require__(0);

var _require = __webpack_require__(1),
    toFixed = _require.toFixed;

var _require2 = __webpack_require__(2),
    populateWithProperties = _require2.populateWithProperties;

var PatternClass = function () {
  function PatternClass(options) {
    _classCallCheck(this, PatternClass);

    this.repeat = 'repeat';
    this.offsetX = 0;
    this.offsetY = 0;
    this.initialize(options);
  }

  PatternClass.prototype.initialize = function initialize(options, callback) {
    options || (options = {});

    this.id = ObjectClass.__uid++;
    this.setOptions(options);
    if (!options.source || options.source && typeof options.source !== 'string') {
      callback && callback(this);
      return;
    } else {
      // img src string
      var _this = this;
      // this.source = createImage();
      // loadImage(options.source, function (img, isError) {
      //   _this.source = img;
      //   callback && callback(_this, isError);
      // }, null, this.crossOrigin);
    }
  };

  PatternClass.prototype.toObject = function toObject(propertiesToInclude) {
    var NUM_FRACTION_DIGITS = 2,
        source = void 0,
        object = void 0;

    // <img> element
    if (typeof this.source.src === 'string') {
      source = this.source.src;
    }
    // <canvas> element
    else if (_typeof(this.source) === 'object' && this.source.toDataURL) {
        source = this.source.toDataURL();
      }

    object = {
      type: 'pattern',
      source: source,
      repeat: this.repeat,
      crossOrigin: this.crossOrigin,
      offsetX: toFixed(this.offsetX, NUM_FRACTION_DIGITS),
      offsetY: toFixed(this.offsetY, NUM_FRACTION_DIGITS),
      patternTransform: this.patternTransform ? this.patternTransform.concat() : null
    };
    populateWithProperties(this, object, propertiesToInclude);

    return object;
  };

  PatternClass.prototype.setOptions = function setOptions(options) {
    for (var prop in options) {
      this[prop] = options[prop];
    }
  };

  /**
   * 返回CanvasPattern的实例
   * @param {CanvasContext} ctx
   * @return {CanvasPattern}
   */


  PatternClass.prototype.toLive = function toLive(ctx) {
    var source = this.source;
    if (!source) {
      return '';
    }

    // 重复的图像源，支持代码包路径和本地临时路径 (本地路径)
    if (typeof source.src !== 'undefined') {
      if (!source.complete) {
        return '';
      }
      if (source.naturalWidth === 0 || source.naturalHeight === 0) {
        return '';
      }
    }

    /**
     * createPattern第二个参数 string repetition
     repeat  水平竖直方向都重复
     repeat-x  水平方向重复
     repeat-y  竖直方向重复
     no-repeat  不重复
     */
    return ctx.createPattern(source, this.repeat);
  };

  return PatternClass;
}();

module.exports = PatternClass;

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by Sugar on 2020/5/25.
 */
var CanvasClass = __webpack_require__(11);
var ObjectClass = __webpack_require__(0);
var ImageClass = __webpack_require__(5);
var TextClass = __webpack_require__(12);
var RectClass = __webpack_require__(14);
var PolygonClass = __webpack_require__(15);
var TriangleClass = __webpack_require__(16);
var CircleClass = __webpack_require__(17);
var EllipseClass = __webpack_require__(18);
var GradientClass = __webpack_require__(6);
var PatternClass = __webpack_require__(8);
var PointClass = __webpack_require__(3);
var ColorClass = __webpack_require__(7);

var _require = __webpack_require__(1),
    mergeMethods = _require.mergeMethods;

var CommonMethods = __webpack_require__(19);
var Observable = __webpack_require__(20);
var CanvasEvent = __webpack_require__(21);
var ObjectOrigin = __webpack_require__(22);
var ObjectInteractivity = __webpack_require__(23);
var ObjectGeometry = __webpack_require__(24);
var TextStyles = __webpack_require__(26);

var Sugar = {};

mergeMethods(CanvasClass, CommonMethods);
mergeMethods(CanvasClass, Observable);
mergeMethods(CanvasClass, CanvasEvent);
mergeMethods(ObjectClass, CommonMethods);
mergeMethods(ObjectClass, Observable);
mergeMethods(ObjectClass, ObjectOrigin);
mergeMethods(ObjectClass, ObjectInteractivity);
mergeMethods(ObjectClass, ObjectGeometry);
mergeMethods(TextClass, TextStyles);

Sugar.Canvas = CanvasClass;
Sugar.Object = ObjectClass;
Sugar.Image = ImageClass;
Sugar.Text = TextClass;
Sugar.Rect = RectClass;
Sugar.Polygon = PolygonClass;
Sugar.Triangle = TriangleClass;
Sugar.Circle = CircleClass;
Sugar.Ellipse = EllipseClass;
Sugar.Gradient = GradientClass;
Sugar.Pattern = PatternClass;
Sugar.Point = PointClass;
Sugar.Color = ColorClass;

module.exports = Sugar;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Sugar on 2020/5/26.
 */
var _require = __webpack_require__(2),
    invertTransform = _require.invertTransform,
    transformPoint = _require.transformPoint,
    loadImage = _require.loadImage;

var PointClass = __webpack_require__(3);
var ImageClass = __webpack_require__(5);

var CanvasClass = function () {
  function CanvasClass(options) {
    _classCallCheck(this, CanvasClass);

    var canvas = options.canvas;
    var ctx = canvas ? canvas.getContext('2d') : null;
    if (!canvas || !ctx) {
      throw new Error('\u8BF7\u4F20\u5165<canvas>\u7EC4\u4EF6\u8282\u70B9');
    }
    var dpr = wx.getSystemInfoSync().pixelRatio;
    canvas.width = options.width * dpr;
    canvas.height = options.height * dpr;
    ctx.scale(dpr, dpr);
    this.ctx = ctx;
    this.canvas = canvas;
    this.dpr = dpr;
    // this.width = width
    // this.height = height
    // this._objects = []

    this.backgroundImage = null; // 画布实例的背景图像
    this.backgroundColor = ''; // 画布实例的背景颜色
    this.overlayImage = null;
    this.overlayColor = '';

    this.backgroundVpt = true;
    this.overlayVpt = true;
    this.controlsAboveOverlay = false; // 是否在覆盖图像上方渲染对象

    this.viewportTransform = [1, 0, 0, 1, 0, 0];
    this.vptCoords = {}; // 画布的四个角左边，属性为tl，tr，bl，br

    this.preserveObjectStacking = false;
    this.allowTouchScrolling = true;

    this.initialize(options);
  }

  CanvasClass.prototype.initialize = function initialize(options) {
    // this.renderAndResetBound = this.renderAndReset.bind(this);
    this.requestRenderAllBound = this.requestRenderAll.bind(this);
    this._initStatic(options);
    this._initInteractive();
  };

  CanvasClass.prototype._initInteractive = function _initInteractive() {
    this._currentTransform = null;
    this._groupSelector = null;
    // this._initEventListeners()

    // this._initRetinaScaling()

    // this.calcOffset()
  };

  /**
   * @private
   * @param {Object} [options] object
   */


  CanvasClass.prototype._initStatic = function _initStatic(options) {
    var cb = this.requestRenderAllBound;
    this._objects = [];
    this._initOptions(options);
    if (options.backgroundImage) {
      this.setBackgroundImage(options.backgroundImage, cb);
    }
    if (options.backgroundColor) {
      this.setBackgroundColor(options.backgroundColor, cb);
    }
    // if (options.overlayImage) {
    //   this.setOverlayImage(options.overlayImage, cb);
    // }
    // if (options.overlayColor) {
    //   this.setOverlayColor(options.overlayColor, cb);
    // }
  };

  CanvasClass.prototype._initOptions = function _initOptions(options) {
    this._setOptions(options);

    this.width = this.width || 0;
    this.height = this.height || 0;

    this.viewportTransform = this.viewportTransform.slice();
  };

  CanvasClass.prototype._isRetinaScaling = function _isRetinaScaling() {
    return this.dpr !== 1 && this.enableRetinaScaling;
  };

  CanvasClass.prototype.getRetinaScaling = function getRetinaScaling() {
    return this._isRetinaScaling() ? this.dpr : 1;
  };

  CanvasClass.prototype.setBackgroundImage = function setBackgroundImage(image, callback, options) {
    return this.__setBgOverlayImage('backgroundImage', image, callback, options);
  };

  CanvasClass.prototype.setBackgroundColor = function setBackgroundColor(backgroundColor, callback) {
    return this.__setBgOverlayColor('backgroundColor', backgroundColor, callback);
  };

  CanvasClass.prototype.__setBgOverlayImage = function __setBgOverlayImage(property, image, callback, options) {
    var _this = this;

    if (typeof image === 'string') {
      loadImage(image, function (img, isError) {
        console.log('设置背景图', img);
        if (img) {
          var instance = new ImageClass(img, options);
          _this[property] = instance;
          instance.canvas = _this;
        }
        callback && callback(img, isError);
      }, this);
    } else {
      options && image.setOptions(options);
      this[property] = image;
      image && (image.canvas = this);
      callback && callback(image, false);
    }

    return this;
  };

  CanvasClass.prototype.__setBgOverlayColor = function __setBgOverlayColor(property, color, callback) {
    this[property] = color;
    this._initGradient(color, property);
    this._initPattern(color, property, callback);
    return this;
  };

  CanvasClass.prototype.add = function add() {
    this._objects.push.apply(this._objects, arguments);
    if (this._onObjectAdded) {
      for (var i = 0; i < arguments.length; i++) {
        this._onObjectAdded(arguments[i]);
      }
    }
    this.requestRenderAll();
    return this;
  };

  CanvasClass.prototype.remove = function remove() {
    var objects = this._objects;
    var index = void 0;
    var somethingRemoved = false;

    for (var i = 0; i < arguments.length; i++) {
      index = objects.indexOf(arguments[i]);

      if (index !== -1) {
        somethingRemoved = true;
        objects.splice(index, 1);
        this._onObjectRemoved && this._onObjectRemoved(arguments[i]);
      }
    }

    somethingRemoved && this.requestRenderAll();
    return this;
  };

  CanvasClass.prototype._onObjectAdded = function _onObjectAdded(obj) {
    // this.stateful && obj.setupState()
    obj._set('canvas', this);
    obj.setCoords();
    this.fire('object:added', { target: obj });
    obj.fire('added');
  };

  CanvasClass.prototype._onObjectRemoved = function _onObjectRemoved(obj) {
    if (obj === this._activeObject) {
      this.fire('before:selection:cleared', { target: obj });
      this._discardActiveObject();
      this.fire('selection:cleared', { target: obj });
      obj.fire('deselected');
    }
    this.fire('object:removed', { target: obj });
    obj.fire('removed');
    delete obj.canvas;
  };

  /**
   * 清除画布元素的指定上下文
   * @param {CanvasContext} ctx 要清除的上下文
   * @return {sugar.Canvas} thisArg
   */


  CanvasClass.prototype.clearContext = function clearContext(ctx) {
    ctx.clearRect(0, 0, this.width, this.height);
    return this;
  };

  /**
   * 返回绘制对象的画布的上下文
   * @return {CanvasContext}
   */


  CanvasClass.prototype.getContext = function getContext() {
    return this.ctx;
  };

  CanvasClass.prototype.discardActiveObject = function discardActiveObject(e) {
    var currentActives = this.getActiveObjects(),
        activeObject = this.getActiveObject();
    if (currentActives.length) {
      this.fire('before:selection:cleared', { target: activeObject, e: e });
    }
    this._discardActiveObject(e);
    this._fireSelectionEvents(currentActives, e);
    return this;
  };

  /**
   * 清除实例的所有上下文（背景，主要内容等）
   * @return {sugar.Canvas} thisArg
   */


  CanvasClass.prototype.clear = function clear() {
    this.discardActiveObject();
    this._objects.length = 0;
    this.backgroundImage = null;
    this.backgroundColor = '';
    this.clearContext(this.ctx);
    // this.fire('canvas:cleared')
    this.requestRenderAll();
    return this;
  };

  CanvasClass.prototype._shouldClearSelection = function _shouldClearSelection(e, target) {
    var activeObjects = this.getActiveObjects(),
        activeObject = this._activeObject;

    return !target || target && activeObject && activeObjects.length > 1 && activeObjects.indexOf(target) === -1 && activeObject !== target || target && !target.evented || target && !target.selectable && activeObject && activeObject !== target;
  };

  CanvasClass.prototype._setupCurrentTransform = function _setupCurrentTransform(e, target, alreadySelected) {
    if (!target) {
      return;
    }

    var pointer = this.getPointer(e),
        corner = target.__corner,

    // actionHandler = !!corner && target.controls[corner].getActionHandler(),
    // action = this._getActionFromCorner(alreadySelected, corner, e, target),
    // origin = this._getOriginFromCorner(target, corner),
    transform = {
      target: target,
      // action: action,
      action: 'drag',
      // actionHandler: actionHandler,
      corner: corner,
      scaleX: target.scaleX,
      scaleY: target.scaleY,
      skewX: target.skewX,
      skewY: target.skewY,
      offsetX: pointer.x - target.left,
      offsetY: pointer.y - target.top,
      // originX: origin.x,
      // originY: origin.y,
      originX: target.originX,
      originY: target.originY,
      ex: pointer.x,
      ey: pointer.y,
      lastX: pointer.x,
      lastY: pointer.y,
      // theta: degreesToRadians(target.angle),
      width: target.width * target.scaleX
    };

    // if (this._shouldCenterTransform(target, action, altKey)) {
    //   transform.originX = 'center';
    //   transform.originY = 'center';
    // }
    // transform.original.originX = origin.x;
    // transform.original.originY = origin.y;
    this._currentTransform = transform;
    this._beforeTransform(e);
  };

  CanvasClass.prototype._translateObject = function _translateObject(x, y) {
    var transform = this._currentTransform,
        target = transform.target,
        newLeft = x - transform.offsetX,
        newTop = y - transform.offsetY,
        moveX = !target.get('lockMovementX') && target.left !== newLeft,
        moveY = !target.get('lockMovementY') && target.top !== newTop;

    moveX && target.set('left', newLeft);
    moveY && target.set('top', newTop);
    return moveX || moveY;
  };

  /**
   * 绘制对象的控件（边框/控件）
   * @param {CanvasContext} ctx
   */


  CanvasClass.prototype.drawControls = function drawControls(ctx) {
    var activeObject = this._activeObject;

    if (activeObject) {
      // console.log('drawControls, activeObject:', activeObject)
      activeObject._renderControls(ctx);
    }
  };

  CanvasClass.prototype.getZoom = function getZoom() {
    return this.viewportTransform[0];
  };

  /**
   * 将renderAll请求追加到下一个动画帧
   * 除非已经在进行中，否则就什么也不做
   * @return {sugar.Canvas} instance
   */


  CanvasClass.prototype.requestRenderAll = function requestRenderAll() {
    var _this2 = this;

    if (!this.isRendering) {
      this.isRendering = this.canvas.requestAnimationFrame(function () {
        _this2.isRendering = 0;
        _this2.renderAll();
      });
    }
    return this;
  };

  /**
   * 使用当前视口计算画布4个角的位置
   * @return {Object} points
   */


  CanvasClass.prototype.calcViewportBoundaries = function calcViewportBoundaries() {
    var points = {},
        width = this.width,
        height = this.height,
        iVpt = invertTransform(this.viewportTransform);
    points.tl = transformPoint({ x: 0, y: 0 }, iVpt);
    points.br = transformPoint({ x: width, y: height }, iVpt);
    points.tr = new PointClass(points.br.x, points.tl.y);
    points.bl = new PointClass(points.tl.x, points.br.y);
    this.vptCoords = points;
    return points;
  };

  CanvasClass.prototype.cancelRequestedRender = function cancelRequestedRender() {
    if (this.isRendering) {
      this.canvas.cancelAnimationFrame(this.isRendering);
      this.isRendering = 0;
    }
  };

  /**
   * 渲染画布
   * @return {sugar.Canvas} instance
   */


  CanvasClass.prototype.renderAll = function renderAll() {
    this.renderCanvas(this.ctx, this._chooseObjectsToRender());
    return this;
  };

  CanvasClass.prototype._chooseObjectsToRender = function _chooseObjectsToRender() {
    var activeObjects = this.getActiveObjects(),
        object = void 0,
        objsToRender = void 0,
        activeGroupObjects = void 0;

    if (activeObjects.length > 0 && !this.preserveObjectStacking) {
      objsToRender = [];
      activeGroupObjects = [];
      for (var i = 0; i < this._objects.length; i++) {
        object = this._objects[i];
        if (activeObjects.indexOf(object) === -1) {
          objsToRender.push(object);
        } else {
          activeGroupObjects.push(object);
        }
      }
      if (activeObjects.length > 1) {
        this._activeObject._objects = activeGroupObjects;
      }
      objsToRender.push.apply(objsToRender, activeGroupObjects);
    } else {
      objsToRender = this._objects;
    }
    return objsToRender;
  };

  /**
   * 渲染背景，对象，叠加层和控件
   * @param {CanvasContext} ctx
   * @param {Array} objects 待渲染的图层对象
   * @return {sugar.Canvas} instance
   */


  CanvasClass.prototype.renderCanvas = function renderCanvas(ctx, objects) {
    var v = this.viewportTransform;
    this.cancelRequestedRender();
    this.calcViewportBoundaries();
    this.clearContext(ctx);
    // setImageSmoothing(ctx, this.imageSmoothingEnabled);
    this.fire('before:render', { ctx: ctx });
    // console.log('before:render');
    this._renderBackground(ctx);

    ctx.save();
    // 对所有渲染过程应用一次视口变换
    ctx.transform(v[0], v[1], v[2], v[3], v[4], v[5]);
    this._renderObjects(ctx, objects);
    ctx.restore();
    if (!this.controlsAboveOverlay) {
      this.drawControls(ctx);
    }
    // this._renderOverlay(ctx)
    if (this.controlsAboveOverlay) {
      this.drawControls(ctx);
    }
    // console.log('renderCanvas after:render');
    this.fire('after:render', { ctx: ctx });
  };

  /**
   * @private
   * @param {CanvasContext} ctx
   * @param {Array} objects
   */


  CanvasClass.prototype._renderObjects = function _renderObjects(ctx, objects) {
    for (var i = 0; i < objects.length; i++) {
      objects[i] && objects[i].render(ctx);
    }
  };

  /**
   * @private
   * @param {CanvasContext} ctx
   * @param {string} property 'background' 或 'overlay'
   */


  CanvasClass.prototype._renderBackgroundOrOverlay = function _renderBackgroundOrOverlay(ctx, property) {
    var fill = this[property + 'Color'];
    var object = this[property + 'Image'];
    var v = this.viewportTransform;
    var needsVpt = this[property + 'Vpt'];
    if (!fill && !object) {
      return;
    }
    if (fill) {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(this.width, 0);
      ctx.lineTo(this.width, this.height);
      ctx.lineTo(0, this.height);
      ctx.closePath();
      ctx.fillStyle = fill.toLive ? fill.toLive(ctx, this) : fill;
      if (needsVpt) {
        ctx.transform(v[0], v[1], v[2], v[3], v[4], v[5]);
      }
      ctx.transform(1, 0, 0, 1, fill.offsetX || 0, fill.offsetY || 0);
      // let m = fill.gradientTransform || fill.patternTransform
      // m && ctx.transform(m[0], m[1], m[2], m[3], m[4], m[5])
      ctx.fill();
      ctx.restore();
    }
    if (object) {
      ctx.save();
      if (needsVpt) {
        ctx.transform(v[0], v[1], v[2], v[3], v[4], v[5]);
      }
      object.render(ctx);
      ctx.restore();
    }
  };

  /**
   * @private
   * @param {CanvasContext} ctx
   */


  CanvasClass.prototype._renderBackground = function _renderBackground(ctx) {
    this._renderBackgroundOrOverlay(ctx, 'background');
  };

  /**
   * @private
   * @param {CanvasContext} ctx
   */


  CanvasClass.prototype._renderOverlay = function _renderOverlay(ctx) {
    this._renderBackgroundOrOverlay(ctx, 'overlay');
  };

  /**
   * 返回画布中心的坐标
   * @return {Object} object 返回值是具有top和left属性的对象
   */


  CanvasClass.prototype.getCenter = function getCenter() {
    return {
      top: this.height / 2,
      left: this.width / 2
    };
  };

  /**
   * 返回当前选中操作的对象
   * @return {sugar.Object}
   */


  CanvasClass.prototype.getActiveObject = function getActiveObject() {
    return this._activeObject;
  };

  /**
   * 返回具有当前所选操作的对象数组
   * @return {sugar.Object} active object
   */


  CanvasClass.prototype.getActiveObjects = function getActiveObjects() {
    var active = this._activeObject;
    if (active) {
      if (active.type === 'activeSelection' && active._objects) {
        return active._objects.slice(0);
      } else {
        return [active];
      }
    }
    return [];
  };

  /**
   * 将一个对象在画布中设置为选中激活状态
   * @param {sugar.Object} object 设为激活的对象
   * @param {Event} [e] 事件（触发"object:selected"时传递）
   * @return {sugar.Canvas}
   */


  CanvasClass.prototype.setActiveObject = function setActiveObject(object, e) {
    var currentActives = this.getActiveObjects();
    this._setActiveObject(object, e);
    this._fireSelectionEvents(currentActives, e);
    return this;
  };

  /**
   * @private
   * @param {Object} object 设为激活的对象
   * @param {Event} [e] 事件（触发"object:selected"时传递）
   * @return {Boolean} 如果对象为选中激活状态，返回true
   */


  CanvasClass.prototype._setActiveObject = function _setActiveObject(object, e) {
    if (this._activeObject === object) {
      // 当前对象已选中
      return false;
    }
    if (!this._discardActiveObject(e, object)) {
      return false;
    }
    if (object.onSelect({ e: e })) {
      return false;
    }
    this._activeObject = object;
    return true;
  };

  /**
   * @private
   */


  CanvasClass.prototype._discardActiveObject = function _discardActiveObject(e, object) {
    var obj = this._activeObject;
    if (obj) {
      if (obj.onDeselect({ e: e, object: object })) {
        return false;
      }
      this._activeObject = null;
    }
    return true;
  };

  CanvasClass.prototype._fireSelectionEvents = function _fireSelectionEvents(oldObjects, e) {
    var somethingChanged = false,
        objects = this.getActiveObjects(),
        added = [],
        removed = [],
        opt = { e: e };

    oldObjects.forEach(function (oldObject) {
      if (objects.indexOf(oldObject) === -1) {
        somethingChanged = true;
        oldObject.fire('deselected', opt);
        removed.push(oldObject);
      }
    });
    objects.forEach(function (object) {
      if (oldObjects.indexOf(object) === -1) {
        somethingChanged = true;
        object.fire('selected', opt);
        added.push(object);
      }
    });
    if (oldObjects.length > 0 && objects.length > 0) {
      opt.selected = added;
      opt.deselected = removed;
      opt.updated = added[0] || removed[0];
      opt.target = this._activeObject;
      somethingChanged && this.fire('selection:updated', opt);
    } else if (objects.length > 0) {
      opt.selected = added;
      opt.target = this._activeObject;
      this.fire('selection:created', opt);
    } else if (oldObjects.length > 0) {
      opt.deselected = removed;
      this.fire('selection:cleared', opt);
    }
  };

  CanvasClass.prototype.toDataURL = function toDataURL(options) {
    try {
      options || (options = {});

      var format = options.format || 'jpeg';
      var quality = options.quality || 0.5;

      /**
       * toDataURL 微信基础库 2.11.0 开始支持
       *
       * string type
       * 图片格式，默认为 image/png
       *
       * number encoderOptions
       * 在指定图片格式为 image/jpeg 或 image/webp的情况下，可以从 0 到 1 的区间内选择图片的质量。如果超出取值范围，将会使用默认值 0.92。其他参数会被忽略。
       */
      return this.canvas.toDataURL('image/' + format, quality);
    } catch (e) {
      throw new Error('当前微信基础库不支持toDataURL，2.11.0开始支持');
    }
  };

  return CanvasClass;
}();

module.exports = CanvasClass;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by Sugar on 2020/5/26.
 */
var ObjectClass = __webpack_require__(0);

var _require = __webpack_require__(13),
    graphemeSplit = _require.graphemeSplit;

var TextClass = function (_ObjectClass) {
  _inherits(TextClass, _ObjectClass);

  function TextClass(text, options) {
    _classCallCheck(this, TextClass);

    var _this = _possibleConstructorReturn(this, _ObjectClass.call(this, options));

    _this.type = 'text';
    _this.stroke = null;
    _this.fontSize = 16;
    _this.fontWeight = 'normal';
    _this.fontFamily = 'sans-serif';
    _this.underline = false;
    _this.overline = false;
    _this.linethrough = false;
    _this.textAlign = 'left';
    _this.fontStyle = 'normal';
    _this.lineHeight = 1.16;
    _this.charSpacing = 0;
    _this.styles = null;
    _this._fontSizeMult = 1.13;
    _this._fontSizeFraction = 0.222;

    _this._reNewline = /\r?\n/;
    _this._reSpaceAndTab = /[ \t\r]/;
    _this._reSpacesAndTabs = /[ \t\r]/g;

    _this.__charBounds = [];
    _this.MIN_TEXT_WIDTH = 2;
    _this.CACHE_FONT_SIZE = 400;

    _this._styleProperties = ['stroke', 'strokeWidth', 'fill', 'fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'underline', 'overline', 'linethrough'];
    _this._dimensionAffectingProps = ['fontSize', 'fontWeight', 'fontFamily', 'fontStyle', 'lineHeight', 'text', 'charSpacing', 'textAlign', 'styles'];

    _this.initialize(text, options);
    return _this;
  }

  TextClass.prototype.initialize = function initialize(text, options) {
    this.styles = options ? options.styles || {} : {};
    this.text = text;
    _ObjectClass.prototype.initialize.call(this, options);
    this.initDimensions();
    this.setCoords();
    // this.setupState({propertySet: '_dimensionAffectingProps'});
  };

  TextClass.prototype.initDimensions = function initDimensions() {
    this._splitText();
    this._clearCache();

    if (this.canvas && this.canvas.ctx) {
      // this.width = this.canvas.ctx.measureText(this.text).width || this.MIN_TEXT_WIDTH
      this.width = this.calcTextWidth() || this.MIN_TEXT_WIDTH;
    }
    this.height = this.calcTextHeight();
    if (this.textAlign.indexOf('justify') !== -1) {
      this.enlargeSpaces();
    }
    this.height = this.calcTextHeight();
    // this.saveState({propertySet: '_dimensionAffectingProps'})
  };

  TextClass.prototype.enlargeSpaces = function enlargeSpaces() {
    var diffSpace = void 0,
        currentLineWidth = void 0,
        numberOfSpaces = void 0,
        accumulatedSpace = void 0,
        line = void 0,
        charBound = void 0,
        spaces = void 0;
    for (var i = 0, len = this._textLines.length; i < len; i++) {
      if (this.textAlign !== 'justify' && (i === len - 1 || this.isEndOfWrapping(i))) {
        continue;
      }
      accumulatedSpace = 0;
      line = this._textLines[i];
      currentLineWidth = this.getLineWidth(i);
      if (currentLineWidth < this.width && (spaces = this.textLines[i].match(this._reSpacesAndTabs))) {
        numberOfSpaces = spaces.length;
        diffSpace = (this.width - currentLineWidth) / numberOfSpaces;
        for (var j = 0, jlen = line.length; j <= jlen; j++) {
          charBound = this.__charBounds[i][j];
          if (this._reSpaceAndTab.test(line[j])) {
            charBound.width += diffSpace;
            charBound.kernedWidth += diffSpace;
            charBound.left += accumulatedSpace;
            accumulatedSpace += diffSpace;
          } else {
            charBound.left += accumulatedSpace;
          }
        }
      }
    }
  };

  TextClass.prototype.getFontCache = function getFontCache(decl) {
    var fontFamily = decl.fontFamily.toLowerCase();
    if (!TextClass.charWidthsCache[fontFamily]) {
      TextClass.charWidthsCache[fontFamily] = {};
    }
    var cache = TextClass.charWidthsCache[fontFamily],
        cacheProp = decl.fontStyle.toLowerCase() + '_' + (decl.fontWeight + '').toLowerCase();
    if (!cache[cacheProp]) {
      cache[cacheProp] = {};
    }
    return cache[cacheProp];
  };

  TextClass.prototype.calcTextHeight = function calcTextHeight() {
    var lineHeight = void 0,
        height = 0;
    for (var i = 0, len = this._textLines.length; i < len; i++) {
      lineHeight = this.getHeightOfLine(i);
      height += i === len - 1 ? lineHeight / this.lineHeight : lineHeight;
    }
    return height;
  };

  TextClass.prototype.getHeightOfLine = function getHeightOfLine(lineIndex) {
    if (this.__lineHeights[lineIndex]) {
      return this.__lineHeights[lineIndex];
    }

    var line = this._textLines[lineIndex],
        maxHeight = this.getHeightOfChar(lineIndex, 0);
    for (var i = 1; i < line.length; i++) {
      maxHeight = Math.max(this.getHeightOfChar(lineIndex, i), maxHeight);
    }

    return this.__lineHeights[lineIndex] = maxHeight * this.lineHeight * this._fontSizeMult;
  };

  TextClass.prototype.getHeightOfChar = function getHeightOfChar(line, _char) {
    return this.getValueOfPropertyAt(line, _char, 'fontSize');
  };

  TextClass.prototype.getValueOfPropertyAt = function getValueOfPropertyAt(lineIndex, charIndex, property) {
    var charStyle = this._getStyleDeclaration(lineIndex, charIndex);
    if (charStyle && typeof charStyle[property] !== 'undefined') {
      return charStyle[property];
    }
    return this[property];
  };

  TextClass.prototype._clearCache = function _clearCache() {
    this.__lineWidths = [];
    this.__lineHeights = [];
    this.__charBounds = [];
  };

  TextClass.prototype.isEndOfWrapping = function isEndOfWrapping(lineIndex) {
    return lineIndex === this._textLines.length - 1;
  };

  TextClass.prototype.missingNewlineOffset = function missingNewlineOffset() {
    return 1;
  };

  TextClass.prototype.getMeasuringContext = function getMeasuringContext() {
    var _measuringContext = this.canvas && this.canvas.ctx;
    return _measuringContext;
  };

  TextClass.prototype._splitText = function _splitText() {
    var newLines = this._splitTextIntoLines(this.text);
    this.textLines = newLines.lines;
    this._textLines = newLines.graphemeLines;
    this._unwrappedTextLines = newLines._unwrappedLines;
    this._text = newLines.graphemeText;
    return newLines;
  };

  /**
   * 返回分行后的文本数组.
   * @param {String} text
   * @returns {Array}
   */


  TextClass.prototype._splitTextIntoLines = function _splitTextIntoLines(text) {
    var lines = text.split(this._reNewline),
        newLines = new Array(lines.length),
        newLine = ['\n'],
        newText = [];
    for (var i = 0; i < lines.length; i++) {
      newLines[i] = graphemeSplit(lines[i]);
      newText = newText.concat(newLines[i], newLine);
    }
    newText.pop();
    return { _unwrappedLines: newLines, lines: lines, graphemeText: newText, graphemeLines: newLines };
  };

  TextClass.prototype.calcTextWidth = function calcTextWidth() {
    var maxWidth = this.getLineWidth(0);

    for (var i = 1, len = this._textLines.length; i < len; i++) {
      var currentLineWidth = this.getLineWidth(i);
      if (currentLineWidth > maxWidth) {
        maxWidth = currentLineWidth;
      }
    }
    console.log('文本宽度', maxWidth);
    return maxWidth;
  };

  TextClass.prototype.getLineWidth = function getLineWidth(lineIndex) {
    if (this.__lineWidths[lineIndex]) {
      return this.__lineWidths[lineIndex];
    }

    var width = void 0,
        line = this._textLines[lineIndex],
        lineInfo = void 0;

    if (line === '') {
      width = 0;
    } else {
      lineInfo = this.measureLine(lineIndex);
      width = lineInfo.width;
    }
    this.__lineWidths[lineIndex] = width;
    return width;
  };

  TextClass.prototype.measureLine = function measureLine(lineIndex) {
    var lineInfo = this._measureLine(lineIndex);
    if (this.charSpacing !== 0) {
      lineInfo.width -= this._getWidthOfCharSpacing();
    }
    if (lineInfo.width < 0) {
      lineInfo.width = 0;
    }
    return lineInfo;
  };

  TextClass.prototype._measureLine = function _measureLine(lineIndex) {
    var width = 0,
        i = void 0,
        grapheme = void 0,
        line = this._textLines[lineIndex],
        prevGrapheme = void 0,
        graphemeInfo = void 0,
        numOfSpaces = 0,
        lineBounds = new Array(line.length);

    this.__charBounds[lineIndex] = lineBounds;
    for (i = 0; i < line.length; i++) {
      grapheme = line[i];
      graphemeInfo = this._getGraphemeBox(grapheme, lineIndex, i, prevGrapheme);
      lineBounds[i] = graphemeInfo;
      width += graphemeInfo.kernedWidth;
      prevGrapheme = grapheme;
    }
    // this latest bound box represent the last character of the line
    // to simplify cursor handling in interactive mode.
    lineBounds[i] = {
      left: graphemeInfo ? graphemeInfo.left + graphemeInfo.width : 0,
      width: 0,
      kernedWidth: 0,
      height: this.fontSize
    };
    return { width: width, numOfSpaces: numOfSpaces };
  };

  TextClass.prototype._renderTextCommon = function _renderTextCommon(ctx, method) {
    ctx.save();
    var lineHeights = 0,
        left = this._getLeftOffset(ctx),
        top = this._getTopOffset(ctx),
        offsets = this._applyPatternGradientTransform(ctx, method === 'fillText' ? this.fill : this.stroke);
    for (var i = 0, len = this._textLines.length; i < len; i++) {
      var heightOfLine = this.getHeightOfLine(i),
          maxHeight = heightOfLine / this.lineHeight,
          leftOffset = this._getLineLeftOffset(i);
      this._renderTextLine(method, ctx, this._textLines[i], left + leftOffset - offsets.offsetX, // TODO 优化position
      top + lineHeights + maxHeight - offsets.offsetY, i);
      lineHeights += heightOfLine;
    }
    ctx.restore();
  };

  TextClass.prototype._getLeftOffset = function _getLeftOffset(ctx) {
    // this.width = ctx.measureText(this.text).width || this.MIN_TEXT_WIDTH
    return -this.width / 2;
  };

  TextClass.prototype._getTopOffset = function _getTopOffset(ctx) {
    return -this.height / 2;
  };

  TextClass.prototype._getLineLeftOffset = function _getLineLeftOffset(lineIndex) {
    var lineWidth = this.getLineWidth(lineIndex);
    if (this.textAlign === 'center') {
      return (this.width - lineWidth) / 2;
    }
    if (this.textAlign === 'right') {
      return this.width - lineWidth;
    }
    if (this.textAlign === 'justify-center' && this.isEndOfWrapping(lineIndex)) {
      return (this.width - lineWidth) / 2;
    }
    if (this.textAlign === 'justify-right' && this.isEndOfWrapping(lineIndex)) {
      return this.width - lineWidth;
    }
    return 0;
  };

  TextClass.prototype._getGraphemeBox = function _getGraphemeBox(grapheme, lineIndex, charIndex, prevGrapheme, skipLeft) {
    var style = this.getCompleteStyleDeclaration(lineIndex, charIndex),
        prevStyle = prevGrapheme ? this.getCompleteStyleDeclaration(lineIndex, charIndex - 1) : {},
        info = this._measureChar(grapheme, style, prevGrapheme, prevStyle),
        kernedWidth = info.kernedWidth,
        width = info.width,
        charSpacing = void 0;

    if (this.charSpacing !== 0) {
      charSpacing = this._getWidthOfCharSpacing();
      width += charSpacing;
      kernedWidth += charSpacing;
    }

    var box = {
      width: width,
      left: 0,
      height: style.fontSize,
      kernedWidth: kernedWidth,
      deltaY: style.deltaY
    };
    if (charIndex > 0 && !skipLeft) {
      var previousBox = this.__charBounds[lineIndex][charIndex - 1];
      box.left = previousBox.left + previousBox.width + info.kernedWidth - info.width;
    }
    return box;
  };

  TextClass.prototype._measureChar = function _measureChar(_char, charStyle, previousChar, prevCharStyle) {
    var fontCache = this.getFontCache(charStyle),
        fontDeclaration = this._getFontDeclaration(charStyle),
        previousFontDeclaration = this._getFontDeclaration(prevCharStyle),
        couple = previousChar + _char,
        stylesAreEqual = fontDeclaration === previousFontDeclaration,
        width = void 0,
        coupleWidth = void 0,
        previousWidth = void 0,
        fontMultiplier = charStyle.fontSize / this.CACHE_FONT_SIZE,
        kernedWidth = void 0;

    if (previousChar && fontCache[previousChar] !== undefined) {
      previousWidth = fontCache[previousChar];
    }
    if (fontCache[_char] !== undefined) {
      kernedWidth = width = fontCache[_char];
    }
    if (stylesAreEqual && fontCache[couple] !== undefined) {
      coupleWidth = fontCache[couple];
      kernedWidth = coupleWidth - previousWidth;
    }
    var ctx = void 0;
    if (width === undefined || previousWidth === undefined || coupleWidth === undefined) {
      ctx = this.getMeasuringContext();
      this._setTextStyles(ctx, charStyle, true);
    }
    if (width === undefined) {
      kernedWidth = width = ctx.measureText(_char).width;
      fontCache[_char] = width;
    }
    if (previousWidth === undefined && stylesAreEqual && previousChar) {
      previousWidth = ctx.measureText(previousChar).width;
      fontCache[previousChar] = previousWidth;
    }
    if (stylesAreEqual && coupleWidth === undefined) {
      coupleWidth = ctx.measureText(couple).width;
      fontCache[couple] = coupleWidth;
      kernedWidth = coupleWidth - previousWidth;
    }
    return { width: width * fontMultiplier, kernedWidth: kernedWidth * fontMultiplier };
  };

  TextClass.prototype._getFontDeclaration = function _getFontDeclaration(styleObject, forMeasuring) {
    // let style = styleObject || this, family = this.fontFamily,
    //   fontIsGeneric = TextClass.genericFonts.indexOf(family.toLowerCase()) > -1;
    // let fontFamily = family === undefined ||
    // family.indexOf('\'') > -1 || family.indexOf(',') > -1 ||
    // family.indexOf('"') > -1 || fontIsGeneric
    //   ? style.fontFamily : '"' + style.fontFamily + '"';
    // return [
    //   style.fontStyle,
    //   style.fontWeight,
    //   forMeasuring ? this.CACHE_FONT_SIZE + 'px' : style.fontSize + 'px',
    //   fontFamily
    // ].join(' ');

    return this.fontStyle + ' ' + this.fontWeight + ' ' + this.fontSize + 'px ' + this.fontFamily;
  };

  TextClass.prototype._getWidthOfCharSpacing = function _getWidthOfCharSpacing() {
    if (this.charSpacing !== 0) {
      return this.fontSize * this.charSpacing / 1000;
    }
    return 0;
  };

  TextClass.prototype._setTextStyles = function _setTextStyles(ctx, charStyle, forMeasuring) {
    ctx.font = this._getFontDeclaration(charStyle, forMeasuring);
    this.width = ctx.measureText(this.text).width || this.MIN_TEXT_WIDTH;
  };

  TextClass.prototype._renderTextLinesBackground = function _renderTextLinesBackground(ctx) {
    if (!this.textBackgroundColor && !this.styleHas('textBackgroundColor')) {
      return;
    }
    var lineTopOffset = 0,
        heightOfLine,
        lineLeftOffset,
        originalFill = ctx.fillStyle,
        line,
        lastColor,
        leftOffset = this._getLeftOffset(ctx),
        topOffset = this._getTopOffset(ctx),
        boxStart = 0,
        boxWidth = 0,
        charBox,
        currentColor;

    for (var i = 0, len = this._textLines.length; i < len; i++) {
      heightOfLine = this.getHeightOfLine(i);
      if (!this.textBackgroundColor && !this.styleHas('textBackgroundColor', i)) {
        lineTopOffset += heightOfLine;
        continue;
      }
      line = this._textLines[i];
      lineLeftOffset = this._getLineLeftOffset(i);
      boxWidth = 0;
      boxStart = 0;
      lastColor = this.getValueOfPropertyAt(i, 0, 'textBackgroundColor');
      for (var j = 0, jlen = line.length; j < jlen; j++) {
        charBox = this.__charBounds[i][j];
        currentColor = this.getValueOfPropertyAt(i, j, 'textBackgroundColor');
        if (currentColor !== lastColor) {
          ctx.fillStyle = lastColor;
          lastColor && ctx.fillRect(leftOffset + lineLeftOffset + boxStart, topOffset + lineTopOffset, boxWidth, heightOfLine / this.lineHeight);
          boxStart = charBox.left;
          boxWidth = charBox.width;
          lastColor = currentColor;
        } else {
          boxWidth += charBox.kernedWidth;
        }
      }
      if (currentColor) {
        ctx.fillStyle = currentColor;
        ctx.fillRect(leftOffset + lineLeftOffset + boxStart, topOffset + lineTopOffset, boxWidth, heightOfLine / this.lineHeight);
      }
      lineTopOffset += heightOfLine;
    }
    ctx.fillStyle = originalFill;

    this._removeShadow(ctx);
  };

  TextClass.prototype._renderTextDecoration = function _renderTextDecoration(ctx, type) {
    if (!this[type] && !this.styleHas(type)) {
      return;
    }
    var heightOfLine,
        size,
        _size,
        lineLeftOffset,
        dy,
        _dy,
        line,
        lastDecoration,
        leftOffset = this._getLeftOffset(ctx),
        topOffset = this._getTopOffset(ctx),
        top,
        boxStart,
        boxWidth,
        charBox,
        currentDecoration,
        maxHeight,
        currentFill,
        lastFill,
        charSpacing = this._getWidthOfCharSpacing();

    for (var i = 0, len = this._textLines.length; i < len; i++) {
      heightOfLine = this.getHeightOfLine(i);
      if (!this[type] && !this.styleHas(type, i)) {
        topOffset += heightOfLine;
        continue;
      }
      line = this._textLines[i];
      maxHeight = heightOfLine / this.lineHeight;
      lineLeftOffset = this._getLineLeftOffset(i);
      boxStart = 0;
      boxWidth = 0;
      lastDecoration = this.getValueOfPropertyAt(i, 0, type);
      lastFill = this.getValueOfPropertyAt(i, 0, 'fill');
      top = topOffset + maxHeight * (1 - this._fontSizeFraction);
      size = this.getHeightOfChar(i, 0);
      dy = this.getValueOfPropertyAt(i, 0, 'deltaY');
      for (var j = 0, jlen = line.length; j < jlen; j++) {
        charBox = this.__charBounds[i][j];
        currentDecoration = this.getValueOfPropertyAt(i, j, type);
        currentFill = this.getValueOfPropertyAt(i, j, 'fill');
        _size = this.getHeightOfChar(i, j);
        _dy = this.getValueOfPropertyAt(i, j, 'deltaY');
        if ((currentDecoration !== lastDecoration || currentFill !== lastFill || _size !== size || _dy !== dy) && boxWidth > 0) {
          ctx.fillStyle = lastFill;
          lastDecoration && lastFill && ctx.fillRect(leftOffset + lineLeftOffset + boxStart, top + this.offsets[type] * size + dy, boxWidth, this.fontSize / 15);
          boxStart = charBox.left;
          boxWidth = charBox.width;
          lastDecoration = currentDecoration;
          lastFill = currentFill;
          size = _size;
          dy = _dy;
        } else {
          boxWidth += charBox.kernedWidth;
        }
      }
      ctx.fillStyle = currentFill;
      currentDecoration && currentFill && ctx.fillRect(leftOffset + lineLeftOffset + boxStart, top + this.offsets[type] * size + dy, boxWidth - charSpacing, this.fontSize / 15);
      topOffset += heightOfLine;
    }
    this._removeShadow(ctx);
  };

  TextClass.prototype._renderTextStroke = function _renderTextStroke(ctx) {
    if ((!this.stroke || this.strokeWidth === 0) && this.isEmptyStyles()) {
      return;
    }

    if (this.shadow && !this.shadow.affectStroke) {
      this._removeShadow(ctx);
    }

    ctx.save();
    this._setLineDash(ctx, this.strokeDashArray);
    ctx.beginPath();
    this._renderTextCommon(ctx, 'strokeText');
    ctx.closePath();
    ctx.restore();
  };

  TextClass.prototype._renderText = function _renderText(ctx) {
    if (this.paintFirst === 'stroke') {
      this._renderTextStroke(ctx);
      this._renderTextFill(ctx);
    } else {
      this._renderTextFill(ctx);
      this._renderTextStroke(ctx);
    }
  };

  TextClass.prototype._renderTextFill = function _renderTextFill(ctx) {
    if (!this.fill && !this.styleHas('fill')) {
      return;
    }

    this._renderTextCommon(ctx, 'fillText');
  };

  TextClass.prototype._renderTextLine = function _renderTextLine(method, ctx, line, left, top, lineIndex) {
    this._renderChars(method, ctx, line, left, top, lineIndex);
  };

  TextClass.prototype._renderChars = function _renderChars(method, ctx, line, left, top, lineIndex) {
    // set proper line offset
    var lineHeight = this.getHeightOfLine(lineIndex),
        isJustify = this.textAlign.indexOf('justify') !== -1,
        actualStyle,
        nextStyle,
        charsToRender = '',
        charBox,
        boxWidth = 0,
        timeToRender,
        shortCut = !isJustify && this.charSpacing === 0 && this.isEmptyStyles(lineIndex);

    ctx.save();
    top -= lineHeight * this._fontSizeFraction / this.lineHeight;
    if (shortCut) {
      // render all the line in one pass without checking
      this._renderChar(method, ctx, lineIndex, 0, this.textLines[lineIndex], left, top, lineHeight);
      ctx.restore();
      return;
    }
    for (var i = 0, len = line.length - 1; i <= len; i++) {
      timeToRender = i === len || this.charSpacing;
      charsToRender += line[i];
      charBox = this.__charBounds[lineIndex][i];
      if (boxWidth === 0) {
        left += charBox.kernedWidth - charBox.width;
        boxWidth += charBox.width;
      } else {
        boxWidth += charBox.kernedWidth;
      }
      if (isJustify && !timeToRender) {
        if (this._reSpaceAndTab.test(line[i])) {
          timeToRender = true;
        }
      }
      if (!timeToRender) {
        // if we have charSpacing, we render char by char
        actualStyle = actualStyle || this.getCompleteStyleDeclaration(lineIndex, i);
        nextStyle = this.getCompleteStyleDeclaration(lineIndex, i + 1);
        timeToRender = this._hasStyleChanged(actualStyle, nextStyle);
      }
      if (timeToRender) {
        this._renderChar(method, ctx, lineIndex, i, charsToRender, left, top, lineHeight);
        charsToRender = '';
        actualStyle = nextStyle;
        left += boxWidth;
        boxWidth = 0;
      }
    }
    ctx.restore();
  };

  TextClass.prototype._renderChar = function _renderChar(method, ctx, lineIndex, charIndex, _char, left, top) {
    var decl = this._getStyleDeclaration(lineIndex, charIndex),
        fullDecl = this.getCompleteStyleDeclaration(lineIndex, charIndex),
        shouldFill = method === 'fillText' && fullDecl.fill,
        shouldStroke = method === 'strokeText' && fullDecl.stroke && fullDecl.strokeWidth;

    if (!shouldStroke && !shouldFill) {
      return;
    }
    decl && ctx.save();

    this._applyCharStyles(method, ctx, lineIndex, charIndex, fullDecl);

    if (decl && decl.textBackgroundColor) {
      this._removeShadow(ctx);
    }
    if (decl && decl.deltaY) {
      top += decl.deltaY;
    }
    // console.log('ctx.fillText', _char, left, top)
    shouldFill && ctx.fillText(_char, left, top);
    shouldStroke && ctx.strokeText(_char, left, top);
    decl && ctx.restore();
  };

  TextClass.prototype._applyCharStyles = function _applyCharStyles(method, ctx, lineIndex, charIndex, styleDeclaration) {
    this._setFillStyles(ctx, styleDeclaration);
    this._setStrokeStyles(ctx, styleDeclaration);
    ctx.font = this._getFontDeclaration(styleDeclaration);
  };

  TextClass.prototype._hasStyleChanged = function _hasStyleChanged(prevStyle, thisStyle) {
    return prevStyle.fill !== thisStyle.fill || prevStyle.stroke !== thisStyle.stroke || prevStyle.strokeWidth !== thisStyle.strokeWidth || prevStyle.fontSize !== thisStyle.fontSize || prevStyle.fontFamily !== thisStyle.fontFamily || prevStyle.fontWeight !== thisStyle.fontWeight || prevStyle.fontStyle !== thisStyle.fontStyle || prevStyle.deltaY !== thisStyle.deltaY;
  };

  TextClass.prototype.set = function set(key, value) {
    _ObjectClass.prototype.set.call(this, key, value);
    var needsDims = false;
    if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
      for (var _key in key) {
        needsDims = needsDims || this._dimensionAffectingProps.indexOf(_key) !== -1;
      }
    } else {
      needsDims = this._dimensionAffectingProps.indexOf(key) !== -1;
    }
    if (needsDims) {
      this.initDimensions();
      this.setCoords();
    }
    return this;
  };

  TextClass.prototype._render = function _render(ctx) {
    // console.log('_render绘制文字', ctx, this);
    // ctx.save()
    // // italic bold 20px cursive
    // ctx.font = `${this.fontStyle} ${this.fontWeight} ${this.fontSize}px ${this.fontFamily}`
    // this.width = ctx.measureText(this.text).width || this.MIN_TEXT_WIDTH
    // ctx.fillStyle = this.fill
    // // ctx.fillText(this.text, this.left, this.top + this.fontSize)
    // ctx.fillText(this.text, this.left, this.top)
    // // ctx.strokeText(this.text, this.left, this.top)
    // ctx.restore();
    this._setTextStyles(ctx);
    this._renderTextLinesBackground(ctx);
    this._renderTextDecoration(ctx, 'underline');
    this._renderText(ctx);
    this._renderTextDecoration(ctx, 'overline');
    this._renderTextDecoration(ctx, 'linethrough');
  };

  TextClass.prototype.render = function render(ctx) {
    if (!this.visible) {
      return;
    }
    // if (this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen()) {
    //   return;
    // }
    // if (this._shouldClearDimensionCache()) {
    // this.initDimensions();
    // }
    _ObjectClass.prototype.render.call(this, ctx);
  };

  return TextClass;
}(ObjectClass);

TextClass.charWidthsCache = {};
TextClass.genericFonts = ['sans-serif', 'serif', 'cursive', 'fantasy', 'monospace'];

module.exports = TextClass;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by Sugar on 2020/5/27.
 */

function camelize(string) {
  return string.replace(/-+(.)?/g, function (match, character) {
    return character ? character.toUpperCase() : '';
  });
}

function capitalize(string, firstLetterOnly) {
  return string.charAt(0).toUpperCase() + (firstLetterOnly ? string.slice(1) : string.slice(1).toLowerCase());
}

function escapeXml(string) {
  return string.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&apos;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function graphemeSplit(textstring) {
  var i = 0,
      chr,
      graphemes = [];
  for (i = 0, chr; i < textstring.length; i++) {
    if ((chr = getWholeChar(textstring, i)) === false) {
      continue;
    }
    graphemes.push(chr);
  }
  return graphemes;
}

function getWholeChar(str, i) {
  var code = str.charCodeAt(i);

  if (isNaN(code)) {
    return '';
  }
  if (code < 0xD800 || code > 0xDFFF) {
    return str.charAt(i);
  }

  if (0xD800 <= code && code <= 0xDBFF) {
    if (str.length <= i + 1) {
      throw 'High surrogate without following low surrogate';
    }
    var next = str.charCodeAt(i + 1);
    if (0xDC00 > next || next > 0xDFFF) {
      throw 'High surrogate without following low surrogate';
    }
    return str.charAt(i) + str.charAt(i + 1);
  }
  if (i === 0) {
    throw 'Low surrogate without preceding high surrogate';
  }
  var prev = str.charCodeAt(i - 1);

  if (0xD800 > prev || prev > 0xDBFF) {
    throw 'Low surrogate without preceding high surrogate';
  }
  return false;
}

module.exports = {
  camelize: camelize,
  capitalize: capitalize,
  escapeXml: escapeXml,
  graphemeSplit: graphemeSplit
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by Sugar on 2020/5/26.
 */
var ObjectClass = __webpack_require__(0);

var RectClass = function (_ObjectClass) {
  _inherits(RectClass, _ObjectClass);

  function RectClass(options) {
    _classCallCheck(this, RectClass);

    var _this = _possibleConstructorReturn(this, _ObjectClass.call(this));

    _this.type = 'rect';
    _this.rx = 0;
    _this.ry = 0;

    _this.initialize(options);
    return _this;
  }

  RectClass.prototype.initialize = function initialize(options) {
    _ObjectClass.prototype.initialize.call(this, options);
    this._initRxRy();
  };

  RectClass.prototype._initRxRy = function _initRxRy() {
    if (this.rx && !this.ry) {
      this.ry = this.rx;
    } else if (this.ry && !this.rx) {
      this.rx = this.ry;
    }
  };

  RectClass.prototype._render = function _render(ctx) {
    console.log('绘制矩形', this);
    var rx = this.rx ? Math.min(this.rx, this.width / 2) : 0,
        ry = this.ry ? Math.min(this.ry, this.height / 2) : 0,
        w = this.width,
        h = this.height,
        x = -this.width / 2,
        y = -this.height / 2,
        isRounded = rx !== 0 || ry !== 0,
        k = 1 - 0.5522847498;
    ctx.beginPath();

    ctx.moveTo(x + rx, y);

    ctx.lineTo(x + w - rx, y);
    isRounded && ctx.bezierCurveTo(x + w - k * rx, y, x + w, y + k * ry, x + w, y + ry);

    ctx.lineTo(x + w, y + h - ry);
    isRounded && ctx.bezierCurveTo(x + w, y + h - k * ry, x + w - k * rx, y + h, x + w - rx, y + h);

    ctx.lineTo(x + rx, y + h);
    isRounded && ctx.bezierCurveTo(x + k * rx, y + h, x, y + h - k * ry, x, y + h - ry);

    ctx.lineTo(x, y + ry);
    isRounded && ctx.bezierCurveTo(x, y + k * ry, x + k * rx, y, x + rx, y);

    ctx.closePath();

    this._renderPaintInOrder(ctx);
  };

  return RectClass;
}(ObjectClass);

module.exports = RectClass;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by Sugar on 2020/6/7.
 */
var ObjectClass = __webpack_require__(0);

var _require = __webpack_require__(1),
    min = _require.min,
    max = _require.max;

var PolygonClass = function (_ObjectClass) {
  _inherits(PolygonClass, _ObjectClass);

  function PolygonClass(points, options) {
    _classCallCheck(this, PolygonClass);

    var _this = _possibleConstructorReturn(this, _ObjectClass.call(this));

    _this.type = 'polygon';
    _this.points = null;

    _this.initialize(points, options);
    return _this;
  }

  PolygonClass.prototype.initialize = function initialize(points, options) {
    options = options || {};
    this.points = points || [];
    _ObjectClass.prototype.initialize.call(this, options);
    this._setPositionDimensions(options);
  };

  PolygonClass.prototype._setPositionDimensions = function _setPositionDimensions(options) {
    var calcDim = this._calcDimensions(options),
        correctLeftTop = void 0;
    this.width = calcDim.width;
    this.height = calcDim.height;
    if (!options.fromSVG) {
      correctLeftTop = this.translateToGivenOrigin({ x: calcDim.left - this.strokeWidth / 2, y: calcDim.top - this.strokeWidth / 2 }, 'left', 'top', this.originX, this.originY);
    }
    if (typeof options.left === 'undefined') {
      // this.left = options.fromSVG ? calcDim.left : correctLeftTop.x
      this.left = correctLeftTop.x;
    }
    if (typeof options.top === 'undefined') {
      // this.top = options.fromSVG ? calcDim.top : correctLeftTop.y
      this.top = correctLeftTop.y;
    }
    this.pathOffset = {
      x: calcDim.left + this.width / 2,
      y: calcDim.top + this.height / 2
    };
  };

  PolygonClass.prototype._calcDimensions = function _calcDimensions() {
    var points = this.points,
        minX = min(points, 'x') || 0,
        minY = min(points, 'y') || 0,
        maxX = max(points, 'x') || 0,
        maxY = max(points, 'y') || 0,
        width = maxX - minX,
        height = maxY - minY;

    return {
      left: minX,
      top: minY,
      width: width,
      height: height
    };
  };

  PolygonClass.prototype.commonRender = function commonRender(ctx) {
    var point = void 0,
        len = this.points.length,
        x = this.pathOffset.x,
        y = this.pathOffset.y;

    if (!len || isNaN(this.points[len - 1].y)) {
      return false;
    }
    ctx.beginPath();
    ctx.moveTo(this.points[0].x - x, this.points[0].y - y);
    for (var i = 0; i < len; i++) {
      point = this.points[i];
      ctx.lineTo(point.x - x, point.y - y);
    }
    return true;
  };

  PolygonClass.prototype._render = function _render(ctx) {
    if (!this.commonRender(ctx)) {
      return;
    }
    ctx.closePath();
    this._renderPaintInOrder(ctx);
  };

  PolygonClass.prototype.complexity = function complexity() {
    return this.get('points').length;
  };

  return PolygonClass;
}(ObjectClass);

module.exports = PolygonClass;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by Sugar on 2020/6/6.
 */
var ObjectClass = __webpack_require__(0);

var TriangleClass = function (_ObjectClass) {
  _inherits(TriangleClass, _ObjectClass);

  function TriangleClass(options) {
    _classCallCheck(this, TriangleClass);

    var _this = _possibleConstructorReturn(this, _ObjectClass.call(this));

    _this.type = 'triangle';
    _this.width = 50;
    _this.height = 50;

    _this.initialize(options);
    return _this;
  }

  TriangleClass.prototype.initialize = function initialize(options) {
    _ObjectClass.prototype.initialize.call(this, options);
  };

  TriangleClass.prototype._render = function _render(ctx) {
    var widthBy2 = this.width / 2;
    var heightBy2 = this.height / 2;

    ctx.beginPath();
    ctx.moveTo(-widthBy2, heightBy2);
    ctx.lineTo(0, -heightBy2);
    ctx.lineTo(widthBy2, heightBy2);
    ctx.closePath();

    this._renderPaintInOrder(ctx);
  };

  return TriangleClass;
}(ObjectClass);

module.exports = TriangleClass;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by Sugar on 2020/6/6.
 */
var ObjectClass = __webpack_require__(0);

var pi = Math.PI;

var CircleClass = function (_ObjectClass) {
  _inherits(CircleClass, _ObjectClass);

  function CircleClass(options) {
    _classCallCheck(this, CircleClass);

    var _this = _possibleConstructorReturn(this, _ObjectClass.call(this));

    _this.type = 'circle';
    _this.radius = 0;
    _this.startAngle = 0;
    _this.endAngle = pi * 2;

    _this.initialize(options);
    return _this;
  }

  CircleClass.prototype.initialize = function initialize(options) {
    _ObjectClass.prototype.initialize.call(this, options);
  };

  CircleClass.prototype._set = function _set(key, value) {
    _ObjectClass.prototype._set.call(this, key, value);

    if (key === 'radius') {
      this.setRadius(value);
    }

    return this;
  };

  CircleClass.prototype._render = function _render(ctx) {
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, this.startAngle, this.endAngle, false);
    this._renderPaintInOrder(ctx);
  };

  CircleClass.prototype.getRadiusX = function getRadiusX() {
    return this.get('radius') * this.get('scaleX');
  };

  /**
   * 返回对象的垂直半径（根据对象的缩放比例）
   */


  CircleClass.prototype.getRadiusY = function getRadiusY() {
    return this.get('radius') * this.get('scaleY');
  };

  /**
   * 设置对象的半径（并更新宽度）
   */


  CircleClass.prototype.setRadius = function setRadius(value) {
    this.radius = value;
    return this.set('width', value * 2).set('height', value * 2);
  };

  return CircleClass;
}(ObjectClass);

module.exports = CircleClass;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by Sugar on 2020/6/6.
 */
var ObjectClass = __webpack_require__(0);

var piBy2 = Math.PI * 2;

var EllipseClass = function (_ObjectClass) {
  _inherits(EllipseClass, _ObjectClass);

  function EllipseClass(options) {
    _classCallCheck(this, EllipseClass);

    var _this = _possibleConstructorReturn(this, _ObjectClass.call(this));

    _this.type = 'ellipse';
    _this.rx = 0;
    _this.ry = 0;

    _this.initialize(options);
    return _this;
  }

  EllipseClass.prototype.initialize = function initialize(options) {
    _ObjectClass.prototype.initialize.call(this, options);
    this.set('rx', options && options.rx || 0);
    this.set('ry', options && options.ry || 0);
  };

  EllipseClass.prototype._set = function _set(key, value) {
    _ObjectClass.prototype._set.call(this, key, value);
    switch (key) {
      case 'rx':
        this.rx = value;
        this.set('width', value * 2);
        break;

      case 'ry':
        this.ry = value;
        this.set('height', value * 2);
        break;

    }
    return this;
  };

  EllipseClass.prototype.getRx = function getRx() {
    return this.get('rx') * this.get('scaleX');
  };

  EllipseClass.prototype.getRy = function getRy() {
    return this.get('ry') * this.get('scaleY');
  };

  EllipseClass.prototype._render = function _render(ctx) {
    ctx.beginPath();
    ctx.save();
    ctx.transform(1, 0, 0, this.ry / this.rx, 0, 0);
    ctx.arc(0, 0, this.rx, 0, piBy2, false);
    ctx.restore();
    this._renderPaintInOrder(ctx);
  };

  return EllipseClass;
}(ObjectClass);

module.exports = EllipseClass;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by Sugar on 2020/5/26.
 */
var Gradient = __webpack_require__(6);
var Pattern = __webpack_require__(8);

module.exports = {
  _setOptions: function _setOptions(options) {
    for (var prop in options) {
      this.set(prop, options[prop]);
    }
  },

  _initGradient: function _initGradient(filler, property) {
    if (filler && filler.colorStops && !(filler instanceof Gradient)) {
      this.set(property, new Gradient(filler));
    }
  },

  _initPattern: function _initPattern(filler, property, callback) {
    if (filler && filler.source && !(filler instanceof Pattern)) {
      this.set(property, new Pattern(filler, callback));
    } else {
      callback && callback();
    }
  },

  _setObject: function _setObject(obj) {
    for (var prop in obj) {
      this._set(prop, obj[prop]);
    }
  },

  set: function set(key, value) {
    if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
      this._setObject(key);
    } else {
      this._set(key, value);
    }
    return this;
  },

  _set: function _set(key, value) {
    this[key] = value;
  },

  toggle: function toggle(property) {
    var value = this.get(property);
    if (typeof value === 'boolean') {
      this.set(property, !value);
    }
    return this;
  },

  get: function get(property) {
    return this[property];
  }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by Sugar on 2020/5/28.
 */
var _require = __webpack_require__(1),
    fill = _require.fill;

var _removeEventListener = function _removeEventListener(eventName, handler) {
  if (!this.__eventListeners[eventName]) {
    return;
  }
  var eventListener = this.__eventListeners[eventName];
  if (handler) {
    eventListener[eventListener.indexOf(handler)] = false;
  } else {
    fill(eventListener, false);
  }
};

var on = function on(eventName, handler) {
  if (!this.__eventListeners) {
    this.__eventListeners = {};
  }
  if (arguments.length === 1) {
    for (var prop in eventName) {
      this.on(prop, eventName[prop]);
    }
  } else {
    if (!this.__eventListeners[eventName]) {
      this.__eventListeners[eventName] = [];
    }
    this.__eventListeners[eventName].push(handler);
  }
  return this;
};

var off = function off(eventName, handler) {
  if (!this.__eventListeners) {
    return this;
  }

  if (arguments.length === 0) {
    for (eventName in this.__eventListeners) {
      _removeEventListener.call(this, eventName);
    }
  } else if (arguments.length === 1 && _typeof(arguments[0]) === 'object') {
    for (var prop in eventName) {
      _removeEventListener.call(this, prop, eventName[prop]);
    }
  } else {
    _removeEventListener.call(this, eventName, handler);
  }
  return this;
};

var fire = function fire(eventName, options) {
  if (!this.__eventListeners) {
    return this;
  }

  var listenersForEvent = this.__eventListeners[eventName];
  if (!listenersForEvent) {
    return this;
  }

  for (var i = 0, len = listenersForEvent.length; i < len; i++) {
    listenersForEvent[i] && listenersForEvent[i].call(this, options || {});
  }
  this.__eventListeners[eventName] = listenersForEvent.filter(function (value) {
    return value !== false;
  });
  return this;
};

module.exports = {
  fire: fire,
  on: on,
  off: off
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by Sugar on 2020/5/30.
 */
module.exports = {
  /**
   * @param e
   * changedTouches: [
   {identifier: 0
     x: 188.0001220703125
     y: 218.99996948242188
     }
   ],
   currentTarget:{
     dataset:{}
     id: "sugarjs"
     offsetLeft: 0
     offsetTop: 0
   }
   target:{
     dataset: {}
     id: "sugarjs"
     offsetLeft: 0
     offsetTop: 0
   }
   timeStamp: 5821.974999998929
   touches: [
   {
       identifier: 0
       x: 188.0001220703125
       y: 218.99996948242188
     }
   ],
   type: "touchstart"
   */
  touchstart: function touchstart(e) {
    this._target = null;
    this._handleEvent(e, 'start:before');
    this._target = this._currentTransform ? this._currentTransform.target : this.findTarget(e) || null;

    var target = this._target;
    var pointer = this._pointer;
    var shouldRender = this._shouldRender(target);

    if (this._shouldClearSelection(e, target)) {
      this.discardActiveObject(e);
    }

    if (target) {
      var alreadySelected = target === this._activeObject;
      if (target.selectable) {
        console.log('点击目标', target);
        this.setActiveObject(target, e);
      }
      // var corner = target._findTargetCorner(
      //   this.getPointer(e, true),
      //   true
      // );
      // target.__corner = corner;
      if (target === this._activeObject) {
        this._setupCurrentTransform(e, target, alreadySelected);
      }
    }
    this._handleEvent(e, 'start');
    shouldRender && this.requestRenderAll();
  },
  touchmove: function touchmove(e) {
    if (!this.allowTouchScrolling) return;
    // console.log('move', e)

    var target = this.findTarget(e);
    if (e.touches && e.touches.length === 2) {
      // 双指手势
      if (target) {
        // TODO 缩放、旋转
        // this.__gesturesRenderer()
        // this._handleEvent(e, 'gesture');
      }
      return;
    }
    this._handleEvent(e, 'move:before');

    if (!this._currentTransform) {
      // target = this.findTarget(e) || null;
      // this._setCursorFromEvent(e, target);
      // this._fireOverOutEvents(target, e);
    } else {
      this._transformObject(e);
    }
    // console.log('移动目标', this._currentTransform)
    this._handleEvent(e, 'move');
    this._resetTransformEventData();
  },
  touchend: function touchend(e) {
    // console.log(e)
    if (e.touches.length > 0) {
      return;
    }
    var target = void 0;
    // let transform = this._currentTransform
    // let groupSelector = this._groupSelector
    // let shouldRender = false
    this._resetTransformEventData();
    this._target = this._currentTransform ? this._currentTransform.target : this.findTarget(e) || null;
    target = this._target;
    this._handleEvent(e, 'end:before');
    // if (transform) {
    // this._finalizeCurrentTransform(e);
    // shouldRender = transform.actionPerformed;
    // }
    if (target) {
      target.isMoving = false;
    }
    this._handleEvent(e, 'end');
    // this._groupSelector = null;
    this._currentTransform = null;
    // if (shouldRender) {
    //   this.requestRenderAll();
    // } else if (!isClick) {
    //   this.renderTop();
    // }
    this._resetTransformEventData();
  },
  longtap: function longtap(e) {},
  _handleEvent: function _handleEvent(e, eventType, button, isClick) {
    var target = this._target,
        targets = this.targets || [],
        options = {
      e: e,
      target: target,
      subTargets: targets,
      // button: button || LEFT_CLICK,
      // isClick: isClick || false,
      // pointer: this._pointer,
      // absolutePointer: this._absolutePointer,
      transform: this._currentTransform
    };
    this.fire('touch:' + eventType, options);
    target && target.fire('touch' + eventType, options);
    for (var i = 0; i < targets.length; i++) {
      targets[i].fire('touch' + eventType, options);
    }
  },
  _shouldRender: function _shouldRender(target) {
    var activeObject = this._activeObject;

    if (!!activeObject !== !!target || activeObject && target && activeObject !== target) {
      return true;
    }
    return false;
  },

  findTarget: function findTarget(e, skipGroup) {
    if (this.skipTargetFind) {
      return;
    }
    var ignoreZoom = true,
        pointer = this.getPointer(e, ignoreZoom),
        activeObject = this._activeObject,
        aObjects = this.getActiveObjects(),
        activeTarget = void 0,
        activeTargetSubs = void 0;

    this.targets = [];

    if (aObjects.length > 1 && !skipGroup && activeObject === this._searchPossibleTargets([activeObject], pointer)) {
      return activeObject;
    }
    if (aObjects.length === 1 && activeObject._findTargetCorner(pointer)) {
      return activeObject;
    }
    if (aObjects.length === 1 && activeObject === this._searchPossibleTargets([activeObject], pointer)) {
      if (!this.preserveObjectStacking) {
        return activeObject;
      } else {
        activeTarget = activeObject;
        activeTargetSubs = this.targets;
        this.targets = [];
      }
    }
    var target = this._searchPossibleTargets(this._objects, pointer);
    if (e[this.altSelectionKey] && target && activeTarget && target !== activeTarget) {
      target = activeTarget;
      this.targets = activeTargetSubs;
    }
    return target;
  },

  _searchPossibleTargets: function _searchPossibleTargets(objects, pointer) {
    var target,
        i = objects.length,
        subTarget;
    while (i--) {
      var objToCheck = objects[i];
      // var pointerToUse = objToCheck.group && objToCheck.group.type !== 'activeSelection' ?
      //   this._normalizePointer(objToCheck.group, pointer) : pointer;
      if (this._checkTarget(pointer, objToCheck, pointer)) {
        target = objects[i];
        // if (target.subTargetCheck && target instanceof Group) {
        //   subTarget = this._searchPossibleTargets(target._objects, pointer);
        //   subTarget && this.targets.push(subTarget);
        // }
        break;
      }
    }
    return target;
  },

  getPointer: function getPointer(e, ignoreZoom) {
    if (this._pointer && ignoreZoom) {
      return this._pointer;
    }

    var pointer = {
      x: e.touches.length > 0 ? e.touches[0].x : e.changedTouches[0].x,
      y: e.touches.length > 0 ? e.touches[0].y : e.changedTouches[0].y
    };

    return pointer;
  },

  _checkTarget: function _checkTarget(pointer, obj, globalPointer) {
    if (obj && obj.visible && obj.evented && this.containsPoint(null, obj, pointer)) {
      // if ((this.perPixelTargetFind || obj.perPixelTargetFind) && !obj.isEditing) {
      //   var isTransparent = this.isTargetTransparent(obj, globalPointer.x, globalPointer.y);
      //   if (!isTransparent) {
      //     return true;
      //   }
      // } else {
      return true;
      // }
    }
  },

  containsPoint: function containsPoint(e, target, point) {
    var ignoreZoom = true,
        pointer = point || this.getPointer(e, ignoreZoom),
        xy;

    // if (target.group && target.group === this._activeObject && target.group.type === 'activeSelection') {
    //   xy = this._normalizePointer(target.group, pointer);
    // } else {
    xy = { x: pointer.x, y: pointer.y };
    // }
    // return (target.containsPoint(xy) || !!target._findTargetCorner(pointer, true));
    return target.left <= xy.x && xy.x <= target.left + target.width && target.top <= xy.y && xy.y <= target.top + target.height;
  },

  _transformObject: function _transformObject(e) {
    var pointer = this.getPointer(e),
        transform = this._currentTransform;

    transform.reset = false;
    transform.target.isMoving = true;

    this._performTransformAction(e, transform, pointer);
    transform.actionPerformed && this.requestRenderAll();
  },

  _performTransformAction: function _performTransformAction(e, transform, pointer) {
    var x = pointer.x,
        y = pointer.y,
        action = transform.action,
        actionPerformed = false,
        options = {
      target: transform.target,
      e: e,
      transform: transform,
      pointer: pointer
    };

    if (action === 'drag') {
      actionPerformed = this._translateObject(x, y);
      if (actionPerformed) {
        // this._fire('moving', options);
        // this.setCursor(options.target.moveCursor || this.moveCursor);
      }
    }
    transform.actionPerformed = transform.actionPerformed || actionPerformed;
  },

  _resetTransformEventData: function _resetTransformEventData() {
    this._target = null;
    this._pointer = null;
    this._absolutePointer = null;
  },

  _beforeTransform: function _beforeTransform(e) {
    var t = this._currentTransform;
    // this.stateful && t.target.saveState();
    this.fire('before:transform', {
      e: e,
      transform: t
    });
  },
  __gesturesParams: null,
  __gesturesRenderer: function __gesturesRenderer() {}
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by Sugar on 2020/5/30.
 */
var PointClass = __webpack_require__(3);

var _require = __webpack_require__(2),
    degreesToRadians = _require.degreesToRadians,
    cos = _require.cos,
    sin = _require.sin,
    rotatePoint = _require.rotatePoint;

var originXOffset = {
  left: -0.5,
  center: 0,
  right: 0.5
};
var originYOffset = {
  top: -0.5,
  center: 0,
  bottom: 0.5
};

module.exports = {
  translateToGivenOrigin: function translateToGivenOrigin(point, fromOriginX, fromOriginY, toOriginX, toOriginY) {
    var x = point.x,
        y = point.y,
        offsetX = void 0,
        offsetY = void 0,
        dim = void 0;

    if (typeof fromOriginX === 'string') {
      fromOriginX = originXOffset[fromOriginX];
    } else {
      fromOriginX -= 0.5;
    }

    if (typeof toOriginX === 'string') {
      toOriginX = originXOffset[toOriginX];
    } else {
      toOriginX -= 0.5;
    }

    offsetX = toOriginX - fromOriginX;

    if (typeof fromOriginY === 'string') {
      fromOriginY = originYOffset[fromOriginY];
    } else {
      fromOriginY -= 0.5;
    }

    if (typeof toOriginY === 'string') {
      toOriginY = originYOffset[toOriginY];
    } else {
      toOriginY -= 0.5;
    }

    offsetY = toOriginY - fromOriginY;

    if (offsetX || offsetY) {
      dim = this._getTransformedDimensions();
      x = point.x + offsetX * dim.x;
      y = point.y + offsetY * dim.y;
    }

    return new PointClass(x, y);
  },

  translateToCenterPoint: function translateToCenterPoint(point, originX, originY) {
    var p = this.translateToGivenOrigin(point, originX, originY, 'center', 'center');
    if (this.angle) {
      return rotatePoint(p, point, degreesToRadians(this.angle));
    }
    return p;
  },

  /**
   * Translates the coordinates from center to origin coordinates (based on the object's dimensions)
   * @param {PointClass} center The point which corresponds to center of the object
   * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
   * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
   * @return {PointClass}
   */
  translateToOriginPoint: function translateToOriginPoint(center, originX, originY) {
    var p = this.translateToGivenOrigin(center, 'center', 'center', originX, originY);
    if (this.angle) {
      return rotatePoint(p, center, degreesToRadians(this.angle));
    }
    return p;
  },

  /**
   * Returns the real center coordinates of the object
   * @return {PointClass}
   */
  getCenterPoint: function getCenterPoint() {
    var leftTop = new PointClass(this.left, this.top);
    return this.translateToCenterPoint(leftTop, this.originX, this.originY);
  },

  /**
   * Returns the coordinates of the object based on center coordinates
   * @param {PointClass} point The point which corresponds to the originX and originY params
   * @return {PointClass}
   */
  // getOriginPoint: function(center) {
  //   return this.translateToOriginPoint(center, this.originX, this.originY);
  // },

  /**
   * Returns the coordinates of the object as if it has a different origin
   * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
   * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
   * @return {PointClass}
   */
  getPointByOrigin: function getPointByOrigin(originX, originY) {
    var center = this.getCenterPoint();
    return this.translateToOriginPoint(center, originX, originY);
  },

  /**
   * Returns the point in local coordinates
   * @param {PointClass} point The point relative to the global coordinate system
   * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
   * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
   * @return {PointClass}
   */
  toLocalPoint: function toLocalPoint(point, originX, originY) {
    var center = this.getCenterPoint(),
        p = void 0,
        p2 = void 0;

    if (typeof originX !== 'undefined' && typeof originY !== 'undefined') {
      p = this.translateToGivenOrigin(center, 'center', 'center', originX, originY);
    } else {
      p = new PointClass(this.left, this.top);
    }

    p2 = new PointClass(point.x, point.y);
    if (this.angle) {
      p2 = rotatePoint(p2, center, -degreesToRadians(this.angle));
    }
    return p2.subtractEquals(p);
  },

  /**
   * Returns the point in global coordinates
   * @param {PointClass} The point relative to the local coordinate system
   * @return {PointClass}
   */
  // toGlobalPoint: function(point) {
  //   return rotatePoint(point, this.getCenterPoint(), degreesToRadians(this.angle)).addEquals(new PointClass(this.left, this.top));
  // },

  /**
   * Sets the position of the object taking into consideration the object's origin
   * @param {PointClass} pos The new position of the object
   * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
   * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
   * @return {void}
   */
  setPositionByOrigin: function setPositionByOrigin(pos, originX, originY) {
    var center = this.translateToCenterPoint(pos, originX, originY),
        position = this.translateToOriginPoint(center, this.originX, this.originY);
    this.set('left', position.x);
    this.set('top', position.y);
  },

  /**
   * @param {String} to One of 'left', 'center', 'right'
   */
  adjustPosition: function adjustPosition(to) {
    var angle = degreesToRadians(this.angle),
        hypotFull = this.getScaledWidth(),
        xFull = cos(angle) * hypotFull,
        yFull = sin(angle) * hypotFull,
        offsetFrom = void 0,
        offsetTo = void 0;

    //TODO: this function does not consider mixed situation like top, center.
    if (typeof this.originX === 'string') {
      offsetFrom = originXOffset[this.originX];
    } else {
      offsetFrom = this.originX - 0.5;
    }
    if (typeof to === 'string') {
      offsetTo = originXOffset[to];
    } else {
      offsetTo = to - 0.5;
    }
    this.left += xFull * (offsetTo - offsetFrom);
    this.top += yFull * (offsetTo - offsetFrom);
    this.setCoords();
    this.originX = to;
  },

  /**
   * Sets the origin/position of the object to it's center point
   * @private
   * @return {void}
   */
  _setOriginToCenter: function _setOriginToCenter() {
    this._originalOriginX = this.originX;
    this._originalOriginY = this.originY;

    var center = this.getCenterPoint();

    this.originX = 'center';
    this.originY = 'center';

    this.left = center.x;
    this.top = center.y;
  },

  /**
   * Resets the origin/position of the object to it's original origin
   * @private
   * @return {void}
   */
  _resetOrigin: function _resetOrigin() {
    var originPoint = this.translateToOriginPoint(this.getCenterPoint(), this._originalOriginX, this._originalOriginY);

    this.originX = this._originalOriginX;
    this.originY = this._originalOriginY;

    this.left = originPoint.x;
    this.top = originPoint.y;

    this._originalOriginX = null;
    this._originalOriginY = null;
  },

  /**
   * @private
   */
  _getLeftTopCoords: function _getLeftTopCoords() {
    return this.translateToOriginPoint(this.getCenterPoint(), 'left', 'top');
  }
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by Sugar on 2020/5/30.
 */

var _require = __webpack_require__(2),
    degreesToRadians = _require.degreesToRadians,
    cos = _require.cos,
    sin = _require.sin,
    sizeAfterTransform = _require.sizeAfterTransform;

module.exports = {
  /**
   * 确定点击哪个角
   * @private
   * @param {Object} pointer 触摸指针
   * @return {String|Boolean}
   */
  _findTargetCorner: function _findTargetCorner(pointer, forTouch) {
    if (!this.hasControls || this.group || !this.canvas || this.canvas._activeObject !== this) {
      return false;
    }

    var ex = pointer.x,
        ey = pointer.y,
        xPoints = void 0,
        lines = void 0,
        keys = Object.keys(this.oCoords),
        j = keys.length - 1,
        i = void 0;
    this.__corner = 0;

    for (; j >= 0; j--) {
      i = keys[j];
      if (!this.isControlVisible(i)) {
        continue;
      }

      lines = this._getImageLines(forTouch ? this.oCoords[i].touchCorner : this.oCoords[i].corner);

      xPoints = this._findCrossPoints({ x: ex, y: ey }, lines);
      if (xPoints !== 0 && xPoints % 2 === 1) {
        this.__corner = i;
        return i;
      }
    }
    return false;
  },

  forEachControl: function forEachControl(fn) {
    for (var i in this.controls) {
      fn(this.controls[i], i, this);
    }
  },

  /**
   * @private
   */
  _setCornerCoords: function _setCornerCoords() {
    var coords = this.oCoords,
        newTheta = degreesToRadians(45 - this.angle),
        cosTheta = cos(newTheta),
        sinTheta = sin(newTheta),

    /* Math.sqrt(2 * Math.pow(this.cornerSize, 2)) / 2, */
    /* 0.707106 stands for sqrt(2)/2 */
    cornerHypotenuse = this.cornerSize * 0.707106,
        touchHypotenuse = this.touchCornerSize * 0.707106,
        cosHalfOffset = cornerHypotenuse * cosTheta,
        sinHalfOffset = cornerHypotenuse * sinTheta,
        touchCosHalfOffset = touchHypotenuse * cosTheta,
        touchSinHalfOffset = touchHypotenuse * sinTheta,
        x = void 0,
        y = void 0;

    for (var control in coords) {
      x = coords[control].x;
      y = coords[control].y;
      coords[control].corner = {
        tl: {
          x: x - sinHalfOffset,
          y: y - cosHalfOffset
        },
        tr: {
          x: x + cosHalfOffset,
          y: y - sinHalfOffset
        },
        bl: {
          x: x - cosHalfOffset,
          y: y + sinHalfOffset
        },
        br: {
          x: x + sinHalfOffset,
          y: y + cosHalfOffset
        }
      };
      coords[control].touchCorner = {
        tl: {
          x: x - touchSinHalfOffset,
          y: y - touchCosHalfOffset
        },
        tr: {
          x: x + touchCosHalfOffset,
          y: y - touchSinHalfOffset
        },
        bl: {
          x: x - touchCosHalfOffset,
          y: y + touchSinHalfOffset
        },
        br: {
          x: x + touchSinHalfOffset,
          y: y + touchCosHalfOffset
        }
      };
    }
  },

  drawSelectionBackground: function drawSelectionBackground(ctx) {
    if (!this.selectionBackgroundColor || this.canvas && !this.canvas.interactive || this.canvas && this.canvas._activeObject !== this) {
      return this;
    }
    ctx.save();
    var center = this.getCenterPoint(),
        wh = this._calculateCurrentDimensions(),
        vpt = this.canvas.viewportTransform;
    ctx.translate(center.x, center.y);
    ctx.scale(1 / vpt[0], 1 / vpt[3]);
    ctx.rotate(degreesToRadians(this.angle));
    ctx.fillStyle = this.selectionBackgroundColor;
    ctx.fillRect(-wh.x / 2, -wh.y / 2, wh.x, wh.y);
    ctx.restore();
    return this;
  },

  drawBorders: function drawBorders(ctx, styleOverride) {
    styleOverride = styleOverride || {};
    var wh = this._calculateCurrentDimensions(),
        strokeWidth = this.borderScaleFactor,
        width = wh.x + strokeWidth,
        height = wh.y + strokeWidth,
        hasControls = typeof styleOverride.hasControls !== 'undefined' ? styleOverride.hasControls : this.hasControls,
        shouldStroke = false;

    ctx.save();
    ctx.strokeStyle = styleOverride.borderColor || this.borderColor;
    this._setLineDash(ctx, styleOverride.borderDashArray || this.borderDashArray, null);
    // console.log('---------drawBorders', this.left, this.top)
    ctx.strokeRect(-width / 2, -height / 2,
    // this.left,
    // this.top,
    width, height);

    if (hasControls) {
      ctx.beginPath();
      this.forEachControl(function (control, key, object) {
        if (control.withConnection && control.getVisibility(object, key)) {
          // reset movement for each control
          shouldStroke = true;
          ctx.moveTo(control.x * width, control.y * height);
          ctx.lineTo(control.x * width + control.offsetX, control.y * height + control.offsetY);
        }
      });
      if (shouldStroke) {
        ctx.stroke();
      }
    }
    ctx.restore();
    return this;
  },

  drawBordersInGroup: function drawBordersInGroup(ctx, options, styleOverride) {
    styleOverride = styleOverride || {};
    var bbox = sizeAfterTransform(this.width, this.height, options),
        strokeWidth = this.strokeWidth,
        strokeUniform = this.strokeUniform,
        borderScaleFactor = this.borderScaleFactor,
        width = bbox.x + strokeWidth * (strokeUniform ? this.canvas.getZoom() : options.scaleX) + borderScaleFactor,
        height = bbox.y + strokeWidth * (strokeUniform ? this.canvas.getZoom() : options.scaleY) + borderScaleFactor;
    ctx.save();
    this._setLineDash(ctx, styleOverride.borderDashArray || this.borderDashArray, null);
    ctx.strokeStyle = styleOverride.borderColor || this.borderColor;
    ctx.strokeRect(-width / 2, -height / 2,
    // this.left,
    // this.top,
    width, height);

    ctx.restore();
    return this;
  },

  drawControls: function drawControls(ctx, styleOverride) {
    styleOverride = styleOverride || {};
    ctx.save();
    ctx.setTransform(this.canvas.getRetinaScaling(), 0, 0, this.canvas.getRetinaScaling(), 0, 0);
    ctx.strokeStyle = ctx.fillStyle = styleOverride.cornerColor || this.cornerColor;
    if (!this.transparentCorners) {
      ctx.strokeStyle = styleOverride.cornerStrokeColor || this.cornerStrokeColor;
    }
    this._setLineDash(ctx, styleOverride.cornerDashArray || this.cornerDashArray, null);
    this.setCoords();
    this.forEachControl(function (control, key, object) {
      if (control.getVisibility(object, key)) {
        control.render(ctx, object.oCoords[key].x, object.oCoords[key].y, styleOverride, object);
      }
    });
    ctx.restore();

    return this;
  },

  isControlVisible: function isControlVisible(controlKey) {
    return this.controls[controlKey] && this.controls[controlKey].getVisibility(this, controlKey);
  },

  setControlVisible: function setControlVisible(controlKey, visible) {
    if (!this._controlsVisibility) {
      this._controlsVisibility = {};
    }
    this._controlsVisibility[controlKey] = visible;
    return this;
  },

  setControlsVisibility: function setControlsVisibility(options) {
    options || (options = {});

    for (var p in options) {
      this.setControlVisible(p, options[p]);
    }
    return this;
  },

  onDeselect: function onDeselect() {},

  onSelect: function onSelect() {}
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by Sugar on 2020/5/30.
 */

var PointClass = __webpack_require__(3);
var IntersectionClass = __webpack_require__(25);

var _require = __webpack_require__(2),
    degreesToRadians = _require.degreesToRadians,
    multiplyTransformMatrices = _require.multiplyTransformMatrices,
    transformPoint = _require.transformPoint,
    calcDimensionsMatrix = _require.calcDimensionsMatrix,
    sizeAfterTransform = _require.sizeAfterTransform,
    makeBoundingBoxFromPoints = _require.makeBoundingBoxFromPoints,
    cos = _require.cos,
    sin = _require.sin,
    calcRotateMatrix = _require.calcRotateMatrix,
    composeMatrix = _require.composeMatrix;

function arrayFromCoords(coords) {
  return [new PointClass(coords.tl.x, coords.tl.y), new PointClass(coords.tr.x, coords.tr.y), new PointClass(coords.br.x, coords.br.y), new PointClass(coords.bl.x, coords.bl.y)];
}

module.exports = {
  oCoords: null,
  aCoords: null,
  lineCoords: null,
  ownMatrixCache: null,
  matrixCache: null,
  controls: {},
  _getCoords: function _getCoords(absolute, calculate) {
    if (calculate) {
      return absolute ? this.calcACoords() : this.calcLineCoords();
    }
    if (!this.aCoords || !this.lineCoords) {
      this.setCoords(true);
    }
    return absolute ? this.aCoords : this.lineCoords;
  },

  getCoords: function getCoords(absolute, calculate) {
    return arrayFromCoords(this._getCoords(absolute, calculate));
  },

  intersectsWithRect: function intersectsWithRect(pointTL, pointBR, absolute, calculate) {
    var coords = this.getCoords(absolute, calculate),
        intersection = IntersectionClass.intersectPolygonRectangle(coords, pointTL, pointBR);
    return intersection.status === 'Intersection';
  },

  intersectsWithObject: function intersectsWithObject(other, absolute, calculate) {
    var intersection = IntersectionClass.intersectPolygonPolygon(this.getCoords(absolute, calculate), other.getCoords(absolute, calculate));

    return intersection.status === 'Intersection' || other.isContainedWithinObject(this, absolute, calculate) || this.isContainedWithinObject(other, absolute, calculate);
  },

  isContainedWithinObject: function isContainedWithinObject(other, absolute, calculate) {
    var points = this.getCoords(absolute, calculate),
        otherCoords = absolute ? other.aCoords : other.lineCoords,
        i = 0,
        lines = other._getImageLines(otherCoords);
    for (; i < 4; i++) {
      if (!other.containsPoint(points[i], lines)) {
        return false;
      }
    }
    return true;
  },

  isContainedWithinRect: function isContainedWithinRect(pointTL, pointBR, absolute, calculate) {
    var boundingRect = this.getBoundingRect(absolute, calculate);

    return boundingRect.left >= pointTL.x && boundingRect.left + boundingRect.width <= pointBR.x && boundingRect.top >= pointTL.y && boundingRect.top + boundingRect.height <= pointBR.y;
  },

  containsPoint: function containsPoint(point, lines, absolute, calculate) {
    var coords = this._getCoords(absolute, calculate);
    var l = lines || this._getImageLines(coords);
    var xPoints = this._findCrossPoints(point, l);
    return xPoints !== 0 && xPoints % 2 === 1;
  },

  isOnScreen: function isOnScreen(calculate) {
    if (!this.canvas) {
      return false;
    }
    var pointTL = this.canvas.vptCoords.tl,
        pointBR = this.canvas.vptCoords.br;
    var points = this.getCoords(true, calculate),
        point = void 0;
    for (var i = 0; i < 4; i++) {
      point = points[i];
      if (point.x <= pointBR.x && point.x >= pointTL.x && point.y <= pointBR.y && point.y >= pointTL.y) {
        return true;
      }
    }
    // no points on screen, check intersection with absolute coordinates
    if (this.intersectsWithRect(pointTL, pointBR, true, calculate)) {
      return true;
    }
    return this._containsCenterOfCanvas(pointTL, pointBR, calculate);
  },

  _containsCenterOfCanvas: function _containsCenterOfCanvas(pointTL, pointBR, calculate) {
    // worst case scenario the object is so big that contains the screen
    var centerPoint = { x: (pointTL.x + pointBR.x) / 2, y: (pointTL.y + pointBR.y) / 2 };
    if (this.containsPoint(centerPoint, null, true, calculate)) {
      return true;
    }
    return false;
  },

  isPartiallyOnScreen: function isPartiallyOnScreen(calculate) {
    if (!this.canvas) {
      return false;
    }
    var pointTL = this.canvas.vptCoords.tl,
        pointBR = this.canvas.vptCoords.br;
    if (this.intersectsWithRect(pointTL, pointBR, true, calculate)) {
      return true;
    }
    return this._containsCenterOfCanvas(pointTL, pointBR, calculate);
  },

  _getImageLines: function _getImageLines(oCoords) {

    var lines = {
      topline: {
        o: oCoords.tl,
        d: oCoords.tr
      },
      rightline: {
        o: oCoords.tr,
        d: oCoords.br
      },
      bottomline: {
        o: oCoords.br,
        d: oCoords.bl
      },
      leftline: {
        o: oCoords.bl,
        d: oCoords.tl
      }
    };

    // // debugging
    // if (this.canvas.contextTop) {
    //   this.canvas.contextTop.fillRect(lines.bottomline.d.x, lines.bottomline.d.y, 2, 2);
    //   this.canvas.contextTop.fillRect(lines.bottomline.o.x, lines.bottomline.o.y, 2, 2);
    //
    //   this.canvas.contextTop.fillRect(lines.leftline.d.x, lines.leftline.d.y, 2, 2);
    //   this.canvas.contextTop.fillRect(lines.leftline.o.x, lines.leftline.o.y, 2, 2);
    //
    //   this.canvas.contextTop.fillRect(lines.topline.d.x, lines.topline.d.y, 2, 2);
    //   this.canvas.contextTop.fillRect(lines.topline.o.x, lines.topline.o.y, 2, 2);
    //
    //   this.canvas.contextTop.fillRect(lines.rightline.d.x, lines.rightline.d.y, 2, 2);
    //   this.canvas.contextTop.fillRect(lines.rightline.o.x, lines.rightline.o.y, 2, 2);
    // }

    return lines;
  },

  _findCrossPoints: function _findCrossPoints(point, lines) {
    var b1 = void 0,
        b2 = void 0,
        a1 = void 0,
        a2 = void 0,
        xi = void 0,
        // yi,
    xcount = 0,
        iLine = void 0;

    for (var lineKey in lines) {
      iLine = lines[lineKey];
      // optimisation 1: line below point. no cross
      if (iLine.o.y < point.y && iLine.d.y < point.y) {
        continue;
      }
      // optimisation 2: line above point. no cross
      if (iLine.o.y >= point.y && iLine.d.y >= point.y) {
        continue;
      }
      // optimisation 3: vertical line case
      if (iLine.o.x === iLine.d.x && iLine.o.x >= point.x) {
        xi = iLine.o.x;
        // yi = point.y;
      }
      // calculate the intersection point
      else {
          b1 = 0;
          b2 = (iLine.d.y - iLine.o.y) / (iLine.d.x - iLine.o.x);
          a1 = point.y - b1 * point.x;
          a2 = iLine.o.y - b2 * iLine.o.x;

          xi = -(a1 - a2) / (b1 - b2);
          // yi = a1 + b1 * xi;
        }
      // dont count xi < point.x cases
      if (xi >= point.x) {
        xcount += 1;
      }
      // optimisation 4: specific for square images
      if (xcount === 2) {
        break;
      }
    }
    return xcount;
  },

  getBoundingRect: function getBoundingRect(absolute, calculate) {
    var coords = this.getCoords(absolute, calculate);
    return makeBoundingBoxFromPoints(coords);
  },

  getScaledWidth: function getScaledWidth() {
    return this._getTransformedDimensions().x;
  },

  getScaledHeight: function getScaledHeight() {
    return this._getTransformedDimensions().y;
  },

  _constrainScale: function _constrainScale(value) {
    if (Math.abs(value) < this.minScaleLimit) {
      if (value < 0) {
        return -this.minScaleLimit;
      } else {
        return this.minScaleLimit;
      }
    } else if (value === 0) {
      return 0.0001;
    }
    return value;
  },

  scale: function scale(value) {
    this._set('scaleX', value);
    this._set('scaleY', value);
    return this.setCoords();
  },

  scaleToWidth: function scaleToWidth(value, absolute) {
    // adjust to bounding rect factor so that rotated shapes would fit as well
    var boundingRectFactor = this.getBoundingRect(absolute).width / this.getScaledWidth();
    return this.scale(value / this.width / boundingRectFactor);
  },

  scaleToHeight: function scaleToHeight(value, absolute) {
    // adjust to bounding rect factor so that rotated shapes would fit as well
    var boundingRectFactor = this.getBoundingRect(absolute).height / this.getScaledHeight();
    return this.scale(value / this.height / boundingRectFactor);
  },

  calcCoords: function calcCoords(absolute) {
    // this is a compatibility function to avoid removing calcCoords now.
    if (absolute) {
      return this.calcACoords();
    }
    return this.calcOCoords();
  },

  calcLineCoords: function calcLineCoords() {
    var vpt = this.getViewportTransform(),
        padding = this.padding,
        angle = degreesToRadians(this.angle),
        c = cos(angle),
        s = sin(angle),
        cosP = c * padding,
        sinP = s * padding,
        cosPSinP = cosP + sinP,
        cosPMinusSinP = cosP - sinP,
        aCoords = this.calcACoords();

    var lineCoords = {
      tl: transformPoint(aCoords.tl, vpt),
      tr: transformPoint(aCoords.tr, vpt),
      bl: transformPoint(aCoords.bl, vpt),
      br: transformPoint(aCoords.br, vpt)
    };

    if (padding) {
      lineCoords.tl.x -= cosPMinusSinP;
      lineCoords.tl.y -= cosPSinP;
      lineCoords.tr.x += cosPSinP;
      lineCoords.tr.y -= cosPMinusSinP;
      lineCoords.bl.x -= cosPSinP;
      lineCoords.bl.y += cosPMinusSinP;
      lineCoords.br.x += cosPMinusSinP;
      lineCoords.br.y += cosPSinP;
    }

    return lineCoords;
  },

  calcOCoords: function calcOCoords() {
    var rotateMatrix = this._calcRotateMatrix(),
        translateMatrix = this._calcTranslateMatrix(),
        vpt = this.getViewportTransform(),
        startMatrix = multiplyTransformMatrices(vpt, translateMatrix),
        finalMatrix = multiplyTransformMatrices(startMatrix, rotateMatrix),
        finalMatrix = multiplyTransformMatrices(finalMatrix, [1 / vpt[0], 0, 0, 1 / vpt[3], 0, 0]),
        dim = this._calculateCurrentDimensions(),
        coords = {};
    this.forEachControl(function (control, key, object) {
      coords[key] = control.positionHandler(dim, finalMatrix, object);
    });

    // debug code
    // let canvas = this.canvas;
    // setTimeout(function() {
    //   canvas.contextTop.clearRect(0, 0, 700, 700);
    //   canvas.contextTop.fillStyle = 'green';
    //   Object.keys(coords).forEach(function(key) {
    //     let control = coords[key];
    //     canvas.contextTop.fillRect(control.x, control.y, 3, 3);
    //   });
    // }, 50);
    return coords;
  },

  calcACoords: function calcACoords() {
    var rotateMatrix = this._calcRotateMatrix(),
        translateMatrix = this._calcTranslateMatrix(),
        finalMatrix = multiplyTransformMatrices(translateMatrix, rotateMatrix),
        dim = this._getTransformedDimensions(),
        w = dim.x / 2,
        h = dim.y / 2;
    return {
      // corners
      tl: transformPoint({ x: -w, y: -h }, finalMatrix),
      tr: transformPoint({ x: w, y: -h }, finalMatrix),
      bl: transformPoint({ x: -w, y: h }, finalMatrix),
      br: transformPoint({ x: w, y: h }, finalMatrix)
    };
  },

  setCoords: function setCoords(skipCorners) {
    this.aCoords = this.calcACoords();
    this.lineCoords = this.calcLineCoords();
    if (skipCorners) {
      return this;
    }
    // set coordinates of the draggable boxes in the corners used to scale/rotate the image
    this.oCoords = this.calcOCoords();
    this._setCornerCoords && this._setCornerCoords();
    return this;
  },

  _calcRotateMatrix: function _calcRotateMatrix() {
    return calcRotateMatrix(this);
  },

  _calcTranslateMatrix: function _calcTranslateMatrix() {
    var center = this.getCenterPoint();
    return [1, 0, 0, 1, center.x, center.y];
  },

  transformMatrixKey: function transformMatrixKey(skipGroup) {
    var sep = '_',
        prefix = '';
    if (!skipGroup && this.group) {
      prefix = this.group.transformMatrixKey(skipGroup) + sep;
    }
    ;
    return prefix + this.top + sep + this.left + sep + this.scaleX + sep + this.scaleY + sep + this.skewX + sep + this.skewY + sep + this.angle + sep + this.originX + sep + this.originY + sep + this.width + sep + this.height + sep + this.strokeWidth + this.flipX + this.flipY;
  },

  calcTransformMatrix: function calcTransformMatrix(skipGroup) {
    var matrix = this.calcOwnMatrix();
    if (skipGroup || !this.group) {
      return matrix;
    }
    var key = this.transformMatrixKey(skipGroup),
        cache = this.matrixCache || (this.matrixCache = {});
    if (cache.key === key) {
      return cache.value;
    }
    if (this.group) {
      matrix = multiplyTransformMatrices(this.group.calcTransformMatrix(false), matrix);
    }
    cache.key = key;
    cache.value = matrix;
    return matrix;
  },

  calcOwnMatrix: function calcOwnMatrix() {
    var key = this.transformMatrixKey(true),
        cache = this.ownMatrixCache || (this.ownMatrixCache = {});
    if (cache.key === key) {
      return cache.value;
    }
    var tMatrix = this._calcTranslateMatrix(),
        options = {
      angle: this.angle,
      translateX: tMatrix[4],
      translateY: tMatrix[5],
      scaleX: this.scaleX,
      scaleY: this.scaleY,
      skewX: this.skewX,
      skewY: this.skewY,
      flipX: this.flipX,
      flipY: this.flipY
    };
    cache.key = key;
    cache.value = composeMatrix(options);
    return cache.value;
  },

  _calcDimensionsTransformMatrix: function _calcDimensionsTransformMatrix(skewX, skewY, flipping) {
    return calcDimensionsMatrix({
      skewX: skewX,
      skewY: skewY,
      scaleX: this.scaleX * (flipping && this.flipX ? -1 : 1),
      scaleY: this.scaleY * (flipping && this.flipY ? -1 : 1)
    });
  },

  _getNonTransformedDimensions: function _getNonTransformedDimensions() {
    var strokeWidth = this.strokeWidth,
        w = this.width + strokeWidth,
        h = this.height + strokeWidth;
    return { x: w, y: h };
  },

  _getTransformedDimensions: function _getTransformedDimensions(skewX, skewY) {
    if (typeof skewX === 'undefined') {
      skewX = this.skewX;
    }
    if (typeof skewY === 'undefined') {
      skewY = this.skewY;
    }
    var dimensions = this._getNonTransformedDimensions(),
        dimX = void 0,
        dimY = void 0,
        noSkew = skewX === 0 && skewY === 0;

    if (this.strokeUniform) {
      dimX = this.width;
      dimY = this.height;
    } else {
      dimX = dimensions.x;
      dimY = dimensions.y;
    }
    if (noSkew) {
      return this._finalizeDimensions(dimX * this.scaleX, dimY * this.scaleY);
    }
    var bbox = sizeAfterTransform(dimX, dimY, {
      scaleX: this.scaleX,
      scaleY: this.scaleY,
      skewX: skewX,
      skewY: skewY
    });
    return this._finalizeDimensions(bbox.x, bbox.y);
  },

  _finalizeDimensions: function _finalizeDimensions(width, height) {
    return this.strokeUniform ? { x: width + this.strokeWidth, y: height + this.strokeWidth } : { x: width, y: height };
  },

  _calculateCurrentDimensions: function _calculateCurrentDimensions() {
    var vpt = this.getViewportTransform(),
        dim = this._getTransformedDimensions(),
        p = transformPoint(dim, vpt, true);
    return p.scalarAdd(2 * this.padding);
  }
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Sugar on 2020/5/30.
 */
var PointClass = __webpack_require__(3);

var IntersectionClass = function () {
  function IntersectionClass(status) {
    _classCallCheck(this, IntersectionClass);

    this.status = status;
    this.points = [];
  }

  IntersectionClass.prototype.appendPoint = function appendPoint(point) {
    this.points.push(point);
    return this;
  };

  IntersectionClass.prototype.appendPoints = function appendPoints(points) {
    this.points = this.points.concat(points);
    return this;
  };

  return IntersectionClass;
}();

IntersectionClass.intersectLineLine = function (a1, a2, b1, b2) {
  var result = void 0,
      uaT = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x),
      ubT = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x),
      uB = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
  if (uB !== 0) {
    var ua = uaT / uB,
        ub = ubT / uB;
    if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
      result = new IntersectionClass('Intersection');
      result.appendPoint(new PointClass(a1.x + ua * (a2.x - a1.x), a1.y + ua * (a2.y - a1.y)));
    } else {
      result = new Intersection();
    }
  } else {
    if (uaT === 0 || ubT === 0) {
      result = new IntersectionClass('Coincident');
    } else {
      result = new IntersectionClass('Parallel');
    }
  }
  return result;
};

IntersectionClass.intersectLinePolygon = function (a1, a2, points) {
  var result = new IntersectionClass(),
      length = points.length,
      b1 = void 0,
      b2 = void 0,
      inter = void 0,
      i = void 0;

  for (i = 0; i < length; i++) {
    b1 = points[i];
    b2 = points[(i + 1) % length];
    inter = IntersectionClass.intersectLineLine(a1, a2, b1, b2);

    result.appendPoints(inter.points);
  }
  if (result.points.length > 0) {
    result.status = 'Intersection';
  }
  return result;
};

IntersectionClass.intersectPolygonPolygon = function (points1, points2) {
  var result = new IntersectionClass(),
      length = points1.length,
      i = void 0;

  for (i = 0; i < length; i++) {
    var a1 = points1[i],
        a2 = points1[(i + 1) % length],
        inter = IntersectionClass.intersectLinePolygon(a1, a2, points2);

    result.appendPoints(inter.points);
  }
  if (result.points.length > 0) {
    result.status = 'Intersection';
  }
  return result;
};

IntersectionClass.intersectPolygonRectangle = function (points, r1, r2) {
  var min = r1.min(r2),
      max = r1.max(r2),
      topRight = new PointClass(max.x, min.y),
      bottomLeft = new PointClass(min.x, max.y),
      inter1 = IntersectionClass.intersectLinePolygon(min, topRight, points),
      inter2 = IntersectionClass.intersectLinePolygon(topRight, max, points),
      inter3 = IntersectionClass.intersectLinePolygon(max, bottomLeft, points),
      inter4 = IntersectionClass.intersectLinePolygon(bottomLeft, min, points),
      result = new IntersectionClass();

  result.appendPoints(inter1.points);
  result.appendPoints(inter2.points);
  result.appendPoints(inter3.points);
  result.appendPoints(inter4.points);

  if (result.points.length > 0) {
    result.status = 'Intersection';
  }
  return result;
};

module.exports = IntersectionClass;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by Sugar on 2020/5/27.
 */
var _require = __webpack_require__(4),
    extend = _require.extend;

module.exports = {
  isEmptyStyles: function isEmptyStyles(lineIndex) {
    if (!this.styles) {
      return true;
    }
    if (typeof lineIndex !== 'undefined' && !this.styles[lineIndex]) {
      return true;
    }
    var obj = typeof lineIndex === 'undefined' ? this.styles : { line: this.styles[lineIndex] };
    for (var p1 in obj) {
      for (var p2 in obj[p1]) {
        for (var p3 in obj[p1][p2]) {
          return false;
        }
      }
    }
    return true;
  },
  styleHas: function styleHas(property, lineIndex) {
    if (!this.styles || !property || property === '') {
      return false;
    }
    if (typeof lineIndex !== 'undefined' && !this.styles[lineIndex]) {
      return false;
    }
    var obj = typeof lineIndex === 'undefined' ? this.styles : { 0: this.styles[lineIndex] };
    for (var p1 in obj) {
      for (var p2 in obj[p1]) {
        if (typeof obj[p1][p2][property] !== 'undefined') {
          return true;
        }
      }
    }
    return false;
  },
  cleanStyle: function cleanStyle(property) {
    if (!this.styles || !property || property === '') {
      return false;
    }
    var obj = this.styles,
        stylesCount = 0,
        letterCount = void 0,
        stylePropertyValue = void 0,
        allStyleObjectPropertiesMatch = true,
        graphemeCount = 0,
        styleObject = void 0;
    // eslint-disable-next-line
    for (var p1 in obj) {
      letterCount = 0;
      // eslint-disable-next-line
      for (var p2 in obj[p1]) {
        var _styleObject = obj[p1][p2],
            stylePropertyHasBeenSet = _styleObject.hasOwnProperty(property);

        stylesCount++;

        if (stylePropertyHasBeenSet) {
          if (!stylePropertyValue) {
            stylePropertyValue = _styleObject[property];
          } else if (_styleObject[property] !== stylePropertyValue) {
            allStyleObjectPropertiesMatch = false;
          }

          if (_styleObject[property] === this[property]) {
            delete _styleObject[property];
          }
        } else {
          allStyleObjectPropertiesMatch = false;
        }

        if (Object.keys(_styleObject).length !== 0) {
          letterCount++;
        } else {
          delete obj[p1][p2];
        }
      }

      if (letterCount === 0) {
        delete obj[p1];
      }
    }
    for (var _i = 0; _i < this._textLines.length; _i++) {
      graphemeCount += this._textLines[_i].length;
    }
    if (allStyleObjectPropertiesMatch && stylesCount === graphemeCount) {
      this[property] = stylePropertyValue;
      this.removeStyle(property);
    }
  },
  removeStyle: function removeStyle(property) {
    if (!this.styles || !property || property === '') {
      return;
    }
    var obj = this.styles,
        line = void 0,
        lineNum = void 0,
        charNum = void 0;
    for (lineNum in obj) {
      line = obj[lineNum];
      for (charNum in line) {
        delete line[charNum][property];
        if (Object.keys(line[charNum]).length === 0) {
          delete line[charNum];
        }
      }
      if (Object.keys(line).length === 0) {
        delete obj[lineNum];
      }
    }
  },
  _extendStyles: function _extendStyles(index, styles) {
    var loc = this.get2DCursorLocation(index);

    if (!this._getLineStyle(loc.lineIndex)) {
      this._setLineStyle(loc.lineIndex);
    }

    if (!this._getStyleDeclaration(loc.lineIndex, loc.charIndex)) {
      this._setStyleDeclaration(loc.lineIndex, loc.charIndex, {});
    }

    extend(this._getStyleDeclaration(loc.lineIndex, loc.charIndex), styles);
  },
  get2DCursorLocation: function get2DCursorLocation(selectionStart, skipWrapping) {
    if (typeof selectionStart === 'undefined') {
      selectionStart = this.selectionStart;
    }
    var lines = skipWrapping ? this._unwrappedTextLines : this._textLines,
        len = lines.length;
    for (var _i2 = 0; _i2 < len; _i2++) {
      if (selectionStart <= lines[_i2].length) {
        return {
          lineIndex: _i2,
          charIndex: selectionStart
        };
      }
      selectionStart -= lines[_i2].length + this.missingNewlineOffset(_i2);
    }
    return {
      lineIndex: i - 1,
      charIndex: lines[i - 1].length < selectionStart ? lines[i - 1].length : selectionStart
    };
  },
  getSelectionStyles: function getSelectionStyles(startIndex, endIndex, complete) {
    if (typeof startIndex === 'undefined') {
      startIndex = this.selectionStart || 0;
    }
    if (typeof endIndex === 'undefined') {
      endIndex = this.selectionEnd || startIndex;
    }
    var styles = [];
    for (var _i3 = startIndex; _i3 < endIndex; _i3++) {
      styles.push(this.getStyleAtPosition(_i3, complete));
    }
    return styles;
  },
  getStyleAtPosition: function getStyleAtPosition(position, complete) {
    var loc = this.get2DCursorLocation(position),
        style = complete ? this.getCompleteStyleDeclaration(loc.lineIndex, loc.charIndex) : this._getStyleDeclaration(loc.lineIndex, loc.charIndex);
    return style || {};
  },
  setSelectionStyles: function setSelectionStyles(styles, startIndex, endIndex) {
    if (typeof startIndex === 'undefined') {
      startIndex = this.selectionStart || 0;
    }
    if (typeof endIndex === 'undefined') {
      endIndex = this.selectionEnd || startIndex;
    }
    for (var _i4 = startIndex; _i4 < endIndex; _i4++) {
      this._extendStyles(_i4, styles);
    }
    this._forceClearCache = true;
    return this;
  },
  _getStyleDeclaration: function _getStyleDeclaration(lineIndex, charIndex) {
    var lineStyle = this.styles && this.styles[lineIndex];
    if (!lineStyle) {
      return null;
    }
    return lineStyle[charIndex];
  },
  getCompleteStyleDeclaration: function getCompleteStyleDeclaration(lineIndex, charIndex) {
    var style = this._getStyleDeclaration(lineIndex, charIndex) || {},
        styleObject = {},
        prop = void 0;
    for (var _i5 = 0; _i5 < this._styleProperties.length; _i5++) {
      prop = this._styleProperties[_i5];
      styleObject[prop] = typeof style[prop] === 'undefined' ? this[prop] : style[prop];
    }
    return styleObject;
  },
  _setStyleDeclaration: function _setStyleDeclaration(lineIndex, charIndex, style) {
    this.styles[lineIndex][charIndex] = style;
  },
  _deleteStyleDeclaration: function _deleteStyleDeclaration(lineIndex, charIndex) {
    delete this.styles[lineIndex][charIndex];
  },
  _getLineStyle: function _getLineStyle(lineIndex) {
    return !!this.styles[lineIndex];
  },
  _setLineStyle: function _setLineStyle(lineIndex) {
    this.styles[lineIndex] = {};
  },
  _deleteLineStyle: function _deleteLineStyle(lineIndex) {
    delete this.styles[lineIndex];
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=sugarjs.js.map