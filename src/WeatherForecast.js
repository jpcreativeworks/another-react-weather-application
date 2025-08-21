import React from "react"
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios"

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data)
  }
  console.log(props);

  const key = "7fd5430a29oa8949b4d239de06t9a3d4"
  const city = props.city
  const forecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}&untis={metric}`
  axios.get(forecastUrl).then(handleResponse);
  return(
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Wed</div>
          <WeatherIcon code="clear-sky-day" size={24}/>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperatures-min">30°</span> 
            <span className="WeatherForecast-temperatures-min">28°</span>
          </div>
        </div>
      </div>
    </div>
  )
}