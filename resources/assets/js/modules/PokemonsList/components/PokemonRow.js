import React, { Component } from 'react'

export default props =>
  <div className="pokemon_row">
    <div
      className="pokemon_row__avatar"
      style={{ backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pkdx_id}.png)` }}
    />
    <div className="pokemon_row__content">
      <div className="pokemon_row__title">
        <div className="pokemon_row__name">
          {props.name}
        </div>
        <div className="pokemon_row__main-attributes">
          <span title="Base health" style={{ color: '#595' }}>HP: {props.hp}</span>&nbsp;
          <span title="Base attack" style={{ color: '#e88' }}>A: {props.attack}</span>&nbsp;
          <span title="Base defense" style={{ color: '#88e' }}>D: {props.defense}</span>&nbsp;
        </div>
      </div>
      <div className="pokemon_row__other-attributes">
        <div title="Base speed">Speed:{props.speed}</div>&nbsp;
        <div title="Base special attack">Special Attack: {props.sp_atk}</div>&nbsp;
        <div title="Base special defense">Special Defense: {props.sp_def}</div>&nbsp;
      </div>
      <div className="pokemon_row__size-attributes">
        <span title="Height">h: {props.height}</span>
        &nbsp;
        <span title="Weight">w: {props.weight}</span>
      </div>
      <div className="pokemon_row__types" title="Types">
        {props.types.map(type => type.name).join(', ')}
      </div>
    </div>
  </div>
