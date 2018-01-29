import { combineReducers } from 'redux-immutable'
import { routerReducer } from 'react-router-redux'
import * as PokemonsList from './PokemonsList'

export default combineReducers({
  router: routerReducer,
  [PokemonsList.NAME]: PokemonsList.reducer
})
