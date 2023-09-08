import React from 'react';
import { Link } from 'react-router-dom';
import './sideBar.js';

const SideBar = (props) => {
  return (
    <>
      <div className="row sidebar-deal">
              <div className="col-md-12 p-0 mb-3">
                <h5 className="dealer-info">{props.dealer_info}</h5>
                <div className="dealer-loc">
                  <iframe title='Dealer-map'
                    src="http://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059499407!2d-74.25986652425023!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1678451117545!5m2!1sen!2sin"
                    className="deal-map"
                  ></iframe>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src={props.car_logo}
                        alt="car-logo"
                        className="car-logo-deal px-2"
                      />
                    </div>
                    <div className="col-md-8">
                      <Link
                        to="http://www.w3schools.com"
                        className="travelCars"
                      >
                       {props.carDeal_name}
                      </Link>
                      <ul className="rating-star">
                        <li className="rating-btn">
                          <i className="fa fa-star rating-on"></i>
                          <i className="fa fa-star rating-on"></i>
                          <i className="fa fa-star rating-on"></i>
                          <i className="fa fa-star rating-on"></i>
                          <i class="fa fa-star-o"></i>
                        </li>{" "}
                        &nbsp; &nbsp;
                        <li className="rating-star">{props.carDeal_rating}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-2">
                      <img
                        src="location.png"
                        className="dealer-location-deal"
                        alt="location"
                      />{" "}
                    </div>
                    <div className="col-md-10">
                      <span className="">
                        {props.carDeal_location}
                      </span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-2">
                      <i className="fa fa-phone phone-deal"></i>
                    </div>
                    <div className="col-md-10 phone-num">
                      {props.carDeal_num}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-2">
                      <i class="fa fa-envelope phone-deal"></i>
                    </div>
                    <div className="col-md-10">
                      <Link
                        to="mailto:support@travelcars256.com"
                        className="mail-deal"
                      >
                        {props.carDeal_email}
                      </Link>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-2">
                      <i className="bi-globe globe-deal"></i>
                    </div>
                    <div className="col-md-10">
                      <Link className="site-deal" to="">
                        travelcars256.com
                      </Link>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-2">
                    <Link to='#' className='anchor-decoration'>
                      <i class="fa fa-facebook-f icon-fb"></i></Link>
                    </div>
                    <div className="col-md-2">
                    <Link to='#' className='anchor-decoration'>
                      <i class="fa fa-twitter icon-twitter"></i></Link>
                    </div>
                    <div className="col-md-2">
                    <Link to='#' className='anchor-decoration'>
                      <i class="fa fa-google-plus-g icon-google"></i></Link>
                    </div>
                    <div className="col-md-2">
                    <Link to='#' className='anchor-decoration'>
                      <i class="fa fa-tumblr icon-tumblr"></i></Link>
                    </div>
                    <div className="col-md-2">
                    <Link to='#' className='anchor-decoration'>
                      <i class="fa fa-rss icon-rss"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default SideBar
