import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Profile = (props) => {
    const { name, salary, picture, run, wicket } = props.playersDetails;
    const playerSelected = props.playerSelected
    return (
        <div style={{marginTop: "40px", marginBottom:'40px'}}>
            <Card style={{ width: '18rem', boxShadow: '5px 2px 20px grey' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p style={{ fontWeight: '500' }}>My salary is ${salary}</p>
                    <Card.Text>
                        I am very good plaayer. i played in so many country. I love to play cricket. I will do well in your team
                    </Card.Text>
                    <p>My make {run} run & {wicket} wicket</p>
                    <Button variant="primary" onClick={() => playerSelected(props.playersDetails)}><FontAwesomeIcon icon={faPlus} /> Add me</Button>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Profile;