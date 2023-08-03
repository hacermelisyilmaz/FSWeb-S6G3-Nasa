import React, { useEffect, useState } from "react";
import axios from "axios";
import Main from "./components/Main.js";
import "./App.css";

function App() {
  const [apodData, setApodData] = useState();
  const [imgOfDay, setImgOfDay] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=WJnS0fGtrkgAxSmM3KEbPn7PwROQPg79530w3J62"
      )
      .then(function (response) {
        setApodData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(function () {
        console.log("Axios get request has been made");
      });
  }, []);

  useEffect(() => {
    apodData && setImgOfDay(apodData.hdurl);
  }, [apodData]);

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${imgOfDay})`,
      }}
    >
      <div className="App-Cover">
        <img
          className="App-logo"
          src="https://api.nasa.gov/assets/img/favicons/favicon-192.png"
        />
        <h1>Astronomy Picture of the Day</h1>
      </div>
      <div className="App-Main flex-container">
        <Main apodData={apodData} />
      </div>
    </div>
  );
}

export default App;
