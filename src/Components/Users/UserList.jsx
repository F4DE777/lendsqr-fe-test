import React from 'react'
import Navbar from '../Dashboard/Navbar';
import Sidebar from '../Dashboard/Sidebar';
// import Widgets from '../Dashboard/Widgets';
import styled from "styled-components";
import Widgets from '../Dashboard/Widgets';
import TableM from '../Dashboard/TableM';

const UserList = () => {
  return (
    <DashBoard>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="hhr">
          <h4>User Details</h4>
        </div>
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="active-user" />
          <Widgets type="users-with-loan" />
          <Widgets type="user-with-savings" />
        </div>
        <div className="listContainer">
          <TableM />
        </div>
      </div>
    </DashBoard>
  )
}

export default UserList


const DashBoard = styled.div`
  display: flex;

  .homeContainer {
    flex: 6;
    .hhr {
      margin: 1rem 2rem;
      h4 {
        font-family: "Work Sans";
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;

        color: #213f7d;
      }
    }
    .widgets,
    .charts {
      display: flex;
      padding: 20px;
      gap: 20px;
    }

    .charts {
      padding: 5px 20px;
    }

    .listContainer {
      -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
      box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
      padding: 20px;
      margin: 20px;

      .listTitle {
        font-weight: 500;
        color: gray;
        margin-bottom: 15px;
      }
    }
  }
`;