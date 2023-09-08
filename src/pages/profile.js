import "./profile.css";
import axios from "axios";
import * as yup from "yup";
import { gapi } from "gapi-script";
import config from "../utils/config";
import profilepic from "./images/profilepic.jpg";
import Header from "../components/header";
import { FaMotorcycle, FaEdit, FaUserEdit } from "react-icons/fa";
import BookingHistory from "./bookingHistory";
import { GoogleLogout } from "react-google-login";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Field, Form, ErrorMessage } from "formik";
import profileback from "./images/profile-background.jpeg";
import $ from "jquery";


function Profile() {
  const [isGoogleLogin, setIsGoogleLogin] = useState(false); // State to track if it's a Google login

  
  let affiliatdata=localStorage.getItem('affiliateINFO')?(JSON.parse(localStorage.getItem('affiliateINFO'))):''
  let reffrel=affiliatdata.referralCode

  $(".Click-here-2").on("click", function () {
    $(".custom-model-main").addClass("model-open");
  });
  $(".close-btn, .bg-overlay").click(function () {
    $(".custom-model-main").removeClass("model-open");
  });

  let navigate = useNavigate();
  const [details, setdetails] = useState();

  let user = JSON.parse(localStorage.getItem("user"));
  let uid = user._id;

  const cleintId = config.googleClientId;
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: cleintId,
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const viewProfile = async () => {
    let res = await axios.get(`${config.url}user/details/${uid}`, {
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    let result = await res.data;
    let Details = result.Details;
    setdetails(Details);
    navigate("/profile");
  };

  useEffect(() => {
    viewProfile();
  }, []);


  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      setIsGoogleLogin(user.socialMediaPlatform === "GOOGLE");
    }
  }, []);

  //  function to handle the logout action in the app
  const handleLogout = () => {
    let user = JSON.parse(localStorage.getItem("user") || "{}");
    if (user && user.socialMediaPlatform == "GOOGLE") {
      document
        .getElementById("googleBtn")
        .getElementsByTagName("button")[0]
        .click();
    } else if (user && user.socialMediaPlatform == "FACEBOOK") {
    }
    setTimeout(() => {
      navigate("/");
    }, 1000);
    localStorage.clear();
  };

  // sell used vehicle================

  const [selectedVehicle, setSelectedVehicle] = useState("");

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedVehicle(selectedValue);
    if (selectedValue === "petrol") {
      navigate("/sell-your-petrol-vehicle");
    } else if (selectedValue === "electric") {
      navigate("/usedvehicleform");
    }
  };
  
  // =====change pin ===== //
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  const defaultValues = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
  const users = JSON.parse(localStorage.getItem("user"));
  const userId = users._id;
  const validationSchema = yup.object().shape({
    oldPassword: yup
      .string()
      .matches(/^[0-9]{6}$/, "Enter 6-digits number only")
      .required("Old PIN is required"),
    newPassword: yup
      .string()
      .matches(/^[0-9]{6}$/, "Enter 6-digits number only")
      .required("New PIN is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("newPassword"), null], "PIN must match")
      .required("Confirm PIN is required"),
  });
  const handleSubmit = async (values) => {
    try {
      let response = await axios.post(
        `https://app.fuelfree.in/user/change-password/${userId}`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      let result = await response.data;
      console.log(result, "res");
      if (result.status === " success") {
        toast.success("PIN changed Successful");
        handleClose();
      }
    } catch (error) {
      toast.error("Unable to Change");
    }
  };

 //userDetails
 const [userdetails,setuserdetails]=useState('')

 const usrDetails=async()=>{
       let res=await axios.get(`https://app.fuelfree.in/user/details/${uid}`,{
         headers:{
           "Accept":"application/json"
         }
       })
       let data=await res.data
       let details=await data.Details
       setuserdetails(details)
 }
 useEffect(()=>{
     usrDetails()
 },[])
   
  return (
    <>
      <ToastContainer />
      <div id="profile-page">
        <Header />
        <div id="googleBtn" style={{ display: "none" }}>
          <GoogleLogout
            clientId={cleintId}
            buttonText="Logout"
            onLogoutSuccess={() => console.log("LogOut")}
          />
        </div>
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
                  {localStorage.getItem("user") ? (
                    <h3>{details && details.userName}</h3>
                  ) : (
                    ""
                  )}

                  <p>
                    <i className="fa fa-envelope"></i>
                    {details && details.userEmail}
                  </p>
                  <p>
                    <i className="fa fa-phone"></i> {details && details.phoneNo}
                  </p>
                 {
                  reffrel?(<p className="">
                    REFFERAL_CODE :- {reffrel}
                  </p>):''
                 } 
                  {
                  userdetails&&userdetails.walletBalance
                  ?(<p className="">
                    walletBalance :- {userdetails&&userdetails.walletBalance}
                  </p>):''
                 } 
                </div>
              </div>
              <div className="log-out-div">
                {localStorage.getItem("user") ? (
                  <Link to="/" onClick={handleLogout}>
                    {" "}
                    <i className="fa fa-power-off"></i>
                    Logout
                  </Link>
                ) : (
                  <Link className="profile-logout" to="/">
                    <i className="fa fa-sign-in"></i>
                    login
                  </Link>
                )}{" "}
                <Link className="profile-logout" to={"/updateprofile"}>
                  <i><FaUserEdit/></i>Edit Profile
                </Link>
                
                {localStorage.getItem("user") && !isGoogleLogin && (
                  <Link>
                  {/* // krpya karke is code ko na hatay anytha dikkat ka samna krna pad sakta hai */}
                   <div class="mbr-section-btn Click-here-2">
                   <i><FaEdit/></i>
                    Edit PIN
                    <span class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>
                  </div>
                </Link>
                )}
              
              
              <select className="profile-logout" value={selectedVehicle} onChange={handleSelectChange}>
              <i><FaMotorcycle/></i>
              <option value="">Sell Used Vehicle</option>
              <option value="electric">Electric Vehicle</option>
              <option value="petrol">Petrol Vehicle</option>
              
      </select>
                 
              </div>
            </div>
          </div>
          <BookingHistory />
        </div>
      </div>

      {/* Model Box */}
      <div className="mbr-section-btn mt-3 Click-here-2"></div>
      <div className="custom-model-main">
        <div className="custom-model-inner">
          <div className="close-btn">×</div>
          <div className="custom-model-wrap">
            <div className="pop-up-content-wrap contact-cls">
              <Formik
                initialValues={defaultValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form className="model-cls">
                  <Field
                    type="password"
                    name="oldPassword"
                    className="form-control"
                    placeholder="Enter Old PIN"
                  />
                  <p className="text-danger">
                    <ErrorMessage name="oldPassword" />
                  </p>
                  <Field
                    type="password"
                    name="newPassword"
                    className="form-control"
                    placeholder="Enter New PIN"
                  />
                  <p className="text-danger">
                    <ErrorMessage name="newPassword" />
                  </p>
                  <Field
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    placeholder="Confirm PIN"
                  />
                  <p className="text-danger">
                    <ErrorMessage name="confirmPassword" />
                  </p>
                  <div className="btn-design">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      // onClick={changePin}
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
        <div className="bg-overlay"></div>
      </div>
    </>
  );
}

export default Profile;
