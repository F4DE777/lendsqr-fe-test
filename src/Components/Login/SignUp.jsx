import { Link } from "react-router-dom";
import CountryDropdown from "country-dropdown-with-flags-for-react";
import validate from "./validateInfo";
import useForm from "./useForm";
import styled from "styled-components";

const SignUp = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <Cover className="form-right page">
      <Link to={"/"} className="previous" />

      <div className="form-content-right">
        <h3>Create your account</h3>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-inputs">
            <input
              className="form-input"
              type="text"
              name="first-name"
              placeholder="First Name"
              value={values.first_name}
              onChange={handleChange}
            />
            {errors.first_name && <p>{errors.first_name}</p>}
          </div>
          <div className="form-inputs">
            <input
              className="form-input"
              type="text"
              name="last-name"
              placeholder="Last Name"
              value={values.last_name}
              onChange={handleChange}
            />
            {errors.last_name && <p>{errors.last_name}</p>}
          </div>
          <div className="form-inputs">
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>

          <CountryDropdown
            id="UNIQUE_ID"
            className="country"
            preferredCountries={["ng", "us"]}
            value=""
            handleChange={(e) => console.log(e.target.value)}
          ></CountryDropdown>

          <div className="form-inputs">
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <span className="agree">
            <input type="checkbox" name="" id="" />
            <p>
              I agree that lendsqr may contact me at the email address or phone
              number above.
            </p>
          </span>
          <Link to={"/dashboard"} className="form-input-btn" type="submit">
            Create Account
          </Link>
          <span className="form-input-login">
            Already have an account? <Link to="/">Sign in</Link>
          </span>
        </form>
      </div>
    </Cover>
  );
};

export default SignUp;

const Cover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .form-content-right {
    position: relative;
    width: fit-content;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px rgb(0 0 0 / 5%);
    border: 1px solid rgba(112, 112, 112, 0.2509803922);
    border-radius: 10px;
    opacity: 1;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    display: flex;
    padding: 20px;
    gap: 1rem;
    animation-duration: 0.5s;
    animation-name: slideupLeft;

    @keyframes slideupLeft {
      from {
        margin-top: 15%;
        margin-right: -15%;
      }

      to {
        margin-top: 0;
        margin-right: 0;
      }
    }

    h3 {
      text-align: left;
      font: normal normal bold 26px/43px Catamaran;
      letter-spacing: 0px;
      color: #191919;
      opacity: 1;
      width: 89%;
      margin: 0;
    }
    .form {
      width: 90%;
      max-height: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-items: center;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin: 0 auto;
      gap: 1rem;
      position: relative;
      .form-inputs {
        margin-bottom: 0.5rem;
        width: 100%;
        position: relative;
        p {
          font-size: 0.8rem;
          margin-top: 0.5rem;
          color: #f00e0e;
        }

        &:nth-child(1) {
          width: 90%;
        }

        &:nth-child(n + 3) {
          grid-column: 1/3;
        }
      }
      .form-label {
        display: inline-block;
        font-size: 0.8rem;
        margin-bottom: 6px;
        color: #fff;
      }

      .country-select {
        grid-column: 1/3 !important;
        box-shadow: 0px 0px 6px #39cdcc00;
        border: 1px solid #7070704d;
        border-radius: 7px;
        opacity: 1;
        height: 2.813rem;

        input {
          outline: 0;
          border: 0;
          width: 100%;
          height: 100%;
          font: normal normal normal 16px/23px Catamaran;

          &::placeholder {
            text-align: left;
            font: normal normal normal 14px/23px Catamaran;
            letter-spacing: 0px;
            color: #191919;
            opacity: 1;
          }
          &:value {
            text-align: left;
            font: normal normal normal 14px/23px Catamaran;
            letter-spacing: 0px;
            color: #191919;
            opacity: 1;
          }
        }
      }

      .agree {
        grid-column: 1/3;
        display: flex;
        align-items: flex-start;

        input {
          border: 1px solid var(--unnamed-color-70707040);
          background: #ffffff 0% 0% no-repeat padding-box;
          border: 1px solid #70707040;
          border-radius: 3px;
          opacity: 1;
        }

        p {
          margin: 0;
          text-align: left;
          font: normal normal normal 12px/19px Catamaran;
          letter-spacing: 0px;
          color: #191919;
          opacity: 0.75;
        }
      }

      .form-input-btn {
        grid-column: 1/3;
        height: 2.813rem;
        border: 1px solid var(--unnamed-color-b2b2b280);
        background: #39cdcc 0% 0% no-repeat padding-box;
        border: 1px solid #b2b2b280;
        border-radius: 10px;
        opacity: 1;
        text-align: center;
        font: normal normal 600 18px/30px Catamaran;
        letter-spacing: 0px;
        color: #ffffff;
        opacity: 1;
        text-align: center;
        align-items: center;
        display: flex;
        justify-content: center;
        text-decoration: none;
      }

      .form-input-login {
        grid-column: 1/3;
        text-align: left;
        font: normal normal normal 16px/27px Catamaran;
        letter-spacing: 0px;
        color: #191919;
        opacity: 0.75;

        a {
          text-align: left;
          font: normal normal normal 16px/27px Catamaran;
          letter-spacing: 0px;
          color: #39cdcc;
          opacity: 1;
        }
      }

      .form-input {
        display: block;
        padding-left: 10px;
        outline: none;
        border-radius: 2px;
        height: 2.813rem;
        width: -webkit-fill-available;
        width: -moz-available;

        background: transparent 0% 0% no-repeat padding-box;
        box-shadow: 0px 0px 6px #39cdcc00;
        border: 1px solid #7070704d;
        border-radius: 10px;
        opacity: 1;

        &::placeholder {
          text-align: left;
          font: normal normal normal 18px/30px Catamaran;
          letter-spacing: 0px;
          color: #191919;
          opacity: 0.5;
        }
      }
    }

    @media screen and (max-width: 1380px) {
      gap: 0.6rem;
      padding: 10px 20px;

      .form {
        gap: 0.8rem;
      }
    }
  }



  .previous{
        display: flex;
        position: fixed;
        transform: translate(30vh,5vw);
        left: 0;
        top: 0;
        gap: .5rem;
        text-decoration: none;
        align-items: flex-end;
        justify-content: center;
        height: 30px;
        width: auto;
        object-fit: contain;

        &::after{
            content: url('../../Assets/lendsqr (1).svg');
            /* // transform: scale(.3); */

        }
        &::before{
            
            content:"";
            background-image: url('../../Assets/Union.png');
            /* // background-size: 10px 20px; */
            display: inline-block;
            width: 3rem; 
            height: 3rem;
            position: absolute;
            background-size: 3rem, 3rem;
            left: -50%;
        }
        @media (max-width: 768px) {

        position: relative;
        transform: translate(0, 0); 
        left: -40px;
        top: 0px;
        }
    }
`;
