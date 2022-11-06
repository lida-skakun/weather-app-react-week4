import React from "react";
import Description from "./Description";

import "./App.css";

function App() {
  return (
    <div className="App container-fluid">
      <div className="input-group mb-3">
        <input
          type="search"
          className="form-control"
          placeholder="Type a city..."
          aria-describedby="basic-addon2"
        />
        <span className="input-group-text search-button" id="basic-addon2">
          🔎
        </span>
      </div>
      <div className="row">
        <div className="col-5">
          <h3>
            <strong>New York</strong>, USA
          </h3>
          <p className="parameters">Monday, 22:09</p>
          <ul>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png"
                alt="weather-icon"
                className="weather-icon"
              />
            </li>
            <li className="temperature">25°</li>
            <li className="parameters">Stormy</li>
          </ul>
        </div>
        <div className="col-7 additional-conditions">
          <Description parametr="Wind" icon="⩬" value="12,4 km/h" />
          <Description parametr="Index UV" icon="⨀" value={0} />
          <Description parametr="Temperature" icon="⫰" value="25°" />
          <Description parametr="Humidity" icon="⩫" value="75%" />
        </div>
      </div>
    </div>
  );
}

export default App;
