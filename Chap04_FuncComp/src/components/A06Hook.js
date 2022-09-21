import React, { useReducer, useCallback, useEffect, useMemo } from "react";

// state 변수 처리 로직을 이 함수에서 실행
// state => useReducer의 기본값. 이 함수에 의해 값이 변경되면 변경된 값을 참조
// action => 함수가 실행되면서 넘어오는 값. 객체 타입 {type: '구별자', payload: 함수에서 실행시 필요한 값}
function reducer(state, action) {
  // console.log(action);
  // console.log(state);

  switch (action.type) {
    case 'CHANGE_NUM':
      // action.payload => evt.target
      let value = Number(action.payload.value);
      if (isNaN(value)) value = 0;
      return { ...state, [action.payload.name]: value };
    case 'CHANGE_STR':
      return { ...state, str: action.payload };
    case 'CHANGE_TODAY':
      return { ...state, today: new Date() };
    case 'ADD_LIST':
      return { ...state, list: state.list.concat(state.avg) };
    default:
      return state;
  }
};

function A06Hook() {
  // dispatch는 함수(이벤트 전가)
  // data는 state 변수다. reducer 함수에 의해 값이 변경되면 그 값을 기반으로 화면 재 구성
  const [data, dispatch] = useReducer(reducer, {
    num: 2,
    str: '',
    today: new Date(),
    avg: '',
    list: []
  });

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'CHANGE_TODAY' });
    }, 3000);
  }, [])

  const changeNum = useCallback(evt => dispatch({ type: 'CHANGE_NUM', payload: evt.target }), []);
  const changeStr = useCallback(evt => dispatch({ type: 'CHANGE_STR', payload: evt.target.value }), []);
  const addArray = useCallback(() => dispatch({ type: 'ADD_LIST' }), [])

  const getAverage = arr => {
    console.log('계산중...');
    if (arr.length === 0) return 0;
    const total = arr.reduce((total, item) => total + item, 0);
    return total / arr.length;
  }
  const getAverageMemo = useMemo(() => {
    return getAverage(data.list);
  }, [data.list]);

  return (
    <div>
      <h3>A06. Reducer</h3>

      <div>
        Num: {data.num}
        <input type="text" name="num" className="form-control"
          value={data.num} onChange={changeNum} />
        <br />

        Str: {data.str}
        <input type="text" name="str" className="form-control"
          value={data.str} onChange={changeStr} />
        <br />

        Today: {data.today.toLocaleString()}<br />
        <br />

        Avg: {data.avg} / {getAverageMemo}
        <div className="input-group">
          <input type="text" name="avg" className="form-control"
            value={data.avg} onChange={changeNum} />
          <button className="btn btn-outline-primary btn-sm" onClick={addArray}>ADD</button>
        </div>
      </div>
    </div>
  );
}
export default A06Hook;
