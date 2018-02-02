import reducer from '../reducer'
import { List, fromJS } from 'immutable'
import * as actionTypes from '../actionTypes'
import initialState from '../initialState'

describe('modules/pokemons/reducer', () => {
  it('should have initial state', () => {
    expect(reducer()).toEqual(initialState)
  })

  it('should not affect state', () => {
    const state = reducer(initialState, {type: 'NOT_EXISTING'})
    expect(state).toEqual(initialState)
  })

  it('should store fetched pokemon types', () => {
    const pokemonTypes = [{name: 'name'}]
    const response = {data: {objects: pokemonTypes}}
    const action = {type: actionTypes.typesOfPokemonsTypes.LOAD_LIST_SUCCESS, response}

    const state = reducer(initialState, action)
    const shouldState = initialState
      .set('items', fromJS(pokemonTypes))

    expect(state).toEqual(shouldState)
  })

  it('should store fetched pokemon types and override existing pokemon types', () => {
    const firstPokemonTypes = [{name: 'name'}]
    const existingState = initialState.set('items', firstPokemonTypes)
    const pokemonTypes = [{name: 'name_1'}, {name: 'name_2'}]
    const response = {data: {objects: pokemonTypes}}
    const action = {type: actionTypes.typesOfPokemonsTypes.LOAD_LIST_SUCCESS, response}

    const state = reducer(existingState, action)
    const shouldState = initialState
      .set('items', fromJS(pokemonTypes))

    expect(state).toEqual(shouldState)
  })
})