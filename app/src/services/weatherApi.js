const weatherApiKey = process.env.REACT_APP_WEATHER_API;

const fetchCurrentWeather = (lat, lon) =>
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`
  );
const fetchWeatherForecast = (lat, lon) =>
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=${weatherApiKey}&units=metric`
  );

export { fetchCurrentWeather, fetchWeatherForecast };
