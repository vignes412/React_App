var React =require("react");
var SHAPES=require("./shapes");
var ShapeSelect = React.createClass({
    ReadShapes:function(e){
        var file=e.target.value;
         var text = SHAPES[file] || '';
         this.props.changeValue(text);
    },

render:function(){
    return( 
        <div>
        <select className="shapes-picker" onChange={this.ReadShapes}>
            <option value="--">-- Select a sample -- </option>
            <option value="react">React</option>
            <option value="robot">Robot</option>
        </select>
        </div>);
}

});

module.exports=ShapeSelect;