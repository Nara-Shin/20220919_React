// A01FuncProps.js
import React from 'react'
import PropTypes from 'prop-types';

// props => {name: '흥부', age: 30, num: 20....}
function A01FuncProps(props) {
  // const { name, age, num, ary, user, isChecked, onAdd, cnt, obj, children } = props; 
  const { name, age, num, ary, user, isChecked, onAdd, cnt, obj } = props;
  const { children } = props;

  return (
    <div>
      <h3>A01FuncProps</h3>

      <div>
        Name: {props.name}<br />
        Age: {props.age + 100}<br />
        Num: {props.num + 100}<br />
        Array: {props.ary[0]} / {props.ary[1]} / {props.ary[2]}<br />
        Object: {props.user.name} / {props.user.age} / {props.user.address}<br />
        Boolean: {props.isChecked ? 'T' : 'F'}<br />
        Function {props.onAdd(10, 20)}<br />
        <br />
        Counter: {props.cnt}<br />
        Object: {props.obj && props.obj.name}<br />
        <br />

        {props.children}
      </div>
      <br />

      <div>
        Name: {name}<br />
        Age: {age + 100}<br />
        Num: {num + 100}<br />
        Array: {ary[0]} / {ary[1]} / {ary[2]}<br />
        Object: {user.name} / {user.age} / {user.address}<br />
        Boolean: {isChecked ? 'T' : 'F'}<br />
        Function {onAdd(10, 20)}<br />
        <br />
        Counter: {cnt}<br />
        Object: {obj.name}<br />
        <br />

        {children}
      </div>
    </div>
  )
}

export default A01FuncProps

// class component와 동일한 방식으로 구현한다.
A01FuncProps.defaultProps = {
  cnt: 0,
  obj: { name: 'unknown' }
}

A01FuncProps.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
}
