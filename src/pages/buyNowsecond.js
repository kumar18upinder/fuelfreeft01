import axios from "axios";
import * as yup from "yup";
import "./buynowsecond.css";
import "./testDriveFormsecond.css";
import "../components/modalBox.css";
import ReactModal from "react-modal";
import Header from "../components/header";
import Footer from "../components/footer";
import party from "../pages/images/congo.jpg";
import "react-toastify/dist/ReactToastify.css";
import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";

const BuyNowSecond = () => {
  const [showModal, setShowModal] = useState(false);
  const { pName, pPrice, VT, city, brand } = useParams();
  let promoCodeFromlocal = localStorage.getItem("buyNOwPromo")
    ? JSON.parse(localStorage.getItem("buyNOwPromo"))
    : "";
  let promo = promoCodeFromlocal ? promoCodeFromlocal.promoCode : "";
  let discountofpromo = promoCodeFromlocal
    ? promoCodeFromlocal.discountAmount
    : "";
  let discountTypeofpromo = promoCodeFromlocal
    ? promoCodeFromlocal.discountType
    : "";
  const [discountPriceOfPromo, setPromoPrice] = useState("");

  useEffect(() => {
    if (discountTypeofpromo === "amount") {
      setPromoPrice(discountofpromo);
      // setIsFunctionCalled(true)
    } else if (discountTypeofpromo === "percentage") {
      let prices = (pPrice * discountofpromo) / 100;
      // setIsFunctionCalled(true)
      setPromoPrice(prices);
    }
  }, [promoCodeFromlocal]);
  const [reffrelCode, setReffrelCode] = useState("");
  const [agencyList, setagencyList] = useState("");
  const [promoCode, setPromoCode] = useState(promo);
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
    preferredDate: "",
  };

  const today = new Date();

  const DiscountedPrice = pPrice - WalletBalance - discountPriceOfPromo;
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
    preferredDate: yup
      .date()
      .required("Date must be required")
      .min(today, "Please select a date from today onwards"),
  });

  const [produtData, setproduct] = useState("");

  const handleSubmit = async (values) => {
    let VID = agencyId
      ? agencyId
      : toast.error("Select Vendor From Agencylist");
    let alldata = {
      ...values,
      referralCode: reffrelCode,
      walletDiscount: userdetails && userdetails.walletBalance,
      productPrice: pPrice,
      promoCode: promo && promo,
      VehicleType: VT,
      productName: pName,
    };
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

    const result = await response.data;
    if (result.success === "success") {
      toast.success(result.message);
      let product = await result.finalPrice;
      setproduct(product);
      setShowModal(true);
      localStorage.removeItem("buyNOwPromo");
    } else if (result.failure === "failure") {
      toast.error(result.error);
    } else {
      toast.error("Invalid");
    }
  };

  const buynowmodal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Header />
    <ToastContainer />
      <div className="buynow-bg-clr">
      <div className="buynow-bg">
        <div className="news-margin">
          <div className="tanker">
            <div className="buy-now-second-2">
              <div className="buy-right-bar">
                <div className="buy-side-right-bar-outer-2">
                  <div className="news-side-content-con">
                    <div className="nnnnn">
                      <div className="news-side-content-text">
                        <p className="buy-now-flex">{pName}</p>
                      </div>
                      <div className="news-side-content-text">
                        <p className="buy-now-flex">{brand}</p>
                      </div>
                      <div className="news-side-content-text">
                        <p className="buy-now-flex">{pPrice}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="news-side-content-text-top">
                      <p className="buy-now-flex">
                        <span> Wallet Balance</span>
                        <span className="side-box1-buy">
                          {userdetails && userdetails.walletBalance}
                        </span>
                      </p>
                    </div>
                    <div className="news-side-content-text-top">
                      <p className="buy-now-flex">
                        <span className="side-box-buy">Discount Price</span>
                        <span className="side-box1-buy">{DiscountedPrice}</span>
                      </p>
                    </div>
                    <hr />
                    <div className="news-side-content-text">
                      <input
                        type="text"
                        className="refer-input mt-3"
                        placeholder="Enter Referral Code"
                        name="reffrelCode"
                        value={reffrelCode}
                        onChange={(e) => setReffrelCode(e.target.value)}
                      />
                    </div>
                    <div className="news-side-content-text">
                      <input
                        type="text"
                        className="refer-input promo"
                        placeholder="Apply Promo Code"
                        name="promoCode"
                        value={promo}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      <button>
                        <Link className="offer-btn" to={`/offers/${VT}`}>
                          see offers
                        </Link>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-div-buy-now-2">
                <h3 className="book-your-2">Buy Now</h3>
                <select
                  className="form-control"
                  style={{ padding: "6px" }}
                  name="agency"
                  id="agency"
                  required
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
                            <div className="agency-cls">
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
                            <div className="agency-cls">
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
                            <div className="agency-cls">
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
                            <div className="agency-cls">
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
                          </div>
                          <div className="agency-cls">
                            <lable className="label-date">
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
                          <button
                            type="submit"
                            className="btn btn-success mt-4 testdrive-btn-2"
                          >
                            Submit
                          </button>
                        </Form>
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      {showModal && (
        <ReactModal isOpen={true} onRequestClose={() => setShowModal(false)}>
          <div className="buynowmodelbox">
            <div className="congo">
              <h2>Congratulations</h2>
              <img className="party-on" src={party} alt="party" />
            </div>
            <p>You got fuelfree Discount</p>
            <p>Final Product Price:-{produtData}</p>
            <button
              type="submit"
              className="btn btn-success mt-4"
              onClick={buynowmodal}
            >
              OK
            </button>
          </div>
        </ReactModal>
      )}
      <Footer />
    </>
  );
};

export default BuyNowSecond;
