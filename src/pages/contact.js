import React, { useState } from "react";
import "./contact.css";
import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup"

function Contact() {
  const defaultValues = {
    Name: "",
    Email: "",
    PhoneNo: "",
    City: "",
    Message: "",
  };
const validationschema = yup.object().shape({
  Name: yup
  .string()
  .matches(/[A-Za-z]/, "Must be an alphabet")
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
  ).required("Phone number is required"),
  City: yup.string().required("City is required"),
  Message: yup.string().required("Message is required")
})

  const contactUs = async (item) => {
    const response = await axios.post(
      "https://app.fuelfree.in/contact/add",
      item,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    let result = await response.data;
    if (result.success === "success") {
      toast.success(result.success);
    } else {
      toast.error(response.error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div style={{ backgroundColor: "#f4f4f4" }}>
        <Header />
        <ToastContainer />
        <div className="div-contact-corner"></div>
        <div className="main-outer-contact">
          <section id="contact-us-page-id">
            <div className="main-div-contact">
                <div className="contact-tanker">
                  <h2>Get In Touch</h2>
                    <Formik
                      initialValues={defaultValues}
                      validationSchema={validationschema}
                      onSubmit={contactUs}
                    >
                      <Form>
                        <Field
                          type="text"
                          name="Name"
                          placeholder="Your Name"
                          className="form-control contact-field"
                        />
                        <p className="text-danger">
                          <ErrorMessage name="Name"/>
                        </p>
                        <Field
                          type="email"
                          name="Email"
                          placeholder="Enter Email"
                          className="form-control contact-field"
                        />
                        <p className="text-danger">
                          <ErrorMessage name="Email"/>
                        </p>
                        <Field
                          type="tel"
                          name="PhoneNo"
                          placeholder="Phone No"
                          className="form-control contact-field"
                        />
                        <p className="text-danger">
                          <ErrorMessage name="PhoneNo"/>
                        </p>
                        <Field type="text" placeholder="City" name="City"
                          className="form-control contact-field" />
                        <p className="text-danger">
                          <ErrorMessage name="City"/>
                        </p>
                        <Field type="text" placeholder="Message" name="Message" 
                          className="form-control contact-field"/>
                        <p className="text-danger">
                          <ErrorMessage name="Message"/>
                        </p>
                        <button className="primary-btn" type="submit" style={{width:"80%"}}>
                          Send Message
                        </button>
                      </Form>
                    </Formik>
                </div>

              <iframe
                src="http://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.148344453078!2d75.88488231476354!3d22.72272698510571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fde5e87649ed%3A0x9407a2ee0ebf5d6a!2sFuel%20Free!5e0!3m2!1sen!2sin!4v1678186542747!5m2!1sen!2sin"
                title="fule free map"
              ></iframe>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
