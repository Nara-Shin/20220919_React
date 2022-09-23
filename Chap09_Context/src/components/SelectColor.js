import React from 'react'
import { SelectBoxContextConsumer } from './../modules/SelectBoxContext';

function SelectColor() {
  const colors = ['red', 'orange', 'green', 'blue', 'yellow'];
  const style = { width: '50px', height: '50px', background: 'gray', cursor: 'pointer' };

  return (
    <SelectBoxContextConsumer>
      {value => (
        <div>
          <h5>{value.state.moduleName} / {value.state.color}</h5>
          <div style={{ display: 'flex' }}>
            {colors.map(color => <div key={color} style={{ ...style, background: color }}>{color}</div>)}
          </div>
        </div>
      )}
    </SelectBoxContextConsumer>
  )
}
export default SelectColor
