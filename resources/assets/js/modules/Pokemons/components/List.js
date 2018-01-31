import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PokemonRow from './PokemonRow'
import Paginator from './Paginator'

const component = props =>
  <div className="List">
    <div className="List__params">
      {props.searchBoxComponent}

      {props.typeSelecterComponent}

      {props.pageSizeSelecterComponent}
    </div>

    <table className="List__table">
      <tbody>
        {props.items.map(item => <props.PokemonRowComponent {...item} key={item.pkdx_id} />)}
      </tbody>
    </table>

    {props.paginatorComponent}
  </div>

component.propTypes = {
  searchBoxComponent: PropTypes.object.isRequired,
  pageSizeSelecterComponent: PropTypes.object.isRequired,
  paginatorComponent: PropTypes.object.isRequired,
  typeSelecterComponent: PropTypes.object.isRequired,
  PokemonRowComponent: PropTypes.func.isRequired,
  items: PropTypes.any.isRequired,
}

export default component
