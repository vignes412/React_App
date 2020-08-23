var React = require('react');
var PropTypes = React.PropTypes;
var style=require('../styles/style.scss');
var ProjectListComponent = React.createClass({
handleClick:function(v){
  this.props.HandleOnClick(v);
},

  render: function() {
    var data=this.props.data;
    var listItem;
    if(data.length>0){
     listItem=data.map(function(item,i){
        return <li key={i} onClick={this.handleClick.bind(this, i)} className={style.listItem}>{item.projectName} </li>
    }.bind(this));
  }else{
   listItem= (
     <li className={style.listItem}>No data Found</li>
  );
}
    return (
      <div className={style.projlistdiv}>
        <div className={style.headproj}>
          <div><p>Projects</p></div>
        </div>
        <div >
        <ol className={style.list}>
          {listItem}
        </ol>
      </div>
      </div>
    );
  }

});

module.exports = ProjectListComponent;
