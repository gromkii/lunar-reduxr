export function postReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_POST':
      return [
        ...state, {
          ...action.post
        }
      ]

    case 'ADD_POSTS':
      return [
        ...state,
        ...action.postsArray
      ]

    default:
      return state;
  }
}

export function errorStatusReducer(state = '', action) {
  switch(action.type) {
    case 'SET_ERROR_STATUS':
      return action.error

    default:
      return state
  }
}

export function dispatchStatusReducer(state = false, action) {
  switch(action.type) {
    case 'START_DISPATCH':
      return !state;

    case 'END_DISPATCH':
      return !state

    default:
      return state;
  }
}
