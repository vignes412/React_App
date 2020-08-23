/******/ (function(modules) { // webpackBootstrap
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

	
	    var testsContext = __webpack_require__(1);

	    var runnable = testsContext.keys();

	    runnable.forEach(testsContext);
	    

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./js/test/main.test.jsx": 2
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var React =__webpack_require__(3);
	var renderIntoDocument =__webpack_require__(4).renderIntoDocument;
	var scryRenderedDOMComponentsWithTag =__webpack_require__(4).scryRenderedDOMComponentsWithTag ;
	var Component =__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../main.jsx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var expect=__webpack_require__(6);

	describe('Component', () => {
	it("hi",()=>{});
	    //it('renders as many buttons as stated in the options property', () => {


	    //    //const component = renderIntoDocument(
	    //    //    <Component options={['Bleach', 'Nevermind', 'In Utero']} />
	    //    //);

	    //    //const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

	    //    //expect(buttons.length).to.equal(3);
	    //    //expect(buttons[0].textContent).to.equal('Bleach');
	    //    //expect(buttons[1].textContent).to.equal('Nevermind');
	    //    //expect(buttons[2].textContent).to.equal('In Utero');
	    //});

	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-addons-test-utils");

/***/ },
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	module.exports = require("chai");

/***/ }
/******/ ]);