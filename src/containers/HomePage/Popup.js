import React from 'react';
import './Popup.css';
import { GrClose } from 'react-icons/gr';

import disableScroll from 'disable-scroll';


function trigger(props){
    // console.log("trigger closed");
    disableScroll.off()
    props.setTrigger(false);
    // document.getElementById("placeOrderbtn").style.visibility="visible";
    
}

function Popup(props){
    // console.log("close ",props.trigger);
    return (props.trigger)?(
    <div className="popup">
        <div className="popup-inner">
            <button id="closeBtn" className="close-btn" onClick={trigger(props)}><GrClose /></button>
            {props.children}
        </div>

    </div>): "";
}

export default Popup;