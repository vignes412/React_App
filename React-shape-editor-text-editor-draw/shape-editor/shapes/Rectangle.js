var React=require("react");
var ShapeProperty=require('../ShapePropertyHOC');

var Rect=React.createClass({
  render:function(){
 var fn = this.props.extractStyle(true);
 return <div style={fn} className="shape"></div>;
  }
});

export default ShapeProperty(Rect,"rect");
