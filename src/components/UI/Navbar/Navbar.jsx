import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link className="navbar__links_button" to="about">About</Link>
        <Link className="navbar__links_button" to="posts">Posts</Link>
      </div>
    </div>
  );
};

export default Navbar;