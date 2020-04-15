import React from 'react';
import userAPI from '../../services/userAPI';
import './index.css';

const WallLight = () => {

userAPI.wallLight();

    return (
        <div className="wallLight"> 
            Appliques
        </div>
    )
}

export default WallLight;