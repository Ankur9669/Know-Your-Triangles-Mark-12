import React from 'react'
import "../css/back-button.css";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useState } from "react";
import "../css/calculate-area.css";
import "../css/back-button.css";
function CalculateArea() 
{
    const [isFirstOptionSelected, setFirstOptionSelected] = useState(false);
    const [isSecondOptionSelected, setSecondOptionSelected] = useState(false);
    const [outputMessage, setOutputMessage] = useState("Output is here");
    const [base, setBase] = useState(0);
    const [height, setHeight] = useState(0);
    const [side1, setSide1] = useState(0);
    const [side2, setSide2] = useState(0);
    const [side3, setSide3] = useState(0);
    const history = useHistory();
    

    //When user clicks back button we route back to home page
    function handleClick()
    {
        history.replace("/");
    }

    function calculateArea()
    {
        if(isFirstOptionSelected === true)
        {
            let ans = (base * height) / 2;
            setOutputMessage("Area = " + ans);
        }
        else{
            let a = side1;
            let b = side2;
            let c = side3;
            let check1 = false;
            let check2 = false;
            let check3 = false;
            if(parseInt(a) < (parseInt(b) + parseInt(c)))
            {
                check1 = true;
            }
            if(parseInt(b) < (parseInt(a) + parseInt(c)))
            {
                check2 = true;
            }
            if(parseInt(c) < (parseInt(a) + parseInt(b)))
            {
                check3 = true;
            }
            if(check1 && check2 && check3)
            {
                let s = (parseInt(a) + parseInt(b) + parseInt(c)) / 2;
                let temp1 = (s - a) * (s - b);
                let temp2 = temp1 * (s - c);
                let temp3 = s * temp2;
                setOutputMessage("Area = " + Math.sqrt(temp3));
            }
            else{
                setOutputMessage("Enter valid side lengths such " +  
                "that each side length should be less than sum of other two sides");
            }
        }
    }
    return (
        <div className = "calculate-area">
            <div className = "back-button" onClick = {() => handleClick()}>
                <ArrowBackIosIcon style = {{fontSize: 18}}/>
                Go Back
            </div>
            <header className = "heading">Calculate Area</header>
            <label className = "heading2">Select an option below as per the data you have for a triangle</label>
            <form>
                <label for = "calarea1" className = "input-value">
                    <input type = "radio" name = "options" value = "calArea1" id = "calarea1" 
                    onChange = {() => {setFirstOptionSelected(true);
                                setSecondOptionSelected(false);
                                setOutputMessage("Area= 1/2*base*height")}}>
                    </input>
                    If you have base and height length
                </label>
                
                <label for = "calarea2" className = "input-value">
                    <input type = "radio" name = "options" value = "calArea2" id = "calarea2" 
                    onChange = {() => {setFirstOptionSelected(false);
                                setSecondOptionSelected(true);
                                setOutputMessage("Area= √s(s-a)(s-b)(s-c)")}}>
                    </input>
                    If you have length of 3 sides
                </label>
            </form>
        
            {isFirstOptionSelected && 
            <div>
                <form>
                    <label for = "base"> Base = </label>
                    <input type = "number" className = "input" id = "base" onChange = {(e) => setBase(e.target.value)} required></input>
                    <label for = "height"> Height = </label>
                    <input type = "number"  className = "input" id = "height" onChange = {(e) => setHeight(e.target.value)} required></input>
                </form>
            </div>
            }

            {isSecondOptionSelected && 
            <div>
                <form>
                    <label for = "a"> A = </label>
                    <input type = "number" className = "input" id = "a" onChange = {(e) => setSide1(e.target.value)} required></input>
                    <label for = "b"> B = </label>
                    <input type = "number"  className = "input" id = "b" onChange = {(e) => setSide2(e.target.value)} required></input>
                    <label for = "c"> C = </label>
                    <input type = "number"  className = "input" id = "c" onChange = {(e) => setSide3(e.target.value)} required></input>
                </form>
            </div>
            }
            <button className = "button" onClick = {() => calculateArea()}>Calculate</button>

            <label for = "output" className = "heading">Output would be shown here</label>
            <div className = "output" id = "output">
                {outputMessage}
            </div>
        </div>
    )
}

export default CalculateArea
