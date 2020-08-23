var React = require('react');
var PropTypes = React.PropTypes;
var AppActions = require('../../action/AppAction.js');

var Decrese = React.createClass({
    handleClick: function() {
        AppActions.decreaseItem(this.props.index);
    },
    render: function() {
        return (
      <button onClick={this.handleClick}>-</button>
  );
}

});

module.exports = Decrese;
