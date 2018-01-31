import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'react-select/dist/react-select.css'

class component extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.filterValue !== this.props.filterValue) {
      this.setInputValue(nextProps.filterValue)
    }
  }

  setInputValue(val) {
    this.refs.filterInput.value = val
  }

  render() {
    const { props } = this

    return (
      <div className="SearchBox">
        <label className="SearchBox__title">Search</label>
        <input type="text" ref="filterInput" placeholder="Search..." onChange={(e) => props.onChangeFilter(e.target.value)} />
      </div>
    )
  }
}

component.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired
}

export default component
