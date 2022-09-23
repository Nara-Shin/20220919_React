
const COUNTER_INCREASE = 'COUNTER_INCREASE';
const COUNTER_DECREASE = 'COUNTER_DECREASE';

const init = {
  moduleName: 'Counter Reducer',
  cnt: 0,
}

// 각 component에서 작성한 counterR reducer 함수를 호출 할 메서드를 정의
export const increaseAction = num => {
  return { type: COUNTER_INCREASE, payload: num }
}
export const decreaseAction = () => {
  return { type: COUNTER_DECREASE }
}

function counterR(state = init, action) {
  switch (action.type) {
    case COUNTER_INCREASE:
      return { ...state, cnt: state.cnt + action.payload };
    case COUNTER_DECREASE:
      return { ...state, cnt: state.cnt - 1 };
    default:
      return state;
  }
}
export default counterR;

