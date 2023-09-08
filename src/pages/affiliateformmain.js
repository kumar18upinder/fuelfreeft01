import axios from "axios";
import * as yup from "yup";
import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";

function Affiliateform() {
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState(null);
  const defaultValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNo: "",
    city: "",
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(/[A-Za-z]/, "Must be an alphabet")
      .required("Name is required"),
    email: yup
      .string()
      .email()
      .matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "Should be a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .matches(/^[0-9]{6}$/, "Enter a 6-digit number only")
      .required("Please enter PIN"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "PIN must match")
      .required("Confirm PIN is required"),
    phoneNo: yup
      .string()
      .matches(
        /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/,
        "Must be a valid phone number"
      )
      .required("Phone number is required"),
    city: yup.string().required("Enter city"),
  });

  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("confirmPassword", values.confirmPassword);
      formData.append("phoneNo", values.phoneNo);
      formData.append("city", values.city);
      formData.append("profilePic", profilePic);

      const response = await axios.post(
        "https://app.fuelfree.in/affiliate/register",
        formData
      );
      let result = await response.data;
      let affiliateINFO = await result.affiliateData;
      if (result.success === "success") {
        localStorage.setItem("affiliateINFO", JSON.stringify(affiliateINFO));
        toast.success(result.message);
      }
      // Reset form values and profile picture
      setProfilePic(null);
      navigate("/affiliaterefferalcode");
    } catch (error) {
      toast.error("Registration failed");
    }
  };

  return (
    <div>
      <Header />
      <ToastContainer />
      <div id="login-page-id">
        <div class="login-form-new" id="signup-id">
          <div className="login-inner-contnet">
            <h3>Affiliate Registration</h3>
            <div className="social-login">
              <h5>Enter your Details</h5>
            </div>
            <Formik
              initialValues={defaultValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <Field
                  type="text"
                  name="name"
                  placeholder="User Name"
                  className="form-control"
                />
                <p className="text-danger">
                  <ErrorMessage name="name" />
                </p>
                <Field
                  type="email"
                  name="email"
                  placeholder="User Email"
                  className="form-control"
                />
                <p className="text-danger">
                  <ErrorMessage name="email" />
                </p>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter 6-digits PIN"
                  className="form-control"
                />
                <p className="text-danger">
                  <ErrorMessage name="password" />
                </p>
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm PIN"
                  className="form-control"
                />
                <p className="text-danger">
                  <ErrorMessage name="confirmPassword" />
                </p>
                <Field
                  type="tel"
                  name="phoneNo"
                  placeholder="Phone No"
                  className="form-control"
                />
                <p className="text-danger">
                  <ErrorMessage name="phoneNo" />
                </p>
                <Field
                  className="form-control"
                  placeholder="City"
                  type="text"
                  id="city"
                  name="city"
                />
                <lable>Please add you profile photo.</lable>
                <input
                  type="file"
                  name="profilePic"
                  className="form-control"
                  onChange={(e) => setProfilePic(e.target.files[0])}
                />
                <p className="text-danger">
                  <ErrorMessage name="profilePic" />
                </p>

                <button
                  type="submit"
                  className="btn btn-primary mt-3 userSignup-btn"
                >
                  Submit
                </button>
              </Form>
            </Formik>
          </div>
        </div>
        <div className="login-right-content">
          <h3>
            Join Our Affiliate Network
            <br />
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Affiliateform;
