import { Map, List } from 'immutable'
import { typesOfPokemonsTypes } from './actionTypes'

const initialState = Map({
  items: List(),
  loading: false
})

export default (state = initialState, action) => {
  switch (action.type) {
    case typesOfPokemonsTypes.LOAD_LIST:
      return state
        .set('loading', true)
    case typesOfPokemonsTypes.LOAD_LIST_SUCCESS:
      return state
        .set('loading', false)
        .set('items', List(action.response.data.objects))
    case typesOfPokemonsTypes.LOAD_LIST_FAILURE:
      return state
        .set('loading', false)
    default:
      return state
  }
}
