'use strict';
var React = require('react');
var ReactDom = require('react-dom');
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';
import Home from './Home';
import Blog from './Blog';
// CSS
require('normalize.css');
require('styles/main.css');
require('styles/style.css');
require('styles/simple-line-icons.css');
require('styles/bootstrap.css');
require('styles/icomoon.css');
const RouterList = React.createClass({
render() {
    return (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      {/*<Route path="About" component={About}/>*/}
      {/*<Route path="Services" component={Services}/>*/}
      <Route path="*" component={Blog}/>
    </Route>
  </Router>
    );
  }
});
ReactDom.render((
<RouterList />
  ), document.getElementById('content')); // jshint ignore:line

