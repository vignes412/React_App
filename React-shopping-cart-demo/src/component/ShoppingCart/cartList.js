var React = require('react');
var PropTypes = React.PropTypes;

var  CartList= React.createClass({

  render: function() {
    return (
      <div>
      <h1>Cart</h1>
    <table className="table table-hover" >
      <thead>
       <tr>
         <th></th>
         <th>Item</th>
         <th>Qty</th>
         <th></th>
         <th>Subtotal</th>
       </tr>
     </thead>
     <tbody>
       {this.props.item}
     </tbody>
     <tfoot>
       <tr>
         <td colSpan="4" className="text-right">Total</td>
         <td>rs.{this.props.total}</td>
       </tr>
     </tfoot>
   </table>
 </div>
    );
  }
});

module.exports =CartList ;
