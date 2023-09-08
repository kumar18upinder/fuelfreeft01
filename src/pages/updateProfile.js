import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import Header from "../components/header";
import Footer from "../components/footer";
import profilepic from "./images/profilepic.jpg";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from "yup";

const UpdateProfile = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const defaultValues = {
    userName: user.userName,
    phoneNo: user.phoneNo,
  };

  const validationSchema = yup.object().shape({
    userName: yup
      .string()
      .matches(/[A-Za-z]/, "Must be a alphabet")
      .required("Name is required"),
    phoneNo: yup
      .string()
      .matches(
        /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/,
        "Must be valid phone number"
      )
      .required("Phone number is required"),
  });
  const handleSubmit = async (values) => {
    let res = await axios.patch(
      `https://app.fuelfree.in/user/editData/${uid}`,
      values,
      {
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    let result = await res.data;
    if (result.success === "success") {
      navigate("/profile");
    }

    const userin = result.userEdit;
    localStorage.setItem("user", JSON.stringify(userin));
  };
  const [uid, setUid] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    setUid(user._id);
  }, []);
  return (
    <>
      <Header />
      <section id="update-profile">
        <div className="profile-update-div">
          <div className="profilte-up-img">
            <img src={profilepic} alt="profile-img" />
          </div>
          <h3 className="update-your-profile">Update Your Profile</h3>
          <Formik 
            initialValues={defaultValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="form-class">
              <label>User Name</label>
              <Field
                type="text"
                name="userName"
                placeholder="User Name"
                className="form-control"
              />
              <p className="text-danger">
                <ErrorMessage name="userName" />
              </p>
              <br />
              <label>Phone No</label>
              <Field
                type="tel"
                name="phoneNo"
                placeholder="Phone No"
                className="form-control"
              />
              <p className="text-danger">
                <ErrorMessage name="phoneNo" />
              </p>
              
              <button type="submit" className="update-btn-pro">
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default UpdateProfile;
