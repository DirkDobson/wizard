import axios from 'axios'

const ADD_TAG = 'ADD_TAG'

export const addTag = (tag) => {
  return (dispatch) => {
    axios.post('/api/tags', {tag})
    .then( res => {
      if (res.data)
  dispatch({ type: ADD_TAG, tag })
    })
  }
}

export default ( state = [], action ) => {
  switch(action.type) {
    case ADD_TAG:
      return[...state, action.tag]
    default:
      return state
  }
}