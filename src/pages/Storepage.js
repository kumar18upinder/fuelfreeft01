import React from "react";
import { useParams } from "react-router-dom";
import "./storepage.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

function Storepage() {
  //visitor count
  let userdata = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";
  let userId = userdata ? userdata._id : "";
  const visitCount = async () => {
    const pageVisited = window.location.href;
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
    }
  }, []);

  // main product
  const { id } = useParams();
  const [productDetails, setDetails] = useState("");
  let data1 = productDetails.vendorDetails;
  async function getProductdetails() {
    let resultDetails = await axios.get(
      `https://app.fuelfree.in/vendor/agency/details/${id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let data = await resultDetails.data;
    // (data)
    setDetails(data);
  }

  useEffect(() => {
    getProductdetails();
  }, []);

  const [vendorList, setvendorList] = useState({});
  let vendorType = vendorList.List;
  async function getvendorList() {
    let resultCycle = await axios.get(
      `https://app.fuelfree.in/vendor/myproduct/${ id }`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let vendorData = await resultCycle.data;
    setvendorList(vendorData);
  }

  useEffect(() => {
    getvendorList();
  }, []);
  return (
    <div>
      <Header />
      <div className="charging-cls">
        <div className="charging-page">
          <div>
            <div className="store-para1">
              <h4 className="storepage-heading">{data1 && data1.firmName}</h4>
              <div class="container">
                <table class="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Vendor Name</td>
                      <td>{data1 && data1.name}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>{data1 && data1.email}</td>
                    </tr>
                    <tr>
                      <td>Brand</td>
                      <td>{data1 && data1.Brand}</td>
                    </tr>
                    <tr>
                      <td>Vehicle Deals</td>
                      <td>{data1 && data1.vehicleDeals}</td>
                    </tr>
                    <tr>
                      <td>Whatsapp No.{" "}/{" "}Alternate No.</td>
                      <td>{data1 && data1.whatsappNo}{" "}/{" "}{data1 && data1.alternatePhoneNo}</td>
                    </tr>
                    <tr>
                      <td>Opening Time{" "}/{" "}Closing Time</td>
                      <td>
                        {data1 && data1.openingTime}{" "}/{" "}{data1 && data1.closingTime}
                      </td>
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
              </div>
            </div>
            <div id="OUR-CARS">
              <div className="tanker">
                        <div class="mobile-section-headfing">
                          <span></span>
                          <h3>My Vehicle</h3>
                          <span></span>
                        </div>
                        
            {vendorType ? (
                <div className="OUR-CARS-outer">
                  {vendorType &&
                    vendorType.map((data) => (
                      <div class="Carcard" key={data._id}>
                        <img
                          alt="vendor"
                          src={`https://app.fuelfree.in/${data.productImage}`}
                        ></img>
                        <div class="vendortitle">
                          <h5>{data.productName}</h5>
                          <p>Starting at Rs. {data.productPrice}</p>
                          <p>{data.productName}</p>
                          <Link
                        to={`/book-your-test-drive/${data && data.productName}/${
                          data && data.VehicleType
                        }/${data && data.Brand}/${data && data.city}`}
                        // onClick={gologin}
                        className="view-offer-a"
                      >
                        Book Test Drive
                      </Link>
                          <Link
                            className="view-offer-a"
                            to={`/booknow/${id}/${data._id}`}
                          >
                            Buy Now
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>):(<div className="no-product">
             No Products Available
            </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Storepage;
