import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [Course, setCourse] = useState("")
/*
  const getCourse = () => {
    fetch("http://localhost:4478/api/courses/")
      .then((response) => response.json())
      .then((data)=>{
        console.log(data)
        setCourse(data.Course)
      })
  };
 */

  const getCourse = () => {
    Axios.get("http://localhost:4478/api/courses").then(
      (result) => {
      console.log(result)
      setCourse(result.data.course)
    })
  }

  return (
    <div className="App">
      <h1>YO la miff</h1>
      <button onClick={getCourse}>Get Courses</button>
      {Course}
    </div>
  );
}

export default App;
