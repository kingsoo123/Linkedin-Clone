import React from "react";
import {useDispatch} from 'react-redux'
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOptions from "./Header__options";
import HomeIcon from "@material-ui/icons/Home" 
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter"
import ChatIcon from "@material-ui/icons/Chat"
import NotificationIcon from "@material-ui/icons/Notifications"
import {logout} from './features/userSlice'
import {auth} from './firebase'

function Header() {
  const dispatch = useDispatch()

  const logoutOfApp = ()=>{
    dispatch(logout())
    auth.signOut()
  }
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="Linkedin" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search"/>
        </div>
      </div>
      <div className="header__right">
          <HeaderOptions Icon= {HomeIcon} title={'Home'}/>
          <HeaderOptions Icon={SupervisorAccountIcon} title={'My network'}/>
          <HeaderOptions Icon={BusinessCenterIcon} title={'Job'}/>
          <HeaderOptions Icon={ChatIcon} title={'Messaging'}/>
          <HeaderOptions Icon={NotificationIcon} title={'Notifications'}/>
          <HeaderOptions avatar={"https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"}
           title={'Me'}
           onClick={logoutOfApp}
           />


      </div>
    </div>
  );
}

export default Header;
