import React, { useState } from 'react';
import { Calender } from '../calender'
import Getlist from './Getlist'
//import Fotter from './Fotter'
//import List from './List'
import { useNavigate } from 'react-router-dom';


const ControlList = () => {

    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [todo, setTodo] = useState('');

    return (
            <div style={{marginleft : 30}} >
                <Calender></Calender>
                <Getlist></Getlist>
                <div>
                    {/* list */}
                </div>
                {/* <Fotter></Fotter> */}
            </div>
    )
    }

export default ControlList

