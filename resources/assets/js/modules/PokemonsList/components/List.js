import React, { Component } from 'react'
import PokemonRow from './PokemonRow'

export default props =>
  <div className="row">
    <div className="col-md-12">
      <div className="panel panel-default">
        <div className="panel-heading">Listing</div>

        <div className="panel-body">
          {props.items.map(item => <PokemonRow {...item} key={item.pkdx_id} />)}
        </div>
      </div>
    </div>
  </div>
