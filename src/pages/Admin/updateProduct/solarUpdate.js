import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const UpdateSolarProduct = () => {
  const [image, setImage] = useState(null);
  const [values, setValues] = useState({
    VehicleType: "",
    productName: "",
    productPrice: "",
    Brand: "",
    variant: "",
    DrivingRange: "",
    topSpeed: "",
    chargingTime: "",
    batterySize: "",
    batteryVoltage: "",
    chargerIncluded: "",
    payloadCapacity: "",
    seatingCapacity: "",
    frontBrakeType: "",
    rearBrakeType: "",
    frontSuspension: "",
    rearSuspension: "",
    tyreType: "",
    airbags: "",
    ABS: "",
    AEB: "",
    parkingAssist: "",
    reverseAssist: "",
    distanceToEmpty: "",
    display: "",
    displaySize: "",
    speakers: "",
    GPSNavigationSystem: "",
    bluetoothCompatibility: "",
    batteryWarrantyYears: "",
    batteryWarrantyKM: "",
    interior: "",
    city: "",
    description: "",
  });

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://app.fuelfree.in/solar/productDetails/${id}`)
      .then((res) =>
        setValues({
          ...values,
          VehicleType: res.data.productDetail.VehicleType,
          productName: res.data.productDetail.productName,
          productPrice: res.data.productDetail.productPrice,
          Brand: res.data.productDetail.Brand,
          variant: res.data.productDetail.variant,
          topSpeed: res.data.productDetail.topSpeed,
          chargingTime: res.data.productDetail.chargingTime,
          batterySize: res.data.productDetail.batterySize,
          batteryVoltage: res.data.productDetail.batteryVoltage,
          batteryType: res.data.productDetail.batteryType,
          payloadCapacity: res.data.productDetail.payloadCapacity,
          seatingCapacity: res.data.productDetail.seatingCapacity,
          solarPanelType: res.data.productDetail.solarPanelType,
          rangePerCharge: res.data.productDetail.rangePerCharge,
          city: res.data.productDetail.city,
          description: res.data.productDetail.description,
        })
      )
      .catch((err) => err);
  }, []);

  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .patch(`https://app.fuelfree.in/solar/updateProduct/${id}`, values)
      .then(async (res) => {
        let imgFormData = new FormData();
        imgFormData.append("productImage", image);
        await axios.patch(
          "https://app.fuelfree.in/solar/productImageUpdate/" + id,
          imgFormData
        );
        navigate("/editproduct");
      })
      .catch((err) => err);
  };
  const gologinadmin = () => {
    if (!localStorage.getItem("Admin-Info")) {
      navigate("/admin");
    }
  };
  useEffect(() => {
    gologinadmin();
  }, []);

  return (
    <>
      <ToastContainer />
      <div id="admin-page-id-cycle">
        <div className="admin-dashboard-cycle">
          <form onSubmit={handleUpdate} style={{ width: "100%" }}>
            <div className="admin-dashboard-outer-cycle">
              <div className="admin-title-cycle">
                <h3>Update product</h3>
              </div>
              <div className="container">
                <div id="full-add-product">
                  <div className="admin-input">
                    <label>Vehicle Type</label>
                    <input
                      type="text"
                      placeholder="Vehicle Type"
                      className="form-control"
                      value={values.VehicleType}
                      onChange={(e) =>
                        setValues({ ...values, VehicleType: e.target.value })
                      }
                      readOnly
                    />
                    <label>Vehicle Name</label>
                    <input
                      type="text"
                      placeholder="ProductName"
                      value={values.productName}
                      onChange={(e) =>
                        setValues({ ...values, productName: e.target.value })
                      }
                    />
                    <label>Ex-Showroom Price(in Rupees)</label>
                    <input
                      name="productPrice"
                      type="text"
                      placeholder="Product Price (in Rupees)"
                      value={values.productPrice}
                      onChange={(e) =>
                        setValues({ ...values, productPrice: e.target.value })
                      }
                    />
                    <label>Company/Brand</label>
                    <input
                      type="text"
                      placeholder="Company/Brand"
                      className="form-control"
                      value={values.Brand}
                      onChange={(e) =>
                        setValues({ ...values, Brand: e.target.value })
                      }
                    />
                    <label>Variant</label>
                    <input
                      type="text"
                      placeholder="variant"
                      className="form-control"
                      value={values.variant}
                      onChange={(e) =>
                        setValues({ ...values, variant: e.target.value })
                      }
                    />
                    <label>Top Speed(km/h)</label>
                    <input
                      type="text"
                      placeholder="Top Speed(km/h)"
                      className="form-control"
                      value={values.topSpeed}
                      onChange={(e) =>
                        setValues({ ...values, topSpeed: e.target.value })
                      }
                    />
                    <label>Charging time(hours)</label>
                    <input
                      type="text"
                      placeholder="Charging time(hours)"
                      className="form-control"
                      value={values.chargingTime}
                      onChange={(e) =>
                        setValues({ ...values, chargingTime: e.target.value })
                      }
                    />
                    <label>Battery Size</label>
                    <input
                      type="text"
                      placeholder="Battery Size"
                      className="form-control"
                      value={values.batterySize}
                      onChange={(e) =>
                        setValues({ ...values, batterySize: e.target.value })
                      }
                    />
                    <label>Battery Voltage</label>
                    <input
                      type="text"
                      placeholder="Battery Voltage"
                      className="form-control"
                      value={values.batteryVoltage}
                      onChange={(e) =>
                        setValues({ ...values, batteryVoltage: e.target.value })
                      }
                    />

                    <label>Battery Type</label>
                    <input
                      type="text"
                      placeholder="Battery Type"
                      className="form-control"
                      value={values.batteryType}
                      onChange={(e) =>
                        setValues({ ...values, batteryType: e.target.value })
                      }
                    />

                    <label>Payload Capacity(kg)</label>
                    <input
                      type="text"
                      placeholder="Payload Capacity(kg)"
                      className="form-control"
                      value={values.payloadCapacity}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          payloadCapacity: e.target.value,
                        })
                      }
                    />
                    <label>Seating Capacity</label>
                    <input
                      type="text"
                      placeholder="Seating Capacity"
                      className="form-control"
                      value={values.seatingCapacity}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          seatingCapacity: e.target.value,
                        })
                      }
                    />
                    <label>
                      Image
                      <sup>
                        <span style={{ color: "red" }}>*</span>
                      </sup>
                      <input
                        required
                        type="file"
                        placeholder="image"
                        className="form-control"
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </label>
                    <label>Solar Panel Type</label>
                    <input
                      type="text"
                      placeholder="Solar Panel Type"
                      className="form-control"
                      value={values.solarPanelType}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          solarPanelType: e.target.value,
                        })
                      }
                    />

                    <label>Range Per Charge</label>
                    <input
                      type="number"
                      placeholder="Range Per Charge"
                      className="form-control"
                      value={values.rangePerCharge}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          rangePerCharge: e.target.value,
                        })
                      }
                    />

                    <label>City</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                      value={values.city}
                      onChange={(e) =>
                      setValues({
                          ...values,
                          city: e.target.city,
                        })
                      }
                    />

                    <label>Description</label>
                    <input
                      type="text"
                      placeholder="description"
                      className="form-control"
                      value={values.description}
                      onChange={(e) =>
                        setValues({ ...values, description: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="cycle-submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateSolarProduct;
