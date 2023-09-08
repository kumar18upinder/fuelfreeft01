import React from "react";
import "./productpage.css";
import Header from "../components/header";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useRef } from "react";
import { BiDownload } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { IoIosShareAlt } from "react-icons/io";
import { Helmet } from "react-helmet";

const SolarProductDetails = () => {
  //visitor
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

  //main product
  const sectionRef = useRef(null);

  function scrollToSection() {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  }

  // ==========================================================================
  const { id } = useParams();

  //variant
  const [carList, setCarList] = useState({});
  let carType = carList.List;
  console.warn(carType);

  async function getCarList() {
    let resultCycle = await axios.get(
      `https://app.fuelfree.in/product/variantsList/${id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let carData = await resultCycle.data;
    setCarList(carData);
  }

  useEffect(() => {
    getCarList();
  }, []);

  //////////
  // const defaultValues = {
  //   rating: "",
  //   review: "",
  // };

  // const validationSchema = yup.object().shape({
  //   rating: yup.string().required("Number is required"),
  //   review: yup.string().required("Review is required"),
  // });

  // const handleSubmit = async (values) => {
  //   try {
  //     let res = await axios.post(
  //       `https://app.fuelfree.in/review/create/6452be553c616030f90ee777/${id}`,
  //       values,
  //       {
  //         headers: {
  //           "content-type": "application/json",
  //           Accept: "application/json",
  //         },
  //       }
  //     );
  //     const result = await res.data;
  //     if (result.success === "success") {
  //       toast.success(result.message);
  //     } else if (result.success === "failure") {
  //       toast.error(result.error);
  //     } else {
  //       toast.error(result.error);
  //     }
  //   } catch (error) {
  //     toast.error("Email is already exists");
  //   }
  // };

  /////// ============Add Review============= //////
  // const [reviewAdd, setReviewAdd] = useState(null);
  // console.log(reviewAdd, "revirerererer");
  // const reviewList = reviewAdd.reviewList;
  // console.log(   reviewList, "abc");

  // let showReview = async () => {
  //   let response = await axios.get(
  //     `https://app.fuelfree.in/review/review_list/${id}`,
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //     }
  //   );
  //   let reviewData = response.data;
  //   let reviewss = reviewData.reviewList;
  //   setReviewAdd(reviewss);
  //   console.log(reviewss, "showReview");
  // };

  // useEffect(() => {
  //   showReview();
  // }, []);

  const Navigate = useNavigate();

  const [data, setDetails] = useState("");

  async function getProductdetails() {
    let resultDetails = await axios.get(
      `https://app.fuelfree.in/solar/productDetails/${id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let data = await resultDetails.data;
    let details = data.productDetail;
    setDetails(details);
  }

  useEffect(() => {
    getProductdetails();
  }, []);

  const gologin = () => {
    if (!localStorage.getItem("user")) {
      Navigate("/login");
      window.location.reload();
    }
  };
  $(document).ready(function () {
    $(".prodiuct-specifiacaton-title").click(function () {
      $(this).parent("div").isToggled("opn-product-content");
    });
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownloadBrochure = () => {
    const link = document.createElement("a");
    link.href = `https://app.fuelfree.in/${data && data.brochure}`;
    link.download = "brochure.pdf";
    link.click();
  };

  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [downPayment, setDownPayment] = useState(0);

  const handleLoanAmountChange = (event) => {
    setLoanAmount(Number(event.target.value));
  };

  const handleInterestRateChange = (event) => {
    setInterestRate(Number(event.target.value));
  };

  const handleLoanTermChange = (event) => {
    setLoanTerm(Number(event.target.value));
  };

  const handleDownPaymentChange = (event) => {
    setDownPayment(Number(event.target.value));
  };

  const handleLoanAmountIncrease = () => {
    setLoanAmount(loanAmount + 1000);
  };

  const handleLoanAmountDecrease = () => {
    if (loanAmount >= 1000) {
      setLoanAmount(loanAmount - 1000);
    }
  };

  const handleDownPaymentIncrease = () => {
    setDownPayment(downPayment + 1000);
  };

  const handleDownPaymentDecrease = () => {
    if (downPayment >= 1000) {
      setDownPayment(downPayment - 1000);
    }
  };

  // Calculate the monthly EMI
  const calculateEMI = () => {
    const principal = loanAmount - downPayment;
    const monthlyInterestRate = interestRate / 1200;
    const termInMonths = loanTerm * 12;
    const emi =
      (principal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, termInMonths)) /
      (Math.pow(1 + monthlyInterestRate, termInMonths) - 1);
    return emi.toFixed(2);
  };

  const [value, setValue] = useState(50);

  function handleInputChange(event) {
    setValue(event.target.value);
  }

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  const [productData, setProductData] = useState(null);
  const productId = id;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.fuelfree.in/products/${id}`);
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, [id]);

  const shareProduct = () => {
    if (navigator.share) {
      navigator
        .share({
          title: productData?.productName || "",
          text: productData?.description || "",
          url: `https://app.fuelfree.in/product/details/${id}`,
        })
        .then(() => console.log("Product shared Successful"))
        .catch((error) => console.error("Error sharing product:", error));
    } else {
      console.log("Sharing is not supported in this browser.");
    }
  };

  return (
    <div id="product_page_id">
      <Header />

      <Helmet>
        <meta property="og:title" content={productData?.productName} />
        <meta property="og:description" content={productData?.description} />
        <meta
          property="og:image"
          content={`https://app.fuelfree.in/${productData?.productImage}`}
        />
      </Helmet>

      <div className="tanker">
        <div className="product_d_page">
          <div>
            <div className="p-details-page p-bg">
              <div className="row">
                <div
                  id="relave-positionfor"
                  className="relative-positionfor-detail"
                >
                  <div
                    id="share-btun"
                    className={isHovered ? "hover-effect-show-shre" : ""}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="shre-hover-btn">
                      {" "}
                      <IoIosShareAlt />
                    </div>
                    <div className="share-on-social">
                      <FacebookShareButton
                        url={`https://fuelfree.in/products/:productName/${
                          data && data._id
                        }`}
                      >
                        <BsFacebook /> <span> Facebook</span>
                      </FacebookShareButton>
                      <TwitterShareButton
                        url={`https://fuelfree.in/products/:productName/${
                          data && data._id
                        }`}
                      >
                        <AiFillTwitterCircle /> <span>Twitter</span>
                      </TwitterShareButton>
                      <WhatsappShareButton
                        url={`https://fuelfree.in/products/:productName/${
                          data && data._id
                        }`}
                      >
                        <RiWhatsappFill /> <span> WhatsApp</span>
                      </WhatsappShareButton>
                    </div>
                  </div>

                  <div className="product-main-img-detail">
                    <img
                      alt={`${data && data.productName} image`}
                      className="product_D_img"
                      src={`https://app.fuelfree.in/${
                        data && data.productImage
                      }`}
                    />
                    {/* <span></span> */}
                  </div>
                  <div className="produt-title-n-dtail">
                    <h2 className="kona-head">{data && data.productName}</h2>

                    <p className="kona-price">
                      {" "}
                      RS.{data && data.productPrice}.00
                    </p>
                    <p className="kona-subheading">
                      {data && data.description}
                    </p>

                    <div className="top-sapectfication">
                      <div className="sapectfication-outer">
                        <div className="sapectfication-outer-content bordr-right">
                          <p>{data && data.topSpeed}</p>
                          <p className="top-cat-spc-p">Top Speed</p>
                        </div>

                        <div className="sapectfication-outer-content bordr-right">
                          <p>{data && data.batterySize}</p>
                          <p className="top-cat-spc-p">Battery KWH</p>
                        </div>

                        <div className="sapectfication-outer-content bordr-right">
                          <p>{data && data.chargingTime}</p>
                          <p className="top-cat-spc-p">Charging Time</p>
                        </div>

                        <div className="sapectfication-outer-content bordr-right">
                          <p>{data && data.payloadCapacity}</p>
                          <p className="top-cat-spc-p">Payload Capacity</p>
                        </div>
                      </div>
                    </div>

                    <div className="Product-page-btns">
                      <Link
                        to={`/testdriveformsecond/${data && data.productName}/${
                          data && data.VehicleType
                        }`}
                        onClick={gologin}
                        class="btn btn-primary enquire-btn mt-2"
                      >
                        Book Your Test Drive
                      </Link>
                      <br></br>
                      <Link
                        to={`/Fillenquiryform/${data && data.productName}/${
                          data && data._id
                        }`}
                        onClick={gologin}
                        class="btn btn-primary enquire-btn mt-2"
                      >
                        Enquire Now
                      </Link>
                      <br></br>
                      <Link
                        to={`/buynowsecond/${data && data.productName}`}
                        onClick={gologin}
                        class="btn btn-primary enquire-btn mt-2"
                      >
                        Buy Now
                      </Link>
                      <br></br>
                      <Link
                        to="#sectionemi-calculater"
                        onClick={scrollToSection}
                        class="btn btn-primary enquire-btn mt-2"
                      >
                        Calculate EMI
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================= */}

      <div class="mobile-section-headfing">
        <span></span>
        <h3>Vehicle Variant</h3>
        <span></span>
      </div>
      <div className="Product-page" id="paduct-varient">
        {carType &&
          carType.map((data) => (
            <div class="variantcard">
              <div className="varientimg">
                <img
                  src={`https://app.fuelfree.in/${data && data.productImage}`}
                />
              </div>
              <div class="varianttitle">
                <h5>{data.productName}</h5>
                <p>₹{data.productPrice}</p>
                <Link to={`/productpagevarient/${data._id}`}></Link>
              </div>
            </div>
          ))}
      </div>

      {/* ========================================================= */}

      <div className="tanker">
        <div className="tanker">
          <div className="product-disc-spection-side">
            <div className="product-dist-sp">
              <div className="content-type-productpage">
                <strong>Vehicle Type:</strong>
              </div>
              <div className="col-md-8">{data && data.VehicleType}</div>
            </div>
            <div className="product-dist-sp">
              <div className="content-type-productpage">
                <strong>Brand:</strong>
              </div>
              <div className="col-md-8">{data && data.Brand}</div>
            </div>
            <div className="product-dist-sp">
              <div className="content-type-productpage">
                <strong>Variant:</strong>
              </div>
              <div className="col-md-8">{data && data.variant}</div>
            </div>
            <div className="product-dist-sp">
              <div className="content-type-productpage">
                <strong>Top Speed:</strong>
              </div>
              <div className="col-md-8">{data && data.topSpeed}km/h</div>
            </div>
            <div className="product-dist-sp">
              <div className="content-type-productpage">
                <strong>Charging Time:</strong>
              </div>
              <div className="col-md-8">{data && data.chargingTime}h</div>
            </div>
            <div className="product-dist-sp">
              <div className="content-type-productpage">
                <strong>Battery Voltage:</strong>
              </div>
              <div className="col-md-8">{data && data.batteryVoltage} V</div>
            </div>
            <div className="product-dist-sp">
              <div className="content-type-productpage">
                <strong>Seating Capacity:</strong>
              </div>
              <div className="col-md-8">{data && data.seatingCapacity}</div>
            </div>
            <div className="product-dist-sp">
              <div className="content-type-productpage">
                <strong>Solar Panel Type:</strong>
              </div>
              <div className="col-md-8">{data && data.solarPanelType}</div>
            </div>
            <div className="product-dist-sp">
              <div className="content-type-productpage">
                <strong>Range Per Charge:</strong>
              </div>
              <div className="col-md-8">{data && data.rangePerCharge}</div>
            </div>
            <div className="product-dist-sp">
              <div className="content-type-productpage">
                <strong>City:</strong>
              </div>
              <div className="col-md-8">{data && data.city}</div>
            </div>
          </div>
        </div>

        <div class="mobile-section-headfing">
          <span></span>
          <h3>Dealers</h3>
          <span></span>
        </div>
        <div className="Product-page" id="paduct-varient"></div>
      </div>
      <div className="tanker">
        <div className="p-details-des p-bg my-5 ps-3 py-4">
          <div className="row pt-3 px-2">
            <div className="col-md-3 pr-border">
              <h6 className="p-des">Description</h6>
            </div>
            <div className="col-md-9">
              <h4 className="p-desc-weight">Description</h4>
              <p>{data && data.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="mobile-section-headfing">
          <h3>Calculate Your EMI For This Product</h3>
        </div>
      </div>
      <section id="emi-calculater" ref={sectionRef}>
        <div className="tanker">
          <div className="emi-content">
            <label htmlFor="loanAmount">Loan Amount (in ₹):</label>

            <input
              type="number"
              id="loanAmount"
              value={loanAmount}
              onChange={handleLoanAmountChange}
            />
          </div>
          <div className="emi-content">
            <label htmlFor="interestRate">Interest Rate (in %):</label>
            <input
              type="number"
              id="interestRate"
              step="0.05"
              onChange={handleInterestRateChange}
            />
          </div>
          <div className="emi-content">
            <label htmlFor="loanTerm">Loan Term (in years):</label>
            <input
              type="number"
              id="loanTerm"
              onChange={handleLoanTermChange}
            />
          </div>
          <div className="emi-content">
            <label htmlFor="downPayment">Down Payment (in ₹):</label>

            <button onClick={handleDownPaymentDecrease}>-</button>
            <input
              type="number"
              id="downPayment"
              value={downPayment}
              onChange={handleDownPaymentChange}
            />
            <button onClick={handleDownPaymentIncrease}>+</button>
          </div>
          <div className="emi-content-result">
            <p>EMI: </p>
            <span>{calculateEMI()}</span>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default SolarProductDetails;
