import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  return (
    <Cover>
      <div className="card-cover">
        {/* <img src={Logo} alt="logo" /> */}
        <div className="card-content">
          <h3>Welcome!</h3>
          <p>Enter details to login.</p>
          <form className="form" noValidate>
            <div className="form-inputs">
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="form-inputs">
              <input
                className="form-input"
                type="password"
                name="password"
                placeholder="Password"
              />
              <Link className="f-pass" to={"/forgot-password"}>
                Forgot Password
              </Link>
            </div>
            <button className="form-input-btn" type="submit">
              Log in
            </button>
            <span className="form-input-login">
              Don’t have an account? <Link to="/dashboard">Sign up</Link>
            </span>
          </form>
        </div>
      </div>
    </Cover>
  );
};

export default Login;

const Cover = styled.div`
  .card-content {
    background-color: #fff;
    /* box-shadow: 0px 3px 6px #0000000D; */
    height: 100%;
    width: 80%;
    padding: 3.125rem;
    /* border: 1px solid rgba(0, 0, 0, 0.144); */
    /* border-radius: 20px; */

    h3 {
      font-family: "Avenir Next";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 55px;
      letter-spacing: -0.04em;

      color: #213f7d;
    }
    p {
      font-family: "Avenir Next";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 27px;
      margin-bottom:3rem;
    }
    .form {
      height: 80%;
      display: flex;
      flex-direction: column;
      gap: 3rem;

      .form-inputs {
        .f-pass {
          letter-spacing: 0px;
          color: #39cdcc;
          opacity: 1;
          text-decoration: none;
          float: left;
          font-size: 14px;
        }

        .form-input {
          width: 97%;
          height: 2.813rem;
          box-shadow: 0px 0px 6px #1899d700;
          padding-left: 10px;
          background: #ffffff;
          border: 2px solid rgba(84, 95, 125, 0.15);
          border-radius: 5px;

          &::placeholder {
            text-align: left;
            letter-spacing: 0px;
            color: #191919;
            opacity: 0.5;
            font-family: "Avenir Next";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            color: #545f7d;
            opacity: 0.6;
          }
        }
      }
      .form-input-btn {
        width: 100%;
        height: 2.813rem;
        outline: 0;
        background: #39cdcc 0% 0% no-repeat padding-box;
        border: 1px solid #39cdcc;
        opacity: 1;
        color: #fff;
        font: normal normal 600 19px/27px;
      }

      .form-input-login {
        height: 2.813rem;
        text-align: left;
        font: normal normal normal 14px/23px;
        letter-spacing: 0px;
        color: #191919;
        opacity: 0.75;

        a {
          text-align: left;
          font: normal normal normal 14px/23px;
          letter-spacing: 0px;
          color: #39cdcc;
          opacity: 1;
          text-decoration: none;
        }
      }
    }
  }
`;
