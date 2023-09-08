import { Link} from "react-router-dom";
import "./FAQ.css";
import React, { useState } from "react";
import { BsNodePlusFill, BsNodeMinusFill } from "react-icons/bs";
import Header from "../components/header";
import Footer from "../components/footer";

const FAQ = () => {
  const [icon1, setIcon1] = useState(<BsNodePlusFill />);
  const [icon2, setIcon2] = useState(<BsNodePlusFill />);
  const [icon3, setIcon3] = useState(<BsNodePlusFill />);
  const [icon4, setIcon4] = useState(<BsNodePlusFill />);
  const [icon5, setIcon5] = useState(<BsNodePlusFill />);
  const [icon6, setIcon6] = useState(<BsNodePlusFill />);
  const [icon7, setIcon7] = useState(<BsNodePlusFill />);
  const [icon8, setIcon8] = useState(<BsNodePlusFill />);
  
  const [showDiv1, setShowDiv1] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);
  const [showDiv3, setShowDiv3] = useState(false);
  const [showDiv4, setShowDiv4] = useState(false);
  const [showDiv5, setShowDiv5] = useState(false);
  const [showDiv6, setShowDiv6] = useState(false);
  const [showDiv7, setShowDiv7] = useState(false);
  const [showDiv8, setShowDiv8] = useState(false);

  function toggleDiv1() {
    setShowDiv1(!showDiv1);
    setIcon1(showDiv1 ? <BsNodePlusFill /> : <BsNodeMinusFill />);
  }

  function toggleDiv2() {
    setShowDiv2(!showDiv2);
    setIcon2(showDiv2 ? <BsNodePlusFill /> : <BsNodeMinusFill />);
  }

  function toggleDiv3() {
    setShowDiv3(!showDiv3);
    setIcon3(showDiv3 ? <BsNodePlusFill /> : <BsNodeMinusFill />);
  }

  function toggleDiv4() {
    setShowDiv4(!showDiv4);
    setIcon4(showDiv4 ? <BsNodePlusFill /> : <BsNodeMinusFill />);
  }

  function toggleDiv5() {
    setShowDiv5(!showDiv5);
    setIcon5(showDiv5 ? <BsNodePlusFill /> : <BsNodeMinusFill />);
  }

  function toggleDiv6() {
    setShowDiv6(!showDiv6);
    setIcon6(showDiv6 ? <BsNodePlusFill /> : <BsNodeMinusFill />);
  }

  function toggleDiv7() {
    setShowDiv7(!showDiv7);
    setIcon7(showDiv7 ? <BsNodePlusFill /> : <BsNodeMinusFill />);
  }

  function toggleDiv8() {
    setShowDiv8(!showDiv8);
    setIcon8(showDiv8 ? <BsNodePlusFill /> : <BsNodeMinusFill />);
  }

  return (
    <>
 <Header></Header>
      <div className="container faq-btm">
        <div className="row">
          <div className="col-md-12 faq-page">
            <h2 className="faq-title">Frequently Asked Question</h2>
            <p className="faq-para">
              All things that you need to know about Fuel Free and some
              frequently asked question here
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="row">
              <div className="col-md-12">
                <div className="sidebar-menu">
                  <ul className="menu-items ">
                    <li>
                      <Link className="active active-menu" to="#">
                        General Information
                      </Link>
                    </li>
                    <li>
                      <Link className="active" to="#">
                        Vehicle Pricing
                      </Link>
                    </li>
                    <li>
                      <Link className="active" to="#">
                        Used Vehicle
                      </Link>
                    </li>
                    <li>
                      <Link className="active" to="#">
                        Repair & Maintenance
                      </Link>
                    </li>
                    <li>
                      <Link className="active" to="#">
                        Agency & Dealer
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12">
                <div className="sidebar-call-to-action">
                  <i className="fa fa-life-ring"></i>
                  <h3 className="title">Still no luck? We can help you!</h3>
                  <p>
                    Contact us and we’ll get back to you as soon as possible.
                  </p>
                  <Link to="#" className="submitReq-btn">
                    Submit a request
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 faq-accordion">
            <div className="row">
              <div className="col-md-10 accordion">
                <p className="faq-ques">
                  1. How to contact with Dealers on Fuel Free?
                </p>
              </div>
              <div className="col-md-2">
                <button onClick={toggleDiv1} className={`faq-btn ${showDiv1 ? 'active' : ''}`}>
                  {icon1}
                </button>
              </div>
              {showDiv1 && (
                <div style={{ display: "block", float: "right" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </div>
              )}
              <hr className="my-2"/>
            </div>
            <div className="row">
              <div className="col-md-10 accordion">
                <p className="faq-ques">
                  2. How to write review for a vehicle on Fuel Free?
                </p>
              </div>
              <div className="col-md-2">
                <button onClick={toggleDiv2} className={`faq-btn ${showDiv2 ? 'active' : ''}`}>
                  {icon2}
                </button>
              </div>
              {showDiv2 && (
                <div style={{ display: "block", float: "right" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </div>
              )}
              <hr />
            </div>
            <div className="row">
              <div className="col-md-10 accordion">
                <p className="faq-ques">
                  3. How to become a provider on Fuel Free?
                </p>
              </div>
              <div className="col-md-2">
                <button onClick={toggleDiv3} className={`faq-btn ${showDiv3 ? 'active' : ''}`}>
                  {icon3}
                </button>
              </div>
              {showDiv3 && (
                <div style={{ display: "block", float: "right" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </div>
              )}
              <hr className="my-2"/>
            </div>
            <div className="row">
              <div className="col-md-10 accordion">
                <p className="faq-ques">
                  4. What benefits that i will get when become provider?
                </p>
              </div>
              <div className="col-md-2">
                <button onClick={toggleDiv4} className={`faq-btn ${showDiv4 ? 'active' : ''}`}>
                  {icon4}
                </button>
              </div>
              {showDiv4 && (
                <div style={{ display: "block", float: "right" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </div>
              )}
              <hr className="my-2"/>
            </div>
            <div className="row">
              <div className="col-md-10 accordion">
                <p className="faq-ques">
                  5. What i have to when my listing has been reported by somone?
                </p>
              </div>
              <div className="col-md-2">
                <button onClick={toggleDiv5} className={`faq-btn ${showDiv5 ? 'active' : ''}`}>
                  {icon5}
                </button>
              </div>
              {showDiv5 && (
                <div style={{ display: "block", float: "right" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </div>
              )}
              <hr className="my-2"/>
            </div>
            <div className="row">
              <div className="col-md-10 accordion">
                <p className="faq-ques">
                  6. Where i can find a support from your team?
                </p>
              </div>
              <div className="col-md-2">
                <button onClick={toggleDiv6} className={`faq-btn ${showDiv6 ? 'active' : ''}`}>
                  {icon6}
                </button>
              </div>
              {showDiv6 && (
                <div style={{ display: "block", float: "right" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </div>
              )}
              <hr className="my-2"/>
            </div>
            <div className="row">
              <div className="col-md-10 accordion">
                <p className="faq-ques">
                  7. How much comission that i can earn when use Fuel Free’s
                  Affiliate?
                </p>
              </div>
              <div className="col-md-2">
                <button onClick={toggleDiv7} className={`faq-btn ${showDiv7 ? 'active' : ''}`}>
                  {icon7}
                </button>
              </div>
              {showDiv7 && (
                <div style={{ display: "block", float: "right" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </div>
              )}
              <hr className="my-2"/>
            </div>
            <div className="row">
              <div className="col-md-10 accordion">
                <p className="faq-ques">
                  8. How about secure and payment on Fuel Free?
                </p>
              </div>
              <div className="col-md-2">
                <button onClick={toggleDiv8} className={`faq-btn ${showDiv8 ? 'active' : ''}`}>
                  {icon8}
                </button>
              </div>
              {showDiv8 && (
                <div style={{ display: "block", float: "right" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </div>
              )}
              <hr className="my-2"/>
            </div>
          </div>
        </div>
      </div>
       <Footer/>
    </>
  );
};

export default FAQ;
