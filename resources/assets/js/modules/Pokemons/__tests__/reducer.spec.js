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

  it('should store fetched pokemons', () => {
    const pokemons = [{name: 'name'}]
    const response = {data: {objects: pokemons, meta: {total_count: 1}}}
    const action = {type: actionTypes.pokemonTypes.LOAD_LIST_SUCCESS, response}

    const state = reducer(initialState, action)
    const shouldState = initialState
      .set('items', fromJS(pokemons))
      .set('totalCount', 1)

    expect(state).toEqual(shouldState)
  })

  it('should store fetched pokemons and override existing pokemons', () => {
    const firstPokemons = [{name: 'name'}]
    const existingState = initialState.set('items', firstPokemons)
    const pokemons = [{name: 'name_1'}, {name: 'name_2'}]
    const response = {data: {objects: pokemons, meta: {total_count: 2}}}
    const action = {type: actionTypes.pokemonTypes.LOAD_LIST_SUCCESS, response}

    const state = reducer(existingState, action)
    const shouldState = initialState
      .set('items', fromJS(pokemons))
      .set('totalCount', 2)

    expect(state).toEqual(shouldState)
  })

  it('should store page number', () => {
    const payload = {pageNumber: 4}
    const action = {type: actionTypes.paginatorTypes.SET, payload}

    const state = reducer(initialState, action)
    const shouldState = initialState
      .set('pageNumber', 4)

    expect(state).toEqual(shouldState)
  })

  it('should store page size', () => {
    const payload = {pageSize: 4}
    const action = {type: actionTypes.paginatorTypes.SET_SIZE, payload}

    const state = reducer(initialState, action)
    const shouldState = initialState
      .set('pageSize', 4)

    expect(state).toEqual(shouldState)
  })

  it('should store filter value', () => {
    const payload = {filterValue: 'search'}
    const action = {type: actionTypes.filterTypes.SET_VALUE, payload}

    const state = reducer(initialState, action)
    const shouldState = initialState
      .set('filterValue', 'search')

    expect(state).toEqual(shouldState)
  })

  it('should store filter types', () => {
    const filterTypes = ['type1', 'type2'];
    const payload = {filterTypes}
    const action = {type: actionTypes.filterTypes.SET_TYPES, payload}

    const state = reducer(initialState, action)
    const shouldState = initialState
      .set('filterTypes', List(filterTypes))

    expect(state).toEqual(shouldState)
  })

})