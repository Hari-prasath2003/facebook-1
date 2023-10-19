import React from "react";
import "./sidebar.css";
import CloseFriend from "../../partials/sidebar/friends/Friend.jsx";
import { Users } from "../../data.js";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarPersonContainer">
            <img
              className="sidebarPerson"
              src="assets/person/Jiso.jpg"
              alt=""
            />
            <Link to="/Jiso" className="sidebarPersonName">
              Jiso
            </Link>
          </li>

          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Friends</span>
          </li>

          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>

          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Messages</span>
          </li>

          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>

          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>

          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>

          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>

          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Now</span>
          </li>
        </ul>

        <button className="sidebarButton">Show More</button>

        <hr className="sidebarHr"></hr>

        <span className="sidebarFriendList">Friends</span>

        <ul className="sidebarFriendListPersons">
          {Users.map((u) => (
            <CloseFriend user={u} key={u.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
