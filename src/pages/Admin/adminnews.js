import axios from "axios";
import * as yup from "yup";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Adminsidebar from "../Admin/adminsidebar";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";

const NewsForm = () => {
  const [profilepic, setProfilePic] = useState([]);
   console.log(profilepic,'ppppp')
  const defaultValue = {
    MainHeading: "",
    content: "",
    newsType: "",
    newsDescription: "",
  };
  const today = new Date();

  const validationSchema = yup.object().shape({
    MainHeading: yup.string().required("Main heading is required"),
    content: yup.string().required("Content is required"),
    newsType: yup.string().required("Select News Type"),
    newsDescription: yup.string().required("Enter News Description"),
  });

  const handleSubmit = async (values) => {
    let newsObj = {
      ...values,
      image: profilepic,
      Date:today
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
      toast.success("Success")
    }
  };
  return (
    <>
      <Adminsidebar />
      <ToastContainer />
      <div className="signup-page">
        <div className="row signup">
          <div className="signup-part">
            <Formik
              initialValues={defaultValue}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="signup-form">
                <p className="create-ac-heading" style={{width:"50%", margin:"0 auto"}}>
                  Enter News
                </p>
                
                <div className="main-div-buy-now" >
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

                    <Field component="textarea" rows="6" cols="120" name="newsDescription" className="form-control" placeholder="News Description"></Field>
                    <p className="text-danger">
                      <ErrorMessage name="newsDescription" />
                    </p>
                  </div>
                  <div className="form-control">
                    <input
                      type="file" required
                      name="image"
                      multiple
                      onChange={(e)=>setProfilePic(e.target.files[0])} accept="image/x-png,image/gif,image/jpeg,image/jpg"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success"
                  >
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

export default NewsForm;
