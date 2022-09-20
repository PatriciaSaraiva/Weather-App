import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGeolocated } from "react-geolocated";

import { getUniqueElementsFromArrayOfObjects } from "../../utils";
import { removeLocation } from "../../features/locations/locationsSlice";
import { useAlert } from "../../context/alertContext/alertContext";
import Alert, { AlertTypes } from "../../components/feedback/Alert/Alert";
import {
  fetchCurrentWeather,
  fetchWeatherForecast,
} from "../../services/weatherApi";

import WeatherCard from "../../components/dataDisplay/WeatherCard/WeatherCard";

import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const [locationsData, setLocationsData] = useState([]);
  const { alert, setAlert, closeAlert } = useAlert();
  const locations = useSelector((state) => state.locations);
  const { coords, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  const filteredLocationsData = getUniqueElementsFromArrayOfObjects(
    locationsData,
    "name"
  );

  const fetchWeather = async (
    isGeolocation = false,
    id,
    lat,
    lon,
    name,
    country
  ) => {
    Promise.all([fetchCurrentWeather(lat, lon), fetchWeatherForecast(lat, lon)])
      .then(async (response) => {
        const currentWeatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        const mappedForecastResponse = forecastResponse.daily.map((res) => ({
          temp: res.temp.day,
          icon: res.weather[0].icon,
        }));

        setLocationsData((prevState) => [
          {
            id,
            name: isGeolocation ? currentWeatherResponse.name : name,
            country: isGeolocation
              ? currentWeatherResponse.sys.country
              : country,
            temp: parseFloat(currentWeatherResponse.main.temp).toFixed(0),
            description: currentWeatherResponse.weather[0].description,
            icon: currentWeatherResponse.weather[0].icon,
            forecast: mappedForecastResponse.slice(1),
            lat,
            lon,
          },
          ...prevState,
        ]);
      })
      .catch(console.log);
  };

  useEffect(() => {
    if (!isGeolocationEnabled && !coords) {
      fetchWeather(false, null, "39.7495", "8.8077", "Leiria", "Portugal");
    }

    if (coords) {
      fetchWeather(true, null, coords.latitude, coords.longitude);
    }
  }, [coords, isGeolocationEnabled]);

  useEffect(() => {
    if (locations && locations.length) {
      locations.forEach((location) =>
        fetchWeather(
          false,
          location.id,
          location.lat,
          location.lon,
          location.name,
          location.country
        )
      );
    }
  }, [locations]);

  const handleDeleteCard = (id) => {
    dispatch(removeLocation(id));

    setLocationsData(() => {
      const indexToDelete = filteredLocationsData.findIndex(
        (el) => el.id === id
      );

      return filteredLocationsData.filter(
        (_, index) => index !== indexToDelete
      );
    });

    setAlert(
      true,
      `You have successfully removed a location`,
      AlertTypes.REMOVE,
      3000
    );
  };

  return (
    <div>
      {alert.isOpen && (
        <Alert alert={alert} closeAlert={closeAlert} timeout={alert.timeout} />
      )}
      <div className="weather-cards_container">
        {filteredLocationsData.map((location) => (
          <WeatherCard
            handleDeleteCard={() => handleDeleteCard(location.id)}
            key={location.name}
            location={location}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
