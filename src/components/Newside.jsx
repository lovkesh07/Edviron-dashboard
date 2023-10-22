// import React from 'react'

// const Newside = () => {
//   return (
//     <div>Newside</div>
//   )
// }

// export default Newside

"use client";
// import logo from './logo.svg';
import "./App.css";
import { motion } from "framer-motion";
import { useState } from "react";
import AppsIcon from "@material-ui/icons/Apps";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FollowersIcon from "@material-ui/icons/People";
import MessagesIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SettingsIcon from "@material-ui/icons/Settings";
import InfoIcon from "@material-ui/icons/Info";

import Uppergrid from "./Uppergrid";
import Compup from "./Compup";
import Test from "./Test";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import {FormControl} from 'react-bootstrap';
// import ProfilePic from './images/profile.jfif';
// import {LineChart,XAxis,YAxis,Tooltip,CartesianGrid,Line } from 'recharts';

function Newside() {
  const [isToggle, setIsToggle] = useState(false);

  const toggleSwitch = () => {
    console.log("asdf");
    setIsToggle(!isToggle);
  };


  return (
    <div className="App">
      <div
        className="main"
        style={{ width: "100%", height: "100%", display: "flex" }}
      >
        <motion.div layout className="sidebar px-4 " data-isOn={isToggle}>
          {/* <motion.div  className = "leftNav" whileTap = {{scale : 0.97}} whileHover = {{scale : 1.02}} style={{margin: "10px 0px"}}><img src={ProfilePic} alt="profile pic" width = "32" height = "32" style={{borderRadius : "50%"}}/>&nbsp;  <span className = "leftNavText" data-isOn={isToggle}>Barry Allen</span></motion.div> */}
          <h1 className = "leftNav" whileTap = {{scale : 0.97}} whileHover = {{scale : 1.02}} style={{margin: "10px 0px"}}>logo</h1>
          <motion.div
            className="leftNav hover:bg-blue-600 rounded-xl"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
          >
            <DashboardIcon style={{ fontSize: 30 }}></DashboardIcon>{" "}
            <span className="leftNavText " data-isOn={isToggle}>
              Dashboard
            </span>
          </motion.div>
          <motion.div
            className="leftNav hover:bg-blue-600 rounded-xl "
            whileTap={{ scale: 0.97 }}
            // whileHover={{ scale: 1.02 }}
          >
            <FollowersIcon style={{ fontSize: 30 }}></FollowersIcon>{" "}
            <span className="leftNavText " data-isOn={isToggle}>
              Followers
            </span>
          </motion.div>
          <motion.div
            className="leftNav hover:bg-blue-600 rounded-xl"
            whileTap={{ scale: 0.97 }}
            // whileHover={{ scale: 1.02 }}
          >
            <MessagesIcon style={{ fontSize: 30 }}></MessagesIcon>{" "}
            <span className="leftNavText" data-isOn={isToggle}>
              Messages
            </span>
          </motion.div>
          <motion.div
            className="leftNav hover:bg-blue-600 rounded-xl"
            whileTap={{ scale: 0.97 }}
            // whileHover={{ scale: 1.02 }}
          >
            <NotificationsIcon style={{ fontSize: 30 }}></NotificationsIcon>{" "}
            <span className="leftNavText" data-isOn={isToggle}>
              Notifications
            </span>
          </motion.div>
          <motion.div
            className="leftNav hover:bg-blue-600 rounded-xl"
            whileTap={{ scale: 0.97 }}
            // whileHover={{ scale: 1.02 }}
          >
            <SettingsIcon style={{ fontSize: 30 }}></SettingsIcon>{" "}
            <span className="leftNavText" data-isOn={isToggle}>
              Settings
            </span>
          </motion.div>
          <motion.div
            className="leftNav hover:bg-blue-600 rounded-xl"
            whileTap={{ scale: 0.97 }}
            // whileHover={{ scale: 1.02 }}
          >
            <InfoIcon style={{ fontSize: 30 }}></InfoIcon>{" "}
            <span className="leftNavText" data-isOn={isToggle}>
              About
            </span>
          </motion.div>
        </motion.div>
        <motion.div
          layout
          style={{ display: "flex", flexDirection: "column" }}
          className="rightBack"
          data-isOn={isToggle}
        >
          <motion.div
            className="rightNav"
            layout
            style={{
              height: "47px",
              backgroundColor: "white",
              boxShadow: "2px 0px 10px lightgray",
              padding: "5px",
              display: "flex",
            }}
            data-isOn={isToggle}
          >
            <motion.div whileTap={{ scale: 1.1 }} whileHover={{ scale: 1.2 }}>
              <AppsIcon
                style={{ fontSize: 35, marginTop: "1px", cursor: "pointer" }}
                onClick={toggleSwitch}
              ></AppsIcon>
            </motion.div>
            {/* <FormControl type = "text" placeholder = "Enter anything to search" style={{width: "300px", marginLeft : "10px"}}/> */}
          </motion.div>



          <div className="px-4">
            <div className="lg:text-3xl font-bold ">
              <h1 className="float-left">DAV Public School, Bhilai</h1>
            </div>
          </div>

          <div className="px-4">
            <Compup />
            <Uppergrid />
            <Test />
          </div>


        </motion.div>
      </div>
    </div>
  );
}

export default Newside;
