import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="main container-fluid">
        <Weather />
      </div>

      <footer> Created by Lida Tkachova</footer>
    </div>
  );
}
