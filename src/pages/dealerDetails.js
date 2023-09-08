import React from "react";
import "./dealerList.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const DealerList = () => {
  const [formValues, setFormValues] = useState({
    selectValue1: "",
    selectValue2: "",
    field: "",
  });
  const handleSelectChange1 = (e) => {
    setFormValues({ ...formValues, selectValue1: e.target.value });
  };
  const handleSelectChange2 = (e) => {
    setFormValues({ ...formValues, selectValue2: e.target.value });
  };
  const handleInputChange = (e) => {
    setFormValues({ ...formValues, inputValue: e.target.value });
  };
  const handleResetClick = () => {
    setFormValues({ selectValue1: "",selectValue2: "", inputValue: "" });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 dealerlist">
            <h3 className="dealerlist-heading">Dealer List</h3>
            <p className="dealerlist-subheading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
        <div className="find-dealer-block pt-5 pb-4 mb-5">
          <div className="tanker">
            <div className="row pb-3">
              <div className="col-md-12 find-dealer">FIND YOUR DEALER</div>
            </div>
            <div className="row">
              <div className="col-md-3 bg-select">
                <label className="make">MAKE</label>
                <select
                  className="select-car"
                  value={formValues.selectValue1}
                  onChange={handleSelectChange1}
                >
                  <option value="" selected disabled>
                    Select Here
                  </option>
                  <option value="all-makes">All makes</option>
                  <option value="Acura">Acura</option>
                  <option value="Audi">Audi</option>
                  <option value="BMW">BMW</option>
                  <option value="Bentley">Bentley</option>
                  <option value="Chevrolet">Chevrolet</option>
                  <option value="Ford">Ford</option>
                  <option value="Honda">Honda</option>
                  <option value="Kia">Kia</option>
                  <option value="Mazda">Mazda</option>
                  <option value="Nissan">Nissan</option>
                  <option value="Toyota">Toyota</option>
                </select>
              </div>
              <div className="col-md-3 bg-select">
                <label className="modals">MODALS</label>
                <select
                  className="select-car"
                  value={formValues.selectValue2}
                  onChange={handleSelectChange2}
                >
                  <option value="" selected disabled>
                    Select Here
                  </option>
                  <option value="all-makes">All models</option>
                  <option value="2 Series">2 Series</option>
                  <option value="4Runner">4Runner</option>
                  <option value="7 Series">7 Series</option>
                  <option value="A3">A3</option>
                  <option value="CR-V">CR-V</option>
                  <option value="Camaro">Camaro</option>
                  <option value="Camry">Camry</option>
                  <option value="Cruze">Cruze</option>
                  <option value="Elantra">Elantra</option>
                  <option value="Malibu">Malibu</option>
                  <option value="Mustang">Mustang</option>
                  <option value="Pick Truck">Pick Truck</option>
                  <option value="Pickup Truck">Pickup Truck</option>
                  <option value="Q3">Q3</option>
                  <option value="S5 Luxury">S5 Luxury</option>
                  <option value="SQ5">SQ5</option>
                  <option value="Scoopter">Scoopter</option>
                  <option value="Soul">Soul</option>
                  <option value="Sport Version">Sport Version</option>
                  <option value="Versa">Versa</option>
                  <option value="X1">X1</option>
                </select>
              </div>
              <div className="col-md-3 bg-select">
                <label className="location">Location</label>
                <br />
                <input
                  type="text"
                  className="select-car"
                  placeholder="Town, city or postcode"
                  value={formValues.inputValue}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-2">
                <button type="button" className="btn btn-primary search-btn ">
                  Search
                </button>
              </div>
            </div>
            <div className="row  location-padding">
              <div className="col-md-6">
                <i className="fas fa-times-circle"></i>{" "}
                <span className="label">Location: </span>
                <span className="value">69099 </span>
              </div>
              <Link
                className="col-md-6 reset-btn ml-auto mr-3"
                onClick={handleResetClick}
              >
                <i className="fa fa-rotate-left"></i> &nbsp;
                <span className="">RESET ALL</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="row tanker mb-2">
          <div className="col-md-6 dealer-address">
            <span className="flatNo">39</span> DEALER FOUND IN YOUR LOCATION
          </div>
          <div className="col-md-6 mb-2">
            <select className="sorting">
              <option value="last-date" selected>
                SORT BY: Date Last Added
              </option>
              <option value="first-date">SORT BY: Date First Added</option>
              <option value="Price-low-high">Price(Low to High)</option>
              <option value="Price-high-low">Price(High to Low)</option>
            </select>
          </div>
          <hr />
        </div>
        <div className="row tanker">
          <div className="col-md-1">
            <img src="car01.jpg" className="car-logo" alt="car-logo" />
          </div>
          <div className="col-md-3">
            <a href="/" className="travelCar">
              TravelCars256
            </a>
            <ul className="rating-star">
              <li className="rating-btn">
                <i className="fa fa-star rating-on"></i>
                <i className="fa fa-star rating-on"></i>
                <i className="fa fa-star rating-on"></i>
                <i className="fa fa-star rating-on"></i>
                <i className="fa fa-star"></i>
              </li>{" "}
              &nbsp; &nbsp;
              <li className="rating-star">(24 Ratings)</li>
            </ul>
          </div>
          <div className="col-md-4">
            <div className="">
              <i className="fa fa-car"></i>{" "}
              <span className="items-name">
                <span className="flatNo">68 </span>items
              </span>
            </div>
            <div className="">
              <img
                src="location.png"
                className="dealer-location"
                alt="location"
              />{" "}
              <span className="items-name">
                <span className="address-deal">
                  862 Orchard St, Los Angeles, CA, 69099
                </span>
              </span>
            </div>
            <div>
              <a href="  /" className="google-find">
                Find on Google Map
              </a>
            </div>
            <div className="row mb-5">
              <div className="col-md-6">
                <span className="car-purchase">New Car:</span>{" "}
                <span className="purchase-no">(086) 95 638 638</span>
              </div>
              <div className="col-md-6">
                <span className="car-purchase">Used Car:</span>{" "}
                <span className="purchase-no">(086) 95 638 638</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <i>
              "Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups."
            </i>
          </div>
          <hr />
        </div>
        <div className="row tanker">
          <div className="col-md-1 mb-5">
            <img src="car01.jpg" className="car-logo" alt="car-logo" />
          </div>
          <div className="col-md-3">
            <a href="  /" className="travelCar">
              Apollo Auto Center
            </a>
            <ul className="rating-star">
              <li className="rating-btn">
                <i className="fa fa-star rating-on"></i>
                <i className="fa fa-star rating-on"></i>
                <i className="fa fa-star rating-on"></i>
                <i className="fa fa-star rating-on"></i>
                <i className="fa fa-star rating-on"></i>
              </li>{" "}
              &nbsp; &nbsp;
              <li className="rating-star">(88 Rating)</li>
            </ul>
          </div>
          <div className="col-md-4">
            <div className="">
              <i className="fa fa-car"></i>{" "}
              <span className="items-name">
                <span className="flatNo">112 </span>items
              </span>
            </div>
            <div className="">
              <img
                src="location.png"
                className="dealer-location"
                alt="location"
              />{" "}
              <span className="items-name">
                <span className="address-deal">
                  94 Liberty St, Mahattan, CA, 69099
                </span>
              </span>
            </div>
            <div>
              <a href="  /" className="google-find">
                Find on Google Map
              </a>
            </div>
            <div className="row mb-5">
              <div className="col-md-6">
                <span className="car-purchase">New Car:</span>{" "}
                <span className="purchase-no">(086) 95 638 638</span>
              </div>
              <div className="col-md-6">
                <span className="car-purchase">Used Car:</span>{" "}
                <span className="purchase-no">(086) 95 638 638</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <i>
              "Lorem ipsum is placeholder text commonly used in the graphic"
            </i>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default DealerList;
