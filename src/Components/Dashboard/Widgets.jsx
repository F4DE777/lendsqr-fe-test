import styled from "styled-components";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
const Widgets = ({ type }) => {
  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        link: "2,453",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "#DF18FF",
              backgroundColor: "rgb(223 24 255 / 13%)",
            }}
          />
        ),
      };

      break;
    case "active-user":
      data = {
        title: " ACTIVE USERS",
        link: "2,453",
        icon: (
          <GroupsIcon
            className="icon"
            style={{
              color: "#5718FF",
              backgroundColor: "rgb(87 24 255 / 26%)",
            }}
          />
        ),
      };

      break;
    case "users-with-loan":
      data = {
        title: "USERS WITH LOANS",
        link: "12,453",
        icon: (
          <FileOpenIcon
            className="icon"
            style={{
              color: "#F55F44",
              backgroundColor: "rgb(245 95 68 / 20%)",
            }}
          />
        ),
      };

      break;
    case "user-with-savings":
      data = {
        title: "USERS WITH SAVINGS",
        link: "102,453",
        icon: (
          <StackedBarChartIcon
            className="icon"
            style={{
              color: "#FF3366",
              backgroundColor: "rgb(255 51 102 / 27%)",
            }}
          />
        ),
      };

      break;
    default:
      break;
  }
  return (
    <Widget>
      <div className="top">{data.icon}</div>
      <div className="bottom">
        <div className="people">{data.title}</div>
        <div className="count">{data.link}</div>
      </div>
    </Widget>
  );
};

export default Widgets;

const Widget = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  padding: 10px;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  border-radius: 10px;
  height: 160px;
  flex-direction: column;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    min-width: 150px;
  }
  .top,
  .bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .people {
      font-weight: bold;
      font-size: 14px;
      color: rgb(160, 160, 160);
      line-height: 2;
    }

    .count {
      font-size: 28px;
      font-weight: 300;
      color: #213f7d;
      font-family: "Work Sans";
      font-style: normal;
      font-weight: 600;
    }

    .link {
      width: max-content;
      font-size: 12px;
      border-bottom: 1px solid gray;
    }

    .percentage {
      display: flex;
      align-items: center;
      font-size: 14px;

      &.positive {
        color: green;
      }
      &.negative {
        color: red;
      }
    }

    .icon {
      font-size: 40px;
      padding: 5px;
      border-radius: 50%;
      align-self: flex-start;
    }
  }
`;
