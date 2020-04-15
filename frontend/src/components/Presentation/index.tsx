import React from 'react';
import userAPI from '../../services/userAPI';
import './index.css';



const Presentation = () => {

userAPI.presentation();

    return (
        <div className="presentation"> 
         
            Presentation
        </div>
    )
}

export default Presentation;