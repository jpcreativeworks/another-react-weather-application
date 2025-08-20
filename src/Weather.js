import React from "react"
import "./Weather.css"

export default function Weather() {
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
    <h1>City Name</h1>
    <ul>
      <li>Day-of-Week Hr:Mn</li>
      <li>Weather Condition</li>
    </ul>
    <div className="row">
      <div className="col-6">
        <div className="d-flex align-items-center">
          <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png" alt="Mostly Cloudy" className="weather-icon me-3"/>
        <div className="d-flex align-items-baseline">
          <span className="temperature">6</span>
          <span className="unit">°C</span>
        </div>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>Precipitation: %</li>
          <li>Humidity: %</li>
          <li>Wind: m/s</li>
        </ul>
      </div>
    </div>
  </div>
  )
}