// A01ClassProps.js
import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class A01ClassProps extends Component {
  render() {
    return (
      <div>
        <h3>A01ClassProps [수정불가]</h3>

        <div>
          Props로 전달된 값은 받은 컴퍼넌트에서 수정 할 수 없다 - 부모의 값이 변경되면 자식 컴퍼넌트에서도 변경된다.<br />
          자신이 선언한 데이터만 수정 가능(이것도 화면 갱신 가능, 불가로 나누어짐)<br />
          Name: {this.props.name}<br />
          Age: {this.props.age + 100}<br />
          Num: {this.props.num + 100}<br />
          Array: {this.props.ary[0]} / {this.props.ary[1]} / {this.props.ary[2]}<br />
          Object: {this.props.user.name} / {this.props.user.age} / {this.props.user.address}<br />
          Function: {this.props.onAdd(10, 20)}<br />
          isChecked: {this.props.isChecked ? 'TRUE' : 'FALSE'}<br />
          <br />
          {/* 기본형은 값이 넘어오지 않아도 에러 아님 */}
          Counter: {this.props.cnt}<br />
          {/* 참조형은 값이 넘어오지 않으면 에러 */}
          Object: {this.props.obj && this.props.obj.name}<br />
          <br />

          상위 컴퍼넌트에서 전달한 View를 표시할 목적으로 사용한다.<br />
          {this.props.children}

        </div>
      </div>
    )
  }
}
export default A01ClassProps

// 넘어오지 않은 props의 기본 값을 설정한다
A01ClassProps.defaultProps = {
  name: 'Unknown',
  cnt: 0,
  obj: { name: 'unknown' }
}

// 넘어오는 값의 타입을 체크할 수 있다.
// prop-types라는 모듈을 import 해야 한다 => import PropTypes from 'prop-types';
A01ClassProps.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  ary: PropTypes.array,
  user: PropTypes.object,
  onAdd: PropTypes.func,
  isChecked: PropTypes.bool,
}