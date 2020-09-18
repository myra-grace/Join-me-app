import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Communication from "./components/communication/Communication";
import Camera from "./components/camera/Camera";
import Media from "./components/media/Media";

function App() {
//grab current user's friends from db
  return (
    <div className="App">
      {/* <Media /> */}
      {/* <Camera /> */}
      <Communication />
    </div>
  );
}

export default App;
