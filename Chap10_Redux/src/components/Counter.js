import React from "react";
import { connect } from 'react-redux';
import { increaseAction, decreaseAction } from './../modules/counterR';

function Counter(props) {
  const { name, cnt, increase, decrease } = props;

  return (
    <div>
      <h3>{name}: {cnt}</h3>
      <button onClick={() => increase(2)}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
export default connect(
  state => ({
    name: state.counterR.moduleName,
    cnt: state.counterR.cnt
  }),
  dispatch => ({
    increase: num => dispatch(increaseAction(num)),
    decrease: () => dispatch(decreaseAction()),
  })
)(Counter);
