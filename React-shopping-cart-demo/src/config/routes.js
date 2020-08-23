var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../component/menu/header.js');
var Home=require('../component/ShoppingCart/App.js');
var Cart=require('../component/ShoppingCart/cart.js');
var AppStart =require('../component/ShoppingCart/App.js');
var routes = (
<Router history={hashHistory}>
<Route path='/' component={Main}>
  <IndexRoute component={AppStart} />
  <Route path='app' component={Home} />
  <Route path='cart' component={Cart} />
</Route>
</Router>
);

module.exports = routes;
