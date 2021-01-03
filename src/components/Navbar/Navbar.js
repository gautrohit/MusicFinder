import React from "react";
import MusicNoteIcon from "@material-ui/icons/MusicNote";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
      <MusicNoteIcon />
      <h1 className="navtitle">Music Finder</h1>
    </nav>
  );
};

export default Navbar;
