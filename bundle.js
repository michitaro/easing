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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var easing = __webpack_require__(2);
window.addEventListener('load', function (e) {
    var fs = [
        easing.linear,
        easing.fastStart2, easing.fastStart4,
        easing.slowStart2, easing.slowStart4,
        easing.slowStartStop2,
        easing.slowStartStop4,
    ];
    for (var _i = 0, fs_1 = fs; _i < fs_1.length; _i++) {
        var f = fs_1[_i];
        var box = document.createElement('div');
        box.className = 'box';
        var title = document.createElement('h2');
        title.innerHTML = f.name;
        var canvas = document.createElement('canvas');
        drawFunction(canvas, f);
        box.appendChild(title);
        box.appendChild(canvas);
        document.body.appendChild(box);
    }
});
function drawFunction(canvas, f) {
    function canvasCoord(x, y) {
        return [canvas.width * x, canvas.height * (1 - y)];
    }
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    for (var x = 0; x <= 1; x += 0.01) {
        var y = f(x);
        var _a = canvasCoord(x, y), X = _a[0], Y = _a[1];
        ctx.lineTo(X, Y);
    }
    ctx.stroke();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function linear(x) {
    return x;
}
exports.linear = linear;
function slowStart2(x) {
    return x * x;
}
exports.slowStart2 = slowStart2;
function fastStart2(x) {
    x = 1 - x;
    return 1 - x * x;
}
exports.fastStart2 = fastStart2;
function slowStart4(x) {
    var y = x * x;
    return y * y;
}
exports.slowStart4 = slowStart4;
function fastStart4(x) {
    x = 1 - x;
    var y = x * x;
    return 1 - y * y;
}
exports.fastStart4 = fastStart4;
function slowStartStop2(x) {
    var x2 = 1 - x;
    return x < 0.5 ? 2 * x * x : -2 * x2 * x2 + 1;
}
exports.slowStartStop2 = slowStartStop2;
function slowStartStop4(x) {
    var y = x * x;
    var x2 = 1 - x;
    var y2 = x2 * x2;
    return x < 0.5 ? 8 * y * y : -8 * y2 * y2 + 1;
}
exports.slowStartStop4 = slowStartStop4;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index.html";

/***/ })
/******/ ]);