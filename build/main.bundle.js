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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/App.js */ "./js/App.js");


document.addEventListener('DOMContentLoaded', function () {
	var mainBlock = document.getElementById('olSnow');

	var canvas = document.createElement('canvas');
	canvas.setAttribute('id', 'olSnowCanvas');
	canvas.setAttribute('width', window.innerWidth);
	canvas.setAttribute('height', window.innerHeight);

	mainBlock.append(canvas);

	var settings = {
		el: canvas,
		frameRate: 20,
		countUnits: 20,
		unitSpreading: { min: -15, max: 20 },
		color: '222,122,0'
	};

	var app = new _js_App_js__WEBPACK_IMPORTED_MODULE_0__["default"](settings);
	app.run();
});

/***/ }),

/***/ "./js/App.js":
/*!*******************!*\
  !*** ./js/App.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Unit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit.js */ "./js/Unit.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./js/Utils.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var app = void 0;

app = function () {
    function App(settings) {
        _classCallCheck(this, App);

        this.units = [];
        this.options = {};

        this.options = settings;

        this.options.elWidth = settings.el.offsetWidth;
        this.options.elHeight = settings.el.offsetHeight;
        this.options.unitsCount = 0;
        this.options.unitSpreading.min = -15;
        this.options.unitSpreading.max = 20;

        this.options.color = settings.color !== '' ? settings.color : '0, 0, 0';

        this.ctx = this.options.el.getContext("2d");

        this.generateUnits();
    }

    _createClass(App, [{
        key: "run",
        value: function run() {
            var _this_o = this;

            setInterval(function () {
                _this_o.clearCtx();

                _this_o.updateUnitsCount();

                _this_o.render();
            }, _this_o.options.frameRate);
        }
    }, {
        key: "render",
        value: function render() {
            for (var id = 0; id < this.getUnitsCount(); id++) {
                var unit = this.getUnit(id);

                if (unit.isDead()) {
                    this.removeUnit(id);
                    this.createUnit();
                } else {

                    unit.move();
                    unit.render(this.ctx);
                }
            }
        }
    }, {
        key: "clearCtx",
        value: function clearCtx() {
            this.ctx.clearRect(0, 0, this.options.elWidth, this.options.elHeight);
        }

        // Generate FirstPoolUnits

    }, {
        key: "generateUnits",
        value: function generateUnits() {
            for (var id = 0; id < this.options.countUnits; id++) {
                this.addUnit(this.generateUnit(id));
            }

            this.updateUnitsCount();
        }
    }, {
        key: "generateUnit",
        value: function generateUnit(id) {
            return new _Unit_js__WEBPACK_IMPORTED_MODULE_0__["default"](id, this.options);
        }
    }, {
        key: "getUnit",
        value: function getUnit(id) {
            return this.units[id];
        }
    }, {
        key: "createUnit",
        value: function createUnit() {
            var countUnits = this.getUnitsCount();
            var newUnit = this.generateUnit(countUnits);
            this.addUnit(newUnit);
        }
    }, {
        key: "addUnit",
        value: function addUnit(unit) {
            this.units.push(unit);
        }
    }, {
        key: "removeUnit",
        value: function removeUnit(id) {
            delete this.units[id];
            this.units.splice(id, 1);
        }
    }, {
        key: "issetUnit",
        value: function issetUnit() {}
    }, {
        key: "updateUnitsCount",
        value: function updateUnitsCount() {
            this.options.unitsCount = this.getUnitsCount();
        }
    }, {
        key: "getUnitsCount",
        value: function getUnitsCount() {
            return this.units.length;
        }
    }]);

    return App;
}();
/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./js/Unit.js":
/*!********************!*\
  !*** ./js/Unit.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils.js */ "./js/Utils.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Unit = function () {
    function Unit(id, options) {
        _classCallCheck(this, Unit);

        this.id = id;

        this.life = _Utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].getRndInteger(15, 100);
        this.speed = _Utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].getRndFloat();
        this.opacity = _Utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].getRndInteger(0, 90);

        this.y = _Utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].getRndInteger(-50, options.elHeight);
        this.x = _Utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].getRndInteger(0, options.elWidth);

        this.size = _Utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].getRndInteger(2, 7);

        this.spreading = {
            min: _Utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].getRndInteger(options.unitSpreading.min, 0),
            max: _Utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].getRndInteger(0, options.unitSpreading.max)
        };

        this.color = options.color !== '' ? options.color : '0, 0, 0';
    }

    _createClass(Unit, [{
        key: 'subLife',
        value: function subLife(value) {
            var life = this.getLife();
            var newLifeValue = life - value;
            this.setLife(newLifeValue);
        }
    }, {
        key: 'getLife',
        value: function getLife() {
            return this.life;
        }
    }, {
        key: 'setLife',
        value: function setLife(value) {
            this.life = value;
        }
    }, {
        key: 'setID',
        value: function setID(id) {
            this.id = id;
        }
    }, {
        key: 'getID',
        value: function getID(id) {
            return this.id;
        }
    }, {
        key: 'getOpacity',
        value: function getOpacity() {
            return this.opacity;
        }
    }, {
        key: 'setOpacity',
        value: function setOpacity(value) {
            this.opacity = value;
        }
    }, {
        key: 'getSpeed',
        value: function getSpeed() {
            return this.speed;
        }
    }, {
        key: 'setSpeed',
        value: function setSpeed(value) {
            this.speed = value;
        }
    }, {
        key: 'getSize',
        value: function getSize() {
            return this.size;
        }
    }, {
        key: 'setSize',
        value: function setSize(value) {
            this.size = value;
        }
    }, {
        key: 'getY',
        value: function getY() {
            return this.y;
        }
    }, {
        key: 'setY',
        value: function setY(value) {
            this.y = value;
        }
    }, {
        key: 'getX',
        value: function getX() {
            return this.x;
        }
    }, {
        key: 'setX',
        value: function setX(value) {
            this.x = value;
        }
    }, {
        key: 'isDead',
        value: function isDead() {
            var life = this.getLife();
            var opacity = this.getOpacity();

            if (!life || !opacity) {
                return true;
            }
            return false;
        }

        // --------------

    }, {
        key: 'move',
        value: function move() {
            var y = this.getY(),
                x = this.getX();

            var life = this.getLife();
            var speed = this.getSpeed();
            var opacity = this.getOpacity();

            if (life) {
                this.setOpacity(parseInt(opacity - speed));
                this.subLife(speed);
            }

            y += speed;

            this.setY(y);
        }
    }, {
        key: 'unitDraw',
        value: function unitDraw(ctx) {
            var y = this.getY(),
                x = this.getX(),
                size = this.getSize();

            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2, true);
            ctx.fillStyle = "rgba(" + this.color + ", 0." + this.opacity + ")";
            ctx.fill();
        }
    }, {
        key: 'render',
        value: function render(ctx) {
            this.unitDraw(ctx);
        }
    }]);

    return Unit;
}();

/* harmony default export */ __webpack_exports__["default"] = (Unit);

/***/ }),

/***/ "./js/Utils.js":
/*!*********************!*\
  !*** ./js/Utils.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
	getRndInteger: function getRndInteger(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	getRndFloat: function getRndFloat() {
		return parseFloat(Math.random().toFixed(2));
	}
});

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map