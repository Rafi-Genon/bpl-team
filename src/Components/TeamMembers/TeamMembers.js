import React from 'react';
import './TeamMembers.css'
const TeamMembers = (props) => {
    const team = props.team

    // this for loop will sum of salary
    let totalCost = 0
    for (let i = 0; i < team.length; i++) {
        const element = team[i];
        totalCost = totalCost + element.salary;
    }
    return (
        <div style={{ width: '30%', margin:'auto',}}>
            <div className="team-container">
                <h4 className="player-number-heading">Players selected: {team.length}</h4>
                {team.map(element => <p className="selected-player"> {element.name} (${element.salary})</p>)}
                <p className="total-salary">Total salary ${totalCost}</p>
            </div>
        </div>
    );
};

export default TeamMembers;