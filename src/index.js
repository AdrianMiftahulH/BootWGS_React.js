import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navigasi from './routes/partials/nav';
import Comment from './routes/comment'

const root = ReactDOM.createRoot(document.getElementById('root'));  
root.render(
  <React.StrictMode>
    <Navigasi />
    <App />
    <Comment />
  </React.StrictMode>
);

// === cara 2 ===
// function renderDOM(content, id){
//   ReactDOM.createRoot(content, document.getElementById('id'));
// }

// const element = <h1>Adrian Miftahul Haq</h1>

// renderDOM(<app />, "root");
// renderDOM(<nav />, "nav");
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();