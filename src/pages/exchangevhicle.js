import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import "./exchangevehicle.css";
import wallpaper from "../pages/images/exchangeBanner.jpeg";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

function Exchangevehicle() {
  const { city } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPage] = useState(0);
  const [products, setProducts] = useState([]);
  let lastProductIndex = currentPage * 12;
  let firstProductIndex = lastProductIndex - 12;
  let currentChargingStation = products.slice(
    firstProductIndex,
    lastProductIndex
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [Count, setcount] = useState("");
  const [dealers, setdealers] = useState("");
  const setoption = async (e) => {
    let res = await axios.get(
      `https://app.fuelfree.in/exchangeVehicle/filterBycity/${city}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let result = await res.data;
    let dealer = result.allDealers;
    let length = result.count;
    setdealers(dealer);
    setcount(length);
    setProducts(dealer);
    setTotalPage(Math.ceil(dealer.length / 12));
  };

  useEffect(() => {
    setoption();
  }, [city]);

  //search
  const [filteredList, setFilteredList] = new useState(dealers);
  const filterBySearch = (event) => {
    const query = event.target.value.toLowerCase();
    const updatedList = dealers.filter((item) => {
      const firmNameMatch = item.firmName.toLowerCase().indexOf(query) !== -1;
      const addressMatch = item.address.toLowerCase().indexOf(query) !== -1;
      const nameMatch = item.name.toLowerCase().indexOf(query) !== -1;
      return firmNameMatch || addressMatch || nameMatch;
    });
    setFilteredList(updatedList);
  };
  return (
    <>
      <Header />
      <div id="dealerlist">
        <div className="stations-wallpaper">
          <img src={wallpaper} alt="charging station wallaper"></img>
          <div className="stations-wallpaper-overlay">
            <h3>Exchange Vendor</h3>
            <p>Exchange Vendor found in your location </p>
            <div className="search_deler_div">
              <p>Search address</p>
              <input onChange={filterBySearch} placeholder=""></input>
            </div>
          </div>
        </div>
        <div className="tanker">
          <div>
            <div className="loc-css">
              <span className="flatNo">{Count}</span> EXCHANGE VENDOR FOUND IN
              YOUR LOCATION
            </div>
          </div>
        </div>
        {filteredList ? (
          <>
            {filteredList &&
              filteredList.map((data) => (
                <div class="Carcard-charge" key={data._id}>
                  <div class="Cartitle-charge">
                    <h5>{data.name}</h5>
                    <p>
                      Opening/Closing(Time): {data.openingTime}/
                      {data.closingTime}
                    </p>
                  </div>
                    <Link
                      target="_blank"
                      to={`/exchange-vehicle-vendor-details/${data._id}`}
                      className="google-find"
                    >
                      View
                    </Link>
                </div>
              ))}
          </>
        ) : (
          <>
            <div className="tanker">
              <div className="OUR-CARS-outer">
                {currentChargingStation &&
                  currentChargingStation.map((data) => (
                    <div class="Carcard-charge" key={data._id}>
                      <div class="Cartitle-charge">
                        <h5>{data.name}</h5>
                        <p>
                          Opening/Closing(Time): {data.openingTime}/
                          {data.closingTime}
                        </p>
                      </div>
                        <Link
                          target="_blank"
                          to={`/exchange-vehicle-vendor-details/${data._id}`}
                          className="google-find"
                        >
                          View
                        </Link>
                    </div>
                  ))}
              </div>
            </div>
          </>
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
    </>
  );
}

export default Exchangevehicle;
