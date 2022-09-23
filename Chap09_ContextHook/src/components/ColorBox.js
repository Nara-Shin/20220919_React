import React, { useContext } from "react";

import ColorBoxContext from './../modules/ColorBoxContext';
// import { SelectBoxContextConsumer } from './../modules/SelectBoxContext';
import SelectBoxContext from './../modules/SelectBoxContext';

function ColorBox() {

  const { moduleName, color } = useContext(ColorBoxContext);
  const { state } = useContext(SelectBoxContext);

  return (
    <div>
      <h5>{moduleName} / {color} / {state.moduleName} / {state.color}</h5>
      <div style={{ background: color, display: 'block', width: '50px', height: '50px' }}>{color}</div>

      <div style={{ background: state.color, display: 'block', width: '50px', height: '50px' }}>{color}</div>
    </div>
  );
}
export default ColorBox;
