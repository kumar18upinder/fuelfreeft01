import React from "react";
// import storepagebannertop from '../pages/images/storebanerimgtop.png';
import Header from "../components/header";
import Footer from "../components/footer";
import { useParams, useNavigate } from "react-router-dom";
import "./storepage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ChargingStore() {
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
    console.log(result, "visit");
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      visitCount();
      setsource(window.location.href);
    }
  }, []);

  // main product
  const { id } = useParams();
  const Navigate = useNavigate();
  const [chargingproductDetails, setChargingProductDetails] = useState("");
  let data1 = chargingproductDetails.vendorDetails;
  async function getChargingProductdetails() {
    let resultChargingProductDetails = await axios.get(
      `https://app.fuelfree.in/vendor/charging/details/${id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let data = await resultChargingProductDetails.data;
    setChargingProductDetails(data);
  }

  useEffect(() => {
    getChargingProductdetails();
  }, []);
  const gologin = () => {
    if (!localStorage.getItem("user")) {
      Navigate("/login");
      window.location.reload();
    }
  };

  return (
    <div>
      <Header />
      {/* <div className="tanker">
        <div className="charging-vendor-details">
          <div>
            <h4 className="storepage-heading">{data1 && data1.firmName}</h4>
            <p className="storepage-para">Address : {data1 && data1.address}</p>
            <p className="storepage-para">
              Opening Time : {data1 && data1.openingTime}
            </p>
            <p className="storepage-para">
              Closing Time : {data1 && data1.closingTime}
            </p>
            <p className="storepage-para">
              contact : {data1 && data1.whatsappNo}
            </p>
            <div className="charging-book">
              <Link
                className="book-slot"
                to={`/charging-station-booking/${id}`}
                onClick={gologin}
              >
                Book charging slot
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      <div className="charging-cls">
        <div className="dealer-banner">
          <img src={data1 && data1.logo} alt="BrandBannerstore" />
        </div>
        <div className="charging-page">
          <div>
            <div className="store-para1">
              <h4 className="storepage-heading">{data1 && data1.firmName}</h4>
              <div class="container">
                <table class="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>{data1 && data1.name}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>{data1 && data1.email}</td>
                    </tr>
                    <tr>
                      <td>Whatsapp No. / Alternate No.</td>
                      <td>
                        {data1 && data1.whatsappNo} /{" "}
                        {data1 && data1.alternatePhoneNo}
                      </td>
                    </tr>
                    <tr>
                      <td>Opening Time / Closing Time</td>
                      <td>
                        {data1 && data1.openingTime} /{" "}
                        {data1 && data1.closingTime}
                      </td>
                    </tr>
                    <tr>
                      <td>Charging Two Wheeler</td>
                      <td>{data1 && data1.chargingTwoWheeler === "true" ? (
                          <>Yes</>
                        ) : (
                          <>No</>
                        )}</td>
                    </tr>
                    <tr>
                      <td>Charging Three Wheeler</td>
                      <td>
                        {data1 && data1.chargingThreeWheeler === "true" ? (
                          <>Yes</>
                        ) : (
                          <>No</>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Charging Four Wheeler</td>
                      <td>{data1 && data1.chargingFourWheeler === "true" ? (
                          <>Yes</>
                        ) : (
                          <>No</>
                        )}</td>
                    </tr>
                    <tr>
                      <td>Charging Other Wheeler</td>
                      <td>{data1 && data1.chargingOtherWheeler === "true" ? (
                          <>Yes</>
                        ) : (
                          <>No</>
                        )}</td>
                    </tr>
                    <tr>
                      <td>About the Store</td>
                      <td>{data1 && data1.aboutTheStore}</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>{data1 && data1.address}</td>
                    </tr>
                    <tr>
                      <td>City</td>
                      <td>{data1 && data1.city}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="charging-book">
              <Link
                className="view-offer-a"
                to={`/charging-station-booking/${id}`}
                onClick={gologin}
              >
                Book charging slot
              </Link>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ChargingStore;
