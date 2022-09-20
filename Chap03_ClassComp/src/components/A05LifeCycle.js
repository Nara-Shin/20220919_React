import React, { Component } from "react";

class A05LifeCycle extends Component {
  constructor() {
    super();

    this.state = {
      color: "green",
    };
    console.log("1. Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log('2 getDrivedStateFromProps');
    if (props.isChecked) {
      state.color = props.color;
      state.name = 'NolBu';
    }
    return state;
  }

  componentDidMount() {
    // DOM이 완성되고 난 후..
    // ajax등의 통신후 결과를 DOM에 반영 등에 사용된다.
    console.log('4. componentDidMount')
  }

  shouldComponentUpdate(props, state) {
    console.log('5. shouldComponentUpdate');

    // true => 변경된 사항을 DOM에 반영
    // false => 변경된 사항을 DOM에 반영하지 않음
    return true;
  }

  componentDidUpdate() {
    console.log('6. componentDidUpdate')
  }


  changeColor = () => {
    this.setState({ color: "orange" });
  };

  render() {
    console.log("3. Render");
    return (
      <div>
        <h3>A05 Life Cycle</h3>
        color: {this.state.color}<br />
        name: {this.state.name}
        <br />
        <button onClick={this.changeColor}>Click</button>
      </div>
    );
  }
}
export default A05LifeCycle;
