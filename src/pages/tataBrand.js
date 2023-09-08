import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/header";
import tat from "../pages/images/tat.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import Footer from "../components/footer";

const TataBrand = ({ handleclick }) => {
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
          Accept: "application/json",
        },
      }
    );
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      visitCount();
    }
  }, [visitCount]);

  // main product
  const navigate = useNavigate();

  const [cycleList, setCycleList] = useState({});
  let cycleType = cycleList.searchedProduct;
  async function getCycleList() {
    let resultCycle = await axios.get(
      "https://app.fuelfree.in/product/brand?Brand=tata",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let cycleData = await resultCycle.data;
    setCycleList(cycleData);
  }

  useEffect(() => {
    getCycleList();
  }, []);

  let goTologin = () => {
    toast.warning("Please Login");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
    return { _id: null };
  };

  const setId = async (productID) => {
    let pId = productID;
    try {
      let Addtofavorite = await axios.post(
        `https://app.fuelfree.in/favorite/add/${userId}/${pId}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      let response = await Addtofavorite.data;
      if (response.success === "success") {
        toast.success(response.message);
      } else {
        toast.error("already in favoriteList");
      }
    } catch (error) {
      toast.error("already in favoriteList");
    }
  };

 

  //filter
  const [cycleproduct, setcycleproduct] = useState("");

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [products, setProducts] = useState([]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const lastProductIndex = currentPage * 9;
  const firstProductIndex = lastProductIndex - 9;
  const currentProducts = products.slice(firstProductIndex, lastProductIndex);

  const [Price, setPrice] = useState("");
  const [Range, setrange] = useState("");

  const setprice = (price) => {
    let data = `&priceValue=${price}`;
    setPrice(data);
  };
  const setRange = (Drange) => {
    let data = `&rangeValue=${Drange}`;
    setrange(data);
  };

  const getfilter = async () => {
    let maxPrice = Price ? Price : "";
    let DrivingRangeProduct = Range ? Range : "";
    let res = await axios.get(
      `https://app.fuelfree.in/product/brand?Brand=tata&${DrivingRangeProduct}${maxPrice}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let result = await res.data;
    let alldata = result.searchedProduct;
    setcycleproduct(alldata);
    setProducts(alldata);
    setTotalPages(Math.ceil(alldata.length / 9));
  };

  useEffect(() => {
    getfilter();
  }, [ Price, Range]);

  const bikePrices = [
    { productPrice: "500000", productPriceK: "500k" },
    { productPrice: "700000", productPriceK: "700k" },
    { productPrice: "900000", productPriceK: "900k" },
    { productPrice: "1100000", productPriceK: "1100k" },
    { productPrice: "1500000", productPriceK: "1500k" },
    { productPrice: "1800000", productPriceK: "1800k" },
    { productPrice: "2000000", productPriceK: "2000k" },
    { productPrice: "2500000", productPriceK: "2500k" },
    { productPrice: "3000000", productPriceK: "3000k" },
  ];
  const DrivingRange = [
    { DrivingRange: "100" },
    { DrivingRange: "150" },
    { DrivingRange: "200" },
    { DrivingRange: "250" },
    { DrivingRange: "300" },
    { DrivingRange: "350" },
    { DrivingRange: "450" },
    { DrivingRange: "550" },
  ];

  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <>
      <Header />
      <section id="collection-id">
        <img src={tat} alt="bycycle"/>
      </section>

      {/* ---------------------------------our cycles------------------------------- */}
      <div className="tanker">
        <div class="mobile-section-headfing">
          <span></span>
          <h3>TATA E-Vehicle</h3>
          <span></span>
        </div>
      </div>
      <div className="tanker">
        <section id="product-cotegory-outer-ot">
          <div className="product-cot-filter">
            {/* ============================================================ */}
            <div
              className={`product-cot-filter-content ${
                activeMenu === "menu1" ? "open-filter" : ""
              }`}
            >
              <button
                className="btn-to-open-filtr"
                onClick={() => handleMenuClick("menu1")}
              >
                Filter by price<span>&gt;</span>
              </button>
              <div class="filter-content-outer">
                {bikePrices &&
                  bikePrices.map((data) => (
                    // ======================================
                    <div className="filter-content">
                      <input
                        name="brand"
                        type="radio"
                        onClick={() =>
                          setprice(data.productPrice || data.productPrice)
                        }
                        value={data.productPrice}
                      ></input>
                      <label>{data.productPriceK}and below</label>
                    </div>
                    //  =================================
                  ))}
              </div>
            </div>
            {/* =================================================== */}
            <div
              className={`product-cot-filter-content ${
                activeMenu === "menu3" ? "open-filter" : ""
              }`}
            >
              <button
                className="btn-to-open-filtr"
                onClick={() => handleMenuClick("menu3")}
              >
                Filter by Driving Range:<span>&gt;</span>
              </button>
              <div class="filter-content-outer">
                {DrivingRange &&
                  DrivingRange.map((data) => (
                    <div className="filter-content">
                      <input
                        name="brand"
                        type="radio"
                        onClick={() => setRange(data.DrivingRange)}
                        value={data.DrivingRange}
                      ></input>
                      <label>
                        {data.DrivingRange} {"    "}and above
                      </label>
                    </div>
                  ))}
              </div>
            </div>
            {/* =================================================================== */}
          </div>

          <div id="OUR-CARS">
            <div className="tanker">
              {cycleproduct ? (
                <div className="OUR-CARS-outer">
                  {" "}
                  {currentProducts &&
                    currentProducts.map((data) => (
                      <div class="Carcard" key={data._id}>
                        <Link
                          onClick={() => setId(data._id)}
                          className="favrate-butn"
                          title="Add to favorite"
                        >
                          <i class="fa fa-heart"></i>
                        </Link>
                        <img
                          alt="cycle"
                          src={`https://app.fuelfree.in/${data.productImage.length>0?data.productImage[0]:null}`}
                        ></img>
                        <div class="Cartitle">
                          <h5>{data.productName}</h5>
                          <p>Starting at Rs. {data.productPrice}</p>
                          <Link
                            to={`/products/${data.productName}/${data.VehicleType}/${data._id}`}
                            class="view-offer-a"
                          >
                            View-offer
                          </Link>
                          {localStorage.getItem("product") ? (
                            <Link
                              to={`/compare-product`}
                              class="view-offer-a"
                            >
                              Compare Now
                            </Link>
                          ) : (
                            <Link
                              to={`/compare-product`}
                              class="view-offer-a"
                              onClick={() => handleclick(data)}
                            >
                              Compare Now
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="OUR-CARS-outer">
                  {" "}
                  {cycleType &&
                    cycleType.map((data) => (
                      <div class="Carcard" key={data._id}>
                        <Link
                          onClick={() => setId(data._id)}
                          className="favrate-butn"
                          title="Add to favorite"
                        >
                          <i class="fa fa-heart"></i>
                        </Link>
                        <img
                          alt="cycle"
                          src={`https://app.fuelfree.in/${data.productImage}`}
                        ></img>
                        <div class="Cartitle">
                          <h5>{data.productName}</h5>
                          <p>Starting at Rs. {data.productPrice}</p>
                          <Link
                            to={`/products/${data.productName}/${data._id}/${data.VehicleType}`}
                            class="view-offer-a"
                          >
                            View-offer
                          </Link>
                          {localStorage.getItem("product") ? (
                            <Link
                              to={`/compare-product`}
                              class="view-offer-a"
                            >
                              Compare Now
                            </Link>
                          ) : (
                            <Link
                              to={`/compare-product`}
                              class="view-offer-a"
                              onClick={() => handleclick(data)}
                            >
                              Compare Now
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
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
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default TataBrand;
