import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";
import "./news.css";
import { GiCancel } from "react-icons/gi";
import { BsCheck2Circle } from "react-icons/bs";
import { Link } from "react-router-dom";

function BookingHistory() {
  let user = JSON.parse(localStorage.getItem("user"));
  let uid = user._id;
  //testdrive//
  const [testdrivelist, setTestdrivelist] = useState({});
  let testDriveType = testdrivelist.List;

  async function getTestDriveList() {
    let resultTestdrive = await axios.get(
      `https://app.fuelfree.in/testDrive/userBookingList/${uid}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let testDriveData = await resultTestdrive.data;
    setTestdrivelist(testDriveData);
  }

  useEffect(() => {
    getTestDriveList();
  }, []);
  
   ////charging station////
  const [chargingStationlist, setchargingStation] = useState({});
  let chargingStationType = chargingStationlist.List;

  async function getChargingList() {
    let resultChargingStation = await axios.get(
      `https://app.fuelfree.in/booking/userChargingbookingList/${uid}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let chargingStationData = await resultChargingStation.data;
    setchargingStation(chargingStationData);
  }

  useEffect(() => {
    getChargingList();
  }, []);
  /////////////////////

  //////product booking///////
  const [Productlist, setProduct] = useState({});
  let ProductType = Productlist.AllList;

  async function getProductList() {
    let resultProduct = await axios.get(
      `https://app.fuelfree.in/productBook/userProductBookList/${uid}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let productData = await resultProduct.data;
    setProduct(productData);
  }

  useEffect(() => {
    getProductList();
  }, []);
  ///////////

  //////Book Enquiry ///////
  const [enquirylist, setEnquirylist] = useState({});
  let EnquirylistType = enquirylist.enquiryList;

  async function getEnquiryList() {
    let resultEnquiry = await axios.get(
      `https://app.fuelfree.in/enquiry/myEnquiryList/${uid}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let productData = await resultEnquiry.data;
    setEnquirylist(productData);
  }

  useEffect(() => {
    getEnquiryList();
  }, []);
  ///////////

  //Free consultant book///////
  const [consultantlist, setConsultantlist] = useState({});
  let consultantListType = consultantlist.enquiryList;

  async function getConsultantList() {
    let resultEnquiry = await axios.get(
      `https://app.fuelfree.in/consult/myconsultList/${uid}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let productData = await resultEnquiry.data;
    setConsultantlist(productData);
  }

  useEffect(() => {
    getConsultantList();
  }, []);

  //rental
  const[rental,setrental]=useState('')
   
  async function  getRentalBookins() {
    let resultEnquiry = await axios.get(
      `https://app.fuelfree.in/rentalCarBook/userBookingList/${uid}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let productData = await resultEnquiry.data;
    let list=await productData.AllList
    setrental(list);
  }

  useEffect(() => {
    getRentalBookins();
  }, []);


  ///////////

  // ===================tabs
  const [activeTab, setActiveTab] = useState("City1");
  const openCity = (cityName) => {
    setActiveTab(cityName);
  };
  // ====================tabs close=================

  // deleteTestDrive //
  async function deleteTestDrive(_id) {
    let res = await axios.patch(
      `https://app.fuelfree.in/testDrive/cancelbooking/${_id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let result = await res.data;
    window.location.reload();
  }
  //

  // deleteChargingStation //
  async function deleteChargingStation(_id) {
    let res = await axios.patch(
      `https://app.fuelfree.in/booking/cancelbooking/${_id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let result = await res.data;
    window.location.reload();
  }
  //


  // deleteProduct //
  async function deleteProduct(_id) {
    let res = await axios.patch(
      `https://app.fuelfree.in/productBook/cancelbooking/${_id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let result = await res.data;

    window.location.reload();
  }
  //

  // deleteEnquiry //
  async function deleteEnquiry(_id) {
    let res = await axios.delete(
      `https://app.fuelfree.in/favorite/remove/${_id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let result = await res.data;
    window.location.reload();
  }
  //

  return (
    <div id="news-page-id">
      <Header />
      <div className="tanker"></div>
      <section id="news-id">
        <div className="tanker">
          <h2 className="text-center">Booking History</h2>
          <div className="tabs-profile tabs-active">
            <button
              className={`book-tabs ${activeTab === "City1" ? "active" : ""}`}
              onClick={() => openCity("City1")}
            >
              Testdrive Booking
            </button>
            <button
              className={`book-tabs ${activeTab === "City2" ? "active" : ""}`}
              onClick={() => openCity("City2")}
            >
              Charging Station Booking
            </button>

            <button

              className={`book-tabs ${activeTab === "City3" ? "active" : ""}`}
              onClick={() => openCity("City3")}
            >
              Product Booking
            </button>

            <button
              className={`book-tabs ${activeTab === "City6" ? "active" : ""}`}
              onClick={() => openCity("City6")}
            >
               Rental Bookings
            </button>

            <button
              className={`book-tabs ${activeTab === "City4" ? "active" : ""}`}
              onClick={() => openCity("City4")}
            >
              Enquiry
            </button>
          </div>

          <div
            id="City1"
            className={`news-tab-content ${
              activeTab === "City1" ? "active" : ""
            }`}
          >
          {testDriveType?(
            <div id="OUR-CARS">
              <div className="tanker">
                <div className="OUR-CARS-outer">
                  {testDriveType &&
                    testDriveType.map((data) => (
                      <>
                        {data.status === "booked" ? (
                          <div class="Carcard" key={data._id}>
                            <div class="Cartitle">
                              <div className="delete-b-btn">
                                <h5>{data.name}</h5>
                                <BsCheck2Circle
                                  title="booked"
                                  className="booked-btn"
                                />
                              </div>
                              <h6>
                                <b>Product Name:</b> {data.productName}
                              </h6>
                              <p>
                                <b>E-mail:</b> {data.email}
                              </p>
                              <p>
                                <b>Phone no:</b> {data.phoneNo}
                              </p>
                              <p>
                                <b>Address:</b> {data.address}
                              </p>
                              <Link to={`/view-testdrivebooking-details/${data._id}`} class="view-offer-a">view details</Link>
                              <Link
                                onClick={() => {
                                  const confirmBox = window.confirm(
                                    "Do you really want to cancel booking?"
                                  );
                                  if (confirmBox === true) {
                                    deleteTestDrive(data._id);
                                  }
                                }}
                                class="view-offer-a"
                              >
                                cancel
                              </Link>
                            </div>
                          </div>
                        ) : (
                          <div class="Carcard" key={data._id}>
                            <div class="Cartitle">
                              <div className="delete-b-btn">
                                <h5>{data.name}</h5>
                                <GiCancel
                                  title="cancelled booking"
                                  className="delete-btn"
                                />
                              </div>
                              <h6>
                                <b>Product Name:</b> {data.productName}
                              </h6>
                              <p>
                                <b>E-mail:</b> {data.email}
                              </p>
                              <p>
                                <b>Phone no:</b> {data.phoneNo}
                              </p>
                              <p>
                                <b>Address:</b> {data.address}
                              </p>
                              <Link class="view-offer-a">cancelled</Link>
                            </div>
                          </div>
                        )}
                      </>
                    ))}
                </div>
              </div>
            </div>
            ):(<h2 className="product-found">No History found</h2>)}
          </div>
          <div
            id="City2"
            className={`news-tab-content ${
              activeTab === "City2" ? "active" : ""
            }`}
          >
          {chargingStationType? (
            <div id="OUR-CARS">
              <div className="tanker">
                <div className="OUR-CARS-outer">
                  {chargingStationType &&
                    chargingStationType.map((data) => (
                      <>
                        {data.status === "booked" ? (
                          <div class="Carcard" key={data._id}>
                            <div class="Cartitle">
                              <div className="delete-b-btn">
                                <h5>{data.name}</h5>
                                <BsCheck2Circle
                                  title="booking"
                                  className="booked-btn"
                                />
                              </div>
                              <h6>
                                <b>VehicleType:</b> {data.VehicleType}
                              </h6>
                              <p>
                                <b>E-mail:</b> {data.email}
                              </p>
                              <p>
                                <b>Phone no:</b> {data.phoneNo}
                              </p>
                              <p>
                                <b>Address:</b> {data.address}
                              </p>
                              <Link
                                onClick={() => {
                                  const confirmBox = window.confirm(
                                    "Do you really want to cancel booking?"
                                  );
                                  if (confirmBox === true) {
                                    deleteChargingStation(data._id);
                                  }
                                }}
                                class="view-offer-a"
                              >
                                cancel
                              </Link>
                            </div>
                          </div>
                        ) : (
                          <div class="Carcard" key={data._id}>
                            <div class="Cartitle">
                              <div className="delete-b-btn">
                                <h5>{data.name}</h5>
                                <GiCancel
                                  className="delete-btn"
                                  title="cancelled"
                                />
                              </div>
                              <h6>
                                <b>VehicleType:</b> {data.VehicleType}
                              </h6>
                              <p>
                                <b>E-mail:</b> {data.email}
                              </p>
                              <p>
                                <b>Phone no:</b> {data.phoneNo}
                              </p>
                              <p>
                                <b>Address:</b> {data.address}
                              </p>
                              <Link class="view-offer-a">cancelled</Link>
                            </div>
                          </div>
                        )}
                      </>
                    ))}
                </div>
              </div>
            </div>
            ): (<h2 className="product-found">No History found</h2>)}

          </div>
          <div
            id="City6"
            className={`news-tab-content ${
              activeTab === "City6" ? "active" : ""
            }`}
          >
          {rental? (
            <div id="OUR-CARS">
              <div className="tanker">
                <div className="OUR-CARS-outer">
                  {rental &&
                    rental.map((data) => (
                      <>
                        {data.status === "booked" ? (
                          <div class="Carcard" key={data._id}>
                            <div class="Cartitle">
                              <div className="delete-b-btn">
                                <h5>{data.name}</h5>
                                <BsCheck2Circle
                                  title="booking"
                                  className="booked-btn"
                                />
                              </div>
                              <h6>
                                <b>address:</b> {data.address}
                              </h6>
                              <p>
                                <b>productName:</b>{data.productName}
                              </p>
                              <p>
                                <b>Phone no:</b> {data.phoneNo}
                              </p>
                              <p>
                                <b>Address:</b> {data.address}
                              </p>
                              <Link to={`/view-rental-booking-details/${data._id}`} class="view-offer-a">view details</Link>
                              <Link
                                onClick={() => {
                                  const confirmBox = window.confirm(
                                    "Do you really want to cancel booking?"
                                  );
                                  if (confirmBox === true) {
                                    deleteChargingStation(data._id);
                                  }
                                }}
                                class="view-offer-a"
                              >
                                cancel
                              </Link>
                            </div>
                          </div>
                        ) : (
                          <div class="Carcard" key={data._id}>
                            <div class="Cartitle">
                              <div className="delete-b-btn">
                                <h5>{data.name}</h5>
                                <GiCancel
                                  className="delete-btn"
                                  title="cancelled"
                                />
                              </div>
                              <h6>
                                <b>VehicleType:</b> {data.VehicleType}
                              </h6>
                              <p>
                                <b>E-mail:</b> {data.email}
                              </p>
                              <p>
                                <b>Phone no:</b> {data.phoneNo}
                              </p>
                              <p>
                                <b>Address:</b> {data.address}
                              </p>
                              <Link class="view-offer-a">cancelled</Link>
                            </div>
                          </div>
                        )}
                      </>
                    ))}
                </div>
              </div>
            </div>
            ): (<h2 className="product-found">No History found</h2>)}

          </div>
          <div
            id="City3"
            className={`news-tab-content ${
              activeTab === "City3" ? "active" : ""
            }`}
          >
          {ProductType?(
            <div id="OUR-CARS">
              <div className="tanker">
                <div className="OUR-CARS-outer">
                  {ProductType &&
                    ProductType.map((data) => (
                      <>
                        {data.status === "booked" ? (
                          <div class="Carcard" key={data._id}>
                            <div class="Cartitle">
                              <div className="delete-b-btn">
                                <h5>{data.name}</h5>
                                <BsCheck2Circle
                                  title="booking"
                                  className="booked-btn"
                                />
                              </div>
                              <h6>
                                <b>Product Name:</b> {data.productName}
                              </h6>
                              <p>
                                <b>E-mail:</b> {data.email}
                              </p>
                              <p>
                                <b>Phone no:</b> {data.phoneNo}
                              </p>
                              <p>
                                <b>Address:</b> {data.preferredLocation}
                              </p>
                              <Link class="view-offer-a"  to={`/viewbookingdetails/${data._id}`}>view details</Link>
                              <Link
                                onClick={() => {
                                  const confirmBox = window.confirm(
                                    "Do you really want to cancel booking?"
                                  );
                                  if (confirmBox === true) {
                                    deleteProduct(data._id);
                                  }
                                }}
                                class="view-offer-a"
                              >
                                cancel
                              </Link>
                            </div>
                          </div>
                        ) : (
                          <div class="Carcard" key={data._id}>
                            <div class="Cartitle">
                              <div className="delete-b-btn">
                                <h5>{data.name}</h5>
                                <GiCancel
                                  title="canceled booking"
                                  className="delete-btn"
                                />
                              </div>
                              <h6>
                                <b>Product Name:</b> {data.productName}
                              </h6>
                              <p>
                                <b>E-mail:</b> {data.email}
                              </p>
                              <p>
                                <b>Phone no:</b> {data.phoneNo}
                              </p>
                              <p>
                                <b>Address:</b> {data.address}
                              </p>
                              <Link class="view-offer-a">Cancelled</Link>
                            </div>
                          </div>
                        )}
                      </>
                    ))}
                </div>
              </div>
            </div>
            ):(<h2 className="product-found">No History found</h2>)}
          </div>

          <div
            id="City4"
            className={`news-tab-content ${
              activeTab === "City4" ? "active" : ""
            }`}
          >
          {EnquirylistType?(
            <div id="OUR-CARS">
              <div className="tanker">
                <div className="OUR-CARS-outer">
                  {EnquirylistType &&
                    EnquirylistType.map((data) => (
                      <div class="Carcard" key={data._id}>
                        <div class="Cartitle">
                          <div className="delete-b-btn">
                            <h5>{data.name}</h5>
                          </div>
                          <h6>
                            <b>Product Name:</b> {data.productName}
                          </h6>
                          <p>
                            <b>Name:</b> {data.Name}
                          </p>
                          <p>
                            <b>Phone no:</b> {data.PhoneNo}
                          </p>
                          <p>
                            <b>City:</b> {data.city}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            ):((<h2 className="product-found">No History found</h2>))}
          </div>

          {/* <div
            id="City5"
            className={`news-tab-content ${
              activeTab === "City5" ? "active" : ""
            }`}
          >
            <div id="OUR-CARS">
              <div className="tanker">
              {consultantListType?(
                <div className="OUR-CARS-outer">
                  {consultantListType &&
                    consultantListType.map((data) => (
                      <div class="Carcard" key={data._id}>
                        <div class="Cartitle">
                          <h5>{data.name}</h5>
                          <h6>
                            <b>Product Name:</b> {data.productName}
                          </h6>
                          <p>
                            <b>E-mail:</b> {data.email}
                          </p>
                          <p>
                            <b>Phone no:</b> {data.phoneNo}
                          </p>
                          <p>
                            <b>Address:</b> {data.address}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
                ):(<h2 className="product-found">No History found</h2>)}
              </div>
            </div>
          </div> */}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default BookingHistory;
