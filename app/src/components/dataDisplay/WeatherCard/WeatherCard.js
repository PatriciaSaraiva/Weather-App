import React from "react";

import Card from "../../surfaces/Card/Card";
import Map from "../Map/Map";
import Calendar from "../../../assets/icons/calendar-days-solid.svg";

import "./WeatherCard.css";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const dayInAWeek = new Date().getDay();

const forecastDays = weekDays
  .slice(dayInAWeek, weekDays.length)
  .concat(weekDays.slice(0, dayInAWeek));

const WeatherCard = ({
  handleDeleteCard,
  location: { name, country, icon, temp, description, forecast, lat, lon },
}) => {
  return (
    <>
      <Card>
        <div className="weather-container">
          <div className="top">
            <div className="info-container">
              <h4 className="weather-name">{name}</h4>
              <p className="weather-country">{country}</p>
              <div className="weather-temperature_container">
                <div className="weather-icon">
                  <img
                    alt="weather icon"
                    src={`http://openweathermap.org/img/wn/${icon}.png`}
                  />
                </div>
                <p className="weather-temperature">{temp}°C </p>
              </div>
              <p className="weather-description">{description}</p>
            </div>
            <div className="right-container">
              <div className="map-container">
                <Map lat={lat} lon={lon} location={name} />
              </div>
              <div className="btn-delete">
                <button className="delete-location" onClick={handleDeleteCard}>
                  X
                </button>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="weather-calendar">
              <img
                className="calendar-icon"
                alt="calendar icon"
                src={Calendar}
              />
              <span className="forecast-description">7-Days Forecast</span>
            </div>
            <div className="weather-forecast_container">
              {forecastDays.map((day, index) => (
                <div key={day} className="daily-forecast_container">
                  <p className="daysOfWeek">{day}</p>
                  <div className="weather-forecast">
                    <img
                      className="forecast-icon"
                      alt="forecast icon"
                      src={`http://openweathermap.org/img/wn/${forecast[index].icon}.png`}
                    />
                    <p className="weather-temperature_small">
                      {parseFloat(forecast[index].temp).toFixed(0)}°C
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default WeatherCard;
