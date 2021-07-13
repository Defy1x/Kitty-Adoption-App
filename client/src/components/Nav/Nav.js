import React from 'react';
import { Link } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "./style.css";

const Nav = () => {
  return(
  <div className="NavFlex">
    <ul className="navListFlex">
      <li><Link to='/search'><button className="navBtnGreen">Find a Kitty</button></Link></li>
      <li><Link to='/postkitty'><button className="navBtn">Post a Kitty</button></Link></li>
      <li><Link to='/userprofile'><AccountCircleIcon className="accountIcon"/></Link></li>
    </ul>
  </div>
);
}

export default Nav;
