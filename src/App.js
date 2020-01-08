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
    const [memory, setMemory]             = useState("0");
    const [displayValue, setDisplayValue] = useState(memory);


    /*
    * Compute mathematical expression
    * @param {string} expression to compute
    * returns: {number} calculation result
    */
    function compute(expression)
    {
        return new Function('return ' + expression)();
    }

    /*
    * Updates UI display with current calculation
    * returns: none
    */
    function updateDisplay()
    {
        setDisplayValue(memory);
    }

    /*
    * Manipulates the memory state (add, change or reset values)
    * returns: none
    */
    function manipulateMemory(task, char="0")
    {
        //  Duplicate memory array
        let newMemory = memory;

        //  Last char in memory
        const lastChar = newMemory[newMemory.length-1];

        //  Find task
        switch(task)
        {
            //  Add new char
            case "add":
                //  Last char is a symbol AND new char is a symbol
                //  Fist char is 0 AND new char is a number
                if (
                    (isNaN(lastChar) && isNaN(char)) ||
                    (newMemory[0] === "0" && !isNaN(char))
                   )
                {
                    //  Replace last char with new one
                    newMemory = newMemory.slice(0, -1) + char;
                }
                else
                {
                    //  Append char to memory
                    newMemory += char;
                }
                break;

            //  Clear memory
            case "clear":
                newMemory = "0";
                break;
        }

        console.log(char);
        console.log(newMemory);

        //  Update memory
        setMemory(newMemory);
        setDisplayValue(newMemory);
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
            /*
            * Specials
            */
            case "C":
                manipulateMemory("clear");
                break;

            case "+/-":
                break;

            case "%":
                break;

            /*
            * Operators
            */
            case "/":
            case "*":
            case "-":
            case "+":
                manipulateMemory("add", char);
                break;

            case "=":
                //  Only compute if calculation is complete
                //  - no trailing symbols
                if (!isNaN(memory[memory.length-1]))
                {
                    //  Compute calculation and display it
                    //  - does not clear memory
                    setDisplayValue(compute(memory));
                }
                break;

            /*
            * Numbers
            */
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
                manipulateMemory("add", char);
                break;

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
                            <Specials  onClick={handleBtnClick} />
                            <Numbers   onClick={handleBtnClick} />
                        </div>
                        <div className="right">
                            <Operators onClick={handleBtnClick} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
