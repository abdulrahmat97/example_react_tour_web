import React, { Component } from 'react'
import io from 'socket.io-client'

import {
  Typography,
  Toolbar,
  AppBar,
  Grid,
  Button,
} from '@material-ui/core'

import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import styles from 'styles/landing-page'
import HeaderLink from '../../components/landing-page/header-link'
import Corousel from '../../components/landing-page/corousel'
// const socket = io.connect('http://localhost:3002')

class LandingPage extends Component {
  constructor(props) {
  super(props);

  this.state = {
    text: 'lorem ipsum ilham'
  }
}

  tesEvent () {

  }

  render() {
    const { classes } = this.props;
    return (
      <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <AppBar className={classes.appBarstyles} position="static">
          <Toolbar>
              <h2 className={classes.grow}>
                Logo
              </h2>
            <HeaderLink />
          </Toolbar>
        </AppBar>
        <div className={classes.container}>
          <Grid item xs={12} sm={12} md={5} pr={3} className={classes.containerLandingText}>
            <Typography variant="h3" color="secondary">
              {this.state.text}
            </Typography>
            <hr className={classes.line}/>
            <p className={classes.textStyles}>
              Lorem Ipsum is simply dummy text of the esettin standard dummy text ever when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <Button
              color="primary"
              variant="outlined"
              size="large"
              onClick={() => this.tesEvent()}
              // target="_blank"
              // rel="noopener noreferrer"
              style={{ float: 'right', width: '8rem' }}
            >
              <i className="fas fa-play" />
                Lorem
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <Corousel />
          </Grid>
        </div>
      </div>
    )
}}
LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LandingPage)