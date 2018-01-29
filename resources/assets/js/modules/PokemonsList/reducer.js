import { Map, List } from 'immutable'
import types from './actionTypes'

const initialState = Map({
  items: List(),
  loading: false
})

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_LIST:
      return state
        .set('loading', true)
    case types.LOAD_LIST_SUCCESS:
      return state
        .set('loading', false)
        .set('items', List(action.response.data.objects))
    default:
      return state
  }
}
