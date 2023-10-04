import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";
import "../App.css";

class LifecycleA extends Component {
  // Executes first while loading
  constructor(props) {
    super(props);

    this.state = {
      name: 'Sakshi',
    };
    console.log("in Constuctor A");
  }

  // Executes right after cunstructor
  static getDerivedStateFromProps(props, state) {
    console.log("lifecycleA getDerivedStateFromProps");
    return null;
  }

  // Perfect to perform network requests
  componentDidMount() {
    console.log("lifecycleA componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("lifecycleA shouldComponentUpdate");
    return true
  }

  // capture prev data from DOM eg: scroll Position
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("lifecycleA getSnapshotBeforeUpdate");
    return null
  }

  //executes once each cycle update, Ajax calls
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("lifecycleA componentDidUpdate");
  }

  //Changing state to demonstrate the getSnapshotBeforeUpdate and componentDidUpdate execution
  changeName () {
    this.setState({
        name : 'Akshay',
    })
  }

  // Execurtes after getDerivedStateFromProps
  render() {
    console.log("lifecycleA render");
    return (
      <div className="container">
        <div>LifeCycleA</div>
        <button onClick={() => this.changeName()}>Change State</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifecycleA;
