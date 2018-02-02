import { List, Map } from 'immutable'

export default Map({
  items: List(),
  loading: false,
  pageSize: 10,
  pageNumber: 1,
  totalCount: 0,
  filterValue: '',
  filterTypes: List()
})