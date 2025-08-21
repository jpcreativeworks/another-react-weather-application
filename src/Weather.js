import React, { useState } from "react"
import "./Weather.css"
import axios from "axios"
import WeatherInfo from "./WeatherInfo"

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity)
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
      icon: response.data.condition.icon,
    });
  } 
  
  function search() {
    const key = "7fd5430a29oa8949b4d239de06t9a3d4";
    const unit = "metric"
    const currentUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=${unit}`
    axios.get(currentUrl).then(handleResponse)
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    search();
  } 

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input type="search" 
              placeholder="Enter City Name..." 
              className="form-control"
              onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary w-100" autoFocus="on"/>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData}/>
        
      </div>
    );
  } else {
      search()
      return "loading... "
  }


  
}