import React from "react";
import "./why-choose-us.css";
// import { BsTags } from "react-icons/bs";
// import { TiMessages } from "react-icons/ti";
// import { CgCircleci } from "react-icons/cg";
// import { TbClipboardText } from "react-icons/tb";
import Supportservice from "../pages/images/24-hours-support.png";
import cone from "../pages/images/cone.png";
import deals from "../pages/images/deals.png";
import invoice from "../pages/images/invoice.png";

const WhyChooseUs = () => {
  return (
    <>
    <div id="whyChoose-us">
    <div className="tanker">
    <div className='mobile-section-headfing'>
               <span></span> <h3>Why Choose Us</h3><span></span>
             </div>
      
          <div className="whyChoose-us-outer">
            
            {/* <hr className="why-choose-us-hr" /> */}
            <div className="why-chhose-display">
              <div className="whyyyy">
                <div className="why-choose-us-icon">
                  {/* <BsTags className="react-home-icon" /> */}
                  <img src={deals} alt="cone"></img>
                </div>
                <div className="choooseee">
                <h5 ><strong className='before-horizontal-line-orange' style={{color:"#F08A04"}}>Best Deals</strong><strong className='before-horizontal-line-blue' style={{color:"#262681"}}> On EV</strong></h5>
                  <p className="chose-cont-pera">
                  Fuel Free is committed to promoting sustainable transportation solutions that benefit both individuals
                   and the planet. That's why we are proud to offer the best deals on electric vehicles (EVs).{" "}
                  </p>
                </div>
              </div>
              <div className="whyyyy">
                <div className="why-choose-us-icon">
                  <img src={Supportservice} alt="support"></img>
                </div>
                <div className="choooseee">
                <h5><strong className='before-horizontal-line-orange' style={{color:"#F08A04"}}>24*7 Customer</strong><strong className='before-horizontal-line-blue' style={{color:"#262681"}}> Support Service</strong></h5>
                  <p className="chose-cont-pera">
                  At Fuel Free, we understand that customer satisfaction is of utmost importance. That's why we offer round-the-clock
                   customer support service to ensure that you have a seamless experience on our platform.{" "}
                  </p>
                </div>
              </div>
              <div className="whyyyy">
                <div className="why-choose-us-icon">
                  {/* <TiMessages className="react-home-icon" /> */}
                  <img src={cone} alt="cone"></img>
                </div>
                <div className="choooseee">
                <h5><strong className='before-horizontal-line-orange' style={{color:"#F08A04"}}>Free Test Drive</strong><strong className='before-horizontal-line-blue' style={{color:"#262681"}}> At Home</strong></h5>
                  <p className="chose-cont-pera">
                  At Fuel Free, we understand that making the switch to an electric vehicle (EV) is a big decision. That's why we're offering free test drives at your doorstep. Our goal is to provide you with an opportunity
                   to experience the convenience{" "}
                  </p>
                </div>
              </div>
              <div className="whyyyy">
                <div className="why-choose-us-icon">
                  {/* <TbClipboardText className="react-home-icon" /> */}
                  <img src={invoice} alt="invoice"></img>
                </div>
                <div className="choooseee">
                <h5><strong className='before-horizontal-line-orange' style={{color:"#F08A04"}}>Best EV</strong><strong className='before-horizontal-line-blue' style={{color:"#262681"}}> Networks</strong></h5>
                  <p className="chose-cont-pera">
                   Our EV network is designed to meet the needs of drivers in a variety of settings, from urban areas to
                   long-distance travel. With convenient charging stations
                   located throughout our network{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
