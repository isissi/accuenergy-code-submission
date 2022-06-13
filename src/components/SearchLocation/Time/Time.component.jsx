import getTimezone from "../../../helpers/getTimezone";
import { useState, useEffect } from "react";

import "./Time.styles.scss"

const Time = ({ location, error }) => {
  // console.log(location);
  const [time, setTime] = useState(null)
  useEffect(() => {
    if (location.address !== "") {
      getTimezone(location).then(res => setTime({
        timeZoneId: res.data.timeZoneId,
        timeZoneName: res.data.timeZoneName
      }))
    }
  }, [location]);

  const date = new Date().toLocaleString("en-US", { timeZone: Time.timeZoneId })
  return (
    <>
      {time && !error ?
        <p className="time"> Timezone: {time.timeZoneName}, Local time: {date}</p>
        : <p className="time"><br/></p>
      }
    </>
  )
}

export default Time;