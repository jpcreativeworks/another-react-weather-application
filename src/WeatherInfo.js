import React from "react"
import FormattedDate from "./FormattedDate"
import WeatherIcon from "./WeatherIcon"
import WeatherTemperature from "./WeatherTemperature"


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
              <WeatherIcon code={props.data.icon} alt={props.data.condition}/>
            <div className="d-flex align-items-baseline">
              <WeatherTemperature celcius={props.data.temperature} />
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