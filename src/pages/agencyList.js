import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const AgencyList = () => {
  const [details, setDetails] = useState({});
  const { productId } = useParams();
  async function getProductdetails() {
    let resultDetails = await axios.get(
      `https://app.fuelfree.in/vendor/productDetails/${productId}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let data = await resultDetails.data;
    let details = data.productDetails;
    setDetails(details);
  }

  useEffect(() => {
    getProductdetails();
  }, []);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNo, setPhone] = useState(null);
  const [address, setAddress] = useState(null);
  const [city, setCity] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [productName, setproductName] = useState(
    details && details.productName
  );

  const user = JSON.parse(localStorage.getItem("user"));
  const id = user._id;

  const { vendorId } = useParams();
  const submitFormData = async () => {
    const data = {
      name,
      email,
      phoneNo,
      address,
      city,
      date,
      time,
      ...productName,
      productName: details && details.productName,
    };

    try {
      const response = await axios.post(
        "https://app.fuelfree.in/testDrive/addTestDrive/" + id + "/" + vendorId,
        data,
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      let result = response.data;
      if (result.success === "success") {
        toast.success(result.message);
      } else if (result.success === "failure") {
        toast.error(result.error);
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error("Failed");
    }
  };
  return (
    <>
      <Header />
      <ToastContainer />
      <br />
      <div className="tanker" id="test-drive-id">
        <div className="test-drive-outer"></div>
        <h5 className="test-brive-booking-heading">Book Your Test Drive</h5>

        <h5 className="test-brive-booking-heading">Name</h5>
        <input
          className="input-booking-test-drive"
          style={{ padding: "6px" }}
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={($event) => setName($event.target.value)}
        />
        <br />

        <h5 className="test-brive-booking-heading">Phone No</h5>
        <input
          className="input-booking-test-drive"
          style={{ padding: "6px" }}
          type="text"
          placeholder="Enter your phoneNo"
          value={phoneNo}
          onChange={($event) => setPhone($event.target.value)}
        />
        <br />

        <h5 className="test-brive-booking-heading">Email</h5>
        <input
          className="input-booking-test-drive"
          style={{ padding: "6px" }}
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={($event) => setEmail($event.target.value)}
        />

        <br />

        <h5 className="test-brive-booking-heading">Address</h5>
        <input
          className="input-booking-test-drive"
          style={{ padding: "6px" }}
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={($event) => setAddress($event.target.value)}
        />
        <br />

        <h5 className="test-brive-booking-heading">City</h5>
        <input
          className="input-booking-test-drive"
          style={{ padding: "6px" }}
          type="text"
          placeholder="Enter your city"
          value={city}
          onChange={($event) => setCity($event.target.value)}
        />
        <br />

        <h5 className="test-brive-booking-heading">Date </h5>
        <input
          className="input-booking-test-drive"
          style={{ padding: "6px" }}
          type="date"
          placeholder="Enter your date"
          value={date}
          onChange={($event) => setDate($event.target.value)}
        />
        <br />
        <h5 className="test-brive-booking-heading">Time</h5>
        <input
          className="input-booking-test-drive"
          style={{ padding: "6px" }}
          type="time"
          placeholder="Enter your date"
          value={time}
          onChange={($event) => setTime($event.target.value)}
        />
        <br />

        <h5 className="test-brive-booking-heading">Product Name</h5>
        <input
          className="input-booking-test-drive"
          style={{ padding: "6px" }}
          type="text"
          value={details && details.productName}
          placeholder="Enter your product name"
        />
        <Link className="sub-btn-click" onClick={submitFormData}>
          Submit
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default AgencyList;
