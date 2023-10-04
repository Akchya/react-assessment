import React, { Component } from 'react'
import LifecycleA from './component/LifecycleA'

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {

    }
  }
  render() {
    return (
      <>
      <LifecycleA />
      </>
    )
  }
}

export default App