var React = require('react');
var PropTypes = React.PropTypes;
var SearchContainer=require('./containers/SearchContainer.js');
const ProjectListContainer = require('./containers/ProjectListContainer.js');
const AppStore=require('./store/AppStore.js');
var HistroyComponent=require('./components/HistroyComponent.js');

var App = React.createClass({
getInitialState: function() {
  return {
    updatedata:AppStore.getData(),
searchedValue:''
  };
},
UpdatedList:function(value,searchItem){
this.setState({updatedata: value,searchItem:searchItem});
},
searchValue:function(v){
  this.setState({searchedValue:v});
},
  render: function() {
    return (
      <div>
          <SearchContainer  updatedList={this.UpdatedList} searchedValue={this.state.searchedValue}/>
          <HistroyComponent searchItem={this.state.searchItem} searchvalue={this.searchValue} />
          <ProjectListContainer  updatedData={this.state.updatedata}/>
      </div>
    );
  }

});

module.exports = App;
