import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import './testDriveFormsecond.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/footer";
import Header from "../components/header";
import { useParams,useNavigate } from "react-router-dom";


const TestDriveFormSecond = () => {

  const { pName ,city,brand} = useParams()
  const {  VT } = useParams()
  let vehicles=[]
  let vehicle=vehicles.push(VT)
  const [agencyId, setAgencyId] = useState(null)
  
  let user = JSON.parse(localStorage.getItem("user"));
  let uid = user._id;
  const [agencyList, setagencyList] = useState('');
  async function getagencyList() {
    let resultagency = await axios.get(`https://app.fuelfree.in/vendor/agency/filterByCity?city=${city}&Brand=${brand}`, {
      headers: {
        "Accept": "application/json"
      }
    })
    let agencyData = await resultagency.data
    let agencyType = agencyData.search
    const filterByVehicleType=agencyType.filter(data=>data.vehicleDeals[0]===VT)
    setagencyList(agencyType)
    console.log(filterByVehicleType, "@@@");
  }

  useEffect(() => {
    getagencyList()
  }, [])

  const defaultValue = {
    name: user.userName,
    email: user.userEmail,
    phoneNo: user.phoneNo,
    address: "",
    productName: pName,
    date: "",
    time: "",
  };

  const today = new Date();

  const validationSchema = yup.object().shape({
    name: yup.string().matches(/[A-Za-z]/, "Must be a alphabet").required("Name is required"),
    email: yup.string().email().matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "valid email").required("email is required"),
    phoneNo: yup
      .string()
      .matches(
        /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/,
        "Must be valid phone number"
      )
      .required("This field is requried"),
    address: yup.string().required("Enter Address"),
    productName: yup.string().matches(/[A-Za-z]/, "Must be a alphabet").required("Product Name is required"),
    date: yup.date().required("Date must be required").min(today, "From today's date and required"),
  });
  const navigate = useNavigate()

  const handleSubmit = async (values) => {
    // console.log(values, "userObj")
    let allvalue={...values,vehicleType:VT}
    let VID=agencyId?agencyId:toast.error('Select Vendor From Agencylist')
    try {
      const response = await axios.post('https://app.fuelfree.in/testDrive/addTestDrive/' + uid + '/' + VID, allvalue, {
      headers: {
        "Accept": "application/json",
        "Authorization": "Bearer " + localStorage.getItem('token')
      }
    })
  
    let result = response.data;
    if (result.success === "success") {
      toast.success(result.message)
   
    } else if (result.failure === 'failure') {
      toast.error(result.error)
    } else {
      toast.error('Invalid')
    }
    } catch (error) {
      
    }
    

  }
  return (
    <>
      <ToastContainer />
      <Header />
      <p className="create-ac-heading">
        Enter your details for Test Drive
      </p>
      <div className="main-div-buy-now">
      <h5 className="heading-agency-list">Agency List</h5>
      <div className="signup-page">
        <div className="signup">
          <div className="signup-part">
            <Formik
              initialValues={defaultValue}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="signup-form">

                <div className="sign-in">
                <select
            className="form-control"
            style={{ padding: "6px" }}
            name="agency"
            id="agency"
            onChange={($event) => setAgencyId($event.target.value)}
          >
            <option value={''} style={{ width: "100" }}>
                    select dealer
                  </option>
            { agencyList &&
              agencyList.map(data => (
                <>
                  <option value={data._id} style={{ width: "100" }}>
                    {data.firmName} --------{data.vehicleDeals}
                  </option>
                </>
              ))}
              <option value={'64845366d856eeb16a8033a9'} style={{ width: "100" }}>
                    fuelfree dealer
                  </option>

          </select> 
                  <div>
                  <lable className="label-enquiry">Enter Name</lable>
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
                  <lable className="label-enquiry">Enter Email</lable>
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
                  <lable className="label-enquiry">Enter Phone Number</lable>
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
                
                </div>
                <div>
                <lable className="label-enquiry">Product Name</lable>
                  <Field
                    type="text"
                    name="productName"
                    placeholder="Product Name"
                    className="form-control"
                    value={pName}
                  />
                  <p className="text-danger">
                    <ErrorMessage name="productName" />
                  </p>
                </div>
            
                <div>
                <lable className="label-enquiry">Do Not Select Today's Date</lable>
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
                <lable className="label-enquiry">Enter Preffered Time</lable>
                  <Field
                    type="time"
                    name="time"
                    placeholder="Time"
                    className="form-control"
                  />
                  <p className="text-danger">
                    <ErrorMessage name="time" />
                  </p>

                  <lable className="label-enquiry">Enter  Address</lable>
                  <Field
                    component="textarea"
                    rows="6"
                    cols="120"
                    name="address"
                    className="form-control"
                    placeholder="Address"
                  ></Field>
                  <p className="text-danger">
                    <ErrorMessage name="address" />
                  </p>
                </div>
                <button  type="submit" className="btn btn-success">
                  Submit
                </button>
                <br />
                {/* </div> */}
              </Form>
            </Formik>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TestDriveFormSecond;

