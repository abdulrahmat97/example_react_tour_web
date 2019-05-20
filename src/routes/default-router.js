import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import LandingPage from '../page/guest/landing-page'
import LoginPage from '../page/guest/login-page'

export default class DefaultRouter extends Component {
  render () {
    return (
    <Route render={({ location }) => (
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fade"
          unmountOnExit
          timeout={20}
          appear
        >
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route component={LandingPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )}>
    </Route>
   )
  }
}