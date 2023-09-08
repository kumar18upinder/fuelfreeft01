import * as yup from "yup";
import axios from "axios";
import { useParams ,useNavigate} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Adminsidebar from "../Admin/adminsidebar";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";

const NewsEditAdmin = () => {
  const { id } = useParams();
  const navigate=useNavigate()
  const [newsdetailsList, setnewsdetailsList] = useState({});
  console.log(newsdetailsList,'newsdetails')
  const data = newsdetailsList.value;
  let mainheading = data && data.MainHeading;
  async function getnewsdetailsList() {
    let resultnewsdetails = await axios.get(
      `https://app.fuelfree.in/news/newsDetails/${id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let newsdetailsData = await resultnewsdetails.data;
    setnewsdetailsList(newsdetailsData);
  }
  useEffect(() => {
    getnewsdetailsList();
  }, []);

  const [image, setProfilePic] = useState({});
  const [submitBtnClick, setSubmitBtnClick] = useState(false);
  const addUserPic = (e) => {
    setProfilePic(e.target.files[0]);
  };
  // const defaultValue = {
  //   MainHeading: '',
  //   content: '',
  //   newsType: '',
  //   newsDescription: '',
  //   Date: new Date(),
  // };

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
    Date: yup.string().required("Date is required"),
  });

  const handleSubmit = async (values) => {
    console.log(values,'value')
    let res = await axios
      .patch(`https://app.fuelfree.in/news/newsEdit/${id}`, values, {
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
      })
      // .then(async (res) => {
      //   let imgFormData = new FormData();
      //   imgFormData.append("image", image);
      //   await axios.patch(
      //     `https://app.fuelfree.in/news/newsImageEdit/${id}`,
      //     image,
      //     {
      //       headers: {
      //         "content-type": "multipart/form-data",
      //       },
      //     }
      //   );
      // });
    let result = await res.data;
    console.log(result,'result')

    if (result.success === "success") {
      toast.success("Success");
      navigate('/news-list-admin')
    }
  };

  return (
    <>
      <Adminsidebar />
      <ToastContainer />
      <div className="signup-page">
        <div className="row signup  left-margin">
          <div className="signup-part">
            <Formik
              initialValues={data}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              enableReinitialize={true}
            >
              <Form className="signup-form">
                <p className="create-ac-heading">Enter News</p>
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

                  {/* <div className="form-control">
                    <input
                      type="file"
                      required
                      name="image"
                      onChange={addUserPic}
                      accept="image/x-png,image/gif,image/jpeg"
                    />
                    {submitBtnClick && image === "" ? (
                      <p class="text-danger">Please select Image</p>
                    ) : null}
                  </div> */}
                  <button
                    type="submit"
                    onClick={(e) => handleSubmit(true)}
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

export default NewsEditAdmin;
