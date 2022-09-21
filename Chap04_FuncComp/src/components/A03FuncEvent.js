import React, { useState } from 'react'

function A03FuncEvent() {
  const [data, setData] = useState({
    name: 'NolBu',
    age: 30,
    date: '2022-09-21',
    sports: 'baseball',
    isChecked: true,
    language: ['React'],
    baseball: 'NC',
    four: [],
  });

  const changeString = evt => setData({ ...data, [evt.target.name]: evt.target.value });
  const changeNumber = evt => {
    let value = Number(evt.target.value);
    if (isNaN(value)) value = 0;
    setData({ ...data, [evt.target.name]: value });
  }
  const changeBoolean = evt => setData({ ...data, [evt.target.name]: !data[evt.target.name] });
  const changeCheckBox = evt => {
    const value = evt.target.value;
    if (data[evt.target.name].includes(value)) {
      const newObj = data[evt.target.name].filter(item => item !== value);
      setData({ ...data, [evt.target.name]: newObj })
    } else {
      const newObj = data.language.concat(value)
      setData({ ...data, [evt.target.name]: newObj })
    }
  }
  const changeSelect = evt => {
    const elem = Array.from(evt.target.selectedOptions);
    const values = elem.map(item => item.value);
    setData({ ...data, [evt.target.name]: values });
  }

  const sendData = evt => {
    evt.preventDefault();
    console.log(data);
  }

  return (
    <div>
      <h3>A03 Function Component Event & Form</h3>

      <form>
        Name: {data.name}
        <input type="text" name="name" className="form-control"
          value={data.name} onChange={changeString} />
        Age: {data.age}
        <input type="text" name="age" className="form-control"
          value={data.age} onChange={changeNumber} />
        Date: {data.date}
        <input type="date" name="date" className="form-control"
          value={data.date} onChange={changeString} />

        RadioButton: {data.sports}<br />
        <div className="form-check">
          <input type="radio" name="sports" value="baseball" id="baseball" className="form-check-input"
            defaultChecked={data.sports === 'baseball'} onChange={changeString} />
          <label htmlFor="baseball" className="form-check-label">야구</label>
        </div>
        <div className="form-check">
          <input type="radio" name="sports" value="soccer" id="soccer" className="form-check-input"
            defaultChecked={data.sports === 'soccer'} onChange={changeString} />
          <label htmlFor="soccer" className="form-check-label">축구</label>
        </div>
        <div className="form-check">
          <input type="radio" name="sports" value="basketball" id="basketball" className="form-check-input"
            defaultChecked={data.sports === 'basketball'} onChange={changeString} />
          <label htmlFor="basketball" className="form-check-label">농구</label>
        </div>

        CheckBox One: {data.isChecked ? '동의' : '동의 안함'}<br />
        <div className="form-check">
          <input type="checkbox" name="isChecked" className="form-check-input"
            defaultChecked={data.isChecked === true} onChange={changeBoolean} />
          <label htmlFor="check" className="form-check-label">동의</label>
        </div>

        CheckBox: {data.language.join(', ')}<br />
        <div className="form-check">
          <input type="checkbox" name="language" value="Angular" id="angular" className="form-check-input"
            defaultChecked={data.language.includes('Angular')} onChange={changeCheckBox} />
          <label htmlFor="baseball" className="form-check-label">앵귤러</label>
        </div>
        <div className="form-check">
          <input type="checkbox" name="language" value="React" id="react" className="form-check-input"
            defaultChecked={data.language.includes('React')} onChange={changeCheckBox} />
          <label htmlFor="react" className="form-check-label">리엑트</label>
        </div>
        <div className="form-check">
          <input type="checkbox" name="language" value="Vue" id="vue" className="form-check-input"
            defaultChecked={data.language.includes('vue')} onChange={changeCheckBox} />
          <label htmlFor="vue" className="form-check-label">뷰</label>
        </div>

        SelectBox: <br />
        <select name="baseball" className="form-control"
          value={data.baseball} onChange={changeString}>
          <option>NC</option>
          <option>두산</option>
          <option>엘지</option>
        </select>

        SelectBox Multi: {data.four.join(' - ')}<br />
        <select name="four" multiple size="3" className="form-control"
          value={data.four} onChange={changeSelect}>
          <option>NC</option>
          <option>두산</option>
          <option>엘지</option>
        </select>
        <br />

        <button type="submit" onClick={sendData}>SEND</button>
      </form>
    </div>
  )
}

export default A03FuncEvent
