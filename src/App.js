import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="main container-fluid">
        <Weather />
      </div>

      <footer className="container-fluid">
        {" "}
        This project was coded by Lida Tkachova and is{" "}
        <a
          href="https://github.com/lida-skakun/weather-app-react-week4"
          target="a_blank"
        >
          open-sourced on GitHub
        </a>
        and{" "}
        <a href="https://lucky-tartufo-017c35.netlify.app/" target="a_blank">
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
