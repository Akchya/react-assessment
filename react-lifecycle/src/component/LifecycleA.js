import React, { Component } from 'react'

class LifecycleA extends React.Component {
    // Executes first while loading
    constructor(props) {
      super(props)
    
      this.state = {
        name : ''
      }
      console.log('in Constuctor');
    }

    // Executes right after cunstructor
    static getDerivedStateFromProps(props, state) {
        console.log('lifecycleA getDerivedStateFromProps')
        return null
    }
    
  // Perfect to perform network requests
  // 
  componentDidMount() {
    console.log('lifecycleA componentDidMount')
  }

    // Execurtes after getDerivedStateFromProps
  render() {
    console.log('lifecycleA render')
    return (
      <div> </div>
    )
  }
}

export default LifecycleA