import React from "react";
import "./Player.css"; 
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

export default function Player({spotify}){
    return(
        <div className="player">
            <div className="playerBody">
                <Sidebar />
                <Body spotify={spotify}/>
    

            </div>
                   <Footer/>     
        </div>
    )
}