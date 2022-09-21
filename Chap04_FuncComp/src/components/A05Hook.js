import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";

function A05Hook() {

  // useState => 화면 갱신에 관련된 변수 정의
  const [data, setData] = useState({
    num: 10,
    str: '',
    avg: '',
    list: [],
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
    setData(x => ({ ...x, str: [evt.target.value] }))
  }, []);

  const changeAvg = useCallback(evt => {
    setData(data => ({ ...data, avg: Number([evt.target.value]) }));
  }, []);
  const addArray = useCallback(() => {
    setData(data => ({ ...data, list: data.list.concat(data.avg) }))
  }, [])

  // useMemo
  // useCallback => Event Handler
  // useMemo => 일반 함수
  const getAverage = arr => {
    console.log('계산중...');
    if (arr.length === 0) return 0;
    const total = arr.reduce((total, item) => total + item, 0);
    return total / arr.length;
  }
  // 함수지만 사용한 프로퍼티 형태. 따라서 매개변수를 전달할 수 없음.
  const getAverageMemo = useMemo(() => {
    return getAverage(data.list);
  }, [data.list]);

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

        Avg: {data.avg} / {getAverageMemo} <br />
        {data.list.map((item, index) => <span key={index}>{item}, </span>)}<br />

        <div className="input-group">
          <input type="text" name="avg" className="form-control"
            value={data.avg} onChange={changeAvg} />
          <button className="btn btn-outline-primary btn-sm"
            onClick={addArray}>ADD</button>
        </div>
      </div>
    </div>
  );
}
export default A05Hook;
