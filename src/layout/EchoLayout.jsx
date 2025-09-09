import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

function EchoLayout() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default EchoLayout;
