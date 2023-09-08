import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/header";
import Footer from "../components/footer";
import "./testDriveFormsecond.css";
// import "./formik.css";

const SellPetrolVehicle = () => {
  const [profilepic, setProfilePic] = useState("");
  const [submitBtnClick, setSubmitBtnClick] = useState(false);
  let user = JSON.parse(localStorage.getItem("user"));
  let uid = user._id;

  let navigate = useNavigate();

  const addUserPic = (e) => {
    setProfilePic(e.target.files[0]);
    //   console.log(addUserPic(e))
  };
  const defaultValue = {
    vehicleName: "",
    currentPrice: "",
    sellerName: "",
    contactNo: "",
    city: "",
    vehicleType: "",
    productDescription: "",
    category:"Petrol"
  };
  const today = new Date();
  const validationSchema = yup.object().shape({
    vehicleName: yup.string("Vehicle Name should be string").required("please enter your name"),
    currentPrice: yup
    .number("Selling Price should be number")
    .required("Selling Price is Required")
    .positive("Please Enter Positive number")
    .integer("please enter your sellingPrice"),
    sellerName: yup.string("Seller Name should be string").required("Please enter sellername"),
    contactNo: yup
      .string()
      .matches(
        /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/,
        "Must be valid phone number"
      )
      .required("This field is requried"),
    city: yup.string().required("enter your city"),
    vehicleType: yup.string().required("please enter your vehicleType"),
    productDescription: yup
      .string("Product Description should be string")
      .required("please enter your productDescription"),
  });

  const handleSubmit = async (values) => {
    let userObj = {
      ...values,
      Image: profilepic,
    };
    try {
      let res = await axios.post(
        `https://app.fuelfree.in/usedVehicle/addUsedVehicle/${uid}`,
        userObj,
        {
          headers: {
            "content-type": "multipart/form-data",
            Accept: "application/json",
          },
        }
      );
      let result = await res.data;
      toast.success("Success")
      setTimeout(()=> {
        navigate("/")
      },3000)
    } catch (error) {
      toast.error("Unable to Submit")
    }


  };
  return (
    <>
      <div className="signup-page">
        <Header/>
        <ToastContainer />
        <div className="signup">
          <div className="signup-part">
            <Formik
              initialValues={defaultValue}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="signup-form">
                <p className="create-ac-heading">
                Sell your Old Petrol Vehicle<br></br>  Enter details of your Vehicle
                </p>
                <div className="main-div-buy-now">
               
                  <div>
                    <Field
                      type="text"
                      name="vehicleName"
                      placeholder="Vehicle Name"
                      className="form-control"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="vehicleName" />
                    </p>
                  </div>
                  <div>
                    <Field
                      type="text"
                      name="sellerName"
                      placeholder="Seller Name"
                      className="form-control"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="sellerName" />
                    </p>
                  </div>
                  <div>
                    <Field
                      type="number"
                      name="currentPrice"
                      placeholder="Current Price"
                      className="form-control"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="currentPrice" />
                    </p>
                  </div>
                  <div>
                    <Field
                      type="tel"
                      name="contactNo"
                      placeholder="Contact No"
                      className="form-control"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="contactNo" />
                    </p>
                  </div>
                  <div>
                    <Field
                      type="text"
                      name="city"
                      placeholder="City"
                      className="form-control"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="city" />
                    </p>
                  </div>
                  <div>
                    <Field
                      as="select"
                      name="vehicleType"
                      // placeholder="State"
                      className="form-control"
                    >
                      <option>Select Vehicle Type</option>
                      <option value="Two Wheeler">Two wheeler</option>
                      <option value="Three Wheeler">Three wheeler</option>
                      <option value="Four Wheeler">Four wheeler</option>
                    </Field>
                    <p className="text-danger">
                      <ErrorMessage name="vehicleType" />
                    </p>
                  </div>
                  <div>
                    <Field
                      type="text"
                      name="productDescription"
                      placeholder="productDescription"
                      className="form-control"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="productDescription" />
                    </p>
                  </div>
                 
                  <div className="add-pic-im">
                    <input
                      type="file" required 
                      name="Image"
                      className="add-pic"
                      onChange={addUserPic}
                    />
                    {submitBtnClick && profilepic == "" ? (
                      <p class="text-danger">Please select Image</p>
                    ) : null}
                  </div>
                  <button
                    type="submit"
                    onClick={(e) => setSubmitBtnClick(true)}
                    className="btn btn-success"
                  >
                    submit
                  </button>
                  <br />
                </div>
              </Form>
            </Formik>
          </div>
      
        </div>
      </div>
      <Footer/>

    </>
  );
};

export default SellPetrolVehicle;
