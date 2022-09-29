import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navigasi from './components/partials/nav';
import Comment  from './pages/H12 - Comment/index'
import DataComment from './data/comment';
import Form from './components/H16/form';
import OutputImage from './components/H18/index';


const root = ReactDOM.createRoot(document.getElementById('root'));  
root.render(
  <React.StrictMode>
    <Navigasi />
    <App />
    <Comment DataComment={DataComment}/>
    <Form />
    <OutputImage />
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