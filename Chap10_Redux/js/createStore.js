
const init = {
  moduleName: 'Counter Reducer',
  cnt: 0,
}

function counterR(state = init, action) {
  switch (action.type) {
    case 'COUNTER_INCREASE':
      return { ...state, cnt: state.cnt + action.payload };
    case 'COUNTER_DECREASE':
      return { ...state, cnt: state.cnt - 1 };
    default:
      return state;
  }
}


function createStore(reducer) {
  let state = reducer(undefined, '');

  const getState = () => {
    return state;
  }

  const dispatch = action => {
    state = reducer(state, action)
  }

  // Event 전달

  return {
    getState,
    dispatch
  }
}

const store = createStore(counterR);
// console.log(store.cnt);
console.log(store.getState());

const increase = num => ({ type: 'COUNTER_INCREASE', payload: num });
store.dispatch(increase(2));

console.log(store.getState());
