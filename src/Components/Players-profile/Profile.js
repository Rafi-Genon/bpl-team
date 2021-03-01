import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './profile.css'
// import { Button } from 'bootstrap';
const Profile = (props) => {
    const { name, price, picture } = props.playersDetails;
    const playerSelected = props.playerSelected
    return (
        // <div className='profile'>
        //     <div>
        //         <img src={picture} alt="" />
        //     </div>
        //     <div>
        //         <h3>i go to school {name}</h3>
        //         <p>i earn {price}</p>
        //         <button onClick={() => playerSelected(props.playersDetails)}>add me</button>
        //         <Button variant="warning" onClick={() => playerSelected(props.playersDetails)}>add me</Button>
        //     </div>
        // </div>

        <div style={{ float: 'left', padding:'20px 30px' }}>
            {/* <div style={{ margin:'5px' }}> */}
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <p>my cost ${price}</p>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                    </Card.Text>
                        <Button variant="primary" onClick={() => playerSelected(props.playersDetails)}>Add me</Button>
                    </Card.Body>
                </Card>
            {/* </div> */}
        </div>

    );
};

export default Profile;