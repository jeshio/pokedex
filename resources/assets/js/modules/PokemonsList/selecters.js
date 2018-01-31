import { createSelector } from 'reselect'
import { NAME } from './constants'

export const getItems = state => state.get(NAME).get('items')
export const getFilterValue = state => state.get(NAME).get('filterValue')

export const getFilteredItems = createSelector(
  [getItems, getFilterValue],
  (items, filterValue) => items.filter(
    item => item.name.toUpperCase().includes(filterValue.toUpperCase())
  )
)