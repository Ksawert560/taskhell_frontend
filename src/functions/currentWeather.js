import axios from 'axios';

async function getCurrentWeather(){
  let currentTemp = 0;
  let currentWeather = "";
  let humidity = 0;
  let feelsLike = 0;
  let minTemp = 0;
  let maxTemp = 0;
  let windSpeed = 0;
  try {
    let response = await axios.get(`${process.env.NEXT_PUBLIC_WEATHER_SERVER_URL}`, {
      params:{
        'key': process.env.NEXT_PUBLIC_WEATHER_API_KEY,
        'q': localStorage.getItem('location'),
        'aqi': 'no'
      },
      headers: {
        'Content-Type': 'aplication/json'
      },
    });
    currentTemp = response.data.current.temp_c;
    currentWeather = response.data.current.condition.text;
    humidity = response.data.current.humidity;
    feelsLike = response.data.current.feelslike_c;
    windSpeed = response.data.current.wind_kph;
    // You might also want to extract min and max temperatures from response.data.forecast.forecastday[0].day
    // minTemp = response.data.forecast?.forecastday?.[0]?.day?.mintemp_c || 0;
    // maxTemp = response.data.forecast?.forecastday?.[0]?.day?.maxtemp_c || 0;

    // Return an object containing the variables
    return {
      currentTemp,
      currentWeather,
      humidity,
      feelsLike,
    //   minTemp,
    //   maxTemp,
      windSpeed
    };
  }
  catch (error) {
    console.error('Błąd podczas wysyłania danych:', error);
    // Return an empty object or some default values in case of an error
    return {
      currentTemp: 0,
      currentWeather: "",
      humidity: 0,
      feelsLike: 0,
    //   minTemp: 0,
    //   maxTemp: 0,
      windSpeed: 0
    };
  }
}

export default getCurrentWeather;