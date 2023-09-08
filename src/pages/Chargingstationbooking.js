import React, { useState } from "react";
import "./chargingstationbooking.css";
import Footer from "../components/footer";
import Header from "../components/header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Chargingstationbooking = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [Date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [VehicleType, setVehicleType] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));
  const id = user._id;
  const { vendorId } = useParams();
  const handleSubmit = async () => {
    const data = {
      name,
      email,
      phoneNo,
      address,
      city,
      Date,
      time,
      VehicleType,
    };
    try {
      const response = await axios.post(
        "https://app.fuelfree.in/booking/chargingBooking/" +
          id +
          "/" +
          vendorId,
        data,
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      let result = response.data;
      if (result.success === "success") {
        toast.success(result.success);
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error("Invalid");
    }
  };

  return (
    <div>
      <Header />
      <ToastContainer />
      <div className="formcharging">
        <p className="charging-station-booking-slot-p">
          Book Your Charging Slot
        </p>
        <input
          className="input-type-booking"
          style={{ padding: "6px" }}
          type="text"
          placeholder="Enter your name"
          onChange={($event) => setName($event.target.value)}
        />
        <br />
        <input
          className="input-type-booking"
          style={{ padding: "6px" }}
          type="text"
          placeholder="Enter your phoneNo"
          onChange={($event) => setPhone($event.target.value)}
        />
        <br />
        <input
          className="input-type-booking"
          style={{ padding: "6px" }}
          type="text"
          placeholder="Enter your email"
          onChange={($event) => setEmail($event.target.value)}
        />
        <br />
        <input
          className="input-type-booking"
          style={{ padding: "6px" }}
          type="text"
          placeholder="Enter your address"
          onChange={($event) => setAddress($event.target.value)}
        />
        <br />
        <input
          className="input-type-booking"
          style={{ padding: "6px" }}
          type="text"
          placeholder="Enter your city"
          onChange={($event) => setCity($event.target.value)}
        />
        <br />
        <input
          className="input-type-booking"
          style={{ padding: "6px" }}
          type="date"
          placeholder="Enter your date"
          onChange={($event) => setDate($event.target.value)}
        />
        <br />
        <input
          className="input-type-booking"
          style={{ padding: "6px" }}
          type="time"
          placeholder="Enter your date"
          onChange={($event) => setTime($event.target.value)}
        />
        <br />
        <select
          className="input-type-booking"
          style={{ padding: "6px" }}
          value={VehicleType}
          onChange={($event) => setVehicleType($event.target.value)}
        >
          <option value="" selected>
            --- Vehicle Type ---
          </option>
          <option>Two wheeler</option>
          <option>Three wheeler</option>
          <option>Four wheeler</option>
          <option>Other wheeler</option>
        </select>
        <br />
        <button className="booking-btn" onClick={handleSubmit}>
          Book Charging Slot
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Chargingstationbooking;
