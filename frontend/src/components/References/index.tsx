import React from 'react';
import userAPI from '../../services/userAPI';
import './index.css';

const References = () => {

userAPI.references();    

    return (
        <div className="references"> 
            References
        </div>
    )
}

export default References;