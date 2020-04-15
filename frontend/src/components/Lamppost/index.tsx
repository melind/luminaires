import React from 'react';
import userAPI from '../../services/userAPI';
import './index.css';

const Lamppost = () => {

userAPI.lamppost();

    return (
        <div className="lamppost"> 
            Lampadaires
        </div>
    )
}

export default Lamppost;