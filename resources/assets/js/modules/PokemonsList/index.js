import React, { Component } from 'react'
import Loadable from 'react-loadable';
import './actions';

const LoadableComponent = Loadable({
  loader: () => import('./PokemonsList'),
  loading: () => (<div>loading</div>),
})

export class PokemonsList extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}

export {default as reducer} from './reducer'
export * from './constants'
