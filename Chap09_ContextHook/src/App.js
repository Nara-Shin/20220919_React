import ColorBox from './components/ColorBox'
import SelectColor from './components/SelectColor';
import TodoTemplate from './components/TodoTemplate'

import ColorBoxContext from './modules/ColorBoxContext';
import { SelectBoxContextProvider } from './modules/SelectBoxContext';
import { TodoListContextProvider } from './modules/TodoListContext';

function App() {
  // ColorBoxContext에서 정의한 속성 및 메서드를 초기화 한다
  const colorData = {
    moduleName: 'ColorBox Context',
    color: 'orange',
  }

  return (
    <div className="m-3">
      <h1>Chap10 Context</h1>

      <ColorBoxContext.Provider value={colorData}>
        <SelectBoxContextProvider>
          <ColorBox />
          <SelectColor></SelectColor>
        </SelectBoxContextProvider>
      </ColorBoxContext.Provider>

      <hr />
      <TodoListContextProvider>
        <TodoTemplate />
      </TodoListContextProvider>
    </div>
  );
}

export default App;
