import axios from "axios";
import {BiRupee} from "react-icons/bi";
import { Link ,useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import rentalVehicleBanner from "../../pages/images/rentalVehicleBanner.jpg";

const RentalVehicleList = () => {
  const navigate=useNavigate()
  const [rentalVehicle, setRentalVehicle] = useState({});
  let rentalVehicleList = rentalVehicle.list;
  async function getRentalVehicleList() {
    let resultRentalVehicle = await axios.get(
      "https://app.fuelfree.in/carRental/list",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let rentalVehicleData = await resultRentalVehicle.data;
    setRentalVehicle(rentalVehicleData);
  }


  const gotologin=()=>{
    if(!localStorage.getItem('user')){
      navigate('/login')
    }
  }

  useEffect(() => {
    getRentalVehicleList();
    gotologin()
  }, []);



  return (
    <>
      <Header />
      <ToastContainer />
      <section id="collection-id">
        <img src={rentalVehicleBanner} alt="bycycle" />
      </section>
      {/* ---------------------------------our cars------------------------------- */}
      <div id="OUR-CARS">
                <div class="mobile-section-headfing">
                    <span></span>
                    <h3>Rental Vehicle</h3>
                    <span></span></div>
                <div className="tanker">

                    <div className="OUR-CARS-outer">
                        {rentalVehicleList && rentalVehicleList.map((data) => (
                            <div class="Carcard" key={data._id}>
                                <img alt={`${data.productName} image`} src={`https://app.fuelfree.in/${data.productImage}`} />
                               
                                <div class="Cartitle">
                                    <h5>{data.productName}</h5>
                                    <h4 style={{color: "#262681"}}><BiRupee/>{data.vehiclePricePerHour}/h</h4>
                                    <p style={{color: "#000"}}>{data.Brand} | {data.topSpeed}km/h | {data.seatingCapacity}Seats</p>
                                    <Link to={`/rent-vehicle-booking/${data._id}/${data.productName}/${data.vehiclePricePerHour}`} onClick={gotologin} class="view-offer-a">Book Now</Link>
                               
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
      <Footer />
    </>
  );
};

export default RentalVehicleList;
