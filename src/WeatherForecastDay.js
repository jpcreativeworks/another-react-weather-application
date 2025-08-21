import React from "react"
import WeatherIcon from "./WeatherIcon"

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`
  }

  function weekDay() {
    let dayOfWeek = new Date(props.data.time * 1000);
    let day = dayOfWeek.getDay();
    let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    return daysOfWeek[day];
  }
  return (
    <div>
    <div className="WeatherForecast-day">{weekDay()}</div>
    <WeatherIcon code={props.data.condition.icon} size={24}/>
    <div className="WeatherForecast-temperatures">
      <span className="WeatherForecast-temperatures-max">{maxTemperature()}</span> 
      <span className="WeatherForecast-temperatures-min">{minTemperature()}</span>
    </div>
    </div>
  )
}