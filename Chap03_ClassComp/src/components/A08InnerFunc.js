// A08InnerFunc.js
import React, { Component } from "react";

function A08InnerFunc(Comp) {
  return class A08InnerClass extends Component {
    constructor() {
      super();
      this.state = {
        age: 10,
        arr: [10, 20]
      }
    }
    changeAge = num => this.setState({ age: num });
    addArray = num => this.setState({ arr: this.state.arr.concat(num) });

    render() {
      return (
        <div>
          <h3>A08 Inner Class</h3>

          <div>
            Name: {this.props.name}<br />
            Age: {this.state.age}<br />
            Array: {this.state.arr[0]} / {this.state.arr[1]} / {this.state.arr[2]}<br />
            <button onClick={() => this.changeAge(100)}>AGE</button>
            <button onClick={() => this.addArray(50)}>AGE</button>

            <Comp {...this.props} age={this.state.age} arr={this.state.arr}
              changeAge={this.changeAge} addArray={this.addArray}
            ></Comp>
          </div>
        </div>
      )
    }
  }
}
export default A08InnerFunc;
