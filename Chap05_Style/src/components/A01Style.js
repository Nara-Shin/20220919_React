import React from "react";
import './css/A01Style.css'

// npm i node-sass (서버 재시작 필요)
import './css/A01Style.scss'

function A01Style() {
  const title = 'title color';
  const style = {
    background: 'lightgray',
    color: 'orange',
    fontSize: '24pt',
    fontWeight: 'bold',
    padding: '10px'
  }
  return (
    <div>
      <h3 className="title color">A01 Style</h3>
      <h3 className={title}>A01 Style</h3>
      <h3 className="scssTitle">A01 Style</h3>

      <h3 style={style}>A01 Style</h3>
      <h3 style={{
        background: 'lightgray',
        color: 'orange',
        fontSize: '24pt',
        fontWeight: 'bold',
        padding: '10px'
      }}>A01 Style</h3>
    </div>
  );
}

export default A01Style;
