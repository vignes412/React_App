var React = require('react');
var PropTypes = React.PropTypes;
var SearchBoxComponent =require('../components/SearchBoxComponent.js');
const AppStore = require('../store/AppStore.js');


function getKeyword(){
  return {data:AppStore.getData(),
  searchingItem:''}
}

var SearchContainer = React.createClass({
    getInitialState: function() {
        return getKeyword();
    },
    componentWillReceiveProps: function(nextProps) {
      this.setState({searchingItem:nextProps.searchedValue});
    },
    filterList: function(value) {
        var updatedList = this.state.data;
        var uplen = updatedList.length;
        var u = [];
        var index = [];
        for (var i = 0; i < uplen; i++) {
            u[i] = updatedList[i].projectKeyWord.filter(function(item) {
                return item.toLowerCase().search(value.toLowerCase()) !== -1;
            });
            if (u[i].length > 0) {
                index.push(i);
            }
        }
        var dat = this.state.data;
        var ind = [];
        for (var i = 0; i < index.length; i++) {
            ind[i] = dat[index[i]];
        }
        this.props.updatedList(ind,value);
    },
    render: function() {

    return (
      <div>
        <SearchBoxComponent handleonchange={this.filterList}  searchValue={this.state.searchingItem} data={this.state.data}/>
      </div>
    );
  }

});

module.exports =SearchContainer ;
