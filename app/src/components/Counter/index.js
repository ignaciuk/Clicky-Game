import React from "react";

const Counter = (props) => {
    return( 
        <div>
            <h4>Current Streak: {props.score}</h4>
            <h4>Record: {props.record}</h4>
        </div>
    );
};

export default Counter