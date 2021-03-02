import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import CurrentWeather from "./CurrentWeather.js";
import FormattedDate from "./FormattedDate.js";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feelsLike: response.data.main.feels_like,
      city: response.data.name,
      //iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "f6b05703004145fac5fd3f7a96bd1a10";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventdefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="appHeader">
        <div className="lineHeader">
          <div className="row">
            <div className="col-6">
              <div className="cityNow">
                {" "}
                <span role="img" aria-label="world">
                  🗺️
                </span>
                <span>{weatherData.city}</span>,{" "}
                <span className="country">PT</span>
              </div>
            </div>
            <div className="col-6">
              <div className="todayDay">
                <FormattedDate date={weatherData.date} />
              </div>
            </div>
          </div>
        </div>
        <div className="Weather">
          <form onSubmit={handleSubmit}>
            {" "}
            <input
              type="text"
              placeholder="Enter a city..."
              className="city"
              autoComplete="off"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <button type="button" className="btnCurrentlocation">
              <em>Current location</em>
            </button>
            <input
              type="image"
              src="whitemag.png"
              className="magn"
              value="search"
              alt="magnifier"
            />
          </form>
          <CurrentWeather info={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
