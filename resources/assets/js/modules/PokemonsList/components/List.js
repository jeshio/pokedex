import React, { Component } from 'react'
import PokemonRow from './PokemonRow'
import Paginator from './Paginator'
import PageSizeSelecter from './PageSizeSelecter'

const component = props =>
  <div className="List">
    <div className="List__title">Listing</div>

    <PageSizeSelecter
      pageSize={props.pageSize}
      onChangePageSize={props.onChangePageSize}
      options={[10, 25, 50]}
    />

    <div className="List__body">
      {props.items.map(item => <PokemonRow {...item} key={item.pkdx_id} />)}
    </div>

    <Paginator
      totalCount={props.totalCount}
      pageNumber={props.pageNumber}
      pageSize={props.pageSize}
      onChangePage={props.onChangePage}
    />
  </div>

component.propTypes = {
  items: React.PropTypes.any.isRequired,
  totalCount: React.PropTypes.number.isRequired,
  pageNumber: React.PropTypes.number.isRequired,
  pageSize: React.PropTypes.number.isRequired,
  onChangePage: React.PropTypes.func.isRequired,
  onChangePageSize: React.PropTypes.func.isRequired
}

export default component
