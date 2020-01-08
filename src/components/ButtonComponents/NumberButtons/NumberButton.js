import React from "react";

const NumberButton = (props) => {
    return (
        <div className="btn number" onClick={props.onClick} char={props.char} value={props.char}>
            <p>{props.char}</p>
            {/* Display a button element rendering the data being passed down from the parent container on props */}
        </div>
    );
};

export default NumberButton;
