import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/*
  <App /> Component 컴포넌트는 HTML 을 반환하는 함수 ... 
  javascript 와 html 을 연결해주는 jsx 
  */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('potato')
);

