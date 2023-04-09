import styled from "styled-components";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TableM from "./TableM";
import Widgets from "./Widgets";

const Index = () => {
  return (
    <DashBoard>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="hhr">
          <h4>DASHBOARD</h4>
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
  );
};

export default Index;

const DashBoard = styled.div`
  display: flex;

  .homeContainer {
    flex: 6;
    position: relative;
    overflow: hidden;
    .hhr {
      margin: 1rem 2rem;
      @media (max-width: 768px) {
        margin: 1rem 4rem;
      }
      h4 {
        font-family: "Work Sans";
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;

        color: #213f7d;
      }
    }
    .widgets {
      display: flex;
      flex-wrap: wrap;
      padding: 20px;
      gap: 20px;
      width: 100%;
      overflow: hidden;
    }

    .listContainer {
      -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
      box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
      padding: 20px;
      margin: 20px;
      @media (max-width: 768px) {
        width: 100vw;
        overflow: scroll;
        margin: 0;
      }

      .listTitle {
        font-weight: 500;
        color: gray;
        margin-bottom: 15px;
      }
    }
  }
`;
