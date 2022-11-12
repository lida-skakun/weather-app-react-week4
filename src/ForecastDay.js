import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./ForecastDay.css";

export default function ForecastDay(props) {
  let temperature = Math.round(props.data.temp.max);
  function dayOfWeek() {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = new Date(props.data.dt * 1000);
    day = days[day.getDay()];
    return day;
  }

  return (
    <div className="ForecastDay row">
      <div className="col-5 lh-lg p-0">{dayOfWeek()}</div>
      <div className="col-3 lh-lg">
        <strong>{temperature}℃</strong>
      </div>
      <div className="col-3">
        {" "}
        <WeatherIcon iconCode={props.data.weather[0].icon} />
      </div>
    </div>
  );
}
