import {createTypes, async} from 'redux-action-creator'

export const typesOfPokemonsTypes = createTypes([
  ...async('LOAD_LIST')
], 'POKEMON_TYPES')
