import React from "react";
import Description from "./Description";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import UnitConvertation from "./UnitConvertation";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather row">
      <div className="col-5">
        <h3>
          <strong>{props.data.city}</strong>, {props.data.country}
        </h3>
        <div className="parameters">
          <FormattedDate date={props.data.date} />
        </div>
        <ul>
          <li>
            <WeatherIcon iconCode={props.data.icon} />
          </li>
          <UnitConvertation celcius={props.data.temperature} />
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
