import { Map, List, fromJS } from 'immutable'
import { pokemonTypes, paginatorTypes, filterTypes } from './actionTypes'

const initialState = Map({
  items: List(),
  loading: false,
  pageSize: 10,
  pageNumber: 1,
  totalCount: 0,
  filterValue: '',
  filterTypes: List()
})

export default (state = initialState, action) => {
  switch (action.type) {
    case pokemonTypes.LOAD_LIST:
      return state
        .set('loading', true)
    case pokemonTypes.LOAD_LIST_SUCCESS:
      return state
        .set('loading', false)
        .set('items', fromJS(action.response.data.objects))
        .set('totalCount', action.response.data.meta.total_count)
    case pokemonTypes.LOAD_LIST_FAILURE:
      return state
        .set('loading', false)
    case paginatorTypes.SET:
      return state
        .set('pageNumber', action.payload.pageNumber)
    case paginatorTypes.SET_SIZE:
      return state
        .set('pageSize', action.payload.pageSize)
    case filterTypes.SET_VALUE:
      return state
        .set('filterValue', action.payload.filterValue)
    case filterTypes.SET_TYPES:
      return state
        .set('filterTypes', List(action.payload.filterTypes))
    default:
      return state
  }
}
