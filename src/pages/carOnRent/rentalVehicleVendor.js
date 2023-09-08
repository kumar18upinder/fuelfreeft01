import axios from "axios";
import { Link } from "react-router-dom";
import "../../pages/dealerpagedetail.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import React, { useState, useEffect } from "react";
import rentalVehicle from "../../pages/images/rentalVehicle.jpg";

const RentalVehicleVendor = () => {
  const [rentalVendorList, setRentalVendorList] = useState({});
  let rentalVendorData = rentalVendorList.data;
  let count = rentalVendorList.count;

  async function getRentalVendorList() {
    let response = await axios.get(
      "https://app.fuelfree.in/carRental/vendorList",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let result = await response.data;
    setRentalVendorList(result);
  }

  useEffect(() => {
    getRentalVendorList();
  }, []);

  //for search====
  const [filteredList, setFilteredList] = new useState(rentalVendorData);
  const filterBySearch = (event) => {
    const query = event.target.value;
    var updatedList = [...rentalVendorData];
    updatedList = updatedList.filter((item) => {
      return item.address.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setFilteredList(updatedList);
  };
  return (
    <>
      <Header />
      <div id="dealerlist">
        <div className="stations-wallpaper">
          <img src={rentalVehicle} alt="charging station wallaper"></img>
          <div className="stations-wallpaper-overlay">
            <h3>Rental Vehicle</h3>
            <p>find best rental electric vehicle in your area</p>
            <h5>Rental Vehicle found in your location </h5>

            <div className="search_deler_div">
              <p>Search address</p>
              <input onChange={filterBySearch} placeholder=""></input>
            </div>
          </div>
        </div>
        <div className="tanker">
          <div>
            <div className="loc-css">
              <span className="flatNo">{count}</span> RENTAL STORE'S FOUND IN
              YOUR LOCATION
            </div>
          </div>
          <label for="cars">Select City:</label>

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
        </div>
        {filteredList ? (
          <div className="tanker" id="charging-station-all">
            <>
            {filteredList &&
              filteredList.map((data) => (
                    <div class="Carcard" key={data._id}>
                      <img alt="vendor-img" src={data.logo} />

                      <div class="Cartitle">
                        <h5>{data.firmName}</h5>
                        <p style={{ color: "#262681" }}>{data.name}</p>
                        <p style={{ color: "#262681" }}>{data.whatsappNo}</p>
                        <Link
                          to={`/rental-vehicle-vendor-details/${data._id}`}
                          class="view-offer-a"
                        >
                          Visit Store
                        </Link>
                      </div>
                    </div>
                  ))}
            </>
          </div>
        ) : (
          <div className="tanker" id="charging-station-all">
            <>
            {rentalVendorData &&
              rentalVendorData.map((data) => (
                    <div class="Carcard" key={data._id}>
                      <img alt="vendor-img" src={data.logo} />

                      <div class="Cartitle">
                        <h5>{data.firmName}</h5>
                        <p style={{ color: "#262681" }}>{data.name}</p>
                        <p style={{ color: "#262681" }}>{data.whatsappNo}</p>
                        <Link
                          to={`/rental-vehicle-vendor-details/${data._id}`}
                          class="view-offer-a"
                        >
                          Visit Store
                        </Link>
                      </div>
                    </div>
                  ))}
            </>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default RentalVehicleVendor;
