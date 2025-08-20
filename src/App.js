import React from "react"
import Weather from "./Weather"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tucson"/>
        <footer>
          <p>This project was created by <a href="https://github.com/jpcreativeworks" target="_blank" rel="noreferrer">Jenn Bencriscutto</a></p>
          <a href="https://github.com/jpcreativeworks/another-react-weather-application.git" target="_blank" rel="noreferrer">GitHub</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
