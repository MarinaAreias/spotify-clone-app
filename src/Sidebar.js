import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from "./DataLayer";


export default function Sidebar(){
    

    const [{ playlists },dispatched] = useDataLayerValue()
    return (
        <div className="sidebar">
            <img
            className="sidebarLogo"
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
            alt="" />

            <SidebarOption Icon={HomeIcon} title="Home"/>
            <SidebarOption Icon={SearchIcon} title="Search"/>
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>
            
            <br/>
            <strong className="sidebarTitle"> PLAYLISTS </strong> 
            <hr />

            {playlists?.items?.map ((playlists) => (
              <SidebarOption  title={playlists.name}/> 
             ))};
             
        </div>
    )
}