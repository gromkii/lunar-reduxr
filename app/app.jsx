import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import Main from 'Main'
import Posts from 'Posts'


// Include CSS for Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
require('script!foundation-sites/dist/js/foundation.min.js');
$(document).foundation();

// Include custom SCSS
require('style!css!sass!applicationStyles');

render (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Posts} />
    </Route>
  </Router>
, document.getElementById('app'))
