import React, { useEffect, useState } from "react";
import './App.css'
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

export default function App() {
  //the dispatch will be the tool that will make possible to change and update the data
const [{ token }, dispatch] = useDataLayerValue();

//Run code based on a given condition, so the function that is inside the UseEffect Hook
// whenever info variable changes on the url the code will run 
useEffect(() => {
  //set token
  const hash = getTokenFromUrl();
  window.location.hash = "";
  let _token = hash.access_token;

  if (_token) {
     dispatch({
      type: "SET_TOKEN",
      token: token,
    })

    spotify.setAccessToken(_token);
    spotify.getMe().then((user) => {
      dispatch({
        type: "SET_USER",
        user: user, 
      });
    });
  }
 }, []);



  return (
    <div className="app"> {token ? <Player spotify={spotify} /> : <Login />}
  
    </div>
  );
}
