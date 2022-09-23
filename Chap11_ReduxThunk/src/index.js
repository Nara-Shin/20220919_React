import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom'

// npm i redux react-redux redux-actions redux-devtools-extension
// npm i react-router-dom axios immer
// npm i redux-thunk
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk';

import rootReducer from './modules/'

// 리턴값이 함수면 함수를 실행, 객체면 reducer 함수를 호출
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
