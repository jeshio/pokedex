import * as actionTypes from '../actionTypes';
import * as actions from '../actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import initialState from '../initialState'
import { Map } from "immutable"
import { NAME } from '../constants'
const mockStore = configureMockStore([ thunk ]);

describe('modules/pokemons/actions', () => {
  const imitateStore = state => Map({ [NAME]: state })
  let store

  beforeEach(() => {
    store = mockStore(imitateStore(initialState))
  })

  it('should fetch pokemons from server', async () => {
    await store.dispatch(actions.loadPokemons())
    const actionsStack = store.getActions()
    expect(actionsStack).toHaveLength(2)
    expect(actionsStack[0]).toHaveProperty('type', actionTypes.pokemonTypes.LOAD_LIST)
    expect(actionsStack[1]).toHaveProperty('type', actionTypes.pokemonTypes.LOAD_LIST_SUCCESS)
    expect(actionsStack[1]).toHaveProperty('response')
  })

  it('should fetch pokemons from server when change page', async () => {
    await store.dispatch(actions.changePage(3))
    const actionsStack = store.getActions()
    expect(actionsStack).toHaveLength(3)
    expect(actionsStack[0]).toHaveProperty('type', actionTypes.paginatorTypes.SET)
    expect(actionsStack[1]).toHaveProperty('type', actionTypes.pokemonTypes.LOAD_LIST)
  })

  it('should fetch pokemons from server when change page size', async () => {
    await store.dispatch(actions.changePageSize(10))
    const actionsStack = store.getActions()
    expect(actionsStack).toHaveLength(3)
    expect(actionsStack[0]).toHaveProperty('type', actionTypes.paginatorTypes.SET_SIZE)
    expect(actionsStack[1]).toHaveProperty('type', actionTypes.pokemonTypes.LOAD_LIST)
  })

  it('should update page size', async () => {
    const pageSize = 100
    await store.dispatch(actions.setPageSize(pageSize))
    const actionsStack = store.getActions()
    expect(actionsStack).toHaveLength(1)
    expect(actionsStack[0]).toHaveProperty('type', actionTypes.paginatorTypes.SET_SIZE)
    expect(actionsStack[0]).toHaveProperty('payload.pageSize', pageSize)
  })

  it('should update filter value', async () => {
    const filterValue = 'new'
    await store.dispatch(actions.setFilterValue(filterValue))
    const actionsStack = store.getActions()
    expect(actionsStack).toHaveLength(1)
    expect(actionsStack[0]).toHaveProperty('type', actionTypes.filterTypes.SET_VALUE)
    expect(actionsStack[0]).toHaveProperty('payload.filterValue', filterValue)
  })

  it('should update filter types', async () => {
    const filterTypes = ['new']
    await store.dispatch(actions.setFilterTypes(filterTypes))
    const actionsStack = store.getActions()
    expect(actionsStack).toHaveLength(1)
    expect(actionsStack[0]).toHaveProperty('type', actionTypes.filterTypes.SET_TYPES)
    expect(actionsStack[0]).toHaveProperty('payload.filterTypes', filterTypes)
  })
})