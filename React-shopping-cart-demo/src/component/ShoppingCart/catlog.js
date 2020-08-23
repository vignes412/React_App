var React = require('react');
var PropTypes = React.PropTypes;
var AppStore = require('../../store/AppStore');
var AddToCart = require('./AddToCart');
var AppAction = require('../../action/AppAction.js');


function StoreData() {
    return {items: AppStore.getCatalog(), cartitems: AppStore.getCart()};
}

var catlog = React.createClass({
    getInitialState: function() {
        return StoreData();
    },
    componentWillMount: function() {
        AppStore.addChangeListener(this.onChange);
    },
    componentWillUnmount: function() {
        AppStore.removeChangeListener(this.onChange);
    },
    onChange: function() {
        this.setState(StoreData());
    },
    render: function() {
        var storeItems = this.state.items.map(function(item, index) {
       return <tr key={index}>
               <td>{item.title}</td>
               <td>rs.{item.cost}</td>
               <td><AddToCart item={item} /></td>
               <td>Item in Cart :{AppStore.getCount(item.title)}</td>
           </tr>
  }.bind(this));
return (
      <table className="table table-hover"><tbody>
        {storeItems}</tbody>
      </table>
  );
}

});

module.exports = catlog;
