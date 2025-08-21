import React from "react"
import FormattedDate from "./FormattedDate"


export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
        <ul>
          <li><FormattedDate date= {new Date()} /></li>
          <li>{props.data.condition}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="d-flex align-items-center">
              <img src={props.data.icon} alt={props.data.condition} className="weather-icon me-3"/>
            <div className="d-flex align-items-baseline">
              <span className="temperature">{Math.round(props.data.temperature)}</span>
              <span className="unit">°C</span>
            </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Feels Like: {Math.round(props.data.feels)}</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind}m/s</li>
            </ul>
          </div>
        </div>
    </div>
  )
}