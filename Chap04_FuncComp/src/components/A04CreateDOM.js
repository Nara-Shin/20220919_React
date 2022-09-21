import React, { useState, useRef } from "react";

const baseArray = ["NC", "두산", "엘지", "KT", "키움"];

function A04CreateDOM() {
  const [baseObject, setBaseObject] = useState([
    { id: 1, team: "NC", value: "NC" },
    { id: 2, team: "두산", value: "Doosan" },
    { id: 3, team: "엘지", value: "LG" },
  ]);

  const [data, setData] = useState({
    teamOne: "",
    teamTwo: "",
    team: "",
    isChecked: false,
    // cnt: 4             // OK
  });

  // useState와 동일하게 값을 유지하지만, 화면 갱신 작업에 관련된 기능은 제외되어 있는 Hook
  // 1. DOM의 참조
  // 2. Value 값 유지
  const cnt = useRef(4)

  // let cnt = 4;         // Error

  const changeValue = (evt) => setData({ ...data, [evt.target.name]: evt.target.value });
  const addTeam = () => setBaseObject(baseObject.concat({ id: cnt.current++, team: "삼성", value: "Samsung" }));
  const showHide = () => setData({ ...data, isChecked: !data.isChecked });

  const changeTeam = (evt) => setData({ ...data, team: evt.target.value });
  const addBaseArray = () => {
    baseArray.push(data.team);
    // forceUpdate();               // 지원하지 않음. useState 사용
  }

  const tableDOM = () => baseObject.map(item => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.team}</td>
      <td>{item.value}</td>
    </tr>
  ))

  return (
    <div>
      <h3>A04 Make DOM</h3>
      SelectBox: {data.teamOne}
      <br />
      <select name="teamOne" className="form-control" onChange={changeValue}>
        <option>선택해주세요</option>
        {baseArray.map((item, i) => <option key={i}>{item}</option>)}
      </select>

      SelectBox: {data.teamTwo}
      <br />
      <select name="teamTwo" className="form-control" onChange={changeValue}>
        <option value="">선택해주세요</option>
        {baseObject.map((item) => <option key={item.id} value={item.value}>{item.team}</option>)}
      </select>

      <table className="table">
        <thead>
          <tr>
            <th>NO</th>
            <th>Team</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {tableDOM()}
        </tbody>
      </table>
      <button className="btn btn-outline-primary btn-sm" onClick={addTeam}>ADD TEAM</button>
      <br />
      <br />

      {data.isChecked &&
        <div className="input-group">
          <input type="text" className="form-control" value={data.team} onChange={changeTeam} />
          <button className="btn btn-outline-primary btn-sm" onClick={addBaseArray}>ADD</button>
        </div>
      }
      <br />

      <button className="btn btn-outline-primary btn-sm" onClick={showHide}>
        {data.isChecked ? "HIDE" : "SHOW"}
      </button>
    </div>
  );
}
export default A04CreateDOM;
