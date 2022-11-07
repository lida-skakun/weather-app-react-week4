import React from "react";
import Description from "./Description";
import FormattedDate from "./FormattedDate";

export default function CurrentWeather(props) {
  return (
    <div className="row">
      <div className="col-5">
        <h3>
          <strong>{props.data.city}</strong>, {props.data.country}
        </h3>
        <p className="parameters">
          <FormattedDate date={props.data.date} />
        </p>
        <ul>
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png"
              alt={props.data.description}
              className="weather-icon"
            />
          </li>
          <li className="temperature">{Math.round(props.data.temperature)}°</li>
          <li className="parameters text-capitalize">
            {props.data.description}
          </li>
        </ul>
      </div>
      <div className="col-7 additional-conditions">
        <Description
          parametr="Temperature"
          icon="⫰"
          value={Math.round(props.data.temperature)}
          units="°C"
        />
        <Description
          parametr="Feels like"
          icon="⨀"
          value={Math.round(props.data.feelslike)}
          units="°C"
        />
        <Description
          parametr="Wind"
          icon="⩬"
          value={Math.round(props.data.wind)}
          units="km/h"
        />
        <Description
          parametr="Humidity"
          icon="⩫"
          value={props.data.humidity}
          units="%"
        />
      </div>
    </div>
  );
}
