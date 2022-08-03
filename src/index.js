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
//import {BrowserRouter as Router , Routes, Route, BrowserRouter} from "react-router-dom";

//import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
//import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import ControlList from './components/ControlList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
{/* <App/> */}
<AuthContextProvider>
         <Routes>
           <Route path='/' element = {<Signin/> } />
           {/* <Route path='/a/*' element = {<Home/> } /> */}
           <Route path='/signup' element = {<Signup/> } />
           {/* <Route path='/a/*' element = {<Home/> } />
           <Route path='/account' element = {<Account/> } /> */}
           <Route path='/account' element = {<ProtectedRoute><Account/></ProtectedRoute>} />
           <Route path='/calender' element = {<ControlList/> } />
           {/* <Route path='/todotemplate' element = {<TodoTemplate/> } /> */}
       </Routes>
      </AuthContextProvider>
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

