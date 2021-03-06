import React from "react";

const SpecialButton = (props) => {
    return (
        <div className="btn special" onClick={props.onClick} char={props.char} value={props.char}>
            <p>{props.char}</p>
            {/* Display a button element rendering the data being passed down from the parent container on props */}
        </div>
    );
};

export default SpecialButton;
