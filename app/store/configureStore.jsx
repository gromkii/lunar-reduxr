var redux = require('redux');
import {postReducer, errorStatusReducer, dispatchStatusReducer} from 'reducers'

export function configure(initialState = {}) {
  var reducer = redux.combineReducers({
    postsArray:postReducer,
    error:errorStatusReducer,
    sentStatus:dispatchStatusReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f=>f
  ));

  return store;
}
