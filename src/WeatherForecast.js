import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState({});

  function showForecast(response) {
    setReady(true);
    setForecast(response.data.daily);
  }

  useEffect(() => {
    setReady(false);
  }, [props.coordinates]);

  if (ready) {
    return (
      <div className="WeatherForecast">
        {forecast.map((daily, index) => {
          if (index < 6) {
            return (
              <div key={index}>
                <ForecastDay data={daily} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    const key = `e57b6b334917f8c1d8a472ce909c220c`;
    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&exclude=hourly,minutely&appid=${key}&units=metric`;
    axios.get(apiUrl).then(showForecast);

    return null;
  }
}
