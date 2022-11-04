import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col-6">
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
            <li className="temperature">
              25° <p className="description">Stormy</p>
            </li>
            <li className="desription">Stormy</li>
            <li>
              <span>Stormy</span>
              <p>Wind</p>
            </li>
            <li>
              <p>Wind</p>
              <p>Wind</p>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <form>
            <input type="serach" placeholder="Type a city..." />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
