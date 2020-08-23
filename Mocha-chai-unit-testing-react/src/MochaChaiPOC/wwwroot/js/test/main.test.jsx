//React Libary
var React = require('react');

//react Addon Tools
var TestUtils = require('react-addons-test-utils');
var renderIntoDocument = TestUtils.renderIntoDocument;
var scryRenderedDOMComponentsWithTag = TestUtils.scryRenderedDOMComponentsWithTag;

//Chai Libary
var JSXChai = require('jsx-chai');
var expect = require('chai').expect;
var assert = require('chai').assert;
//JsDom libary
var jsDom_js = require('jsdom');
var JsDom = require('mocha-jsdom');

//enzyme
var mount = require('enzyme').mount;
var shallow = require('enzyme').shallow;
var render = require('enzyme').render;

//component
var Component = require('../components/main.jsx');


////Run Chai Libary with JsxChai
//chai.use(JSXChai);

//First Test Suite
describe('Button', function(){
    JsDom(); //Create Dom 
    var ComponentButton, buttons;
    //global.document = jsDom_js.jsdom('<!doctype html><html><body><div id="app"></div></body></html>');
    //global.window = document.defaultView;
    //global.navigator = { userAgent: 'node.js' };

    beforeEach(() => {
        ComponentButton = mount(<Component options={['Bleach', 'Nevermind', 'In Utero'] } />);
        //buttons = scryRenderedDOMComponentsWithTag(ComponentButton, 'button');
       
    });

    //First Test Case
    it('Render Button Length', function () {    
        expect(ComponentButton.find('button').length).to.equal(3);
       // assert.fail(0, 1,"Exception has thrown");
    });

    //Second Test Case
    it('Check TextContent Equal to Context', () => {
        expect(ComponentButton.find('button').at(0).props().children.props.children).to.equal('Bleach');
        expect(ComponentButton.find('button').at(1).props().children.props.children).to.equal('Nevermind');
        expect(ComponentButton.find('button').at(2).props().children.props.children).to.equal('In Utero');
    });
});
   

  


