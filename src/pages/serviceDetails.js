import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

function ServiceDetails() {

  const { id } = useParams();
  const [productDetails, setDetails] = useState("");
  let data1 = productDetails.vendorDetails;
  async function getProductdetails() {
    let resultDetails = await axios.get(
      `https://app.fuelfree.in/vendor/service/details/${id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let data = await resultDetails.data;
    setDetails(data);
  }

  useEffect(() => {
    getProductdetails();
  }, []);


  return (
    <>
    <Header/>
        <div className="charging-cls">
        <div className="dealer-banner">
          <img
            src={data1 && data1.logo}
            alt="BrandBannerstore"
          />
        </div>
        <div className="charging-page">
          <div>
            <div className="store-para1">
              <h4 className="storepage-heading">Service Details</h4>
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
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ServiceDetails;
