import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AnglesOfTriangles from './AnglesOfTriangles';
import {useHistory} from "react-router-dom";
import CalculateArea from './CalculateArea';
import TakeAQuiz from './TakeAQuiz';
import CheckHypotenuse from './CheckHypotenuse';
function AppWrapper() 
{
  const history = useHistory();
  function handleClick(parameter)
  {
    if(parameter === "angles-of-triangles")
    {
        history.push("/angles-of-triangles");
    }
    if(parameter === "check-hypotenuse")
    {
        history.push("/check-hypotenuse");
    }
    if(parameter === "calculate-area")
    {
        history.push("/calculate-area");
    }
    if(parameter === "take-a-quiz")
    {
        history.push("/take-a-quiz");
    }
  }
    return ( 
        <div className = "App">
            <Switch>
                <Route path = "/angles-of-triangles">
                    <AnglesOfTriangles/>
                </Route>

                <Route path = "/calculate-area">
                    <CalculateArea/>
                </Route>

                <Route path = "/take-a-quiz">
                    <TakeAQuiz/>
                </Route>

                <Route path = "/check-hypotenuse">
                    <CheckHypotenuse/>
                </Route>

                <Route exact path = "/">
                    <header className = "app-heading">
                        Welcome To Fun With Triangles
                    </header>
                    <div className = "grid">
                        <div className = "section-1 center-vertical-horizontal hover-effect" 
                        onClick = {() => handleClick("angles-of-triangles")}>
                            <label>Angles of Triangles</label>
                        </div>

                        <div className = "section-2 center-vertical-horizontal hover-effect"
                        onClick = {() => handleClick("check-hypotenuse")}>
                            <label>Check Hypotenuse</label>
                        </div>

                        <div className = "section-3 center-vertical-horizontal hover-effect"
                        onClick = {() => handleClick("calculate-area")}>
                            <label>Calculate Area</label>
                        </div>

                        <div className = "section-4 center-vertical-horizontal hover-effect"
                        onClick = {() => handleClick("take-a-quiz")}>
                            <label>Take a quiz</label>
                        </div>
                    </div> 
                </Route>
            </Switch>
        </div>    
    )
}

export default AppWrapper
