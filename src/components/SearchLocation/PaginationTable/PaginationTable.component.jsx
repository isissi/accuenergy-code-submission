import { Table, Button } from 'antd';
import React, { useState } from 'react';

import "./PaginationTable.styles.scss"

const columns = [
  {
    title: 'Address',
    dataIndex: 'address',
    render: (text) => <a>{text}</a>,
  }
];

const PaginationTable = ({searchHistory, setSeachHistory}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const data = searchHistory.filter(history => history.address !== '').map((history, index) => {return {address: history.address, key: index}});

  const hasSelected = selectedRowKeys.length > 0;

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys) => {
      setSelectedRowKeys(newSelectedRowKeys);
    }
  };

  const onDelete = () => {
    let filteredArr = []
    let historyData = searchHistory.filter(history => history.address !== '');
    
    for (let i = 0; i < historyData.length; i ++) {
      if (!selectedRowKeys.includes(i)) {
        filteredArr.push(historyData[i]);
      }
    }

    setSeachHistory(filteredArr);
    setSelectedRowKeys([]);
  }

  const deleteAll = () => {
    setSeachHistory([]);
    setSelectedRowKeys([]);
  }

  return (
    <div className="table-container">
      <div className='delete-button-container'>
        <Button type="primary" disabled={!hasSelected} onClick={onDelete}> Delete </Button>
        <Button type="primary" onClick={deleteAll}> Delete All </Button>
      </div>

      <Table
      pagination={{pageSize: 10}}
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
      {/* {searchHistory.map((location, index) => {
        return (
          <p key={index}>{location.address}</p>
        )
      })} */}
    </div>
  )
}

export default PaginationTable;