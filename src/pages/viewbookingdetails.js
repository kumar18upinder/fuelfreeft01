import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import testdriveImg from "../pages/images/testdriveDetailImg.png";
import circleBounce from "../pages/images/circleBounce.gif";

function Viewbookingdetails() {
  const { id } = useParams();
  //testdrive//
  const [bookingData, setbookingData] = useState("");

  const getBookings = async () => {
    let res = await axios.get(
      `https://app.fuelfree.in/productBook/detail/${id}`,
      {
        header: {
          Accept: "application/json",
        },
      }
    );
    let data = await res.data;
    let details = await data.detail;
    setbookingData(details);
  };

  useEffect(() => {
    getBookings();
  }, []);

  return (
    <>
      <Header />
      <div id="testdrive-detail-id">
        <div className="test-drive-page">
          <img src={testdriveImg} alt="testdrive" />
        </div>
        <div className="test-drive-details">
          <h1 className="heading-details-outer-test">Product Details</h1>
          <div className="test-drive-booking">
            <h3 className="main-heading-order-details">Name</h3>
            <p className="main-detail-data">
              {bookingData && bookingData.name}
            </p>
          </div>
          <div className="test-drive-booking">
            <h3 className="main-heading-order-details">Email</h3>
            <p className="main-detail-data">
              {bookingData && bookingData.email}
            </p>
          </div>
          <div className="test-drive-booking">
            <h3 className="main-heading-order-details"> Phone Number</h3>
            <p className="main-detail-data">
              {bookingData && bookingData.phoneNo}
            </p>
          </div>
          <div className="test-drive-booking">
            <h3 className="main-heading-order-details">Product Name</h3>
            <p className="main-detail-data">
              {bookingData && bookingData.productName}
            </p>
          </div>
          <div className="test-drive-booking">
            <h3 className="main-heading-order-details">Product Price</h3>
            <p className="main-detail-data">
              {bookingData && bookingData.productPrice}
            </p>
          </div>
          <div className="test-drive-booking">
            <h3 className="main-heading-order-details">Status</h3>
            <p className="main-detail-data">
              {bookingData && bookingData.status}
            </p>
          </div>
        </div>
      </div>
      <div className="test-drive-details-gif">
        <img src={circleBounce} alt="img" />
      </div>
      <Footer />
    </>
  );
}

export default Viewbookingdetails;
