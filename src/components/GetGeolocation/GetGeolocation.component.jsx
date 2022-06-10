import { Button } from "antd";
import Skeleton from 'react-loading-skeleton'
import { useState } from "react";

import "./GetGeolocation.styles.scss";
import "antd/dist/antd.css";
import 'react-loading-skeleton/dist/skeleton.css'

const GetGeolocation = (props) => {
  const { geolocation, setGeolocation } = props;

  const [ buttonClicked, setButtonClicked ] = useState(false);

  const getCordinate = () => {
    setButtonClicked(true);

    navigator.geolocation.getCurrentPosition(function(position) {
      setGeolocation({latitude: position.coords.latitude, longitude: position.coords.longitude})
    });
  }

  const cordinate = !geolocation ? <Skeleton width={450} height={30}/> : `Latitude: ` + geolocation.latitude + `, Longitude: ` + geolocation.longitude;

  return (
    <div id="geo-button-container">
      {!buttonClicked 
        ?
        <h2>Get your geolocation from browser ↓</h2> 
        :
        <h2>{cordinate}</h2> 
      }
      
      <Button type="primary" id="geo-button" onClick={getCordinate}>
        Get Geolocation
      </Button>
    </div>
  )
}

export default GetGeolocation;