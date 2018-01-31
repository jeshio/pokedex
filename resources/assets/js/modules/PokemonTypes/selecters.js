import { createSelector } from 'reselect'
import { NAME } from './constants'

export const getItems = state => state.get(NAME).get('items')
