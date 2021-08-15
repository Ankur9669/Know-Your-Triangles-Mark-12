import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "../css/back-button.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import QuestionComponent from './QuestionComponent';
function TakeAQuiz() 
{
    const history = useHistory();
    const [ansQues1, setAns1] = useState();
    const [ansQues2, setAns2] = useState();
    const [ansQues3, setAns3] = useState();

    //When user clicks back button we route back to home page
    function handleClick()
    {
        history.replace("/");
    }
    return (
        <div>
            <div className = "back-button" onClick = {() => handleClick()}>
                <ArrowBackIosIcon style = {{fontSize: 18}}/>
                Go Back
            </div>
            
            <div>
                <label className = "question">1. If a triangle has angles 1350, 150, 300. Is it an obtuse triangle?</label>
                <label>
                    <input type = "radio" name = "answer" value = "Yes" id = "1"></input>
                    Yes
                </label>
            
                <label>
                    <input type = "radio" name = "answer" value = "No" id = "2"></input>
                    No
                </label> 
            </div>

            <div>
                <label className = "question">1. If a triangle has angles 1350, 150, 300. Is it an obtuse triangle?</label>
                <label>
                    <input type = "radio" name = "answer" value = "Yes" id = "1"></input>
                    Yes
                </label>
            
                <label>
                    <input type = "radio" name = "answer" value = "No" id = "2"></input>
                    No
                </label> 
            </div>

            <div>
                <label className = "question">1. If a triangle has angles 1350, 150, 300. Is it an obtuse triangle?</label>
                <label>
                    <input type = "radio" name = "answer" value = "Yes" id = "1"></input>
                    Yes
                </label>
            
                <label>
                    <input type = "radio" name = "answer" value = "No" id = "2"></input>
                    No
                </label> 
            </div>
        </div>
    )
}

export default TakeAQuiz
