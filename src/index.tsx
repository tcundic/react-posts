import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css/normalize.css';
import reportWebVitals from './reportWebVitals';

import './styles/styles.css';
import App from './app/App';

ReactDOM.render(
  <React.StrictMode>
    <App greeting={process.env.REACT_APP_GREETING || ""} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
