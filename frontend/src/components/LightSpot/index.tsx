import React from 'react';
import userAPI from '../../services/userAPI';
import spotlight from '../../pictures/spotlight.jpg';
import './index.css';

const LightSpot = () => {

userAPI.lightSpot();

    return (
        <div className="lightSpot"> 
        <div className="separator"></div>
         <img src={spotlight} width="1225" height="400"/>
            Spots
        </div>
    )
}

export default LightSpot;