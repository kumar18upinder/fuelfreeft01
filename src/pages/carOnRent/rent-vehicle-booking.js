import React,{useEffect,useState} from "react";
import axios from "axios"; 
import * as yup from "yup";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";

function Rentvehiclebooking() {
  const { pId ,Pname,Pprice} = useParams();
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";
  const userId = user._id;
  const defaultValues = {
    name: user.userName,
    productName:Pname,
    productPrice:Pprice+"\h",
    phoneNo:user.phoneNo,
    alternatePhoneNo:'',
    preferredDate: "",
    time: "",
    address: "",
  };


  

  const today = new Date();
  const validationSchema = yup.object().shape({
    name: yup
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
      preferredDate: yup
      .date()
      .required("Date must be required")
      .min(today, "From today's date is required"),
  });

  const [agencyId, setAgencyId] = useState("");
  const handleSubmit = async (values) => {
    let response = await axios.post(
      `https://app.fuelfree.in/rentalCarBook/book/${userId}/${agencyId}`,
      values,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    let result = response.data;
    if (result.success === "success") {
      toast.success(result.message);
    } else {
      toast.error(result.error);
    }
  };

  const [agencyList, setagencyList] = useState({});
  let agencyType = agencyList.data;
  async function getagencyList() {
    let resultagency = await axios.get(
      "https://app.fuelfree.in/carRental/vendorList",
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


  return (
    <>
      <Header />
      <ToastContainer />
      <div className="tanker">
        <div className="welcomeline">
          <h3>Book vehicle on rent</h3>
          <p>Enter Details to book your Vehicle</p>
        </div>
        <div className="EnquiryAll">
          <div className="Enquiryformouter">
            <div className="enquiry-form">
              <h2>Book Rental Vehicle</h2>
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
              <Formik
                initialValues={defaultValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  <lable className="label-enquiry" >Enter Your Name</lable>
                  <Field
                    type="text"
                    name="name"
                    placeholder="User Name"
                    className="form-control"
                  />
                  <p className="text-danger">
                    <ErrorMessage name="name" />
                  </p>
                  <lable className="label-enquiry">Enter Your Number</lable>
                  <Field
                    type="tel"
                    name="phoneNo"
                    placeholder="Enter Phone Number"
                    className="form-control"
                  />
                  <p className="text-danger">
                    <ErrorMessage name="phoneNo" />
                  </p>
                  <lable className="label-enquiry">Enter  Alternate Number</lable>
                  <Field
                    type="tel"
                    name="alternatePhoneNo"
                    placeholder="Enter Phone Number"
                    className="form-control"
                  />
                  <p className="text-danger">
                    <ErrorMessage name="alternatePhoneNo" />
                  </p>
                  <lable className="label-enquiry">Enter productName</lable>
                  <Field
                    type="text"
                    name="productName"
                    placeholder="productName"
                    className="form-control"
                    value={Pname}
                  />
                  <p className="text-danger">
                    <ErrorMessage name="productName" />
                  </p>
                  <lable className="label-enquiry">Enter productPrice</lable>
                  <Field
                    type="text"
                    name="productPrice"
                    placeholder="productPrice"
                    className="form-control"
                    value={Pprice}
                  />
                  <p className="text-danger">
                    <ErrorMessage name="productPrice" />
                  </p>
                  <lable className="label-enquiry">Do Not Select Today's Date</lable>
                  <Field
                    type="date"
                    name="preferredDate"
                    placeholder="date"
                    className="form-control"
                  />
                  <p className="text-danger">
                    <ErrorMessage name="preferredDate" />
                  </p>
                  <lable className="label-enquiry">Enter Preferred Time</lable>
                  <Field
                    type="time"
                    name="time"
                    placeholder="time"
                    className="form-control"
                  />
                  <p className="text-danger">
                    <ErrorMessage name="time" />
                  </p>
                  <lable className="label-enquiry">Enter Your Address</lable>
                  <Field
                    type="text"
                    name="address"
                    placeholder="Enter Your Location"
                    className="form-control"
                  />
                  <button type="submit">Submit</button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Rentvehiclebooking;