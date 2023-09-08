import React from 'react';
import { Link } from 'react-router-dom';
import './ourConsultant.css';

const OurConsultant = (props) => {
  return (
    <>
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src={props.professional_person}
                        alt="professional-woman"
                        className="professional-person px-2"
                      />
                    </div>
                    <div className="col-md-8">
                      <Link to="https://www.w3schools.com" className="deal-head">
                        {props.consultant_name}
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
                        <li className="rating-star">{props.consultant_rating}</li>
                      </ul>
                      <Link to="#" className="deal-num">
                        {props.consultant_num}
                      </Link>
                      <br />
                      <Link to="#" className="deal-mail">
                       {props.consultant_email}
                      </Link>
                    </div>
                  </div>
                  <hr />
                </div>
    </>
  )
}

export default OurConsultant
