// A02ClassState.js
import React, { Component } from 'react'

export class A02ClassState extends Component {
  constructor() {
    super();

    // 이 내부 변수의 값이 변경되면 그 값에 따라 화면은 자동 갱신된다
    this.state = {
      name: '흥부',
      age: 30,
      arr: [10, 20],
      user: { name: '방자', age: 20 },
      isChecked: true,
    }

    // 화면 변경 대상이 되지 않는 일반 참조 변수 역할만 한다.
    this.address = 'Seoul';

    // 일반 함수 형태로 정의된 이벤트 핸들러를 현재 객체를 this로 참조하도록 생성
    this.changeName = this.changeName.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
  }

  onAdd(x, y) {
    return `${x} + ${y} = ${x + y}`;
  }

  // Event
  // 일반 함수. 
  changeName(evt) {
    console.log(this);
    // this.state.name = 'NolBu';         // Error
    // state 값을 변경할 수 있는 Setter는 this.setState()를 이용해 변경
    // 값은 {key: value} 형태로 전달
    this.setState({ name: 'NolBu' });
  }
  changeAddress(evt) {
    this.address = 'Busan';
  }

  // this를 참조하는 메서드는 Arrow 함수로 정의한다.
  changeAge = num => this.setState({ age: num });

  // 배열
  addArray = () => {
    const random = Math.ceil(Math.random() * 100);
    // this.state.arr.push(random);                             // Error
    // this.setState({ arr: this.state.arr.push(random) })      // Error
    this.setState({ arr: this.state.arr.concat(random) })
  }
  updateArray = (index, value) => {
    const newArr = this.state.arr.map((item, i) => index === i ? value : item);
    this.setState({ arr: newArr });
  };
  deleteArray = index => {
    const newArr = this.state.arr.filter((item, i) => index !== i);
    this.setState({ arr: newArr });
  }

  // Object
  addObject = (key, value) => {
    // this.state.user[key] = value;
    const newUser = { ...this.state.user, [key]: value };
    this.setState({ user: newUser });
  }
  updateObject = (key, value) => {
    const newUser = { ...this.state.user, [key]: value };
    this.setState({ user: newUser });
  }
  deleteObject = key => {
    delete this.state.user[key];              // 기존 객체에서 삭제
    const newUser = { ...this.state.user };   // 삭제된 객체를 복사해서 새로운 객체 생성
    this.setState({ user: newUser });         // 대입
  }


  render() {
    return (
      <div>
        <h3>A02ClassState [수정 가능 - 화면 갱신 작업이 이루어짐]</h3>

        <div>
          Address: {this.address}<br />
          Name: {this.state.name}<br />
          Age: {this.state.age}<br />
          Array: {this.state.arr[0]} / {this.state.arr[1]} / {this.state.arr[2]}<br />
          User: {this.state.user.name} / {this.state.user.age} / {this.state.user.address}<br />
          isChecked: {this.state.isChecked ? 'TRUE' : 'FALSE'}<br />
          onAdd: {this.onAdd(10, 20)}
        </div>

        <div>
          {this.state.arr.map((item, index) => <span key={index}>{item}, </span>)}
        </div>

        <div>
          <button onClick={this.changeName}>Name</button>
          <button onClick={this.changeAddress}>Address</button>
          {/* 매개변수가 있는 경우 이벤트 핸들러 호출 방식 */}
          <button onClick={() => this.changeAge(200)}>Age</button>

          <button onClick={this.addArray}>Add Array</button>
          <button onClick={() => this.updateArray(1, 2000)}>Update Array</button>
          <button onClick={() => this.deleteArray(1)}>Delete Array</button>

          <button onClick={() => this.addObject('address', 'Seoul')}>Add Object</button>
          <button onClick={() => this.updateObject('address', 'Busan')}>Update Object</button>
          <button onClick={() => this.deleteObject('address')}>Delete Object</button>
        </div>
      </div>
    )
  }
}

export default A02ClassState
