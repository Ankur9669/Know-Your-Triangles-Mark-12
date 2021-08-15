import React from 'react'
import "../css/question.css";
function QuestionComponent() {
    return (
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
    )
}

export default QuestionComponent
