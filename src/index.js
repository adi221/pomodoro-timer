import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TimerContextProvider from './context/context';

ReactDOM.render(
  <TimerContextProvider>
    <App />
  </TimerContextProvider>,
  document.getElementById('root')
);
