import React from 'react';
import "./Footer.css";

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Grid, Slider } from '@mui/material';

function Footer() {
  return (
    <div className='footer'>
        <div className = "footer_left">
            <SkipPreviousIcon className='footer_icon'/>
            <PlayCircleOutlineIcon fontSize="large" className='footer_icon' />
            <SkipNextIcon className='footer_icon'/>
        </div>

        <div className = "footer_right">
            <img className='footer_albumLogo'
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.V135E5CiVbo76oo5qoBOGAHaGl%26pid%3DApi&f=1" 
                alt=""
            />
            <div className='footer_songInfo'>
                <h4> HHH</h4>
                <p>USdagsdfaf</p>
            </div>
            <div className = 'footer_time'>
                <Slider 
                        aria-label="time-indicator" 
                        size="small"
                        min={0}
                        step={1}
                        max = {200}

                ></Slider>
            </div>
            

        </div>
    </div>
  )
}

export default Footer