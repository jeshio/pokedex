import React, { Component } from 'react'

export default props =>
  <div className="row">
    <div className="col-md-12">
      <div className="panel panel-default">
        <div className="panel-heading">Pokemon</div>

        <div className="panel-body">
          {props.items.map(item => item.name)}
        </div>
      </div>
    </div>
  </div>
