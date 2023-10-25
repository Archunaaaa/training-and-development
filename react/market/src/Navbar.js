import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <HomeIcon />,
    },
    {
      path: "/about",
      name: "About",
      icon: <InfoIcon />,
    },
    {
      path: "/contact",
      name: "Contact",
      icon: <ContactPageIcon />,
    },
  ];
  return (
    <div>
      <div className="d-flex ">
        <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
          <div className="top_section">
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
              LUFFY
            </h1>
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <MenuIcon onClick={toggle} />
            </div>
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <main></main>
      </div>
    </div>
  );
};
export default Navbar;
