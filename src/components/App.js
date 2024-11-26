
import React, { useState } from "react";
import './../styles/App.css';
import Login from "./Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = ()=>{
    setIsLoggedIn(true);
  }
  console.log(isLoggedIn)
  return (
    <div>
        <Login isLoggedIn={isLoggedIn} onLogin={handleLogin}/>
    </div>
  )
}

export default App
