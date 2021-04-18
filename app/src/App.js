import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:1287/api.courses',
  responseType: "json"



})


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
