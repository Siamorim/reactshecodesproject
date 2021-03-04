import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import CurrentWeather from "./CurrentWeather.js";
import FormattedDate from "./FormattedDate.js";
import ForecastWeather from "./ForecastWeather.js";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed * 3.6,
      feelsLike: response.data.main.feels_like,
      city: response.data.name,
      //iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      country: response.data.sys.country,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
    });
  }

  function search() {
    const apiKey = "f6b05703004145fac5fd3f7a96bd1a10";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      search();
    } else {
      alert(`Enter a city, please :)`);
    }
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function getCurrentLocation(position) {
    const apiKey = "f6b05703004145fac5fd3f7a96bd1a10";
    let units = "metric";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiGeoUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    axios.get(apiGeoUrl).then(handleResponse);
  }

  function getGeolocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getCurrentLocation);
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
                <span className="country">{weatherData.country}</span>
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
          <form onSubmit={handleSubmit} className="text-center">
            <div className="SearchMag">
              <input
                type="text"
                placeholder="Enter a city..."
                className="city"
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
              />
              <button type="submit" className="magn">
                <img src="whitemag.png" alt="magnifier" />
              </button>
            </div>
            <button
              type="button"
              className="btnCurrentlocation geolocation"
              onClick={getGeolocation}
            >
              <em>Current location</em>
            </button>
          </form>
          <CurrentWeather info={weatherData} unit={unit} setUnit={setUnit} />
          <ForecastWeather city={weatherData.city} unit={unit} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
