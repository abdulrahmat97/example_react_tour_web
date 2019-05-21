import React, { Component } from 'react';
import io from 'socket.io-client'
import GuestRouter from './routes/default-router'

class App extends Component {
  render() {
    return (
      <div>
        <GuestRouter />
      </div>
    )
  }
}

export default App;
