//import './App.css';
import React from 'react';
import { db } from './Firebase';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account';
import { Calender } from './calender';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
//import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import ControlList from './components/ControlList';


function App() {
  // return (
  //   <div>
  //     <AuthContextProvider>
  //       <Routes>
  //         <Route path='/' element = {<Signin/> } />
  //         <Route path='/a/*' element = {<Home/> } />
  //         {/* <Route path='/signup' element = {<Signup/> } />
  //         <Route Path='/account' element = {<Account/>} /> */}
  //       </Routes>
  //     </AuthContextProvider>
  //   </div>
  // );

  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element = {<Signin/> } />
          {/* <Route path='/a/*' element = {<Home/> } /> */}
          <Route path='/signup' element = {<Signup/> } />
          {/* <Route path='/a/*' element = {<Home/> } />
          <Route path='/account' element = {<Account/> } /> */}
          <Route path='/account' element = {<ProtectedRoute><Account/></ProtectedRoute>} />
          <Route path='/calender' element = {<ControlList/> } />
        </Routes>
      </AuthContextProvider>
      {/* <ControlList></ControlList> */}
    </div>
  );
}
export default App;
