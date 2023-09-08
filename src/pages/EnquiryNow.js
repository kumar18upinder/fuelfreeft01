import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./EnquiryForm.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function EnquiryForm() {
  const defaultValues = {
    Name: "",
    Email: "",
    PhoneNo: "",
    Date: "",
    Message: "",
    time: "",
  };

  const today = new Date();
  const validationSchema = yup.object().shape({
    Name: yup
      .string()
      .matches(/[A-Za-z]/, "Must be a alphabet")
      .required("Name is required"),
    Email: yup
      .string()
      .email()
      .matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "Should be valid Email")
      .required("Email is required"),
    PhoneNo: yup
      .string()
      .matches(
        /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/,
        "Must be valid phone number"
      )
      .required("Phone number is required"),
    Date: yup
      .date()
      .required("Date must be required")
      .min(today, "From today's date is required"),
    Message: yup.string().required("Enter Message"),
  });

  const handleSubmit = async (values) => {
    console.log(values, "hhh");
    let response = await axios.post('https://app.fuelfree.in/consult/Add', values, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });
    let result = response.data;

    if (result.success === "success") {
      toast.success(result.message)
      setTimeout(() => {
         window.location.reload('')
      }, 3000);
    } else {
      toast.error(result.error)
    }
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="tanker">
        <div className="welcomeline">
          <h3>WELCOME TO FUELFREE</h3>
          <p>FEEL FREE TO CONTACT US</p>
        </div>
        <div className="EnquiryAll">
          <div className="Enquiryformouter">
            <div className="enquiry-form">
              <h2>Free Consultation</h2>
              <Formik
                initialValues={defaultValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                <lable className="label-enquiry">Enter your Name</lable>
                  <Field
                    type="text"
                    name="Name"
                    placeholder="User Name"
                    className="form-control"
                  />
                  <p className="text-danger">
                    <ErrorMessage name="Name" />
                  </p>
                  <lable className="label-enquiry">Enter Your Email</lable>
                  <Field
                    type="text"
                    name="Email"
                    placeholder="User Email"
                    className="form-control"
                  />
                  <p className="text-danger">
                    <ErrorMessage name="Email" />
                  </p>
                  <lable className="label-enquiry">Enter Your Phone Number</lable>
                  <Field
                    type="tel"
                    name="PhoneNo"
                    placeholder="Enter Phone Number"
                    className="form-control"
                  />
                  <p className="text-danger">
                    <ErrorMessage name="PhoneNo" />
                  </p>
                  <lable className="label-enquiry">Do Not Select Today's Date</lable>
                  <Field
                    type="date"
                    name="Date"
                    placeholder="date"
                    className="form-control"
                  />
                  <p className="text-danger">
                    <ErrorMessage name="Date" />
                  </p>
                  <lable className="label-enquiry">Enter Preferred Time</lable>
                  <Field
                    type="time"
                    name="time"
                    placeholder="Message"
                    className="form-control"
                  />
                  <p className="text-danger">
                    <ErrorMessage name="time" />
                  </p>
                  <lable className="label-enquiry">Enter Message</lable>
                  <Field
                    type="text"
                    name="Message"
                    placeholder="Message"
                    className="form-control"
                  />
                  <p className="text-danger">
                    <ErrorMessage name="time" />
                  </p>
                  <button type="submit">Submit</button>
                </Form>
              </Formik>
            </div>
          </div>
          <div className="EnquiryContent">
            <div className="Enquirybackground"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EnquiryForm;
