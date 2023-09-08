import "./admin.css";
import axios from "axios";
import * as yup from "yup";
import Adminsidebar from "./adminsidebar";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Testdriveform = () => {
  const [agencyList, setagencyList] = useState({});
  const [agencyId, setAgencyId] = useState(null);
  const navigate = useNavigate()

  let user = JSON.parse(localStorage.getItem("Admin-Info"));
  let uid = user._id;
  let agencyType = agencyList.List;

  async function getagencyList() {
    let resultagency = await axios.get(
      "https://app.fuelfree.in/vendor/agency/list",
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

  const defaultValue = {
    name: "",
    email: "",
    phoneNo: "",
    address: "",
    productName: "",
    date: "",
    time: "",
  };

  const today = new Date();
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(/[A-Za-z]/, "Must be a alphabet")
      .required("Name is required"),
    email: yup
      .string()
      .email()
      .matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "valid email")
      .required("email is required"),
    phoneNo: yup
      .string()
      .matches(
        /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/,
        "Must be valid phone number"
      )
      .required("This field is requried"),
    address: yup.string().required("Enter Address"),
    productName: yup
      .string()
      .matches(/[A-Za-z]/, "Must be a alphabet")
      .required("Product Name is required"),
    date: yup
      .date()
      .required("Date must be required")
      .min(today, "Please select a date from today onwards"),
  });

  const handleSubmit = async (values) => {
    let VID = agencyId
      ? agencyId
      : toast.error("Select Vendor From Agencylist");
    try {
      const response = await axios.post(
        "https://app.fuelfree.in/testDrive/addTestDrive/" + uid + "/" + VID,
        values,
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      let result = response.data;
      if (result.success === "success") {
        toast.success(result.message);
        navigate("/profile")
      } else if (result.failure === "failure") { 
        toast.error(result.error);
        
      } else {
        toast.error("Invalid");
      }
    } catch (error) {}
  };
  return (
    <>
      <ToastContainer />
      <Adminsidebar />
      <p className="admin-heading">Enter your details for Test Drive</p>
      <h5 className="heading-agency-list">Agency List</h5>
      <div className="signup-page">
        <div className="row signup">
          <div className="signup-part">
            <Formik
              initialValues={defaultValue}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="signup-form">
                <div className="signup-form-field">
                  <select
                    required
                    name="agency"
                    id="agency"
                    onChange={($event) => setAgencyId($event.target.value)}
                  >
                    {agencyType &&
                      agencyType.map((data) => (
                        <option value={data._id}>{data.name}</option>
                      ))}
                    <option>Select Vendor Name</option>
                  </select>
                  <div>
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
                  <div>
                  <Field
                    component="textarea"
                    name="address"
                    className="form-control"
                    placeholder="Address..."
                  ></Field>
                  <p className="text-danger">
                    <ErrorMessage name="address" />
                  </p>
                </div>
                <div>
                  <Field
                    type="text"
                    name="productName"
                    placeholder="Product Name"
                    className="form-control"
                  />
                  <p className="text-danger">
                    <ErrorMessage name="productName" />
                  </p>
                </div>
                <div>
                  <Field
                    type="date"
                    name="date"
                    placeholder="Date"
                    className="form-control"
                  />
                  <p className="text-danger">
                    <ErrorMessage name="date" />
                  </p>
                </div>
                <div>
                  <Field
                    type="time"
                    name="time"
                    placeholder="Time"
                    className="form-control"
                  />
                  <p className="text-danger">
                    <ErrorMessage name="time" />
                  </p>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
                <br />
                </div>
              </Form>
            </Formik>
            </div>
          </div>
        </div>
    </>
  );
};

export default Testdriveform;
