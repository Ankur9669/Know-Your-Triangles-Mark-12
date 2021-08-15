import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "../css/back-button.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "../css/take-qwiz.css";
function TakeAQuiz() 
{
    const correctAnswer = [1, 2, 1, 1, 1, 2, 2, 2, 3, 3];
    const history = useHistory();
    const [ansQues1, setAns1] = useState();
    const [ansQues2, setAns2] = useState();
    const [ansQues3, setAns3] = useState();
    const [ansQues4, setAns4] = useState();
    const [ansQues5, setAns5] = useState();
    const [ansQues6, setAns6] = useState();
    const [ansQues7, setAns7] = useState();
    const [ansQues8, setAns8] = useState();
    const [ansQues9, setAns9] = useState();
    const [ansQues10, setAns10] = useState();
    const [outputMessage, setOutputMessage] = useState("");


    //When user clicks back button we route back to home page
    function handleClick()
    {
        history.replace("/");
    }

    function handleSubmit()
    {
        let score = 0;
        if(ansQues1 === correctAnswer[0])
        {
            score++;
        }
        if(ansQues2 === correctAnswer[1])
        {
            score++;
        }
        if(ansQues3 === correctAnswer[2])
        {
            score++;
        }
        if(ansQues4 === correctAnswer[3])
        {
            score++;
        }
        if(ansQues5 === correctAnswer[4])
        {
            score++;
        }
        if(ansQues6 === correctAnswer[5])
        {
            score++;
        }
        if(ansQues7 === correctAnswer[6])
        {
            score++;
        }
        if(ansQues8 === correctAnswer[7])
        {
            score++;
        }
        if(ansQues9 === correctAnswer[8])
        {
            score++;
        }
        if(ansQues10 === correctAnswer[9])
        {
            score++;
        }
        setOutputMessage("Your Score is: " + score);
    }
    return (
        <div>
            <div className = "back-button" onClick = {() => handleClick()}>
                <ArrowBackIosIcon style = {{fontSize: 18}}/>
                Go Back
            </div>
            
            <div className = "question-answer-container">
                <label className = "question">1. If a triangle has angles 1350, 150, 300. Is it an obtuse triangle?</label>
                <label className = "option">
                    <input type = "radio" name = "answer1" value = "Yes" id = "1" onChange = {() => setAns1(1)}></input>
                    Yes
                </label>
            
                <label className = "option">
                    <input type = "radio" name = "answer1" value = "No" id = "2" onChange = {() => setAns1(2)}></input>
                    No
                </label>
            </div>

            <div className = "question-answer-container">
                <label className = "question">2. If a triangle has angles 1150, 250, 400. Is it an acute triangle?</label>
                <label className = "option">
                    <input type = "radio" name = "answer2" value = "Yes" id = "1" onChange = {() => setAns2(1)}></input>
                    Yes
                </label>
            
                <label className = "option">
                    <input type = "radio" name = "answer2" value = "No" id = "2" onChange = {() => setAns2(2)}></input>
                    No
                </label> 
            </div>

            <div className = "question-answer-container">
                <label className = "question">3. If a triangle has angles 900, 600, 300. Is it a right angle triangle?</label>
                <label className = "option">
                    <input type = "radio" name = "answer3" value = "Yes" id = "1" onChange = {() => setAns3(1)}></input>
                    Yes
                </label>
            
                <label className = "option">
                    <input type = "radio" name = "answer3" value = "No" id = "2" onChange = {() => setAns3(2)}></input>
                    No
                </label> 
            </div>

            <div className = "question-answer-container">
                <label className = "question">4. A triangle has angles 600, 600, 600. Is it an equilateral triangle?</label>
                <label className = "option">
                    <input type = "radio" name = "answer4" value = "Yes" id = "1" onChange = {() => setAns4(1)}></input>
                    Yes
                </label>
            
                <label className = "option">
                    <input type = "radio" name = "answer4" value = "No" id = "2" onChange = {() => setAns4(2)}></input>
                    No
                </label> 
            </div>

            <div className = "question-answer-container">
                <label className = "question">5. If a triangle has angles 250, 750, 800. Is it an acute triangle?</label>
                <label className = "option">
                    <input type = "radio" name = "answer5" value = "Yes" id = "1" onChange = {() => setAns5(1)}></input>
                    Yes
                </label>
            
                <label className = "option">
                    <input type = "radio" name = "answer5" value = "No" id = "2" onChange = {() => setAns5(2)}></input>
                    No
                </label> 
            </div>

            <div className = "question-answer-container">
                <label className = "question">6. If a triangle has 2 sides with equal lengths and 750 angle between them. What is the type of triangle?</label>
                <label className = "option">
                    <input type = "radio" name = "answer6" value = "equilateral" id = "1" onChange = {() => setAns6(1)}></input>
                    Equilateral
                </label>
            
                <label className = "option">
                    <input type = "radio" name = "answer6" value = "isoceles" id = "2" onChange = {() => setAns6(2)}></input>
                    Isoceles
                </label>

                <label className = "option">
                    <input type = "radio" name = "answer6" value = "right-angle-triangle" id = "3" onChange = {() => setAns6(3)}></input>
                    Right Angle Triangle
                </label>  
            </div>

            <div className = "question-answer-container">
                <label className = "question">7. If a triangle has 2 angles of 750. What is the measure of third angle in degree?</label>
                <label className = "option">
                    <input type = "radio" name = "answer7" value = "25" id = "1" onChange = {() => setAns7(1)}></input>
                    25
                </label>
            
                <label className = "option">
                    <input type = "radio" name = "answer7" value = "30" id = "2" onChange = {() => setAns7(2)}></input>
                    30
                </label> 

                <label className = "option">
                    <input type = "radio" name = "answer7" value = "15" id = "3" onChange = {() => setAns7(3)}></input>
                    15
                </label>
            </div>

            <div className = "question-answer-container">
                <label className = "question">8. If a triangle has 2 sides with equal lengths and 600 angle between them. What is the type of triangle?</label>
                <label className = "option">
                    <input type = "radio" name = "answer8" value = "Yes" id = "1" onChange = {() => setAns8(1)}></input>
                    Equilateral
                </label>
            
                <label className = "option">
                    <input type = "radio" name = "answer8" value = "No" id = "2" onChange = {() => setAns8(2)}></input>
                    Isoceles
                </label> 

                <label className = "option">
                    <input type = "radio" name = "answer8" value = "No" id = "2" onChange = {() => setAns8(3)}></input>
                    Both
                </label> 
            </div>

            <div className = "question-answer-container">
                <label className = "question">9. The perimeter of an equilateral triangle is 15cm. What is the length of one side?</label>
                <label className = "option">
                    <input type = "radio" name = "answer9" value = "Yes" id = "1" onChange = {() => setAns9(1)}></input>
                    15cm
                </label>
            
                <label className = "option">
                    <input type = "radio" name = "answer9" value = "No" id = "2" onChange = {() => setAns9(2)}></input>
                    45cm
                </label>

                <label className = "option">
                    <input type = "radio" name = "answer9" value = "No" id = "3" onChange = {() => setAns9(3)}></input>
                    5cm
                </label> 
            </div>

            <div className = "question-answer-container">
                <label className = "question">10. If a triangle has sides of 2cm, 3cm, 4cm, what is the type of triangle?</label>
                <label className = "option">
                    <input type = "radio" name = "answer10" value = "Yes" id = "1" onChange = {() => setAns10(1)}></input>
                    Equilateral
                </label>
            
                <label className = "option">
                    <input type = "radio" name = "answer10" value = "No" id = "2" onChange = {() => setAns10(2)}></input>
                    Isoceles
                </label> 

                <label className = "option">
                    <input type = "radio" name = "answer10" value = "No" id = "3" onChange = {() => setAns10(3)}></input>
                    Scalene
                </label> 
            </div>
            <button className = "button" onClick = {() => handleSubmit()}>Submit</button>

            <label className = "heading">Score Would Be Shown Here: </label>
            <div className = "output">
                {outputMessage}
            </div>
        </div>
    )
}

export default TakeAQuiz
