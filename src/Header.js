import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from "@material-ui/core";
import {useDataLayerValue } from "./DataLayer";

export default function Header(){
    
    const [{ user }, dispatch] = useDataLayerValue();
    return(
        <div className="header">
<div className="headerLeft">
    <SearchIcon/>

    <input placeholder="Search for Artists, Songs or Podcasts" 
    type="text" />
</div>

<div className="headerRight">
    <Avatar src={user?.images[0]?.url} alt={user} />
    <h4>{user?.display_name}</h4>
</div>
        </div>
    );
}