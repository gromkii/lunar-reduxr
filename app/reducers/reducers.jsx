export function postReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_POST':
      return [
        ...state,
        {
          ...action.post // Should spread all the properties from returned post.
        }
      ]

    default:
      return state;
  }
}

export function errorStatusReducer(state = '', action) {
  switch(action.type){
    case 'SET_ERROR':
      return action.error

    default:
      return state
  }
}
