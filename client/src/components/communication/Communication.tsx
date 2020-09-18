import React, { useEffect, useState, useRef } from "react";
import "./Communication.css";
import MapComp from "./map/MapComp";
import Friends from "./userstamp/friends/Friends";

const Communication = () => {
  const [title, setTitle] = useState<string | null | undefined>("Friends");
  const [toggle, setToggle] = useState<boolean>(false);
  const settingsButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleToggle = () => {
    console.log("toggle");
    // const container = settingsButtonRef.current;
    // container.classList.toggle("change");
    // setToggle(!toggle);
  };

  useEffect(() => {
    console.log("open channels");
  }, [toggle]);

//--------------- dummy data ------------
  let users = {
    53415: {
      username: "user1",
    },
    64415: {
      username: "user2",
    },
    53435: {
      username: "user3",
    },
  };
//---------------------------------------

  return (
    <div className="communication-container">
      <div className="nav-bar">
        <button
          ref={settingsButtonRef}
          id="settings-button"
          onClick={handleToggle}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>
        <p>{title}</p>
        <button className="profile-button">
          <img className="current-user-avatar" />
        </button>
      </div>
      <div className="main">
        <div className="map-container-com">
          <MapComp />
        </div>
        <div className="friends-container-com">
          {/* {Object.values(users).forEach(element => {
            console.log('element: ', element);
            // let id = 
          }) 
          return (
            <Friends />
          );
          } */}
          <Friends />
        </div>
      </div>
      <div className="footer">footer</div>
    </div>
  );
};

export default Communication;
