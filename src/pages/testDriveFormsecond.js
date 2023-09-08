import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import "./testDriveFormsecond.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/footer";
import Header from "../components/header";
import testdriveImg from "../pages/images/testdrive_img.png"
import { useParams } from "react-router-dom";

const TestDriveFormSecond = () => {
  const { pName, city, brand } = useParams();
  const { VT } = useParams();
  const [agencyId, setAgencyId] = useState(null);
  
  let user = JSON.parse(localStorage.getItem("user"));
  let uid = user._id;
  const [mobile,setmobile]=useState(user?.phoneNo)
  const [agencyList, setagencyList] = useState("");
  async function getagencyList() {
    let resultagency = await axios.get(
      `https://app.fuelfree.in/vendor/agency/filterByCity?city=${city}&Brand=${brand}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let agencyData = await resultagency.data;
    let agencyType = agencyData.search;
    setagencyList(agencyType);
  }

  useEffect(() => {
    getagencyList();
  }, [city, brand]);

  const defaultValue = {
    address: "",
    date: "",
    time: "",
  };

  const today = new Date();

  const validationSchema = yup.object().shape({
    address: yup.string().required("Enter Address"),
    date: yup
      .date()
      .required("Date must be required")
      .min(today, "Please select a date from today onwards"),
      time: yup.string().required("Time must be required")
  });
  const handleSubmit = async (values) => {
    let allvalue = {
      ...values,
      vehicleType: VT,
      name: user?.userName,
      email: user?.userEmail,
      phoneNo: mobile,
      productName: pName,
    };
    let VID = agencyId
      ? agencyId
      : toast.error("Select Vendor From Agencylist");
    try {
      const response = await axios.post(
        "https://app.fuelfree.in/testDrive/addTestDrive/" + uid + "/" + VID,
        allvalue,
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
      } else if (result.failure === "failure") {
        toast.error(result.error);
      } else {
        toast.error("Invalid");
      }
    } catch (error) {}
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ToastContainer />
      <Header />
      <div className="buynow-bg">
      <div className="tanker testdrive-position">
        <div className="buy-now-second">
          <div className="buy-right-bar">
            <div className="buy-side-right-bar-outer">
              <div className="news-side-content-text-top">
                <p class="test-now-flex">
                  <span className="side-box">Email I'd</span>
                  <span className="side-box1">{user?.userEmail}</span>
                </p>
              </div>
              <hr/>
              <div className="news-side-content-text-top">
                <p class="test-now-flex">
                  <span className="side-box">Name</span>
                  <span className="side-box1">{user?.userName}</span>
                </p>
              </div>
              <hr/>
              <div className="news-side-content-text-top">
                <p class="test-now-flex">
                  <span className="side-box">Contact</span>
                  <input type='tel' placeholder='Contact No' onChange={(e)=>setmobile(e.target.value)} defaultValue={user?.phoneNo}  required='true' className='form-control' />
                </p>
              </div>
              <hr/>
              <div className="news-side-content-text-top">
                <p class="test-now-flex">
                  <span className="side-box">Product Name</span>
                  <span className="side-box1">{pName}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="main-div-buy-now">
            <div className="signup-page">
              <div className="signup">
                <div className="signup-part">
                <h3 className="book-testdrive-title"><span className="book-your">Book your</span> <span className="testdrive-text">Test Drive</span></h3>
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
                          onChange={($event) =>
                            setAgencyId($event.target.value)
                          }
                          required
                        >
                          <option value={""} style={{ width: "100" }}>
                            select dealer
                          </option>
                          {agencyList &&
                            agencyList.map((data) => (
                              <>
                                <option
                                  value={data._id}
                                  style={{ width: "100" }}
                                >
                                  {data.firmName} --------{data.vehicleDeals}
                                </option>
                              </>
                            ))}
                          <option
                            value={"64845366d856eeb16a8033a9"}
                            style={{ width: "100" }}
                          >
                            fuelfree dealer
                          </option>
                        </select>
                      </div>
                      <div className="agency-cls">
                        <lable className="label-date">
                          Do Not Select Today's Date
                        </lable>
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
                      <div className="agency-cls">
                        <Field
                          type="time"
                          name="time"
                          placeholder="Time"
                          className="form-control"
                        />
                        <p className="text-danger">
                          <ErrorMessage name="time" />
                        </p>

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
                      <button type="submit" className="btn testdrive-btn">
                        Submit
                      </button>
                      <br />
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testdrive-img">
          <img src={testdriveImg} alt="testdrive-img" className="test-drive-img"/>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default TestDriveFormSecond;
