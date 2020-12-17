import React, { useEffect, useState } from "react";
import './App.css'
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";



function App() {

  const [token, setToken] = useState(null); 

//Run code based on a given condition, so the function that is inside the UseEffect Hook
// whenever info variable changes on the url the code will run 
useEffect(() => {
  const hash = getTokenFromUrl();
  window.location.hash ="";
  const _token = hash.access_token;

  if (_token){
    setToken(_token)
  }

 }, []);


  return (
    <div className="app">
      {
        token ? (
         <h1>i am logged in</h1>
        ) : (
         <Login />
        )
      }
  
    </div>
  );
}

export default App;
