import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Foo from './Foo';
import reportWebVitals from './reportWebVitals';

const name='Dmitry'

ReactDOM.render(
  <React.StrictMode>
    <Foo name={name} />
    <App name={name} />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
