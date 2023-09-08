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
    promoCode: "",
    discountAmount: "",
  };

  const [VehicleType, setvehicleType] = useState("");
  const [discountType, setdiscountType] = useState("");

  const Navigate = useNavigate();
  const today = new Date();
  const validationSchema = yup.object().shape({
    offerText: yup.string().required("Please enter Offer"),
    offerHeading: yup.string().required("Please enter OfferHeading"),
    offerDate: yup
      .date()
      .required("Date must be required")
      .min(today, "Please select a date from today onwards"),
  });
  const [offerImage, setOfferImage] = useState();
  const addImage = (e) => {
    setOfferImage(e.target.files[0]);
  };

  const handleSubmit = async (values) => {
    const userObj = {
      ...values,
      offerImage: offerImage,
      VehicleType: VehicleType,
      discountType: discountType,
    };
    console.log(userObj, "uuuu");
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
      Navigate("/offers/:vt");
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

                  <select
                    className="form-control"
                    style={{ padding: "6px" }}
                    name="VehicleType"
                    // id="agency"
                    onChange={(event) => setvehicleType(event.target.value)}
                  >
                    <option value={""} style={{ width: "100" }}>
                    select vehicleType
                    </option>
                    <option value={"Ev-cycles"} style={{ width: "100" }}>
                      Ev-cycles
                    </option>
                    <option value={"Ev-scooters"} style={{ width: "100" }}>
                      Ev-scooters
                    </option>
                    <option value={"Ev-bikes"} style={{ width: "100" }}>
                      Ev-bikes
                    </option>
                    <option value={"Ev-rickshaw"} style={{ width: "100" }}>
                      Ev-rickshaw
                    </option>
                    <option value={"Ev-cars"} style={{ width: "100  " }}>
                    Ev -cars
                   </option>
                    <option value={"Ev-loading"} style={{ width: "100" }}>
                      Ev-loading
                    </option>
                    <option value={"Ev-buses"} style={{ width: "100"   }}>
                    Ev-  buses
                  </option>
                  <option value={"Ev-logistics"} style={{ width: "100" }}>
                      Ev-logistics
                    </option>
                </select>

                  <div className="mb-4">
                    <Field
                      type="text"
                      name="promoCode"
                      className="input form-control"
                      placeholder="promoCode"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="promoCode" />
                    </p>
                  </div>

                  <select
                    className="form-control"
                    style={{ padding: "6px" }}
                    name="discountType  "
                  // id="agency"
                  onChange={(event) => setdiscountType(event.target.value)}
                >
                  <option value={""} style={{ width: "100" }}>
                      select discountType
                  </option>
                  <option value={"amount"} style={{ width: "100" }}>
                      amount
                  </option>
                  <option value={"percentage"} style={{ width: "100" }}>
                  percentage
                  </option>
                </select>  

                  <div className="mb-4">
                    <Field
                      type="text"
                      name="discountAmount"
                      className="input form-control"
                      placeholder="discountAmount"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="discountAmount" />
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
                    <input type="file" onChange={addImage} name="offerImage"  required/>
                  </div>
                  <button type="submit" className="btn btn-primary admin-offer-btn">
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
