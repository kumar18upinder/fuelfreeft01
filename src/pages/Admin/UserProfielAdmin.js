import axios from "axios";
import "./userprofile.css";
import { useParams } from "react-router-dom";
import profilepic from "../images/profilepic.jpg";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import AdminBookingHistory from "./Adminbookinghistory";
import profileback from "../images/profile-background.jpeg";
import { IoIosWallet } from "react-icons/io";

function UserProfileAdmin() {
  const { id } = useParams();
  localStorage.setItem("userID", id);
  const [details, setdetails] = useState();

  const viewProfile = async () => {
    let res = await axios.get(`https://app.fuelfree.in/user/details/${id}`, {
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
    });
    let result = await res.data;
    let Details = result.Details;
    setdetails(Details);
  };

  useEffect(() => {
    viewProfile();
  }, []);
  return (
    <>
      <ToastContainer />
      <div id="profile-page" className="margin-headers">
        <div className="profile-page-div">
          <div className="profile-outer">
            <div className="profile-background-img">
              <h5>
                <span></span>My Account
              </h5>
              <img src={profileback} alt="profile"></img>
            </div>
            <div className="profile-top-left">
              <div className="profile-image">
                <div className="profilr-change-input">
                  <img src={profilepic} alt="profile"></img>
                </div>
                <div className="profile-basic-info">
                  <h3>{details && details.userName}</h3>
                  <p>
                    <i class="fa fa-envelope"></i>
                    {details && details.userEmail}
                  </p>
                  <p>
                    <i class="fa fa-phone"></i> {details && details.phoneNo}
                  </p>
                  <p>
                    <i><IoIosWallet/></i> {details && details.walletBalance}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <AdminBookingHistory />
          <div className="log-out-div">
            <p>Here is All details about User</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfileAdmin;
