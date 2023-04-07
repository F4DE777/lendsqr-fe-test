import "./Index.scss";
import { Link } from "react-router-dom";
import Login from "./Login";
import Illustration from "../../Assets/pablo-sign-in 1.svg";
const Index = () => {
  return (
    <div className="container">
      <Link to={"/"} className="previous"/>
      <div className="cover-sign">
        <div className="started">
          <img src={Illustration} alt="" />
        </div>
        <Login />
      </div>
    </div>
  );
};

export default Index;
