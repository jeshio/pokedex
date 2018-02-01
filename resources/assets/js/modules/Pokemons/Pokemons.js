import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import * as actions from './actions'
import * as pokemonTypesActions from 'modules/PokemonTypes/actions'
import { getItems as getPokemonTypes, getLoadingStatus as getPokemonTypesLoadingStatus } from 'modules/PokemonTypes/selecters'
import {NAME} from './constants'
import './style.scss'
import queryString from 'query-string'
import { getFilteredItems } from './selecters'

import * as Components from './components'

class PokemonsList extends Component {
  componentWillMount() {
    const query = queryString.parse(this.props.router.location.search, {arrayFormat: 'bracket'})
    if (query.size) {
      this.props.actions.setPageSize(parseInt(query.size))
    }
    if (query.search) {
      this.props.actions.setFilterValue(query.search)
    }
    if (query.types) {
      this.props.actions.setFilterTypes(query.types)
    }
  }

  componentDidMount() {
    this.props.pokemonTypesActions.loadPokemonTypes()
  }

  /**
   * Build search query from state and arguments
   * @param override
   * @returns String search query
   */
  getSearchQuery(override = {}) {
    const { pageSize, pageNumber, filterValue, filterTypes } = this.props
    const currentQuery = queryString.parse(this.props.router.location.search, {arrayFormat: 'bracket'});

    return queryString.stringify({
      ...currentQuery,
      ...(pageSize !== 10 ? { size: pageSize } : {}),
      ...(pageNumber > 1 ? { page: pageNumber } : {}),
      ...(filterValue ? { search: filterValue } : {}),
      ...(filterTypes.length > 0 ? { types: filterTypes } : {}),
      ...override
    }, {arrayFormat: 'bracket'})
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

  onChangeFilter(value) {
    this.props.actions.setFilterValue(value)
    this.props.pushToRouter({
      pathname: '/',
      search: this.getSearchQuery({ search: value })
    });
  }

  onChangeTypes(values) {
    this.props.actions.setFilterTypes(values)
    this.props.pushToRouter({
      pathname: '/',
      search: this.getSearchQuery({ types: values })
    });
  }

  render () {
    return <div className="Pokemons-list">
      <Components.List
        {...this.props}
        searchBoxComponent={
          <Components.SearchBox
            onChangeFilter={_.debounce((value) => this.onChangeFilter(value), 700)}
            filterValue={this.props.filterValue}
            loading={this.props.loading}
          />
        }
        pageSizeSelecterComponent={
          <Components.PageSizeSelecter
            pageSize={this.props.pageSize}
            onChangePageSize={pageSize => this.onChangePageSize(pageSize)}
            options={[10, 25, 50]}
            loading={this.props.loading}
          />
        }
        paginatorComponent={
          <Components.Paginator
            totalCount={this.props.totalCount}
            pageNumber={this.props.pageNumber}
            pageSize={this.props.pageSize}
            onChangePage={_.debounce(pageNumber => this.onChangePage(pageNumber), 700)}
            loading={this.props.loading}
          />
        }
        typeSelecterComponent={
          <Components.TypesSelecter
            types={this.props.types}
            filterTypes={this.props.filterTypes}
            onChange={(values) => this.onChangeTypes(values)}
            loading={this.props.loadingTypesStatus}
          />
        }
        PokemonRowComponent={Components.PokemonRow}
        AttributesChartComponent={Components.AttributesChart}
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
    loading: pokemonState.get('loading'),
    items: getFilteredItems(state),
    pageNumber: pageNumber,
    pageSize: pokemonState.get('pageSize'),
    totalCount: pokemonState.get('totalCount'),
    filterValue: pokemonState.get('filterValue'),
    filterTypes: pokemonState.get('filterTypes'),
    types: getPokemonTypes(state),
    loadingTypesStatus: getPokemonTypesLoadingStatus(state),
    router
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
  pokemonTypesActions: bindActionCreators(pokemonTypesActions, dispatch),
  pushToRouter: (url) => dispatch(push(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsList)
