import './App.css';
import React from "react";
import AnglesOfTriangles from './components/AnglesOfTriangles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppWrapper from './components/AppWrapper';

function App() 
{
  return (
    <Router>
      <div className="App">
           <AppWrapper/>
      </div>
      </Router>  
    
  );
}

export default App;
