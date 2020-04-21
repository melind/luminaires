import React from 'react';
import userAPI from '../../services/userAPI';
import wall from '../../pictures/wall.jpg';
import './index.css';

const WallLight = () => {

userAPI.wallLight();

    return (
        <div className="wallLight"> 
        <div className="separator"></div>
         <img src={wall} width="1225" height="500"/>
            Appliques
        </div>
    )
}

export default WallLight;