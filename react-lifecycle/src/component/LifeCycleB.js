import React, { Component } from "react";

export class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log('in Constuctor B');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB getDerivedStateFromProps')
    return null;
  }

  componentDidMount() {
    console.log('LifecycleB componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("LifecycleB shouldComponentUpdate");
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("lifecycleB getSnapshotBeforeUpdate");
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("lifecycleB componentDidUpdate");
  }

  render() {
    console.log("lifecycleB render");
    return <div>LifeCycleB</div>;
  }
}

export default LifeCycleB;
