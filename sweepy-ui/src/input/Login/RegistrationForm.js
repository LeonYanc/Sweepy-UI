import React, { useState } from "react";
import axios from "axios";
import "./RegistrationForm.module.css";

const RegistrationForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const registerNew = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/signup", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateUsername = (event) => {
    setUsername(event.target.value);
  };

  const updatePassword = (event) => {
    setPassword(event.target.value);
  };

  const updateConfirmedPassword = (event) => {
    setConfirmedPassword(event.target.value);
  };

  const toLogin = (event) => {
    event.preventDefault();
    props.onToLogin();
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card">
            <h2 className="card-title text-center">Register</h2>
            <div className="card-body py-md-4">
              <form _lpchecked="1">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Username"
                    onChange={updateUsername}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    onChange={updatePassword}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="confirm-password"
                    placeholder="confirm-password"
                    onChange={updateConfirmedPassword}
                  />
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <button className="btn btn-third" onClick={toLogin}>
                    Login
                  </button>
                  <button className="btn btn-primary" onClick={registerNew}>
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
