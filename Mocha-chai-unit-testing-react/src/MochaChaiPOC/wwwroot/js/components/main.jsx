var React = require('react');
var ReactDom = require('react-dom');
var ReactTable = require('./ReactTable.jsx');
var MessageList = require('./MessageList.jsx');

const messageList = [
  'Test message',
  'Another test message',
  'Yet another test message'
];

var App = React.createClass({
    getOptions: function () {
        return this.props.options || [];
    },
    getInitialState: function() {
        return {
            displayText: "Click on a button"
        };
    },
    clickHandler: function (displayText) {
        this.setState({displayText: displayText});
    },
    render: function () {
        var button = this.getOptions().map(option =><button key={option} onClick={() => this.clickHandler(option) }>
                      <span>{option}</span>
                </button>);
        return (
                <div>
                     <div className={"display-text"}>{this.state.displayText}</div>
                    {button}
                 <MessageList messageList={messageList} />
                </div>
        );
}

});


module.exports = App;
//ReactDom.render(<App options={['ok','no','cancel']}/>, document.getElementById("app"));