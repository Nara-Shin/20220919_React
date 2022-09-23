import { createAction, handleActions } from 'redux-actions';

const COUNTER_INCREASE = 'COUNTER_INCREASE';
const COUNTER_DECREASE = 'COUNTER_DECREASE';

const init = {
  moduleName: 'Counter Reducer',
  cnt: 0,
}

// 각 component에서 작성한 counterR reducer 함수를 호출 할 메서드를 정의
/*
export const increaseAction = num => ({ type: COUNTER_INCREASE, payload: num });
export const decreaseAction = () => ({ type: COUNTER_DECREASE });

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
*/

// 리턴되는 값음 payload 라는 이름으로 reducer 함수의 action에 전달한다.
export const increaseAction = createAction(COUNTER_INCREASE, num => num);
export const decreaseAction = createAction(COUNTER_DECREASE);

const counterR = handleActions({
  [COUNTER_INCREASE]: (state, action) => {
    return { ...state, cnt: state.cnt + action.payload };
  },
  [COUNTER_DECREASE]: (state, action) => ({ ...state, cnt: state.cnt - 1 }),
}, init);

export default counterR;

