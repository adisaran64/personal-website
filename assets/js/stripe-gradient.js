/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Attribute.js":
/*!**************************!*\
  !*** ./src/Attribute.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Attribute; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Attribute = /*#__PURE__*/function () {
  /**
   * The parent MiniGL controller.
   *
   * @type {MiniGL}
   * @private
   */

  /**
   * @param {MiniGL} minigl
   * @param {object} properties
   */
  function Attribute(minigl) {
    var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, Attribute);
    _defineProperty(this, "gl", void 0);
    _defineProperty(this, "type", void 0);
    _defineProperty(this, "buffer", void 0);
    _defineProperty(this, "normalized", false);
    // Add additional properties.
    Object.assign(this, properties);

    // Set required properties.
    this.gl = minigl;
    this.type = this.gl.getContext().FLOAT;
    this.buffer = this.gl.getContext().createBuffer();
    this.update();
  }
  _createClass(Attribute, [{
    key: "update",
    value: function update() {
      if (this.values) {
        var context = this.gl.getContext();
        context.bindBuffer(this.target, this.buffer);
        context.bufferData(this.target, this.values, context.STATIC_DRAW);
      }
    }
  }, {
    key: "attach",
    value: function attach(e, t) {
      var context = this.gl.getContext();
      var n = context.getAttribLocation(t, e);
      if (this.target === context.ARRAY_BUFFER) {
        context.enableVertexAttribArray(n);
        context.vertexAttribPointer(n, this.size, this.type, this.normalized, 0, 0);
      }
      return n;
    }
  }, {
    key: "use",
    value: function use(e) {
      var context = this.gl.getContext();
      context.bindBuffer(this.target, this.buffer);
      if (this.target === context.ARRAY_BUFFER) {
        context.enableVertexAttribArray(e);
        context.vertexAttribPointer(e, this.size, this.type, this.normalized, 0, 0);
      }
    }
  }]);
  return Attribute;
}();


/***/ }),

/***/ "./src/Material.js":
/*!*************************!*\
  !*** ./src/Material.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Material; }
/* harmony export */ });
/* harmony import */ var _Attribute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Attribute.js */ "./src/Attribute.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Material = /*#__PURE__*/function () {
  /**
   * The parent MiniGL controller.
   *
   * @type {MiniGL}
   * @private
   */

  /**
   *
   * @param {MiniGL} minigl
   * @param {object} properties
   */
  function Material(minigl, vertexShaders, fragments) {
    var uniforms = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var properties = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    _classCallCheck(this, Material);
    _defineProperty(this, "gl", void 0);
    _defineProperty(this, "uniformInstances", []);
    // Add additional properties.
    Object.assign(this, properties);

    // Set required properties.
    this.gl = minigl;
    this.uniforms = uniforms;
    var context = this.gl.getContext();
    var prefix = "\n            precision highp float;\n        ";
    this.vertexSource = "\n            ".concat(prefix, "\n            attribute vec4 position;\n            attribute vec2 uv;\n            attribute vec2 uvNorm;\n            ").concat(this._getUniformVariableDeclarations(this.gl.commonUniforms, "vertex"), "\n            ").concat(this._getUniformVariableDeclarations(uniforms, "vertex"), "\n            ").concat(vertexShaders, "\n        ");
    this.Source = "\n            ".concat(prefix, "\n            ").concat(this._getUniformVariableDeclarations(this.gl.commonUniforms, "fragment"), "\n            ").concat(this._getUniformVariableDeclarations(uniforms, "fragment"), "\n            ").concat(fragments, "\n        ");
    this.vertexShader = this._getShaderByType(context.VERTEX_SHADER, this.vertexSource);
    this.fragmentShader = this._getShaderByType(context.FRAGMENT_SHADER, this.Source);
    this.program = context.createProgram();
    context.attachShader(this.program, this.vertexShader);
    context.attachShader(this.program, this.fragmentShader);
    context.linkProgram(this.program);
    context.getProgramParameter(this.program, context.LINK_STATUS) || console.error(context.getProgramInfoLog(this.program));
    context.useProgram(this.program);
    this.attachUniforms(void 0, this.gl.commonUniforms);
    this.attachUniforms(void 0, this.uniforms);
  }
  _createClass(Material, [{
    key: "_getShaderByType",
    value: function _getShaderByType(type, source) {
      var context = this.gl.getContext();
      var shader = context.createShader(type);
      context.shaderSource(shader, source);
      context.compileShader(shader);
      if (!context.getShaderParameter(shader, context.COMPILE_STATUS)) {
        console.error(context.getShaderInfoLog(shader));
      }
      return shader;
    }
  }, {
    key: "_getUniformVariableDeclarations",
    value: function _getUniformVariableDeclarations(uniforms, type) {
      return Object.entries(uniforms).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          uniform = _ref2[0],
          value = _ref2[1];
        return value.getDeclaration(uniform, type);
      }).join("\n");
    }
  }, {
    key: "attachUniforms",
    value: function attachUniforms(name, uniforms) {
      var _this = this;
      if (!name) {
        Object.entries(uniforms).forEach(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
            name = _ref4[0],
            uniform = _ref4[1];
          _this.attachUniforms(name, uniform);
        });
      } else if (uniforms.type === 'array') {
        uniforms.value.forEach(function (uniform, i) {
          _this.attachUniforms("".concat(name, "[").concat(i, "]"), uniform);
        });
      } else if (uniforms.type === 'struct') {
        Object.entries(uniforms.value).forEach(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
            uniform = _ref6[0],
            i = _ref6[1];
          _this.attachUniforms("".concat(name, ".").concat(uniform), i);
        });
      } else {
        this.uniformInstances.push({
          uniform: uniforms,
          location: this.gl.getContext().getUniformLocation(this.program, name)
        });
      }
    }
  }]);
  return Material;
}();


/***/ }),

/***/ "./src/Mesh.js":
/*!*********************!*\
  !*** ./src/Mesh.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Mesh; }
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Mesh = /*#__PURE__*/function () {
  /**
   * The parent MiniGL controller.
   *
   * @type {MiniGL}
   * @private
   */

  /**
   * @param {MiniGL} minigl
   * @param geometry
   * @param material
   * @param {object} properties
   */
  function Mesh(minigl, geometry, material) {
    var _this = this;
    var properties = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    _classCallCheck(this, Mesh);
    _defineProperty(this, "gl", void 0);
    _defineProperty(this, "wireframe", false);
    _defineProperty(this, "attributeInstances", []);
    // Add additional properties.
    Object.assign(this, properties);

    // Set required properties.
    this.geometry = geometry;
    this.material = material;
    this.gl = minigl;

    // Build `attributeInstances` array.
    Object.entries(this.geometry.attributes).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        e = _ref2[0],
        attribute = _ref2[1];
      _this.attributeInstances.push({
        attribute: attribute,
        location: attribute.attach(e, _this.material.program)
      });
    });

    // Add mesh to MiniGL controller.
    this.gl.meshes.push(this);
  }
  _createClass(Mesh, [{
    key: "draw",
    value: function draw() {
      var context = this.gl.getContext();
      context.useProgram(this.material.program);
      this.material.uniformInstances.forEach(function (_ref3) {
        var uniform = _ref3.uniform,
          location = _ref3.location;
        uniform.update(location);
      });
      this.attributeInstances.forEach(function (_ref4) {
        var attribute = _ref4.attribute,
          location = _ref4.location;
        attribute.use(location);
      });
      var mode = this.wireframe ? context.LINES : context.TRIANGLES;
      context.drawElements(mode, this.geometry.attributes.index.values.length, context.UNSIGNED_SHORT, 0);
    }
  }, {
    key: "remove",
    value: function remove() {
      var _this2 = this;
      this.gl.meshes = this.gl.meshes.filter(function (mesh) {
        return mesh != _this2;
      });
    }
  }]);
  return Mesh;
}();


/***/ }),

/***/ "./src/MiniGL.js":
/*!***********************!*\
  !*** ./src/MiniGL.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MiniGL; }
/* harmony export */ });
/* harmony import */ var _Attribute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Attribute.js */ "./src/Attribute.js");
/* harmony import */ var _Material_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Material.js */ "./src/Material.js");
/* harmony import */ var _Mesh_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Mesh.js */ "./src/Mesh.js");
/* harmony import */ var _PlaneGeometry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlaneGeometry.js */ "./src/PlaneGeometry.js");
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Uniform.js */ "./src/Uniform.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var MiniGL = /*#__PURE__*/function () {
  /**
   * Class reference.
   *
   * @type {MiniGL}
   */

  /**
   * @type {HTMLCanvasElement}
   * @private
   */

  /**
   * @type {WebGLRenderingContext}
   * @private
   */

  /**
   * @type {object}
   */

  /**
   * @type {array}
   */

  /**
   * @param {HTMLCanvasElement} canvas
   * @param {null|Number} width
   * @param {null|Number} height
   */
  function MiniGL(canvas, width, height) {
    _classCallCheck(this, MiniGL);
    _defineProperty(this, "_class", MiniGL);
    _defineProperty(this, "_canvas", void 0);
    _defineProperty(this, "_context", void 0);
    _defineProperty(this, "commonUniforms", {});
    _defineProperty(this, "meshes", []);
    this.setCanvas(canvas);
    var matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    this.commonUniforms = {
      projectionMatrix: new _Uniform_js__WEBPACK_IMPORTED_MODULE_4__["default"](this, 'mat4', matrix),
      modelViewMatrix: new _Uniform_js__WEBPACK_IMPORTED_MODULE_4__["default"](this, 'mat4', matrix),
      resolution: new _Uniform_js__WEBPACK_IMPORTED_MODULE_4__["default"](this, 'vec2', [1, 1]),
      aspectRatio: new _Uniform_js__WEBPACK_IMPORTED_MODULE_4__["default"](this, 'float', 1)
    };
    this.setSize(width, height);
  }

  /**
   * Sets the `_canvas` and `_context` properties.
   *
   * @param {HTMLCanvasElement} canvas
   */
  _createClass(MiniGL, [{
    key: "setCanvas",
    value: function setCanvas(canvas) {
      this._canvas = canvas;
      this._context = canvas.getContext('webgl', {
        antialias: true
      });
    }

    /**
     * @return {HTMLCanvasElement}
     */
  }, {
    key: "getCanvas",
    value: function getCanvas() {
      return this._canvas;
    }

    /**
     * @return {WebGLRenderingContext}
     */
  }, {
    key: "getContext",
    value: function getContext() {
      return this._context;
    }

    /**
     * Set the canvas and viewport size.
     *
     * @param {Number} width
     * @param {Number} height
     */
  }, {
    key: "setSize",
    value: function setSize() {
      var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 640;
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 480;
      this.getCanvas().width = width;
      this.getCanvas().height = height;
      this.getContext().viewport(0, 0, width, height);
      this.commonUniforms.resolution.value = [width, height];
      this.commonUniforms.aspectRatio.value = width / height;
    }
  }, {
    key: "setOrthographicCamera",
    value: function setOrthographicCamera() {
      var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var right = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var top = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var bottom = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -2000;
      var distance = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2000;
      this.commonUniforms.projectionMatrix.value = [2 / this.getCanvas().width, 0, 0, 0, 0, 2 / this.getCanvas().height, 0, 0, 0, 0, 2 / (bottom - distance), 0, left, right, top, 1];
    }
  }, {
    key: "render",
    value: function render() {
      this.getContext().clearColor(0, 0, 0, 0);
      this.getContext().clearDepth(1);
      this.meshes.forEach(function (mesh) {
        mesh.draw();
      });
    }
  }]);
  return MiniGL;
}();


/***/ }),

/***/ "./src/PlaneGeometry.js":
/*!******************************!*\
  !*** ./src/PlaneGeometry.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PlaneGeometry; }
/* harmony export */ });
/* harmony import */ var _Attribute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Attribute.js */ "./src/Attribute.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PlaneGeometry = /*#__PURE__*/function () {
  /**
   * The parent MiniGL controller.
   *
   * @type {MiniGL}
   * @private
   */

  /**
   *
   * @param {MiniGL} minigl
   * @param width
   * @param height
   * @param n
   * @param i
   * @param orientation
   * @param {object} properties
   */
  function PlaneGeometry(minigl, width, height, n, i, orientation) {
    var properties = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};
    _classCallCheck(this, PlaneGeometry);
    _defineProperty(this, "gl", void 0);
    _defineProperty(this, "attributes", void 0);
    // Add additional properties.
    Object.assign(this, properties);

    // Set required properties.
    this.gl = minigl;
    var context = this.gl.getContext();
    context.createBuffer();
    this.attributes = {
      position: new _Attribute_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.gl, {
        target: context.ARRAY_BUFFER,
        size: 3
      }),
      uv: new _Attribute_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.gl, {
        target: context.ARRAY_BUFFER,
        size: 2
      }),
      uvNorm: new _Attribute_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.gl, {
        target: context.ARRAY_BUFFER,
        size: 2
      }),
      index: new _Attribute_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.gl, {
        target: context.ELEMENT_ARRAY_BUFFER,
        size: 3,
        type: context.UNSIGNED_SHORT
      })
    };
    this.setTopology(n, i);
    this.setSize(width, height, orientation);
  }
  _createClass(PlaneGeometry, [{
    key: "setTopology",
    value: function setTopology() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      this.xSegCount = e;
      this.ySegCount = t;
      this.vertexCount = (this.xSegCount + 1) * (this.ySegCount + 1);
      this.quadCount = this.xSegCount * this.ySegCount * 2;
      this.attributes.uv.values = new Float32Array(2 * this.vertexCount);
      this.attributes.uvNorm.values = new Float32Array(2 * this.vertexCount);
      this.attributes.index.values = new Uint16Array(3 * this.quadCount);
      for (var _e = 0; _e <= this.ySegCount; _e++) {
        for (var _t = 0; _t <= this.xSegCount; _t++) {
          var i = _e * (this.xSegCount + 1) + _t;
          if (this.attributes.uv.values[2 * i] = _t / this.xSegCount, this.attributes.uv.values[2 * i + 1] = 1 - _e / this.ySegCount, this.attributes.uvNorm.values[2 * i] = _t / this.xSegCount * 2 - 1, this.attributes.uvNorm.values[2 * i + 1] = 1 - _e / this.ySegCount * 2, _t < this.xSegCount && _e < this.ySegCount) {
            var s = _e * this.xSegCount + _t;
            this.attributes.index.values[6 * s] = i, this.attributes.index.values[6 * s + 1] = i + 1 + this.xSegCount, this.attributes.index.values[6 * s + 2] = i + 1, this.attributes.index.values[6 * s + 3] = i + 1, this.attributes.index.values[6 * s + 4] = i + 1 + this.xSegCount, this.attributes.index.values[6 * s + 5] = i + 2 + this.xSegCount;
          }
        }
      }
      this.attributes.uv.update();
      this.attributes.uvNorm.update();
      this.attributes.index.update();
    }
  }, {
    key: "setSize",
    value: function setSize() {
      var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var orientation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'xz';
      this.width = width;
      this.height = height;
      this.orientation = orientation;
      this.attributes.position.values && this.attributes.position.values.length === 3 * this.vertexCount || (this.attributes.position.values = new Float32Array(3 * this.vertexCount));
      var o = width / -2;
      var r = height / -2;
      var segment_width = width / this.xSegCount;
      var segment_height = height / this.ySegCount;
      for (var yIndex = 0; yIndex <= this.ySegCount; yIndex++) {
        var t = r + yIndex * segment_height;
        for (var xIndex = 0; xIndex <= this.xSegCount; xIndex++) {
          var _r = o + xIndex * segment_width;
          var l = yIndex * (this.xSegCount + 1) + xIndex;
          this.attributes.position.values[3 * l + 'xyz'.indexOf(orientation[0])] = _r;
          this.attributes.position.values[3 * l + 'xyz'.indexOf(orientation[1])] = -t;
        }
      }
      this.attributes.position.update();
    }
  }]);
  return PlaneGeometry;
}();


/***/ }),

/***/ "./src/ShadersJs/Blend.js":
/*!********************************!*\
  !*** ./src/ShadersJs/Blend.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("//\n// https://github.com/jamieowen/glsl-blend\n//\n\n// Normal\n\nvec3 blendNormal(vec3 base, vec3 blend) {\n    return blend;\n}\n\nvec3 blendNormal(vec3 base, vec3 blend, float opacity) {\n    return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Screen\n\nfloat blendScreen(float base, float blend) {\n    return 1.0-((1.0-base)*(1.0-blend));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend) {\n    return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend, float opacity) {\n    return (blendScreen(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Multiply\n\nvec3 blendMultiply(vec3 base, vec3 blend) {\n    return base*blend;\n}\n\nvec3 blendMultiply(vec3 base, vec3 blend, float opacity) {\n    return (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Overlay\n\nfloat blendOverlay(float base, float blend) {\n    return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend) {\n    return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend, float opacity) {\n    return (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Hard light\n\nvec3 blendHardLight(vec3 base, vec3 blend) {\n    return blendOverlay(blend,base);\n}\n\nvec3 blendHardLight(vec3 base, vec3 blend, float opacity) {\n    return (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Soft light\n\nfloat blendSoftLight(float base, float blend) {\n    return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));\n}\n\nvec3 blendSoftLight(vec3 base, vec3 blend) {\n    return vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));\n}\n\nvec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {\n    return (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Color dodge\n\nfloat blendColorDodge(float base, float blend) {\n    return (blend==1.0)?blend:min(base/(1.0-blend),1.0);\n}\n\nvec3 blendColorDodge(vec3 base, vec3 blend) {\n    return vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));\n}\n\nvec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {\n    return (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Color burn\n\nfloat blendColorBurn(float base, float blend) {\n    return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);\n}\n\nvec3 blendColorBurn(vec3 base, vec3 blend) {\n    return vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));\n}\n\nvec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {\n    return (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Vivid Light\n\nfloat blendVividLight(float base, float blend) {\n    return (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));\n}\n\nvec3 blendVividLight(vec3 base, vec3 blend) {\n    return vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));\n}\n\nvec3 blendVividLight(vec3 base, vec3 blend, float opacity) {\n    return (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Lighten\n\nfloat blendLighten(float base, float blend) {\n    return max(blend,base);\n}\n\nvec3 blendLighten(vec3 base, vec3 blend) {\n    return vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));\n}\n\nvec3 blendLighten(vec3 base, vec3 blend, float opacity) {\n    return (blendLighten(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear burn\n\nfloat blendLinearBurn(float base, float blend) {\n    // Note : Same implementation as BlendSubtractf\n    return max(base+blend-1.0,0.0);\n}\n\nvec3 blendLinearBurn(vec3 base, vec3 blend) {\n    // Note : Same implementation as BlendSubtract\n    return max(base+blend-vec3(1.0),vec3(0.0));\n}\n\nvec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {\n    return (blendLinearBurn(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear dodge\n\nfloat blendLinearDodge(float base, float blend) {\n    // Note : Same implementation as BlendAddf\n    return min(base+blend,1.0);\n}\n\nvec3 blendLinearDodge(vec3 base, vec3 blend) {\n    // Note : Same implementation as BlendAdd\n    return min(base+blend,vec3(1.0));\n}\n\nvec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {\n    return (blendLinearDodge(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear light\n\nfloat blendLinearLight(float base, float blend) {\n    return blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));\n}\n\nvec3 blendLinearLight(vec3 base, vec3 blend) {\n    return vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));\n}\n\nvec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {\n    return (blendLinearLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n");

/***/ }),

/***/ "./src/ShadersJs/Fragment.js":
/*!***********************************!*\
  !*** ./src/ShadersJs/Fragment.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("varying vec3 v_color;\n\nvoid main() {\n    vec3 color = v_color;\n    if (u_darken_top == 1.0) {\n        vec2 st = gl_FragCoord.xy/resolution.xy;\n        color.g -= pow(st.y + sin(-12.0) * st.x, u_shadow_power) * 0.4;\n    }\n    gl_FragColor = vec4(color, 1.0);\n}\n");

/***/ }),

/***/ "./src/ShadersJs/Noise.js":
/*!********************************!*\
  !*** ./src/ShadersJs/Noise.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : stegu\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//               https://github.com/stegu/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n{\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n}\n");

/***/ }),

/***/ "./src/ShadersJs/Vertex.js":
/*!*********************************!*\
  !*** ./src/ShadersJs/Vertex.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("varying vec3 v_color;\n\nvoid main() {\n  float time = u_time * u_global.noiseSpeed;\n\n  vec2 noiseCoord = resolution * uvNorm * u_global.noiseFreq;\n\n  vec2 st = 1. - uvNorm.xy;\n\n  //\n  // Tilting the plane\n  //\n\n  // Front-to-back tilt\n  float tilt = resolution.y / 2.0 * uvNorm.y;\n\n  // Left-to-right angle\n  float incline = resolution.x * uvNorm.x / 2.0 * u_vertDeform.incline;\n\n  // Up-down shift to offset incline\n  float offset = resolution.x / 2.0 * u_vertDeform.incline * mix(u_vertDeform.offsetBottom, u_vertDeform.offsetTop, uv.y);\n\n  //\n  // Vertex noise\n  //\n\n  float noise = snoise(vec3(\n    noiseCoord.x * u_vertDeform.noiseFreq.x + time * u_vertDeform.noiseFlow,\n    noiseCoord.y * u_vertDeform.noiseFreq.y,\n    time * u_vertDeform.noiseSpeed + u_vertDeform.noiseSeed\n  )) * u_vertDeform.noiseAmp;\n\n  // Fade noise to zero at edges\n  noise *= 1.0 - pow(abs(uvNorm.y), 2.0);\n\n  // Clamp to 0\n  noise = max(0.0, noise);\n\n  vec3 pos = vec3(\n    position.x,\n    position.y + tilt + incline + noise - offset,\n    position.z\n  );\n\n  //\n  // Vertex color, to be passed to fragment shader\n  //\n\n  if (u_active_colors[0] == 1.) {\n    v_color = u_baseColor;\n  }\n\n  for (int i = 0; i < u_waveLayers_length; i++) {\n    if (u_active_colors[i + 1] == 1.) {\n      WaveLayers layer = u_waveLayers[i];\n\n      float noise = smoothstep(\n        layer.noiseFloor,\n        layer.noiseCeil,\n        snoise(vec3(\n          noiseCoord.x * layer.noiseFreq.x + time * layer.noiseFlow,\n          noiseCoord.y * layer.noiseFreq.y,\n          time * layer.noiseSpeed + layer.noiseSeed\n        )) / 2.0 + 0.5\n      );\n\n      v_color = blendNormal(v_color, layer.color, pow(noise, 4.));\n    }\n  }\n\n  //\n  // Finish\n  //\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}\n");

/***/ }),

/***/ "./src/Uniform.js":
/*!************************!*\
  !*** ./src/Uniform.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Uniform; }
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Uniform = /*#__PURE__*/function () {
  /**
   * The parent MiniGL controller.
   *
   * @type {MiniGL}
   * @private
   */

  /**
   * @type {string}
   */

  /**
   * @type {*}
   */

  /**
   * The mapped type function.
   *
   * @type {string}
   */

  /**
   * Type function mappings.
   *
   * @type {object}
   * @private
   */

  /**
   * @param {MiniGL} minigl
   * @param {string} type
   * @param {*} value
   * @param {object} properties
   */
  function Uniform(minigl, type, value) {
    var properties = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    _classCallCheck(this, Uniform);
    _defineProperty(this, "gl", void 0);
    _defineProperty(this, "type", void 0);
    _defineProperty(this, "value", void 0);
    _defineProperty(this, "typeFn", void 0);
    _defineProperty(this, "_typeMap", {
      "float": '1f',
      "int": '1i',
      vec2: '2fv',
      vec3: '3fv',
      vec4: '4fv',
      mat4: 'Matrix4fv'
    });
    // Add additional properties i.e. excludeFrom, transpose... etc
    Object.assign(this, properties);

    // Set required properties.
    this.gl = minigl;
    this.type = type;
    this.value = value;

    // Get type function from map.
    this.typeFn = this._typeMap[this.type] || this._typeMap["float"];

    // Update.
    this.update();
  }
  _createClass(Uniform, [{
    key: "update",
    value: function update(value) {
      if (this.value) {
        var paramB = this.value;
        var paramC = null;
        if (this.typeFn.indexOf('Matrix') === 0) {
          paramB = this.transpose;
          paramC = this.value;
        }
        this.gl.getContext()["uniform".concat(this.typeFn)](value, paramB, paramC);
      }
    }
  }, {
    key: "getDeclaration",
    value: function getDeclaration(name, type, length) {
      if (this.excludeFrom !== type) {
        if (this.type === 'array') {
          return "".concat(this.value[0].getDeclaration(name, type, this.value.length), "\nconst int ").concat(name, "_length = ").concat(this.value.length, ";");
        }
        if (this.type === 'struct') {
          var namePrefix = name.replace('u_', '');
          namePrefix = namePrefix.charAt(0).toUpperCase() + namePrefix.slice(1);
          var declaration = Object.entries(this.value).map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
              name = _ref2[0],
              uniform = _ref2[1];
            return uniform.getDeclaration(name, type).replace(/^uniform/, '');
          }).join('');
          return "uniform struct ".concat(namePrefix, " {\n    ").concat(declaration, "\n} ").concat(name).concat(length > 0 ? "[".concat(length, "]") : '', ";");
        }
        return "uniform ".concat(this.type, " ").concat(name).concat(length > 0 ? "[".concat(length, "]") : '', ";");
      }
    }
  }]);
  return Uniform;
}();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*************************!*\
  !*** ./src/Gradient.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MiniGL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MiniGL.js */ "./src/MiniGL.js");
/* harmony import */ var _ShadersJs_Blend_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersJs/Blend.js */ "./src/ShadersJs/Blend.js");
/* harmony import */ var _ShadersJs_Fragment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersJs/Fragment.js */ "./src/ShadersJs/Fragment.js");
/* harmony import */ var _ShadersJs_Noise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersJs/Noise.js */ "./src/ShadersJs/Noise.js");
/* harmony import */ var _ShadersJs_Vertex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersJs/Vertex.js */ "./src/ShadersJs/Vertex.js");
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Uniform.js */ "./src/Uniform.js");
/* harmony import */ var _Material_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Material.js */ "./src/Material.js");
/* harmony import */ var _Mesh_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Mesh.js */ "./src/Mesh.js");
/* harmony import */ var _PlaneGeometry_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PlaneGeometry.js */ "./src/PlaneGeometry.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Gradient = /*#__PURE__*/function () {
  /**
   * Class reference used primarily for static properties.
   *
   * @type {Gradient}
   */

  /**
   * Default options used if user doesn't provide a value.
   *
   * @type {object}
   */

  // @todo work out why this number has been choosen.

  // @todo tidy up these properties

  /**
   * @type {{fragment: string, vertex: string, blend: string, noise: string}}
   */

  /**
   * User defined options
   *
   * @type {object}
   */

  /**
   * Store arbitrary flags consisting of mainly boolean values but in some cases can be any data type.
   * @type {object}
   * @private
   */

  /**
   * Cached canvas element.
   *
   * @type {HTMLCanvasElement|null}
   * @private
   */

  /**
   * @type {WebGLRenderingContext|null}
   * @private
   */

  /**
   * Cached MiniGL instance.
   *
   * @type {MiniGL}
   * @private
   */

  /**
   * @param {object} options
   */
  function Gradient(options) {
    _classCallCheck(this, Gradient);
    _defineProperty(this, "_class", Gradient);
    _defineProperty(this, "vertexShader", null);
    _defineProperty(this, "uniforms", null);
    _defineProperty(this, "time", 1253106);
    _defineProperty(this, "mesh", null);
    _defineProperty(this, "material", null);
    _defineProperty(this, "geometry", null);
    _defineProperty(this, "scrollingTimeout", null);
    _defineProperty(this, "scrollingRefreshDelay", 200);
    _defineProperty(this, "scrollObserver", null);
    _defineProperty(this, "width", null);
    _defineProperty(this, "minWidth", 1111);
    _defineProperty(this, "height", 600);
    _defineProperty(this, "xSegCount", null);
    _defineProperty(this, "ySegCount", null);
    _defineProperty(this, "freqX", 0.00014);
    _defineProperty(this, "freqY", 0.00029);
    _defineProperty(this, "freqDelta", 0.00001);
    _defineProperty(this, "activeColors", [1, 1, 1, 1]);
    _defineProperty(this, "shaderFiles", {
      vertex: _ShadersJs_Vertex_js__WEBPACK_IMPORTED_MODULE_4__["default"],
      noise: _ShadersJs_Noise_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      blend: _ShadersJs_Blend_js__WEBPACK_IMPORTED_MODULE_1__["default"],
      fragment: _ShadersJs_Fragment_js__WEBPACK_IMPORTED_MODULE_2__["default"]
    });
    _defineProperty(this, "options", {});
    _defineProperty(this, "_flags", {
      playing: true // autoplay on init
    });
    _defineProperty(this, "_canvas", void 0);
    _defineProperty(this, "_context", void 0);
    _defineProperty(this, "_minigl", void 0);
    this.options = options;

    // Find and store the canvas element.
    this.setCanvas(this.findCanvas(this.getOption('canvas')));

    // Bail if no canvas element.
    if (!this.getCanvas()) {
      throw 'Missing Canvas. Pass the canvas to the Gradient constructor.';
    }

    // Initiate the MiniGL controller.
    this._minigl = new _MiniGL_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.getCanvas(), this.getCanvas().offsetWidth, this.getCanvas().offsetHeight);

    // Initiate the canvas gradient.
    this.init();
  }

  /**
   * Get a user or default option.
   *
   * @param {string} name
   * @param defaultValue
   * @returns {*}
   */
  _createClass(Gradient, [{
    key: "getOption",
    value: function getOption(name) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (defaultValue === undefined && name in this._class.defaultOptions) {
        defaultValue = this._class.defaultOptions[name];
      }
      return name in this.options ? this.options[name] : defaultValue;
    }

    /**
     * Get the canvas element and cache as private property.
     *
     * @param {string|HTMLCanvasElement} selector
     * @returns {HTMLCanvasElement|null}
     */
  }, {
    key: "findCanvas",
    value: function findCanvas(selector) {
      var canvas = typeof selector === 'string' ? document.querySelector(selector) : selector;
      if (canvas instanceof HTMLCanvasElement) {
        return canvas;
      }
      return null;
    }

    /**
     * Sets the `_canvas` and `_context` properties.
     *
     * @param {HTMLCanvasElement} canvas
     */
  }, {
    key: "setCanvas",
    value: function setCanvas(canvas) {
      if (canvas) {
        this._canvas = canvas;
        this._context = canvas.getContext('webgl', {
          antialias: true
        });
      } else {
        this._canvas = null;
        this._context = null;
      }
    }

    /**
     * @return {HTMLCanvasElement}
     */
  }, {
    key: "getCanvas",
    value: function getCanvas() {
      return this._canvas;
    }

    /**
     * @return {WebGLRenderingContext}
     */
  }, {
    key: "getContext",
    value: function getContext() {
      return this._context;
    }

    /**
     * @param {string} name
     * @param {*} value
     * @return {*}
     */
  }, {
    key: "setFlag",
    value: function setFlag(name, value) {
      return this._flags[name] = value;
    }

    /**
     * @param {string} name
     * @param defaultValue
     * @return {boolean|undefined}
     */
  }, {
    key: "getFlag",
    value: function getFlag(name) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      return this._flags[name] || defaultValue;
    }
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      clearTimeout(this.scrollingTimeout);
      this.scrollingTimeout = setTimeout(this.handleScrollEnd, this.scrollingRefreshDelay);
      if (this.getFlag('playing')) {
        this.setFlag('isScrolling', true);
        this.pause();
      }
    }
  }, {
    key: "handleScrollEnd",
    value: function handleScrollEnd() {
      this.setFlag('isScrolling', false);
      if (this.getFlag('isIntersecting')) {
        this.play();
      }
    }

    /**
     * @todo Update resize method to use canvas size not window.
     */
  }, {
    key: "resize",
    value: function resize() {
      try {
        var _this$getOption = this.getOption('density'),
          _this$getOption2 = _slicedToArray(_this$getOption, 2),
          densityX = _this$getOption2[0],
          densityY = _this$getOption2[1];
        this.width = window.innerWidth;
        this._minigl.setSize(this.width, this.height);
        this._minigl.setOrthographicCamera();
        this.xSegCount = Math.ceil(this.width * densityX);
        this.ySegCount = Math.ceil(this.height * densityY);
        this.mesh.geometry.setTopology(this.xSegCount, this.ySegCount);
        this.mesh.geometry.setSize(this.width, this.height);
        this.mesh.material.uniforms.u_shadow_power.value = this.width < 600 ? 5 : 6;
      } catch (TypeError) {
        // handling resize package errors, can skip
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var shouldSkipFrame = !!window.document.hidden || !this.getFlag('playing') || parseInt(event, 10) % 2 === 0;
      var lastFrame = this.getFlag('lastFrame', 0);
      if (!shouldSkipFrame) {
        this.time += Math.min(event - lastFrame, 1000 / 15);
        lastFrame = this.setFlag('lastFrame', event);
        this.mesh.material.uniforms.u_time.value = this.time;
        this._minigl.render();
      }

      // @todo support static gradient.
      if (lastFrame !== 0 && this.getOption('static')) {
        this._minigl.render();
        return this.disconnect();
      }
      if ( /*this.getFlag('isIntersecting') && */this.getFlag('playing')) {
        requestAnimationFrame(this.animate.bind(this));
      }
    }

    /**
     * Pause the animation.
     */
  }, {
    key: "pause",
    value: function pause() {
      this.setFlag('playing', false);
    }

    /**
     * Start or continue the animation.
     */
  }, {
    key: "play",
    value: function play() {
      requestAnimationFrame(this.animate.bind(this));
      this.setFlag('playing', true);
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      if (this.scrollObserver) {
        window.removeEventListener("scroll", this.handleScroll);
        this.scrollObserver.disconnect();
      }
      window.removeEventListener("resize", this.resize);
    }
  }, {
    key: "initMaterial",
    value: function initMaterial() {
      /**
       * @type {array[]}
       */
      var colors = this.getOption('colors').map(function (hex) {
        // Check if shorthand hex value was used and double the length so the conversion in normalizeColor will work.
        if (hex.length === 4) {
          var hexTemp = hex.substr(1).split('').map(function (hexTemp) {
            return hexTemp + hexTemp;
          }).join('');
          hex = "#".concat(hexTemp);
        }
        return hex && "0x".concat(hex.substr(1));
      }).filter(Boolean).map(this.normalizeColor);
      this.uniforms = {
        u_time: new _Uniform_js__WEBPACK_IMPORTED_MODULE_5__["default"](this._minigl, 'float', 0),
        u_shadow_power: new _Uniform_js__WEBPACK_IMPORTED_MODULE_5__["default"](this._minigl, 'float', 10),
        u_darken_top: new _Uniform_js__WEBPACK_IMPORTED_MODULE_5__["default"](this._minigl, 'float', this.getCanvas().dataset.jsDarkenTop ? 1 : 0),
        u_active_colors: new _Uniform_js__WEBPACK_IMPORTED_MODULE_5__["default"](this._minigl, 'vec4', this.activeColors),
        u_global: new _Uniform_js__WEBPACK_IMPORTED_MODULE_5__["default"](this._minigl, 'struct', {
          noiseFreq: new _Uniform_js__WEBPACK_IMPORTED_MODULE_5__["default"](this._minigl, 'vec2', [this.freqX, this.freqY]),
          noiseSpeed: new _Uniform_js__WEBPACK_IMPORTED_MODULE_5__["default"](this._minigl, 'float', 0.000005)
        }),
        u_vertDeform: new _Uniform_js__WEBPACK_IMPORTED_MODULE_5__["default"](this._minigl, 'struct', {
          incline: new _Uniform_js__WEBPACK_IMPORTED_MODULE_5__["default"](this._minigl, 'float', Math.sin(this.getOption('angle')) / Math.cos(this.getOption('angle'))),
          offsetTop: new _Uniform_js__WEBPACK_IMPORTED_MODULE_5__["default"](this._minigl, 'float', -0.5),
          offsetBottom: new _Uniform_js__WEBPACK_IMPORTED_MODULE_5__["default"](this._minigl, 'float', -0.5),
          noiseFreq: new _Uniform_js__WEBPACK_IMPORTED_MODULE_5__["default"](this._minigl, 'vec2', [3, 4]),
          noiseAmp: new _Uniform_js__WEBPACK_IMPORTED_MODULE_5__["default"](this._minigl, 'float', this.getOption('amplitude')),
          noiseSpeed: new _Uniform_js__WEBPACK_IMPORTED_MODULE_5__["default"](this._minigl, 'float', 10),
          noiseFlow: new _Uniform_js__WEBPACK_IMPORTED_MODULE_5__["default"](this._minigl, 'float', 3),
          noiseSeed: new _Uniform_js__WEBPACK_IMPORTED_MODULE_5__["default"](this._minigl, 'float', this.seed)
        }, {
          excludeFrom: 'fragment'
        }),
        u_baseColor: new _Uniform_js__WEBPACK_IMPORTED_MODULE_5__["default"](this._minigl, 'vec3', colors[0], {
          excludeFrom: 'fragment'
        }),
        u_waveLayers: new _Uniform_js__WEBPACK_IMPORTED_MODULE_5__["default"](this._minigl, 'array', [], {
          excludeFrom: 'fragment'
        })
      };
      for (var e = 1; e < colors.length; e += 1) {
        var waveLayerUniform = new _Uniform_js__WEBPACK_IMPORTED_MODULE_5__["default"](this._minigl, 'struct', {
          color: new _Uniform_js__WEBPACK_IMPORTED_MODULE_5__["default"](this._minigl, 'vec3', colors[e]),
          noiseFreq: new _Uniform_js__WEBPACK_IMPORTED_MODULE_5__["default"](this._minigl, 'vec2', [2 + e / colors.length, 3 + e / colors.length]),
          noiseSpeed: new _Uniform_js__WEBPACK_IMPORTED_MODULE_5__["default"](this._minigl, 'float', 11 + 0.3 * e),
          noiseFlow: new _Uniform_js__WEBPACK_IMPORTED_MODULE_5__["default"](this._minigl, 'float', 6.5 + 0.3 * e),
          noiseSeed: new _Uniform_js__WEBPACK_IMPORTED_MODULE_5__["default"](this._minigl, 'float', this.seed + 10 * e),
          noiseFloor: new _Uniform_js__WEBPACK_IMPORTED_MODULE_5__["default"](this._minigl, 'float', 0.1),
          noiseCeil: new _Uniform_js__WEBPACK_IMPORTED_MODULE_5__["default"](this._minigl, 'float', 0.63 + 0.07 * e)
        });
        this.uniforms.u_waveLayers.value.push(waveLayerUniform);
      }
      this.vertexShader = [this.shaderFiles.noise, this.shaderFiles.blend, this.shaderFiles.vertex].join("\n\n");
      return new _Material_js__WEBPACK_IMPORTED_MODULE_6__["default"](this._minigl, this.vertexShader, this.shaderFiles.fragment, this.uniforms);
    }
  }, {
    key: "initMesh",
    value: function initMesh() {
      this.material = this.initMaterial();
      this.geometry = new _PlaneGeometry_js__WEBPACK_IMPORTED_MODULE_8__["default"](this._minigl);
      this.mesh = new _Mesh_js__WEBPACK_IMPORTED_MODULE_7__["default"](this._minigl, this.geometry, this.material);
      this.mesh.wireframe = this.getOption('wireframe');
    }
  }, {
    key: "updateFrequency",
    value: function updateFrequency(e) {
      this.freqX += e;
      this.freqY += e;
    }
  }, {
    key: "toggleColor",
    value: function toggleColor(index) {
      this.activeColors[index] = this.activeColors[index] === 0 ? 1 : 0;
    }
  }, {
    key: "init",
    value: function init() {
      // Add loaded class.
      var loadedClass = this.getOption('loadedClass');
      if (loadedClass) {
        this.getCanvas().classList.add(loadedClass);
      }

      // @todo add scroll observer.
      //
      // this.scrollObserver = await s.create(.1, false),
      // this.scrollObserver.observe(this.getCanvas());
      //
      // this.scrollObserver.onSeparate(() => {
      //     window.removeEventListener("scroll", this.handleScroll);
      //
      //     this.setFlag('isIntersecting', false);
      //
      //     if (this.getFlag('playing')) {
      //         this.pause();
      //     }
      // });
      //
      // this.scrollObserver.onIntersect(() => {
      //     window.addEventListener("scroll", this.handleScroll);
      //
      //     this.setFlag('isIntersecting', true);
      //
      //     this.addIsLoadedClass();
      //     this.play();
      // });

      this.initMesh();
      this.resize();
      requestAnimationFrame(this.animate.bind(this));
      window.addEventListener('resize', this.resize);
    }

    /**
     * @param {string} hexCode
     * @return {number[]}
     */
  }, {
    key: "normalizeColor",
    value: function normalizeColor(hexCode) {
      return [(hexCode >> 16 & 255) / 255, (hexCode >> 8 & 255) / 255, (255 & hexCode) / 255];
    }
  }]);
  return Gradient;
}();
_defineProperty(Gradient, "defaultOptions", {
  canvas: null,
  colors: ['#f00', '#0f0', '#00f'],
  wireframe: false,
  density: [.06, .16],
  angle: 0,
  amplitude: 320,
  "static": false,
  // Enable non-animating gradient

  loadedClass: 'is-loaded',
  zoom: 1,
  // @todo not used.
  speed: 5,
  // @todo not used.
  rotation: 0 // @todo not used.
});
window.Gradient = Gradient;
if (window.jQuery) {
  jQuery.fn.gradient = function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    options.canvas = this.get(0);
    this._gradient = new Gradient(options);
    return this;
  };
}
}();
/******/ })()
;
