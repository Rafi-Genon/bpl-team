import React from 'react';
import './profile.css'
const Profile = (props) => {
    const { name, price, picture } = props.playersDetails;
    const playerSelected = props.playerSelected
    return (
        <div className='profile'>
            <div>
                <img src={picture} alt="" />
            </div>
            <div>
                <h3>i go to school {name}</h3>
                <p>i earn {price}</p>
                <button onClick={() => playerSelected(props.playersDetails)}>add me</button>
            </div>
        </div>
    );
};

export default Profile;