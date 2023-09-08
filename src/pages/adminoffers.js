import axios from "axios";
import * as yup from "yup";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Adminsidebar from "./Admin/adminsidebar";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Form, ErrorMessage, Field } from "formik";

const AdminOffer = () => {
  const defaultValue = {
    offerText: "",
    offerHeading: "",
    offerDate: "",
  };

  const Navigate = useNavigate();
  const today = new Date();
  const validationSchema = yup.object().shape({
    offerText: yup.string().required("Please enter Offer"),
    offerHeading: yup.string().required("Please enter OfferHeading"),
    offerDate: yup
      .date()
      .required("Date must be required")
      .min(today, "From today's date and required"),
  });
  const [offerImage, setOfferImage] = useState();
  const addImage = (e) => {
    setOfferImage(e.target.files[0]);
  };

  const handleSubmit = async (values) => {
    const userObj = { ...values, offerImage: offerImage };

    let res = await axios.post(
      "https://app.fuelfree.in/admin/addOffer",
      userObj,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      }
    );
    let result = await res.data;

    if (result.success === "success") {
      toast.success(result.message);
      Navigate("/offers");
    } else {
      toast.error("result.error");
    }
  };
  return (
    <>
      <ToastContainer />
      <Adminsidebar />
      <Formik
        initialValues={defaultValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <Form>
                  <h1 className="mb-3" style={{ color: "white" }}>
                    Admin Offer
                  </h1>
                  <h5 className="mb-3" style={{ color: "white" }}>
                    welcome
                  </h5>
                  <div className="mb-4">
                    <Field
                      type="text"
                      name="offerText"
                      className="input form-control"
                      placeholder="offerText"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="offerText" />
                    </p>
                  </div>
                  <div className="mb-4">
                    <Field
                      type="text"
                      name="offerHeading"
                      className="input form-control"
                      placeholder="offerHeading"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="offerHeading" />
                    </p>
                  </div>
                  <div className="mb-4">
                    <Field
                      type="date"
                      name="offerDate"
                      className="input form-control"
                      placeholder="offerDate"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="offerDate" />
                    </p>
                  </div>
                  <div>
                    <input type="file" onChange={addImage} name="offerImage" />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </Formik>
    </>
  );
};

export default AdminOffer;
