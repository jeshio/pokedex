import {asyncActionCreator} from 'redux-action-creator'
import {POKEAPI_URL} from 'core/constants'
import types from './actionTypes'

export const loadPokemons = asyncActionCreator(types.LOAD_LIST, () => axios.get(`${POKEAPI_URL}/api/v1/pokemon?limit=10`))
