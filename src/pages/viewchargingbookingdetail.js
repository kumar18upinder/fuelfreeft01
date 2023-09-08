import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import testdriveImg from "../pages/images/testdriveDetailImg.png";
import circleBounce from "../pages/images/circleBounce.gif";

function Viewchargingbookingdetails() {
  const { id } = useParams();
  const [bookingData, setbookingData] = useState("");

  const getBookings = async () => {
    let res = await axios.get(
      `https://app.fuelfree.in/rentalCarBook/details//${id}`,
      {
        header: {
          Accept: "application/json",
        },
      }
    );
    let data = await res.data;
    let details = await data.Details;
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
          <h1 className="heading-details-outer-test">Rental Details</h1>
          <div className="test-drive-booking">
            <h3 className="main-heading-order-details">Name</h3>
            <p className="main-detail-data">
              {bookingData && bookingData.name}
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
            <h3 className="main-heading-order-details">Status</h3>
            <p className="main-detail-data">
              {bookingData && bookingData.status}
            </p>
          </div>
          <div className="test-drive-booking">
            <h3 className="main-heading-order-details">Preferred Time</h3>
            <p className="main-detail-data">
              {bookingData && bookingData.time}
            </p>
          </div>
          <div className="test-drive-booking">
            <h3 className="main-heading-order-details">Preferred Date</h3>
            <p className="main-detail-data">
              {bookingData && bookingData.preferredDate}
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

export default Viewchargingbookingdetails;
