const geoApiKey = process.env.REACT_APP_GEO_API;

const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${geoApiKey}`,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

const fetchGeo = (inputData) =>
  fetch(`${GEO_API_URL}/cities?namePrefix=${inputData}`, geoApiOptions);

export { geoApiOptions, GEO_API_URL, fetchGeo };
