import React, { useState } from "react";
import axios from "axios";
import Description from "./Description";
import FormattedDate from "./FormattedDate";

import "./Weather.css";

export default function Weather() {
  let [city, setCity] = useState("London");
  let [weatherData, setWeatherData] = useState({});

  function showWeather(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      feelslike: response.data.main.feels_like,
      country: response.data.sys.country,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
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
              <strong>{weatherData.city}</strong>, {weatherData.country}
            </h3>
            <p className="parameters">
              <FormattedDate date={weatherData.date} />
            </p>
            <ul>
              <li>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png"
                  alt={weatherData.description}
                  className="weather-icon"
                />
              </li>
              <li className="temperature">
                {Math.round(weatherData.temperature)}°
              </li>
              <li className="parameters text-capitalize">
                {weatherData.description}
              </li>
            </ul>
          </div>
          <div className="col-7 additional-conditions">
            <Description
              parametr="Temperature"
              icon="⫰"
              value={weatherData.temperature}
              units="°C"
            />
            <Description
              parametr="Feels like"
              icon="⨀"
              value={Math.round(weatherData.feelslike)}
              units="°C"
            />
            <Description
              parametr="Wind"
              icon="⩬"
              value={weatherData.wind}
              units="km/h"
            />
            <Description
              parametr="Humidity"
              icon="⩫"
              value={weatherData.humidity}
              units="%"
            />
          </div>
        </div>
      </div>
    );
  } else {
    const key = `93791ed1c5ac3002a2880b95c37460d5`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

    axios.get(apiUrl).then(showWeather);

    return "Loading...";
  }
}
