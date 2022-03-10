/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/SmoochSans-VariableFont_wght.ttf */ "./src/fonts/SmoochSans-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: pageFont;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody {\n    margin: 0;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    font-family: pageFont;\n}\n\nheader {\n    background-color: #1c1917;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px 20px 10px 20px;\n}\n\n.header-title {\n    font-size: 3rem;\n    font-weight: bold;\n    color: #ffffff;\n}\n\n.show-sidebar {\n    border: none;\n    background: none;\n    color: #ffffff;\n    font-size: 3rem;\n    cursor: pointer;\n}\n\n#content {\n    background-color: #e7e5e4;\n    display: grid;\n    grid-template-columns: 300px 1fr;\n}\n\n#content .sidebar {\n    background-color: #292524;\n    padding: 50px 20px 50px 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n}\n\n#content .sidebar-title {\n    font-size: 2rem;\n    font-weight: bold;\n    color: #ffffff;\n    border-bottom: 1px solid white;\n}\n\n.add-project-btn {\n    font-family: pageFont;\n    background: none;\n    border: none;\n    font-size: 1.5rem;\n    font-weight: bold;\n    color: #808080;\n    cursor: pointer;\n    padding: 0; \n}\n\n.add-project-btn:hover {\n    color: #ffffff;\n}\n\n.sidebar-heading {\n    display: flex;\n    gap: 10px;\n}\n\n.projects {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 15px;\n}\n\n.project {\n    padding-left: 5px;\n    color: #808080;\n    cursor: pointer;\n    display: flex;\n    justify-content: space-between;\n}\n\n.project:hover {\n    color: #ffffff;\n}\n\n.project-title {\n    font-size: 1.5rem;\n}\n\n.delete-project-btn {\n    color: #808080;\n    border: none;\n    background: none;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.project-form-container {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#p-title {\n    width: 100%;\n    box-sizing: border-box;\n    font-size: 1.3rem;\n    padding: 10px 15px;\n    font-family: pageFont;\n}\n\n.project-form-btns {\n    display: flex;\n    gap: 10px;\n}\n\n.project-form-btns button {\n    background-color: #808080;\n    width: 100%;\n    border: none;\n    border-radius: 5px;\n    padding: 10px 15px;\n    font-weight: bold;\n    font-size: 1.3rem;\n    font-family: pageFont;\n    cursor: pointer;\n}\n\n.project-form-btns button:hover {\n    background-color: #ffffff;\n}\n\n#content .current-project-container {\n    display: flex;\n    justify-content: center;\n}\n\n#content .current-project {\n    background-color: #e7e5e4;\n    padding: 50px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;   \n    min-width: 500px;\n    max-width: 900px;\n    flex-basis: auto; /* default value */\n    flex-grow: 1;\n}\n\n.current-project-title {\n    font-size: 2rem;\n    font-weight: bold;\n    border-bottom: 1px solid black;\n}\n\n.tasks {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 15px;\n}\n\n.task {\n    padding-left: 5px;\n    color: #808080;\n    cursor: pointer;\n    display: flex;\n    justify-content: space-between;\n}\n\n.task:hover {\n    color: #000000;   \n}\n\n.task-title {\n    font-size: 1.5rem;\n}\n\n.delete-task-btn {\n    border: none;\n    background: none;\n    font-weight: bold;\n    color: #808080;\n    cursor: pointer;\n}\n\n.add-task-btn {\n    font-family: pageFont;\n    background: none;\n    border: none;\n    font-size: 1.5rem;\n    font-weight: bold;\n    color: #808080;\n    cursor: pointer;\n    padding: 0;\n}\n\n.add-task-btn:hover {\n    color: #000000;\n}\n\n.task-form-container {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#t-title {\n    width: 100%;\n    box-sizing: border-box;\n    font-size: 1.3rem;\n    padding: 10px 15px;\n    font-family: pageFont;\n}\n\n.task-form-btns {\n    display: flex;\n    gap: 10px;\n}\n\n.task-form-btns button {\n    background-color: #808080;\n    width: 100%;\n    border: none;\n    border-radius: 5px;\n    padding: 10px 15px;\n    font-weight: bold;\n    font-size: 1.3rem;\n    font-family: pageFont;\n    cursor: pointer;\n}\n\n.task-form-btns button:hover {\n    background-color: #ffffff;\n}\n\nfooter {\n    background-color: #1c1917;\n    padding: 10px 20px 10px 20px;\n    font-size: 3rem;\n    font-weight: bold;\n    color: #ffffff;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: pageFont;\n    src: url('./fonts/SmoochSans-VariableFont_wght.ttf');\n}\n\nbody {\n    margin: 0;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    font-family: pageFont;\n}\n\nheader {\n    background-color: #1c1917;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px 20px 10px 20px;\n}\n\n.header-title {\n    font-size: 3rem;\n    font-weight: bold;\n    color: #ffffff;\n}\n\n.show-sidebar {\n    border: none;\n    background: none;\n    color: #ffffff;\n    font-size: 3rem;\n    cursor: pointer;\n}\n\n#content {\n    background-color: #e7e5e4;\n    display: grid;\n    grid-template-columns: 300px 1fr;\n}\n\n#content .sidebar {\n    background-color: #292524;\n    padding: 50px 20px 50px 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n}\n\n#content .sidebar-title {\n    font-size: 2rem;\n    font-weight: bold;\n    color: #ffffff;\n    border-bottom: 1px solid white;\n}\n\n.add-project-btn {\n    font-family: pageFont;\n    background: none;\n    border: none;\n    font-size: 1.5rem;\n    font-weight: bold;\n    color: #808080;\n    cursor: pointer;\n    padding: 0; \n}\n\n.add-project-btn:hover {\n    color: #ffffff;\n}\n\n.sidebar-heading {\n    display: flex;\n    gap: 10px;\n}\n\n.projects {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 15px;\n}\n\n.project {\n    padding-left: 5px;\n    color: #808080;\n    cursor: pointer;\n    display: flex;\n    justify-content: space-between;\n}\n\n.project:hover {\n    color: #ffffff;\n}\n\n.project-title {\n    font-size: 1.5rem;\n}\n\n.delete-project-btn {\n    color: #808080;\n    border: none;\n    background: none;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.project-form-container {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#p-title {\n    width: 100%;\n    box-sizing: border-box;\n    font-size: 1.3rem;\n    padding: 10px 15px;\n    font-family: pageFont;\n}\n\n.project-form-btns {\n    display: flex;\n    gap: 10px;\n}\n\n.project-form-btns button {\n    background-color: #808080;\n    width: 100%;\n    border: none;\n    border-radius: 5px;\n    padding: 10px 15px;\n    font-weight: bold;\n    font-size: 1.3rem;\n    font-family: pageFont;\n    cursor: pointer;\n}\n\n.project-form-btns button:hover {\n    background-color: #ffffff;\n}\n\n#content .current-project-container {\n    display: flex;\n    justify-content: center;\n}\n\n#content .current-project {\n    background-color: #e7e5e4;\n    padding: 50px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;   \n    min-width: 500px;\n    max-width: 900px;\n    flex-basis: auto; /* default value */\n    flex-grow: 1;\n}\n\n.current-project-title {\n    font-size: 2rem;\n    font-weight: bold;\n    border-bottom: 1px solid black;\n}\n\n.tasks {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 15px;\n}\n\n.task {\n    padding-left: 5px;\n    color: #808080;\n    cursor: pointer;\n    display: flex;\n    justify-content: space-between;\n}\n\n.task:hover {\n    color: #000000;   \n}\n\n.task-title {\n    font-size: 1.5rem;\n}\n\n.delete-task-btn {\n    border: none;\n    background: none;\n    font-weight: bold;\n    color: #808080;\n    cursor: pointer;\n}\n\n.add-task-btn {\n    font-family: pageFont;\n    background: none;\n    border: none;\n    font-size: 1.5rem;\n    font-weight: bold;\n    color: #808080;\n    cursor: pointer;\n    padding: 0;\n}\n\n.add-task-btn:hover {\n    color: #000000;\n}\n\n.task-form-container {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#t-title {\n    width: 100%;\n    box-sizing: border-box;\n    font-size: 1.3rem;\n    padding: 10px 15px;\n    font-family: pageFont;\n}\n\n.task-form-btns {\n    display: flex;\n    gap: 10px;\n}\n\n.task-form-btns button {\n    background-color: #808080;\n    width: 100%;\n    border: none;\n    border-radius: 5px;\n    padding: 10px 15px;\n    font-weight: bold;\n    font-size: 1.3rem;\n    font-family: pageFont;\n    cursor: pointer;\n}\n\n.task-form-btns button:hover {\n    background-color: #ffffff;\n}\n\nfooter {\n    background-color: #1c1917;\n    padding: 10px 20px 10px 20px;\n    font-size: 3rem;\n    font-weight: bold;\n    color: #ffffff;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Project {
    
    tasks = [];

    constructor(name, key) {
        this.name = name;
        this.key = key;
    }

    addTask(task) {
        this.tasks.push(task);

        const newTask = document.createElement('div'); 
        newTask.classList.add('task');
        newTask.dataset.key = this.key;

        const taskTitle = document.createElement('div'); 
        taskTitle.classList.add('task-title');
        taskTitle.textContent = `${task.getTitle()}`;
        newTask.appendChild(taskTitle);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-task-btn');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', (e) => this.deleteTask(e));
        newTask.appendChild(deleteButton);

        document.querySelector('.tasks').appendChild(newTask);
    }

    loadTask(task) {
        const newTask = document.createElement('div'); 
        newTask.classList.add('task');
        newTask.dataset.key = this.key;

        const taskTitle = document.createElement('div'); 
        taskTitle.classList.add('task-title');
        taskTitle.textContent = `${task.getTitle()}`;
        newTask.appendChild(taskTitle);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-task-btn');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', (e) => this.deleteTask(e));
        newTask.appendChild(deleteButton);

        document.querySelector('.tasks').appendChild(newTask);
    }
    
    deleteTask(e) {
        const index = this.tasks.findIndex(task => task.title === e.target.parentNode.children[0].textContent);
        if(index !== -1) {
            this.tasks.splice(index, 1); 
        }
        e.target.parentNode.remove();

        // Find the project in local storage, remove the task from the array, add it back into the local storage.
        const value = localStorage.getItem(e.target.parentNode.dataset.key);
        let getProject = JSON.parse(value);
        const taskIndex = getProject.tasks.findIndex(task => task.title === e.target.parentNode.children[0].textContent);
        getProject.tasks.splice(taskIndex, 1);
        localStorage.setItem(`${e.target.parentNode.dataset.key}`, JSON.stringify(getProject));
    }

    getProjectName() {
        return this.name;
    }

    getKey() {
        return this.key;
    }

    getTasks() {
        return this.tasks;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Task {

    constructor(title) {
        this.title = title;
    }

    setTitle(title) {
        this.title = title;
    }

    getTitle() {
        return this.title;
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./src/modules/ToDoList.js":
/*!*********************************!*\
  !*** ./src/modules/ToDoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/modules/UI.js");


class ToDoList {

    static projects = [];
    static key = 0;
    static selectedProject;

    // Add project object into array & DOM
    static addProject(project) {
        this.projects.push(project);

        const newProject = document.createElement('div'); 
        newProject.classList.add('project');
        newProject.dataset.key = this.key;
        newProject.addEventListener('click', (e) => this.selectProject(e));

        const projectTitle = document.createElement('div'); 
        projectTitle.classList.add('project-title');
        projectTitle.textContent = `${project.getProjectName()}`;
        newProject.appendChild(projectTitle);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-project-btn');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', (e) => this.deleteProject(e));
        newProject.appendChild(deleteButton);

        document.querySelector('.projects').appendChild(newProject);
        this.key++;
    }
    
    // Remove project object from array & DOM
    static deleteProject(e) {
        const index = this.projects.findIndex(project => project.key === e.target.parentNode.dataset.key);
        if(index !== -1) {
            // Remove from array using index, remove from localStorage using data-key
            this.projects.splice(index, 1); 
            localStorage.removeItem(`${e.target.parentNode.dataset.key}`);
        }
        // Remove project from sidebar
        document.querySelector(`.project[data-key="${e.target.parentNode.dataset.key}"]`).remove();

        // If the deleted was a selected project, delete all their task from DOM and reset the selected project.
        // Else, if a non selected project was deleted, delete their task. 
        if(e.target.parentNode === this.selectedProject){  
            document.querySelector('.current-project-title').style.display = 'none';
            document.querySelector('.add-task-btn').style.display = 'none';

            const tasks = document.querySelectorAll(`.task[data-key="${e.target.parentNode.dataset.key}"]`);
            tasks.forEach(task => task.remove());

            this.selectedProject = undefined;    
        }
        else {
            const tasks = document.querySelectorAll(`.task[data-key="${e.target.parentNode.dataset.key}"]`);
            tasks.forEach(task => task.remove());
        }
        // If the last project is deleted clear the display
        if(this.projects.length === 0) {
            document.querySelector('.current-project-title').style.display = 'none';
            document.querySelector('.add-task-btn').style.display = 'none';
        }
        console.log(this.selectedProject);
    }

    // Highlights the selected task and display it to the DOM.
    static selectProject(e) {
        // Hide any forms when selecting a different project.
        const taskFormContainer = document.querySelector('.task-form-container');
        const projectFormContainer = document.querySelector('.project-form-container');
        if(taskFormContainer.style.display === 'flex') {
            _UI__WEBPACK_IMPORTED_MODULE_0__["default"].hideTaskForm();
        }
        else if(projectFormContainer.style.display === 'flex') {
            _UI__WEBPACK_IMPORTED_MODULE_0__["default"].hideProjectForm();
        }

        if(e.target.textContent === 'Home') {
            // Deselect the previous project and select the home project.
            if(this.selectedProject !== undefined && this.selectedProject.textContent !== 'Home') {
                this.selectedProject.style.fontWeight = 'normal';
                this.selectedProject.style.color = '#808080';

                this.selectedProject = e.target; 
                this.selectedProject.style.fontWeight = 'bold';
                this.selectedProject.style.color = '#ffffff';

                // Display all task
                const currentProjectTitle = document.querySelector('.current-project-title');
                currentProjectTitle.textContent = 'Home';
                currentProjectTitle.style.display = 'block';
                const addTaskBtn = document.querySelector('.add-task-btn');
                addTaskBtn.style.display = 'none';

                const tasks = document.querySelector('.tasks');
                tasks.childNodes.forEach(task => {
                    task.style.display = 'flex';
                });                
            }
            else { // If home project is selected, and there is no selected project.
                this.selectedProject = e.target; 
                this.selectedProject.style.fontWeight = 'bold';
                this.selectedProject.style.color = '#ffffff';

                // Display all task
                const currentProjectTitle = document.querySelector('.current-project-title');
                currentProjectTitle.textContent = 'Home';
                currentProjectTitle.style.display = 'block';
                const addTaskBtn = document.querySelector('.add-task-btn');
                addTaskBtn.style.display = 'none';

                const tasks = document.querySelector('.tasks');
                tasks.childNodes.forEach(task => {
                    task.style.display = 'flex';
                }); 
            }
        }
        else if(e.target.className === 'project-title') {
            if(this.selectedProject === undefined) {
                this.selectedProject = e.target.parentNode; 
                this.selectedProject.style.fontWeight = 'bold';
                this.selectedProject.style.color = '#ffffff';      
                    
                document.querySelector('.current-project-title').style.display = 'block';
                document.querySelector('.add-task-btn').style.display = 'inline-block';
                this.displayTask()
            }
            else {
            this.selectedProject.style.fontWeight = 'normal';
            this.selectedProject.style.color = '#808080';

            this.selectedProject = e.target.parentNode; 
            this.selectedProject.style.fontWeight = 'bold';
            this.selectedProject.style.color = '#ffffff';      
                
            document.querySelector('.current-project-title').style.display = 'block';
            document.querySelector('.add-task-btn').style.display = 'inline-block';
            this.displayTask()                
            }
        }
        else if(e.target.className === 'project'){ 
            if(this.selectedProject === undefined) {
                this.selectedProject = e.target; 
                this.selectedProject.style.fontWeight = 'bold';
                this.selectedProject.style.color = '#ffffff'; 
    
                document.querySelector('.current-project-title').style.display = 'block';
                document.querySelector('.add-task-btn').style.display = 'inline-block';
                this.displayTask()
            }
            else {
                this.selectedProject.style.fontWeight = 'normal';
                this.selectedProject.style.color = '#808080';

                this.selectedProject = e.target; 
                this.selectedProject.style.fontWeight = 'bold';
                this.selectedProject.style.color = '#ffffff'; 

                document.querySelector('.current-project-title').style.display = 'block';
                document.querySelector('.add-task-btn').style.display = 'inline-block';
                this.displayTask()                
            }
        }   
    }

    // Selected project will have their task displayed
    static displayTask() {
        if(this.selectedProject.dataset.key !== undefined) {
            const index = this.projects.findIndex(project => project.key === this.selectedProject.dataset.key);
            // Hide the previous project's task by check if the id matches.
            const currentTasks = document.querySelector('.tasks');
            currentTasks.childNodes.forEach(task => {
                if(task.dataset.key !== this.selectedProject.dataset.key) {
                    task.style.display = 'none';
                }
            });
            // Change the current-project-title to the selected project's title
            const currentProjectTitle = document.querySelector('.current-project-title');
            currentProjectTitle.textContent = `${this.projects[index].getProjectName()}`;
            // Loop through the array(tasks) in the project object and display it onto DOM
            currentTasks.childNodes.forEach(task => {
                if(task.dataset.key === this.selectedProject.dataset.key) {
                    task.style.display = 'flex';
                }
            });            
        }

    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoList);

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ToDoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoList */ "./src/modules/ToDoList.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");




class UI {

    static header() {
        const header = document.createElement('header');

        const headerTitle = document.createElement('div');
        headerTitle.classList.add('header-title');
        headerTitle.textContent = 'Todo List';

        const showSideBar = document.createElement('button');
        showSideBar.classList.add('show-sidebar');
        showSideBar.textContent = '≡';

        header.appendChild(headerTitle);
        header.appendChild(showSideBar);
        
        return header;
    }

    static content() {
        const content = document.createElement('div');
        content.id = 'content';

        return content;
    }

    static sidebar() {
        const sidebar = document.createElement('div');
        sidebar.classList.add('sidebar');

        const defaultProject = document.createElement('div');
        defaultProject.classList.add('project');
        defaultProject.addEventListener('click', (e) => _ToDoList__WEBPACK_IMPORTED_MODULE_0__["default"].selectProject(e));
        const defaultProjectTitle = document.createElement('div');
        defaultProjectTitle.classList.add('project-title');
        defaultProjectTitle.textContent = 'Home';
        defaultProjectTitle.style.fontWeight = 'bold';
        defaultProjectTitle.style.color = '#ffffff';
        _ToDoList__WEBPACK_IMPORTED_MODULE_0__["default"].selectedProject = defaultProjectTitle;
        defaultProject.appendChild(defaultProjectTitle);
        sidebar.appendChild(defaultProject);

        const sidebarHeading = document.createElement('div');
        sidebarHeading.classList.add('sidebar-heading');
        const sidebarTitle = document.createElement('div');
        sidebarTitle.classList.add('sidebar-title');
        sidebarTitle.textContent = 'Projects';
        sidebarHeading.appendChild(sidebarTitle);
        sidebar.appendChild(sidebarHeading);

        const projects = document.createElement('div');
        projects.classList.add('projects');

        sidebar.appendChild(projects);

        const addProjectBtn = document.createElement('button');
        addProjectBtn.classList.add('add-project-btn');
        addProjectBtn.textContent = '+ Add Project';
        addProjectBtn.addEventListener('click', () => this.showProjectForm());
        sidebar.appendChild(addProjectBtn);

        const projectFormContainer = document.createElement('div');
        projectFormContainer.classList.add('project-form-container');
        const projectForm = document.createElement('div');
        projectForm.classList.add('project-form');
        const projectInput = document.createElement('input');
        projectInput.type = 'text';
        projectInput.id = 'p-title';
        projectInput.placeholder = 'Project Title';
        projectInput.addEventListener('keyup', (e) => this.keyPress(e));
        projectForm.appendChild(projectInput);
        projectFormContainer.appendChild(projectForm);

        const projectFormBtns = document.createElement('div');
        projectFormBtns.classList.add('project-form-btns');
        const submitBtn = document.createElement('button');
        submitBtn.classList.add('submit-btn');
        submitBtn.textContent = 'SUBMIT';
        submitBtn.addEventListener('click', () => this.submitProjectForm());
        const cancelBtn = document.createElement('button');
        cancelBtn.classList.add('cancel-btn');
        cancelBtn.textContent = 'CANCEL';
        cancelBtn.addEventListener('click', () => this.hideProjectForm());
        projectFormBtns.appendChild(submitBtn);
        projectFormBtns.appendChild(cancelBtn);
        projectFormContainer.appendChild(projectFormBtns);

        projectFormContainer.style.display = 'none';

        sidebar.appendChild(projectFormContainer);

        return sidebar;
    }

    static keyPress(e) {
        if(e.keyCode === 13 && e.target.id === 'p-title') {
            this.submitProjectForm();
        }
        else if(e.keyCode === 13 && e.target.id === 't-title') {
            this.submitTaskForm();
        }
    }
    
    // Hide add project button and display project form
    static showProjectForm() {

        const taskFormContainer = document.querySelector('.task-form-container');
        if(taskFormContainer.style.display === 'flex') {
            this.hideTaskForm();
        }

        const addProjectBtn = document.querySelector('.add-project-btn');
        addProjectBtn.style.display = 'none';

        const projectFormContainer = document.querySelector('.project-form-container');
        projectFormContainer.style.display = 'flex';

    }

    // Display add project button and hide project form
    static hideProjectForm() {
        const addProjectBtn = document.querySelector('.add-project-btn');
        addProjectBtn.style.display = 'inline-block';

        const projectFormContainer = document.querySelector('.project-form-container');
        projectFormContainer.style.display = 'none';
    }

    static submitProjectForm() {
        const projectFormValue = document.querySelector('#p-title').value;
        if(projectFormValue !== '' && projectFormValue !== 'Home') {
            let project = new _Project__WEBPACK_IMPORTED_MODULE_1__["default"](`${projectFormValue}`, `${_ToDoList__WEBPACK_IMPORTED_MODULE_0__["default"].key}`);
            _ToDoList__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(project);

            // Adds the project into local storage
            localStorage.setItem(`${project.getKey()}`, JSON.stringify(project));

            document.querySelector('#p-title').value = '';
            this.hideProjectForm();            
        }
    }

    static currentProject() {

        const currentProjectContainer = document.createElement('div');
        currentProjectContainer.classList.add('current-project-container');

        const currentProject = document.createElement('div');
        currentProject.classList.add('current-project');

        const currentProjectTitle = document.createElement('div');
        currentProjectTitle.classList.add('current-project-title');
        currentProjectTitle.textContent = 'Home';
        currentProjectTitle.style.display = 'block';
        currentProject.appendChild(currentProjectTitle);
 
        const tasks = document.createElement('div');
        tasks.classList.add('tasks');
        currentProject.appendChild(tasks);

        const addTaskBtn = document.createElement('button');
        addTaskBtn.classList.add('add-task-btn');
        addTaskBtn.textContent = '+ Add Task';
        addTaskBtn.style.display = 'none';
        addTaskBtn.addEventListener('click', () => this.showTaskForm());
        currentProject.appendChild(addTaskBtn);

        const taskFormContainer = document.createElement('div');
        taskFormContainer.classList.add('task-form-container');
        const taskForm = document.createElement('div');
        taskForm.classList.add('task-form');
        const taskInput = document.createElement('input');
        taskInput.type = 'text';
        taskInput.id = 't-title';
        taskInput.placeholder = 'Task Title';
        taskInput.addEventListener('keyup', (e) => this.keyPress(e));
        taskForm.appendChild(taskInput);
        taskFormContainer.appendChild(taskForm);

        const taskFormBtns = document.createElement('div');
        taskFormBtns.classList.add('task-form-btns');
        const submitBtn = document.createElement('button');
        submitBtn.classList.add('submit-btn');
        submitBtn.textContent = 'SUBMIT';
        submitBtn.addEventListener('click', () => this.submitTaskForm());
        const cancelBtn = document.createElement('button');
        cancelBtn.classList.add('cancel-btn');
        cancelBtn.textContent = 'CANCEL';
        cancelBtn.addEventListener('click', () => this.hideTaskForm());
        taskFormBtns.appendChild(submitBtn);
        taskFormBtns.appendChild(cancelBtn);
        taskFormContainer.appendChild(taskFormBtns);

        taskFormContainer.style.display = 'none';

        currentProject.appendChild(taskFormContainer);
        currentProjectContainer.appendChild(currentProject);

        return currentProjectContainer;
    }

    static showTaskForm() {

        const projectFormContainer = document.querySelector('.project-form-container');
        if(projectFormContainer.style.display === 'flex') {
            this.hideProjectForm();
        }

        const addTaskBtn = document.querySelector('.add-task-btn');
        addTaskBtn.style.display = 'none';

        const taskFormContainer = document.querySelector('.task-form-container');
        taskFormContainer.style.display = 'flex';
    }

    static hideTaskForm() {
        const addTaskBtn = document.querySelector('.add-task-btn');
        addTaskBtn.style.display = 'inline-block';

        const taskFormContainer = document.querySelector('.task-form-container');
        taskFormContainer.style.display = 'none';
    }

    static submitTaskForm() {
        const taskFormValue = document.querySelector('#t-title').value;
        if(_ToDoList__WEBPACK_IMPORTED_MODULE_0__["default"].selectedProject !== undefined && taskFormValue !== '') {
            let task = new _Task__WEBPACK_IMPORTED_MODULE_2__["default"](`${taskFormValue}`);

            let getProject = JSON.parse(localStorage.getItem(`${_ToDoList__WEBPACK_IMPORTED_MODULE_0__["default"].selectedProject.dataset.key}`));
            if(getProject !== null) {
                let newProject = Object.assign(new _Project__WEBPACK_IMPORTED_MODULE_1__["default"](), getProject);
                newProject.addTask(task);
                localStorage.setItem(`${_ToDoList__WEBPACK_IMPORTED_MODULE_0__["default"].selectedProject.dataset.key}`, JSON.stringify(newProject));
            }

            document.querySelector('#t-title').value = '';
            this.hideTaskForm();   
        }
    }

    static footer() {
        const footer = document.createElement('footer');
        footer.textContent = 'Todo List';

        return footer;
    }

    static loadStorage() {
        // Sort the project keys before displaying
        let sortedStorage = [];
        for (let i = 0; i < localStorage.length; i++) {
            sortedStorage.push(localStorage.key(i));
        }
        sortedStorage.sort();

        for (let i = 0; i < sortedStorage.length; i++) {
            let key = sortedStorage[i];
            let value = localStorage.getItem(key);

            let getProject = JSON.parse(value);
            let newProject = Object.assign(new _Project__WEBPACK_IMPORTED_MODULE_1__["default"](), getProject);

            // Update data-key in order to keep track of localStorage projects. 
            _ToDoList__WEBPACK_IMPORTED_MODULE_0__["default"].key = newProject.getKey();
            _ToDoList__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(newProject);         

            newProject.getTasks().forEach(task => {
                let newTask = Object.assign(new _Task__WEBPACK_IMPORTED_MODULE_2__["default"](), task);
                newProject.loadTask(newTask);
            })
            
        }
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);

/***/ }),

/***/ "./src/fonts/SmoochSans-VariableFont_wght.ttf":
/*!****************************************************!*\
  !*** ./src/fonts/SmoochSans-VariableFont_wght.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e270a292d6723b019ce0.ttf";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");



document.body.appendChild(_modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"].header());
document.body.appendChild(_modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"].content());
document.querySelector('#content').appendChild(_modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"].sidebar());
document.querySelector('#content').appendChild(_modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"].currentProject());
document.body.appendChild(_modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"].footer());
_modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"].loadStorage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEseUJBQXlCLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxL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LHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7QUNyQnFCO0FBQ1M7O0FBRTlCLDBCQUEwQiwwREFBUztBQUNuQywwQkFBMEIsMkRBQVU7QUFDcEMsK0NBQStDLDJEQUFVO0FBQ3pELCtDQUErQyxrRUFBaUI7QUFDaEUsMEJBQTBCLDBEQUFTO0FBQ25DLCtEQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9UYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1RvRG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9TbW9vY2hTYW5zLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogcGFnZUZvbnQ7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgICBmb250LWZhbWlseTogcGFnZUZvbnQ7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzE5MTc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcXG59XFxuXFxuLmhlYWRlci10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uc2hvdy1zaWRlYmFyIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTVlNDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxufVxcblxcbiNjb250ZW50IC5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjUyNDtcXG4gICAgcGFkZGluZzogNTBweCAyMHB4IDUwcHggMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI2NvbnRlbnQgLnNpZGViYXItdGl0bGUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuIHtcXG4gICAgZm9udC1mYW1pbHk6IHBhZ2VGb250O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICM4MDgwODA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMDsgXFxufVxcblxcbi5hZGQtcHJvamVjdC1idG46aG92ZXIge1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLnNpZGViYXItaGVhZGluZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgY29sb3I6ICM4MDgwODA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciB7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtYnRuIHtcXG4gICAgY29sb3I6ICM4MDgwODA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtZm9ybS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jcC10aXRsZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgICBmb250LWZhbWlseTogcGFnZUZvbnQ7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0tYnRucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2plY3QtZm9ybS1idG5zIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBwYWdlRm9udDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLWJ0bnMgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuI2NvbnRlbnQgLmN1cnJlbnQtcHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQgLmN1cnJlbnQtcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlN2U1ZTQ7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7ICAgXFxuICAgIG1pbi13aWR0aDogNTAwcHg7XFxuICAgIG1heC13aWR0aDogOTAwcHg7XFxuICAgIGZsZXgtYmFzaXM6IGF1dG87IC8qIGRlZmF1bHQgdmFsdWUgKi9cXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4uY3VycmVudC1wcm9qZWN0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGFza3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4udGFzayB7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBjb2xvcjogIzgwODA4MDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXNrOmhvdmVyIHtcXG4gICAgY29sb3I6ICMwMDAwMDA7ICAgXFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5kZWxldGUtdGFzay1idG4ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogIzgwODA4MDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gICAgZm9udC1mYW1pbHk6IHBhZ2VGb250O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICM4MDgwODA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4udGFzay1mb3JtLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiN0LXRpdGxlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBwYWdlRm9udDtcXG59XFxuXFxuLnRhc2stZm9ybS1idG5zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udGFzay1mb3JtLWJ0bnMgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgZm9udC1mYW1pbHk6IHBhZ2VGb250O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWZvcm0tYnRucyBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxOTE3O1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBb0Q7QUFDeEQ7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQixFQUFFLGtCQUFrQjtJQUNwQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogcGFnZUZvbnQ7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1Ntb29jaFNhbnMtVmFyaWFibGVGb250X3dnaHQudHRmJyk7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gICAgZm9udC1mYW1pbHk6IHBhZ2VGb250O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxOTE3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XFxufVxcblxcbi5oZWFkZXItdGl0bGUge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLnNob3ctc2lkZWJhciB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlN2U1ZTQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcbn1cXG5cXG4jY29udGVudCAuc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI1MjQ7XFxuICAgIHBhZGRpbmc6IDUwcHggMjBweCA1MHB4IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNjb250ZW50IC5zaWRlYmFyLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICAgIGZvbnQtZmFtaWx5OiBwYWdlRm9udDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiAjODA4MDgwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDA7IFxcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5zaWRlYmFyLWhlYWRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgIGNvbG9yOiAjODA4MDgwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XFxuICAgIGNvbG9yOiAjODA4MDgwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI3AtdGl0bGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgZm9udC1mYW1pbHk6IHBhZ2VGb250O1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLWJ0bnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0tYnRucyBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmb250LWZhbWlseTogcGFnZUZvbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtZm9ybS1idG5zIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbiNjb250ZW50IC5jdXJyZW50LXByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50IC5jdXJyZW50LXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlNWU0O1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxMHB4OyAgIFxcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xcbiAgICBmbGV4LWJhc2lzOiBhdXRvOyAvKiBkZWZhdWx0IHZhbHVlICovXFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLmN1cnJlbnQtcHJvamVjdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRhc2tzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgY29sb3I6ICM4MDgwODA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICAgIGNvbG9yOiAjMDAwMDAwOyAgIFxcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uZGVsZXRlLXRhc2stYnRuIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICM4MDgwODA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICAgIGZvbnQtZmFtaWx5OiBwYWdlRm9udDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiAjODA4MDgwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5hZGQtdGFzay1idG46aG92ZXIge1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG59XFxuXFxuLnRhc2stZm9ybS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jdC10aXRsZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgICBmb250LWZhbWlseTogcGFnZUZvbnQ7XFxufVxcblxcbi50YXNrLWZvcm0tYnRucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnRhc2stZm9ybS1idG5zIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBwYWdlRm9udDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1mb3JtLWJ0bnMgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMTkxNztcXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBQcm9qZWN0IHtcbiAgICBcbiAgICB0YXNrcyA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwga2V5KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIH1cblxuICAgIGFkZFRhc2sodGFzaykge1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG5cbiAgICAgICAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICAgICAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgICAgIG5ld1Rhc2suZGF0YXNldC5rZXkgPSB0aGlzLmtleTtcblxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG4gICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IGAke3Rhc2suZ2V0VGl0bGUoKX1gO1xuICAgICAgICBuZXdUYXNrLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtdGFzay1idG4nKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5kZWxldGVUYXNrKGUpKTtcbiAgICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpLmFwcGVuZENoaWxkKG5ld1Rhc2spO1xuICAgIH1cblxuICAgIGxvYWRUYXNrKHRhc2spIHtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICAgICAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgICAgIG5ld1Rhc2suZGF0YXNldC5rZXkgPSB0aGlzLmtleTtcblxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG4gICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IGAke3Rhc2suZ2V0VGl0bGUoKX1gO1xuICAgICAgICBuZXdUYXNrLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtdGFzay1idG4nKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5kZWxldGVUYXNrKGUpKTtcbiAgICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpLmFwcGVuZENoaWxkKG5ld1Rhc2spO1xuICAgIH1cbiAgICBcbiAgICBkZWxldGVUYXNrKGUpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnRhc2tzLmZpbmRJbmRleCh0YXNrID0+IHRhc2sudGl0bGUgPT09IGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQpO1xuICAgICAgICBpZihpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudGFza3Muc3BsaWNlKGluZGV4LCAxKTsgXG4gICAgICAgIH1cbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcblxuICAgICAgICAvLyBGaW5kIHRoZSBwcm9qZWN0IGluIGxvY2FsIHN0b3JhZ2UsIHJlbW92ZSB0aGUgdGFzayBmcm9tIHRoZSBhcnJheSwgYWRkIGl0IGJhY2sgaW50byB0aGUgbG9jYWwgc3RvcmFnZS5cbiAgICAgICAgY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShlLnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQua2V5KTtcbiAgICAgICAgbGV0IGdldFByb2plY3QgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgY29uc3QgdGFza0luZGV4ID0gZ2V0UHJvamVjdC50YXNrcy5maW5kSW5kZXgodGFzayA9PiB0YXNrLnRpdGxlID09PSBlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuWzBdLnRleHRDb250ZW50KTtcbiAgICAgICAgZ2V0UHJvamVjdC50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7ZS50YXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LmtleX1gLCBKU09OLnN0cmluZ2lmeShnZXRQcm9qZWN0KSk7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgZ2V0S2V5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5rZXk7XG4gICAgfVxuXG4gICAgZ2V0VGFza3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDsiLCJjbGFzcyBUYXNrIHtcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9XG5cbiAgICBzZXRUaXRsZSh0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgfVxuXG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrOyIsImltcG9ydCBVSSBmcm9tIFwiLi9VSVwiO1xuXG5jbGFzcyBUb0RvTGlzdCB7XG5cbiAgICBzdGF0aWMgcHJvamVjdHMgPSBbXTtcbiAgICBzdGF0aWMga2V5ID0gMDtcbiAgICBzdGF0aWMgc2VsZWN0ZWRQcm9qZWN0O1xuXG4gICAgLy8gQWRkIHByb2plY3Qgb2JqZWN0IGludG8gYXJyYXkgJiBET01cbiAgICBzdGF0aWMgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcblxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgICAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgbmV3UHJvamVjdC5kYXRhc2V0LmtleSA9IHRoaXMua2V5O1xuICAgICAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMuc2VsZWN0UHJvamVjdChlKSk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0LmdldFByb2plY3ROYW1lKCl9YDtcbiAgICAgICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXByb2plY3QtYnRuJyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMuZGVsZXRlUHJvamVjdChlKSk7XG4gICAgICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcbiAgICAgICAgdGhpcy5rZXkrKztcbiAgICB9XG4gICAgXG4gICAgLy8gUmVtb3ZlIHByb2plY3Qgb2JqZWN0IGZyb20gYXJyYXkgJiBET01cbiAgICBzdGF0aWMgZGVsZXRlUHJvamVjdChlKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wcm9qZWN0cy5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0LmtleSA9PT0gZS50YXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LmtleSk7XG4gICAgICAgIGlmKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGZyb20gYXJyYXkgdXNpbmcgaW5kZXgsIHJlbW92ZSBmcm9tIGxvY2FsU3RvcmFnZSB1c2luZyBkYXRhLWtleVxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpOyBcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGAke2UudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5rZXl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIHByb2plY3QgZnJvbSBzaWRlYmFyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0W2RhdGEta2V5PVwiJHtlLnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQua2V5fVwiXWApLnJlbW92ZSgpO1xuXG4gICAgICAgIC8vIElmIHRoZSBkZWxldGVkIHdhcyBhIHNlbGVjdGVkIHByb2plY3QsIGRlbGV0ZSBhbGwgdGhlaXIgdGFzayBmcm9tIERPTSBhbmQgcmVzZXQgdGhlIHNlbGVjdGVkIHByb2plY3QuXG4gICAgICAgIC8vIEVsc2UsIGlmIGEgbm9uIHNlbGVjdGVkIHByb2plY3Qgd2FzIGRlbGV0ZWQsIGRlbGV0ZSB0aGVpciB0YXNrLiBcbiAgICAgICAgaWYoZS50YXJnZXQucGFyZW50Tm9kZSA9PT0gdGhpcy5zZWxlY3RlZFByb2plY3QpeyAgXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1wcm9qZWN0LXRpdGxlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC50YXNrW2RhdGEta2V5PVwiJHtlLnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQua2V5fVwiXWApO1xuICAgICAgICAgICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHRhc2sucmVtb3ZlKCkpO1xuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkUHJvamVjdCA9IHVuZGVmaW5lZDsgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC50YXNrW2RhdGEta2V5PVwiJHtlLnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQua2V5fVwiXWApO1xuICAgICAgICAgICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHRhc2sucmVtb3ZlKCkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBsYXN0IHByb2plY3QgaXMgZGVsZXRlZCBjbGVhciB0aGUgZGlzcGxheVxuICAgICAgICBpZih0aGlzLnByb2plY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtcHJvamVjdC10aXRsZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkUHJvamVjdCk7XG4gICAgfVxuXG4gICAgLy8gSGlnaGxpZ2h0cyB0aGUgc2VsZWN0ZWQgdGFzayBhbmQgZGlzcGxheSBpdCB0byB0aGUgRE9NLlxuICAgIHN0YXRpYyBzZWxlY3RQcm9qZWN0KGUpIHtcbiAgICAgICAgLy8gSGlkZSBhbnkgZm9ybXMgd2hlbiBzZWxlY3RpbmcgYSBkaWZmZXJlbnQgcHJvamVjdC5cbiAgICAgICAgY29uc3QgdGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBwcm9qZWN0Rm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0tY29udGFpbmVyJyk7XG4gICAgICAgIGlmKHRhc2tGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgICAgICAgVUkuaGlkZVRhc2tGb3JtKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihwcm9qZWN0Rm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgICAgIFVJLmhpZGVQcm9qZWN0Rm9ybSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICdIb21lJykge1xuICAgICAgICAgICAgLy8gRGVzZWxlY3QgdGhlIHByZXZpb3VzIHByb2plY3QgYW5kIHNlbGVjdCB0aGUgaG9tZSBwcm9qZWN0LlxuICAgICAgICAgICAgaWYodGhpcy5zZWxlY3RlZFByb2plY3QgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnNlbGVjdGVkUHJvamVjdC50ZXh0Q29udGVudCAhPT0gJ0hvbWUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFByb2plY3Quc3R5bGUuZm9udFdlaWdodCA9ICdub3JtYWwnO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQcm9qZWN0LnN0eWxlLmNvbG9yID0gJyM4MDgwODAnO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFByb2plY3QgPSBlLnRhcmdldDsgXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFByb2plY3Quc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkUHJvamVjdC5zdHlsZS5jb2xvciA9ICcjZmZmZmZmJztcblxuICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgYWxsIHRhc2tcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtcHJvamVjdC10aXRsZScpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3RUaXRsZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpO1xuICAgICAgICAgICAgICAgIGFkZFRhc2tCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG4gICAgICAgICAgICAgICAgdGFza3MuY2hpbGROb2Rlcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7IC8vIElmIGhvbWUgcHJvamVjdCBpcyBzZWxlY3RlZCwgYW5kIHRoZXJlIGlzIG5vIHNlbGVjdGVkIHByb2plY3QuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFByb2plY3QgPSBlLnRhcmdldDsgXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFByb2plY3Quc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkUHJvamVjdC5zdHlsZS5jb2xvciA9ICcjZmZmZmZmJztcblxuICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgYWxsIHRhc2tcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtcHJvamVjdC10aXRsZScpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3RUaXRsZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpO1xuICAgICAgICAgICAgICAgIGFkZFRhc2tCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG4gICAgICAgICAgICAgICAgdGFza3MuY2hpbGROb2Rlcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICAgICAgfSk7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZS50YXJnZXQuY2xhc3NOYW1lID09PSAncHJvamVjdC10aXRsZScpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRQcm9qZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkUHJvamVjdCA9IGUudGFyZ2V0LnBhcmVudE5vZGU7IFxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQcm9qZWN0LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFByb2plY3Quc3R5bGUuY29sb3IgPSAnI2ZmZmZmZic7ICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXByb2plY3QtdGl0bGUnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJykuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVRhc2soKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkUHJvamVjdC5zdHlsZS5mb250V2VpZ2h0ID0gJ25vcm1hbCc7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkUHJvamVjdC5zdHlsZS5jb2xvciA9ICcjODA4MDgwJztcblxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFByb2plY3QgPSBlLnRhcmdldC5wYXJlbnROb2RlOyBcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQcm9qZWN0LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkUHJvamVjdC5zdHlsZS5jb2xvciA9ICcjZmZmZmZmJzsgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXByb2plY3QtdGl0bGUnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlUYXNrKCkgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihlLnRhcmdldC5jbGFzc05hbWUgPT09ICdwcm9qZWN0Jyl7IFxuICAgICAgICAgICAgaWYodGhpcy5zZWxlY3RlZFByb2plY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQcm9qZWN0ID0gZS50YXJnZXQ7IFxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQcm9qZWN0LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFByb2plY3Quc3R5bGUuY29sb3IgPSAnI2ZmZmZmZic7IFxuICAgIFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXByb2plY3QtdGl0bGUnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJykuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVRhc2soKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFByb2plY3Quc3R5bGUuZm9udFdlaWdodCA9ICdub3JtYWwnO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQcm9qZWN0LnN0eWxlLmNvbG9yID0gJyM4MDgwODAnO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFByb2plY3QgPSBlLnRhcmdldDsgXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFByb2plY3Quc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkUHJvamVjdC5zdHlsZS5jb2xvciA9ICcjZmZmZmZmJzsgXG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1wcm9qZWN0LXRpdGxlJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlUYXNrKCkgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICBcbiAgICB9XG5cbiAgICAvLyBTZWxlY3RlZCBwcm9qZWN0IHdpbGwgaGF2ZSB0aGVpciB0YXNrIGRpc3BsYXllZFxuICAgIHN0YXRpYyBkaXNwbGF5VGFzaygpIHtcbiAgICAgICAgaWYodGhpcy5zZWxlY3RlZFByb2plY3QuZGF0YXNldC5rZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnByb2plY3RzLmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3Qua2V5ID09PSB0aGlzLnNlbGVjdGVkUHJvamVjdC5kYXRhc2V0LmtleSk7XG4gICAgICAgICAgICAvLyBIaWRlIHRoZSBwcmV2aW91cyBwcm9qZWN0J3MgdGFzayBieSBjaGVjayBpZiB0aGUgaWQgbWF0Y2hlcy5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuICAgICAgICAgICAgY3VycmVudFRhc2tzLmNoaWxkTm9kZXMuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBpZih0YXNrLmRhdGFzZXQua2V5ICE9PSB0aGlzLnNlbGVjdGVkUHJvamVjdC5kYXRhc2V0LmtleSkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBDaGFuZ2UgdGhlIGN1cnJlbnQtcHJvamVjdC10aXRsZSB0byB0aGUgc2VsZWN0ZWQgcHJvamVjdCdzIHRpdGxlXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtcHJvamVjdC10aXRsZScpO1xuICAgICAgICAgICAgY3VycmVudFByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGAke3RoaXMucHJvamVjdHNbaW5kZXhdLmdldFByb2plY3ROYW1lKCl9YDtcbiAgICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgYXJyYXkodGFza3MpIGluIHRoZSBwcm9qZWN0IG9iamVjdCBhbmQgZGlzcGxheSBpdCBvbnRvIERPTVxuICAgICAgICAgICAgY3VycmVudFRhc2tzLmNoaWxkTm9kZXMuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBpZih0YXNrLmRhdGFzZXQua2V5ID09PSB0aGlzLnNlbGVjdGVkUHJvamVjdC5kYXRhc2V0LmtleSkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9Eb0xpc3Q7IiwiaW1wb3J0IFRvRG9MaXN0IGZyb20gXCIuL1RvRG9MaXN0XCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCI7XG5cbmNsYXNzIFVJIHtcblxuICAgIHN0YXRpYyBoZWFkZXIoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWRlclRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci10aXRsZScpO1xuICAgICAgICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9ICdUb2RvIExpc3QnO1xuXG4gICAgICAgIGNvbnN0IHNob3dTaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHNob3dTaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ3Nob3ctc2lkZWJhcicpO1xuICAgICAgICBzaG93U2lkZUJhci50ZXh0Q29udGVudCA9ICfiiaEnO1xuXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChzaG93U2lkZUJhcik7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gaGVhZGVyO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZW50KCkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRlbnQuaWQgPSAnY29udGVudCc7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgc3RhdGljIHNpZGViYXIoKSB7XG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVmYXVsdFByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICBkZWZhdWx0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBUb0RvTGlzdC5zZWxlY3RQcm9qZWN0KGUpKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdFByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZWZhdWx0UHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKTtcbiAgICAgICAgZGVmYXVsdFByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICAgICAgZGVmYXVsdFByb2plY3RUaXRsZS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICBkZWZhdWx0UHJvamVjdFRpdGxlLnN0eWxlLmNvbG9yID0gJyNmZmZmZmYnO1xuICAgICAgICBUb0RvTGlzdC5zZWxlY3RlZFByb2plY3QgPSBkZWZhdWx0UHJvamVjdFRpdGxlO1xuICAgICAgICBkZWZhdWx0UHJvamVjdC5hcHBlbmRDaGlsZChkZWZhdWx0UHJvamVjdFRpdGxlKTtcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChkZWZhdWx0UHJvamVjdCk7XG5cbiAgICAgICAgY29uc3Qgc2lkZWJhckhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2lkZWJhckhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1oZWFkaW5nJyk7XG4gICAgICAgIGNvbnN0IHNpZGViYXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaWRlYmFyVGl0bGUuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci10aXRsZScpO1xuICAgICAgICBzaWRlYmFyVGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuICAgICAgICBzaWRlYmFySGVhZGluZy5hcHBlbmRDaGlsZChzaWRlYmFyVGl0bGUpO1xuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJIZWFkaW5nKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xuXG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1idG4nKTtcbiAgICAgICAgYWRkUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICcrIEFkZCBQcm9qZWN0JztcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuc2hvd1Byb2plY3RGb3JtKCkpO1xuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZm9ybS1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1mb3JtJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHByb2plY3RJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgICBwcm9qZWN0SW5wdXQuaWQgPSAncC10aXRsZSc7XG4gICAgICAgIHByb2plY3RJbnB1dC5wbGFjZWhvbGRlciA9ICdQcm9qZWN0IFRpdGxlJztcbiAgICAgICAgcHJvamVjdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHRoaXMua2V5UHJlc3MoZSkpO1xuICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xuICAgICAgICBwcm9qZWN0Rm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdEZvcm1CdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RGb3JtQnRucy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWZvcm0tYnRucycpO1xuICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1idG4nKTtcbiAgICAgICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1NVQk1JVCc7XG4gICAgICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuc3VibWl0UHJvamVjdEZvcm0oKSk7XG4gICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnY2FuY2VsLWJ0bicpO1xuICAgICAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ0FOQ0VMJztcbiAgICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5oaWRlUHJvamVjdEZvcm0oKSk7XG4gICAgICAgIHByb2plY3RGb3JtQnRucy5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICAgICAgICBwcm9qZWN0Rm9ybUJ0bnMuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgICAgICAgcHJvamVjdEZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm1CdG5zKTtcblxuICAgICAgICBwcm9qZWN0Rm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm1Db250YWluZXIpO1xuXG4gICAgICAgIHJldHVybiBzaWRlYmFyO1xuICAgIH1cblxuICAgIHN0YXRpYyBrZXlQcmVzcyhlKSB7XG4gICAgICAgIGlmKGUua2V5Q29kZSA9PT0gMTMgJiYgZS50YXJnZXQuaWQgPT09ICdwLXRpdGxlJykge1xuICAgICAgICAgICAgdGhpcy5zdWJtaXRQcm9qZWN0Rm9ybSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZS5rZXlDb2RlID09PSAxMyAmJiBlLnRhcmdldC5pZCA9PT0gJ3QtdGl0bGUnKSB7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdFRhc2tGb3JtKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gSGlkZSBhZGQgcHJvamVjdCBidXR0b24gYW5kIGRpc3BsYXkgcHJvamVjdCBmb3JtXG4gICAgc3RhdGljIHNob3dQcm9qZWN0Rm9ybSgpIHtcblxuICAgICAgICBjb25zdCB0YXNrRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0tY29udGFpbmVyJyk7XG4gICAgICAgIGlmKHRhc2tGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgICAgICAgdGhpcy5oaWRlVGFza0Zvcm0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtYnRuJyk7XG4gICAgICAgIGFkZFByb2plY3RCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICBjb25zdCBwcm9qZWN0Rm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0tY29udGFpbmVyJyk7XG4gICAgICAgIHByb2plY3RGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgICB9XG5cbiAgICAvLyBEaXNwbGF5IGFkZCBwcm9qZWN0IGJ1dHRvbiBhbmQgaGlkZSBwcm9qZWN0IGZvcm1cbiAgICBzdGF0aWMgaGlkZVByb2plY3RGb3JtKCkge1xuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWJ0bicpO1xuICAgICAgICBhZGRQcm9qZWN0QnRuLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcblxuICAgICAgICBjb25zdCBwcm9qZWN0Rm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0tY29udGFpbmVyJyk7XG4gICAgICAgIHByb2plY3RGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgc3RhdGljIHN1Ym1pdFByb2plY3RGb3JtKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0Rm9ybVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtdGl0bGUnKS52YWx1ZTtcbiAgICAgICAgaWYocHJvamVjdEZvcm1WYWx1ZSAhPT0gJycgJiYgcHJvamVjdEZvcm1WYWx1ZSAhPT0gJ0hvbWUnKSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KGAke3Byb2plY3RGb3JtVmFsdWV9YCwgYCR7VG9Eb0xpc3Qua2V5fWApO1xuICAgICAgICAgICAgVG9Eb0xpc3QuYWRkUHJvamVjdChwcm9qZWN0KTtcblxuICAgICAgICAgICAgLy8gQWRkcyB0aGUgcHJvamVjdCBpbnRvIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3Byb2plY3QuZ2V0S2V5KCl9YCwgSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC10aXRsZScpLnZhbHVlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmhpZGVQcm9qZWN0Rm9ybSgpOyAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGN1cnJlbnRQcm9qZWN0KCkge1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtcHJvamVjdC1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjdXJyZW50UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXByb2plY3QnKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1wcm9qZWN0LXRpdGxlJyk7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0VGl0bGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LmFwcGVuZENoaWxkKGN1cnJlbnRQcm9qZWN0VGl0bGUpO1xuIFxuICAgICAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrcy5jbGFzc0xpc3QuYWRkKCd0YXNrcycpO1xuICAgICAgICBjdXJyZW50UHJvamVjdC5hcHBlbmRDaGlsZCh0YXNrcyk7XG5cbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWJ0bicpO1xuICAgICAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gJysgQWRkIFRhc2snO1xuICAgICAgICBhZGRUYXNrQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnNob3dUYXNrRm9ybSgpKTtcbiAgICAgICAgY3VycmVudFByb2plY3QuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG5cbiAgICAgICAgY29uc3QgdGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1mb3JtLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0nKTtcbiAgICAgICAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGFza0lucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgIHRhc2tJbnB1dC5pZCA9ICd0LXRpdGxlJztcbiAgICAgICAgdGFza0lucHV0LnBsYWNlaG9sZGVyID0gJ1Rhc2sgVGl0bGUnO1xuICAgICAgICB0YXNrSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4gdGhpcy5rZXlQcmVzcyhlKSk7XG4gICAgICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tJbnB1dCk7XG4gICAgICAgIHRhc2tGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcblxuICAgICAgICBjb25zdCB0YXNrRm9ybUJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0Zvcm1CdG5zLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZm9ybS1idG5zJyk7XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnc3VibWl0LWJ0bicpO1xuICAgICAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnU1VCTUlUJztcbiAgICAgICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5zdWJtaXRUYXNrRm9ybSgpKTtcbiAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtYnRuJyk7XG4gICAgICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDQU5DRUwnO1xuICAgICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmhpZGVUYXNrRm9ybSgpKTtcbiAgICAgICAgdGFza0Zvcm1CdG5zLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gICAgICAgIHRhc2tGb3JtQnRucy5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICAgICAgICB0YXNrRm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRm9ybUJ0bnMpO1xuXG4gICAgICAgIHRhc2tGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgY3VycmVudFByb2plY3QuYXBwZW5kQ2hpbGQodGFza0Zvcm1Db250YWluZXIpO1xuICAgICAgICBjdXJyZW50UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50UHJvamVjdCk7XG5cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0Q29udGFpbmVyO1xuICAgIH1cblxuICAgIHN0YXRpYyBzaG93VGFza0Zvcm0oKSB7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdEZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtLWNvbnRhaW5lcicpO1xuICAgICAgICBpZihwcm9qZWN0Rm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVByb2plY3RGb3JtKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpO1xuICAgICAgICBhZGRUYXNrQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgY29uc3QgdGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtLWNvbnRhaW5lcicpO1xuICAgICAgICB0YXNrRm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH1cblxuICAgIHN0YXRpYyBoaWRlVGFza0Zvcm0oKSB7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJyk7XG4gICAgICAgIGFkZFRhc2tCdG4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuXG4gICAgICAgIGNvbnN0IHRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybS1jb250YWluZXInKTtcbiAgICAgICAgdGFza0Zvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICBzdGF0aWMgc3VibWl0VGFza0Zvcm0oKSB7XG4gICAgICAgIGNvbnN0IHRhc2tGb3JtVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdC10aXRsZScpLnZhbHVlO1xuICAgICAgICBpZihUb0RvTGlzdC5zZWxlY3RlZFByb2plY3QgIT09IHVuZGVmaW5lZCAmJiB0YXNrRm9ybVZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgbGV0IHRhc2sgPSBuZXcgVGFzayhgJHt0YXNrRm9ybVZhbHVlfWApO1xuXG4gICAgICAgICAgICBsZXQgZ2V0UHJvamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7VG9Eb0xpc3Quc2VsZWN0ZWRQcm9qZWN0LmRhdGFzZXQua2V5fWApKTtcbiAgICAgICAgICAgIGlmKGdldFByb2plY3QgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3UHJvamVjdCA9IE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgZ2V0UHJvamVjdCk7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdC5hZGRUYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke1RvRG9MaXN0LnNlbGVjdGVkUHJvamVjdC5kYXRhc2V0LmtleX1gLCBKU09OLnN0cmluZ2lmeShuZXdQcm9qZWN0KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0LXRpdGxlJykudmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRoaXMuaGlkZVRhc2tGb3JtKCk7ICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZm9vdGVyKCkge1xuICAgICAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICAgICAgZm9vdGVyLnRleHRDb250ZW50ID0gJ1RvZG8gTGlzdCc7XG5cbiAgICAgICAgcmV0dXJuIGZvb3RlcjtcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZFN0b3JhZ2UoKSB7XG4gICAgICAgIC8vIFNvcnQgdGhlIHByb2plY3Qga2V5cyBiZWZvcmUgZGlzcGxheWluZ1xuICAgICAgICBsZXQgc29ydGVkU3RvcmFnZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc29ydGVkU3RvcmFnZS5wdXNoKGxvY2FsU3RvcmFnZS5rZXkoaSkpO1xuICAgICAgICB9XG4gICAgICAgIHNvcnRlZFN0b3JhZ2Uuc29ydCgpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29ydGVkU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGtleSA9IHNvcnRlZFN0b3JhZ2VbaV07XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuXG4gICAgICAgICAgICBsZXQgZ2V0UHJvamVjdCA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIGdldFByb2plY3QpO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgZGF0YS1rZXkgaW4gb3JkZXIgdG8ga2VlcCB0cmFjayBvZiBsb2NhbFN0b3JhZ2UgcHJvamVjdHMuIFxuICAgICAgICAgICAgVG9Eb0xpc3Qua2V5ID0gbmV3UHJvamVjdC5nZXRLZXkoKTtcbiAgICAgICAgICAgIFRvRG9MaXN0LmFkZFByb2plY3QobmV3UHJvamVjdCk7ICAgICAgICAgXG5cbiAgICAgICAgICAgIG5ld1Byb2plY3QuZ2V0VGFza3MoKS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBuZXdUYXNrID0gT2JqZWN0LmFzc2lnbihuZXcgVGFzaygpLCB0YXNrKTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0LmxvYWRUYXNrKG5ld1Rhc2spO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVJOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgVUkgZnJvbSAnLi9tb2R1bGVzL1VJJztcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChVSS5oZWFkZXIoKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFVJLmNvbnRlbnQoKSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKFVJLnNpZGViYXIoKSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKFVJLmN1cnJlbnRQcm9qZWN0KCkpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChVSS5mb290ZXIoKSk7XG5VSS5sb2FkU3RvcmFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9