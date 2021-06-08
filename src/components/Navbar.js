import { IconButton, Typography } from "@material-ui/core";
import React from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import '../styles/Navbar.css'
import {useHistory} from 'react-router-dom'
const Navbar = () => {
  const history=useHistory();
  const logout=()=>{
   
    localStorage.removeItem("user");
    localStorage.removeItem('token');
    history.replace('/')

  }
  return (
    <div className="navbar">
      <Typography variant="h6" className="title">Dashboard</Typography>
      <IconButton>
          <ExitToAppIcon  fontSize="large" className="icon" onClick={logout}/>
      </IconButton>
    </div>
  );
};

export default Navbar;
