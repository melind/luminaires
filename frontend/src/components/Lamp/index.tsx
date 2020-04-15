import React from 'react';
import userAPI from '../../services/userAPI';
import './index.css';

const Lamp = () => {

userAPI.lamp();

    return (
        <div className="lamp"> 
            Lampes
        </div>
    )
}

export default Lamp;