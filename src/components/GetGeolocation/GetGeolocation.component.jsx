import { Button } from "antd";
import Skeleton from 'react-loading-skeleton'
import { useEffect, useState } from "react";

import getAddress from "../../helpers/getAddress";

import "./GetGeolocation.styles.scss";
import "antd/dist/antd.css";
import 'react-loading-skeleton/dist/skeleton.css'

const GetGeolocation = () => {
  const [ geolocation, setGeolocation ] = useState(null);
  const [ address, setAddress ] = useState(null);

  const [ buttonClicked, setButtonClicked ] = useState(false);

  useEffect(() => {
    if(geolocation!==null){
      getAddress(geolocation).then((res)=>setAddress(res))
    }
    }, [geolocation]);


  const cordinate = !address ? <Skeleton width={500} height={30}/> : "Laitude: " + geolocation.latitude + ", Longitude: " + geolocation.latitude;

  const displayAddress = !address ? <Skeleton width={500} height={30}/> : 'Your address: ' + address;

  const onClick = () => {
    setButtonClicked(true);
      //get cordinate from browser, & update te geolocation
      navigator.geolocation.getCurrentPosition(function(position) {
      setGeolocation({latitude: position.coords.latitude, longitude:position.coords.longitude});
      })
  }

  return (
    <div id="geo-button-container">
      {!buttonClicked 
        ?
        <h2>Get your geolocation from browser <br/> Click here↓</h2> 
        :
        <>
          <h2>{cordinate}</h2> 
          <h2>{displayAddress}</h2>
        </>
      }
      
      <Button type="primary" id="geo-button" onClick={onClick}>
        Get Geolocation
      </Button>
    </div>
  )
}

export default GetGeolocation;