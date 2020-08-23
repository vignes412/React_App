var React = require('react');
var PropTypes = React.PropTypes;
var SearchBar =require('react-search-bar');
var AppStore=require('../store/AppStore.js');
var style=require('../styles/style.scss');

var SearchBoxComponent = React.createClass({
  getInitialState: function() {
    return {
      items: ''
    };
  },
  saveHistroy:function(){
    var searchvalue=this.refs.search.value;
    if(searchvalue!==''){
AppStore.StoreLocalStoreage(searchvalue);
}
this.props.handleonchange(searchvalue);
},
  filterList:function(event){
      this.props.handleonchange(event.target.value);
    //  this.setState({searchItem:event.target.value});
  },
  shouldComponentUpdate: function(nextProps) {
    this.refs.search.value=nextProps.searchValue;
    return true;
  },
  render: function() {
    return (
      <div className={style.searchBox}>
      <input type="text"  placeholder="Search Bar" ref="search"  />
      <button onClick={this.saveHistroy} type="button" className="btn btn-success">Search</button>
      </div>
    );
  }

});

module.exports = SearchBoxComponent;
