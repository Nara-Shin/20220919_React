// A02FuncState.js
import React from 'react'
import { useState } from 'react';

// 리 렌더링이 될때마다 새롭게 호출되지 않는다.
let address = 'Seoul';

// 이 함수 내부에 값은 리 렌더링시 새롭게 호출된다.
function A02FuncState() {
  // useState hook을 사용
  // [변수명, setter method] = useState(기본값);
  const [name, setName] = useState('흥부');
  const [age, setAge] = useState(10);
  const [arr, setArray] = useState([10, 20]);
  const [user, setUser] = useState({ name: '흥부', age: 20 });
  const [isChecked, setIsChecked] = useState(true);

  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;
  const changeAddress = () => address = 'Busan';
  const changeName = () => setName('향단');
  const changeAge = num => setAge(num);
  const changeCheck = () => setIsChecked(!isChecked)

  return (
    <div>
      <h3>A02FuncState</h3>

      <div>
        Address: {address}<br />
        Name: {name}<br />
        Age: {age}<br />
        Array: {arr[0]} / {arr[1]} / {arr[2]}<br />
        Object: {user.name} / {user.age} / {user.address}<br />
        Boolean: {isChecked ? 'T' : 'F'}<br />
        Function {onAdd(10, 20)}<br />
      </div>

      <div>
        <button onClick={changeAddress}>Address</button>
        <button onClick={changeName}>Name</button>
        <button onClick={() => changeAge(100)}>Age</button>
        <button onClick={changeCheck}>Check</button>

        <button>Add Array</button>
        <button>Update Array</button>
        <button>Delete Array</button>

        <button>Add Object</button>
        <button>Update Object</button>
        <button>Delete Object</button>

      </div>
    </div>
  )
}

export default A02FuncState
