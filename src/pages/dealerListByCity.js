import React, { useState, useEffect } from "react";
import axios from "axios";
import "./dealerpagedetail.css";
import Footer from "../components/footer";
import { Link, useParams } from "react-router-dom";
import Header from "../components/header";
import $ from "jquery";
import dealerimgbanner from "../pages/images/dealersimgbanner.jpeg";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

const DealerListByCity = () => {
  const { city } = useParams();
  const [vendorType, setVendorList] = useState("");
  let count = vendorType.Count;

  async function getVendorList() {
    let resultVendor = await axios.get(
      "https://app.fuelfree.in/vendor/agency/list",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let vendorData = await resultVendor.data;
    let vendorType = vendorData.List;
    const filterByVehicleType = vendorType.filter(
      (data) => data.city === city.toLowerCase() && city.toUpperCase()
    );
    setVendorList(filterByVehicleType);
  }
  useEffect(() => {
    getVendorList();
  }, []);

 
  const [dealers, setdealers] = useState("");
   //pagination
   const [currentPage, setCurrentPage] = useState(1);
   const [totalPages, setTotalPages] = useState(0);
   const [products, setProducts] = useState([]);
  
   const handlePageChange = (pageNumber) => {
     setCurrentPage(pageNumber);
   };
  
   const lastProductIndex = currentPage * 12;
   const firstProductIndex = lastProductIndex - 12;
   const currentDealer = products.slice(firstProductIndex, lastProductIndex);
  const [counts, setcounts] = useState("");

  const setoption = async (e) => {
    let res = await axios.get(
      `https://app.fuelfree.in/vendor/agency/filterByCity?city=${city}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let result = await res.data;
    let dealer = result.search;
    let count = result.count;
    setcounts(count);
    setdealers(dealer);
    setProducts(dealer);
    setTotalPages(Math.ceil(dealer.length / 12));
  };
  useEffect(() => {
    setoption();
  }, [city]);
  //search
  const [filteredList, setFilteredList] = new useState(dealers);
  const filterBySearch = (event) => {
    const query = event.target.value;

    var updatedList = [...dealers];
    updatedList = updatedList.filter((item) => {
      return item.firmName.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredList(updatedList);
  };
  const filter = (event) => {
    const query = event.target.value;
    var updatedList = [...dealers];
    updatedList = updatedList.filter((item) => {
      return item.firmName.toLowerCase().indexOf(query.toLowerCase()) !== 1;
    });
    setFilteredList(updatedList);
  };
  

  return (
    <div>
      <Header />
      <div id="dealerlist">
        <div className="stations-wallpaper">
          <img src={dealerimgbanner} alt="charging station wallaper"></img>
          <div className="stations-wallpaper-overlay">
            <h3>Dealer List</h3>
            <p>find best Dealer List for electric vehicle in your area</p>
            <h5>Dealer List found in your location</h5>
            <div className="search_deler_div">
              <p>Search address</p>
              <input
                id="deler_search"
                placeholder=""
                onChange={filterBySearch}
              ></input>
            </div>
          </div>
        </div>

        <div className="tanker">
          <div className="loc-css">
            <span className="flatNo">{counts}</span> DEALER FOUND IN YOUR
            LOCATION
          </div>
        </div>
        {filteredList ? (
          <div className="tanker" id="charging-station-all">
            {filteredList &&
              filteredList.map((data) => (
                <div class="Carcard" key={data._id}>
                  <img
                    alt="vendor-img"
                    src={`https://app.fuelfree.in/${data.logo}`}
                  />

                  <div class="Cartitle">
                    <h5>{data.firmName}</h5>
                    <p style={{ color: "#262681" }}>{data.whatsappNo}</p>
                    <Link  className="google-color"
                      target="_blank"
                      to={`${data.googleMapURL}`}
                    >
                      Find on Google Map
                    </Link>
                    <Link
                      to={`/vendorDetails/${data._id}`}
                      class="view-offer-a"
                    >
                      Visit Store
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="tanker">
              <div className="OUR-CARS-outer">
                {currentDealer &&
                  currentDealer.map((data) => (
                    <div class="Carcard" key={data._id}>
                      <img
                        alt="vendor-img"
                        src={`https://app.fuelfree.in/${data.logo}`}
                      />
                      <div class="Cartitle">
                        <h5>{data.firmName}</h5>
                        <p style={{ color: "#262681" }}>{data.whatsappNo}</p>
                        <Link className="google-color"
                          target="_blank"
                          to={`${data.googleMapURL}`}
                        >
                          Find on Google Map
                        </Link>
                        <Link
                          to={`/vendorDetails/${data._id}`}
                          class="view-offer-a"
                        >
                          Visit Store
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
        )}
         <div className="pagination-products-all">
              <ResponsivePagination
                current={currentPage}
                total={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
      </div>
      <Footer />
    </div>
  );
};

export default DealerListByCity;
