import React from 'react';
import userAPI from '../../services/userAPI';
import lamp from '../../pictures/lamp.jpg';
import './index.css';

const Lamp = () => {

userAPI.lamp();

    return (
        <div className="lamp"> 
         <div className="separator"></div>
         <img src={lamp} width="1225" height="400"/>
            Lampes
        </div>
    )
}

export default Lamp;