import "./admin.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Adminsidebar from "./adminsidebar";
import React, { useState, useEffect } from "react";

const OfferAdminList = () => {
  const [OfferList, setOfferList] = useState({});
  let OfferType = OfferList.offers;

  async function getOfferList() {
    let resultCycle = await axios.get(
      "https://app.fuelfree.in/admin/offerList",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let cycleData = await resultCycle.data;
    setOfferList(cycleData);
  }

  useEffect(() => {
    getOfferList();
  }, []);

  const deleteOffers = async (OfferID) => {
    let res = await axios.delete(
      `https://app.fuelfree.in/admin/deleteOffer/${OfferID}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let result = await res.data;
    window.location.reload();
  };
  return (
    <div>
      <Adminsidebar />
      <div >
        <div className="news-right-bar-outer-new">
          <h4>All Offers</h4>
          {OfferType &&
            OfferType.map((data) => (
              <>
                <div className="admin-offer">
                  <div className="admin-offer-img">
                    <p className="news-date">{data.offerDate}</p>
                    <img
                      src={`https://app.fuelfree.in/${data.offerImage}`}
                      alt="new image"
                    ></img>
                  </div>
                  <div className="admin-offer-text">
                    <Link to={`/news-details/${data._id}`}></Link>
                    <div className="admin-offer-text-top">
                      <h4>{data.offerHeading}</h4>
                    </div>
                    <div className="admin-offer-text-top">
                      <h6>{data.offerText}</h6>
                    </div>
                  </div>
                  <Link to="/" class=" view-offer-new">
                    Edit
                  </Link>
                  <Link
                    class=" view-offer-new"
                    onClick={() => {
                      deleteOffers(data._id);
                    }}
                  >
                    delete
                  </Link>
                </div>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OfferAdminList;
