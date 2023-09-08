import React, { useEffect, useState } from "react";
import axios from "axios";
import * as yup from "yup";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";

function Rentvehiclebooking() {
  const { Pname, Pprice } = useParams();
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";
  const userId = user._id;
  const defaultValues = {
    alternatePhoneNo: "",
    preferredDate: "",
    time: "",
    address: "",
  };
  const today = new Date();
  const validationSchema = yup.object().shape({
    alternatePhoneNo: yup
      .string()
      .matches(
        /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/,
        "Must be valid phone number"
      ),
    preferredDate: yup
      .date()
      .required("Date must be required")
      .min(today, "Please select a date from today onwards"),
    address: yup.string().required("Enter Address"),
  });

  const [agencyId, setAgencyId] = useState("");
  const handleSubmit = async (values) => {
    let allvalues = {
      ...values,
      name: user?.userName,
      phoneNo: user?.phoneNo,
      productName: Pname,
      productPrice: Pprice,
    };
    let response = await axios.post(
      `https://app.fuelfree.in/rentalCarBook/book/${userId}/${agencyId}`,
      allvalues,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    let result = response.data;
    if (result.success === "success") {
      toast.success(result.message);
    } else {
      toast.error(result.error);
    }
  };

  const [agencyList, setagencyList] = useState({});
  let agencyType = agencyList.data;
  async function getagencyList() {
    let resultagency = await axios.get(
      "https://app.fuelfree.in/carRental/vendorList",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let agencyData = await resultagency.data;
    setagencyList(agencyData);
  }

  useEffect(() => {
    getagencyList();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <ToastContainer />
      <div className="buynow-bg">
        <div className="tanker">
          <div className="buy-now-second">
            <div className="buy-right-bar">
              <div className="buy-side-right-bar-outer">
                <div className="news-side-content-text-top">
                  <p class="test-now-flex">
                    <span className="side-box">Name</span>
                    <span className="side-box">{user?.userName}</span>
                  </p>
                </div>
                <hr />
                <div className="news-side-content-text-top">
                  <p class="test-now-flex">
                    <span className="side-box">Contact</span>
                    <span className="side-box">{user?.phoneNo}</span>
                  </p>
                </div>
                <hr />
                <div className="news-side-content-text-top">
                  <p class="test-now-flex">
                    <span className="side-box">Product Name</span>
                    <span className="side-box">{Pname}</span>
                  </p>
                </div>
                <hr />
                <div className="news-side-content-text-top">
                  <p class="test-now-flex">
                    <span className="side-box">Product Price</span>
                    <span className="side-box">{Pprice}/h</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="main-div-buy-now">
              <div className="signup-page">
                <div className="signup">
                  <div className="signup-part">
                    <h2 className="book-testdrive-title">
                      Book Rental Vehicle
                    </h2>
                    <Formik
                      initialValues={defaultValues}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                    >
                      <Form className="signup-form">
                        <select
                          className="form-control"
                          style={{ padding: "6px" }}
                          name="agency"
                          id="agency"
                          onChange={($event) =>
                            setAgencyId($event.target.value)
                          }
                          required
                        >
                          <option value={""} style={{ width: "100" }}>
                            select dealer
                          </option>
                          {agencyType &&
                            agencyType.map((data) => (
                              <>
                                <option value={data._id}>{data.name}</option>
                              </>
                            ))}
                          <option>Select Vendor Name</option>
                        </select>
                        <label className="rental-label">Alternate Contact</label>
                        <Field
                          type="tel"
                          name="alternatePhoneNo"
                          placeholder="Enter Phone Number"
                          className="form-control"
                        />
                        <p className="text-danger">
                          <ErrorMessage name="alternatePhoneNo" />
                        </p>
                        <label className="rental-label">Choose Date</label>
                        <Field
                          type="date"
                          name="preferredDate"
                          placeholder="date"
                          className="form-control"
                        />
                        <p className="text-danger">
                          <ErrorMessage name="preferredDate" />
                        </p>
                        <label className="rental-label">Choose Time</label>
                        <Field
                          type="time"
                          name="time"
                          placeholder="time"
                          className="form-control"
                        />
                        <p className="text-danger">
                          <ErrorMessage name="time" />
                        </p>
                        <label className="rental-label">Enter Address</label>
                        <Field
                          type="text"
                          name="address"
                          placeholder="Enter Your Location"
                          className="form-control"
                        />
                        <p className="text-danger">
                          <ErrorMessage name="address" />
                        </p>
                        <button type="submit" className="btn rental-booking-btn">
                          Submit
                        </button>
                        <br />
                      </Form>
                    </Formik>
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
}

export default Rentvehiclebooking;
