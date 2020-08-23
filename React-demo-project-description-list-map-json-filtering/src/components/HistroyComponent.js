var React = require('react');
var ReactDOM =require('react-dom');
var PropTypes = React.PropTypes;
var AppStore =require('../store/AppStore.js');
var style= require('../styles/style.scss');
function getSavedhis(){
  return{savedHistroy:AppStore.getLocalStorage()};
}
var HistroyComponent = React.createClass({

getInitialState: function() {
  return getSavedhis();
},

PutSearch:function(v){
  this.props.searchvalue(v);
},

render : function() {
    var his = this.state.savedHistroy;
    if (his !== "" || his.length > 0) {
      var hide=true;
        var listItem = this.state.savedHistroy.map(function(item,i) {
      return <li key={i} onClick={this.PutSearch.bind(this,item)} className={style.listItem}>{item}</li>
  }.bind(this));
}else{
  var hide=false;
}
return (
      <div>
        {his.length > 0 ?<div className={style.projlistdiv}><div className={style.headproj}><div><p>Previous Search</p></div></div><ol className={style.list}>{listItem}</ol></div> : ''}
      </div>
  );
}

});

module.exports = HistroyComponent;
