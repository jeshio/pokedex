import { createSelector } from 'reselect'
import { NAME } from './constants'

export const getItems = state => state.get(NAME).get('items')
export const getFilterValue = state => state.get(NAME).get('filterValue')
export const getFilterTypes = state => state.get(NAME).get('filterTypes')

export const getFilteredByNameItems = createSelector(
  [getItems, getFilterValue],
  (items, filterValue) => items.filter(
    item => item.get('name').toUpperCase().includes(filterValue.toUpperCase())
  )
)

export const getFilteredByTypesItems = createSelector(
  [getItems, getFilterTypes],
  (items, filterTypes) => (filterTypes.size > 0 ? items.filter(
      item => item.get('types').find(
          type => filterTypes.includes(type.get('name').toLowerCase())
      )
    ) : items)
)

export const getFilteredItems = createSelector(
  [getFilteredByNameItems, getFilteredByTypesItems],
  (a, b) => a.toSet().intersect(b.toSet()).toList().sortBy(item => item.get('pkdx_id'))
)