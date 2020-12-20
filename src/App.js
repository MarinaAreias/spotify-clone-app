import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import Player from "./Player";
import SpotifyWebApi from "spotify-web-api-js";
import {useDataLayerValue} from "./DataLayer";


const spotify = new SpotifyWebApi();

export default function App(){
 
  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(() => {
const hash = getTokenFromUrl();
window.location.hash = "";
const _token = hash.access_token;

if (_token) {
  dispatch({
    type: "SET_TOKEN",
    token: token,
  })


spotify.setAccessToken(_token);
spotify.getMe().then((user) => {
  dispatch({
    type: "SET_USER",
    user: user
  });
});

 spotify.getUserPlaylists().then((playlists) => {
 dispatch({
   type:"SET_PLAYLISTS",
   playlists: playlists,
 });
});

spotify.getPlaylist('37i9dQZEVXcGE3bYuPUwd6?si=FFY51lL3QUK21r_TYY14RQ').then(response => {
  dispatch({
    type: "SET_DISCOVER_WEEKLY",
    discover_weekly: response,
  });
});

 };

  }, []);

  return (
    <div className="app">
      
      {token ?  <Player /> : <Login/> }
      

<Login/>
    </div>
  );
}