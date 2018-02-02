import {createTypes, async} from 'redux-action-creator'

export const pokemonTypes = createTypes([
  ...async('LOAD_LIST')
], 'POKEMON')

export const paginatorTypes = createTypes([
  'SET',
  'SET_SIZE'
], 'PAGE')

export const filterTypes = createTypes([
  'SET_VALUE',
  'SET_TYPES'
], 'FILTER')
