import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/header";
import Footer from "../components/footer";
import "./testDriveFormsecond.css";

const SellPetrolVehicle = () => {
  const [profilepic, setProfilePic] = useState("");
  let user = JSON.parse(localStorage.getItem("user"));
  let uid = user._id;

  let navigate = useNavigate();

  const addUserPic = (e) => {
    setProfilePic(e.target.files[0]);
  };
  const defaultValue = {
    vehicleName: "",
    currentPrice: "",
    vehicleType: "",
    productDescription: "",
    category: "Petrol",
  };
  const validationSchema = yup.object().shape({
    vehicleName: yup
      .string("Vehicle Name should be string")
      .required("please enter your name"),
    currentPrice: yup
      .number("Selling Price should be number")
      .required("Selling Price is Required")
      .positive("Please Enter Positive number")
      .integer("please enter your sellingPrice"),
    vehicleType: yup.string().required("please enter your vehicleType"),
    productDescription: yup
      .string("Product Description should be string")
      .required("please enter your productDescription"),
  });

  const handleSubmit = async (values) => {
    let userObj = {
      ...values,
      sellerName: user?.userName,
      contactNo: user?.phoneNo,
      city: user?.city,
      Image: profilepic,
    };
    try {
      let res = await axios.post(
        `https://app.fuelfree.in/usedVehicle/addUsedVehicle/${uid}`,
        userObj,
        {
          headers: {
            "content-type": "multipart/form-data",
            Accept: "application/json",
          },
        }
      );
      let result = await res.data;
      toast.success("Success");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      toast.error("Unable to Submit");
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ToastContainer />
      <Header />
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
                    <span className="side-box">
                      {user?.phoneNo ? <>{user.phoneNo}</> : "-"}
                    </span>
                  </p>
                </div>
                <hr />
                <div className="news-side-content-text-top">
                  <p class="test-now-flex">
                    <span className="side-box">City</span>
                    <span className="side-box">
                      {user?.city ? <>{user.city}</> : "-"}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="main-div-buy-now">
              <div className="signup-page">
                <div className="signup">
                  <div className="signup-part">
                    <h3 className="book-testdrive-title color-dstr">
                      Sell your Old Petrol Vehicle
                      <br /> Enter details of your Vehicle
                    </h3>
                    <Formik
                      initialValues={defaultValue}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                    >
                      <Form className="signup-form">
                        <div>
                          <Field
                            type="text"
                            name="vehicleName"
                            placeholder="Vehicle Name"
                            className="form-control"
                          />
                          <p className="text-danger">
                            <ErrorMessage name="vehicleName" />
                          </p>
                        </div>
                        <div>
                          <Field
                            type="number"
                            name="currentPrice"
                            placeholder="Current Price"
                            className="form-control"
                          />
                          <p className="text-danger">
                            <ErrorMessage name="currentPrice" />
                          </p>
                        </div>
                        <div>
                          <Field
                            as="select"
                            name="vehicleType"
                            className="form-control"
                          >
                            <option>Select Vehicle Type</option>
                            <option value="Two Wheeler">Two wheeler</option>
                            <option value="Three Wheeler">Three wheeler</option>
                            <option value="Four Wheeler">Four wheeler</option>
                          </Field>
                          <p className="text-danger">
                            <ErrorMessage name="vehicleType" />
                          </p>
                        </div>
                        <div>
                          <Field
                            type="text"
                            name="productDescription"
                            placeholder="productDescription"
                            className="form-control"
                          />
                          <p className="text-danger">
                            <ErrorMessage name="productDescription" />
                          </p>
                        </div>

                        <div className="add-pic-im">
                          <input
                            type="file"
                            required
                            name="Image"
                            className="add-pic"
                            onChange={addUserPic}
                          />
                        </div>
                        <button type="submit" className="btn testdrive-btn">
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
};

export default SellPetrolVehicle;
