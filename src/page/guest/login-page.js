import React, { Component } from 'react'
import {observer} from 'mobx-react'
import { observable, action } from 'mobx'

import {
  Typography,
  Toolbar,
  AppBar,
  Grid,
  TextField,
  Button,
} from '@material-ui/core'
import {
  Link,
} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import styles from 'styles/login-page'

class LoginPage extends Component {
  @observable inje = ''
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      fullName: '',
      username: '',
      changeToSignup: false,
    }
  }

  handleChange = (event) => {
    console.log(event.target.name)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick = () => {
    this.setState({
      changeToSignup: !this.state.changeToSignup
    })
  }

  render () {
    const { classes } = this.props
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <AppBar className={classes.appBarstyles} position="static">
          <Toolbar>
            <h2
              onClick={() => {
                this.props.history.push('/')
              }}
              className={classNames(classes.grow, {
                [classes.logoWhite]: this.state.changeToSignup,
                [classes.logo]: !this.state.changeToSignup
            })}>
              Logo
            </h2>
          </Toolbar>
        </AppBar>
        <Grid container className={classNames(classes.container, {
          [classes.activeRightPanel]: this.state.changeToSignup
          }
          )}>
          <Grid item className={classNames(classes.formContainer,{
            [classes.signInContainer]: !this.state.changeToSignup,
            [classes.signInContainerRightPanelActive]: this.state.changeToSignup
          })}>
            <form>
              <h1 className={classes.tittle}>
                Sign In
              </h1>
              <TextField
                label="email"
                name="email"
                placeholder="email"
                variant="outlined"
                className={classes.textField}
                onChange={this.handleChange}
                value={this.state.email}
              />
              <TextField
                label="password"
                name="password"
                variant="outlined"
                placeholder="Type password"
                className={classes.textField}
                onChange={this.handleChange}
                value={this.state.password}
                type="password"
              />
              <Button
                color="primary"
                variant="outlined"
                size="large"
                // target="_blank"
                // rel="noopener noreferrer"
                className={classes.button}
              >
                <i className="fas fa-play" />
                  Lorem
              </Button>
            </form>
          </Grid>
          <Grid item className={classNames(classes.formContainer,{
            [classes.signUpContainer]: !this.state.changeToSignup,
            [classes.signUpContainerRightPanelActive]: this.state.changeToSignup
          })}>
            <form>
               <h1 className={classes.tittle}>
                Sign Up
              </h1>
              <TextField
                label="Full Name"
                name="fullName"
                fullWidth
                variant="outlined"
                className={classes.textField}
                placeholder="Full Name"
              />
              <TextField
                label="Username"
                name="Username"
                fullWidth
                variant="outlined"
                className={classes.textField}
                placeholder="Full Name"
              />
              <TextField
                label="email"
                name="email"
                className={classes.textField}
                fullWidth
                variant="outlined"
                placeholder="email"
              />
              <TextField
                label="password"
                name="password"
                className={classes.textField}
                fullWidth
                variant="outlined"
                placeholder="Type password"
                type="password"
              />
              <Button
                color="primary"
                variant="outlined"
                size="large"
                // target="_blank"
                // rel="noopener noreferrer"
                className={classes.button}
              >
                <i className="fas fa-play" />
                  Lorem
              </Button>
            </form>
          </Grid>
          <Grid item className={classNames(classes.overlayContainer, {
            [classes.overlayContainer]: !this.state.changeToSignup,
            [classes.overlayContainerRightPanelActive]: this.state.changeToSignup
          })}>
            <Grid container className={classNames(classes.overlay, {
            [classes.overlay]: !this.state.changeToSignup,
            [classes.overlayRightPanelActive]: this.state.changeToSignup
          })}>
              <Grid item className={classNames(classes.overlayPanel, {
            [classes.overlayLeft]: !this.state.changeToSignup,
            [classes.overlayLeftRightPanelActive]: this.state.changeToSignup
          })}>
                <h2 className={classes.overlayTitle}>
                  lorem lremrere ds
                </h2>
                <p>lorem ipsum lorem re ekrnekr lorem i psum lorem re ekrnekr psum lorem re ekrnekrpsum lorem re ekrnekr</p>
                <Button
                    color="secondary"
                    variant="contained"
                    size="large"
                    onClick={() => {
                      this.handleClick()
                    }}
                    // target="_blank"
                    // rel="noopener noreferrer"
                    style={{ float: 'right', width: '8rem' }}
                  >Sign In</Button>
              </Grid>
              <Grid item className={classNames(classes.overlayPanel, {
            [classes.overlayRight]: !this.state.changeToSignup,
            [classes.overlayRightRightPanelActive]: this.state.changeToSignup
          })}>
                <h2 className={classes.overlayTitle}>
                  lorem rekreo
                </h2>
                <p>lorem ipsum lorem re ekrnekr lorem ipsum lorem re ekrnekr psum lorem re ekrnekr psum lorem re ekrnekr psum lorem re ekrnekr</p>
                 <Button
                    color="secondary"
                    variant="contained"
                    size="large"
                    onClick={() => {
                      this.handleClick()
                    }}
                    // target="_blank"
                    // rel="noopener noreferrer"
                    style={{ float: 'right', width: '8rem' }}
                  >Sign Up</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(LoginPage)