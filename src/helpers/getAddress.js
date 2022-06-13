import Geocode from "react-geocode";

const getAddress = (geolocation) => {
  return(
  //get address by cordinate
  Geocode.fromLatLng(geolocation.latitude, geolocation.longitude).then(
    (response) => {
      const address = response.results[0].formatted_address;

      return address;
    },
    (error) => {
      console.error(error);
    }
  )
  )
}

export default getAddress;