import React from "react";

import ColorBoxContext from './../modules/ColorBoxContext';
import { SelectBoxContextConsumer } from './../modules/SelectBoxContext';

function ColorBox() {
  return (
    <ColorBoxContext.Consumer>
      {data => (
        <SelectBoxContextConsumer>
          {value => (
            <div>
              <h5>{data.moduleName} / {data.color} / {value.state.moduleName} / {value.state.color}</h5>
              <div style={{ background: data.color, display: 'block', width: '50px', height: '50px' }}>{data.color}</div>
              <div style={{ background: value.state.color, display: 'block', width: '50px', height: '50px' }}>{data.color}</div>
            </div>
          )}
        </SelectBoxContextConsumer>
      )}
    </ColorBoxContext.Consumer>
  );
}
export default ColorBox;
