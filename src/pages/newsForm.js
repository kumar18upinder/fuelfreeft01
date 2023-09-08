import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/header";
import Footer from "../components/footer";

const NewsForm = () => {
  const [profilepic, setProfilePic] = useState("");

  const addUserPic = (e) => {
    setProfilePic(e.target.files[0]);
  };
  const defaultValue = {
    MainHeading: "",
    content: "",
    newsType: "",
    newsDescription: "",
    Date: new Date(),
  };
  const today = new Date();

  const validationSchema = yup.object().shape({
    MainHeading: yup
      .string()
      .matches(/[A-Za-z]/, "Must be a alphabet")
      .required("Main heading is required"),
    content: yup
      .string()
      .matches(/[A-Za-z]/, "Must be a alphabet")
      .required("Content is required"),
    newsType: yup.string().required("Select News Type"),
    newsDescription: yup.string().required("Enter News Description"),
    Date: yup
      .date()
      .required("Date must be required")
      .min(today, "Please select a date from today onwards"),
  });

  const handleSubmit = async (values) => {
    let newsObj = {
      ...values,
      image: profilepic,
    };

    let res = await axios.post(
      `https://app.fuelfree.in/news/newsCreate`,
      newsObj,
      {
        headers: {
          "content-type": "multipart/form-data",
          Accept: "application/json",
        },
      }
    );
    let result = await res.data;

    if (result.success === "success") {
      toast.success("Success");
    }
  };
  return (
    <>
      <Header />
      <ToastContainer />
      <div className="container signup-page">
        <div className="row signup">
          <div className="signup-part">
            <Formik
              initialValues={defaultValue}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="signup-form">
                <p className="create-ac-heading">
                  Enter your details for registration
                </p>
                <div className="signup-form-field">
                  <div>
                    <Field
                      type="text"
                      name="MainHeading"
                      placeholder="Main Heading"
                      className="form-control"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="MainHeading" />
                    </p>
                  </div>
                  <div>
                    <Field
                      type="text"
                      name="content"
                      placeholder="Content"
                      className="form-control"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="content" />
                    </p>
                  </div>
                  <div>
                    <Field
                      as="select"
                      className="form-control"
                      name="newsType"
                      id="newsType"
                    >
                      <option>--News Type--</option>
                      <option value="recentNews">Recent News</option>
                      <option value="FuelFreeNews">FuelFree News</option>
                      <option value="upcomingVehicleNews">Upcoming News</option>
                      <option value="trendingNews">Trending News</option>
                    </Field>
                    <p className="text-danger">
                      <ErrorMessage name="newsType" />
                    </p>

                    <Field
                      component="textarea"
                      rows="6"
                      cols="120"
                      name="newsDescription"
                      className="form-control"
                      placeholder="News Description"
                    ></Field>
                    <p className="text-danger">
                      <ErrorMessage name="newsDescription" />
                    </p>
                  </div>
                  <div className="form-control">
                    <input
                      type="file"
                      required
                      name="image"
                      className="add-pic"
                      onChange={addUserPic}
                      accept="image/x-png,image/gif,image/jpeg,image/jpg" multiple
                    />
                  </div>
                  <div>
                    <Field
                      type="date"
                      name="Date"
                      placeholder="Date"
                      className="form-control"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="Date" />
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
      <Footer />
    </>
  );
};

export default NewsForm;
