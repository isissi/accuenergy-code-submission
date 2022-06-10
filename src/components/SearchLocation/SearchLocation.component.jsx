import { Input, Space } from "antd";
import Map from "./Map/Map.component";
import PaginationTable from "./PaginationTable/PaginationTable.component";

import "./SearchLocation.styles.scss"
import "antd/dist/antd.css";
import { useState } from "react";

const SearchLocation = () => {
  const [ location, setLocation ] = useState(null);
  const [ searchHistory, setSeachHistory ] = useState([]);

  const { Search } = Input;
  const onSearch = (value) => {
    setLocation(value);
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
      </Space>
      <div className="map-table-container">
        <Map />
        <PaginationTable />
      </div>
    </div>
  )
}

export default SearchLocation;