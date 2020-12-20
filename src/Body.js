import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import { PlayCircleFilled } from "@material-ui/icons";
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from "./SongRow";


export default function Body(spotify){

    
    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    return (
        <div  className="body">
            <Header spotify={spotify}/>

            <div className="bodyInfo">
                <img src={discover_weekly?.images[0].url}
                alt="discover weekly"/>
                <div className="bodyInfoText">
                    <strong>
                        PLAYLIST
                    </strong>
                    <h2>
                        Discover Weekly
                    </h2>
                    <p> { discover_weekly?.description } </p>
                </div>
            </div>
            <div className="bodySongs">
<div className="bodyIcons">
    <PlayCircleFilled  className="bodyShuffle" />
    <FavoriteIcon fontSize="large"/>
    <MoreHorizIcon/>

</div>
 {discover_weekly?.tracks.items.map ((item ) => (
 <SongRow track={item.track}/>
 ))}

            </div>
        </div>
      
    );

}


