import React, { Component } from 'react'
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./PokemonsList'),
  loading: () => (<div>loading</div>),
})

export default class PokemonsList extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}
