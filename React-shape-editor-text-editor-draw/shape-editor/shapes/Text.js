var React=require("react");
var ShapeProperty=require('../ShapePropertyHOC');

var text=React.createClass({
  render:function(){
var style = this.props.extractStyle(false);
    return <div style={style} className="shape">{this.props.properties.value}</div>;
  }
});

export default ShapeProperty(text,"text");
