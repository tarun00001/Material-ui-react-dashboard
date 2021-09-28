import React from "react";
import "./Topbar.css";
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin Panel</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
              <NotificationsNone/>
              <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
              <Language/>
              <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
              <Settings/>
              
          </div>
          <img src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="topAvatar" alt="profile"/>
        </div>
      </div>
    </div>
  );
}
