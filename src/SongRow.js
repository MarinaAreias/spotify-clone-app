import React from "react";
import "./SongRow.css";

export default function SongRow({track}){
    return (
        <div className="songRow">
<img  className="songRowAlbum" src= {track.album.images[0].url} alt="" />

<div className="songRowInfo">
    <h1>{track.name}</h1>
    <p>
        {track.artist.map((artist) => artist.name).join(", ")}
        {track.album.name}
    </p>
</div>
        </div>
    );
}