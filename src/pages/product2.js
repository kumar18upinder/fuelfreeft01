import React from "react";
import "./productpage.css";
import Header from "../components/header";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
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

const ProductShare = () => {
    const { id } = useParams();
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
  }, []);

  const gologin = () => {
    if (!localStorage.getItem("user")) {
      Navigate("/login");
      window.location.reload();
    }
  };

  const handleWhatsappShare = () => {
    const shareUrl = `https://fuelfree.in/products/:productName/${data?._id}`;
    const message = `Check out this product: ${data?.productName}`;
    const imageUrl = `https://example.com/path/to/image.jpg`; // Replace with your actual image URL

    // Construct the WhatsApp share URL
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      message + "\n" + shareUrl
    )}`;

    window.open(whatsappUrl);
  };

  return (
    <div id="product_page_id">
      <Header />

      {/* ========================================================= */}
      <div>
        <WhatsappShareButton
          url={`https://fuelfree.in/products/:productName/${data?._id}`}
          onClick={handleWhatsappShare}
        >
          <RiWhatsappFill /> <span>WhatsApp</span>
        </WhatsappShareButton>
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
  );
};

export default ProductShare;
