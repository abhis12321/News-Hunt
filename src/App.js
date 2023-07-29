import React, { Component } from 'react'
import News from './components/News'
import Nav from './components/Nav'

export class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <News/>
      </div>
    )
  }
}

export default App
