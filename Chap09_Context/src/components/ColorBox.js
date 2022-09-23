import React from "react";

import ColorBoxContext from './../modules/ColorBoxContext';

function ColorBox() {
  return (
    <ColorBoxContext.Consumer>
      {data => (
        <div>
          <h5>{data.moduleName}</h5>
          <div style={{ background: data.color, display: 'block', width: '50px', height: '50px' }}>{data.color}</div>
        </div>
      )}
    </ColorBoxContext.Consumer>
  );
}
export default ColorBox;
