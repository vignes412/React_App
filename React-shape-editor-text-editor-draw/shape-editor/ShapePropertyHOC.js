var assign=require("object-assign");
var React=require("react");

function ShapeProperty(Component,shapeName){

  return React.createClass( {
    displayName:shapeName,
  _appearanceDefaults: {
    background: 'red',
    width: 100,
    height: 100,
    'border': '1px solid #999',
    position: 'absolute'
  },

  getDefaultProps: function () {
    return {
      properties: null
    };
  },
  extractStyle: function (includeApperanceDefaults) {
    var p = this.props.properties;
   var defaults = includeApperanceDefaults ? assign({}, this._appearanceDefaults) : { position: 'absolute' };
    return assign(defaults, p);
  },
render:function(){
  
return (<Component {...this.props} extractStyle={this.extractStyle} />);
}
});
};

module.exports= ShapeProperty;