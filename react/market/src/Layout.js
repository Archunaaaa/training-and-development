import React from "react";
import "./App.css";

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Layout() {
  const petName = "Luffy";
  return (
    <div>
      <Navbar petName={petName} />
      <Outlet />
      <Footer />
    </div>
  );
}
      
export default Layout;
