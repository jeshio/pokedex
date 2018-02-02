import React from 'react'
import { Route, Switch } from 'react-router'
import Main from './modules/Main'

import {Pokemons} from './modules/Pokemons'

export default (
  <Main>
    <Switch>
      <Route path="/" exact component={Pokemons}/>
    </Switch>
  </Main>
)
