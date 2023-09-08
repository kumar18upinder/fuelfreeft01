import React, { useState, useEffect } from "react";
import axios from "axios";
import "./dealerpagedetail.css";
import carlogo from "./images/car-logo.jpeg";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import Header from "../components/header";
import wallpaper from "../pages/images/Rectangle 77.png";
import location from "../pages/images/location.jpeg";
import call from "../pages/images/call.jpeg";
import servicecenter from "../pages/images/servicecenterbanner.jpeg";

const Servicecenterlist = () => {
  const [serviceList, setServiceList] = useState({});
  let serviceType = serviceList.List;
  let count = serviceList.Count;

  async function getServiceList() {
    let resultService = await axios.get(
      "https://app.fuelfree.in/vendor/service/list",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let serviceData = await resultService.data;
    setServiceList(serviceData);
  }

  useEffect(() => {
    getServiceList();
  }, []);

  //for search====
  const [filteredList, setFilteredList] = new useState(serviceType);
  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    var updatedList = [...serviceType];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.address.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setFilteredList(updatedList);
  };
  const filter = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    var updatedList = [...serviceType];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.address.toLowerCase().indexOf(query.toLowerCase()) !== 1;
    });
    // Trigger render with updated values
    setFilteredList(updatedList);
  };
  return (
    <>
      <Header />
      <div id="dealerlist">
        <div className="stations-wallpaper">
          <img src={servicecenter} alt="charging station wallaper"></img>
          <div className="stations-wallpaper-overlay">
            <h3 className="heading-service-center">Service Center</h3>
            <p>find best Service Center for electric vehicle in your area</p>
            <h5>Service Center found in your location </h5>
            <div className="search_deler_div">
              <p>Search address</p>
              <input id="deler_search" placeholder=""></input>
            </div>
          </div>
        </div>
      </div>
      <div id="dealerlist" className="container-fluid">
        <div className="tanker">
          <div className="tanker">
            <div className="loc-css">
              <span className="flatNo">{count}</span> DEALER FOUND IN YOUR
              LOCATION
            </div>
          </div>
        </div>
        <select
          name="cars"
          id="cars"
          className="form-control"
          onChange={filterBySearch}
        >
          <option value="">All</option>
          <option value="Indore">Indore</option>
          <option value="Bhopal">Bhopal</option>
          <option value="gwalior">gwalior</option>
          <option value="jabalpur">jabalpur</option>
        </select>

        {filteredList ? (
          <div className="tanker" id="charging-station-all">
          {filteredList &&
              filteredList.map((data) => (
                    <div class="Carcard" key={data._id}>
                      <img alt="vendor-img" src={data.logo} />

                      <div class="Cartitle">
                        <h5>{data.name}</h5>
                        <p style={{ color: "#262681" }}>{data.whatsappNo}</p>
                        <div
                        >
                          {data && data.address}
                        </div>
                        <Link
                          to={`/serviceDetails/${data._id}`}
                          class="view-offer-a"
                        >
                          Visit Store
                        </Link>
                      </div>
                    </div>
                  ))}
          </div>
        ) : (
          <div className="tanker" id="charging-station-all">
          {serviceType &&
            serviceType.map((data) => (
                    <div class="Carcard" key={data._id}>
                      <img alt="vendor-img" src={data.logo} />

                      <div class="Cartitle">
                        <h5>{data.name}</h5>
                        <p style={{ color: "#262681" }}>{data.whatsappNo}</p>
                        <div
                        >
                          {data && data.address}
                        </div>
                        <Link
                          to={`/serviceDetails/${data._id}`}
                          class="view-offer-a"
                        >
                          Visit Store
                        </Link>
                      </div>
                    </div>
                  ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Servicecenterlist;
