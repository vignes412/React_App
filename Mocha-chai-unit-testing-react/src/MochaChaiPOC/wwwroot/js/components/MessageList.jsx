var React =require('react');
var Message =require('./Message.jsx');

var MessageList = React.createClass({
  propTypes: {
    messageList: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  },
  render: function() {
    return (
      <div className="message-list">
        {this.props.messageList.map((m, i) => <Message key={i} message={m} />)}
      </div>
    );
  }
});

module.exports = MessageList;
