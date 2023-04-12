import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/solid'

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between my-container">
        <div className="font-extrabold text-3xl my-11">
          <Link to={"/"}>Career Zone</Link>
        </div>
        <ul className="flex gap-4">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/statistics"}
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/applied-jobs"}
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Applied Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/blog"}
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <button className="hidden lg:flex my-btn py-4 px-5">
          Star Applying
        </button>
      </div>
    </>
  );
};

export default Header;
