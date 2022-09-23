import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom'

// npm i redux react-redux redux-actions redux-devtools-extension
// npm i react-router-dom axios immer
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './modules/'

const store = createStore(rootReducer);

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
