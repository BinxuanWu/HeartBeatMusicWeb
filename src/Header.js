import React from 'react'
import './Header.css'
// Import Icon
import PersonIcon from '@mui/icons-material/Person';
import logo from "./images/logo.png";
import { IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";
//import { Link , useHistory} from "react-router-dom";

function Header({ backButton }) {
  //const history = useHistory();
  return (
    // BEM
    <div className='header'>
        
        <div>
            <img className = "header_logo"
            src = {logo}
            alt = "heartbeat-logo"
            />
        </div> 

        <div className='header_search'>
            <SearchIcon/>
            <input
                placeholder="Search!"
                type='text'
            />
        </div>
        

        <div className='header_right'>
            <IconButton>
                <PersonIcon className= "header_icon" style={{ color: "white" }} fontSize="large"/>
            </IconButton>

            <Link className ="signin" to="/signin" style={{textDecoration:'none'}}>
                <h4>Sign in</h4>
            </Link>
            
        </div>
        
        


        
    </div>
  )
}

export default Header