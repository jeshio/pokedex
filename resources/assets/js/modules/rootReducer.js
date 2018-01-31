import { combineReducers } from 'redux-immutable'
import { routerReducer } from 'react-router-redux'
import * as PokemonsList from './Pokemons'
import * as PokemonTypes from './PokemonTypes'

export default combineReducers({
  router: routerReducer,
  [PokemonsList.NAME]: PokemonsList.reducer,
  [PokemonTypes.NAME]: PokemonTypes.reducer
})
