import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const NavBar = () => {
  const tabs = ["Trendings", "Movies", "Series", "Search"];
  const [show, setShow] = useState(true)

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" onClick={() => setShow(!show)} className={`btn btn-ghost btn-circle `}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul tabIndex={0} className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ${show ? "block" : "hidden"}`}>
              {tabs.map((tab) => (
                <li key={tab}>
                  <NavLink className="text-lg font-mono" onClick={() => setShow(false)} to={tab === "Trendings" ? "/" : `/${tab.toLowerCase()}`}>{tab}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <div className="navbar-center">
          <a className="btn btn-ghost text-xl">Cool Movies</a>
        </div> */}
      </div>

      <Outlet />
    </div>
  );
};

export default NavBar;
