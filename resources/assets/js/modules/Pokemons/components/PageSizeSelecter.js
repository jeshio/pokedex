import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

const component = props =>
  <div className="PageSizeSelecter">
    <label className="PageSizeSelecter__title">Page size</label>
    <Select
      className="PageSizeSelecter__select"
      value={props.pageSize}
      onChange={(value) => value && props.onChangePageSize(parseInt(value))}
      searchable={false}
      simpleValue
      clearable={false}
      options={props.options.map(pageSize => ({ value: pageSize, label: pageSize }))}
      isLoading={props.loading}
      disabled={props.loading}
    />
  </div>

component.propTypes = {
  options: PropTypes.array.isRequired,
  pageSize: PropTypes.number.isRequired,
  onChangePageSize: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

export default component
