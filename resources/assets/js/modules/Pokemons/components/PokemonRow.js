import React, { Component } from 'react'

export default props =>
  <tr className="Pokemon-row">
    <td width="100">
      <div className="Pokemon-row__md -down" style={{ textAlign: 'center' }}>
        <div className="Pokemon-row__name">{props.name}</div>
        <div className="Pokemon-row__types" title="Types">
          {props.types.map(type => type.name).join(', ')}
        </div>
      </div>
      <div
        className="Pokemon-row__avatar"
        style={{ backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pkdx_id}.png)` }}
      />
      <div className="Pokemon-row__size-attributes">
        <span title="Height">h: {props.height}</span>
        &nbsp;
        <span title="Weight">w: {props.weight}</span>
      </div>
    </td>
    <td className="Pokemon-row__md -up">
      <div className="Pokemon-row__name">{props.name}</div>
      <div className="Pokemon-row__types" title="Types">
        {props.types.map(type => type.name).join(', ')}
      </div>
    </td>
    <td>
      <div title="Base health" style={{ color: '#595' }}>
        <span className="Pokemon-row__md -up">Health</span><span className="Pokemon-row__md -down">HP</span>: {props.hp}
      </div>
      <div title="Base attack" style={{ color: '#e88' }}>
        <span className="Pokemon-row__md -up">Attack</span><span className="Pokemon-row__md -down">A</span>: {props.attack}</div>
      <div title="Base defense" style={{ color: '#88e' }}>
        <span className="Pokemon-row__md -up">Defense</span><span className="Pokemon-row__md -down">D</span>: {props.defense}</div>
    </td>
    <td>
      <div title="Base speed">
        <span className="Pokemon-row__md -up">Speed</span><span className="Pokemon-row__md -down">Sp</span>: {props.speed}
      </div>
      <div title="Base special attack">
        <span className="Pokemon-row__md -up">Special Attack</span><span className="Pokemon-row__md -down">SA</span>: {props.sp_atk}
      </div>
      <div title="Base special defense">
        <span className="Pokemon-row__md -up">Special Defense</span><span className="Pokemon-row__md -down">SD</span>: {props.sp_def}
      </div>
    </td>
    <td>
      <div className="Pokemon-row__abilities" title="Abilities">
        {props.abilities.map(ability => <div key={ability.resource_uri}>{_.upperFirst(ability.name)}</div>)}
      </div>
    </td>
  </tr>
