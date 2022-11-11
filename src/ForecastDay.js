import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  let temperature = Math.round(props.data[0].temp.max);
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
    let day = new Date(props.data[0].dt * 1000);
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
        <WeatherIcon iconCode={props.data[0].weather[0].icon} />
      </div>
    </div>
  );
}
