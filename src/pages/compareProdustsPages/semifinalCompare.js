import "./Comparetion.css";
import axios from "axios";
import Header from "../../components/header";
import Footer from "../../components/footer";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function SemifinalCompare() {
  let First_P = JSON.parse(localStorage.getItem("product"));
  let P_Id = First_P ? First_P._id : "";
  const handleclick = (item) => {
    localStorage.setItem("product", JSON.stringify(item));
  };

  //For secont product
  const [SecondProduct, setProduct] = useState([]);
  let secondData = SecondProduct.productDetails;
  const { id } = useParams();
  const getSecond = async () => {
    let result = await axios.get(
      `https://app.fuelfree.in/product/details/${id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let data = await result.data;
    setProduct(data);
  };

  useEffect(() => {
    getSecond();
  }, []);

  const remove = () => {
    localStorage.removeItem("product");
  };

  return (
    <div id="semifinalCompare">
      <Header />
      <div className="section-title">
        <h3>Compare Vehicle</h3>
      </div>
      <div className="copmpare-item-flex-outer">
        <div className="camapare-vehicle">
          <div className="compare-img" id="first_vs">
            <img
              className="comp-img"
              src={`https://app.fuelfree.in/${First_P && First_P.productImage}`}
              alt="Compare-img1"
            ></img>
            {First_P && First_P.VehicleType === "Ev-bikes" ? (
              <Link className="add-compare" to={"/electric-bike"} onClick={remove}>
                ADD
              </Link>
            ) : (
              ""
            )}
            {First_P && First_P.VehicleType === "Ev-bikes" ? (
              <Link className="remove-comapre" to={"/electric-bike"} onClick={remove}>
                Remove
              </Link>
            ) : (
              ""
            )}
            {First_P && First_P.VehicleType === "Ev-cars" ? (
              <Link className="add-compare" to={"/electric-car"} onClick={remove}>
                ADD
              </Link>
            ) : (
              ""
            )}
            {First_P && First_P.VehicleType === "Ev-cars" ? (
              <Link
                className="remove-comapre"
                to={"/electric-car"}
                onClick={remove}
              >
                Remove
              </Link>
            ) : (
              ""
            )}
            {First_P && First_P.VehicleType === "Ev-cycles" ? (
              <Link className="add-compare" to={"/electric-cycle"} onClick={remove}>
                ADD
              </Link>
            ) : (
              ""
            )}
            {First_P && First_P.VehicleType === "Ev-cycles" ? (
              <Link className="remove-comapre" to={"/electric-cycle"} onClick={remove}>
                Remove
              </Link>
            ) : (
              ""
            )}
            {First_P && First_P.VehicleType === "Ev-scooters" ? (
              <Link className="add-compare" to={"/electric-scooter"} onClick={remove}>
                ADD
              </Link>
            ) : (
              ""
            )}
            {First_P && First_P.VehicleType === "Ev-scooters" ? (
              <Link
                className="remove-comapre"
                to={"/electric-scooter"}
                onClick={remove}
              >
                Remove
              </Link>
            ) : (
              ""
            )}
            {First_P && First_P.VehicleType === "Ev-loading" ? (
              <Link
                className="add-compare"
                to={"/electric-loading"}
                onClick={remove}
              >
                ADD
              </Link>
            ) : (
              ""
            )}
            {First_P && First_P.VehicleType === "Ev-loading" ? (
              <Link
                className="remove-comapre"
                to={"/electric-loading"}
                onClick={remove}
              >
                Remove
              </Link>
            ) : (
              ""
            )}
            {First_P && First_P.VehicleType === "Ev-logistics" ? (
              <Link
                className="add-compare"
                to={"/electric-logistics"}
                onClick={remove}
              >
                ADD
              </Link>
            ) : (
              ""
            )}
            {First_P && First_P.VehicleType === "Ev-logistics" ? (
              <Link
                className="remove-comapre"
                to={"/electric-logistics"}
                onClick={remove}
              >
                Remove
              </Link>
            ) : (
              ""
            )}
            {First_P && First_P.VehicleType === "Ev-rickshaw" ? (
              <Link
                className="add-compare"
                to={"/electric-auto"}
                onClick={remove}
              >
                ADD
              </Link>
            ) : (
              ""
            )}
            {First_P && First_P.VehicleType === "Ev-rickshaw" ? (
              <Link
                className="remove-comapre"
                to={"/electric-auto"}
                onClick={remove}
              >
                Remove
              </Link>
            ) : (
              ""
            )}
            {First_P && First_P.VehicleType === "Ev-buses" ? (
              <Link className="add-compare" to={"/electric-bus"} onClick={remove}>
                ADD
              </Link>
            ) : (
              ""
            )}
            {First_P && First_P.VehicleType === "Ev-buses" ? (
              <Link className="remove-comapre" to={"/electric-bus"} onClick={remove}>
                Remove
              </Link>
            ) : (
              ""
            )}
          </div>
          <div className="compare-discr">
            <h3>{First_P && First_P.productName}</h3>
            <p className="comp-prize">
              <span>₹</span>
              {First_P && First_P.productPrice}
            </p>
            <p>
              {" "}
              <span>Drive upto</span>-{First_P && First_P.DrivingRange}
            </p>
          </div>
        </div>
        <div className="camapare-vehicle">
          <div className="compare-img">
            {secondData && secondData.VehicleType === "Ev-bikes" ? (
              <Link className="remove-comapre" to={"/bike"}>
                Remove
              </Link>
            ) : (
              ""
            )}
            {secondData && secondData.VehicleType === "Ev-cars" ? (
              <Link className="remove-comapre" to={"/electric-car"}>
                Remove
              </Link>
            ) : (
              ""
            )}
            {secondData && secondData.VehicleType === "Ev-cycles" ? (
              <Link className="remove-comapre" to={"/electric-cycle"}>
                Remove
              </Link>
            ) : (
              ""
            )}
            {secondData && secondData.VehicleType === "Ev-logistics" ? (
              <Link className="remove-comapre" to={"/electric-logistics"}>
                Remove
              </Link>
            ) : (
              ""
            )}
            {secondData && secondData.VehicleType === "Ev-rickshaw" ? (
              <Link className="remove-comapre" to={"/electric-auto"}>
                Remove
              </Link>
            ) : (
              ""
            )}
            {secondData && secondData.VehicleType === "Ev-scooters" ? (
              <Link className="remove-comapre" to={"/electric-scooter"}>
                Remove
              </Link>
            ) : (
              ""
            )}
            {secondData && secondData.VehicleType === "Ev-buses" ? (
              <Link className="remove-comapre" to={"/electric-bus"}>
                Remove
              </Link>
            ) : (
              ""
            )}
            {secondData && secondData.VehicleType === "Ev-loading" ? (
              <Link
                className="remove-comapre"
                to={"/electric-loading"}
              >
                Remove
              </Link>
            ) : (
              ""
            )}
            <img
              className="comp-img"
              src={`https://app.fuelfree.in/${
                secondData && secondData.productImage
              }`}
              alt="Compare-img2"
            ></img>
          </div>
          <div className="compare-discr">
            <h3>{secondData && secondData.productName}</h3>
            <p className="comp-prize">
              <span>₹</span>
              {secondData && secondData.productPrice}
            </p>
            <p>
              {" "}
              <span>Drive upto</span>- {secondData && secondData.DrivingRange}
            </p>
          </div>
        </div>
      </div>

      <div className="comapre-butn-outer">
        <div className="compre-butn">
          {First_P && secondData ? (
            ""
          ) : (
            <Link
              to={`/CompareType/${secondData && secondData._id}`}
              className="mainbtn"
            >
              +Add second Product
            </Link>
          )}
          {P_Id === id ? (
            <h2>Can Not Compare Same Vehicle</h2>
          ) : (
            <>
              {First_P && secondData ? (
                <Link
                  to={`/ComparisonMobile/${id}/${First_P && First_P._id}`}
                  className="mainbtn"
                >
                  Compare
                </Link>
              ) : (
                <></>
              )}
            </>
          )}
        </div>
      </div>
      {/* <RecentlyComapred handleclick={handleclick} /> */}
      <Footer />
    </div>
  );
}
export default SemifinalCompare;
