import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function Weather() {
  return (
    <Container>
      <Card>
        <Card.Body>
          <Row>
            <Col xs={9}>
              <form className="searchForm input-group mb-3">
                <input
                  type="search"
                  className="form-control searchCity"
                  name="searchCity"
                  id="searchCity"
                  placeholder="Type a city..."
                  aria-describedby="basic-addon2"
                />
                <button>
                  <img
                    src="./images/Vector_search_icon.png"
                    alt="searchIcon"
                    id="searchIcon"
                  />
                </button>
              </form>
            </Col>
            <Col xs={3}>
              <button id="locationButton">My Location</button>
            </Col>
          </Row>
          <Row>
            <Col xs={5} className="todayWeather">
              <h1>28</h1>
              <span id="mainUnit">ºC</span>
              <div id="location">New York</div>
              <div id="dateTime"></div>
              <p id="description">Cloudy with clearning</p>
              <img
                src="images/weather1.png"
                className="weatherIcon"
                alt="weather icon"
                id="weatherIcon"
              />
            </Col>

            <Col xs={6} id="weekForecast"></Col>
          </Row>
        </Card.Body>
      </Card>
      <p className="fotter">
        <a
          href="https://github.com/lida-skakun/SheCodes-Weather-App"
          rel="noopener noreferrer"
          target="_blank"
        >
          Open-source code
        </a>
        by Lida Tkachova
      </p>
    </Container>
  );
}
