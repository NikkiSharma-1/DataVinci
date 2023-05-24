import React from "react";
import avatar from "../assets/avatarImage.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <h1>Music Albums</h1>
      <div className="info">
        <h4>nikkisharma@music.listen</h4>
        <div className="avatar">
          <img src={avatar} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;