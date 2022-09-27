import React, { useState } from "react";
import classes from "./UserInput.module.css";
import button from "./Button.module.css";
import logout from "./Button.module.css";
import { Dropdown } from "semantic-ui-react";
const UrlInput = (props) => {
  const axios = require("axios");

  const [longUrl, setLongUrl] = useState("");
  const [method, setMethod] = useState("");

  const options = [
    { key: 1, text: "Choice 1", value: 1 },
    { key: 2, text: "Choice 2", value: 2 },
    { key: 3, text: "Choice 3", value: 3 },
  ];

  const geturl = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:8000/longToShort",
        {},
        {
          headers: { Authorization: props.JWT.toString() },
          params: {
            url: longUrl,
            method: method,
          },
        }
      )
      .then((response) => {
        props.onShorten(response.data, longUrl);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const updateLongUrl = (event) => {
    setLongUrl(event.target.value);
  };
  const logoutUser = () => {
    props.onLogout();
  };

  const selectMethod = (event) => {
   setMethod(event.target.value);
  };
  return (
    <React.Fragment>
      <div className={classes.input}>
        <button className={logout.logout} onClick={logoutUser}>
          logout
        </button>
        <h3>Long Url</h3>
        <input value={longUrl} onChange={updateLongUrl} />
        <select className={classes.input} onChange={selectMethod}>
          <option value=""> Select a encoding method </option>
          <option value="base62"> base62 </option>
          <option value="random"> random </option>
        </select>
        <button className={button.button} onClick={geturl}>
          get url
        </button>
      </div>
    </React.Fragment>
  );
};

export default UrlInput;
