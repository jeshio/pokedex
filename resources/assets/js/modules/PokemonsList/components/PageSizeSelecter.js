import React, { Component } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

const component = props =>
  <div className="PageSizeSelecter">
    <label className="PageSizeSelecter__title">Page size</label>
    <Select
      className="PageSizeSelecter__select"
      value={props.pageSize}
      onChange={({ value }) => props.onChangePageSize(parseInt(value))}
      options={props.options.map(pageSize => ({ value: pageSize, label: pageSize }))}
    />
  </div>

component.propTypes = {
  options: React.PropTypes.array.isRequired,
  pageSize: React.PropTypes.number.isRequired,
  onChangePageSize: React.PropTypes.func.isRequired
}

export default component
