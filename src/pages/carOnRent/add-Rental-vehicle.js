import axios from "axios";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const AddRentalVehicle = () => {
  const [productName, setproductName] = useState("");
  const [TopSpeed, setTopSpeed] = useState("");
  const [SeatingCapacity, setSeatingCapacity] = useState("");
  const [Speakers, setSpeakers] = useState("");
  const [Brand, setBrand] = useState("");
  const [city, setcity] = useState("");
  const [description, setdescription] = useState("");
  const [startTime, setstartTime] = useState("");
  const [endTime, setendTime] = useState("");
  const [vehiclePricePerHour, setvehiclePricePerHour] = useState("");
  const [VehicleType, setVehicleType] = useState("");
  const [productImage, setImages] = useState("");

  const [agencyId, setAgencyId] = useState("");
  async function SubmitData() {
    const allValues = {
      productName,
      TopSpeed,
      SeatingCapacity,
      Speakers,
      VehicleType,
      Brand,
      city,
      description,
      vehiclePricePerHour,
      startTime,
      endTime,
      productImage,
    };

    try {
      let result = await axios.post(
        `https://app.fuelfree.in/carRental/add/${agencyId}`,
        allValues,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        }
      );
      let res = await result.data;
      if (res.success === "success") {
        toast.success("Your  Successful");
      }
    } catch (error) {
      toast.error("Unable to Add Product");
    }
  }

  const [agencyList, setagencyList] = useState({});
  let agencyType = agencyList.data;
  async function getagencyList() {
    let resultagency = await axios.get(
      "https://app.fuelfree.in/carRental/vendorList",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let agencyData = await resultagency.data;
    setagencyList(agencyData);
  }

  useEffect(() => {
    getagencyList();
  }, []);

  return (
    <>
      <div id="admin-page-id">
        <ToastContainer />
        <div className="admin-dashboard">
          <div className="admin-dashboard-outer">
            <div className="admin-title">
              <h3 style={{ color: "black" }}>Add your rental product</h3>
            </div>
            <div className="container">
              <div id="full-add-product">
                <select
                  required
                  name="agency"
                  id="agency"
                  onChange={($event) => setAgencyId($event.target.value)}
                >
                  {agencyType &&
                    agencyType.map((data) => (
                      <option value={data._id}>{data.firmName}</option>
                    ))}
                  <option>Select Vendor Name</option>
                </select>
                <div className="admin-input">
                  <label>ProductName</label>
                  <input
                    type="text"
                    placeholder="ProductName"
                    value={productName}
                    onChange={(e) => setproductName(e.target.value)}
                    required
                  />
                  <label>vehicle price per hour</label>
                  <input
                    name="vehiclepriceperhour"
                    type="text"
                    placeholder="price per hour"
                    value={vehiclePricePerHour}
                    onChange={(e) => setvehiclePricePerHour(e.target.value)}
                  />
                </div>
                <div className="admin-input">
                  <label>Start Time</label>
                  <input
                    type="text"
                    placeholder="Start Time"
                    value={startTime}
                    onChange={(e) => setstartTime(e.target.value)}
                    required
                  />

                  <label>End Time</label>
                  <input
                    type="text"
                    placeholder="End Time"
                    value={endTime}
                    onChange={(e) => setendTime(e.target.value)}
                    required
                  />

                  <label>Top Speed (km/h)</label>
                  <input
                    type="text"
                    placeholder="Top Speed (km/h)"
                    className="form-control"
                    value={TopSpeed}
                    onChange={(e) => setTopSpeed(e.target.value)}
                    required
                  />
                </div>
                <div className="admin-input">
                  <label>Seating Capacity</label>
                  <input
                    type="text"
                    placeholder="Seating Capacity"
                    className="form-control"
                    value={SeatingCapacity}
                    onChange={(e) => setSeatingCapacity(e.target.value)}
                  />
                </div>
                <label>VehicleType</label>
                <select
                  className=" form form-control"
                  value={VehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  required
                >
                  <option value="" selected>
                    Select EV Vehicle
                  </option>
                  <option>Ev-cars</option>
                  <option>Ev-bikes</option>
                  <option>Ev-cycles</option>
                  <option>Ev-buses</option>
                  <option>Ev-scooters</option>
                  <option>Ev-logistics</option>
                  <option>Ev-rickshaw</option>
                  <option>Ev-loading</option>
                  <option>Ev-luna</option>
                </select>
                <label>Brand </label>
                <input
                  type="text"
                  placeholder="Brand"
                  className="form-control"
                  value={Brand}
                  onChange={(e) => setBrand(e.target.value)}
                  required
                />
                <label>City</label>
                <input
                  type="text"
                  placeholder="City"
                  className="form-control"
                  value={city}
                  onChange={(e) => setcity(e.target.value)}
                  required
                />
                <label>Speakers</label>
                <input
                  type="text"
                  placeholder="Speakers"
                  className="form-control"
                  value={Speakers}
                  onChange={(e) => setSpeakers(e.target.value)}
                />
                Images:
                <input
                  type="file"
                  placeholder="Image"
                  className="form-control"
                  onChange={(e) => setImages(e.target.files[0])}
                  required
                />
                <label>Description</label>
                <input
                  type="text"
                  placeholder="description"
                  className="form-control"
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                />
                <button onClick={SubmitData}>Add Product</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddRentalVehicle;
