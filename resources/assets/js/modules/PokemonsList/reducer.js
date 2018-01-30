import { Map, List } from 'immutable'
import { loadingTypes, paginatorTypes } from './actionTypes'

const initialState = Map({
  items: List(),
  loading: false,
  pageSize: 10,
  pageNumber: 1,
  totalCount: 0
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
    default:
      return state
  }
}
