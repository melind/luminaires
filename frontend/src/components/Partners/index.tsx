import React from 'react';
import userAPI from '../../services/userAPI';
import './index.css';

const Partners = () => {

userAPI.partners();

    return (
        <div className="partners"> 
            Partners
        </div>
    )
}

export default Partners;