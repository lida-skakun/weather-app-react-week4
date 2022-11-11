import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState({});

  function showForecast(response) {
    setReady(true);
    setForecast(response.data.daily);
    console.log(response.data);
  }

  if (ready) {
    return <ForecastDay data={forecast} />;
  } else {
    const key = `96ad27349a64ea1dcdfbe6f4d458c085`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&cnt=6&appid=${key}&units=metric`;
    axios.get(apiUrl).then(showForecast);
  }
}
