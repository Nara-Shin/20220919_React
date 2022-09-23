import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { increaseAction, decreaseAction } from './../modules/counterR';

function Counter() {

  const { moduleName, cnt } = useSelector(state => state.counterR)
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{moduleName}: {cnt}</h3>
      <button onClick={() => dispatch(increaseAction(2))}>+</button>
      <button onClick={() => dispatch(decreaseAction())}>-</button>
    </div>
  );
}
export default Counter;
