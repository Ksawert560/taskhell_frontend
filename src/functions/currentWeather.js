import CurrentDateTime from '@/app/components/CurrentDateTime';
import axios from 'axios';

// Not sure if we should throw the moon phases into a separate file altogether, but for now it's gonna be here xd



async function getCurrentWeather(){
  let currentTemp = 0;
  let currentWeather = "";
  let humidity = 0;
  let feelsLike = 0;
  let minTemp = 0;
  let maxTemp = 0;
  let windSpeed = 0;
  let date = CurrentDateTime.formattedDate;
  let moonPhase = "-";
  try {
    let response = await axios.get(`${process.env.WEATHER_SERVER_URL}`, {
      params:{
        'key': process.env.WEATHER_API_KEY,
        'q': localStorage.getItem('location'),
        'aqi': 'no'
      },
      headers: {
        'Content-Type': 'application/json'
      },
    });
    currentTemp = response.data.current.temp_c;
    currentWeather = response.data.current.condition.text;
    humidity = response.data.current.humidity;
    feelsLike = response.data.current.feelslike_c;
    windSpeed = response.data.current.wind_kph;
    // minTemp = response.data.forecast?.forecastday?.[0]?.day?.mintemp_c || 0;
    // maxTemp = response.data.forecast?.forecastday?.[0]?.day?.maxtemp_c || 0;

    // Getting info about current moon phase

    let moonphase = await axios.get(`${process.env.WEATHER_SERVER_URL}/astronomy.json`, {
      params: {
        'key': process.env.WEATHER_API_KEY,
        'q': localStorage.getItem('location'),
        'dt': date
      },
      headers: {
        'Content-Type': 'application/json'
      },
    });
    moonPhase = moonphase.data.astronomy.astro.moon_phase;

    // Return an object containing the variables
    return {
      currentTemp,
      currentWeather,
      humidity,
      feelsLike,
    //   minTemp,
    //   maxTemp,
      windSpeed,
      moonPhase
    };
  }
  catch (error) {
    console.error('Error while retrieving data:', error);
    // Return an empty object or some default values in case of an error
    return {
      currentTemp: 0,
      currentWeather: "",
      humidity: 0,
      feelsLike: 0,
    //   minTemp: 0,
    //   maxTemp: 0,
      windSpeed: 0,
      moonPhase: "Go outside and have a look."
    };
  }
}

export default getCurrentWeather;