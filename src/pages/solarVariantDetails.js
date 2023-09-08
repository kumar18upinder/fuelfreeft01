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
import {BsCurrencyRupee} from "react-icons/bs";
import {BiDownload} from "react-icons/bi";
import { useRef } from "react";

const SolarVariantDetails = () => {
  const sectionRef = useRef(null);

  function scrollToSection() {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  // ==========================================================================
  const { id } = useParams();

  // const [subject, setSubject] = useState(null);
  // const [rating, setRating] = useState(null);
  // const [review, setReview] = useState(null);

  /////// ============Add Review============= //////
  const [reviewAdd, setReviewAdd] = useState(null);
  console.log(reviewAdd, 'revirerererer');
  // const reviewList = reviewAdd.reviewList;
  // console.log(   reviewList, "abc");

  let showReview = async () => {
    let response = await axios.get(`https://app.fuelfree.in/review/review_list/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    let reviewData = response.data;
    let reviewss = reviewData.reviewList
    setReviewAdd(reviewss)
    console.log(reviewss, "showReview");
  }

  useEffect(() => {
    showReview()
  }, [])


  // =============================tabs======================
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  // =============================tabs======================

  const Navigate = useNavigate();


  // (data, "ProductDetails")
  const [data, setDetails] = useState("");

  async function getProductdetails() {
    let resultDetails = await axios.get(
      `https://app.fuelfree.in/solar/details/variant/${id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let data = await resultDetails.data;
    let details = data.productDetails
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
      // $(this).parent("li").toggleClass("opn-submenu");
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
  // ====================emi calculator=================================================

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

  return (
    <>
      <Header />
      <div className="product_d_page">
        <div >
          <div className="p-details-page p-bg">
            <div className="row">
              <div className="col-md-6">
                <img
                  alt="cycle"
                  className="product_D_img"
                  src={`https://app.fuelfree.in/${data && data.productImage}`}
                />
              </div>

              <div className="col-md-6">
                <h2 className="kona-head">{data && data.productName}</h2>
                <p className="kona-price"> ₹{data && data.productPrice}</p>
                <p className="kona-subheading">{data && data.description}</p>

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
                    to={`/Fillenquiryform/${data && data.productName}/${data && data._id}`}
                    onClick={gologin}
                    class="btn btn-primary enquire-btn mt-2"
                  >
                    Enquire Now
                  </Link>
                  <br></br>
                  <Link
                    to={`/buynowsecond/${data && data.productName}/${data&&data.productPrice}`}
                    onClick={gologin}
                    class="btn btn-primary enquire-btn mt-2"
                  >
                    Buy Now
                  </Link><br></br>
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

            <div
              className="mobile-section-headfing">
              <span></span>
              <h3>Specifications</h3>
              <span></span>
            </div>
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
                  <strong>Product Price:</strong>
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

            {data && data.brochure ? (
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

            {data && data.city ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>City:</strong>
                </div>
                <div className="col-md-8">{data && data.city}</div>
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
          </div>
        </div>
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
    </>
  );
};

export default SolarVariantDetails;

