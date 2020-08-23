var React = require('react');
var PropTypes = React.PropTypes;
var AppActions = require('../../action/AppAction.js');
var  Increase= React.createClass({
  handleClick:function(){
  AppActions.increaseItem(this.props.index);
  },
  render: function() {
    return (
      <button onClick={this.handleClick}>+</button>
    );
  }

});

module.exports = Increase;
