import reducer from '../reducer'
import * as selecters from '../selecters'
import { List, Map, fromJS } from 'immutable'
import initialState from '../initialState'
import { NAME } from '../constants'

describe('modules/pokemons/selectors', () => {
  const imitateStore = state => Map({ [NAME]: state })
  const emptyState = imitateStore(initialState)
  const filledState = imitateStore(initialState
    .set('items', fromJS([
      {id: 1, name: 'test0', types: [{name: 'some-type'}]},
      {id: 2, name: 'test2', types: [{name: 'some'}, {name: 'type2'}]},
      {id: 3, name: 'test01', types: [{name: 'type2'}]}
    ]))
    .set('filterTypes', List(['type1', 'type2']))
  )

  it('should get empty array of pokemons when empty', () => {
    expect(selecters.getItems(emptyState)).toEqual(List())
  })

  it('should get filter value when empty', () => {
    expect(selecters.getFilterValue(emptyState)).toEqual('')
  })

  it('should get empty array of filter types when empty', () => {
    expect(selecters.getFilterTypes(emptyState)).toEqual(List())
  })

  it('should get pokemons by filter types', () => {
    const items = filledState.get(NAME).get('items')
    expect(selecters.getFilteredByTypesItems(filledState)).toEqual(List([
      items.get(1),
      items.get(2)
    ]))
  })

  it('should get pokemons by filter types with non-intersection', () => {
    const state = filledState.get(NAME)
      .set('filterTypes', List(['type1', 'type2', 'some-type']))
    const items = state.get('items')
    const store = imitateStore(state)
    expect(selecters.getFilteredByTypesItems(store)).toEqual(items)
  })

  it('should get pokemons by filter name', () => {
    const state = filledState.get(NAME)
      .set('filterValue', '2')
    const store = imitateStore(state)
    expect(selecters.getFilteredByNameItems(store)).toEqual(List([
      state.get('items').get(1)
    ]))
  })

  it('should get pokemons by filter name and types intersection', () => {
    const state = filledState.get(NAME)
      .set('filterValue', '0')
      .set('filterTypes', List(['some-type']))
    const store = imitateStore(state)
    expect(selecters.getFilteredItems(store)).toEqual(List([
      state.get('items').get(0)
    ]))
  })
})