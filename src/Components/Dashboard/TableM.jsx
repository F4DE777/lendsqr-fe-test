import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import "./index.scss";
import PersonOffIcon from '@mui/icons-material/PersonOff';
const TableM = () => {
  const [tableData, setTableData] = useState([]);
  const [clickedOpt , setClickedOpt] = useState("");

  const columns = [
    { field: "orgName", headerName: "Organization", width: 300 },
    { field: "userName", headerName: "Username", width: 300 },
    { field: "email", headerName: "Email", width: 300 },
    { field: "phoneNumber", headerName: "Phone Number", width: 300 },
    { field: "createdAt", headerName: "Date Joined", width: 300 },
    // { field: "status", headerName: "Status" },
    // { field: "dots", headerName: "" },
  ];
  useEffect(() => {
    fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);
  const handleClick = (id) => setClickedOpt(id)
  const actionColumn = [
   {
      field: "status",
      headerName: "Status",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <ul className="status">
              <li className="active">Active</li>
              {/* <li className="inactive">Inactive</li>
              <li className="blacklisted">Blacklisted</li> */}
            </ul>
          </div>
        );
      },
    }, {
      field: "action",
      headerName: "",
      width: 50,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <MoreVertIcon  onClick={() => handleClick(params.id)}/>
            <ul  className={clickedOpt === params.id ? "details active" : "details"}>
              <Link to={`/users/${params.id}`}>
                <RemoveRedEyeIcon className="ico" />
                <li>View Details</li>
              </Link>
              <Link>
                <PersonOffIcon className="ico" />
                <li>Blacklist User</li>
              </Link>
              <Link>
                <PersonAddAltIcon className="ico" />
                <li>Activate User</li>
              </Link>
            </ul>
          </div>
        );
      },
    },
  ];
  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        style={{ color: "#213F7D !important" , zIndex:1,}}
        rows={tableData}
        columns={columns.concat(actionColumn)}
        rowsPerPageOptions={[10]}
        pageSize={10}
      />
    </div>
  );
};

export default TableM;
