import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import SignLanguageSharpIcon from "@mui/icons-material/SignLanguageSharp";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      {/* Icon */}
      <center>
        <SignLanguageSharpIcon className="sidebar_logo" />
      </center>

      {/* SidebarOption*/}
      <div
        className="home"
        onClick={() => {
          navigate("/");
        }}
      >
        <SidebarOption active Icon={HomeOutlinedIcon} text="Home" />
      </div>
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneOutlinedIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineOutlinedIcon} text="Messages" />

      <div
        className="prof"
        onClick={() => {
          navigate("/profile");
        }}
      >
        <SidebarOption Icon={PermIdentityOutlinedIcon} text="Profile" />
      </div>

      <SidebarOption Icon={MoreHorizIcon} text="More" />

      {/* Button--Clap */}
      <Button variant="outlined" className="sidebar_tweet" fullWidth>
        Clap
      </Button>
    </div>
  );
}

export default Sidebar;
