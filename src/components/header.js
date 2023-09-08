import "./header.css";
import $ from "jquery";
import axios from "axios";
import logo from "../pages/images/logo.png";
import { BsFacebook } from "react-icons/bs";
import "react-toastify/dist/ReactToastify.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import config from "../utils/config";
import ModalBox from "./modalBox";
import { IoIosWallet } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import DealerListModalBox from "./dealerListModalBox";
import WalletModalBox from "./walletModalBox";
import ChargingModelBox from "./testingpages/chargingModelBox";
import ExchangeVendorModalBox from "./exchangeVendorModalBox";


function Header() {
  const [dataType, setDataType] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  let user = localStorage.getItem("user") ?JSON.parse(localStorage.getItem("user"))  : "";
  let walletbalance = user ? user.walletBalance : "";
  let id = user ? user._id : "";

  const [cycleList, setCycleList] = useState({});
  let cycleType = cycleList.List;

  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  async function getCycleList() {
    try {
      let resultCycle = await axios.get(
        `https://app.fuelfree.in/search/search?query=${searchQuery}`,
        {
          headers: {
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      let cycleData = await resultCycle.data.Data;
      const { products, news } = resultCycle.data.Data;
      if (products.length > 0) {
        setResults(products);
        setDataType("product");
      } else if (news.length > 0) {
        setResults(news);
        setDataType("news");
      } else {
        setResults([]);
        setDataType("");
      }
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getCycleList();
  }, [searchQuery]);

  const [isopensearch, setIsopensearch] = React.useState(false);

  const toggleClass = () => {
    setIsopensearch(!isopensearch);
  };
  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  $(document).ready(function () {
    $(".myInput").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $(".myTable li").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  });

  $(document).ready(function () {
    $(".navbar-mobile-open").on("click", function () {
      $(".mobile-navigation").addClass("open");
      $(".overlay").addClass("open");
    });

    $(".close-navbar-mobile").on("click", function () {
      $(".mobile-navigation").removeClass("open");
      $(".overlay").removeClass("open");
    });

    $(".overlay").on("click", function () {
      $(".mobile-navigation").removeClass("open");
      $(".overlay").removeClass("open");
    });

    var $offCanvasNav = $(".mobile-navigation"),
      $offCanvasNavSubMenu = $offCanvasNav.find(".sub-menu");
    $offCanvasNavSubMenu
      .parent()
      .prepend('<span class="mobile-menu-expand"></span>');
    $offCanvasNavSubMenu.slideUp();
    $(".sub-menu").parent("li").addClass("menu-item-has-children");
  });

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  /// gologin ////
  let navigate = useNavigate();
  const gologin = () => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
      window.location.reload();
    } else {
      navigate("dealerlist");
    }
  };

  ///////Modal /////
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  ///////Wallet Modal/////
  const [isWalletOpen, setIsWalletOpen] = useState(false);

  const openWalletModal = () => {
    setIsWalletOpen(true);
  };

  const closeWalletModal = () => {
    setIsWalletOpen(false);
  };
  ///////Dealer Modal /////
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const openDealerModal = (item) => {
    setIsModalOpen(true);
    setSelectedItem(item);
  };

  const closeDealerModal = () => {
    setIsModalOpen(false);
  };

  ///////charging Modal/////
  const [ischargingOpen, setIschargingOpen] = useState(false);
  const [selectchargintitem, setchargingitem] = useState("");

  const openchargingModal = (item) => {
    setIschargingOpen(true);
    setchargingitem(item);
  };

  const closechargingModal = () => {
    setIschargingOpen(false);
  };

    ///////charging Modal/////
    const [isexchangeOpen, setIsexchangeOpen] = useState(false);
    const [selectexchangeitem, setexchangeitem] = useState("");
  
    const openexchangeModal = (item) => {
      setIsexchangeOpen(true);
      setexchangeitem(item);
    };
  
    const closeExchangeModal = () => {
      setIsexchangeOpen(false);
    };

   //userDetails
 const [userdetails,setuserdetails]=useState('')

 const usrDetails=async()=>{
       let res=await axios.get(`https://app.fuelfree.in/user/details/${id}`,{
         headers:{
           "Accept":"application/json"
         }
       })
       let data=await res.data
       let details=await data.Details
       setuserdetails(details)
 }
 useEffect(()=>{
     usrDetails()
 },[])
   

  // ===========================endsyticky header================================
  return (
    <div>
      <div className="class-headr fixed-header">
        <header className="header-area d-none d-lg-block">
          <div className="header-main">
            <div className="tanker">
              <div className="header-main-wrapper d-flex justify-content-between align-items-center">
                <div className="header-brand">
                  <Link to="/">
                    <img className="custom-logo" src={logo} alt="react" />
                  </Link>
                </div>
                <div className="header-main-content d-flex search-inpt-heder">
                  <input
                    className="myInput"
                    placeholder="Click here to search ev"
                    onClick={toggleClass}
                    onChange={handleSearchInputChange}
                  ></input>
                  <ul
                    className={`myTable ${isopensearch ? "open-search" : ""}`}
                  >
                    <div className="myTable-inner">
                      <li>
                        <Link to="/electric-cycle">
                          Cycle<span>In Collection</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/electric-scooter">
                          Scooters <span>In Collection</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/electric-bike">
                          bike <span>In Collection</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/electric-auto">
                          Eauto <span>In Collection</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/electric-loading">
                          Loading Vehicle <span>In Collection</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/electric-car">
                          Car <span>In Collection</span>
                        </Link>
                      </li>

                      {results.length > 0 && dataType === "product" && (
                        <ul>
                          {results.map((result) => (
                            <li key={result._id}>
                              <Link
                                target="_parent"
                                to={`/products/${
                                  result.productName
                                    ? result.productName
                                    : result.MainHeading
                                }/${result.VehicleType}/${result._id}`}
                              >
                                {result.productName
                                  ? result.productName
                                  : result.MainHeading}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}

                      {results.length > 0 && dataType === "news" && (
                        <ul>
                          {results.map((result) => (
                            <li key={result._id}>
                              <Link
                                target="_parent"
                                to={`/news-details/${result._id}`}
                              >
                                {result.MainHeading}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                      {results.length === 0 && <p>No results found.</p>}
                    </div>
                    <div
                      className="blank-div-to-close"
                      onClick={toggleClass}
                    ></div>
                  </ul>
                </div>
                <div className="header-main-btn">
                  <Link to="/book-your-free-consultation" className="main-btn">
                    <i className="bi bi-car-front-fill"></i>Free Consultation{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="header-menu d-none d-lg-block">
          <div className="tanker">
            <div className="header-menu-inner d-flex align-items-center justify-content-between">
              <nav className="site-navigation">
                <ul className="main-menu">
                  <li>
                    <Link className="active-new" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="">New Electric vehicle</Link>
                    <ul className="sub-menu col-md-6">
                      <li>
                        <Link to="/electric-cycle">Cycles</Link>
                      </li>
                      <li>
                        <Link to="/electric-scooter">Scooters</Link>
                      </li>
                      <li>
                        <Link to="/electric-bike">Bike</Link>
                      </li>
                      <li>
                        <Link to="/electric-auto">E-auto</Link>
                      </li>
                      <li>
                        <Link to="/electric-car">Car</Link>
                      </li>
                      <li>
                        <Link to="/electric-loading">
                          Loading vehicle
                        </Link>
                      </li>
                      <li>
                        <Link to="/electric-bus">Buses</Link>
                      </li>
                      <li>
                        <Link to="/electric-logistics">Logistics vehicle</Link>
                      </li>
                      <li>
                        <Link to="/electric-luna">Electric Luna</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link onClick={openModal}>Used Electric vehicle</Link>
                    <ModalBox
                      isOpen={isOpen}
                      setIsOpen={setIsOpen}
                      closeModal={closeModal}
                    />
                  </li>
                  <li>
                    <Link to="/news">News</Link>
                  </li>
                  <li>
                    <Link to="/">Fuelfree Services</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link onClick={() => openDealerModal("Item 1")}>
                          Dealer List
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => openchargingModal("Item 1")}>
                          Charging Station
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => openexchangeModal("Item 1")}>
                          Exchange Vehicle
                        </Link>
                      </li>
                      <li>
                        <Link to="/rental-vehicle-vendor">Rental Services</Link>
                      </li>
                    </ul>
                  </li>
                  {isModalOpen && (
                    <DealerListModalBox
                      isOpen={isModalOpen}
                      closeModal={closeDealerModal}
                      selectedItem={selectedItem}
                    />
                  )}
                  {ischargingOpen && (
                    <ChargingModelBox
                      isOpen={ischargingOpen}
                      closeModal={closechargingModal}
                      selectedItem={setchargingitem}
                    />
                  )}
                  {isexchangeOpen && (
                    <ExchangeVendorModalBox
                      isOpen={isexchangeOpen}
                      closeModal={closeExchangeModal}
                      selectedItem={setexchangeitem}
                    /> 
                  )}
                  <li>
                    <Link to="/offers">Offers</Link>
                  </li>
                  <li>
                    <Link to="/membership">Membership</Link>
                  </li>
                  <li>
                    <Link to="">Brands</Link>
                    <ul className="sub-menu" id="sub-menu-brnd">
                      <li>
                        <Link to="/audi">Audi</Link>
                      </li>
                      <li>
                        <Link to="/eicher">Eicher</Link>
                      </li>
                      <li>
                        <Link to="/kia">Kia</Link>
                      </li>
                      <li>
                        <Link to="/kinetic">kinetic</Link>
                      </li>
                      <li>
                        <Link to="/ola">Ola</Link>
                      </li>
                      <li>
                        <Link to="/tvs">TVS</Link>
                      </li>
                      <li>
                        <Link to="/mahindra">Mahindra</Link>
                      </li>
                      <li>
                        <Link to="/volvo">Volvo</Link>
                      </li>
                      <li>
                        <Link to="/mercedesbenz">Mercedes Benz</Link>
                      </li>
                      <li>
                        <Link to="/tata">Tata</Link>
                      </li>
                      <li>
                        <Link to="/hyundai">Hyundai</Link>
                      </li>
                      <li>
                        <Link to="/komaki">Komaki</Link>
                      </li>
                      <li>
                        <Link to="/speego">Speego</Link>
                      </li>
                      <li>
                        <Link to="/pureev">Pure EV</Link>
                      </li>
                      <li>
                        <Link to="/hero">Hero</Link>
                      </li>
                      <li>
                        <Link to="/mg">MG</Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    className={`mobile-linnnks ${
                      activeMenu === "More" ? "opn-submenu" : ""
                    }`}
                    onClick={() => handleMenuClick("More")}
                  >
                    <Link to="">More</Link>
                    <ul class="sub-menu">
                      <li>
                        <Link to="/affiliate-network">Refer & Earn</Link>
                      </li>
                      <li>
                        <Link to="/solar-vehicle">Solar Vehicle</Link>
                      </li>
                      <li>
                        <Link to="/electric-rentalvehicles">
                          Rental Electric Vehicles
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <div className="header-social-compare-login d-flex align-items-center">
                <div className="header-social-menu">
                  <ul className="social">
                    <li>
                      <Link target="blank" to="https://twitter.com/fuelfreeind">
                        <i className="bi bi-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="blank"
                        to="https://www.linkedin.com/in/fuelfree/"
                      >
                        <i className="bi bi-linkedin"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="blank"
                        to="https://instagram.com/fuelfree.in?igshid=YmMyMTA2M2Y="
                      >
                        <RiInstagramFill className="insta-icon" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="blank"
                        to="https://youtube.com/@fuelfree-EV"
                      >
                        <i className="bi bi-youtube"></i>
                      </Link>
                    </li>
                    <li>
                      <Link target="blank" to="https://wa.me/7880088944">
                        <IoLogoWhatsapp className="whatsapp-icon" />
                      </Link>
                    </li>
                    <li>
                      <Link target="blank" to="tel:7880088944">
                        <i class="fa fa-phone"></i>
                      </Link>
                    </li>
                    <li>
                      <Link target="blank" to="mailto:info@fuelfree.in">
                        <i class="fa fa-envelope"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="blank"
                        to="https://www.facebook.com/profile.php?id=100092497026712&mibextid=ZbWKwL"
                      >
                        <i>
                          <BsFacebook />
                        </i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="header-compare-login">
                  <ul className="compare-login">
                    <li className="header_wallet">
                      <div className="wallet-head" onClick={openWalletModal}>
                        <div className="wallet_balance_header">
                          <BiRupee className="wallet_rupee_icon" />
                          {userdetails && userdetails.walletBalance}
                        </div>
                        <IoIosWallet className="ioios_wallet" />
                      </div>
                    </li>

                    <WalletModalBox
                      isWalletOpen={isWalletOpen}
                      setIsWalletOpen={setIsWalletOpen}
                      closeWalletModal={closeWalletModal}
                    />
                    <Link
                      to={"/wishlist"}
                      onClick={gologin}
                      className="header-heart-icon"
                    >
                      <i class="fa fa-heart"></i>
                    </Link>

                    <li>
                     
        {user ? (
          <p className="usrnme-text">
            <Link to="/profile">
              <span>{user&&user.userName}</span>
            </Link>
          </p>
        ) : (
          <Link to="/login">
            <i className="bi bi-person-circle"></i>
          </Link>
        )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--====== Header Desktop Menu Ends ======--> */}
        {/* <!--================== Header Mobile menu Start ==========================================================================--> */}
        <div className="header-mobile-menu d-lg-none">
          <div className="tanker">
            <div className="header-mobile-wrapper d-flex justify-content-between align-items-center">
              <div className="header-mobile-logo">
                <Link to="/">
                  <img className="custom-logo" src={logo} alt="react" />
                </Link>
              </div>
              <div className="header-mobile-meta">
                <ul className="meta d-flex">
                  <li className="header_wallet">
                    <div className="wallet-head" onClick={openWalletModal}>
                      <div className="wallet_balance_header">
                        <BiRupee className="wallet_rupee_icon" />
                        {userdetails && userdetails.walletBalance}
                      </div>
                      <IoIosWallet className="ioios_wallet" />
                    </div>
                  </li>
                  <WalletModalBox
                    isWalletOpen={isWalletOpen}
                    setIsWalletOpen={setIsWalletOpen}
                    closeWalletModal={closeWalletModal}
                  />
                  <li>
                  {user ? (
          <p className="usrnme-text">
            <Link to="/profile">
              <span>{user&&user.userName}</span>
            </Link>
          </p>
        ) : (
          <Link to="/login">
            <i className="bi bi-person-circle"></i>
          </Link>
        )}
                  </li>
                  <li>
                    <Link className="toggle-bar navbar-mobile-open">
                      <i className="bi bi-list"></i>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* ==================================================================*/}
              <div className="header-main-content d-flex search-inpt-heder">
                <input
                  className="myInput"
                  onClick={toggleClass}
                  onChange={handleSearchInputChange}
                ></input>
                <ul className={`myTable ${isopensearch ? "open-search" : ""}`}>
                  <div className="myTable-inner">
                    <li>
                      <Link to="/electric-cycle">
                        <b>Cycle</b>
                        <span>In Collection</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/electric-scooter">
                        Scooters <span>In Collection</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/electric-bike">
                        bike <span>In Collection</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/electric-auto">
                        Eauto <span>In Collection</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/loadingVehicle">
                        Loading Vehicle <span>In Collection</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/electric-car">
                        Car <span>In Collection</span>
                      </Link>
                    </li>

                    {results.length > 0 && dataType === "product" && (
                      <ul>
                        {results.map((result) => (
                          <li key={result._id}>
                            <Link
                              target="_parent"
                              to={`/products/${
                                result.productName
                                  ? result.productName
                                  : result.MainHeading
                              }/${result._id}/${result.VehicleType}`}
                            >
                              {result.productName
                                ? result.productName
                                : result.MainHeading}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}

                    {results.length > 0 && dataType === "news" && (
                      <ul>
                        {results.map((result) => (
                          <li key={result._id}>
                            <Link
                              target="_parent"
                              to={`/news-details/${result._id}`}
                            >
                              {result.MainHeading}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                    {results.length === 0 && <p>No results found.</p>}
                  </div>

                  <div
                    className="blank-div-to-close"
                    onClick={toggleClass}
                  ></div>
                </ul>
                <i class="fa fa-search"></i>
              </div>
            </div>
          </div>

          <div className="mobile-navigation">
            <div className="wishlist-mob">
              <p className="close-navbar-mobile-wishlist">
                <Link
                  to={"/wishlist"}
                  onClick={gologin}
                  className="header-heart-icon"
                >
                  <i>
                    <AiOutlineHeart style={{ color: "#fff" }} />
                  </i>
                </Link>
              </p>
              <Link className="close-navbar-mobile">
                <i className="bi bi-x-lg"></i>
              </Link>
            </div>
            <nav className="site-navigation">
              <ul className="main-menu">
                <li>
                  <Link className="active" to="/">
                    Home{" "}
                  </Link>
                </li>
                <li
                  className={`mobile-linnnks ${
                    activeMenu === "new-vehicle" ? "opn-submenu" : ""
                  }`}
                  onClick={() => handleMenuClick("new-vehicle")}
                >
                  <Link>New Electric vehicle</Link>
                  <ul className="sub-menu col-md-6">
                    <li>
                      <Link to="/electric-cycle">Cycles</Link>
                    </li>
                    <li>
                      <Link to="/electric-scooter">Scooters</Link>
                    </li>

                    <li>
                      <Link to="/electric-bike">Bike</Link>
                    </li>
                    <li>
                      <Link to="/electric-auto">E-auto</Link>
                    </li>
                    <li>
                      <Link to="/electric-car">Car</Link>
                    </li>
                    <li>
                      <Link to="/electric-loading">Loading vehicle</Link>
                    </li>
                    <li>
                      <Link to="/electric-bus">Buses</Link>
                    </li>
                    <li>
                      <Link to="/electric-logistics">Logistics vehicle</Link>
                    </li>
                    <li>
                      <Link to="/electric-luna">electric Luna</Link>
                    </li>
                    <li>
                      <Link to="/solar-vehicle">Solar Vehicle</Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`mobile-linnnks ${
                    activeMenu === "Used-vehicle" ? "opn-submenu" : ""
                  }`}
                  onClick={() => handleMenuClick("Used-vehicle")}
                >
                  <Link onClick={openModal}>Used Electric vehicle</Link>
                  <ModalBox
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    closeModal={closeModal}
                  />
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li
                  className={`mobile-linnnks ${
                    activeMenu === "Fuelfree_Services" ? "opn-submenu" : ""
                  }`}
                  onClick={() => handleMenuClick("Fuelfree_Services")}
                >
                  <Link to="">Fuelfree Services</Link>
                  <ul class="sub-menu">
                    <li>
                      <Link onClick={() => openDealerModal("Item 1")}>
                        Dealer List
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => openchargingModal("Item 1")}>
                        Charging Station
                      </Link>
                    </li>
                    <li>
                        <Link onClick={() => openexchangeModal("Item 1")}>
                          Exchange Vehicle
                        </Link>
                      </li>
                    <li>
                      <Link to="/electric-rentalvehicles">Rental Services</Link>
                    </li>
                  </ul>
                </li>
                {isModalOpen && (
                  <DealerListModalBox
                    isOpen={isModalOpen}
                    closeModal={closeDealerModal}
                    selectedItem={selectedItem}
                  />
                )}
                {ischargingOpen && (
                  <ChargingModelBox
                    isOpen={ischargingOpen}
                    closeModal={closechargingModal}
                    selectedItem={setchargingitem}
                  />
                )}
                 {isexchangeOpen && (
                    <ExchangeVendorModalBox
                      isOpen={isexchangeOpen}
                      closeModal={closeExchangeModal}
                      selectedItem={setexchangeitem}
                    /> 
                  )}
                <li>
                  <Link to="/offers">Offers</Link>
                </li>
                <li
                  className={`mobile-linnnks ${
                    activeMenu === "Brands" ? "opn-submenu" : ""
                  }`}
                  onClick={() => handleMenuClick("Brands")}
                >
                  <Link to="">Brands</Link>

                  <ul className="sub-menu">
                    <li>
                      <Link to="/audi">Audi</Link>
                    </li>
                    <li>
                      <Link to="/eicher">Eicher</Link>
                    </li>
                    <li>
                      <Link to="/kia">Kia</Link>
                    </li>
                    <li>
                      <Link to="/kinetic">kinetic</Link>
                    </li>
                    <li>
                      <Link to="/ola">Ola</Link>
                    </li>
                    <li>
                      <Link to="/tvs">TVS</Link>
                    </li>
                    <li>
                      <Link to="/mg">MG</Link>
                    </li>
                    <li>
                      <Link to="/mahindra">Mahindra</Link>
                    </li>
                    <li>
                      <Link to="/volvo">Volvo</Link>
                    </li>
                    <li>
                      <Link to="/mercedesbenz">Mercedes Benz</Link>
                    </li>
                    <li>
                      <Link to="/tata">Tata</Link>
                    </li>
                    <li>
                      <Link to="/hyundai">Hyundai</Link>
                    </li>
                    <li>
                      <Link to="/komaki">Komaki</Link>
                    </li>
                    <li>
                      <Link to="/Speego">Speego</Link>
                    </li>
                    <li>
                      <Link to="/pureev">Pure EV</Link>
                    </li>
                    <li>
                      <Link to="/hero">Hero</Link>
                    </li>
                  </ul>
                </li>

                <li
                  className={`mobile-linnnks ${
                    activeMenu === "More" ? "opn-submenu" : ""
                  }`}
                  onClick={() => handleMenuClick("More")}
                >
                  <Link to="">More</Link>
                  <ul class="sub-menu">
                    <li>
                      <Link to="/affiliate-network">Refer & Earn</Link>
                    </li>
                    <li>
                      <Link to="/solar-vehicle">Solar Vehicle</Link>
                    </li>
                    <li>
                      <Link to="/electric-rentalvehicles">Rental Electric Vehicles</Link>
                    </li>
                  </ul>
                </li>

                <li>
                    <Link to="/membership">Membership</Link>
                  </li>

                <li>
                  <Link to="/book-your-free-consultation">Free Consultation</Link>
                </li>
              </ul>
            </nav>
            <div className="copyright">
              <p>
                &copy;
                <script>
                  document.write(new Date().getFullYear() + ' ');
                </script>{" "}
                <span> FuelFree </span> Made with{" "}
                <i className="bi bi-heart"></i> by{" "}
                <Link to="#">Poss Mobility Pvt. Ltd.</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
