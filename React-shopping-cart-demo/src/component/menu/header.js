var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	render: function() {
		return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
              <ul className="nav navbar-nav">
                <li><Link to="app">Home</Link></li>
                <li><Link to="cart">Cart</Link></li>
              </ul>
          </div>
        </nav>
            {this.props.children}

      </div>
		);
	}
});

module.exports = Header;
