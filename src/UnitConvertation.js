import React, { useState } from "react";

export default function UnitConvertation(props) {
  let [unit, setUnit] = useState("celcius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function convertToFahrenheit() {
    return Math.round(props.celcius * 1.8 + 32);
  }

  if (unit === "celcius") {
    return (
      <li className="temperature">
        {Math.round(props.celcius)}
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </li>
    );
  } else {
    return (
      <li className="temperature">
        {convertToFahrenheit()}
        <span className="unit">
          °F |{" "}
          <a href="/" onClick={showCelcius}>
            °C
          </a>
        </span>
      </li>
    );
  }
}
