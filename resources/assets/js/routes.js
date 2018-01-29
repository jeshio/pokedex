import React from 'react'
import { Route, Switch } from 'react-router'
import Main from './modules/Main'

import {PokemonsList} from './modules/PokemonsList'

export default (
  <Main>
    <Switch>
      <Route path="/" exact component={PokemonsList}/>
    </Switch>
  </Main>
)
