//import { add } from 'date-fns';
import React, { useState } from "react";
// import { UserAuth } from './context/AuthContext';
// import { db } from './Firebase';
import Popup from "reactjs-popup";
import App from "../App";
import { Calender } from "../calender";
import ControlList from "./ControlList";
import TodoTemplate from "./TodoTemplate";

const Getlist = () => {

    const [showPopup, setShowPopup] = useState(false); 

    const togglePopup = () => {
        if(showPopup===false){
        setShowPopup(true)
        }else{
        setShowPopup(false)
        }
      };


    return (
        <div className="getlist" >
            {/* <input type="text" placeholder="일정을 추가하세요" />&nbsp;&nbsp; */}
            {/* <button onClick={togglePopup} className='border px-2 py-1 my-2 mx-700 bg-[#e5e7eb] '>일정추가</button> */}
            <Popup modal trigger={<button style={{backgroundColor : '#c4c4c4'}}>일정추가</button>}>
            {close => <App close={close} />}
            </Popup>
        </div>
    );
}

export default Getlist
