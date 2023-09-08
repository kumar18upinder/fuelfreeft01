import axios from "axios";
import * as yup from "yup";
import "./buynowsecond.css";
import "./testDriveFormsecond.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";

const BuyNowSecond = () => {
  const { pName, pPrice, city, brand } = useParams();
  const [reffrelCode, setReffrelCode] = useState("");
  const [agencyList, setagencyList] = useState("");
  const [agencyId, setAgencyId] = useState(null);
  let user = JSON.parse(localStorage.getItem("user"));
  let uid = user ? user._id : "";
  let WalletBalance = user ? user.walletBalance : "";

  const [userdetails, setuserdetails] = useState("");
  const usrDetails = async () => {
    let res = await axios.get(`https://app.fuelfree.in/user/details/${uid}`, {
      headers: {
        Accept: "application/json",
      },
    });
    let data = await res.data;
    let details = await data.Details;
    setuserdetails(details);
  };
  useEffect(() => {
    usrDetails();
  }, []);

  async function getagencyList() {
    let resultagency = await axios.get(
      `https://app.fuelfree.in/vendor/agency/filterByCity?city=${city}&Brand=${brand}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let agencyData = await resultagency.data;
    let agencyType = agencyData.search;
    setagencyList(agencyType);
  }

  useEffect(() => {
    getagencyList();
  }, [city, brand]);

  const defaultValue = {
    name: user.userName,
    email: user.userEmail,
    phoneNo: user.phoneNo,
    preferredLocation: "",
    productName: pName,
    preferredDate: "",
  };

  const today = new Date();

  const DiscountedPrice = pPrice - WalletBalance;
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(/[A-Za-z]/, "Must be a alphabet")
      .required("Name is required"),
    email: yup
      .string()
      .email()
      .matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "Should be valid email")
      .required("email is required"),
    phoneNo: yup
      .string()
      .matches(
        /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/,
        "Must be valid phone number"
      )
      .required("Phone No is required"),
    preferredLocation: yup.string().required("Enter Preferred Location"),
    productName: yup
      .string()
      .matches(/[A-Za-z]/, "Must be a alphabet")
      .required("Product Name is required"),
    preferredDate: yup
      .date()
      .required("Date must be required")
      .min(today, "From today's date and required"),
  });

  const handleSubmit = async (values) => {
    let VID = agencyId
      ? agencyId
      : toast.error("Select Vendor From Agencylist");
      let alldata={...values,referralCode:reffrelCode,walletDiscount: userdetails && userdetails.walletBalance, productPrice: pPrice,}
    const response = await axios.post(
      "https://app.fuelfree.in/productBook/bookProduct/" + uid + "/" + VID,
      alldata,
      {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    const result = response.data;
    if (result.success === "success") {
      toast.success(result.message);
      setTimeout(() => {
        window.location.reload("");
      }, 3000);
    } else if (result.failure === "failure") {
      toast.error(result.error);
    } else {
      toast.error("Invalid");
    }
  };

  return (
    <>
      <Header />
      <p className="create-ac-heading">Buy Now</p>
      <div className="buynow-bg">
        <div className="news-margin">
          <div className="tanker">
            <ToastContainer />
            <div className="buy-now-second">
              <div className="main-div-buy-now">
                <label className="label-enquiry">Select Agency List</label>
                <select
                  className="form-control"
                  style={{ padding: "6px" }}
                  name="agency"
                  id="agency"
                  onChange={($event) => setAgencyId($event.target.value)}
                >
                  <option value={""} style={{ width: "100" }}>
                    select dealer
                  </option>
                  {agencyList &&
                    agencyList.map((data) => (
                      <>
                        <option value={data._id} style={{ width: "100" }}>
                          {data.firmName} --------{data.vehicleDeals}
                        </option>
                      </>
                    ))}
                  <option
                    value={"64845366d856eeb16a8033a9"}
                    style={{ width: "100" }}
                  >
                    fuelfree dealer
                  </option>
                </select>

                <div className="signup-page">
                  <div className="signup">
                    <div className="signup-part">
                      <Formik
                        initialValues={defaultValue}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                      >
                        <Form className="signup-form">
                          <div className="signup-form-buy">
                            <div>
                              <lable className="label-enquiry">
                                Enter Name
                              </lable>
                              <Field
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="form-control"
                              />
                              <p className="text-danger">
                                <ErrorMessage name="name" />
                              </p>
                            </div>
                            <div>
                              <lable className="label-enquiry">
                                Enter Email
                              </lable>
                              <Field
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="form-control"
                              />
                              <p className="text-danger">
                                <ErrorMessage name="email" />
                              </p>
                            </div>
                            <div>
                              <lable className="label-enquiry">
                                Enter Phone Number
                              </lable>
                              <Field
                                type="tel"
                                name="phoneNo"
                                placeholder="Contact No"
                                className="form-control"
                              />
                              <p className="text-danger">
                                <ErrorMessage name="phoneNo" />
                              </p>
                            </div>

                            <lable className="label-enquiry">
                              Enter Preferred Location
                            </lable>
                            <Field
                              type="text"
                              name="preferredLocation"
                              placeholder="Preferred Location"
                              className="form-control"
                            />
                            <p className="text-danger">
                              <ErrorMessage name="preferredLocation" />
                            </p>
                          </div>
                          <div>
                            <lable className="label-enquiry">
                              Product Name
                            </lable>
                            <Field
                              type="text"
                              name="productName"
                              placeholder="Product Name"
                              className="form-control"
                              value={pName}
                            />
                            <p className="text-danger">
                              <ErrorMessage name="productName" />
                            </p>
                          </div>
                          <div>
                            <lable className="label-enquiry">
                              Do Not Select Today's Date
                            </lable>
                            <Field
                              type="date"
                              name="preferredDate"
                              placeholder="Preferred Date"
                              className="form-control"
                            />
                            <p className="text-danger">
                              <ErrorMessage name="preferredDate" />
                            </p>
                          </div>
                          <button type="submit" className="btn btn-success mt-4">
                            Submit
                          </button>
                        </Form>
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
              <div className="buy-right-bar">
                <div className="buy-side-right-bar-outer">
                  <h4 style={{textAlign:"center"}}>PRICE DETAILS</h4>
                  <hr/>
                  <div className="news-side-content-con">
                    <div className="news-side-content-text">
                      <p className="buy-now-flex"><span>Product Price</span><span>{pPrice}</span></p>
                    </div>
                    <div className="news-side-content-text">
                      <p className="buy-now-flex"><span> Wallet Balance</span><span>{userdetails && userdetails.walletBalance}</span></p>
                    </div>
                    <div className="news-side-content-text-top">
                      <p className="buy-now-flex"><span>Discount Price</span><span>{DiscountedPrice}</span></p>
                    </div>
                    <div className="news-side-content-text">
                      <input
                        type="text"
                        className="refer-input"
                        placeholder="Enter Referral Code"
                        name="reffrelCode"
                        value={reffrelCode}
                        onChange={(e) => setReffrelCode(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BuyNowSecond;
