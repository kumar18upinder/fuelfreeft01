import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import axios from "axios";
import luna_banner from "../pages/images/luna_banner.png";
import luna from "../pages/images/luna.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

function Electricluna({ handleclick }) {
  const navigate = useNavigate();
  const userd = JSON.parse(localStorage.getItem("user"));

  const [eautolist, setEautoList] = useState({});
  let eautotype = eautolist.type;

  // remove duplicate
 const [duplicate, setduplicate] = useState("");
 const filterByBrand =
 eautotype &&
 eautotype.map((data) => {
     return data.Brand;
   });
 const uniqueArrayofBrand =
   filterByBrand &&
   filterByBrand.filter((value, index, self) => {
     const trimmedValue = value.trim();
     return self.findIndex((item) => item.trim() === trimmedValue) === index;
   });
  async function getEautoList() {
    let resultEauto = await axios.get("https://app.fuelfree.in/product/Luna", {
      headers: {
        Accept: "application/json",
      },
    });
    let eautoData = await resultEauto.data;
    setEautoList(eautoData);
  }

  useEffect(() => {
    getEautoList();
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
    console.log(productBrand, "brand");
    console.log(maxPrice, "maxprice");
    console.log(DrivingRangeProduct, "maxprice");
    let res = await axios.get(
      `https://app.fuelfree.in/product/multiFilter?VehicleType=luna${productBrand}${DrivingRangeProduct}${maxPrice}`,
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
  // useEffect(()=>{
  //  visitCount()
  // },[])
  useEffect(() => {
    getfilter();
  }, [Brand, Price, Range]);
  
  const bikePrices = [
    { productPrice: "70000", productPriceK: "70k" },
    { productPrice: "100000", productPriceK: "100k" },
    { productPrice: "120000",productPriceK: "120k" },
    { productPrice: "150000", productPriceK: "150k" },
    { productPrice: "200000",productPriceK: "200k" },
  ];
  const DrivingRange = [
    { DrivingRange: "50"},
    { DrivingRange: "70" },
    { DrivingRange: "100" },
    { DrivingRange: "130" },
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
        <img src={luna_banner} alt="auto"></img>
        <div className="collection-id-upper">
          <h1>ELECTRIC LUNA</h1>
          <p>#switchtoev</p>
        </div>
        <div className="page-wallpaper">
          <div className="tanker">
            <div className="bread-crumb">
              <Link to="/">Home</Link>
              <Link to="/collection">Collection</Link>
            </div>
            <h3>ELECTRIC LUNA</h3>
          </div>
        </div>
      </section>

      {/* ---------------------------------our cycles------------------------------- */}
      <div className="tanker">
        <div class="mobile-section-headfing">
          <span></span>
          <h3>EV-Luna</h3>
          {/* 
          <button onClick={getCycleList}>All</button> */}
          <span></span>
        </div>
      </div>
      <div className="tanker">
        <section id="product-cotegory-outer-ot">
        <div className="product-cot-filter">
              <div
                className={`product-cot-filter-content ${activeMenu === 'menu' ? 'open-filter' : ''}`}
                // className="product-cot-filter-content open-filter"
                id="brand-filter"
              >
                <button className="btn-to-open-filtr" onClick={() => handleMenuClick('menu')}>
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
                {/* <button className="see-changes" onClick={getfilter}>
                See changes
              </button> */}
              </div>
              {/* ============================================================ */}
              <div
               className={`product-cot-filter-content ${activeMenu === 'menu1' ? 'open-filter' : ''}`}
              >
                <button className="btn-to-open-filtr" onClick={() => handleMenuClick('menu1')}>
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
              className={`product-cot-filter-content ${activeMenu === 'menu3' ? 'open-filter' : ''}`}
              >
                <button className="btn-to-open-filtr" onClick={() => handleMenuClick('menu3')}>
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
            {/* <div class="mobile-section-headfing">
          <span></span>
          <h3>EV-LUNA</h3>
          <span></span>
        </div> */}
            <div className="tanker">
              <div className="OUR-CARS-outer">
                <div className="cotegotry-overlay-background">
                  <div
                    className="cotegory-first-image"
                    style={{ backgroundImage: `url(${luna})` }}
                  ></div>
                  <div
                    id="cotegory-secand-image"
                    style={{ backgroundImage: `url(${luna})` }}
                  >
                    <span></span>
                  </div>
                </div>

                {cycleproduct ? (
                  <>
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
                  </>
                ) : (
                  <>
                    {" "}
                    {eautotype &&
                      eautotype.map((data) => (
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
                  </>
                )}
              </div>
            </div>
            <div className="pagination-products-all">
        <ResponsivePagination
                current={currentPage}
                total={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default Electricluna;
