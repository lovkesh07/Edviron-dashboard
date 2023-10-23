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

function Newside() {
  const [isToggle, setIsToggle] = useState(false);

  const toggleSwitch = () => {
    console.log("asdf");
    setIsToggle(!isToggle);
  };

  return (
    <div className="App">
      
        <div className="flex flex-row h-screen w-screen ">
          
            <div
              layout
              className="sidebar  px-4 "
              data-isOn={isToggle}
            >
              <h1
                className="leftNav"
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.02 }}
                style={{ margin: "10px 0px" }}
              >
                logo
              </h1>

              <AppsIcon
                    style={{
                      fontSize: 35,
                      marginTop: "1px",
                      cursor: "pointer",
                    }}
                    onClick={toggleSwitch}
                  ></AppsIcon>


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
            </div>

        </div>
      

    </div>
  );
}

export default Newside;
