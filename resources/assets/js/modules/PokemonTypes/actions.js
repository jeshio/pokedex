import {asyncActionCreator, actionCreator} from 'redux-action-creator'
import {POKEAPI_URL} from 'core/constants'
import {typesOfPokemonsTypes} from './actionTypes'
import { NAME } from './constants'
import axios from 'axios'

export const loadPokemonTypes = asyncActionCreator(typesOfPokemonsTypes.LOAD_LIST, () =>
  axios.get(`${POKEAPI_URL}/api/v1/type?limit=100`))