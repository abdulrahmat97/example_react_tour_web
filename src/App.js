import React, { Component } from 'react';
import io from 'socket.io-client'
import createBrowserHistory from 'history/createBrowserHistory'
import { BrowserRouter as Router } from 'react-router-dom'
import GuestRouter from './routes/default-router'

const history = createBrowserHistory()

class App extends Component {
  componentDidMount () {
    const socket = io.connect('http://localhost:3002/chat')
    socket.emit('adduser', 'rudi')
  }

  render() {
    return (
      <div>
        <GuestRouter history={history} />
      </div>
    )
  }
}

export default App;
