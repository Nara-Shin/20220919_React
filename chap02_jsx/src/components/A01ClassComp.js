// A01ClassComp.js
import React from 'react'
class A01ClassComp extends React.Component {
  constructor() {
    super();              // constructor 내부에서는 super()로 부모 객체부터 생성할 필요가 있다.
    this.name = '흥부'
  }
  // render() 메서드를 재 정의해야 한다.
  render() {
    return (
      <div>
        <h3>A01 Class Component</h3>
        <div>
          This is Class Component<br />
          Name: {this.name}
        </div>
      </div>
    )
  }
}
export default A01ClassComp;
