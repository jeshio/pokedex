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
      {name: 'some-type'},
      {name: 'some'},
      {name: 'type2'}
    ]))
  )

  it('should get empty array of pokemon types when empty', () => {
    expect(selecters.getItems(emptyState)).toEqual(List())
  })

  it('should get pokemon types', () => {
    const items = filledState.get(NAME).get('items')
    expect(selecters.getItems(filledState)).toEqual(items)
  })
})