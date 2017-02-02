import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

import * as actions from 'actions'
var store = require('configureStore').configure();
import postAPI from 'postAPI'

import Main from 'Main'
import Posts from 'Posts'

var state = store.getState();

//This is mess, but grabs initial posts, gives user loading message
store.dispatch(actions.startDispatch(state.sentStatus));
postAPI.getPosts().then(posts => {
  store.dispatch(actions.addPosts(posts.data));
  store.dispatch(actions.endDispatch(state.sentStatus));
})

// Include CSS for Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
require('script!foundation-sites/dist/js/foundation.min.js');
$(document).foundation();

// Include custom SCSS
require('style!css!sass!applicationStyles');

render (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Posts} />
      </Route>
    </Router>
  </Provider>
, document.getElementById('app'))
