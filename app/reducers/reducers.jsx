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
  switch(action.type){
    case 'SET_ERROR_STATUS':
      return action.error

    default:
      return state
  }
}
