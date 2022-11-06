import React from "react";
import "./Description.css";

export default function Description(props) {
  return (
    <div className="Description row p-1 m-1 shadow rounded details">
      <div className="col-3 mt-2">{props.icon}</div>
      <div className="col-7 text-start p-0">
        <p className="parameters">{props.parametr}</p>
        <p>
          <strong>
            {props.value} {props.units}
          </strong>
        </p>
      </div>
    </div>
  );
}
