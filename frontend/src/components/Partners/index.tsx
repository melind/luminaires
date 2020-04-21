import React from 'react';
import userAPI from '../../services/userAPI';
import part from '../../pictures/part.jpg';
import './index.css';

const Partners = () => {

userAPI.partners();

    return (
        <div className="partners"> 
            
            <div className="separator"></div>
            
         <img src={part} width="1225" height="800"/>
         <h1> Partners </h1>
        </div>
    )
}

export default Partners;