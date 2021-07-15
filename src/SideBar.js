import { Avatar } from "@material-ui/core";
import { useSelector } from 'react-redux';
import {selectUser} from './features/userSlice'
import React from "react";
import "./sideBar.css";


function SideBar() {
  const user = useSelector(selectUser)

  const recentItem = (topic)=>{

    return(
      <div className="sideBar__recentItem">
      <span className="sideBar_hash">#</span>
      <p>{topic}</p>
    </div>
    )
  }
  return (
    <div className="side__bar">
      <div className="sideBarTop">
        <img
          src="https://images.unsplash.com/photo-1623081660299-28f63e22c593?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          alt=""
        />
        <Avatar className="sidebar_avatar" src={user.photoUrl}>
          {user.displayName[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sideBar__stats">
        <div className="sideBar_stat">
          <p>Who viewed you</p>
          <p className="sideBat__statNumber">2,345</p>
        </div>
        <div className="sideBar_stat">
          <p>Views on post</p>
          <p className="sideBat__statNumber">2,345</p>
        </div>
      </div>
      <div className="sideBar__bottom">
          <p>Recent</p>
          {recentItem("Programming")}
          {recentItem("coding")}
          {recentItem("Software")}
          {recentItem("React Native")}
      </div>
    </div>
  );
}

export default SideBar;
