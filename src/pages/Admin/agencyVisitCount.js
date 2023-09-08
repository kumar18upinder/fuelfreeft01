import React from "react";
import axios from "axios";
import "./Adminbookinghistory.css";
import { Link } from "react-router-dom";
import Adminsidebar from "./adminsidebar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {WhatsappShareButton} from "react-share";
import { RiWhatsappFill } from "react-icons/ri";
import BrandBannerstore from "../../pages/images/BrandBannerstore.png";

function AgencyVisitCount() {
  const { id } = useParams();
  //visiter count
  const [visiterCount, setvisiterCount] = useState("");
  let Agencyvisiter = visiterCount.vendor;
  async function getProductdetails() {
    let resultDetails = await axios.get(
      `https://app.fuelfree.in/vendor/agency/${id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let data = await resultDetails.data
    setvisiterCount(data);
  }

  useEffect(() => {
    getProductdetails();
  }, []);

  const [vendorList, setvendorList] = useState({});
  let vendorType = vendorList.leadsList;

  async function getvendorList() {
    let resultCycle = await axios.get(
      `https://app.fuelfree.in/lead/vendorLeadsList/${id}`,
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
  
  const [url, setValues] = useState("")
  console.log(url,'url');
  const formatMessage = (url) => {
    const formattedData =
      `Hello, here is your new lead.\n\n` +
      `Customer-Name=${url.name},\n` +
      `Customer-Phone Number=${url.phoneNo},\n` +
      `City=${url.city},\n` +
      `Interested In=${url.vehicleType}`;
      setValues(formattedData)
    return formattedData;
  };

  useEffect(() => {
    if (url !== "") {
      const encodedMessage = encodeURIComponent(url);
      window.open(`https://web.whatsapp.com/send?text=${encodedMessage}`, '_blank');
      setValues(""); // Reset the url after opening WhatsApp window
    }
  }, [url]);
  return (
    <div>
      <Adminsidebar />
      <div className="admin-padding">
        <img src={BrandBannerstore} alt="BrandBannerstore"></img>
        <div className="tanker">
          <div>
            <div className="store-para">
              <h4 className="storepage-heading">
                FirmName-{Agencyvisiter && Agencyvisiter.firmName}
              </h4>
              <p className="storepage-para">
                Address : {Agencyvisiter && Agencyvisiter.address}
              </p>
              <p className="storepage-para">
                Opening Time : {Agencyvisiter && Agencyvisiter.openingTime}
              </p>
              <p className="storepage-para">
                Closing Time : {Agencyvisiter && Agencyvisiter.closingTime}
              </p>
              <p className="storepage-para">
                contact : {Agencyvisiter && Agencyvisiter.whatsappNo}
              </p>
            </div>

            <h4 className="storepage-heading">
              Dashboard Visit------ {Agencyvisiter && Agencyvisiter.visitCount}
            </h4>
            <h4 className="storepage-heading">
              Lead Section Visit --------{" "}
              {Agencyvisiter && Agencyvisiter.leadsSectionVisited}
            </h4>
                <div class="mobile-section-headfing">
                  <span></span>
                  <h3>Sent leads</h3>
                  <span></span>
                </div>
                <table className="tabledata-charge">
            <div>
              <tr>
                <th> Name </th>
                <th>phone No</th>
                <th>city</th>
                <th>Vehicle type</th>
                <th>share on WhatsApp</th>

              </tr>
            </div>
            {vendorType &&
                vendorType.map((data) => (
                  <div key={data._id}>
                      <>
                        <tr>
                          <td>{data.name}</td>
                          <td>{data.phoneNo}</td>
                          <td>{data.city}</td>
                          <td>{data.vehicleType}</td>
                          <td  className='whatsapp-share' onClick={()=>formatMessage(data)} > <WhatsappShareButton url={url} ><RiWhatsappFill/></WhatsappShareButton></td>
                          
                        </tr>
           
                      </>
                  </div>
                ))}
           
          </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgencyVisitCount;