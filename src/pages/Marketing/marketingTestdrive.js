import React from "react";
import MarketingSideBar from "./marketingSideBar";
import "../Admin/admin.css";
import "./marketing.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";

const MarketingTestDrive = () => {
  const navigate = useNavigate();
  const [chargingList, setChargingList] = useState({});
  let chargingType = chargingList.List;
  let count = chargingList.count;
  let vendorId = localStorage.getItem("marketinVendorId");

  async function getChargingList() {
    let resultCharging = await axios.get(
      `https://app.fuelfree.in/testDrive/bookingList/${vendorId}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let chargingData = await resultCharging.data;
    setChargingList(chargingData);
  }
  useEffect(() => {
    getChargingList();
  }, []);

  const [filteredList, setFilteredList] = new useState(chargingType);
  const filterBySearch = (event) => {
    const query = event.target.value.toLowerCase();
    const updatedList = chargingType.filter((item) => {
      const vehicleTypeMatch = item.name.toLowerCase().indexOf(query) !== -1;
      const productNameMatch =
        item.vehicleType.toLowerCase().indexOf(query) !== -1;
      const productPriceMatch =
        item.phoneNo.toString().toLowerCase().indexOf(query) !== -1;
      const DrivingRangeMatch =
        item.city.toString().toLowerCase().indexOf(query) !== -1;
      const LeadsMatch = item.vendorIds.some(
        (deal) => deal.firmName.toLowerCase().indexOf(query) !== -1
      );

      return (
        productPriceMatch ||
        productNameMatch ||
        vehicleTypeMatch ||
        LeadsMatch ||
        DrivingRangeMatch
      );
    });

    setFilteredList(updatedList);
  };

  const gologinMarketer=()=>{
    if(!localStorage.getItem("Marketing-Info")){
      navigate('/marketing-login')
    }
  }
  useEffect(()=>{
    gologinMarketer()
  },[])
  
  return (
    <>
      <div className="marketing-width">
        <MarketingSideBar />
      </div>
      <div className="marketing-side">
        <div id="lead-page-id">
          <div className="lead-dashboard">
            <div className="admin-dashboard-outer-list">
              <div className="lead-title">
                <h3>Total Sent leads-: {count}</h3>
              </div>
              <div className="section-title">
                  <div className="search-text">Search Lead:</div>
                <input
                  id="search-box"
                  className="form-control"
                  onChange={filterBySearch}
                />
              </div>
              <div className="lead-dashboard-table ">
                <ul>
                  <li id="admint-table-haeding">
                    <div className="admin-dashboard-name">
                      <span> Custmor name </span>
                      <span>Product Name</span> <span>Time</span>
                      <span>Dates</span>
                      <span>Address</span>
                      <span>phoneNo</span>
                    </div>
                  </li>

                  {filteredList ? (
                    <>
                      {filteredList &&
                        filteredList.map((item) => (
                          <li id="admint-table-haeding" key={item._id}>
                            <div className="admin-dashboard-name">
                              <span className="admin-emil">{item.name}</span>
                              <span className="admin-emil">
                                {item.productName}
                              </span>
                              <span className="admin-emil">{item.time}</span>
                              <span>
                                <Moment format="D MMM YYYY" withTitle>
                                  {item.date}
                                </Moment>
                              </span>
                              <span className="admin-emil">{item.address}</span>
                              <span className="admin-emil">{item.phoneNo}</span>
                            </div>
                          </li>
                        ))}
                    </>
                  ) : (
                    <>
                      {chargingType &&
                        chargingType.map((item) => (
                          <li id="admint-table-haeding" key={item._id}>
                            <div className="admin-dashboard-name">
                              <span className="admin-emil">{item.name}</span>
                              <span className="admin-emil">
                                {item.productName}
                              </span>
                              <span className="admin-emil">{item.time}</span>
                              <span>
                                <Moment format="D MMM YYYY" withTitle>
                                  {item.date}
                                </Moment>
                              </span>
                              <span className="admin-emil">{item.address}</span>
                              <span className="admin-emil">{item.phoneNo}</span>
                            </div>
                          </li>
                        ))}
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketingTestDrive;
