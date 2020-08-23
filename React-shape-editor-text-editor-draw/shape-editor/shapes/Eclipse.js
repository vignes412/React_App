var React=require("react");
var ShapeProperty=require('../ShapePropertyHOC');
var assign =require('object-assign');
var EllipseShape=React.createClass({
  
  style1:function(){
  var fn=this.extractStyle(true);
  fn['borderRadius'] = '50% 50%';
  return fn;
},
  render:function(){
      var fn=this.props.extractStyle(true);
   var style=assign({},fn,{
     borderRadius:'50% 50%'
   });

  return (<div style={style} className="shape"></div>);
  }
});



export default ShapeProperty(EllipseShape,"ellipse");