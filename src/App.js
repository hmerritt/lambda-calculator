import React, { useState } from "react";
import "./App.css";

import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";


function App() {

    /*
    * 1. Calculation memory - array containing each number + operation
    * 2. Current display value
    */
    const [memory, setMemory]             = useState(["2", "*", "20"]);
    const [displayValue, setDisplayValue] = useState(memory.join(""));


    /*
    * Compute mathematical expression
    * @param {array} expression to compute
    * returns: {number} calculation result
    */
    function compute(expression)
    {
        return new Function('return ' + expression.join(""))();
    }

    /*
    * Updates UI display with current calculation
    * returns: none
    */
    function updateDisplay()
    {
        //  Connect each part of calculation into single string
        setDisplayValue(memory.join(""));
    }

    /*
    * Clears calculator memory
    * returns: none
    */
    function clearMemory()
    {
        setMemory(["0"]);
        updateDisplay();
    }

    /*
    * Handles all calculator buttons and their actions
    * returns: none
    */
    function handleBtnClick(evt)
    {
        //  Button char value
        const char = evt.currentTarget.getAttribute("value");
        console.log("[click][btn] Value: ", char);

        //  Match button char with its action
        switch(char)
        {
            case "C":
                clearMemory();

            default:
                //  Do nothing
        }
    }


    return (
        <div className="container">
            <div className="calculator">
                <Logo />
                <div className="App">
                    {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
                    <Display value={displayValue} />
                    <div className="buttons">
                        <div className="left">
                            <Specials onClick={handleBtnClick} />
                            <Numbers />
                        </div>
                        <div className="right">
                            <Operators />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
