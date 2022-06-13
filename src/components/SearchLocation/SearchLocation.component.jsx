import Map from "./Map/Map.component";
import PaginationTable from "./PaginationTable/PaginationTable.component";
import Time from "./Time/Time.component";

import { Input, Space } from "antd";
import { useEffect, useState } from "react";

import "./SearchLocation.styles.scss"
import "antd/dist/antd.min.css";

import getGeocode from "../../helpers/getGeoCode";

const SearchLocation = () => {
  const [ location, setLocation ] = useState({address:"", lat: null, lng: null});
  const [ searchHistory, setSeachHistory ] = useState([]);
  const [ error, setError ] = useState(false)

  const { Search } = Input;

  useEffect(() => {
    setSeachHistory(prev => [...prev, location]);
    }, [location]);

  const onSearch = async (value) => {
    const returnedCornidate = await getGeocode(value);
    if (!returnedCornidate) {
      setError(true); 
    } else {
      setLocation({address: value, lat: returnedCornidate[0], lng: returnedCornidate[1]});
      setError(false);
    }

  };

  return (
    <div className="search-location-container">
      <Space direction="vertical">
        <Search
        placeholder="Search a location"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        style={{width: "500px"}}
      />
      <p style={{visibility: error ? "visible" : "hidden"}}>Please provide a valid location</p>
      </Space>
      <Time location={location} error={error} />
      <div className="map-table-container">
        <Map location={location} searchHistory={searchHistory}/>
        <PaginationTable searchHistory={searchHistory} setSeachHistory={setSeachHistory}/>
      </div>
    </div>
  )
}

export default SearchLocation;