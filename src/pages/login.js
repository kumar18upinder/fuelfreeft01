 import Header from "../components/header";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import loginimg from "./images/login-img.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "./login.css";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import GoogleLogins from "./googleLogin";
import FacebookLogins from "./facebookLogin";
import FacebookLoginComponent from "../components/facebookUser";

function Login() {


  const defaultValues = {
    userEmail: "",
    userPassword: "",
  };

  const Navigate = useNavigate();
  const validationSchema = yup.object().shape({
    userEmail: yup
      .string()
      .email()
      .matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "Must be valid Email")
      .required("Email is required"),
    userPassword: yup
      .string()
      .matches(/^[0-9]{6}$/, "Enter 6-digits number only")
      .required("User PIN is required"),
  });
  const handleSubmit = async (values) => {
    console.log(values, "values");
    try {
      let res = await axios.post(
        "https://app.fuelfree.in/user/signin",
        values,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      let result = await res.data;
      let userinfo = result.user_details;
      let userToken = result.token;
      if (result.success === "success") {
        localStorage.setItem("token", userToken);
        localStorage.setItem("user", JSON.stringify(userinfo));
        toast.success("Login Successful");
        gologin();
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error("Incorrect credentials");
    }
  };

  const gologin = () => {
    setTimeout(() => {
      Navigate("/");
    }, 1500);
  };
  return (
    <div>
      <Header />
      <ToastContainer />
      <div id="login-page-id">
        <div className="login-form-new">
          <div className="login-form-new-heading">
            <h3>Login to Your Account</h3>
          </div>
          <div className="login-inner-contnet">
            <div className="social-login">
              <h5>Login using social media</h5>
              <GoogleLogins/>
            </div>

            <div className="or-login">
              <span>OR</span>
            </div>

            <Formik
              initialValues={defaultValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <Field
                  type="email"
                  name="userEmail"
                  placeholder="E-mail"
                  className="form-control"
                />
                <p className="text-danger">
                  <ErrorMessage name="userEmail" />
                </p>

                <Field
                  type="password"
                  name="userPassword"
                  placeholder="Enter 6-digits PIN"
                  className="form-control"
                />
                <p className="text-danger">
                  <ErrorMessage name="userPassword" />
                </p> 
                <button
                  type="submit"
                  className="btn btn-primary userlogin-btn mt-3"
                >
                  Login
                </button>
              </Form>
            </Formik>
          </div>
        </div>
        <div className="login-right-content">
          <h3>New Here?</h3>
          <p>
            Create new Account for <b>FuelFree</b>{" "}
          </p>
          <Link to="/signUp">Sign up</Link>
        </div>
      </div>
      
      <Footer />
      
    </div>
    
  );
}

export default Login;
