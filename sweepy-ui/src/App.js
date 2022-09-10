import UrlInput from "./input/UrlInput";
import UrlList from "./input/UrlList/UrlList";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [shortUrl, setShortUrl] = useState([]);

  const addShortUrl = (shortUrl) => {
    setShortUrl((prev) => {
      return [...prev, { url: shortUrl, id: Math.random().toString() }];
    });
  };
  return (
    <React.Fragment>
      <UrlInput onShorten={addShortUrl} />
      <UrlList url={shortUrl} />
    </React.Fragment>
  );
}

export default App;
