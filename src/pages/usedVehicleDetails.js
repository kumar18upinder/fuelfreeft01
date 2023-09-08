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
      <h4 className="storepage-heading-main-outer">
                  {usedVehicleDetail && usedVehicleDetail.vehicleName}
                </h4>

        <div className="charging-cls">
        
          <div className="dealer-banner-used">
            <img
            className="img-dealer-user"
              src={`https://app.fuelfree.in/${
                usedVehicleDetail && usedVehicleDetail.Image
              }`}
              alt={`${
                usedVehicleDetail && usedVehicleDetail.vehicleName
              } used-vehicle `}
            />
          </div>




          
          <div className="charging-page">
          {usedVehicleDetail &&
                  usedVehicleDetail.participateInAuction === true ? (
                    <>
                    <div className="auc-details-new">                    
                     <div className="auction-details-new">
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
                
            <div>
              <div className="store-para1">
                
               
          </div>
        </div>
      </div>
      
      </div>
      <div class="container">
                  <div class="table-outer-main">
                    <div>
                    <div className="detail-all-outer">
                        <div className="used-detail-box">
                        <h1 className="used-detail-heading"> Name</h1>
                        <p>
                          {usedVehicleDetail && usedVehicleDetail.sellerName}
                        </p>
                        </div>
                  

                      <div className="used-detail-box">
                        <h1 className="used-detail-heading" >vehicle Type</h1>
                        <p>
                          {usedVehicleDetail && usedVehicleDetail.vehicleType}
                        </p>
                     </div>
                     <div className="used-detail-box">
                        <h1 className="used-detail-heading">Price</h1> 
                        <p>
                          {usedVehicleDetail && usedVehicleDetail.currentPrice}
                          </p>
                          </div>
                          <div className="used-detail-box">
                        <h1 className="used-detail-heading">Contact No.</h1>
                        <p>
                          {usedVehicleDetail && usedVehicleDetail.contactNo}
                        </p>
                        </div>
                      <div className="used-detail-box">
                        <h1 className="used-detail-heading">Minimum Bid</h1>
                        <p>
                          {usedVehicleDetail && usedVehicleDetail.minimumBid}
                        </p>
                      </div>
                      <div className="used-detail-box">
                        <h1 className="used-detail-heading">Number of Bids:</h1>
                        <p>{usedVehicleDetail && usedVehicleDetail.bids}</p>
                        </div>
                      <div className="used-detail-box">
                        <h1 className="used-detail-heading">Description</h1>
                        <p>
                          {usedVehicleDetail &&
                            usedVehicleDetail.productDescription}
                        </p>
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
