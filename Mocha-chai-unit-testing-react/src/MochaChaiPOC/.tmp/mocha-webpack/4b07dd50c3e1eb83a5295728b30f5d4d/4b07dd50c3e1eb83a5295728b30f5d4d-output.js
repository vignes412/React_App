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
		"./main.test.jsx": 2,
		"./meassage.test.jsx": 16,
		"./messageList.test.jsx": 17
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

	'use strict';

	//React Libary
	var React = __webpack_require__(3);

	//react Addon Tools
	var TestUtils = __webpack_require__(4);
	var renderIntoDocument = TestUtils.renderIntoDocument;
	var scryRenderedDOMComponentsWithTag = TestUtils.scryRenderedDOMComponentsWithTag;

	//Chai Libary
	var JSXChai = __webpack_require__(5);
	var expect = __webpack_require__(6).expect;
	var assert = __webpack_require__(6).assert;
	//JsDom libary
	var jsDom_js = __webpack_require__(7);
	var JsDom = __webpack_require__(8);

	//enzyme
	var mount = __webpack_require__(9).mount;
	var shallow = __webpack_require__(9).shallow;
	var render = __webpack_require__(9).render;

	//component
	var Component = __webpack_require__(10);

	////Run Chai Libary with JsxChai
	//chai.use(JSXChai);

	//First Test Suite
	describe('Button', function () {
	    JsDom(); //Create Dom 
	    var ComponentButton, buttons;
	    //global.document = jsDom_js.jsdom('<!doctype html><html><body><div id="app"></div></body></html>');
	    //global.window = document.defaultView;
	    //global.navigator = { userAgent: 'node.js' };

	    beforeEach(function () {
	        ComponentButton = mount(React.createElement(Component, { options: ['Bleach', 'Nevermind', 'In Utero'] }));
	        //buttons = scryRenderedDOMComponentsWithTag(ComponentButton, 'button');
	    });

	    //First Test Case
	    it('Render Button Length', function () {
	        expect(ComponentButton.find('button').length).to.equal(3);
	        // assert.fail(0, 1,"Exception has thrown");
	    });

	    //Second Test Case
	    it('Check TextContent Equal to Context', function () {
	        expect(ComponentButton.find('button').at(0).props().children.props.children).to.equal('Bleach');
	        expect(ComponentButton.find('button').at(1).props().children.props.children).to.equal('Nevermind');
	        expect(ComponentButton.find('button').at(2).props().children.props.children).to.equal('In Utero');
	    });
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
/* 5 */
/***/ function(module, exports) {

	module.exports = require("jsx-chai");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("chai");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("jsdom");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("mocha-jsdom");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("enzyme");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(3);
	var ReactDom = __webpack_require__(11);
	var ReactTable = __webpack_require__(12);
	var MessageList = __webpack_require__(14);

	var messageList = ['Test message', 'Another test message', 'Yet another test message'];

	var App = React.createClass({
	    displayName: 'App',

	    getOptions: function getOptions() {
	        return this.props.options || [];
	    },
	    getInitialState: function getInitialState() {
	        return {
	            displayText: "Click on a button"
	        };
	    },
	    clickHandler: function clickHandler(displayText) {
	        this.setState({ displayText: displayText });
	    },
	    render: function render() {
	        var _this = this;

	        var button = this.getOptions().map(function (option) {
	            return React.createElement(
	                'button',
	                { key: option, onClick: function onClick() {
	                        return _this.clickHandler(option);
	                    } },
	                React.createElement(
	                    'span',
	                    null,
	                    option
	                )
	            );
	        });
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'div',
	                { className: "display-text" },
	                this.state.displayText
	            ),
	            button,
	            React.createElement(MessageList, { messageList: messageList })
	        );
	    }

	});

	module.exports = App;
	//ReactDom.render(<App options={['ok','no','cancel']}/>, document.getElementById("app"));

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(3);
	var axios = __webpack_require__(13);

	var ReactTable = React.createClass({
	    displayName: 'ReactTable',

	    getInitialState: function getInitialState() {

	        return {
	            data: []
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        var _this2 = this;

	        var _this = this;
	        this.serverRequest = axios.get('http://localhost:59847/api/values').then(function (result) {
	            _this2.setState({ data: result.data });
	        });
	    },

	    render: function render() {
	        //   var row = console.log(this.state.data);
	        var row = this.state.data.map(function (item) {
	            return;
	            React.createElement(
	                'tr',
	                null,
	                ' ',
	                React.createElement(
	                    'td',
	                    null,
	                    item.id
	                ),
	                React.createElement(
	                    'td',
	                    null,
	                    item.first_name
	                ),
	                React.createElement(
	                    'td',
	                    null,
	                    item.last_name
	                ),
	                React.createElement(
	                    'td',
	                    null,
	                    item.email
	                ),
	                React.createElement(
	                    'td',
	                    null,
	                    item.gender
	                )
	            );
	        }.bind(this));
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'table',
	                null,
	                React.createElement(
	                    'thead',
	                    null,
	                    React.createElement(
	                        'tr',
	                        null,
	                        React.createElement(
	                            'th',
	                            null,
	                            'id'
	                        ),
	                        React.createElement(
	                            'th',
	                            null,
	                            'first Name'
	                        ),
	                        React.createElement(
	                            'th',
	                            null,
	                            'lastName'
	                        ),
	                        React.createElement(
	                            'th',
	                            null,
	                            'email'
	                        ),
	                        React.createElement(
	                            'th',
	                            null,
	                            'gender'
	                        )
	                    )
	                ),
	                React.createElement(
	                    'tbody',
	                    null,
	                    row
	                )
	            )
	        );
	    }

	});

	module.exports = ReactTable;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("axios");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(3);
	var Message = __webpack_require__(15);

	var MessageList = React.createClass({
	  displayName: 'MessageList',

	  propTypes: {
	    messageList: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'message-list' },
	      this.props.messageList.map(function (m, i) {
	        return React.createElement(Message, { key: i, message: m });
	      })
	    );
	  }
	});

	module.exports = MessageList;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(3);

	var Message = React.createClass({
	  displayName: "Message",

	  propTypes: {
	    message: React.PropTypes.string.isRequired
	  },
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "message" },
	      this.props.message
	    );
	  }
	});

	module.exports = Message;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(3);
	var shallow = __webpack_require__(9).shallow;
	var expect = __webpack_require__(6).expect;
	var Message = __webpack_require__(15);

	describe('Message', function () {
	    it('renders the message', function () {
	        var component = shallow(React.createElement(Message, { message: 'Hello, world!' }));
	        expect(component.props().className).to.equal('message');
	        expect(component.props().children).to.equal('Hello, world!');
	    });
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(3);
	var shallow = __webpack_require__(9).shallow;
	var expect = __webpack_require__(6).expect;
	var mount = __webpack_require__(9).mount;
	var Message = __webpack_require__(15);
	var MessageList = __webpack_require__(14);
	//JsDom libary
	var jsDom_js = __webpack_require__(7);
	var JsDom = __webpack_require__(8);

	describe('MessageList', function () {
	    JsDom();
	    var messageList = ['Test message', 'Another test message', 'Yet another test message'];
	    var jsx = React.createElement(MessageList, { messageList: messageList });

	    it('renders the message list', function () {
	        var component = shallow(jsx);
	        expect(component.props().className).to.equal('message-list');
	        expect(component.find(Message)).to.have.length(3);
	        expect(component.find(Message).at(0).props()).to.have.property('message', 'Test message');
	        expect(component.find(Message).at(1).props()).to.have.property('message', 'Another test message');
	        expect(component.find(Message).at(2).props()).to.have.property('message', 'Yet another test message');
	    });

	    it('does not contain message divs when deep-rendered', function () {
	        var component = shallow(jsx);
	        expect(component.find('.message')).to.have.length(0);
	    });

	    it('contains message divs when deep-rendered', function () {

	        var component = mount(jsx);
	        expect(component.find('.message')).to.have.length(3);
	        expect(component.find('.message').at(0).props().children).to.equal('Test message');
	        expect(component.find('.message').at(1).props().children).to.equal('Another test message');
	        expect(component.find('.message').at(2).props().children).to.equal('Yet another test message');
	    });

	    it('can be shallow-rendered', function () {
	        expect(shallow(jsx).debug()).to.equal('<div className="message-list">\n' + '<Message message="Test message" />\n' + '<Message message="Another test message" />\n' + '<Message message="Yet another test message" />\n' + '</div>');
	    });

	    it('can be deep-rendered', function () {
	        expect(mount(jsx).debug()).to.equal('<MessageList messageList={{...}}>\n' + '  <div className="message-list">\n' + '    <Message message="Test message">\n' + '      <div className="message">\n' + '        Test message\n' + '      </div>\n' + '    </Message>\n' + '    <Message message="Another test message">\n' + '      <div className="message">\n' + '        Another test message\n' + '      </div>\n' + '    </Message>\n' + '    <Message message="Yet another test message">\n' + '      <div className="message">\n' + '        Yet another test message\n' + '      </div>\n' + '    </Message>\n' + '  </div>\n' + '</MessageList>');
	    });
	});

/***/ }
/******/ ]);