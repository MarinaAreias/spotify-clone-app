import React from "react";
import "./Footer.css";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';



export default function Footer() {
    return (
        <div className="footer">
<div className="footerLeft">
    <img className="footerAlbumLogo"
    src="https://trackblasters.com/wp-content/uploads/2020/12/Madlib-Road-Of-The-Lonely-Ones-Audio_featured_image.jpg" 
alt="album cover" />
    <div className="footerSongInfo">
        <h4>Road Of The Lonely Ones </h4>
        <p>Madlib..</p>

    </div>
    </div>

    <div className="footerCenter">
        <ShuffleIcon className="footerGreen"/>
        <SkipPreviousIcon className="footerIcon"/>
        <PlayCircleFilledIcon  fontSize="large" className="footerIcon" />
        <SkipNextIcon className="footerIcon" />
        <RepeatIcon className="footerGreen" />
        </div>

        <div className="footerRight">

            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayIcon/>
                </Grid>
                <Grid item>
                    <VolumeDownIcon/>
                </Grid>
                <Grid item xs>
                    <Slider/>
                </Grid>
            </Grid>
        </div>

        </div>
    );
}