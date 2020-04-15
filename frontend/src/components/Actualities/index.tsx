import React from 'react';
import { Link } from 'react-router-dom';
import userAPI from '../../services/userAPI';
import './index.css';



const Actualities = () => {

userAPI.actualities();

    return (
        <div className="actualities"> 
            actualities
        </div>
    )
}

export default Actualities;