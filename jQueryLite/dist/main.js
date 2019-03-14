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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n    constructor(arr) {\n        this.arr = arr; \n    }\n\n    forEach(callback) { // do this to account for case where passing in dom node collection \n        this.arr.forEach((el) => callback(el)); \n    }\n\n    html(str) {\n        if (str === undefined) {\n            return this.arr[0].innerHTML;\n        } \n        for (let i = 0; i < this.arr.length; i++) {\n            this.arr[i].innerHTML = str;\n        }\n    }\n\n    empty() {\n        this.arr.forEach((node) => node.innerHTML = '');\n    }\n\n    append(content) {\n        this.arr.forEach((node) => {\n            if (typeof content === 'string') {\n                // debugger\n                node.innerHTML += content;\n            } else if (content instanceof HTMLElement) {\n                // debugger\n                node.innerHTML += content.outerHTML; \n            } else {\n                // debugger\n                content.forEach((contentNode) => {\n                    // debugger\n                    node.innerHTML += contentNode.outerHTML; \n                });\n            }\n        });\n    }\n\n    attr(attrName, val) {\n        if (val === undefined) {\n            return this.arr[0].getAttribute(attrName); \n        } else {\n            this.forEach((node) => {\n                node.setAttribute(attrName, val);\n            });\n        }\n    }\n\n    addClass(className) {\n        this.arr.forEach((node) => {\n            node.classList.add(className);\n        });\n    }\n\n    removeClass(className) {\n        this.arr.forEach((node) => {\n            node.classList.remove(className);\n        });\n    }\n\n    children() {\n        let children = []; \n        this.forEach((node) => {\n            children = children.concat(Array.from(node.children)); \n        });\n        return new DOMNodeCollection(children); \n    }\n\n    parent() {\n        let parents = [];\n        this.forEach((node) => {\n            parents = parents.concat(Array.from(node.parentNode));\n        });\n        return new DOMNodeCollection(parents); \n    }\n\n    find(selector) {\n        let foundEles = []; \n        this.forEach((node) => {\n            foundEles = foundEles.concat(Array.from(node.querySelectorAll(selector)));\n        });\n        return foundEles; \n    }\n\n    remove() {\n        this.forEach((node) => {\n            const parent = node.parentNode;\n            parent.removeChild(node);\n        });\n    }\n\n}\n\n\nmodule.exports = DOMNodeCollection; \n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// entry file \nconst DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\n//elementList = parentNode.querySelectorAll(selectors);\n$l = function($ele) {\n    let $eleArr = [];\n    if ($ele instanceof HTMLElement) {\n        $eleArr = [$ele]; \n    } else {\n        $eleArr = document.querySelectorAll($ele);\n    }\n    return new DOMNodeCollection($eleArr);\n};\n\nwindow.$l = $l;\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });