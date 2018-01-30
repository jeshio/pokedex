import {createTypes, async} from 'redux-action-creator'

export const loadingTypes = createTypes([
  ...async('LOAD_LIST')
], 'POKEMON')

export const paginatorTypes = createTypes([
  'SET'
], 'PAGE')
