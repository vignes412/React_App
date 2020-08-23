var React = require('react');
var ReactDom = require('react-dom');
var App = require('./components/main.jsx');


ReactDom.render(<App options={['ok','no','cancel']}/>, document.getElementById("app"));

