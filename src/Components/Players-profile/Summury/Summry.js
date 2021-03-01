import React from 'react';
import './summry.css'
const Summry = (props) => {
    let totalCost = 0
    for (let i = 0; i < props.team.length; i++) {
        const element = props.team[i];
        totalCost = totalCost + element.price;
    }
    return (
        <div>
            <h4>players selected {props.team.length}</h4>
            <p>totla salary {totalCost}</p>
            <ol>
                {props.team.map(element => <li> {element.name}</li>)}
            </ol>
        </div>
    );
};

export default Summry;