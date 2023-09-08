import React from "react";
import "./cardealership.css";
import { CgNotes } from "react-icons/cg";
import { GiSteeringWheel } from "react-icons/gi";
import { BiMessageDetail } from "react-icons/bi";
import { MdManageAccounts } from "react-icons/md";

const Cardealership = () => {
  return (
    <>
      <div className="cardealer-ship">
        <div className="tanker">
          <h5 className="cardeal-head-text">Welcome To Our Website</h5>
          <h2 className="cardeal-head-text1">Vehicals DEALERSHIP</h2>
          <p className="cardeal-head-para">
            These examples have been automatically selected and may contain
            sensitive <br /> content that does not reflect the opinions or
            policies of Collins, or its parent company HarperCollins. <br />
            We welcome feedback{" "}
          </p>
          <div className="cardealership-page">
            <div className="header-page">
              <div className="single-card single-card1">
                <div className="logo-card">
                  <GiSteeringWheel className="wheel" />
                </div>
                <div className="definantion-section-card">
                  <h6 className="card-heading-text">ALL BRANDS</h6>
                  <p className="card-heading-para">
                    {" "}
                    shopping is taking over the market faster than one can
                    comprehend. faster than one can comprehend.{" "}
                  </p>
                </div>
                <button className="button-card crd">Read More</button>
              </div>
              <div className="single-card single-card2">
                <div className="logo-card">
                  <BiMessageDetail className="wheel" />
                </div>
                <div className="definantion-section-card">
                  <h6 className="card-heading-text">FREE SUPPORT</h6>
                  <p className="card-heading-para">
                    Microsoft support is here to help you with Microsoft
                    products. Find how-to u with Microsoft products. Find how-to{" "}
                    <article></article>
                  </p>
                </div>
                <button className="button-card">Read More</button>
              </div>
              <div className="single-card single-card3">
                <div className="logo-card">
                  <MdManageAccounts className="wheel" />
                </div>
                <div className="definantion-section-card">
                  <h6 className="card-heading-text">DEALERSHIP</h6>
                  <p className="card-heading-para">
                    a business that has permission to sell products from a
                    particular company, especially cars products from a
                    particular
                  </p>
                </div>
                <button className="button-card">Read More</button>
              </div>
              <div className="single-card single-card4">
                <div className="logo-card">
                  <CgNotes className="wheel" />
                </div>
                <div className="definantion-section-card">
                  <h6 className="card-heading-text">AFFORDABLE</h6>
                  <p className="card-heading-para">
                    The adjective affordable can either mean "cheap," or it can
                    imply that even mean "cheap," or it can imply that even{" "}
                  </p>
                </div>
                <button className="button-card">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardealership;
