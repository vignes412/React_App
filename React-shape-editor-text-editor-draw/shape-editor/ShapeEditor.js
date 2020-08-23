import React from 'react';
var ShapeParser=require("./ShapeParser");
var ShapeSelect= require("./ShapeSelect");

var ShapeCanvas = require("./ShapeCanvas.js");

var ShapeEditor = React.createClass({displayName: 'ShapeEditor',

  componentWillMount: function () {
    this._parser = new ShapeParser();
  },

  getInitialState: function () {
    return { text: '' };
  },
EditorValue:function(text){
this.setState({text:text});
},
  render: function () {
    var shapes = this._parser.parse(this.state.text);

    return (
         <div>
            <ShapeSelect changeValue={this.EditorValue}/>
            <textarea className="editor" value={this.state.text} onChange={this.handleTextChange}/>
            <ShapeCanvas shapes={shapes} />
        </div>
      );
  },

  handleTextChange: function (event) {
    this.setState({ text: event.target.value })
  }
});

export default ShapeEditor;