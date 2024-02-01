import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import App from './App';
//import App from './count-app/App';
//import App from './calculator-app/App'
//import App from './quote-gen-app/App'
//import App from './weather-app/App'
//import App from './image-gallery-app/App'
//import App from './bmi-calculator-app/App'
import App from './stopwatch-app/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
