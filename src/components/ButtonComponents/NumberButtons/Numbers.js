import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

const Numbers = () => {

    // STEP 2 - add the imported data to state
    const [numberState, setNumberState] = useState(numbers);

    return (
        <div className="numbers">
            {/* STEP 3 - Use .map() to iterate over your array data and return a button
             component matching the name on the provided file. Pass
             it any props needed by the child component*/}
            {numberState.map((item, key) => <NumberButton key={key} onClick={(e) => this.setDisplayValue(item)} char={item} /> )}
        </div>
    );
};

export default Numbers;
