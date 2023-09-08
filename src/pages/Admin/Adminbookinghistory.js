import axios from "axios";
import "./Adminbookinghistory.css";
import { Link } from "react-router-dom";
import { GiCancel } from "react-icons/gi";
import { BsCheck2Circle } from "react-icons/bs";
import React, { useState, useEffect } from "react";

function AdminBookingHistory() {
  let userid = localStorage.getItem("userID")
    ? localStorage.getItem("userID")
    : null;

  //testdrive//
  const [testdrivelist, setTestdrivelist] = useState({});
  let testDriveType = testdrivelist.List;

  async function getTestDriveList() {
    let resultTestdrive = await axios.get(
      `https://app.fuelfree.in/testDrive/userBookingList/${userid}`,
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
  /////

  ////charging station////
  const [chargingStationlist, setchargingStation] = useState({});
  let chargingStationType = chargingStationlist.List;

  async function getChargingList() {
    let resultChargingStation = await axios.get(
      `https://app.fuelfree.in/booking/userChargingbookingList/${userid}`,
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
      `https://app.fuelfree.in/productBook/userProductBookList/${userid}`,
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
      `https://app.fuelfree.in/enquiry/myEnquiryList/${userid}`,
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

  //////Free consultant book///////
  const [consultantlist, setConsultantlist] = useState({});
  let consultantListType = consultantlist.enquiryList;

  async function getConsultantList() {
    let resultEnquiry = await axios.get(
      `https://app.fuelfree.in/enquiry/myEnquiryList/${userid}`,
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

  const [wishlist, setwishlist] = useState([]);

  const getwishlist = async () => {
    let res = await axios.get(
      `https://app.fuelfree.in/favorite/list/${userid}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let result = await res.data;
    let wishlist = result.list;

    setwishlist(wishlist);
  };
  useEffect(() => {
    getwishlist();
  }, []);

  //getvisithistory
  const [visitCount, setVisitCount] = useState("");
  const getvisithistory = async () => {
    let res = await axios.get(`https://app.fuelfree.in/user/track/${userid}`, {
      headers: {
        Accept: "application/json",
      },
    });
    let result = await res.data;
    let visit = result.user;
    let pages = visit.pagesVisited;
    setVisitCount(pages);
  };
  useEffect(() => {
    getvisithistory();
  }, []);

  const [activeTab, setActiveTab] = useState("City1");
  const openCity = (cityName) => {
    setActiveTab(cityName);
  };
  return (
    <div id="news-page-id">
      <div className="tanker"></div>
      <section id="news-id">
        <div className="tanker">
          <h2 className="text-center">Booking History</h2>
          <div className="tabs-profile tabs-active">
            <button
              className={`book-tabs ${activeTab === "City9" ? "active" : ""}`}
              onClick={() => openCity("City9")}
            >
              Tracking user
            </button>
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
              className={`book-tabs ${activeTab === "City4" ? "active" : ""}`}
              onClick={() => openCity("City4")}
            >
              Enquiry
            </button>

            <button
              className={`book-tabs ${activeTab === "City5" ? "active" : ""}`}
              onClick={() => openCity("City5")}
            >
              Free Consultation
            </button>
            <button
              className={`book-tabs ${activeTab === "City6" ? "active" : ""}`}
              onClick={() => openCity("City6")}
            >
              Wishlist
            </button>
          </div>

          <div
            id="City9"
            className={`news-tab-content ${
              activeTab === "City9" ? "active" : ""
            }`}
          >
            <div id="OUR-CARS">
              <div className="tanker">
                <div className="OUR-CARS-outer">
                  {visitCount &&
                    visitCount.map((data) => (
                      <h3>
                        {data},<br />{" "}
                      </h3>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div
            id="City1"
            className={`news-tab-content ${
              activeTab === "City1" ? "active" : ""
            }`}
          >
            {testDriveType ? (
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
                                <Link class="view-offer-a">view</Link>
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
            ) : (
              <h2>Blank</h2>
            )}
          </div>
          <div
            id="City2"
            className={`news-tab-content ${
              activeTab === "City2" ? "active" : ""
            }`}
          >
            {chargingStationType ? (
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
                                <Link class="view-offer-a">view</Link>
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
            ) : (
              <h2>Blank</h2>
            )}
          </div>
          <div
            id="City3"
            className={`news-tab-content ${
              activeTab === "City3" ? "active" : ""
            }`}
          >
            {ProductType ? (
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
                                  <b>Address:</b> {data.address}
                                </p>
                                <Link class="view-offer-a">view details</Link>
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
                                <Link class="view-offer-a">cancelled</Link>
                              </div>
                            </div>
                          )}
                        </>
                      ))}
                  </div>
                </div>
              </div>
            ) : (
              <h2>Blank</h2>
            )}
          </div>
          <div
            id="City6"
            className={`news-tab-content ${
              activeTab === "City6" ? "active" : ""
            }`}
          >
            <div id="OUR-CARS">
              <div className="tanker">
                <div className="OUR-CARS-outer">
                  {wishlist &&
                    wishlist.map((data) => (
                      <>
                        {wishlist ? (
                          <div class="Carcard" key={data._id}>
                            <div class="Cartitle">
                              <div className="protuct-like">
                                {data &&
                                data.productID &&
                                data.productID.productImage ? (
                                  <img
                                    src={`https://app.fuelfree.in/${data.productID.productImage}`}
                                    alt="Card image cap"
                                  />
                                ) : (
                                  ""
                                )}
                              </div>
                              <h6>
                                <b>Product Name:</b>{" "}
                                {data &&
                                data.productID &&
                                data.productID.productName ? (
                                  <>{data && data.productID.productName}</>
                                ) : (
                                  ""
                                )}
                              </h6>
                              <h6>
                                <b>productPrice:</b>{" "}
                                {data &&
                                data.productID &&
                                data.productID.productPrice ? (
                                  <>{data && data.productID.productPrice}</>
                                ) : (
                                  ""
                                )}
                              </h6>

                              <Link
                                class="view-offer-a"
                                to={`/products/${
                                  data &&
                                  data.productID &&
                                  data.productID.productName
                                    ? data.productID.productName
                                    : "fuelree-product"
                                }/${
                                  data && data.productID && data.productID._id
                                    ? data.productID._id
                                    : "fuelree-product"
                                }`}
                              >
                                view details
                              </Link>
                            </div>
                          </div>
                        ) : (
                          <h2>Blank</h2>
                        )}
                      </>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div
            id="City4"
            className={`news-tab-content ${
              activeTab === "City4" ? "active" : ""
            }`}
          >
            {EnquirylistType ? (
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
                              <b>Message:</b> {data.Message}
                            </p>
                            <p>
                              <b>Phone no:</b> {data.PhoneNo}
                            </p>
                            <p>
                              <b>Address:</b> {data.city}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ) : (
              <h2>Blank</h2>
            )}
          </div>

          <div
            id="City5"
            className={`news-tab-content ${
              activeTab === "City5" ? "active" : ""
            }`}
          >
            {consultantListType ? (
              <div id="OUR-CARS">
                <div className="tanker">
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
                              <b>Message:</b> {data.Message}
                            </p>
                            <p>
                              <b>Phone no:</b> {data.PhoneNo}
                            </p>
                            <p>
                              <b>Address:</b> {data.city}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ) : (
              <h2>Blank</h2>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminBookingHistory;
