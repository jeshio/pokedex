import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PulseLoader } from 'halogenium'

const component = props =>
  <PulseLoader color="#26A65B" size="16px" margin="4px" className={`loader ${props.className}`} />

export default component