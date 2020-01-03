import React from "react";

const OperatorButton = (props) => {
    return (
        <div className="btn operator" onClick={props.onClick} char={props.char} value={props.value}>
            <p>{props.char}</p>
            {/* Display a button element rendering the data being passed down from the parent container on props */}
        </div>
    );
};

export default OperatorButton;
