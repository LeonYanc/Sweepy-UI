import UrlInput from "./input/UrlInput";
import UrlList from "./input/UrlList/UrlList";
import "./App.css";
import React, { useState } from "react";
import Login from "./input/Login/Login";
import RegistrationForm from "./input/Login/RegistrationForm";

function App() {
  const [shortUrl, setShortUrl] = useState([]);
  const [LoggedIn, setLoggedIn] = useState(false);
  const [register, setRegister] = useState(false);
  const [JWT, setJWT] = useState("");

  const addShortUrl = (shortUrl, longUrl) => {
    setShortUrl((prev) => {
      return [
        ...prev,
        { shortUrl: shortUrl, longUrl: longUrl, id: Math.random().toString() },
      ];
    });
  };

  const logout = () => {
    setLoggedIn(false);
  }

  const login = (JWT) => {
  setLoggedIn(true);
  setJWT(JWT);
  console.log(JWT);
  
  };


  const registerUser = () => {
  setRegister(true);
  
  };

  const toLogin = () => {
    setRegister(false);
  }

  const toRegister = () => {
    setRegister(true);
  }

  return (
    <div className="App">
      {(!LoggedIn && !register)&& <Login onLogin={login} onToRegister={toRegister} />}
      {(!LoggedIn && register)&& <RegistrationForm onRegister={registerUser} onToLogin={toLogin}/>  }    
      {LoggedIn && <UrlInput onShorten={addShortUrl} JWT={JWT} onLogout={logout}/>}
      {LoggedIn && <UrlList url={shortUrl} JWT={JWT}/>}
    </div>
  );
}

export default App;
