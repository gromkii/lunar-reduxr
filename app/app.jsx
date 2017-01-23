import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Main from 'Main'


// Include CSS for Foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// Include custom SCSS
require('style!css!sass!applicationStyles');

render (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>
, document.getElementById('app'))
