import React, { Component } from "react";
import A08InnerFunc from './A08InnerFunc';

class A08HigherOrderComp extends Component {
  render() {
    return (
      <div>
        <h3>A08 Higher Order Component</h3>
        props.name: {this.props.name}<br />
        props.age : {this.props.age}<br />
        arr: {this.props.arr[0]} / {this.props.arr[1]} / {this.props.arr[2]}<br />
        <button onClick={() => this.props.changeAge(600)}>AGE</button>
        <button onClick={() => this.props.addArray(5)}>ARR</button>
      </div>
    );
  }
}
// 호츨되는 것이 import한 함수다.
export default A08InnerFunc(A08HigherOrderComp);
