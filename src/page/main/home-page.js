import React, { Component } from 'react'

import {
  Toolbar,
  AppBar,
  Button,
} from '@material-ui/core'

import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import styles from 'style/'
class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'lorem ipsum ilham'
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      s
      </div>
    )
}}
LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LandingPage)