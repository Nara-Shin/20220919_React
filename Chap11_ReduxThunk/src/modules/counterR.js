
import { createAction, handleActions } from 'redux-actions'

const COUNTER_INCREASE = 'COUNTER/INCREASE';
const COUNTER_DECREASE = 'COUNTER/DECREASE';

const increase = createAction(COUNTER_INCREASE, (num) => num);
// export const decrease = createAction(COUNTER_DECREASE);

export const increaseAction = num => dispatch => {
  setTimeout(() => {
    dispatch(increase(num));
  }, 500)
}
export const decreaseAction = () => dispatch => {
  setTimeout(() => {
    dispatch({ type: COUNTER_DECREASE })
  }, 500)
}

const init = {
  num: 0,
  moduleName: 'Counter Module',
}

const counterR = handleActions({
  [COUNTER_INCREASE]: (state, action) => ({ ...state, num: state.num + action.payload }),
  [COUNTER_DECREASE]: (state, action) => ({ ...state, num: state.num - 1 })
}, init);
export default counterR;
