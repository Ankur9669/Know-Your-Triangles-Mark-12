import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "../css/back-button.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "../css/check-hypotenuse.css";
function CheckHypotenuse() 
{
    const history = useHistory();
    const [angle1, setAngle1] = useState(0);
    const [angle2, setAngle2] = useState(0);
    const [outputMessage, setOutputMessage] = useState("C = √(a^2 + b^2)")

    //When user clicks back button we route back to home page
    function handleClick()
    {
        history.replace("/");
    }
    
    function handleSubmit(e)
    {
        e.preventDefault();
        let sum = (parseInt(angle1 * angle1) + parseInt(angle2 * angle2));
        let sqrt = Math.sqrt(sum);
        setOutputMessage(sqrt);
    }

    return (
        <div className = "check-hypotenuse">
            <div className = "back-button" onClick = {() => handleClick()}>
                <ArrowBackIosIcon style = {{fontSize: 18}}/>
                Go Back
            </div>

            <form onSubmit = {(e) => handleSubmit(e)}className = "angles-form">
                <label className = "heading">Enter the angles in below input boxes and 
                    we will check hypotenuse
                </label>
                <div className = "inputs">
                    <label> A = </label>
                    <input type = "number" className = "input" onChange = {(e) => setAngle1(e.target.value)} required></input>
                    <label> B = </label>
                    <input type = "number" className = "input" onChange = {(e) => setAngle2(e.target.value)} required></input>
                </div>
                <button type = "submit" className = "button">Submit</button>
            </form>

            <label className = "heading">
                Hypotenuse Would be Shown Here
            </label>
            <div className = "output">
                
                {outputMessage}
            </div>
        </div>
    )
}

export default CheckHypotenuse
