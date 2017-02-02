var redux = require('redux');
import {postReducer, errorStatusReducer} from 'reducers'

export function configure(initialState = {}) {
  var reducer = redux.combineReducers({
    postsArray:postReducer,
    error:errorStatusReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f=>f
  ));

  return store;
}
