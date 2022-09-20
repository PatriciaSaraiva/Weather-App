import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";

import { addLocation } from "../../features/locations/locationsSlice";
import { fetchGeo } from "../../services/geoApi";

import "./Search.css";

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState(null);

  const loadOptions = (inputData) => {
    return fetchGeo(inputData)
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: [city.latitude, city.longitude, city.name, city.country],
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  const handleOnChange = (searchData) => {
    const [lat, lon, name, country] = searchData.value;

    setSearch(searchData);
    dispatch(addLocation({ id: nanoid(), lat, lon, name, country }));
  };

  return (
    <>
      <AsyncPaginate
        className="search-bar_container"
        placeholder="Search Location"
        debounceTimeout={500}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </>
  );
};

export default Search;
