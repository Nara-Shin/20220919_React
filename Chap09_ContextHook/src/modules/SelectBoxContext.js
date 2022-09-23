// SelectBoxContext.js
import { createContext, useState } from 'react';

const SelectBoxContext = createContext({
  state: {
    moduleName: '',
    color: 'green'
  },
  action: {
    setModuleName: () => { },
    setColor: () => { }
  }
});

function SelectBoxContextProvider(props) {
  const [moduleName, setModuleName] = useState('SelectBox Context');
  const [color, setColor] = useState('green');

  const data = {
    state: { moduleName, color },
    action: { setModuleName, setColor }
  }

  return (
    <SelectBoxContext.Provider value={data}>
      {props.children}
    </SelectBoxContext.Provider>
  )
}
const SelectBoxContextConsumer = SelectBoxContext.Consumer;

export { SelectBoxContextProvider, SelectBoxContextConsumer }
