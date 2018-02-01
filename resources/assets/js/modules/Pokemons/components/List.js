import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Spinner from 'core/components/Spinner'
import * as Components from './index'

const component = props =>
  <div className="List">
    <div className="List__params">
      {props.searchBoxComponent}

      {props.typeSelecterComponent}

      {props.pageSizeSelecterComponent}
    </div>

    <Spinner className={props.loading ? '' : 'hide'} />

    <table className={`List__table ${props.loading ? 'hide' : ''}`}>
      <tbody>
        {props.items.map(item =>
          <props.PokemonRowComponent
            {...item}
            AttributesChartComponent={props.AttributesChartComponent}
            key={item.pkdx_id}
          />
        )}
      </tbody>
    </table>

    {props.paginatorComponent}
  </div>

component.propTypes = {
  loading: PropTypes.bool.isRequired,
  searchBoxComponent: PropTypes.object.isRequired,
  pageSizeSelecterComponent: PropTypes.object.isRequired,
  paginatorComponent: PropTypes.object.isRequired,
  typeSelecterComponent: PropTypes.object.isRequired,
  PokemonRowComponent: PropTypes.func.isRequired,
  AttributesChartComponent: PropTypes.func.isRequired,
  items: PropTypes.any.isRequired,
}

export default component
