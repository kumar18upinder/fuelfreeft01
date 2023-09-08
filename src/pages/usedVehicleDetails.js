import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UsedVehicleDetails = () => {
  const { vehicleId } = useParams();
  //visitor count
  let userdata = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";
  let userId = userdata ? userdata._id : "";
  const [source, setsource] = useState("");
  const visitCount = async () => {
    const pageVisited = window.location.href;
    console.log(pageVisited, "visited");
    let res = await axios.post(
      `https://app.fuelfree.in/user/track-page/${userId}?source=${encodeURIComponent(
        pageVisited
      )}`,
      {
        headers: {
          Accept: "aaplication/json",
        },
      }
    );
    let result = await res.data;
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      visitCount();
      setsource(window.location.href);
    }
  }, []);

  // main product
  const navigate = useNavigate();
  const [usedVehicle, setUsedVehicle] = useState({});
  const usedVehicleDetail = usedVehicle.Details;

  const handleUsedVehicleDetail = async () => {
    let response = await axios.get(
      `https://app.fuelfree.in/usedVehicle/details/${vehicleId}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let usedVehicleDetailData = response.data;
    setUsedVehicle(usedVehicleDetailData);
    console.log((usedVehicleDetailData, "data"));
  };

  useEffect(() => {
    handleUsedVehicleDetail();
  }, []);

  let goTologin = () => {
    toast.warning("Please Login");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
    return { _id: null };
  };

  //Formik Form

  const defaultValue = {
    placeYourBid: "",
  };

  const [price, setprice] = useState("");

  const validationscema = yup.object().shape({
    placeYourBid: yup
      .number()
      .max(
        price * 2 - 1,
        `maximum bid amount should be less than ${
          price ? `${price * 2 - 1}` : `double-1`
        }`
      )
      .min(price + 500, `minimum bid amount will be ${price + 500}`)
      .required("Please Enter Bid Amount"),
  });

  //get product id
  const [pID, setid] = useState();

  const getId = (pid, currentprice) => {
    setid(pid);
    setprice(currentprice);
  };

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : NaN;

  const handlesubmit = async (value) => {
    let uid = user ? user._id : goTologin();

    let res = await axios.post(
      `https://app.fuelfree.in/auction/add/${uid}/${pID}`,
      value,
      {
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const result = await res.data;
    if (result.success === "success") {
      window.location.reload();
    }
  };

  return (
    <div id="product_page_id">
      <Header />
      <div className="tanker">
        <div className="charging-cls">
          <div className="dealer-banner">
            <img
              src={`https://app.fuelfree.in/${
                usedVehicleDetail && usedVehicleDetail.Image
              }`}
              alt={`${
                usedVehicleDetail && usedVehicleDetail.vehicleName
              } used-vehicle `}
            />
          </div>
          <div className="charging-page">
            <div>
              <div className="store-para1">
                <h4 className="storepage-heading">
                  {usedVehicleDetail && usedVehicleDetail.vehicleName}
                </h4>
                <div class="container">
                  <table class="table table-bordered">
                    <tbody>
                      <tr>
                        <td>Seller Name</td>
                        <td>
                          {usedVehicleDetail && usedVehicleDetail.sellerName}
                        </td>
                      </tr>
                      <tr>
                        <td>Vehicle Type</td>
                        <td>
                          {usedVehicleDetail && usedVehicleDetail.vehicleType}
                        </td>
                      </tr>
                      <tr>
                        <td>Current Price</td>
                        <td>
                          {usedVehicleDetail && usedVehicleDetail.currentPrice}
                        </td>
                      </tr>
                      <tr>
                        <td>Contact No.</td>
                        <td>
                          {usedVehicleDetail && usedVehicleDetail.contactNo}
                        </td>
                      </tr>
                      <tr>
                        <td>Minimum Bid</td>
                        <td>
                          {usedVehicleDetail && usedVehicleDetail.minimumBid}
                        </td>
                      </tr>
                      <tr>
                        <td>Number of Bids:</td>
                        <td>{usedVehicleDetail && usedVehicleDetail.bids}</td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td>
                          {usedVehicleDetail &&
                            usedVehicleDetail.productDescription}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {usedVehicleDetail &&
                  usedVehicleDetail.participateInAuction === true ? (
                    <>
                    <div className="auc-details mb-5">                    
                     <div className="auction-details">
                        <h3>
                          {usedVehicleDetail && usedVehicleDetail.vehicleName}
                        </h3>
                        <p>
                          Bid Amount : Minimum Bid ₹
                          {usedVehicleDetail && usedVehicleDetail.minimumBid}
                        </p>
                      </div>

                      <Formik
                        initialValues={defaultValue}
                        validationSchema={validationscema}
                        onSubmit={handlesubmit}
                      >
                        <div className="div-2">
                          <h2>Bid Now</h2>
                          <Form>
                            <Field
                              type="number"
                              name="placeYourBid"
                              placeholder="Bid Amount"
                            />
                            <button
                              type="submit"
                              onClick={() =>
                                getId(
                                  usedVehicleDetail && usedVehicleDetail._id,
                                  usedVehicleDetail &&
                                    usedVehicleDetail.minimumBid
                                )
                              }
                            >
                              Place Bid
                            </button>
                          </Form>
                          <p className="text-danger">
                            <ErrorMessage name="placeYourBid" />
                          </p>
                        </div>
                      </Formik>
                      </div>

                    </>
                  ) : (
                    <div className="auction-details mb-5">
                      <h3>
                        {usedVehicleDetail && usedVehicleDetail.vehicleName}
                      </h3>
                      <p>
                        Price ₹
                        {usedVehicleDetail && usedVehicleDetail.minimumBid}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UsedVehicleDetails;
