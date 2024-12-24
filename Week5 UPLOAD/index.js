import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GreetingElement from './mygreetingapp'
import AppColor from './appbackgroundcolor'
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
 <React.StrictMode>
 <AppColor heading="This is first element" lbl="Name :" color="green"/>
 <AppColor heading="This is second element" lbl="Name :" color="blue"/>
 <AppColor heading="This is third third element" lbl="Name :" color="Yellow"/>
 </React.StrictMode>,
 document.getElementById('root')
);
reportWebVitals();