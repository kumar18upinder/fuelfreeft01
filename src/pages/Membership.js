import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import joinusbanner from "../pages/images/join-us-new.png";
import { Link } from 'react-router-dom';

function Membership() {
    return (
        <div>
            <Header />
            <div className="hero-wrap" style={{height: "300px", backgroundSize: "cover", backgroundPosition: "bottom"}}>
                <img className="hero-wrap" src={ joinusbanner } alt="join-us-banner"></img>
            </div>
            <section className="about-section spad">
                <div className="container">
                    <div className="row margin-zero pt-3">
                        <div className="col-md-4 col-sm-6" style={{marginBottom:"100px"}}>
                            <div className="pricingTable">
                                <div className="pricingTable-header">
                                    <div className="price-value">
                                        <span className="month">CLASSIC </span>
                                        <span className="amount">999/-</span>
                                    </div>
                                </div>
                                <div className="icon">
                                    <i className="fa fa-rupee"></i>
                                </div>
                                <div className="pricing-content">
                                    {/* <!--<h3 className="title">Standard</h3>--> */}
                                    <ul>
                                    <li><i className="fa fa-angle-double-right"></i> Membership Duration <span>1 Month.</span></li>
                                        <li><i className="fa fa-angle-double-right"></i> we Provide <span>Intrested Customers</span> For Test Drive.</li>
                                        <li><i className="fa fa-angle-double-right"></i> Send <span>20</span> Normal Leads.</li>
                                        <li><i className="fa fa-angle-double-right"></i> <span>24*7</span> Technical Support.</li>
                                        <li><i className="fa fa-angle-double-right"></i> <span>24*7</span> Marketing Team Available.</li>
                                    </ul>
                                    <Link to="#" className="pricingTable-signup">Pay Now</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6" style={{marginBottom:"100px"}}>
                            <div className="pricingTable  ">
                                <div className="pricingTable-header">
                                    <div className="price-value">
                                        <span className="month">CLASSIC GOLD </span>
                                        <span className="amount">1499/-</span>
                                    </div>
                                </div>
                                <div className="icon">
                                    <i className="fa fa-rupee"></i>
                                </div>
                                <div className="pricing-content">
                                    {/* <!--<h3 className="title">Standard</h3>--> */}
                                    <ul>
                                    <li><i className="fa fa-angle-double-right"></i> Membership Duration <span>1 Month.</span></li>
                                        <li><i className="fa fa-angle-double-right"></i> we Provide <span>Intrested Customers</span> For Test Drive.</li>
                                        <li><i className="fa fa-angle-double-right"></i> Send <span>30</span> High Potential Leads.</li>
                                        <li><i className="fa fa-angle-double-right"></i> <span>24*7</span> Technical Support.</li>
                                        <li><i className="fa fa-angle-double-right"></i> <span>24*7</span> Marketing Team Available</li>
                                    </ul>
                                    <Link to="#" className="pricingTable-signup">Pay Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6" style={{marginBottom:"100px"}}>
                            <div className="pricingTable  ">
                                <div className="pricingTable-header">
                                    <div className="price-value">
                                        <span className="month">CLASSIC PLUS </span>
                                        <span className="amount">2499/-</span>
                                    </div>
                                </div>
                                <div className="icon">
                                    <i className="fa fa-rupee"></i>
                                </div>
                                <div className="pricing-content">
                                    {/* <!--<h3 className="title">Standard</h3>--> */}
                                    <ul>
                                        <li><i className="fa fa-angle-double-right"></i> Membership Duration <span>1 Month.</span></li>
                                        <li><i className="fa fa-angle-double-right"></i> we Provide <span>Intrested Customers</span> For Test Drive.</li>
                                        <li><i className="fa fa-angle-double-right"></i> Send <span>50</span> Leads and <span>Assured Convertion.</span></li>
                                        <li><i className="fa fa-angle-double-right"></i> <span>24*7</span> Technical Support.</li>
                                        <li><i className="fa fa-angle-double-right"></i> <span>24*7</span> Marketing Team Available</li>
                                    </ul>
                                    <Link to="#" className="pricingTable-signup">Pay Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Membership;
