import React from 'react';

const Goals = props => {
    return(
        <div className="goals">
            <h2>{props.item.name}</h2>
        </div>
    );
}

export default Goals;