import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Account = () => {
  const { user, logout} = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('로그아웃 하였습니다')
    }catch (e){
      console.log(e.message)
    }
  };
  console.log('account');

  return (
    // <div style={{backgroundColor : 'red' , width : 400 , height : 400}}className='max-w-[600px] mx-auto my-16 p-4'>
    <div className='max-2-[600px] mx-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-4' >Account</h1>
      <p>User Email : {user && user.email} </p>

      <button onClick={handleLogout} className='border px-6 py-2 my-4'>로그아웃</button>
    </div>
  );
};

export default Account;
