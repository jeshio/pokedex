import {asyncActionCreator, actionCreator} from 'redux-action-creator'
import {POKEAPI_URL} from 'core/constants'
import {loadingTypes, paginatorTypes} from './actionTypes'
import { NAME } from './constants'

export const loadPokemons = asyncActionCreator(loadingTypes.LOAD_LIST, ({ pageNumber, pageSize }) =>
  axios.get(`${POKEAPI_URL}/api/v1/pokemon?limit=${pageSize}&offset=${pageSize * (pageNumber - 1)}`))

/**
 * Set number page
 */
const setPage = actionCreator(paginatorTypes.SET, 'pageNumber')

// update page number and refresh data
export const changePage = function (pageNumber) {
  return (dispatch, getState) => {
    const state = getState().get(NAME)
    const pageSize = state.get('pageSize')

    dispatch(setPage(pageNumber))
    dispatch(loadPokemons({ pageNumber, pageSize }))
  }
}

/**
 * Set size of page
 */
export const setPageSize = actionCreator(paginatorTypes.SET_SIZE, 'pageSize')

// update page size and refresh data
export const changePageSize = function (pageSize) {
  return (dispatch, getState) => {
    const state = getState().get(NAME)
    const pageNumber = state.get('pageNumber')

    dispatch(setPageSize(pageSize))
    dispatch(loadPokemons({ pageNumber, pageSize }))
  }
}