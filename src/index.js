import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Custom Components

import Main from './Components/Main.js'

ReactDOM.render(
  <React.StrictMode>
      <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

///
// npx create-react-app myapp
// npm i firebase
// npm i firebase-react-hooks
//1. npm uninstall firebase
//2. npm cache clear
//3. npm i firebase@^4.8.0 --save


/*
  RES : https://stackoverflow.com/questions/52659859/module-not-found-cant-resolve-firebase-index
  --- https://github.com/csfrequency/react-firebase-hooks/tree/ab6214822fdc0c280ea39e001db09bc2bbc5264d/auth
*/