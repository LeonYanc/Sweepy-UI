import React from "react";

import classes from "./UrlList.module.css";
import button from "./Button.module.css";

const UrlList = (props) => {
  return (
    <div className={classes.users}>
      <ul>
        {props.url.map((url) => (
          <li key={url.id}>
            <h2>
              {url.longUrl} has been shortened to{" "}
              <a
                href={"http://localhost:8000/goto?url=" + url.shortUrl}
                target="_blank"
              >
                http://www.sweepy.com/{url.shortUrl}
              </a>
            </h2>
            <button
              className={button.button}
              onClick={() =>
                navigator.clipboard.writeText(
                  "http://localhost:8000/goto?url=" + url.shortUrl
                )
              }
            >
              Copy shortUrl
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UrlList;
