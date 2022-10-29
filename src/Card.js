import React from "react";

export default function Card() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-9">
              <form className="searchForm input-group mb-3">
                <input
                  type="search"
                  className="form-control searchCity"
                  name="searchCity"
                  id="searchCity"
                  placeholder="Type a city..."
                  aria-describedby="basic-addon2"
                />
                <button>
                  <img
                    src="./images/Vector_search_icon.png"
                    alt="searchIcon"
                    id="searchIcon"
                  />
                </button>
              </form>
            </div>
            <div className="col-3">
              <button id="locationButton">My Location</button>
            </div>
          </div>
          {/*
          <div className="row">
            <div className="col-5 todayWeather">
          <h1>28</h1>
              <span id="mainUnit">ºC</span>
              <div id="location">New York</div>
              <div id="dateTime"></div>
              <p id="description">Cloudy with clearning</p>
           <img
                src="images/weather1.png"
                className="weatherIcon"
                alt="weather-image"
                id="weatherIcon"
              /> 
               </div>

            <div id="weekForecast" className="col-6"></div>
          </div>*/}
        </div>
      </div>
      <p className="fotter">
        <a
          href="https://github.com/lida-skakun/SheCodes-Weather-App"
          target="_blank"
          rel="noreffer"
        >
          Open-source code
        </a>
        by Lida Tkachova
      </p>
    </div>
  );
}
