import React, { useState, useRef, useEffect, useCallback } from "react";

function A05Hook() {

  // useState => 화면 갱신에 관련된 변수 정의
  const [data, setData] = useState({
    num: 10,
    str: ''
  });

  const [today, setToday] = useState(new Date());

  // useRef. 함수의 값이 없으면 Element 요소와 연결 목적
  const numRef = useRef();
  const strRef = useRef();

  // lifecycle hook
  // [] 없음 => 리 로드시에 매번 재 실행
  // [] => componentDidMound
  // [state 변수명, 함수명] => componentDidUpdate. 최초 1번과 []안에 지정된 변수나 함수가 변경되는 경우만 실행 
  useEffect(() => {
    numRef.current.style.background = 'lightgray';
    strRef.current.style.color = 'orange';
    console.log('[]로 설정해서 돔이 완성된 후 1번만 실행됨');

    setTimeout(() => {
      setToday(new Date());
    }, 3000);
  }, []);

  // 상화에 따라 여러개로 나누어 기술 가능
  // [] 없음 => 리 로드시에 매번 재 실행
  useEffect(() => {
    console.log('Hello World');
  });

  useEffect(() => {
    console.log('str changed');
  }, [data.str]);

  // event handler
  const changeNum = useCallback(evt => {
    setData({ ...data, num: Number(evt.target.value) })
  }, [data]);

  const changeStr = useCallback(evt => {
    // setData({ ...data, str: evt.target.value })
    // x는 setData가 관리하는 data 값. 현재 상태의 값이 주입된다.
    // 따라서 []에 주입받은 현재 data의 값을 참조할 필요가 없다.
    setData(x => setData({ ...x, str: [evt.target.value] }))
  }, []);

  // useMemo


  return (
    <div>
      <h3>A05. useState, useEffect</h3>

      <div>
        Num: {data.num}
        <input type="number" name="num" className="form-control" ref={numRef}
          value={data.num} onChange={changeNum} />
        <br />

        Str: {data.str}
        <input type="text" name="str" className="form-control" ref={strRef}
          value={data.str} onChange={changeStr} />
        <br />

        Today: {today.toLocaleString()}<br />
        <br />

        Avg:
        <div className="input-group">
          <input type="text" name="str" className="form-control" />
          <button className="btn btn-outline-primary btn-sm">ADD</button>
        </div>
      </div>
    </div>
  );
}
export default A05Hook;
