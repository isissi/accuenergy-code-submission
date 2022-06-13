import axios from "axios";

const getTimezone = (location) => {

  let promise = axios.get(`https://maps.googleapis.com/maps/api/timezone/json?location=${location.lat}%2C${location.lng}&timestamp=1331161200&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`);

  return(
  promise
  .then(res => {return res})
  .catch((error) => console.log("error: " + error))
  )
}

export default getTimezone;