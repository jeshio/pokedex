import React, { Component } from 'react'
import {ATTRIBUTE_COLORS} from '../constants'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

class component extends React.Component {
  getData() {
    const { props } = this

    return [
      {name: 'Health', value: props.hp, fill: ATTRIBUTE_COLORS.hp},
      {name: 'Speed', value: props.speed, fill: ATTRIBUTE_COLORS.speed},
      {name: 'Attack', value: props.attack, fill: ATTRIBUTE_COLORS.attack},
      {name: 'Defense', value: props.defense, fill: ATTRIBUTE_COLORS.defense},
      {name: 'Special Attack', value: props.sp_atk, fill: ATTRIBUTE_COLORS.sp_atk},
      {name: 'Special Defense', value: props.sp_def, fill: ATTRIBUTE_COLORS.sp_def}
    ]
  }

  render() {
    const { props } = this

    return (
      <ResponsiveContainer width="100%" height={100} minWidth={50} debounce={500} className="AttributesChart">
        <BarChart data={this.getData()} layout="vertical" barSize={12}>
          <Bar dataKey='value' fill='#8884d8' label={{ fill: '#fff', fontSize: 10 }} />
          <XAxis dataKey="value" type="number" hide />
          <YAxis dataKey="name" type="category" hide />
          <Tooltip/>
        </BarChart>
      </ResponsiveContainer>
    )
  }
}

export default component