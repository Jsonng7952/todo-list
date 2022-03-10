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
        }
        else if(e.target.className === 'project-title') {
            this.selectedProject.style.fontWeight = 'normal';
            this.selectedProject.style.color = '#808080';

            this.selectedProject = e.target.parentNode; 
            this.selectedProject.style.fontWeight = 'bold';
            this.selectedProject.style.color = '#ffffff';      
                
            document.querySelector('.current-project-title').style.display = 'block';
            document.querySelector('.add-task-btn').style.display = 'inline-block';
            this.displayTask()
        }
        else if(e.target.className === 'project'){ 
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
        if(projectFormValue !== '' && localStorage.getItem(`${projectFormValue}`) === null) {
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
        if(_ToDoList__WEBPACK_IMPORTED_MODULE_0__["default"].selectedProject !== undefined) {
            const taskFormValue = document.querySelector('#t-title').value;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEseUJBQXlCLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxL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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7OztBQ3JCcUI7QUFDUzs7QUFFOUIsMEJBQTBCLDBEQUFTO0FBQ25DLDBCQUEwQiwyREFBVTtBQUNwQywrQ0FBK0MsMkRBQVU7QUFDekQsK0NBQStDLGtFQUFpQjtBQUNoRSwwQkFBMEIsMERBQVM7QUFDbkMsK0RBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVG9Eb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1Ntb29jaFNhbnMtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBwYWdlRm9udDtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICAgIGZvbnQtZmFtaWx5OiBwYWdlRm9udDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMTkxNztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5zaG93LXNpZGViYXIge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlNWU0O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXG59XFxuXFxuI2NvbnRlbnQgLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyNTI0O1xcbiAgICBwYWRkaW5nOiA1MHB4IDIwcHggNTBweCAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jY29udGVudCAuc2lkZWJhci10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4ge1xcbiAgICBmb250LWZhbWlseTogcGFnZUZvbnQ7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogIzgwODA4MDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAwOyBcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uc2lkZWJhci1oZWFkaW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBjb2xvcjogIzgwODA4MDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idG4ge1xcbiAgICBjb2xvcjogIzgwODA4MDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNwLXRpdGxlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBwYWdlRm9udDtcXG59XFxuXFxuLnByb2plY3QtZm9ybS1idG5zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLWJ0bnMgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgZm9udC1mYW1pbHk6IHBhZ2VGb250O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0tYnRucyBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4jY29udGVudCAuY3VycmVudC1wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudCAuY3VycmVudC1wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTVlNDtcXG4gICAgcGFkZGluZzogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTBweDsgICBcXG4gICAgbWluLXdpZHRoOiA1MDBweDtcXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcXG4gICAgZmxleC1iYXNpczogYXV0bzsgLyogZGVmYXVsdCB2YWx1ZSAqL1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5jdXJyZW50LXByb2plY3QtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50YXNrcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi50YXNrIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgIGNvbG9yOiAjODA4MDgwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgICBjb2xvcjogIzAwMDAwMDsgICBcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmRlbGV0ZS10YXNrLWJ0biB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiAjODA4MDgwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgICBmb250LWZhbWlseTogcGFnZUZvbnQ7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogIzgwODA4MDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuOmhvdmVyIHtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbi50YXNrLWZvcm0tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI3QtdGl0bGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgZm9udC1mYW1pbHk6IHBhZ2VGb250O1xcbn1cXG5cXG4udGFzay1mb3JtLWJ0bnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi50YXNrLWZvcm0tYnRucyBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmb250LWZhbWlseTogcGFnZUZvbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stZm9ybS1idG5zIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzE5MTc7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLDRDQUFvRDtBQUN4RDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUUsa0JBQWtCO0lBQ3BDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBwYWdlRm9udDtcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvU21vb2NoU2Fucy1WYXJpYWJsZUZvbnRfd2dodC50dGYnKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgICBmb250LWZhbWlseTogcGFnZUZvbnQ7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzE5MTc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcXG59XFxuXFxuLmhlYWRlci10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uc2hvdy1zaWRlYmFyIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTVlNDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxufVxcblxcbiNjb250ZW50IC5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjUyNDtcXG4gICAgcGFkZGluZzogNTBweCAyMHB4IDUwcHggMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI2NvbnRlbnQgLnNpZGViYXItdGl0bGUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuIHtcXG4gICAgZm9udC1mYW1pbHk6IHBhZ2VGb250O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICM4MDgwODA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMDsgXFxufVxcblxcbi5hZGQtcHJvamVjdC1idG46aG92ZXIge1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLnNpZGViYXItaGVhZGluZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgY29sb3I6ICM4MDgwODA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciB7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtYnRuIHtcXG4gICAgY29sb3I6ICM4MDgwODA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtZm9ybS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jcC10aXRsZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgICBmb250LWZhbWlseTogcGFnZUZvbnQ7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0tYnRucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2plY3QtZm9ybS1idG5zIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBwYWdlRm9udDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLWJ0bnMgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuI2NvbnRlbnQgLmN1cnJlbnQtcHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQgLmN1cnJlbnQtcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlN2U1ZTQ7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7ICAgXFxuICAgIG1pbi13aWR0aDogNTAwcHg7XFxuICAgIG1heC13aWR0aDogOTAwcHg7XFxuICAgIGZsZXgtYmFzaXM6IGF1dG87IC8qIGRlZmF1bHQgdmFsdWUgKi9cXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4uY3VycmVudC1wcm9qZWN0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGFza3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4udGFzayB7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBjb2xvcjogIzgwODA4MDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXNrOmhvdmVyIHtcXG4gICAgY29sb3I6ICMwMDAwMDA7ICAgXFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5kZWxldGUtdGFzay1idG4ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogIzgwODA4MDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gICAgZm9udC1mYW1pbHk6IHBhZ2VGb250O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICM4MDgwODA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4udGFzay1mb3JtLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiN0LXRpdGxlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBwYWdlRm9udDtcXG59XFxuXFxuLnRhc2stZm9ybS1idG5zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udGFzay1mb3JtLWJ0bnMgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgZm9udC1mYW1pbHk6IHBhZ2VGb250O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWZvcm0tYnRucyBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxOTE3O1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIFByb2plY3Qge1xuICAgIFxuICAgIHRhc2tzID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBrZXkpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgfVxuXG4gICAgYWRkVGFzayh0YXNrKSB7XG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcblxuICAgICAgICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgICAgICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICAgICAgbmV3VGFzay5kYXRhc2V0LmtleSA9IHRoaXMua2V5O1xuXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gYCR7dGFzay5nZXRUaXRsZSgpfWA7XG4gICAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS10YXNrLWJ0bicpO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLmRlbGV0ZVRhc2soZSkpO1xuICAgICAgICBuZXdUYXNrLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJykuYXBwZW5kQ2hpbGQobmV3VGFzayk7XG4gICAgfVxuXG4gICAgbG9hZFRhc2sodGFzaykge1xuICAgICAgICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgICAgICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICAgICAgbmV3VGFzay5kYXRhc2V0LmtleSA9IHRoaXMua2V5O1xuXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gYCR7dGFzay5nZXRUaXRsZSgpfWA7XG4gICAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS10YXNrLWJ0bicpO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLmRlbGV0ZVRhc2soZSkpO1xuICAgICAgICBuZXdUYXNrLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJykuYXBwZW5kQ2hpbGQobmV3VGFzayk7XG4gICAgfVxuICAgIFxuICAgIGRlbGV0ZVRhc2soZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudGFza3MuZmluZEluZGV4KHRhc2sgPT4gdGFzay50aXRsZSA9PT0gZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlblswXS50ZXh0Q29udGVudCk7XG4gICAgICAgIGlmKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy50YXNrcy5zcGxpY2UoaW5kZXgsIDEpOyBcbiAgICAgICAgfVxuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuXG4gICAgICAgIC8vIEZpbmQgdGhlIHByb2plY3QgaW4gbG9jYWwgc3RvcmFnZSwgcmVtb3ZlIHRoZSB0YXNrIGZyb20gdGhlIGFycmF5LCBhZGQgaXQgYmFjayBpbnRvIHRoZSBsb2NhbCBzdG9yYWdlLlxuICAgICAgICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGUudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5rZXkpO1xuICAgICAgICBsZXQgZ2V0UHJvamVjdCA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICBjb25zdCB0YXNrSW5kZXggPSBnZXRQcm9qZWN0LnRhc2tzLmZpbmRJbmRleCh0YXNrID0+IHRhc2sudGl0bGUgPT09IGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQpO1xuICAgICAgICBnZXRQcm9qZWN0LnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtlLnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQua2V5fWAsIEpTT04uc3RyaW5naWZ5KGdldFByb2plY3QpKTtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBnZXRLZXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmtleTtcbiAgICB9XG5cbiAgICBnZXRUYXNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3M7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0OyIsImNsYXNzIFRhc2sge1xuXG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIHNldFRpdGxlKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9XG5cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2s7IiwiaW1wb3J0IFVJIGZyb20gXCIuL1VJXCI7XG5cbmNsYXNzIFRvRG9MaXN0IHtcblxuICAgIHN0YXRpYyBwcm9qZWN0cyA9IFtdO1xuICAgIHN0YXRpYyBrZXkgPSAwO1xuICAgIHN0YXRpYyBzZWxlY3RlZFByb2plY3Q7XG5cbiAgICAvLyBBZGQgcHJvamVjdCBvYmplY3QgaW50byBhcnJheSAmIERPTVxuICAgIHN0YXRpYyBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICBuZXdQcm9qZWN0LmRhdGFzZXQua2V5ID0gdGhpcy5rZXk7XG4gICAgICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5zZWxlY3RQcm9qZWN0KGUpKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJyk7XG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3QuZ2V0UHJvamVjdE5hbWUoKX1gO1xuICAgICAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdC1idG4nKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5kZWxldGVQcm9qZWN0KGUpKTtcbiAgICAgICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xuICAgICAgICB0aGlzLmtleSsrO1xuICAgIH1cbiAgICBcbiAgICAvLyBSZW1vdmUgcHJvamVjdCBvYmplY3QgZnJvbSBhcnJheSAmIERPTVxuICAgIHN0YXRpYyBkZWxldGVQcm9qZWN0KGUpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnByb2plY3RzLmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3Qua2V5ID09PSBlLnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQua2V5KTtcbiAgICAgICAgaWYoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgZnJvbSBhcnJheSB1c2luZyBpbmRleCwgcmVtb3ZlIGZyb20gbG9jYWxTdG9yYWdlIHVzaW5nIGRhdGEta2V5XG4gICAgICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShpbmRleCwgMSk7IFxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYCR7ZS50YXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LmtleX1gKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZW1vdmUgcHJvamVjdCBmcm9tIHNpZGViYXJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3RbZGF0YS1rZXk9XCIke2UudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5rZXl9XCJdYCkucmVtb3ZlKCk7XG5cbiAgICAgICAgLy8gSWYgdGhlIGRlbGV0ZWQgd2FzIGEgc2VsZWN0ZWQgcHJvamVjdCwgZGVsZXRlIGFsbCB0aGVpciB0YXNrIGZyb20gRE9NIGFuZCByZXNldCB0aGUgc2VsZWN0ZWQgcHJvamVjdC5cbiAgICAgICAgLy8gRWxzZSwgaWYgYSBub24gc2VsZWN0ZWQgcHJvamVjdCB3YXMgZGVsZXRlZCwgZGVsZXRlIHRoZWlyIHRhc2suIFxuICAgICAgICBpZihlLnRhcmdldC5wYXJlbnROb2RlID09PSB0aGlzLnNlbGVjdGVkUHJvamVjdCl7ICBcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXByb2plY3QtdGl0bGUnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnRhc2tbZGF0YS1rZXk9XCIke2UudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5rZXl9XCJdYCk7XG4gICAgICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4gdGFzay5yZW1vdmUoKSk7XG5cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQcm9qZWN0ID0gdW5kZWZpbmVkOyAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnRhc2tbZGF0YS1rZXk9XCIke2UudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5rZXl9XCJdYCk7XG4gICAgICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4gdGFzay5yZW1vdmUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGxhc3QgcHJvamVjdCBpcyBkZWxldGVkIGNsZWFyIHRoZSBkaXNwbGF5XG4gICAgICAgIGlmKHRoaXMucHJvamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1wcm9qZWN0LXRpdGxlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGlnaGxpZ2h0cyB0aGUgc2VsZWN0ZWQgdGFzayBhbmQgZGlzcGxheSBpdCB0byB0aGUgRE9NLlxuICAgIHN0YXRpYyBzZWxlY3RQcm9qZWN0KGUpIHtcbiAgICAgICAgLy8gSGlkZSBhbnkgZm9ybXMgd2hlbiBzZWxlY3RpbmcgYSBkaWZmZXJlbnQgcHJvamVjdC5cbiAgICAgICAgY29uc3QgdGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBwcm9qZWN0Rm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0tY29udGFpbmVyJyk7XG4gICAgICAgIGlmKHRhc2tGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgICAgICAgVUkuaGlkZVRhc2tGb3JtKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihwcm9qZWN0Rm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgICAgIFVJLmhpZGVQcm9qZWN0Rm9ybSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICdIb21lJykge1xuICAgICAgICAgICAgLy8gRGVzZWxlY3QgdGhlIHByZXZpb3VzIHByb2plY3QgYW5kIHNlbGVjdCB0aGUgaG9tZSBwcm9qZWN0LlxuICAgICAgICAgICAgaWYodGhpcy5zZWxlY3RlZFByb2plY3QgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnNlbGVjdGVkUHJvamVjdC50ZXh0Q29udGVudCAhPT0gJ0hvbWUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFByb2plY3Quc3R5bGUuZm9udFdlaWdodCA9ICdub3JtYWwnO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQcm9qZWN0LnN0eWxlLmNvbG9yID0gJyM4MDgwODAnO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFByb2plY3QgPSBlLnRhcmdldDsgXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFByb2plY3Quc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkUHJvamVjdC5zdHlsZS5jb2xvciA9ICcjZmZmZmZmJztcblxuICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgYWxsIHRhc2tcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtcHJvamVjdC10aXRsZScpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3RUaXRsZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpO1xuICAgICAgICAgICAgICAgIGFkZFRhc2tCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG4gICAgICAgICAgICAgICAgdGFza3MuY2hpbGROb2Rlcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZS50YXJnZXQuY2xhc3NOYW1lID09PSAncHJvamVjdC10aXRsZScpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQcm9qZWN0LnN0eWxlLmZvbnRXZWlnaHQgPSAnbm9ybWFsJztcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQcm9qZWN0LnN0eWxlLmNvbG9yID0gJyM4MDgwODAnO1xuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkUHJvamVjdCA9IGUudGFyZ2V0LnBhcmVudE5vZGU7IFxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFByb2plY3Quc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQcm9qZWN0LnN0eWxlLmNvbG9yID0gJyNmZmZmZmYnOyAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtcHJvamVjdC10aXRsZScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVRhc2soKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZS50YXJnZXQuY2xhc3NOYW1lID09PSAncHJvamVjdCcpeyBcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQcm9qZWN0LnN0eWxlLmZvbnRXZWlnaHQgPSAnbm9ybWFsJztcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQcm9qZWN0LnN0eWxlLmNvbG9yID0gJyM4MDgwODAnO1xuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkUHJvamVjdCA9IGUudGFyZ2V0OyBcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQcm9qZWN0LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkUHJvamVjdC5zdHlsZS5jb2xvciA9ICcjZmZmZmZmJzsgXG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXByb2plY3QtdGl0bGUnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlUYXNrKClcbiAgICAgICAgfSAgIFxuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyBTZWxlY3RlZCBwcm9qZWN0IHdpbGwgaGF2ZSB0aGVpciB0YXNrIGRpc3BsYXllZFxuICAgIHN0YXRpYyBkaXNwbGF5VGFzaygpIHtcbiAgICAgICAgaWYodGhpcy5zZWxlY3RlZFByb2plY3QuZGF0YXNldC5rZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnByb2plY3RzLmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3Qua2V5ID09PSB0aGlzLnNlbGVjdGVkUHJvamVjdC5kYXRhc2V0LmtleSk7XG4gICAgICAgICAgICAvLyBIaWRlIHRoZSBwcmV2aW91cyBwcm9qZWN0J3MgdGFzayBieSBjaGVjayBpZiB0aGUgaWQgbWF0Y2hlcy5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuICAgICAgICAgICAgY3VycmVudFRhc2tzLmNoaWxkTm9kZXMuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBpZih0YXNrLmRhdGFzZXQua2V5ICE9PSB0aGlzLnNlbGVjdGVkUHJvamVjdC5kYXRhc2V0LmtleSkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBDaGFuZ2UgdGhlIGN1cnJlbnQtcHJvamVjdC10aXRsZSB0byB0aGUgc2VsZWN0ZWQgcHJvamVjdCdzIHRpdGxlXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtcHJvamVjdC10aXRsZScpO1xuICAgICAgICAgICAgY3VycmVudFByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGAke3RoaXMucHJvamVjdHNbaW5kZXhdLmdldFByb2plY3ROYW1lKCl9YDtcbiAgICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgYXJyYXkodGFza3MpIGluIHRoZSBwcm9qZWN0IG9iamVjdCBhbmQgZGlzcGxheSBpdCBvbnRvIERPTVxuICAgICAgICAgICAgY3VycmVudFRhc2tzLmNoaWxkTm9kZXMuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBpZih0YXNrLmRhdGFzZXQua2V5ID09PSB0aGlzLnNlbGVjdGVkUHJvamVjdC5kYXRhc2V0LmtleSkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9Eb0xpc3Q7IiwiaW1wb3J0IFRvRG9MaXN0IGZyb20gXCIuL1RvRG9MaXN0XCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCI7XG5cbmNsYXNzIFVJIHtcblxuICAgIHN0YXRpYyBoZWFkZXIoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWRlclRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci10aXRsZScpO1xuICAgICAgICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9ICdUb2RvIExpc3QnO1xuXG4gICAgICAgIGNvbnN0IHNob3dTaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHNob3dTaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ3Nob3ctc2lkZWJhcicpO1xuICAgICAgICBzaG93U2lkZUJhci50ZXh0Q29udGVudCA9ICfiiaEnO1xuXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChzaG93U2lkZUJhcik7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gaGVhZGVyO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZW50KCkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRlbnQuaWQgPSAnY29udGVudCc7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgc3RhdGljIHNpZGViYXIoKSB7XG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVmYXVsdFByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICBkZWZhdWx0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBUb0RvTGlzdC5zZWxlY3RQcm9qZWN0KGUpKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdFByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZWZhdWx0UHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKTtcbiAgICAgICAgZGVmYXVsdFByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICAgICAgZGVmYXVsdFByb2plY3RUaXRsZS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICBkZWZhdWx0UHJvamVjdFRpdGxlLnN0eWxlLmNvbG9yID0gJyNmZmZmZmYnO1xuICAgICAgICBUb0RvTGlzdC5zZWxlY3RlZFByb2plY3QgPSBkZWZhdWx0UHJvamVjdFRpdGxlO1xuICAgICAgICBkZWZhdWx0UHJvamVjdC5hcHBlbmRDaGlsZChkZWZhdWx0UHJvamVjdFRpdGxlKTtcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChkZWZhdWx0UHJvamVjdCk7XG5cbiAgICAgICAgY29uc3Qgc2lkZWJhckhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2lkZWJhckhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1oZWFkaW5nJyk7XG4gICAgICAgIGNvbnN0IHNpZGViYXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaWRlYmFyVGl0bGUuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci10aXRsZScpO1xuICAgICAgICBzaWRlYmFyVGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuICAgICAgICBzaWRlYmFySGVhZGluZy5hcHBlbmRDaGlsZChzaWRlYmFyVGl0bGUpO1xuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJIZWFkaW5nKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xuXG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1idG4nKTtcbiAgICAgICAgYWRkUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICcrIEFkZCBQcm9qZWN0JztcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuc2hvd1Byb2plY3RGb3JtKCkpO1xuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZm9ybS1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1mb3JtJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHByb2plY3RJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgICBwcm9qZWN0SW5wdXQuaWQgPSAncC10aXRsZSc7XG4gICAgICAgIHByb2plY3RJbnB1dC5wbGFjZWhvbGRlciA9ICdQcm9qZWN0IFRpdGxlJztcbiAgICAgICAgcHJvamVjdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHRoaXMua2V5UHJlc3MoZSkpO1xuICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xuICAgICAgICBwcm9qZWN0Rm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdEZvcm1CdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RGb3JtQnRucy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWZvcm0tYnRucycpO1xuICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1idG4nKTtcbiAgICAgICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1NVQk1JVCc7XG4gICAgICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuc3VibWl0UHJvamVjdEZvcm0oKSk7XG4gICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnY2FuY2VsLWJ0bicpO1xuICAgICAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ0FOQ0VMJztcbiAgICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5oaWRlUHJvamVjdEZvcm0oKSk7XG4gICAgICAgIHByb2plY3RGb3JtQnRucy5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICAgICAgICBwcm9qZWN0Rm9ybUJ0bnMuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgICAgICAgcHJvamVjdEZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm1CdG5zKTtcblxuICAgICAgICBwcm9qZWN0Rm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm1Db250YWluZXIpO1xuXG4gICAgICAgIHJldHVybiBzaWRlYmFyO1xuICAgIH1cblxuICAgIHN0YXRpYyBrZXlQcmVzcyhlKSB7XG4gICAgICAgIGlmKGUua2V5Q29kZSA9PT0gMTMgJiYgZS50YXJnZXQuaWQgPT09ICdwLXRpdGxlJykge1xuICAgICAgICAgICAgdGhpcy5zdWJtaXRQcm9qZWN0Rm9ybSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZS5rZXlDb2RlID09PSAxMyAmJiBlLnRhcmdldC5pZCA9PT0gJ3QtdGl0bGUnKSB7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdFRhc2tGb3JtKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gSGlkZSBhZGQgcHJvamVjdCBidXR0b24gYW5kIGRpc3BsYXkgcHJvamVjdCBmb3JtXG4gICAgc3RhdGljIHNob3dQcm9qZWN0Rm9ybSgpIHtcblxuICAgICAgICBjb25zdCB0YXNrRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0tY29udGFpbmVyJyk7XG4gICAgICAgIGlmKHRhc2tGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgICAgICAgdGhpcy5oaWRlVGFza0Zvcm0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtYnRuJyk7XG4gICAgICAgIGFkZFByb2plY3RCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICBjb25zdCBwcm9qZWN0Rm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0tY29udGFpbmVyJyk7XG4gICAgICAgIHByb2plY3RGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgICB9XG5cbiAgICAvLyBEaXNwbGF5IGFkZCBwcm9qZWN0IGJ1dHRvbiBhbmQgaGlkZSBwcm9qZWN0IGZvcm1cbiAgICBzdGF0aWMgaGlkZVByb2plY3RGb3JtKCkge1xuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWJ0bicpO1xuICAgICAgICBhZGRQcm9qZWN0QnRuLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcblxuICAgICAgICBjb25zdCBwcm9qZWN0Rm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0tY29udGFpbmVyJyk7XG4gICAgICAgIHByb2plY3RGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgc3RhdGljIHN1Ym1pdFByb2plY3RGb3JtKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0Rm9ybVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtdGl0bGUnKS52YWx1ZTtcbiAgICAgICAgaWYocHJvamVjdEZvcm1WYWx1ZSAhPT0gJycgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7cHJvamVjdEZvcm1WYWx1ZX1gKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdChgJHtwcm9qZWN0Rm9ybVZhbHVlfWAsIGAke1RvRG9MaXN0LmtleX1gKTtcbiAgICAgICAgICAgIFRvRG9MaXN0LmFkZFByb2plY3QocHJvamVjdCk7XG5cbiAgICAgICAgICAgIC8vIEFkZHMgdGhlIHByb2plY3QgaW50byBsb2NhbCBzdG9yYWdlXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtwcm9qZWN0LmdldEtleSgpfWAsIEpTT04uc3RyaW5naWZ5KHByb2plY3QpKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtdGl0bGUnKS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5oaWRlUHJvamVjdEZvcm0oKTsgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjdXJyZW50UHJvamVjdCgpIHtcblxuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjdXJyZW50UHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXByb2plY3QtY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY3VycmVudFByb2plY3QuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1wcm9qZWN0Jyk7XG5cbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjdXJyZW50UHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtcHJvamVjdC10aXRsZScpO1xuICAgICAgICBjdXJyZW50UHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgICAgICBjdXJyZW50UHJvamVjdFRpdGxlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBjdXJyZW50UHJvamVjdC5hcHBlbmRDaGlsZChjdXJyZW50UHJvamVjdFRpdGxlKTtcbiBcbiAgICAgICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza3MuY2xhc3NMaXN0LmFkZCgndGFza3MnKTtcbiAgICAgICAgY3VycmVudFByb2plY3QuYXBwZW5kQ2hpbGQodGFza3MpO1xuXG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzay1idG4nKTtcbiAgICAgICAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9ICcrIEFkZCBUYXNrJztcbiAgICAgICAgYWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5zaG93VGFza0Zvcm0oKSk7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuXG4gICAgICAgIGNvbnN0IHRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZm9ybS1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgndGFzay1mb3JtJyk7XG4gICAgICAgIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRhc2tJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgICB0YXNrSW5wdXQuaWQgPSAndC10aXRsZSc7XG4gICAgICAgIHRhc2tJbnB1dC5wbGFjZWhvbGRlciA9ICdUYXNrIFRpdGxlJztcbiAgICAgICAgdGFza0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHRoaXMua2V5UHJlc3MoZSkpO1xuICAgICAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrSW5wdXQpO1xuICAgICAgICB0YXNrRm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG5cbiAgICAgICAgY29uc3QgdGFza0Zvcm1CdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tGb3JtQnRucy5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0tYnRucycpO1xuICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1idG4nKTtcbiAgICAgICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1NVQk1JVCc7XG4gICAgICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuc3VibWl0VGFza0Zvcm0oKSk7XG4gICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnY2FuY2VsLWJ0bicpO1xuICAgICAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ0FOQ0VMJztcbiAgICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5oaWRlVGFza0Zvcm0oKSk7XG4gICAgICAgIHRhc2tGb3JtQnRucy5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICAgICAgICB0YXNrRm9ybUJ0bnMuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgICAgICAgdGFza0Zvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Zvcm1CdG5zKTtcblxuICAgICAgICB0YXNrRm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LmFwcGVuZENoaWxkKHRhc2tGb3JtQ29udGFpbmVyKTtcbiAgICAgICAgY3VycmVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFByb2plY3QpO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvamVjdENvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2hvd1Rhc2tGb3JtKCkge1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybS1jb250YWluZXInKTtcbiAgICAgICAgaWYocHJvamVjdEZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVQcm9qZWN0Rm9ybSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKTtcbiAgICAgICAgYWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIGNvbnN0IHRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybS1jb250YWluZXInKTtcbiAgICAgICAgdGFza0Zvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9XG5cbiAgICBzdGF0aWMgaGlkZVRhc2tGb3JtKCkge1xuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpO1xuICAgICAgICBhZGRUYXNrQnRuLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcblxuICAgICAgICBjb25zdCB0YXNrRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0tY29udGFpbmVyJyk7XG4gICAgICAgIHRhc2tGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgc3RhdGljIHN1Ym1pdFRhc2tGb3JtKCkge1xuICAgICAgICBpZihUb0RvTGlzdC5zZWxlY3RlZFByb2plY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgdGFza0Zvcm1WYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0LXRpdGxlJykudmFsdWU7XG5cbiAgICAgICAgICAgIGxldCB0YXNrID0gbmV3IFRhc2soYCR7dGFza0Zvcm1WYWx1ZX1gKTtcblxuICAgICAgICAgICAgbGV0IGdldFByb2plY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke1RvRG9MaXN0LnNlbGVjdGVkUHJvamVjdC5kYXRhc2V0LmtleX1gKSk7XG4gICAgICAgICAgICBpZihnZXRQcm9qZWN0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIGdldFByb2plY3QpO1xuICAgICAgICAgICAgICAgIG5ld1Byb2plY3QuYWRkVGFzayh0YXNrKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtUb0RvTGlzdC5zZWxlY3RlZFByb2plY3QuZGF0YXNldC5rZXl9YCwgSlNPTi5zdHJpbmdpZnkobmV3UHJvamVjdCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdC10aXRsZScpLnZhbHVlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmhpZGVUYXNrRm9ybSgpOyAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGZvb3RlcigpIHtcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgICAgIGZvb3Rlci50ZXh0Q29udGVudCA9ICdUb2RvIExpc3QnO1xuXG4gICAgICAgIHJldHVybiBmb290ZXI7XG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRTdG9yYWdlKCkge1xuICAgICAgICAvLyBTb3J0IHRoZSBwcm9qZWN0IGtleXMgYmVmb3JlIGRpc3BsYXlpbmdcbiAgICAgICAgbGV0IHNvcnRlZFN0b3JhZ2UgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNvcnRlZFN0b3JhZ2UucHVzaChsb2NhbFN0b3JhZ2Uua2V5KGkpKTtcbiAgICAgICAgfVxuICAgICAgICBzb3J0ZWRTdG9yYWdlLnNvcnQoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRlZFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBrZXkgPSBzb3J0ZWRTdG9yYWdlW2ldO1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcblxuICAgICAgICAgICAgbGV0IGdldFByb2plY3QgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgIGxldCBuZXdQcm9qZWN0ID0gT2JqZWN0LmFzc2lnbihuZXcgUHJvamVjdCgpLCBnZXRQcm9qZWN0KTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIGRhdGEta2V5IGluIG9yZGVyIHRvIGtlZXAgdHJhY2sgb2YgbG9jYWxTdG9yYWdlIHByb2plY3RzLiBcbiAgICAgICAgICAgIFRvRG9MaXN0LmtleSA9IG5ld1Byb2plY3QuZ2V0S2V5KCk7XG4gICAgICAgICAgICBUb0RvTGlzdC5hZGRQcm9qZWN0KG5ld1Byb2plY3QpOyAgICAgICAgIFxuXG4gICAgICAgICAgICBuZXdQcm9qZWN0LmdldFRhc2tzKCkuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3VGFzayA9IE9iamVjdC5hc3NpZ24obmV3IFRhc2soKSwgdGFzayk7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdC5sb2FkVGFzayhuZXdUYXNrKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBVSTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFVJIGZyb20gJy4vbW9kdWxlcy9VSSc7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoVUkuaGVhZGVyKCkpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChVSS5jb250ZW50KCkpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmRDaGlsZChVSS5zaWRlYmFyKCkpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmRDaGlsZChVSS5jdXJyZW50UHJvamVjdCgpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoVUkuZm9vdGVyKCkpO1xuVUkubG9hZFN0b3JhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==