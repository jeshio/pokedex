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
  componentDidMount() {
    const query = queryString.parse(this.props.router.location.search)
    if (query.size) {
      this.props.actions.setPageSize(parseInt(query.size))
    }
  }

  /**
   * Build search query from state and arguments
   * @param override
   * @returns String search query
   */
  getSearchQuery(override = {}) {
    const { pageSize, pageNumber } = this.props;
    return queryString.stringify({
      ...queryString.parse(this.props.router.location.search),
      ...(pageSize !== 10 ? { size: pageSize } : {}),
      ...(pageNumber > 1 ? { page: pageNumber } : {}),
      ...override
    })
  }

  onChangePage(pageNumber) {
    this.props.actions.changePage(pageNumber)
    this.props.pushToRouter({
      pathname: '/',
      search: this.getSearchQuery({ page: pageNumber })
    })
  }

  onChangePageSize(pageSize) {
    this.props.actions.changePageSize(pageSize)
    this.props.pushToRouter({
      pathname: '/',
      search: this.getSearchQuery({ size: pageSize })
    })
  }

  render () {
    return <div className="Pokemons-list">
      <List {...this.props}
        onChangePage={pageNumber => this.onChangePage(pageNumber)}
        onChangePageSize={pageSize => this.onChangePageSize(pageSize)}
      />
    </div>
  }
}

function mapStateToProps (state) {
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
