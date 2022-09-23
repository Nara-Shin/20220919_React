import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// store(전체 state를 관리하는 객체 생성)
import { legacy_createStore as createStore } from 'redux';

// store에 있는 값 제공자
import { Provider } from 'react-redux';

// reducer function
// import counterR from './modules/counterR';

// 통합하면 값은 등록한 이름별로 참조해서 사용해야 한다.
import rootReducer from './modules/index';

// 단일 reducer만 등록 가능
const store = createStore(rootReducer);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
