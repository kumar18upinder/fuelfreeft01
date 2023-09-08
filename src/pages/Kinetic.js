import React from "react";
import kinaticbanner from "../pages/images/Kinaticbanner.jpeg";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Navigate from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

export const Kinatic = ({ handleclick }) => {
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
      "https://app.fuelfree.in/product/brand?Brand=kinetic",
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
      `https://app.fuelfree.in/product/brand?Brand=kinetic&${DrivingRangeProduct}${maxPrice}`,
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
  }, [Price, Range]);

  const bikePrices = [
    { productPrice: "70000", productPriceK: "70k" },
    { productPrice: "75000", productPriceK: "75k" },
    { productPrice: "85000", productPriceK: "85k" },
    { productPrice: "100000", productPriceK: "100k" },
    { productPrice: "120000", productPriceK: "120k" },
    { productPrice: "150000", productPriceK: "150k" },
    { productPrice: "180000", productPriceK: "180k" },
    { productPrice: "200000", productPriceK: "200k" },
    { productPrice: "250000", productPriceK: "250k" },
    { productPrice: "300000", productPriceK: "300k" },
    { productPrice: "350000", productPriceK: "350k" },
  ];
  const DrivingRange = [
    { DrivingRange: "70" },
    { DrivingRange: "80" },
    { DrivingRange: "90" },
    { DrivingRange: "100" },
    { DrivingRange: "120" },
    { DrivingRange: "130" },
  ];

  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div>
      <Header />
      <img src={kinaticbanner} alt="kineticbanner"></img>
      <div className="tanker">
        <div class="mobile-section-headfing">
          <span></span>
          <h3>Kinetic E-Vehicle</h3>
          <span></span>
        </div>
      </div>
      {/* ---------------------------------our cycles------------------------------- */}
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
                  <>
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
                            src={`https://app.fuelfree.in/${data.productImage}`}
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
                                to={`/compare-electric-vehicles/${data._id}`}
                                class="view-offer-a"
                              >
                                Compare Now
                              </Link>
                            ) : (
                              <Link
                                to={`/compare-electric-vehicles/:id`}
                                class="view-offer-a"
                                onClick={() => handleclick(data)}
                              >
                                Compare Now
                              </Link>
                            )}
                          </div>
                        </div>
                      ))}
                  </>
                ) : (
                  <>
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
                                to={`/semifinalCompare/${data._id}`}
                                class="view-offer-a"
                              >
                                Compare Now
                              </Link>
                            ) : (
                              <Link
                                to={`/semifinalCompare/:id`}
                                class="view-offer-a"
                                onClick={() => handleclick(data)}
                              >
                                Compare Now
                              </Link>
                            )}
                          </div>
                        </div>
                      ))}
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
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default Kinatic;
