import React from 'react'
import { Route, Switch } from 'react-router'
import Main from './containers/Main'
import PokemonsList from './containers/PokemonsList'

export default (
  <Main>
    <Switch>
      <Route path="/" exact component={PokemonsList}/>
    </Switch>
  </Main>
)
