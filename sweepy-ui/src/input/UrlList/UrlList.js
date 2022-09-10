import React from 'react';

import classes from './UrlList.module.css';

const UrlList = (props) => {
  return (
    <div className={classes.users}>
      <ul>
        {props.url.map((url) => (
          <li key={url.id}>
            <h2><a href={"http://localhost:8000/goto?url="+url.url} target="_blank">http://www.sweepy.com/{url.url}</a></h2> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UrlList;
