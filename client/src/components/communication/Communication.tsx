import React, { useEffect, useState, useRef } from "react";
import "./Communication.css";

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
      <div className="main">main</div>
      <div className="footer">footer</div>
    </div>
  );
};

export default Communication;
