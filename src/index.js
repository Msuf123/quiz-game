import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import question from './Routes/Mcq/Reducer/reducer'
import { configureStore } from '@reduxjs/toolkit';
import selected from './Routes/Mcq/Options/selected';
import arrayOfFinalSelectedOptions from './Routes/Mcq/Options/final';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store=configureStore({reducer:{questions:question,selected:selected,userChoice:arrayOfFinalSelectedOptions}})
root.render(
  <Provider store={store}>
    <App />
    </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
