import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.scss';
import './common.scss';
import './theme.scss';
import App from './App';
//import Login from './Login';
import { Calender } from './calender';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router , Routes, Route, BrowserRouter} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<App/>

</BrowserRouter>
);

{/*
  <Router>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path='/calender' element={<Calender/>} />
  </Routes>
</Router>
);

//reportWebVitals();

*/}

