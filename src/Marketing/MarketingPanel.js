import React from 'react';
import "./marketing.css";
import Markering from "../images/coming soon mobile view.png";


function MarketingPanel () {
  return (
    <div>
        <div>
            <ul className="marketing-panal-header">
                <li>Available City's</li>
                <li>Login</li>
                <li>Register</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div>
            <h1>See your Marketing Details</h1>
            <img src={ Markering } alt='marketing'></img>
        </div>
        <div>
            <img src=""></img>
        </div>
    </div>
  )
}

export default MarketingPanel;
