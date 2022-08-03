import React from 'react'

const Popup = ({children}) => {
 const el = document.getElementById('popupDom');
 return ReactDOM.createPortal(children, el);
}

export default Popup
