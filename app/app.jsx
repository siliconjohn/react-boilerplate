var React = require('react');
var ReactDOM = require('react-dom');
var MyApp = require('MyApp');
//var { Route, Router, IndexRoute, hashHistory } = require('react-router');

require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!sass!applicationStyles');

$(document).foundation();

ReactDOM.render(
  <MyApp/>,
  document.getElementById("app")
);
