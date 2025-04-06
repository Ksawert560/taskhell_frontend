'use client';
import React, {useState, useEffect} from "react";
import styles from "../../app/main.css";
import axios from "axios";
import CurrentDateTime from "./CurrentDateTime";
import getCurrentWeather from "@/functions/currentWeather";


function WeatherWidget() {
  const [error, setError] = useState(null)
  const [weatherData, setWeatherData] = useState({
    currentTemp: 0,
    currentWeather: "",
    humidity: 0,
    feelsLike: 0,
    minTemp: 0,
    maxTemp: 0,
    windSpeed: 0
  });
  useEffect(() => {
    async function fetchWeather() {
      setError(null);
      try {
        const data = await getCurrentWeather();
        setWeatherData(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch weather data');
      }
    }

    fetchWeather();
  }, []);


  return (
    <section className="weatherWraper" style={styles.page}>
      <CurrentDateTime />
      <div className="weatherWidget">
        <div className="weatherLeft">
          <p className="currentTemp">{Math.round(weatherData.currentTemp)}°</p>
          <div className="weatherIcon">
s
          </div>
          <p className="currentLocation">{localStorage.getItem('location') || 'Unknown'}</p>
        </div>
        <div className="weatherRight">
          <p>{weatherData.currentWeather.toLocaleLowerCase()}</p>
          <p>humidity: {weatherData.humidity}%</p>
          <p>feels like: {weatherData.feelsLike}°C</p>
          <p>wind speed: {weatherData.windSpeed} km/h</p>
        </div>
      </div>
    </section>
  );
}

export default WeatherWidget;
