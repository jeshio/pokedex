import {asyncActionCreator} from 'redux-action-creator'
import types from './actionTypes'

export const loadPokemons = asyncActionCreator(types.LOAD_LIST, () => axios.get('https://pokeapi.co/api/v1/pokemon/?limit=10'))
