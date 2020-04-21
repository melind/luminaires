import React from 'react';
import userAPI from '../../services/userAPI';
import plant from '../../pictures/plant.jpg';
import './index.css';

const Lamppost = () => {

userAPI.lamppost();

    return (
        <div className="lamppost"> 
        <div className="separator"></div>
         <img src={plant} width="255" height="400"/>
            Lampadaires
        </div>
    )
}
 
export default Lamppost;