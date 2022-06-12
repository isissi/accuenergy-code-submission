import Geocode from "react-geocode";

const getAddress = (geolocation) => {
  return(
  Geocode.fromLatLng(geolocation.latitude, geolocation.longitude).then(
    (response) => {
      const address = response.results[0].formatted_address;
      console.log(geolocation.latitude);
      let city, state, country;
      for (let i = 0; i < response.results[0].address_components.length; i++) {
        for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
          switch (response.results[0].address_components[i].types[j]) {
            case "locality":
              city = response.results[0].address_components[i].long_name;
              break;
            case "administrative_area_level_1":
              state = response.results[0].address_components[i].long_name;
              break;
            case "country":
              country = response.results[0].address_components[i].long_name;
              break;
          }
        }
      }
      console.log('address' + address);
      return address;
    },
    (error) => {
      console.error(error);
    }
  )
  )
}

export default getAddress;