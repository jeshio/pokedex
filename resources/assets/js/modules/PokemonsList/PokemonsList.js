import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions'
import {NAME} from './constants'
import List from './components/List'

class PokemonsList extends Component {
  componentDidMount () {
    this.props.actions.loadPokemons()
  }

  render () {
    return <List items={this.props.items} />
  }
}

function mapStateToProps (state) {
  return { items: state.get(NAME).get('items') }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsList)
