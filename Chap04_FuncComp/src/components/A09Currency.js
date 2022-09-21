import React, { useState, useCallback } from "react";

const currencies = ['USD', 'EUR', 'KRW'];
const rate = { 'USD': 1, 'EUR': 1.15, 'KRW': 0.00062 };

function A09Currency() {
  const [data, setData] = useState({
    qty: 3,
    cost: 5,
    inCurr: 'USD'
  });

  const changeNumber = useCallback(evt => {
    setData(data => ({ ...data, [evt.target.name]: Number(evt.target.value) }))
  }, []);
  const changeString = useCallback(evt => {
    setData(data => ({ ...data, [evt.target.name]: evt.target.value }))
  }, []);

  const total = () => {
    return currencies.map(item => {
      const value = data.cost * data.qty * rate[data.inCurr] / rate[item];
      return <span key={item}>{item}: {value.toFixed(2)} {' '}</span>
    })
  };

  return (
    <div>
      <h3>A09 Currency</h3>

      Qty: <input type="text" name="qty" className="form-control"
        value={data.qty} onChange={changeNumber} />
      Cost: <input type="text" name="cost" className="form-control"
        value={data.cost} onChange={changeNumber} />
      Country:
      <select className="form-control" name="inCurr" value={data.inCurr} onChange={changeString}>
        {currencies.map(item => <option key={item}>{item}</option>)}
      </select>
      <br />

      <div>Total: {data.qty * data.cost}</div>
      <div>Total: {total()}</div>
    </div>
  );
}
export default A09Currency;
