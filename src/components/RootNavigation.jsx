import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarSimple } from "./Navbar";
import { useState } from "react";

function RootNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-10">
      <NavbarSimple setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className={isOpen ? "mt-32" : ""}>
        <Outlet />
      </div>
    </div>
  );
}

export default RootNavigation;
