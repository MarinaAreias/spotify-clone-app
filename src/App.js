import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import {useDataLayerValue } from "./DataLayer";
import Player from "./Player";
import { getTokenFromResponse } from "./spotify";
import "./App.css";
import Login from "./Login";

const spotify = new SpotifyWebApi();

export default function App() {
//the dispatch will be the tool that will make possible to change and update the data

// eslint-disable-next-line
  const [ {token}, dispatch] = useDataLayerValue();
//Run code based on a given condition, so the function that is inside the UseEffect Hook
// whenever info variable changes on the url the code will run 

  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.getPlaylist("37i9dQZEVXcGE3bYuPUwd6?si=xaF7HzgAQoCu023WIOEF9Q").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    
    }
  }, [token, dispatch]);

  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
}

