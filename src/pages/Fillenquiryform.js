import React from "react";
import "./Fillenquiryform.css";
import { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Fillenquiry from "../pages/images/test.png";

function Fillenquiryform() {
  const { id, pName } = useParams();

  const [productDetails, setDetails] = useState("");
  let data = productDetails.productDetails;
  async function getProductdetails() {
    let resultDetails = await axios.get(
      `https://app.fuelfree.in/product/details/${id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let data = await resultDetails.data;
    setDetails(data);
  }

  useEffect(() => {
    getProductdetails();
  }, []);
  let user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";

  let userid = user._id;

  const [Name, setName] = useState(user.userName);
  const [PhoneNo, setPhoneNo] = useState(user.phoneNo);
  const [productName, setproductName] = useState(pName);
  const [Message, setMessage] = useState("");
  const [city, setcity] = useState("");

  const enquiry = async () => {
    let item = {
      ...productName,
      productName: data && data.productName,
      Name,
      PhoneNo,
      city,
      Message,
    };

    try {
      let res = await axios.post(
        `https://app.fuelfree.in/enquiry/enquirycreate/${userid}/${data._id}`,
        item,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      let result = await res.data;
      if (result.success === "success") {
        toast.success(result.message);
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error("Invalid Inquiry");
    }
  };
  return (
    <div>
      <Header />
      <ToastContainer />
      <div className="enquiry-bg-clr">
        <div className="enquiry-bg">
          <img src={Fillenquiry} alt="" />
        </div>
        <div className="enquiry-bg-2 tanker">
          <h2 className="enquiry-title">ENQUIRY</h2>
          <label className="label-fill-clr">Product Name</label>
          <input
            type="text"
            name="productname"
            value={pName}
            className="input-fill"
          />
          <label className="label-fill-clr">Enter Name</label>
          <input
            type="text"
            value={Name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className="input-fill"
          />
          <label className="label-fill-clr">Enter Phone Number</label>
          <input
            type="tel"
            value={PhoneNo}
            placeholder="Phone"
            onChange={(e) => setPhoneNo(e.target.value)}
            className="input-fill"
          />
          <label className="label-fill-clr">Enter Message</label>
          <input
            type="text"
            name="message"
            value={Message}
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            className="input-fill"
          />
          <label className="label-fill-clr">Enter City</label>
          <input
            type="text"
            value={city}
            placeholder="city"
            onChange={(e) => setcity(e.target.value)}
            className="input-fill"
          />
          <button type="submit" onClick={enquiry} className="submit-fill-btn">
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Fillenquiryform;
