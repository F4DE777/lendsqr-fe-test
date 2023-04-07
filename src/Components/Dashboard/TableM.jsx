import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./index.scss";

const TableM = () => {
  const [tableData, setTableData] = useState([]);



  const columns = [
    { field: 'orgName', headerName: 'Organization', width: 300  },
    { field: 'userName', headerName: 'Username', width: 300 },
    { field: 'email', headerName: 'Email', width: 300 },
    { field: 'phoneNumber', headerName: 'Phone Number', width: 300 },
    { field: 'createdAt', headerName: 'Date Joined', width: 300 },
    { field: 'status', headerName: 'Status',  },
    { field: 'dots', headerName: '',  },

  ]
  useEffect(() => {
    fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);
  // console.log(tableData);

  return (
    <div style={{ height: 700, width: '100%', }}>
      <DataGrid  enableColumnMenu  style={{color:'#213F7D !important'}} title="Employee Data" rows={tableData} columns={columns} pageSize={12} />
    </div>
  );
};

export default TableM;
