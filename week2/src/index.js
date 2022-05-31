// 총괄 우두머리처럼 관리 
//5. 임포트 프로바이더,스토어 하고, 라우터 위에 감싸주기
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
