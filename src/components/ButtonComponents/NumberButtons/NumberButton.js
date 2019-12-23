import React from "react";

const NumberButton = (props) => {
    return (
        <div className="btn number" char={props.char}>
            <p>{props.char}</p>
            {/* Display a button element rendering the data being passed down from the parent container on props */}
        </div>
    );
};

export default NumberButton;
