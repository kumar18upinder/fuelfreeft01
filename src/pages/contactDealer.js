import React from "react";
import { Link } from "react-router-dom";
import './contactDealer.css';

const ContactDealer = (props) => {
  return (
    <>
      <div className="col-md-2">
        <img
          src={props.professional_person}
          alt="deal-img"
          className="deal-img"
        />
      </div>
      <div className="col-md-10">
        <div className="row">
          <div className="col-md-12">
            <i className="fa fa-star rating-on"></i>
            <i className="fa fa-star rating-on"></i>
            <i className="fa fa-star rating-on"></i>
            <i className="fa fa-star rating-on"></i>
            <i className="fa fa-star rating-on"></i>{" "}
            <span className="car-comment">{props.contactDealer_comment}</span>
          </div>
          <div className="col-md-12 mt-2">
            by{" "}
            <Link to="#" className="dealer-person">
              {props.contactDealer_name}
            </Link>{" "}
            |<span className="deal-date">
             {Date()}
            </span>
          </div>
          <div className="col-md-12 mt-2">{props.contactDealer_reviews}</div>
          <div className="col-md-12 mt-2">
            <Link to="#" className="btn-replay">
              {props.Replay}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDealer;
