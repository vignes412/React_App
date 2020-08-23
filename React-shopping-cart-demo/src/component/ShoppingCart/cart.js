var React = require('react');
var PropTypes = React.PropTypes;
var AppStore = require('../../store/AppStore');
var RemoveFromCart = require('./RemoveFromCart.js');
var Increase = require('./increase.js');
var Decrease = require('./decrease.js');
var CartList = require('./cartList.js');

function cartItems() {
    return {items: AppStore.getCart()}
}

var Cart = React.createClass({
    getInitialState: function() {
        return cartItems();
    },
    componentWillMount: function() {
        AppStore.addChangeListener(this.onChange);
    },
    componentWillUnmount: function() {
        AppStore.removeChangeListener(this.onChange);
    },
    onChange: function() {
        this.setState(cartItems());
    },
    render: function() {
        var total = 0;
        var items = this.state.items.map(function(item, i) {
            var subTotal = item.cost * item.qty;
            total += subTotal;
                   return <tr key={i}>
                           <td><RemoveFromCart index={i} /></td>
                           <td>{item.title}</td>
                           <td>{item.qty}</td>
                           <td>
                               <Increase index={i} />
                               <Decrease index={i} />
                           </td>
                           <td>rs.{subTotal}</td>
                       </tr>
            }.bind(this));
return (
      <div>
        <CartList item={items} total={total}/>
   </div>
)
}

});

module.exports = Cart;
