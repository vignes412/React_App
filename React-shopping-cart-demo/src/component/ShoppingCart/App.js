var React = require('react');
var PropTypes = React.PropTypes;
var Catalog = require('./catlog');

var App = React.createClass({

    render: function() {
        return (
      <div>
        <h1>Shopping Cart</h1>
        <Catalog />
      </div>
  );
}

});

module.exports = App;
