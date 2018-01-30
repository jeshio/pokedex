import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'
import MobileDetector from 'utils/MobileDetector'

const component = props =>
  <div>
    <ReactPaginate
      pageCount={Math.ceil(props.totalCount/props.pageSize)}
      pageRangeDisplayed={1}
      marginPagesDisplayed={3}
      containerClassName="Paginator"
      previousClassName="Paginator__previous"
      nextClassName="Paginator__next"
      activeClassName="Paginator__active"
      previousLabel={MobileDetector.mobile() ? '<' : 'Previous'}
      nextLabel={MobileDetector.mobile() ? '>' : 'Next'}
      onPageChange={(r) => props.onChangePage(r.selected + 1)}
      initialPage={props.pageNumber - 1}
    />
  </div>

component.propTypes = {
  totalCount: React.PropTypes.number.isRequired,
  pageNumber: React.PropTypes.number.isRequired,
  pageSize: React.PropTypes.number.isRequired,
  onChangePage: React.PropTypes.func.isRequired
}

export default component
