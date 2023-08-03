import React from "react";
import Main from "./components/Main.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-Cover">
        <img
          className="App-logo"
          src="https://api.nasa.gov/assets/img/favicons/favicon-192.png"
        />
        <h1>Astronomy Picture of the Day</h1>
      </div>
      <div className="App-Main flex-container">
        <Main />
      </div>
    </div>
  );
}

export default App;
