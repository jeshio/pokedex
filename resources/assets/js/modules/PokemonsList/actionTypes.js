import {createTypes, async} from 'redux-action-creator'

export default createTypes([
  ...async('LOAD_LIST')
], 'POKEMON')
