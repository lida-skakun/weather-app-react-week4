import React from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function showForecast(response) {
    console.log(response.data);
  }

  const key = `d7a0b2da68b9be514398e1c1689a1208`;
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&cnt=6&appid=${key}`;
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
