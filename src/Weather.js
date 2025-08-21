import React, { useState } from "react"
import "./Weather.css"
import axios from "axios"
import FormattedDate from "./FormattedDate"

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data)
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      condition: response.data.condition.description,
      weekDay: "Tuesday",
      dayTime: "16:00",
      newDate: new Date(response.data.dt * 1000),
      feels: response.data.temperature.feels_like,
      wind: response.data.wind.speed,
      icon: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png",
    });
  } if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input type="search" placeholder="Enter City Name..." className="form-control"/>
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary w-100" autoFocus="on"/>
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li><FormattedDate date= {new Date()} /></li>
          <li>{weatherData.condition}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="d-flex align-items-center">
              <img src={weatherData.icon} alt={weatherData.condition} className="weather-icon me-3"/>
            <div className="d-flex align-items-baseline">
              <span className="temperature">{Math.round(weatherData.temperature)}</span>
              <span className="unit">°C</span>
            </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Feels Like: {Math.round(weatherData.feels)}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}m/s</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
      const key = "7fd5430a29oa8949b4d239de06t9a3d4";
      const unit = "metric"
      const currentUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${key}&units=${unit}`
      axios.get(currentUrl).then(handleResponse)
      return "loading... "
  }


  
}