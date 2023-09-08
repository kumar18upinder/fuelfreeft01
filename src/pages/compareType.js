import comapreby from "./images/comapre-by.png";
import comapremotercycle from "./images/comapre-moter-cycle.png";
import comaprescooty from "./images/comapre-scooty.png";
import comaprecar from "./images/comapre-car.png";
import comapretruck from "./images/comapre-truck.png";
import comaprebigtruck from "./images/comapre-bigtruck.png";
import comapreauto from "./images/comapre-auto.png";
import comaprebus from "./images/comapre-bus.png";
// import mobbtn8 from "../pages/images/mobbtn8.jpeg";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CompareType() {
  const { id } = useParams();
  const [data, setdata] = useState({});
  const SecondType = data.VehicleType;
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
    let details = data.productDetails;

    setdata(details);
  };

  useEffect(() => {
    getSecond();
  }, []);
  const navigate = useNavigate();

  const Navigate = useNavigate();

  let product = localStorage.getItem("product")
    ? JSON.parse(localStorage.getItem("product"))
    : "";
  let V_type = product && product.VehicleType;
  const gotobike = () => {
    navigate("/electric-bike");
  };
  const gotocycle = () => {
    navigate("/electric-cycle");
  };
  const gotoscooter = () => {
    navigate("/electric-scooter");
  };
  const gotocars = () => {
    navigate("/electric-car");
  };
  const gotoloading = () => {
    navigate("/electric-loading");
  };
  const gotoauto = () => {
    navigate("/electric-auto");
  };
  const gotobus = () => {
    navigate("/electric-bus");
  };
  const gotoLuna = () => {
    navigate("/electric-luna");
  };
  const  gotologistic = () => {
    navigate("/electric-logistics");
  };
  
  useEffect(() => {
    if (V_type === "Ev-bikes") {
      gotobike();
    } else if (V_type === "Ev-cycles") {
      gotocycle();
    } else if (V_type === "Ev-scooters") {
      gotoscooter();
    } else if (V_type === "Ev-cars") {
      gotocars();
    } else if (V_type === "Ev-loading") {
      gotoloading();
    } else if (V_type === "Ev-rickshaw") {
      gotoauto();
    } else if (V_type === "Ev-buses") {
      gotobus();
    }else if(V_type === "Ev-logistics"){
            gotologistic();
    }else if(V_type==='Ev-Luna'){
      gotoLuna()
    }
  }, []);

  return (
    <div id="CompareType">
      <Header></Header>
      <div className="CompareType">
        <div class="section-title">
          <h3>Select vehicle Type to compare</h3>
        </div>
        <div className="tanker">
          <div className="mobile-cotegory-outer">
            {product ? (
              <>
                {" "}
                {V_type === "Ev-bikes" ? gotobike() : ""}
                {/* cycle */}
                {V_type === "Ev-cycles" ? gotocycle() : ""}
                {/* scooters */}
                {V_type === "Ev-scooters" ? gotoscooter() : ""}
                {/* Ev-cars */}
                {V_type === "Ev-cars" ? gotocars() : ""}
                {/* Ev-loading */}
                {V_type === "Ev-loading" ? gotoloading() : ""}
                {V_type === "Ev-rickshaw" ? gotoauto() : ""}
                {V_type === "Ev-buses" ? gotobus() : ""}
                {V_type === "Ev-logistics" ? gotologistic() : ""}
                {V_type === "Ev-Luna" ? gotoLuna() : ""}
              </>
            ) : (
              <>
                {" "}
                {SecondType === "Ev-bikes" ? gotobike() : ""}
                {SecondType === "Ev-cycles" ? gotocycle() : ""}
                {SecondType === "Ev-scooters" ? gotoscooter() : ""}
                {SecondType === "Ev-cars" ? gotocars() : ""}
                {SecondType === "Ev-loading" ? gotoloading() : ""}
                {SecondType === "Ev-rickshaw" ? gotoauto() : ""}
                {SecondType === "Ev-buses" ? gotobus() : ""}
                {SecondType === "Ev-Luna" ? gotoLuna() : ""}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CompareType;
