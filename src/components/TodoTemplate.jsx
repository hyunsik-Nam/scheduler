import React from "react";
import '../TodoTemplate.scss'


const TodoTemplate = ({children}) => {

    //const navigate = useNavigate();

    return (
        <div className="TodoTemplate">
            <div className="title">일정 관리</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;