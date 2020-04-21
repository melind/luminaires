import React from 'react';
import userAPI from '../../services/userAPI';
import ceiling from '../../pictures/ceiling.jpg';
import './index.css';

const Chandelier = () => {

userAPI.chandelier();

    return (
        <div className="chandelier"> 
         <div className="separator"></div>
         <img src={ceiling} width="1225" height="600"/>
            Lustres
        </div>
    )
}

export default Chandelier;