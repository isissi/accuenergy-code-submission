import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import React from 'react';

const Map = ({location, searchHistory}) => {
  const {lat, lng} = location;
  const history = searchHistory.slice(2);

  const containerStyle = {
    width: '60vw',
    height: '70vh'
  };

  const center = {
    lat: lat || 43.6532,
    lng: lng || -79.3832
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
      options={options}
    >
    {history.map((location, index) => {
        return (
          <Marker
            key={index}
            position={{ lat: location.lat, lng: location.lng }}   
          />
        )
    })}
    </GoogleMap>
  ) : <></>
}

export default Map;