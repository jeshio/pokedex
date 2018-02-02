import { createSelector } from 'reselect'
import { NAME } from './constants'

export const getItems = state => state.get(NAME).get('items')

export const getLoadingStatus = state => state.get(NAME).get('loading')
