import React from "react";
import Kiabanner from "../pages/images/Kiabanner.jpeg";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { useNavigate } from "react-router-dom";
import $ from "jquery";

export const Kia = ({ handleclick }) => {
  //visitor count
  let goTologin = () => {
    toast.warning("Please Login");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
    return { _id: null };
  };

  
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
          Accept: "aaplication/json",
        },
      }
    );
    let result = await res.data;
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      visitCount();
    }
  }, []);

  // main product
  const navigate = useNavigate();
  const [cycleList, setCycleList] = useState({});
  let cycleType = cycleList.searchedProduct;
  async function getCycleList() {
    let resultCycle = await axios.get(
      `https://app.fuelfree.in/product/brand?Brand=kia`,
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
      console.log(response, "ddd");
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
  const [products, setProducts] = useState("");
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
      `https://app.fuelfree.in/product/brand?Brand=kia&${DrivingRangeProduct}${maxPrice}`,
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
    visitCount();
  }, []);

  useEffect(() => {
    getfilter();
  }, [ Price, Range]);

  const bikePrices = [
    { productPrice: "4000000", productPriceK: "4000k" },
    { productPrice: "5000000", productPriceK: "5000k" },
    { productPrice: "6000000", productPriceK: "6000k" },
    { productPrice: "7000000", productPriceK: "7000k" },
    { productPrice: "8000000", productPriceK: "8000k" },
    { productPrice: "9000000", productPriceK: "9000k" },
    { productPrice: "10000000", productPriceK: "10000k" },
  ];
  const DrivingRange = [
    { DrivingRange: "350" },
    { DrivingRange: "450" },
    { DrivingRange: "650" },
    { DrivingRange: "700" },
    { DrivingRange: "750" },
    { DrivingRange: "800" },
  ];

  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div>
      <Header />
      <img src={Kiabanner} alt="Kia motors"></img>
      {/* ---------------------------------our KIA------------------------------- */}
      <div className="tanker">
        <div class="mobile-section-headfing">
          <span></span>
          <h3>Kia E-Vehicle</h3>
          <span></span>
        </div>
      </div>
      <div className="tanker">
        <section id="product-cotegory-outer-ot">
        <div className="product-cot-filter">
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
                  ))}
              </div>
            </div>
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
          </div>

          <div id="OUR-CARS">
            <div className="tanker">
              <div className="OUR-CARS-outer">
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
          </div>
        </section>
      </div>
        <Footer />
    </div>
  );
};

export default Kia;
