import React, { useContext } from 'react'
import SelectBoxContext from './../modules/SelectBoxContext';

function SelectColor() {
  const colors = ['red', 'orange', 'green', 'blue', 'yellow'];
  const style = { width: '50px', height: '50px', background: 'gray', cursor: 'pointer' };

  const { state, action } = useContext(SelectBoxContext);

  return (

    <div>
      <h5>{state.moduleName} / {state.color}</h5>
      <div style={{ display: 'flex' }}>
        {colors.map(color => <div key={color} style={{ ...style, background: color }}
          onClick={() => action.setColor(color)}>{color}</div>)}
      </div>
    </div>

  )
}
export default SelectColor
