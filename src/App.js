import React, { useState } from "react";
import axios from "axios";

function App() {
  let [city, setCity] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=93791ed1c5ac3002a2880b95c37460d5&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function enteringCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="App">
      <h3>Search for weater in your city</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={enteringCity}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );

  let currentWeater = (
    <ul>
      <li>Temperature: {Math.round(weather.temperature)}°C</li>
      <li>Description: {weather.description}</li>
      <li>Humidity: {weather.humidity}%</li>
      <li>Wind: {weather.wind}km/h</li>
      <li>
        <img src={weather.icon} alt={weather.description} />
      </li>
    </ul>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <h4>Current weather in {city} :</h4>

        {currentWeater}
      </div>
    );
  } else {
    return form;
  }
}

export default App;
