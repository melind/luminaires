import React from 'react';
import userAPI from '../../services/userAPI';
import bulb from '../../pictures/bulb.png';
import './index.css';

const References = () => {

userAPI.references();    

    return (
        <div className="references"> 
        
        <div className="separator"></div>
         <img src={bulb} width="1225" height="400"/>
        < h1>    References </h1>
        </div>
    )
}

export default References;