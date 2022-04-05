import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client'
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import './styles/global.scss';

// bọc ngoài 'App' tức là bọc ngoài thằng React, tức 
// là ép thằng React khởi động cùng thằng Redux <=> Khởi động song song

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer'

// sau khi khởi động xong thì phải nạp dữ liệu 'store={reduxStore}', nơi lưu trữ dữ liệu
// createStore(rootReducer) nạp dữ liệu vào, và nạp vào thằng công nhân đã tạo kia
const reduxStore = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// );
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
