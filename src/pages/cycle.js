import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import axios from "axios";
import bannercycleproductpage from "../pages/images/bannercycleproductpage.png";
import cycle from "./images/cycle.jpg";
import cycle2 from "./images/secand-image.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

function Cycle({ handleclick }) {
  let userdata = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";
  let userId = userdata ? userdata._id : "";
  const [source, setsource] = useState("");
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
      setsource(window.location.href);
    }
  }, []);

  const navigate = useNavigate();
  const userd = JSON.parse(localStorage.getItem("user"));
  const [fromPrice, setFromPrice] = useState(1000);
  const [toPrice, setToPrice] = useState(500000);

  const id = userd ? userd._id : "";

  const Handleclick = (data) => {
    handleclick(data);
  };
  const [cycleList, setCycleList] = useState({});
  let cycleType = cycleList.type;
  const filterByBrand =
    cycleType &&
    cycleType.map((data) => {
      return data.Brand;
    });
  const uniqueArrayofBrand =
    filterByBrand &&
    filterByBrand.filter((value, index, self) => {
      const trimmedValue = value.trim();
      return self.findIndex((item) => item.trim() === trimmedValue) === index;
    });
  console.log(uniqueArrayofBrand, "DUPLICATE");
  async function getCycleList() {
    let resultCycle = await axios.get("https://app.fuelfree.in/product/cycle", {
      headers: {
        Accept: "application/json",
      },
    });
    let cycleData = await resultCycle.data;
    setCycleList(cycleData);
  }

  useEffect(() => {
    getCycleList();
  }, [fromPrice, toPrice]);

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
    //  let pID= productID?productID:goTologin()
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
      if (response.success === "success") {
        toast.success(response.message);
      } else {
        toast.error("already in favoriteList");
      }
    } catch (error) {
      toast.error("already in favoriteList");
    }
  };

  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => {
    setIsActive(!isActive);
  };
  const toggleClas = () => {
    setIsActive(!isActive);
  };

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

  //filter
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
    let res = await axios.get(
      `https://app.fuelfree.in/product/multiFilter?VehicleType=cycle${productBrand}${DrivingRangeProduct}${maxPrice}`,
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
    { productPrice: "10000", productPriceK: "10k" },
    { productPrice: "20000", productPriceK: "20k" },
    { productPrice: "40000", productPriceK: "40k" },
    { productPrice: "50000", productPriceK: "50k" },
    { productPrice: "100000", productPriceK: "100k" },
  ];
  const DrivingRange = [
    { DrivingRange: "10" },
    { DrivingRange: "20" },
    { DrivingRange: "40" },
    { DrivingRange: "60" },
    { DrivingRange: "80" },
  ];

  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div>
      <Header />
      <Helmet>
        <title>FuelFree</title>

        <meta
          name="description"
          content="this is a webite for Electric Cycle where we you can see all Electric Cycle"
        />
        <meta property="og:title" content="All ev solutions" />
        <meta property="og:description" content="lets make go green" />
        <meta
          property="og:image"
          content="https://app.fuelfree.in//uploads/image_1684908449989.61nsRDcdDkL._SY355_ (1).jpg"
        ></meta>
      </Helmet>
      <ToastContainer />
      <section id="collection-id">
        <img src={bannercycleproductpage} alt="bycycle"></img>
        <div className="collection-id-upper">
          <h1>ELECTRIC CYCLES</h1>
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
          <h3>EV-Cycle</h3>
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
              // className="product-cot-filter-content open-filter"
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
          <div id="OUR-CARS">
            <div className="cotegotry-overlay-background">
              <div
                className="cotegory-first-image"
                style={{ backgroundImage: `url(${cycle})` }}
              ></div>
              <div
                id="cotegory-secand-image"
                style={{ backgroundImage: `url(${cycle2})` }}
              >
                <span></span>
              </div>
            </div>

            {cycleproduct ? (
              <div className="OUR-CARS-outer">
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
                        alt={`${data.productName} image`}
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
              </div>
            ) : (
              <div className="OUR-CARS-outer">
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
                        alt={`${data.productName} image`}
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
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Cycle;
