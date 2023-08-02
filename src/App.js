import React from "react";
import Pictures from "./components/pictures/Pictures.js";
import { data } from "./data.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          className="App-logo"
          src="https://api.nasa.gov/assets/img/favicons/favicon-192.png"
        />
        <h1>Astronomy Picture of the Day</h1>
      </header>
      <Pictures data={data} />
      <footer>NASA</footer>
    </div>
  );
}

export default App;
