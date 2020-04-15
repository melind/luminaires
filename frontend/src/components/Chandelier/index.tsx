import React from 'react';
import userAPI from '../../services/userAPI';
import './index.css';

const Chandelier = () => {

userAPI.chandelier();

    return (
        <div className="chandelier"> 
            Lustres
        </div>
    )
}

export default Chandelier;