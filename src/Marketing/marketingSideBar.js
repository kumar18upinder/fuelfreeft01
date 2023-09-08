import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../pages/images/logo.png";
import "./marketing.css"

const MarketingSideBar = () => {
  return (
    <>
        <div className="marketing-side-bar">
        <div className="marketing-side-bar-inner">
          <div className="marketing-logo">
            <Link to="/">
              <img src={logo} alt="Fuelfree logo"></img>
            </Link>
          </div>
          <ul className="marketing-sidebar-links">
            <li>
              <Link to={"/marketing-leads/:id"}>Leads</Link>
            </li>
            <li>
              <Link to={"/marketing-bookings"}>Booking</Link>
            </li>
            <li>
              <Link to={"/marketing-testdrive"}>TestDrive</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default MarketingSideBar
