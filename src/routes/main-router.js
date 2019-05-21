import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from 'page/main/home-page'

export default class MainRouter extends Component {
  render () {
    return (
      <Switch>
        <Route component={HomePage} />
      </Switch>
    )
  }
}