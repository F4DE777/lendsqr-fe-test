import "./index.scss";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Avi from "../../Assets/image 4.png";
import Log from "../../Assets/Union.png";
import Logo from "../../Assets/lendsqr (1).svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <TopNav>
      <div className="wrapper">
        <div className="top1">
          <Link to={"/"} className="previous">
            <img src={Log} alt="logo" />
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="search">
          <input type="text" placeholder="Search for anything" />
          <span>
            <SearchOutlinedIcon />
          </span>
        </div>
        <div className="items">
          <div className="item mobile">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>

          <div className="item ">
            <img src={Avi} alt="" className="avatar" />
          </div>
          <div className="item mobile">
            <p>Adedeji</p>
            <ArrowDropDownIcon className="icon" />
          </div>
        </div>
      </div>
    </TopNav>
  );
};

export default Navbar;

const TopNav = styled.div`
  height: 80px;
  border-bottom: 0.5px solid rgb(231, 228, 228);
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #555;

  .wrapper {
    width: 100%;
    padding: 20px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 0 auto;
    @media (max-width: 768px) {
      width: 100vw;
      gap: 3rem;
      padding: 10px;
    }
    .top1 {
      height: 80px;
      display: none;
      align-items: center;
      justify-content: center;
      @media (max-width: 768px) {
        display: flex;
      }
      .previous {
        display: flex;
        gap: 1rem;
        align-items: center;
        img {
          object-fit: contain;
          height: 40px;

          &:first-child {
            height: 35px;
          }
        }
      }
    }
    .search {
      display: flex;
      align-items: center;
      background: #ffffff;
      /* opacity: 0.2; */
      border: 1px solid rgb(33 63 125 / 46%);
      border-radius: 8px;
      @media (max-width: 768px) {
        display: none;
      }
      input {
        border: none;
        outline: none;
        background: transparent;
        height: 40px;
        width: 400px;
        &::placeholder {
          font-size: 12px;
          padding-left: 20px;
        }
      }

      span {
        background-color: #39cdcc;
        border-radius: 0 8px 8px 0;
        width: 40%;
        height: 40px;
        justify-content: center;
        display: flex;
        align-items: center;
        svg {
          color: #fff;
          font-size: 17px;
        }
      }
    }

    .items {
      display: flex;
      align-items: center;

      .item {
        display: flex;
        align-items: center;
        margin-right: 20px;
        position: relative;
        @media (max-width: 768px) {
        &.mobile{
          display:none;
        }
      }
        .icon {
          font-size: 40px;
        }

        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }

        .counter {
          width: 20px;
          height: 20px;
          background-color: red;
          border-radius: 50%;
          color: white;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          font-size: 10px;
          font-weight: bold;
          position: absolute;
          top: 20px;
          right: -5px;
        }

        .not-counter {
          width: 15px;
          height: 15px;
          background-color: red;
          border-radius: 50%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: bold;
          position: absolute;
          top: -5px;
          right: -5px;
        }

        p {
          color: #213f7d;
          font-family: "Work Sans";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
        }
      }
    }
  }
`;
