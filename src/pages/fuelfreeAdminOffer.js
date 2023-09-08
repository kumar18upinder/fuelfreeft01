import React, { useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Header from "../components/header";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

const FuelfreeAdminOffer = () => {
  const Navigate = useNavigate();

  const [offerImage, setOfferImage] = useState("");
  const addOfferImage = (e) => {
    setOfferImage(e.target.files[0]);
  };
  const defaultValue = {
    offerText: "",
    offerHeading: "",
    timeLeft: "",
  };
  const validationSchema = yup.object().shape({
    offerText: yup.string().required("Please enter Offer"),
    offerHeading: yup.string().required("Please enter OfferHeading"),
    timeLeft: yup.string().required("Please enter left time"),
  });

  const handleSubmit = async (values) => {
    const offerObj = { ...values, offerImage: offerImage };

    let res = await axios.post(
      "https://app.fuelfree.in/admin/addOffer",
      offerObj,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      }
    );
    let result = await res.data;
console.log(result, "ooo");
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
      <Header />
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
                  <h1 className="mb-3">Admin Offer</h1>
                  <h5 className="mb-3">welcome</h5>
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
                      type="text"
                      name="timeLeft"
                      className="input form-control"
                      placeholder="Time Left"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="offerDate" />
                    </p>
                  </div>
                  <div>
                    <input
                      type="file"
                      onChange={addOfferImage}
                      name="offerImage" 
                      accept="image/x-png,image/gif,image/jpeg,image/jpg"
                      required
                    />
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
      <Footer />
    </>
  );
};

export default FuelfreeAdminOffer;
