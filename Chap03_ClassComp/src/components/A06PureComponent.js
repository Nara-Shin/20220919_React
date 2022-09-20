import React, { PureComponent } from "react";

// 기본형 state 변수의 값이 대입되면 변경되면 리 렌더링을 방지하도록 shouldComponentUpdate가 이미 구현되어 있음.
// 따라서 shouldComponentUpdate를 재 정의할 수 없다
class A06PureComponent extends PureComponent {
  constructor() {
    super();

    this.state = {
      name: "NolBu",
      ary: ["React", "Angular", "Vue"],
    };
  }

  /*
  // PureComponent에서는 정의하면 에러. 이미 기술되어 있음
  shouldComponentUpdate(props, state) {
    if (state.name === this.state.name) return false;
    else return true;
  }
  */

  changeName = () => this.setState({ name: "NolBu" });
  changeObject = () => this.setState({ ary: ["React", "Angular", "Vue"] });

  render() {
    console.log("---------- render() Method ----------");
    return (
      <div>
        <h3>A06 PureComponent</h3>

        <div>
          Name: {this.state.name} <br />
          Ary: {this.state.ary[0]}
          <br />
          <button className="btn btn-primary btn-sm" onClick={this.changeName}>Name</button>
          <button className="btn btn-danger btn-sm" onClick={this.changeObject}>Ary</button>
        </div>
      </div>
    );
  }
}
export default A06PureComponent;
