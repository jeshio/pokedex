import {asyncActionCreator, actionCreator} from 'redux-action-creator'
import {POKEAPI_URL} from 'core/constants'
import {pokemonTypes, paginatorTypes, filterTypes} from './actionTypes'
import { NAME } from './constants'
import axios from 'axios'

export const loadPokemons = asyncActionCreator(pokemonTypes.LOAD_LIST, {
  action: (payload, dispatch, getState) => {
    const state = getState().get(NAME)
    const pageSize = state.get('pageSize')
    const pageNumber = state.get('pageNumber')
    return axios.get(`${POKEAPI_URL}/api/v1/pokemon?limit=${pageSize}&offset=${pageSize * (pageNumber - 1)}`)
  }
})

/**
 * Set number page
 */
const setPage = actionCreator(paginatorTypes.SET, 'pageNumber')

// update page number and refresh data
export const changePage = function (pageNumber) {
  return async (dispatch) => {
    await dispatch(setPage(pageNumber))
    await dispatch(loadPokemons())
  }
}

/**
 * Set size of page
 */
export const setPageSize = actionCreator(paginatorTypes.SET_SIZE, 'pageSize')

// update page size and refresh data
export const changePageSize = function (pageSize) {
  return async (dispatch, getState) => {
    const state = getState().get(NAME)
    const pageNumber = state.get('pageNumber')

    await dispatch(setPageSize(pageSize))
    await dispatch(loadPokemons({ pageNumber, pageSize }))
  }
}

/**
 * Set search-filter value
 */
export const setFilterValue = actionCreator(filterTypes.SET_VALUE, 'filterValue')

export const setFilterTypes = actionCreator(filterTypes.SET_TYPES, 'filterTypes')