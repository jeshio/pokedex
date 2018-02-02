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

  it('should fetch pokemon types from server', async () => {
    await store.dispatch(actions.loadPokemonTypes())
    const actionsStack = store.getActions()
    expect(actionsStack).toHaveLength(2)
    expect(actionsStack[0]).toHaveProperty('type', actionTypes.typesOfPokemonsTypes.LOAD_LIST)
    expect(actionsStack[1]).toHaveProperty('type', actionTypes.typesOfPokemonsTypes.LOAD_LIST_SUCCESS)
    expect(actionsStack[1]).toHaveProperty('response')
  })

})