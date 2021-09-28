import React from "react";
import "./Sidebar.css";
import { LineStyle, Timeline, TrendingUp, Person, LocalMall, BarChart, Mail, DynamicFeed, Message, Report, ShopTwo, AccountBalance } from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">DashBoard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcons" />
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcons" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcons" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Person className="sidebarIcons" />
              Users
            </li>
            <li className="sidebarListItem">
              <LocalMall className="sidebarIcons" />
              Products
            </li>
            <li className="sidebarListItem">
              <AccountBalance className="sidebarIcons" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcons" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Mail className="sidebarIcons" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcons" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <Message className="sidebarIcons" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <ShopTwo className="sidebarIcons" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcons" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcons" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
