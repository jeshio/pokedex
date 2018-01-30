import React, { Component } from 'react'

export default props =>
  <div className="pokemon_row">
    <div className="pokemon_row__avatar" style={{ backgroundImage: `url(https://pokeapi.co/media/img/${props.pkdx_id}.png)` }}></div>
    <div className="pokemon_row__name">
      {props.name}
    </div>
    <div className="pokemon_row__main-attributes">
      {props.attack}
      {props.defense}
      {props.hp}
      {props.speed}
    </div>
    <div className="pokemon_row__size-attributes">
      h: {props.height}
      w: {props.weight}
    </div>
    <div className="pokemon_row__types">
      {props.types.map(type => type.name).join(', ')}
    </div>
  </div>
