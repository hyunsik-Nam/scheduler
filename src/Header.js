import React from 'react';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div>
            스케줄러 입니다.
            <Link to={'/calender'}>달력페이지 이동</Link>
        </div>
    );
}

export default Header;