import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "../css/back-button.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "../css/angles-of-triangles.css";
function AnglesOfTriangles() 
{
    const history = useHistory();
    const [angle1, setAngle1] = useState(0);
    const [angle2, setAngle2] = useState(0);
    const [angle3, setAngle3] = useState(0);
    const [outputMessage, setOutputMessage] = useState("Output Would be Shown Here");
    // console.log(angle1);
    // console.log(angle2);
    // console.log(angle3);

    //When user clicks back button we route back to home page
    function handleClick()
    {
        history.replace("/");
    }

    function handleSubmit(e)
    {
        e.preventDefault();
        let sum = 0;
        sum = parseInt(angle1) + parseInt(angle2) + parseInt(angle3); 
        if(sum === 180)
        {
            setOutputMessage("Wooh! these angles make a triangle");
        }
        else{
            setOutputMessage("Oops! these angles won't make a triangle");
        }
    }

    return (
        <div className = "angles-of-triangle">
            <div className = "back-button" onClick = {() => handleClick()}>
                <ArrowBackIosIcon style = {{fontSize: 18}}/>
                Go Back
            </div>

            <form onSubmit = {(e) => handleSubmit(e)}className = "angles-form">
                <label className = "heading">Enter the angles in below input boxes and 
                    we will tell you if those angles make a Triangle
                </label>
                <div className = "inputs">
                    <input type = "number" className = "input" onChange = {(e) => setAngle1(e.target.value)} required></input>
                    <input type = "number" className = "input" onChange = {(e) => setAngle2(e.target.value)} required></input>
                    <input type = "number" className = "input" onChange = {(e) => setAngle3(e.target.value)} required></input>
                </div>
                <button type = "submit" className = "button">Submit</button>
            </form>

            <div className = "output">
                {outputMessage}
            </div>
        </div>
    )
}

export default AnglesOfTriangles
