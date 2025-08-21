import React from "react"
import ReactAnimatedWeather from 'react-animated-weather';


export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "scattered-clouds-day": "PARTLY_CLOUDY_DAY",
    "broken-clouds-day": "CLOUDY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "broken-clouds-night": "CLOUDY",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "thunderstorm-day": "RAIN",
    "thunderstorm-night": "RAIN",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "WIND",
    "mist-night": "WIND",
  }
  return (
  <ReactAnimatedWeather 
  icon={codeMapping[props.code]}
  color="#1e1e1e"
  size={64}
  animate={true}
  />
  )
}