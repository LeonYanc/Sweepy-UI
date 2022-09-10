import React, { useState } from "react";
import classes from "./UserInput.module.css"
import button from "./Button.module.css"


const UrlInput = (props) => {
  const axios = require("axios");

  const [longUrl, setLongUrl] = useState("");
  const [method, setMethod] = useState("");

  const geturl = (event) => {
    event.preventDefault();
    axios.post(
      "http://localhost:8000/longToShort",
      {},
      {
        params: {
          url: longUrl,
          method: method,
        }
      }
    )
    .then(response => {
      props.onShorten(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
    
  }
  const updateLongUrl = (event) => {
    setLongUrl(event.target.value);
  }
  const updateMethod = (event) => {
    setMethod(event.target.value);
  }
  return (
    <div className={classes.input}>
      <h3>Long Url</h3>
      <input  value={longUrl} onChange={updateLongUrl}/>
      <h3>Encoding Method</h3>
      <input  value={method} onChange={updateMethod}/>
      <button className ={button.button} onClick={geturl}>get url</button>
    </div>
  );
};

export default UrlInput;
