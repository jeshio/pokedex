import { Map, List } from 'immutable'
import { loadingTypes, paginatorTypes, filterTypes } from './actionTypes'

const initialState = Map({
  items: List(),
  loading: false,
  pageSize: 10,
  pageNumber: 1,
  totalCount: 0,
  filterValue: ''
})

export default (state = initialState, action) => {
  switch (action.type) {
    case loadingTypes.LOAD_LIST:
      return state
        .set('loading', true)
    case loadingTypes.LOAD_LIST_SUCCESS:
      return state
        .set('loading', false)
        .set('items', List(action.response.data.objects))
        .set('totalCount', action.response.data.meta.total_count)
    case paginatorTypes.SET:
      return state
        .set('pageNumber', action.payload.pageNumber)
    case paginatorTypes.SET_SIZE:
      return state
        .set('pageSize', action.payload.pageSize)
    case filterTypes.SET_VALUE:
      return state
        .set('filterValue', action.payload.filterValue)
    default:
      return state
  }
}
