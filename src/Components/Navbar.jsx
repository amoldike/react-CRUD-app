import React from "react";
import "../Styles/Navbar.css";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li className="schedule-link">
            <Link to="/" className=" Active schedule text-decoration-none">
              SCHEDULE
            </Link>
          </li>
          <li className="category-link">
            <Link to="/category" className=" categogy text-decoration-none">
              CATEGORY
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
