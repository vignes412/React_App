import React from 'react';
import Ellipse from './shapes/Eclipse.js';
import Rectangle from './shapes/Rectangle.js';
import Text from './shapes/Text.js';

var ShapeCanvas = React.createClass({displayName: 'ShapeCanvas',

  getDefaultProps: function(){
    return {
      shapes: []
    };
  },

  render: function () {
    var self = this;

var shapesTree = <div className="shape-canvas"> {this.props.shapes.map(function(s, index) {
        return self._createShape(s, index);
      })} </div>

return this.props.shapes.length > 0 ? shapesTree : <div className="shape-canvas no-shapes">"No Shapes Found"</div>;
  },

  _createShape: function(shape, index) {
    return this._shapeMap[shape.type](shape, index);
  },

  _shapeMap: {
    ellipse: function (shape, index) {
      return <Ellipse properties={shape.properties} key={index}/>;
    },

    rect: function (shape, index) {
      return <Rectangle properties={shape.properties} key={index}/>;
    },

    text: function (shape, index) {
       return <Text properties={shape.properties} key={index}/>;
    }
  }

});

module.exports = ShapeCanvas;