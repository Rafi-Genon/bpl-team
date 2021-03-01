import React from 'react';
import './summry.css'
const Summry = (props) => {
    let totalCost = 0
    for (let i = 0; i < props.team.length; i++) {
        const element = props.team[i];
        totalCost = totalCost + element.salary;
    }
    return (
        <div style={{ width: '30%', margin:'auto',}}>
            <div className="team-container">
                <h4 className="player-number-heading">Players selected {props.team.length}</h4>
                {props.team.map(element => <p className="selected-player"> {element.name} (${element.salary})</p>)}
                <p className="total-salary">Total salary ${totalCost}</p>
            </div>
        </div>
    );
};

export default Summry;