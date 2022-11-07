import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";

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

  function search() {
    const key = `93791ed1c5ac3002a2880b95c37460d5`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="input-group mb-3" onSubmit={handleSubmit}>
          <input
            type="search"
            className="form-control"
            placeholder="Type a city..."
            aria-describedby="basic-addon2"
            onChange={handleCityChange}
          />
          <span className="input-group-text search-button" id="basic-addon2">
            🔎
          </span>
        </form>
        <CurrentWeather data={weatherData} />
      </div>
    );
  } else {
    search();

    return "Loading...";
  }
}
