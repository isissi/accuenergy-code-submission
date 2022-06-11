import Geocode from "react-geocode";
import React from "react";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
Geocode.setLanguage("en");

const getGeocode = async (location) => {

  const geocode = await Geocode.fromAddress(location)
  .then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      return [lat, lng];

    },
    (error) => {
      console.error("An error occured:", error);
    }
  );

  return geocode;
}

export default getGeocode;