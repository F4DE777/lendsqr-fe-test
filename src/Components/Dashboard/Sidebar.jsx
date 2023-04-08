import "./index.scss";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HouseIcon from "@mui/icons-material/House";
import GroupsIcon from "@mui/icons-material/Groups";
import PaidIcon from "@mui/icons-material/Paid";
import HandshakeIcon from "@mui/icons-material/Handshake";
import WashIcon from "@mui/icons-material/Wash";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import SavingsIcon from "@mui/icons-material/Savings";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TollIcon from "@mui/icons-material/Toll";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DevicesFoldIcon from "@mui/icons-material/DevicesFold";
import Log from "../../Assets/Union.png";
import Logo from "../../Assets/lendsqr (1).svg";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
const Sidebar = () => {
  return (
    <SideNav className="">
      <div className="top">
        <Link to={"/"} className="previous">
          <img src={Log} alt="logo" />
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li className="switch">
            <BusinessCenterIcon className="icon" />
            <span>Switch Organization</span>
            <ExpandMoreIcon className="icon" />
          </li>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <li>
              <HouseIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">CUSTOMERS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <GroupIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <GroupsIcon className="icon" />
              <span>Guarantors</span>
            </li>
          </Link>
          <li>
            <PaidIcon className="icon" />
            <span>Loans</span>
          </li>
          <li>
            <HandshakeIcon className="icon" />
            <span>Decision Models</span>
          </li>
          <li>
            <SavingsIcon className="icon" />
            <span>Savings</span>
          </li>
          <li>
            <WashIcon className="icon" />
            <span>Loan Requests</span>
          </li>
          <li>
            <PersonRemoveIcon className="icon" />
            <span>Whitelist</span>
          </li>
          <li>
            <GroupAddIcon className="icon" />
            <span>Karma</span>
          </li>
          <p className="title">BUSINESSES</p>
          <li>
            <BusinessCenterIcon className="icon" />
            <span>Organization</span>
          </li>
          <li>
            <WashIcon className="icon" />
            <span>Loan Products</span>
          </li>
          <li>
            <AccountBalanceIcon className="icon" />
            <span>Savings Products</span>
          </li>
          <li>
            <TollIcon className="icon" />
            <span>Fees and Charges</span>
          </li>
          <li>
            <ReceiptLongIcon className="icon" />
            <span>Transactions</span>
          </li>
          <li>
            <BrightnessLowIcon className="icon" />
            <span>Services</span>
          </li>
          <li>
            <ManageAccountsIcon className="icon" />
            <span>Service Account</span>
          </li>
          <li>
            <DevicesFoldIcon className="icon" />
            <span>Settlements</span>
          </li>
          <li>
            <AssessmentIcon className="icon" />
            <span>Reports</span>
          </li>
          <p className="title">SETTINGS</p>
          <li>
            {/* <SettingsSystemDaydreamOutlinedIcon className="icon" /> */}
            <span>Preferences</span>
          </li>
          <li>
            {/* <PsychologyOutlinedIcon className="icon" /> */}
            <span>Fees and Pricing</span>
          </li>
          <li>
            {/* <SettingsApplicationsIcon className="icon" /> */}
            <span>Audit Logs</span>
          </li>
          <li>
            {/* <SettingsApplicationsIcon className="icon" /> */}
            <span>Systems Messages</span>
          </li>
          <p className="title">USER</p>
          {/* <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li> */}
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
        <p className="version">v1.2.0</p>
      </div>
    </SideNav>
  );
};

export default Sidebar;

const SideNav = styled.div`
  flex: 1;
  border-right: 0.5px solid rgb(230, 227, 227);
  min-height: 100vh;
  background-color: white;
  position: relative;

  @media (max-width: 768px) {
    position: absolute;
    left:-400px ;


    &.active{
      left:0 ;
    }
  }
  .top {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    .previous{
      display:flex;
      gap:1rem;
      align-items:center;
      img{
        object-fit:contain;
        height:40px ;

        &:first-child{
          height:35px ;
        }
      }
    }
  }

  hr {
    height: 0;
    border: 0.5px solid rgb(230, 227, 227);
  }

  .center {
    padding-left: 10px;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      .title {
        font-size: 10px;
        font-weight: bold;
        color: #999;
        margin-top: 15px;
        margin-bottom: 5px;
      }

      li {
        display: flex;
        align-items: center;
        padding: 5px;
        cursor: pointer;
        color: #213f7d;
        position: relative;
        line-height: 2;
        &:hover {
          background-color: rgb(57 205 204 / 38%);

          &::before {
            content: " ";
            color: rgb(57, 205, 204);
            height: 100%;
            width: 0px;
            left: -3px;
            position: absolute;
            z-index: 999;
            border: 3px solid #39cdcc;
          }
        }

        .icon {
          font-size: 18px;
          color: #213f7d;
        }

        span {
          font-size: 18px;
          /* font-weight: 600; */
          color: #213f7d;
          margin-left: 10px;
        }
      }
      .switch {
        height: 4rem;
      }
    }

    .version {
      font-family: "Work Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 14px;
      position: absolute;
      color: #213f7d;
      bottom: 0;
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    margin: 10px;

    .colorOption {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      border: 1px solid #7451f8;
      cursor: pointer;
      margin: 5px;

      &:nth-child(1) {
        background-color: whitesmoke;
      }
      &:nth-child(2) {
        background-color: #333;
      }
      &:nth-child(3) {
        background-color: darkblue;
      }
    }
  }
`;

export const ItemCenter = [
  {
    Icon: "",
    title: "Users",
    path: "/users",
  },
  {
    Icon: "",
    title: "Guarantors",
    path: "",
  },
];
