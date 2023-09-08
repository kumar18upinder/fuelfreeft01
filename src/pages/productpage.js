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
import { Helmet } from "react-helmet";
import "react-toastify/dist/ReactToastify.css";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { BsFacebook, BsCurrencyRupee } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { IoIosShareAlt } from "react-icons/io";
import { FaStar, FaRegStar } from "react-icons/fa";
import ImageSlider from "../pages/imagesliderproductpage";

const Productpage = () => {
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
  }, [userId]);

  // ====================================model box image===============================

  const sectionRef = useRef(null);
  function scrollToSection() {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  }
  const { id } = useParams();
  //variant
  const [carList, setCarList] = useState({});
  let carType = carList.List;

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
  }, [id]);

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : NaN;
  const uid = user._id;

  const defaultValues = {
    rating: 0,
    review: "",
  };

  const validationSchema = yup.object({
    rating: yup.number().required("Rating is required"),
    review: yup.string(),
  });
  const StarRating = ({ rating, onClick }) => {
    return (
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= rating ? "fa fa-star checked" : "bi bi-star"}
            onClick={() => onClick(star)}
          ></span>
        ))}
      </div>
    );
  };
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = async (values, { resetForm }) => {
    const formData = {
      ...values,
      rating: selectedRating,
    };
    try {
      let res = await axios.post(
        `https://app.fuelfree.in/review/create/${uid}/${id}`,
        formData,
        {
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const result = await res.data;
      if (result.success === "success") {
        toast.success("Review Added");
        window.location.reload();
      } else if (result.success === "failure") {
        toast.error(result.error);
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error("User can't rating again");
    }
    resetForm();
  };

  /////// ============Review List============= //////
  const [review, setReview] = useState({});
  let reviewList = review.reviewList;

  async function getReviewList() {
    let response = await axios.get(
      `https://app.fuelfree.in/review/productReviewList/${id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let reviewListData = await response.data;
    setReview(reviewListData);
  }

  useEffect(() => {
    getReviewList();
  }, [id]);

  // ================== star ==================

  const renderRatingStars = (rating) => {
    const filledStars = Math.floor(rating);
    const remainingStars = 5 - filledStars;

    return (
      <>
        {[...Array(filledStars)].map((_, index) => (
          <FaStar style={{ color: "gold" }} key={index} />
        ))}
        {[...Array(remainingStars)].map((_, index) => (
          <FaRegStar key={index} />
        ))}
      </>
    );
  };

  // =============================tabs======================

  const Navigate = useNavigate();

  const [data, setDetails] = useState("");
  async function getProductdetails() {
    let resultDetails = await axios.get(
      `https://app.fuelfree.in/product/details/${id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let data = await resultDetails.data;
    let details = data.productDetails;
    setDetails(details);
  }

  useEffect(() => {
    getProductdetails();
  }, [id]);

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

  // ++++++++++++++++++++++++++++++++++Share URL++++++++++++++++++++++++++++++++++
  const MAX_TEXT_LENGTH = 100;

  const shareUrl = `https://fuelfree.in/products/${data.productName}/${data.VehicleType}/${data._id}`;
  const text = `${data.productName}\n${data.description}`;
  const truncatedText =
    text.length > MAX_TEXT_LENGTH
      ? `${text.slice(0, MAX_TEXT_LENGTH)}...`
      : text;

  const imageUrl = `https://app.fuelfree.in/${data && data.productImage[0]}`;
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  //calculate EMI
  const [emiData, setEMIData] = useState({});
  const [financerlist, setFinancerlist] = useState([]);
  const [selectFinancer, setSelectFinancer] = useState("");
  useEffect(() => {
    const getFinancerlist = async () => {
      try {
        const response = await axios.get(
          `https://app.fuelfree.in/finance/list`,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        const result = await response.data;
        const financerlistData = result.List;
        setFinancerlist(financerlistData);
      } catch (error) {
        console.log("Error in fetching Financerlist", error);
      }
    };
    getFinancerlist();
  }, []);
  const [loanAmount, setLoanAmount] = useState(data?.productPrice);
  const EMIvalues = {
    vehicleType: "",
    months: "",
    downPayment: "",
  };
  const validationEMISchema = yup.object().shape({
    vehicleType: yup.string().required(),
    months: yup.string().matches(/^\d+$/).required(),
    downPayment: yup.string().matches(/^\d+$/).required(),
  });
  const handleEMICalculation = async (values) => {
    let EMIdata = {
      ...values,
      loanAmount: data?.productPrice,
    };
    let Fid = selectFinancer
      ? selectFinancer
      : toast.error("Please Select Financer Name");
    const loanAmount = data?.productPrice;
    const downPayment = values.downPayment;

    // Check if down payment is less than loan amount
    if (downPayment >= loanAmount) {
      toast.error("Down payment must be less than the loan amount.");
      return;
    }
    try {
      let response = await axios.post(
        `https://app.fuelfree.in/EMI/calculateEMI/${Fid}`,
        EMIdata,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      const resultEMI = await response.data;
      setEMIData(resultEMI);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id={data?._id}>
      <Header />
      <ToastContainer />
      <Helmet>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="faviconfuelfree/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="faviconfuelfree/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="faviconfuelfree/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="faviconfuelfree/site.webmanifest"></link>
        <title>{data?.productName}</title>
        <meta name="description" content={data?.description} />
        <meta property="og:title" content={data?.productName} />
        <meta property="og:description" content={data?.metaDescription} />
        <meta property="og:image" content={imageUrl} />
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
                        <AiFillTwitterCircle />
                        <span>Twitter</span>
                      </TwitterShareButton>
                      <WhatsappShareButton
                        url={shareUrl}
                        title={truncatedText}
                        separator=" - "
                      >
                        <RiWhatsappFill />
                        <span>WhatsApp</span>
                      </WhatsappShareButton>
                    </div>
                  </div>

                  <div className="product-main-img-detail">
                    <ImageSlider productImage={data && data.productImage} />
                  </div>
                  <div className="produt-title-n-dtail">
                    <h2 className="kona-head">{data && data.productName}</h2>

                    <div style={{ display: "flex" }}>
                      <p className="kona-price">
                        {" "}
                        RS.{data && data.productPrice}.00
                      </p>
                      <h6>(Ex-showroom Price)</h6>
                    </div>
                    <p className="kona-subheading">
                      {data && data.description}
                    </p>

                    <div className="top-sapectfication">
                      <div className="sapectfication-outer">
                        <div className="sapectfication-outer-content bordr-right">
                          <p>{data && data.topSpeed} km/h</p>
                          <p className="top-cat-spc-p">Top Speed</p>
                        </div>

                        <div className="sapectfication-outer-content bordr-right">
                          <p>{data && data.batteryWarrantyYears} yrs</p>
                          <p className="top-cat-spc-p">
                            Battery Warranty
                          </p>
                        </div>

                        <div className="sapectfication-outer-content bordr-right">
                          <p>{data && data.chargingTime} hrs</p>
                          <p className="top-cat-spc-p">Charging Time</p>
                        </div>

                        <div className="sapectfication-outer-content bordr-right">
                          <p>{data && data.DrivingRange} kms</p>
                          <p className="top-cat-spc-p">Driving Range</p>
                        </div>
                      </div>
                    </div>

                    <div className="Product-page-btns">
                      <Link
                        to={`/book-your-test-drive/${
                          data && data.productName
                        }/${data && data.VehicleType}/${data && data.Brand}/${
                          data && data.city
                        }`}
                        onClick={gologin}
                        class="btn btn-primary enquire-btn mt-2"
                      >
                        Book Your Test Drive
                      </Link>
                      <br></br>
                      <Link
                        to={`/send-your-enquiry/${data && data.productName}/${
                          data && data._id
                        }`}
                        onClick={gologin}
                        class="btn btn-primary enquire-btn mt-2"
                      >
                        Enquire Now
                      </Link>
                      <br></br>
                      <Link
                        to={`/buy-electric-vehicle/${
                          data && data.productName
                        }/${data && data.productPrice}/${
                          data && data.VehicleType
                        }/${data && data.Brand}/${data && data.city}`}
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
                  src={`https://app.fuelfree.in/${
                    data && data.productImage[0]
                  }`}
                />
              </div>
              <div class="varianttitle">
                <h5>{data.productName}</h5>
                <p style={{ textAlign: "right" }}>{data.variant}</p>
                <Link to={`/productpagevarient/${data._id}`}></Link>
              </div>
            </div>
          ))}
      </div>

      {/* ========================================================= */}

      <div className="tanker">
        <div className="tanker">
          <div className="product-disc-spection-side">
            {data && data.productName ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Vehicle Name:</strong>
                </div>
                <div className="col-md-8">{data && data.productName}</div>
              </div>
            ) : (
              ""
            )}
            {data && data.VehicleType ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Vehicle Type:</strong>
                </div>
                <div className="col-md-8">{data && data.VehicleType}</div>
              </div>
            ) : (
              ""
            )}
            {data && data.productPrice ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Ex-showroom Price:</strong>
                </div>
                <div className="col-md-8">
                  <BsCurrencyRupee />
                  {data && data.productPrice}
                </div>
              </div>
            ) : (
              ""
            )}
            {data && data.Brand ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Brand:</strong>
                </div>
                <div className="col-md-8">{data && data.Brand}</div>
              </div>
            ) : (
              ""
            )}
            {data && data.variant ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Variant:</strong>
                </div>
                <div className="col-md-8">{data && data.variant}</div>
              </div>
            ) : (
              ""
            )}
            {data && data.DrivingRange ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Driving Range:</strong>
                </div>
                <div className="col-md-8">{data && data.DrivingRange}kms</div>
              </div>
            ) : (
              ""
            )}
            {data && data.topSpeed ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Top Speed:</strong>
                </div>
                <div className="col-md-8">{data && data.topSpeed}km/h</div>
              </div>
            ) : (
              ""
            )}
            {data && data.chargingTime ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Charging Time:</strong>
                </div>
                <div className="col-md-8">{data && data.chargingTime}h</div>
              </div>
            ) : (
              ""
            )}
            {data && data.batterySize ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Battery Size:</strong>
                </div>
                <div className="col-md-8">{data && data.batterySize}kWh</div>
              </div>
            ) : (
              ""
            )}
            {data && data.batteryVoltage ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Battery Voltage:</strong>
                </div>
                <div className="col-md-8">
                  {data && data.batteryVoltage}Voltage
                </div>
              </div>
            ) : (
              ""
            )}
            {data && data.payloadCapacity ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Payload Capacity:</strong>
                </div>
                <div className="col-md-8">{data && data.payloadCapacity}</div>
              </div>
            ) : (
              ""
            )}
            {data && data.seatingCapacity ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Seating Capacity:</strong>
                </div>
                <div className="col-md-8">{data && data.seatingCapacity}</div>
              </div>
            ) : (
              ""
            )}

            {/* {data && data.brochure ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Brochure:</strong>
                </div>
                <div className="col-md-8" style={{ display: "flex" }}>
                  <embed
                    src={`https://app.fuelfree.in/${data.brochure}`}
                    type="application/pdf"
                    width="40%"
                    height="20px"
                    className="brocher-embed"
                  />
                  <BiDownload
                    target="_blank"
                    className="download-broucher"
                    onClick={handleDownloadBrochure}
                  />
                </div>
              </div>
            ) : (
              ""
            )} */}
            {data && data.brochure && (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Brochure:</strong>
                </div>
                <div className="col-md-8" style={{ display: "flex" }}>
                  <embed
                    src={`https://app.fuelfree.in/${data.brochure}`}
                    type="application/pdf"
                    width="40%"
                    height="20px"
                    className="brocher-embed"
                  />
                  <BiDownload
                    target="_blank"
                    className="download-broucher"
                    onClick={handleDownloadBrochure}
                  />
                </div>
              </div>
            )}
            {data && data.frontBrakeType ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Front Brake Type:</strong>
                </div>
                <div className="col-md-8">{data && data.frontBrakeType}</div>
              </div>
            ) : (
              ""
            )}

            {data && data.rearBrakeType ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Rear Brake Type:</strong>
                </div>
                <div className="col-md-8">{data && data.rearBrakeType}</div>
              </div>
            ) : (
              ""
            )}

            {data && data.tyreType ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Tyre Type:</strong>
                </div>
                <div className="col-md-8">{data && data.tyreType}</div>
              </div>
            ) : (
              ""
            )}

            {data && data.frontSuspension ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Front Suspension:</strong>
                </div>
                <div className="col-md-8">{data && data.frontSuspension}</div>
              </div>
            ) : (
              ""
            )}

            {data && data.rearSuspension ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Rear Suspension:</strong>
                </div>
                <div className="col-md-8">{data && data.rearSuspension}</div>
              </div>
            ) : (
              ""
            )}

            <div className="product-dist-sp">
              <div className="content-type-productpage">
                <strong>Charger Included:</strong>
              </div>
              {data && data.chargerIncluded === "true" ? (
                <div className="col-md-8">Yes</div>
              ) : (
                <div className="col-md-8">No</div>
              )}
            </div>

            {data && data.airbags ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Air Bags:</strong>
                </div>
                <div className="col-md-8">{data && data.airbags}</div>
              </div>
            ) : (
              ""
            )}

            <div className="product-dist-sp">
              <div className="content-type-productpage">
                <strong>Anti-Lock Braking System:</strong>
              </div>
              {data && data.ABS === "true" ? (
                <div className="col-md-8">Yes</div>
              ) : (
                <div className="col-md-8">No</div>
              )}
            </div>

            <div className="product-dist-sp">
              <div className="content-type-productpage">
                <strong>Automatic Emergency Braking:</strong>
              </div>
              {data && data.AEB === "true" ? (
                <div className="col-md-8">Yes</div>
              ) : (
                <div className="col-md-8">No</div>
              )}
            </div>

            <div className="product-dist-sp">
              <div className="content-type-productpage">
                <strong>Parking Assist:</strong>
              </div>
              {data && data.parkingAssist === "true" ? (
                <div className="col-md-8">Yes</div>
              ) : (
                <div className="col-md-8">No</div>
              )}
            </div>

            <div className="product-dist-sp">
              <div className="content-type-productpage">
                <strong>Reverse Assist:</strong>
              </div>
              {data && data.reverseAssist === "true" ? (
                <div className="col-md-8">Yes</div>
              ) : (
                <div className="col-md-8">No</div>
              )}
            </div>

            <div className="product-dist-sp">
              <div className="content-type-productpage">
                <strong>Distance To Empty:</strong>
              </div>
              {data && data.distanceToEmpty === "true" ? (
                <div className="col-md-8">Yes</div>
              ) : (
                <div className="col-md-8">No</div>
              )}
            </div>

            {data && data.display ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Display:</strong>
                </div>
                <div className="col-md-8">{data && data.display}</div>
              </div>
            ) : (
              ""
            )}

            {data && data.displaySize ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Display Size:</strong>
                </div>
                <div className="col-md-8">{data && data.displaySize}</div>
              </div>
            ) : (
              ""
            )}

            {data && data.speakers ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Speakers:</strong>
                </div>
                <div className="col-md-8">{data && data.speakers}</div>
              </div>
            ) : (
              ""
            )}

            <div className="product-dist-sp">
              <div className="content-type-productpage">
                <strong>GPS Navigation System:</strong>
              </div>
              {data && data.GPSNavigationSystem === "true" ? (
                <div className="col-md-8">Yes</div>
              ) : (
                <div className="col-md-8">No</div>
              )}
            </div>

            <div className="product-dist-sp">
              <div className="content-type-productpage">
                <strong>Bluetooth Compatibility:</strong>
              </div>
              {data && data.bluetoothCompatibility === "true" ? (
                <div className="col-md-8">Yes</div>
              ) : (
                <div className="col-md-8">No</div>
              )}
            </div>

            {data && data.batteryWarrantyYears ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Battery Warranty(Years):</strong>
                </div>
                <div className="col-md-8">
                  {data && data.batteryWarrantyYears}
                </div>
              </div>
            ) : (
              ""
            )}

            {data && data.batteryWarrantyKM ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Battery Warranty(KM):</strong>
                </div>
                <div className="col-md-8">{data && data.batteryWarrantyKM}</div>
              </div>
            ) : (
              ""
            )}

            {data && data.interior ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Interior:</strong>
                </div>
                <div className="col-md-8">{data && data.interior}</div>
              </div>
            ) : (
              ""
            )}
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
      <div className="tanker">
        <div className="p-details-des p-bg my-5 ps-3 py-4">
          <div className="row pt-3 px-2">
            <div className="col-md-3 pr-border">
              <h4 className="p-desc-weight p-des">Add Review</h4>
              <Formik
                initialValues={defaultValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  <Field name="rating">
                    {({ field }) => (
                      <>
                        <StarRating
                          className="star-rating"
                          rating={selectedRating}
                          onClick={handleRatingClick}
                        />
                        <p className="text-danger">
                          <ErrorMessage name={field.name} />
                        </p>
                      </>
                    )}
                  </Field>
                  <Field
                    type="text"
                    name="review"
                    placeholder="Review"
                    className="form-control margin-review"
                  />
                  <p className="text-danger">
                    <ErrorMessage name="review" />
                  </p>
                  <button
                    type="submit"
                    className="btn btn-primary userlogin-btn mt-3"
                  >
                    Submit
                  </button>
                </Form>
              </Formik>
            </div>

            <div className="col-md-9">
              <h4 className="p-desc-weight">Reviews</h4>
              {reviewList && reviewList.length > 0 ? (
                reviewList.map((data) => (
                  <>
                    <h6>{data.review}</h6>
                    <div>{renderRatingStars(data.rating)}</div>
                    <hr />
                  </>
                ))
              ) : (
                <p>0 Review</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="emi-cal-c-main-outer">
        <div className="mobile-section-headfing-emi">
          <h3 className="mobile-section-headfing-emi">
            Calculate Your EMI For This Product
          </h3>
        </div>
        <div className="financer-name-list">
          <select
            className="select-financer"
            value={selectFinancer}
            onChange={(e) => setSelectFinancer(e.target.value)}
            required="required"
          >
            <option value="">---Select a financer---</option>
            {financerlist &&
              financerlist.map((financer) => (
                <option key={financer._id} value={financer._id}>
                  {financer.firmName}
                </option>
              ))}
          </select>
        </div>
        <section id="emi-calculater" ref={sectionRef}>
          <div className="emi-cal-c">
            <div className="flex-direction">
              <label htmlFor="interestRate" className="emi-label">
                Loan Amount (in ₹):
              </label>
              <input
                type="text"
                value={loanAmount || data.productPrice || ""}
                onChange={(event) => setLoanAmount(event.target.value)}
                className="form-control loan-input"
                required
              />
            </div>
          </div>
          <Formik
            initialValues={EMIvalues}
            validationSchema={validationEMISchema}
            onSubmit={handleEMICalculation}
          >
            <Form>
              <div className="tanker" id="emi-id">
                <div className="emi-cal-c">
                  <label htmlFor="loanAmount" className="emi-label">
                    Vehicle Type:
                  </label>
                  <div className="flex-direction">
                    <Field
                      as="select"
                      className="vehicle-input"
                      name="vehicleType"
                      id="vehicleType"
                    >
                      <option value="">---Select a field---</option>
                      <option value="two_wheeler">Two Wheeler</option>
                      <option value="three_wheeler">Three Wheeler</option>
                      <option value="four_wheeler">Four Wheeler</option>
                    </Field>
                    <p className="text-danger text-center">
                      <ErrorMessage name="vehicleType" />
                    </p>
                  </div>
                </div>

                <div className="emi-cal-c">
                  <div className="flex-direction">
                    <label htmlFor="loanTerm" className="emi-label">
                      Loan Term (in months):
                    </label>
                    <Field
                      type="text"
                      name="months"
                      placeholder="Months"
                      className="form-control"
                    />
                    <p className="text-danger text-center">
                      <ErrorMessage name="months" />
                    </p>
                  </div>
                </div>
                <div className="emi-cal-c">
                  <label htmlFor="downPayment" className="emi-label">
                    Down Payment (in ₹):
                  </label>
                  <div className="flex-direction">
                    <Field
                      type="text"
                      name="downPayment"
                      placeholder="Down Payment"
                      className="form-control"
                    />
                    <p className="text-danger text-center">
                      <ErrorMessage name="downPayment" />
                    </p>
                  </div>
                </div>
                <button type="submit" className="emi-submit-btn">
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
          {emiData && (
            <div className="emi-data-result">
              <div className="emi-data">
                <span className="emi-range">EMI Range:</span>
                <br />
                <span className="emi-range">
                  ₹ {emiData.emiLow ? emiData.emiLow : "(0)"} - ₹{" "}
                  {emiData.emiHigh ? emiData.emiHigh : "(0)"}
                </span>
              </div>
              <span className="emi-range">
                <span className="emi-range">Interest Rate Range:</span>
                <br />
                {emiData.emidata?.interestRateRange
                  ? emiData.emidata.interestRateRange
                  : "(0 - 0)"}
              </span>
            </div>
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Productpage;
