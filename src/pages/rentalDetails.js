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
import { BiDownload } from "react-icons/bi";
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
import ImageSlider from "../pages/imagesliderproductpage";

const RentalVehicleDetails = () => {
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
  const { id } = useParams();
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : NaN;

  const [data, setDetails] = useState("");
  async function getProductdetails() {
    let resultDetails = await axios.get(
      `https://app.fuelfree.in/carRental/detail/${id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let data = await resultDetails.data;
    let details = data.detail;
    setDetails(details);
  }

  useEffect(() => {
    getProductdetails();
  }, []);

  $(document).ready(function () {
    $(".prodiuct-specifiacaton-title").click(function () {
      $(this).parent("div").isToggled("opn-product-content");
    });
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const MAX_TEXT_LENGTH = 100;
  const shareUrl = `https://fuelfree.in/products/${data.productName}/${data.VehicleType}/${data._id}`;
  const text = `${data.productName}\n${data.description}`;
  const truncatedText =
    text.length > MAX_TEXT_LENGTH
      ? `${text.slice(0, MAX_TEXT_LENGTH)}...`
      : text;


  return (
    <div id={data?._id}>
      <Header />
      <div className="tanker">
        <div className="rental_d_page">
          <div>
            <div className="p-details-page p-bg">
              <div className="row">
                <div
                  id="relave-positionfor"
                  className="relative-positionfor-detail"
                >
                  <div id="share-btun">
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
                  <div className="rental-title-dtail">
                    <h2 className="kona-head">{data && data.productName}</h2>
                    <div className="top-sapectfication">
                      <div className="sapectfication-outer">
                        <div className="sapectfication-outer-content bordr-right">
                          <p>{data && data.topSpeed}</p>
                          <p className="top-cat-spc-p">Top Speed</p>
                        </div>
                        <div className="sapectfication-outer-content">
                          <p>{data && data.vehiclePricePerHour}</p>
                          <p className="top-cat-spc-p">Price/h</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========================================================= */}

      <div class="mobile-section-headfing">
        <span></span>
        <h3>Details</h3>
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
            {data && data.vehicleType ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Vehicle Type:</strong>
                </div>
                <div className="col-md-8">{data && data.vehicleType}</div>
              </div>
            ) : (
              ""
            )}
           
            {data && data.carDrive ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Car Drive:</strong>
                </div>
                <div className="col-md-8">{data && data.carDrive}</div>
              </div>
            ) : (
              ""
            )}
            {data && data.startTime ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Start Time:</strong>
                </div>
                <div className="col-md-8">{data && data.startTime}</div>
              </div>
            ) : (
              ""
            )}

            {data && data.endTime ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>End Time:</strong>
                </div>
                <div className="col-md-8">{data && data.endTime}</div>
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
            {data && data.trips ? (
              <div className="product-dist-sp">
                <div className="content-type-productpage">
                  <strong>Trips:</strong>
                </div>
                <div className="col-md-8">{data && data.trips}</div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <hr />

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
      <Footer />
    </div>
  );
};

export default RentalVehicleDetails;
