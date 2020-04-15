import React from 'react';
import userAPI from '../../services/userAPI';
import './index.css';

const LightSpot = () => {

userAPI.lightSpot();

    return (
        <div className="lightSpot"> 
            Spots
        </div>
    )
}

export default LightSpot;