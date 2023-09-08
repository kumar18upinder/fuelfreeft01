import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import axios from "axios";
import logisticsBG from "./images/logisticsBG.png";
import logisticsBanner from "../pages/images/logisticsBanner.jpeg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import $ from "jquery";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

function LogisticsVehicle({ handleclick }) {
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
  //visitor count
  let userdata = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";
  let userId = userdata ? userdata._id : "";
  const [source, setsource] = useState("");
  const visitCount = async () => {
    const pageVisited = window.location.href;
    console.log(pageVisited, "visited");
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
    console.log(result, "visit");
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      visitCount();
      setsource(window.location.href);
    }
  }, []);
  //main getlogistic
  const navigate = useNavigate();
  const [logisticslist, setLogisticsList] = useState({});
  let logisticstype = logisticslist.type;
  const filterByBrand =
    logisticstype &&
    logisticstype.map((data) => {
      return data.Brand;
    });
  const uniqueArrayofBrand =
    filterByBrand &&
    filterByBrand.filter((value, index, self) => {
      const trimmedValue = value.trim();
      return self.findIndex((item) => item.trim() === trimmedValue) === index;
    });

  async function getLogisticsList() {
    let resultLogistics = await axios.get(
      "https://app.fuelfree.in/product/logistics",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let logisticsData = await resultLogistics.data;
    setLogisticsList(logisticsData);
  }

  useEffect(() => {
    getLogisticsList();
  }, []);
  //for add favorite pliz login
  let goTologin = () => {
    toast.warning("Please Login");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
    return { _id: null };
  };
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : NaN;
  let uid = user._id;
  const setId = async (productID) => {
    let pId = productID;
    let userid = uid ? uid : goTologin();
    try {
      let Addtofavorite = await axios.post(
        `https://app.fuelfree.in/favorite/add/${userid}/${pId}`,
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

  //for search====
  const [filteredList, setFilteredList] = new useState(logisticstype);
  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    var updatedList = [...logisticstype];
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
    var updatedList = [...logisticstype];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.address.toLowerCase().indexOf(query.toLowerCase()) !== 1;
    });
    // Trigger render with updated values
    setFilteredList(updatedList);
  };

  $(document).ready(function () {
    $("#fiter-brad-cot").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("div#brand-filter .filter-content label").filter(function () {
        $(this)
          .parent()
          .toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
    $(".btn-to-open-filtr").click(function () {
      $(this).parent().toggleClass("open-filter");
    });
  });

  //filter
  const [cycleproduct, setcycleproduct] = useState("");
  const [Brand, setBrand] = useState("");
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
  const setbrand = (brand) => {
    let data = `&Brand=${brand}`;
    setBrand(data);
  };

  const getfilter = async () => {
    let productBrand = Brand ? Brand : "";
    let maxPrice = Price ? Price : "";
    let DrivingRangeProduct = Range ? Range : "";
    console.log(productBrand, "brand");
    console.log(maxPrice, "maxprice");
    console.log(DrivingRangeProduct, "maxprice");
    let res = await axios.get(
      `https://app.fuelfree.in/product/multiFilter?VehicleType=logistics${productBrand}${DrivingRangeProduct}${maxPrice}`,
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
  }, [Brand, Price, Range]);

  const bikePrices = [
    { productPrice: "90000", productPriceK: "90k" },
    { productPrice: "110000", productPriceK: "110k" },
    { productPrice: "150000", productPriceK: "150k" },
    { productPrice: "200000", productPriceK: "200k" },
    { productPrice: "250000", productPriceK: "250k" },
    { productPrice: "300000", productPriceK: "300k" },
    { productPrice: "350000", productPriceK: "350k" },
    { productPrice: "400000", productPriceK: "400k" },
  ];
  const DrivingRange = [
    { DrivingRange: "60" },
    { DrivingRange: "80" },
    { DrivingRange: "100" },
    { DrivingRange: "120" },
    { DrivingRange: "150" },
  ];

  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div>
      <Header />
      <ToastContainer />
      <section id="collection-id">
        <img src={logisticsBanner} alt="bycycle"></img>
        <div className="collection-id-upper">
          <h1>ELECTRIC Logistics</h1>
          <p>#switchtoev</p>
        </div>
        <div className="page-wallpaper">
          <div className="tanker">
            <div className="bread-crumb">
              <Link to="/">Home</Link>/<Link to="/collection">Collection</Link>/
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------our cycles------------------------------- */}
      <div className="tanker">
        <div class="mobile-section-headfing">
          <span></span>
          <h3>EV-Logistics</h3>
          <span></span>
        </div>
      </div>
      <div className="tanker">
        <section id="product-cotegory-outer-ot">
          <div className="product-cot-filter">
            <div
              className={`product-cot-filter-content ${
                activeMenu === "menu" ? "open-filter" : ""
              }`}
              id="brand-filter"
            >
              <button
                className="btn-to-open-filtr"
                onClick={() => handleMenuClick("menu")}
              >
                Filter by Brand <span>&gt;</span>
              </button>

              <div class="filter-content-outer">
                <input
                  className="fiter-input-filter "
                  id="fiter-brad-cot"
                  placeholder="Search brand"
                ></input>

                {uniqueArrayofBrand &&
                  uniqueArrayofBrand.map((data) => (
                    <div className="filter-content">
                      <input
                        name="brand"
                        type="radio"
                        value={data}
                        onClick={() => setbrand(data)}
                      ></input>
                      <label>{data}</label>
                    </div>
                  ))}
              </div>
            </div>
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

          {/* ---------------------------------our cars------------------------------- */}
          <div id="OUR-CARS">
            <div className="cotegotry-overlay-background">
              <div
                className="cotegory-first-image"
                style={{ backgroundImage: `url(${logisticsBG})` }}
              ></div>
              <div
                id="cotegory-secand-image"
                style={{ backgroundImage: `url(${logisticsBG})` }}
              >
                <span></span>
              </div>
            </div>

            {cycleproduct ? (
              <div className="OUR-CARS-outer">
                {" "}
                {cycleproduct &&
                  cycleproduct.map((data) => (
                    <div class="Carcard" key={data._id}>
                      <Link
                        onClick={() => setId(data._id)}
                        className="favrate-butn"
                        title="Add to favorite"
                      >
                        <i class="fa fa-heart"></i>
                      </Link>
                      <img
                        alt={`${data.productName} image`}
                        src={`https://app.fuelfree.in/${data.productImage}`}
                      />

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
              </div>
            ) : (
              <div className="OUR-CARS-outer">
                {" "}
                {logisticstype &&
                  logisticstype.map((data) => (
                    <div class="Carcard" key={data._id}>
                      <Link
                        onClick={() => setId(data._id)}
                        className="favrate-butn"
                        title="Add to favorite"
                      >
                        <i class="fa fa-heart"></i>
                      </Link>
                      <img
                        alt={`${data.productName} image`}
                        src={`https://app.fuelfree.in/${data.productImage}`}
                      />

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
              </div>
            )}
          </div>
          <div className="pagination-products-all">
              <ResponsivePagination
                current={currentPage}
                total={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default LogisticsVehicle;
