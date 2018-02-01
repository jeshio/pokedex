import React, { Component } from 'react'
import Loadable from 'react-loadable';
import Spinner from 'core/components/Spinner'
import './actions';

const LoadableComponent = Loadable({
  loader: () => import('./Pokemons'),
  loading: () => (<Spinner />),
})

export class Pokemons extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}

export {default as reducer} from './reducer'
export * from './constants'
