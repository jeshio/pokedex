import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

const component = props =>
  <div className="TypesSelecter">
    <label className="TypesSelecter__title">Types</label>
    <Select
      className="TypesSelecter__select"
      multi
      value={props.filterTypes}
      onChange={(values) => props.onChange(values.map(v => v.value))}
      options={props.types.map(type => ({ value: type.name.toLowerCase(), label: type.name }))}
      isLoading={props.loading}
      disabled={props.loading}
    />
  </div>

component.propTypes = {
  types: PropTypes.array.isRequired,
  filterTypes: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

export default component
