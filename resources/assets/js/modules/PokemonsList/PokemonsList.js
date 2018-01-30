import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import * as actions from './actions'
import {NAME} from './constants'
import List from './components/List'
import './style.scss'
import queryString from 'query-string'

class PokemonsList extends Component {
  onChangePage(pageNumber) {
    this.props.actions.changePage(pageNumber)
    this.props.pushToRouter({
      pathname: '/',
      search: pageNumber > 1 ? `?page=${pageNumber}` : ''
    })
  }

  render () {
    return <div className="Pokemons-list"><List {...this.props} onChangePage={pageNumber => this.onChangePage(pageNumber)} /></div>
  }
}

function mapStateToProps (state, ownProps) {
  const pokemonState = state.get(NAME)
  const router = state.get('router')

  let pageNumber = pokemonState.get('pageNumber')

  // get page number from GET query
  const query = queryString.parse(router.location.search)
  if (query.page) {
    pageNumber = parseInt(query.page) || pageNumber
  }

  return {
    items: pokemonState.get('items'),
    pageNumber: pageNumber,
    pageSize: pokemonState.get('pageSize'),
    totalCount: pokemonState.get('totalCount'),
    router
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
  pushToRouter: (url) => dispatch(push(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsList)
