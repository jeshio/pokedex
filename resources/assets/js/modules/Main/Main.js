import React, { Component } from 'react'
import Navbar from './components'
import './style.scss'

export default class App extends Component {
  render () {
    return (
      <div className="Main">
        <Navbar />
        <div className="Main__layout">
          <div className="Main__row">
            <div className="Main__col">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
