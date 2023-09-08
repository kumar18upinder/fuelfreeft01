import React, { useState } from "react";
import "./chargingstationbooking.css";
import Footer from "../components/footer";
import Header from "../components/header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { data } from "jquery";

const Chargingstationbooking = () => {
  // const [Name, setName] = useState("");
  
  // const [VehicleType, setVehicleType] = useState("");
 
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNo, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [Date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [VehicleType, setVehicleType] = useState('')

  const user = JSON.parse(localStorage.getItem("user"));
  //     (user, "$$$");

  const id = user._id;
  //     (id, "id");

  const { vendorId } = useParams();
  //     (vendorId, "@@@");

  const handleSubmit = async () => {
    // e.preventDefault();
    //     ({ Name, PhoneNo, VehicleTy });
    // handle form submission logic here

    const data = {
      name,email,phoneNo,address,city,Date,time,VehicleType
    };
    //     (data, id, vendorId);
    try {
      const response = await axios.post('https://app.fuelfree.in/booking/chargingBooking/'+ id+'/'+ vendorId, data,{
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer "+localStorage.getItem('token')
        }
    })
    //     (response)
   
     let result = response.data;

    if(result.success === "success"){
      toast.success(result.success)
    } else {
      toast.error(result.error)
    }
    } catch (error) {
      toast.error('Invalid')
    }
   

  };

  return (
    <div>
      <Header />
      <ToastContainer/>
      <div className="formcharging">
      <p className="charging-station-booking-slot-p">Book Your Charging Slot</p>
        {/* <label>
        Charging Station Name:
        <input
          type="text"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Vehicle Type:
        <input
          type="text"
          value={VehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
        />
      </label> */}
        
    {/* <h5>Name</h5> */}
      <input className="input-type-booking" style={{padding:'6px'}} type="text" placeholder="Enter your name" onChange={($event)=> setName($event.target.value)}  />
      
      <br/>
      
    {/* <h5>Phone No</h5> */}
      <input className="input-type-booking" style={{padding:'6px'}} type="text" placeholder="Enter your phoneNo" onChange={($event)=> setPhone($event.target.value)} />
      <br/>
      
    {/* <h5>Email</h5> */}
      <input className="input-type-booking" style={{padding:'6px'}} type="text" placeholder="Enter your email" onChange={($event)=> setEmail($event.target.value)} />
      
      <br/>
      
    {/* <h5>Address</h5> */}
      <input className="input-type-booking" style={{padding:'6px'}} type="text" placeholder="Enter your address" onChange={($event)=> setAddress($event.target.value)} />
      <br/>
      
    {/* <h5>City</h5> */}
      <input className="input-type-booking" style={{padding:'6px'}} type="text" placeholder="Enter your city" onChange={($event)=> setCity($event.target.value)} />
      <br/>
      
    {/* <h5>Date</h5> */}
      <input className="input-type-booking" style={{padding:'6px'}} type="date" placeholder="Enter your date" onChange={($event)=> setDate($event.target.value)} />
      <br/>

      {/* <h5>Time</h5> */}
      <input className="input-type-booking" style={{padding:'6px'}} type="time" placeholder="Enter your date" onChange={($event)=> setTime($event.target.value)} />
      <br/>

      {/* <h5>VehicleType</h5> */}
      <select className="input-type-booking" style={{padding:'6px'}} value={VehicleType} onChange={($event)=> setVehicleType($event.target.value)}>
                        <option value="" selected >
                            --- Vehicle Type ---
                        </option>
                        <option>Two wheeler</option>
                        <option>Three wheeler</option>
                        <option>Four wheeler</option>
                        <option>Other wheeler</option>

                    </select>
      {/* <input style={{padding:'6px'}} value={vehicleType} type="text" placeholder="Enter Vehicle type" onChange={($event)=> setVehicleType($event.target.value)} /> */}
      <br/>
        <button className="booking-btn" onClick={handleSubmit}>Book Charging Slot</button>
      </div>
      <Footer />
    </div>
  );
};

export default Chargingstationbooking;
