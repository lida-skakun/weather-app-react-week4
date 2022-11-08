import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
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
