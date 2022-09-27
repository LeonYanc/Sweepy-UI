import React, { useState } from "react";
import axios from "axios";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const updateUsername = (event) => {
    setUsername(event.target.value);
  };

  const updatePassword = (event) => {
    setPassword(event.target.value);
  };

  const base64 = require("base-64");

  const login = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:8000/login",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            Authorization: "Basic " + base64.encode(username + ":" + password),
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          props.onLogin(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toRegister = (event) => {
    props.onToRegister();
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card">
            <h2 className="card-title text-center">Login</h2>
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
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <button className="btn btn-third" onClick={toRegister}>
                    Register
                  </button>
                  <button className="btn btn-primary" onClick={login}>
                    Login{" "}
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

export default Register;
