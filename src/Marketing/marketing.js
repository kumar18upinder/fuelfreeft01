import React from "react";
import MarketingSideBar from "./marketingSideBar";
import "../Admin/admin.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";

const Marketing = () => {
  const navigate = useNavigate();
  const [chargingList, setChargingList] = useState({});
  let  leadList = chargingList.leadsList;
  let count = chargingList.count;
  let vendorId=localStorage.getItem("marketinVendorId")

  async function getChargingList() {
    let resultCharging = await axios.get( `https://app.fuelfree.in/lead/vendorLeadsList/${vendorId}`, {
      headers: {
        Accept: "application/json",
      },
    });
    let chargingData = await resultCharging.data;
    setChargingList(chargingData);
  }
  useEffect(() => {
    getChargingList();
  }, []);

 
  const [filteredList, setFilteredList] = new useState(leadList);
  const filterBySearch = (event) => {
    const query = event.target.value.toLowerCase();
    const updatedList = leadList.filter((item) => {
      const vehicleTypeMatch = item.name.toLowerCase().indexOf(query) !== -1;
      const productNameMatch =
        item.vehicleType.toLowerCase().indexOf(query) !== -1;
      const productPriceMatch =
        item.phoneNo.toString().toLowerCase().indexOf(query) !== -1;
      const DrivingRangeMatch =
        item.city.toString().toLowerCase().indexOf(query) !== -1;
      return (
        productPriceMatch ||
        productNameMatch ||
        vehicleTypeMatch ||
        DrivingRangeMatch
      );
    });

    setFilteredList(updatedList);
  };

  const [productDetails, setDetails] = useState("");
  let dealerDetails= productDetails.vendorDetails;
  async function getdealerDetails() {
    let resultDetails = await axios.get(
      `https://app.fuelfree.in/vendor/agency/details/${vendorId}`,
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
    getdealerDetails();
  }, []);

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
            <div className="lead-title marketing-title">
                <h2> Dealer Name:-{dealerDetails&&dealerDetails.name}</h2>
                <h2>Firm Name:-{dealerDetails&&dealerDetails.firmName}</h2>
              </div>
              <div className="lead-title">
                <h3>Total Sent leads-: {count}</h3>
              </div>
              <div className="section-title">
                <div className="search-text">Search Lead:</div>
                <input
                  id="search-box"
                  className="form-control"
                  placeholder='Search..'
                  onChange={filterBySearch}
                />
              </div>
                {/* <div className="lead-dashboard-table ">
                  <ul>
                    <li id="admint-table-haeding">
                      <div className="admin-dashboard-name">
                        <span> Custmor name </span>
                        <span>PhoneNo</span>
                        <span className="admin-emil">City</span>
                        <span className="admin-emil">vehicleType</span>
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
                                  {item.phoneNo}
                                </span>
                                <span className="admin-emil">{item.city}</span>
                                <span className="admin-emil">
                                  {item.vehicleType}
                                </span>
                                
                              </div>
                            </li>
                          ))}
                      </>
                    ) : (
                      <>
                        {leadList &&
                          leadList.map((item) => (
                            <li id="admint-table-haeding" key={item._id}>
                              <div className="admin-dashboard-name">
                                <span className="admin-emil">{item.name}</span>
                                <span className="admin-emil">
                                  {item.phoneNo}
                                </span>
                                <span className="admin-emil">{item.city}</span>
                                <span className="admin-emil">
                                  {item.vehicleType}
                                </span>
                                
                              </div>
                            </li>
                          ))}
                      </>
                    )}
                  </ul>
                </div> */}
                <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Custmor name</th>
                    <th scope="col">PhoneNo</th>
                    <th scope="col">City</th>
                    <th scope="col">Vehicle Type</th>
                  </tr>
                </thead>
                {filteredList ? (
                  <>
                    {filteredList &&
                      filteredList.map((item) => (
                        <tbody>
                          <tr key={item._id}>
                            <th scope="row">
                                {item.name}
                            </th>
                            <td>{item.phoneNo}</td>
                            <td>{item.city}</td>
                            <td>{item.vehicleType}</td>
                          </tr>
                        </tbody>
                      ))}
                  </>
                ) : (
                  <>
                    {leadList &&
                      leadList.map((item) => (
                        <tbody>
                          <tr key={item._id}>
                            <th scope="row">
                                {item.name}
                            </th>
                            <td>{item.phoneNo}</td>
                            <td>{item.city}</td>
                            <td>{item.vehicleType}</td>
                          </tr>
                        </tbody>
                      ))}
                  </>
                )}
              </table>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Marketing;
