import React, { useState, useEffect } from "react";
import Navbar from "../Dashboard/Navbar";
import Sidebar from "../Dashboard/Sidebar";
// import TableM from '../Dashboard/TableM';
import styled from "styled-components";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Prev from "../../Assets/back.png";
const ViewUser = () => {
  const [records, setRecords] = useState([]);

  const location = useLocation();
  const user = location.pathname.split("/")[2];
  // console.log(user);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const getCenters = async () => {
      try {
        const res = await axios.get(
          `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${user}/`,
          { cancelToken: source.token }
        );
        // console.log(res, "res");
        setRecords(res.data);
        // console.log(centers, 'centerss');
      } catch (err) {
        if (axios.isCancel(err)) {
          // console.log("cancelled");
        } else {
          throw err;
        }
      }
    };
    getCenters();
    return () => {
      source.cancel();
    };
  }, []);
  return (
    <DashBoard>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <Link className="previous">
          <img src={Prev} alt="back arrow" className="arrow" />
          <label>Back to Users</label>
        </Link>
        <div className="hhr">
          <h4>User Details</h4>
          <div className="user">
            <button className="blacklist">Blacklist User</button>
            <button className="activate">Activate User</button>
          </div>
        </div>

        <div className="top">
          {/* {records && records.map((dataObj, index) => { */}
          {/* // return ( */}
          <div className="left">
            {/* <h1 className="title"></h1> */}
            <div className="item">
              <div className="details">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <img
                    src={
                      records?.profile?.avatar
                        ? records?.profile?.avatar
                        : '"https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"'
                    }
                    alt=""
                    className="itemImg"
                  />
                  <div>
                    <div className="detailItem">
                      <span className="itemValue">
                        {records?.profile?.firstName}{" "}
                        {records?.profile?.lastName}
                      </span>
                    </div>
                    <div className="subDetailItem">
                      <span className="itemValue">{records?.profile?.bvn}</span>
                    </div>
                  </div>
                </div>
                <div className="userTier">
                  <div>
                    <span>User’s Tier</span>
                  </div>
                </div>
                <div>
                  <div className="detailItem">
                    <span className="itemValue">₦200,000.00</span>
                  </div>
                  <div className="subDetailItem">
                    <span className="itemValue">9912345678/Providus Bank</span>
                  </div>
                </div>
              </div>
            </div>
            <ul className="subRoutes">
              <li className="active">General Details</li>
              <li>Documents</li>
              <li>Bank Details</li>
              <li>Loans</li>
              <li>Savings</li>
              <li>App and System</li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <div className="pInfo">
            <h1 className="title">Personal Information</h1>
            <ul>
              <li>
                <label htmlFor="">full Name</label>
                {records?.profile?.firstName} {records?.profile?.lastName}
              </li>
              <li>
                <label htmlFor="">Phone Number</label>
                {records?.profile?.phoneNumber}
              </li>
              <li>
                <label htmlFor="">Email Address</label>
                {records?.email}
              </li>
              <li>
                <label htmlFor="">Bvn</label>
                {records?.profile?.bvn}
              </li>
              <li>
                <label htmlFor="">Gender</label>
                {records?.profile?.gender}
              </li>
              <li>
                <label htmlFor="">Marital status</label>Single
              </li>
              <li>
                <label htmlFor="">Children</label>None
              </li>
              <li>
                <label htmlFor="">Type of residence</label>Parent’s Apartment
              </li>
            </ul>
          </div>
          <div className="pInfo">
            <h1 className="title">Education and Employment</h1>
            <ul>
              <li>
                <label htmlFor="">level of education</label>
                {records?.education?.level}
              </li>
              <li>
                <label htmlFor="">employment status</label>
                {records?.education?.employmentStatus}
              </li>
              <li>
                <label htmlFor="">sector of employment</label>
                {records?.education?.sector}
              </li>
              <li>
                <label htmlFor="">Duration of employment</label>
                {records?.education?.duration}
              </li>
              <li>
                <label htmlFor="">office email</label>
                {records?.education?.officeEmail}
              </li>
              <li>
                <label htmlFor="">Monthly income</label>{" "}
                {records?.education?.monthlyIncome}
              </li>
              <li>
                <label htmlFor="">loan repayment</label>
                {records?.education?.loanRepayment}
              </li>
            </ul>
          </div>
          <div className="pInfo">
            <h1 className="title">Socials</h1>
            <ul>
              <li>
                <label htmlFor="">Twitter</label>
                {records?.socials?.twitter}
              </li>
              <li>
                <label htmlFor="">Facebook</label>
                {records?.socials?.facebook}
              </li>
              <li>
                <label htmlFor="">Instagram</label>
                {records?.socials?.instagram}
              </li>
            </ul>
          </div>
          <div className="pInfo">
            <h1 className="title">Guarantor</h1>
            <ul>
              <li>
                <label htmlFor="">full Name</label>
                {records?.guarantor?.firstName} {records?.guarantor?.lastName}
              </li>
              <li>
                <label htmlFor="">Phone Number</label>
                {records?.guarantor?.phoneNumber}
              </li>
              <li>
                <label htmlFor="">Email Address</label>
                {records?.guarantor?.address}
              </li>
              <li>
                <label htmlFor="">Relationship</label>
                Sister
              </li>
            </ul>
          </div>
          <div className="pInfo">
            <h1 className="title">{""}</h1>
            <ul>
              <li>
                <label htmlFor="">full Name</label>
                {records?.guarantor?.firstName} {records?.guarantor?.lastName}
              </li>
              <li>
                <label htmlFor="">Phone Number</label>
                {records?.guarantor?.phoneNumber}
              </li>
              <li>
                <label htmlFor="">Email Address</label>
                {records?.guarantor?.address}
              </li>
              <li>
                <label htmlFor="">Relationship</label>
                Sister
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DashBoard>
  );
};

export default ViewUser;

const DashBoard = styled.div`
  display: flex;

  .homeContainer {
    flex: 6;
    position: relative;
    overflow: hidden;
    .previous {
      position: relative;
      display: flex;
      gap: 10px;
      align-items: center;
      text-decoration: none;
      color: #545f7d;
      margin: 40px 0 40px 2rem;
      .arrow {
        height: 30px;
        width: 30px;
        object-fit: contain;
      }
      label {
        font-family: "Work Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #545f7d;
      }

      /* &::before{
        content:"";
        background-image: url('../../Assets/back.png');
        display: inline-block;
        width: 40px; 
        height: 40px;
        background-size: 40px, 40px;
        position:absolute;
        left: 0;
      } */
    }
    .hhr {
      margin: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      h4 {
        font-family: "Work Sans";
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;

        color: #213f7d;
      }

      .user {
        display: flex;
        gap: 1rem;

        button {
          width: 170px;
          height: 40px;
          border-radius: 8px;
          text-align: center;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-family: "Work Sans";
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 16px;
          background-color: #fff;

          &.blacklist {
            border: 1px solid #e4033b;
            color: #e4033b;
          }
          &.activate {
            border: 1px solid #39cdcc;
            color: #39cdcc;
          }
        }
      }
    }

    .top {
      padding: 20px;
      display: flex;
      gap: 20px;

      .left {
        flex: 1;
        height: 210px;
        background: #ffffff;
        border: 1px solid rgba(33, 63, 125, 0.06);
        box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
        border-radius: 4px;
        padding: 20px;
        position: relative;
        @media (max-width: 768px) {
          height: auto;
          padding: 0px;

        }

        .item {
          display: flex;
          gap: 20px;
          align-items: center;
          .itemImg {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
          }

          .details {
            display: flex;
            gap: 5rem;
            align-items: center;
            flex-wrap:wrap;
            @media (max-width: 768px) {
              gap: 1rem;

            }
            .itemTitle {
              margin-bottom: 10px;
              color: #555;
            }

            .detailItem {
              font-family: "Work Sans";
              font-style: normal;
              font-weight: 500;
              font-size: 22px;
              line-height: 26px;
              color: #213f7d;
              flex: 1;
            }

            .subDetailItem {
              font-family: "Work Sans";
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 16px;

              color: #545f7d;
            }

            .userTier {
              border-right: 2px solid rgb(84 95 125 / 29%);
              border-left: 2px solid rgb(84 95 125 / 29%);
              padding: 0 20px;
              height: 5rem;
              align-items: center;
              display:flex ;
              span {
                font-family: "Work Sans";
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 16px;

                color: #545f7d;
              }
            }
          }
        }

        .subRoutes {
          display: flex;
          list-style: none;
          padding: 0;
          justify-content: space-between;
          position: absolute;
          bottom: 0;
          width: 95%;
          margin: 0 auto;
          @media (max-width: 768px) {
            display: none;

          }
          li {
            font-family: "Work Sans";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            text-align: center;
            @media (max-width: 768px) {
            }
            &.active {
              color: #39cdcc;
              border-bottom: 5px solid #39cdcc;
              /* &::before {
                content: "";
                width: 400px;
                height: 1px;
                border: 20px solid #39cdcc;
              } */
            }
          }
        }
      }
    }
    .bottom {
      background: #ffffff;
      border: 1px solid rgba(33, 63, 125, 0.06);
      box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
      border-radius: 4px;
      padding: 20px;
      margin: 10px 20px;
      @media (max-width: 768px) {
        padding: 10px;
      }
      .pInfo {
        border-bottom: 1px solid rgb(33 63 125 / 20%);
        .title {
          font-family: "Work Sans";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          color: #213f7d;
          margin-bottom: 2rem;
        }
        ul {
          list-style: none;
          padding: none;
          display: flex;
          flex-wrap: wrap;
          li {
            font-family: "Work Sans";
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            width: 340px;
            color: rgb(84, 95, 125);
            height: 80px;
            align-items: center;
            display: flex;
            position: relative;
            @media (max-width: 768px) {
              width: 160px;
              overflow:hidden;
            }
            label {
              position: absolute;
              top: 0;
              left: 0;
              font-family: "Work Sans";
              font-style: normal;
              font-weight: 400;
              font-size: 12px;
              line-height: 14px;
              /* identical to box height */

              text-transform: uppercase;

              color: #545f7d;
            }
          }
        }

        &:nth-child(n + 2) {
          margin-top: 2rem;
        }
      }
    }
  }
`;
