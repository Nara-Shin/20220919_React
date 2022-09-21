import React from "react";
// npm i classnames
import cns from 'classnames';

import './css/A03Style.css';
import two from './css/A02Style2.module.css';

function A03Classnames() {
  const textVar = "text";
  const isChecked = true;

  return (
    <div>
      <h3 className={cns('bg', 'text', 'space')}>A03 ClassNames Module</h3>
      <h3 className={cns('bg', textVar, 'space')}>A03 ClassNames Module</h3>
      <h3 className={cns('bg', { 'text': true, 'space': false })}>A03 ClassNames Module</h3>
      <h3 className={cns('bg', { [textVar]: isChecked, 'space': isChecked })}>A03 ClassNames Module</h3>

      <h3 className={cns({ [two.title]: isChecked, [two.reverse]: isChecked })}>A03 ClassNames Module</h3>
    </div>
  );
}

export default A03Classnames;
