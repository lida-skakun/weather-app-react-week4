import React from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function showForecast(response) {
    console.log(response.data);
  }

  const key = `aa09763d916df0424c840d55bfc2d2c9`;
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=51.5&lon=-0.12&cnt=6&appid=${key}`;
  axios.get(apiUrl).then(showForecast);

  return (
    <div className="WeatherForecast row">
      <div className="col-6">Monday</div>
      <div className="col-3">
        <strong>25℃</strong>
      </div>
      <div className="col-3">
        <img src="/" alt="weather-conditions" />
      </div>
    </div>
  );
}
