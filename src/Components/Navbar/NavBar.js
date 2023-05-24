import React, { useState } from "react";
import "./Navbar.css";
const NavBar = () => {
  const [selectedTag, setSelectedTag] = useState(2);
  const onHandleSelect = (tagIndex) => {
    setSelectedTag(tagIndex);
  };
  return (
    <>
      <nav>
        <div className="container">
          <div className="heading">
            <h1>Access Control</h1>
          </div>
          <div className="tags">
            <button
              className={`tags-btn ${selectedTag === 1 ? "border-bottom" : ""}`}
              onClick={()=>onHandleSelect(1)}
            >
              Roles
            </button>
            <button
              className={`tags-btn ${selectedTag === 2 ? "border-bottom" : ""}`}
              onClick={()=>onHandleSelect(2)}
            >
              Users
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
