(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("react-element-to-jsx-string"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "react-element-to-jsx-string"], factory);
	else if(typeof exports === 'object')
		exports["AtomicWrapper"] = factory(require("React"), require("react-element-to-jsx-string"));
	else
		root["AtomicWrapper"] = factory(root["React"], root["react-element-to-jsx-string"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */'use strict';

	const React = __webpack_require__(2);
	const reactElementToJSXString = __webpack_require__(3).default;

	const AtomicWrapper = React.createClass({displayName: "AtomicWrapper",
	    parseComponents: function(components) {
	        if(components.constructor !== Array){
	            return [components];
	        }else{
	            return components;
	        }
	    },
	    render: function() {
	        const $__0=
	            
	            
	          this.props,children=$__0.children,wrapperTitle=$__0.wrapperTitle;

	        const awContainerStyle = {
	            display: "flex",
	            flexDirection: "row",
	            flexWrap: "wrap",
	            alignItems: "center",
	            justifyContent: "center"
	        }

	        const awChildrenStyle = {
	            flex: "1 50%"
	        }

	        if(!children){
	            return false;
	        }

	        return (
	            React.createElement("div", null, 
	                React.createElement("div", null, 
	                    React.createElement("h2", null, wrapperTitle)
	                ), 
	                this.parseComponents(children).map(function(item, index)  {
	                    return (
	                        React.createElement("div", {className: "aw-container", key: index, style: awContainerStyle}, 
	                            React.createElement("div", {className: "aw-results", style: awChildrenStyle}, item), 
	                            React.createElement("div", {className: "aw-code", style: awChildrenStyle}, 
	                                React.createElement("pre", null, 
	                                    reactElementToJSXString(item)
	                                )
	                            )
	                        )
	                    )
	                })
	            )
	        )
	    }
	});

	module.exports = AtomicWrapper;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }
/******/ ])
});
;