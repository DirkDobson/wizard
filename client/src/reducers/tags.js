import axios from 'axios'

const ADD_TAG = 'ADD_TAG'
const TAGS = 'TAGS'
const DELETE_TAG = 'DELETE_TAG'

export const deleteTag = (id) => {
  return ( dispatch) => {
    axios.delete(`/api/tags/${id}`)
    .then( res => dispatch({ type: DELETE_TAG, id }) )
  }
}

export const getTags = () => {
  return (dispatch) => {
    axios.get('/api/tags')
      .then( res => dispatch({ type: TAGS, tags: res.data }) )
  }
}

export const addTag = (tag) => {
  return (dispatch) => {
    axios.post('/api/tags', { tag })
      .then( res => {
        if (res.data)
          dispatch({ type: ADD_TAG, tag: res.data })
      })
  }
}

export default ( state = [], action ) => {
  switch(action.type) {
    case ADD_TAG:
      return [...state, action.tag]
    case TAGS:
      return action.tags
    case DELETE_TAG:
    // {type: DELETE_TAG, id: 7 }
      return state.filter( t => t.id !== action.id )
    default:
      return state
  }
}