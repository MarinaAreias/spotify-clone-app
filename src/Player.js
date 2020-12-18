import React from "react";
import "./Player.css"; 
import Sidebar from "./Sidebar";
import Body from "./Body";

export default function Player({spotify}){
    return(
        <div className="player">
            <div className="playerBody">
                <Sidebar />
                <Body/>
    

            </div>
                        
        </div>
    )
}