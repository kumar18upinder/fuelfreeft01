import "./admin.css";
import axios from "axios";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Adminsidebar from "../Admin/adminsidebar";
import { ToastContainer, toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";

export const Updateproduct = () => {
  const [image, setImage] = useState([]);
  console.log(image,'img')
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
    metaDescription: "",
    interior: "",
    city: "",
    description: "",
    addHtmlCode: "",
    addCssCode: "",
  });

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://app.fuelfree.in/product/details/${id}`)
      .then((res) =>
        setValues({
          ...values,
          VehicleType: res.data.productDetails.VehicleType,
          productName: res.data.productDetails.productName,
          productPrice: res.data.productDetails.productPrice,
          Brand: res.data.productDetails.Brand,
          variant: res.data.productDetails.variant,
          DrivingRange: res.data.productDetails.DrivingRange,
          topSpeed: res.data.productDetails.topSpeed,
          chargingTime: res.data.productDetails.chargingTime,
          batterySize: res.data.productDetails.batterySize,
          batteryVoltage: res.data.productDetails.batteryVoltage,
          chargerIncluded: res.data.productDetails.chargerIncluded,
          payloadCapacity: res.data.productDetails.payloadCapacity,
          seatingCapacity: res.data.productDetails.seatingCapacity,
          frontBrakeType: res.data.productDetails.frontBrakeType,
          rearBrakeType: res.data.productDetails.rearBrakeType,
          frontSuspension: res.data.productDetails.frontSuspension,
          rearSuspension: res.data.productDetails.rearSuspension,
          tyreType: res.data.productDetails.tyreType,
          airbags: res.data.productDetails.airbags,
          ABS: res.data.productDetails.ABS,
          AEB: res.data.productDetails.AEB,
          parkingAssist: res.data.productDetails.parkingAssist,
          reverseAssist: res.data.productDetails.reverseAssist,
          distanceToEmpty: res.data.productDetails.distanceToEmpty,
          display: res.data.productDetails.display,
          displaySize: res.data.productDetails.displaySize,
          speakers: res.data.productDetails.speakers,
          GPSNavigationSystem: res.data.productDetails.GPSNavigationSystem,
          bluetoothCompatibility:
            res.data.productDetails.bluetoothCompatibility,
          batteryWarrantyYears: res.data.productDetails.batteryWarrantyYears,
          batteryWarrantyKM: res.data.productDetails.batteryWarrantyKM,
          metaDescription: res.data.productDetails.metaDescription,
          interior: res.data.productDetails.interior,
          city: res.data.productDetails.city,
          description: res.data.productDetails.description,
          addHtmlCode: res.data.productDetails.addHtmlCode,
          addCssCode: res.data.productDetails.addCssCode,
        })
      )
      .catch((err) => err);
  }, []);

 
  const navigate = useNavigate();

  //for multiple vendors
  const [det, setdet] = useState([]);
  const [selected, setSelected] = useState([]);
  const getid = selected.map((data) => {
    let a = {
      id: data.value,
    };
    return a;
  });
  const getData = [];
  for (let i = 0; i < selected.length; i++) {
    getData.push(selected[i].value);
  }
  const getdata = async () => {
    const res = await axios.get(
      "https://app.fuelfree.in/vendor/agency/list",

      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let result = await res.data;
    let delerList = await result.List;
    const deledetails = delerList.map((data) => {
      let a = {
        label: data.name,
        value: data._id,
      };
      return a;
    });
    setdet(deledetails);
  };
  useEffect(() => {
    getdata();
  }, []);

  const handleUpdate = (e) => {
    console.log(values,'value')
    e.preventDefault();
    axios
      .patch(`https://app.fuelfree.in/product/edit/${id}/${getData}`, values)
      .then(async (res) => {
        let imgFormData = new FormData();
        imgFormData.append("productImage", image);
        await axios.patch(
          "https://app.fuelfree.in/product/editImage/" + id,
          imgFormData
        );
        // navigate("/editproduct");
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
      <div id="admin-page-id">
        <ToastContainer />
        <Adminsidebar />
        <div className="admin-dashboard">
          <form onSubmit={handleUpdate} style={{ width: "100%" }}>
            <label style={{ color: "black" }}>Select Vendor Name</label>
            <MultiSelect
              options={det}
              value={selected}
              onChange={setSelected}
              labelledBy="Select"
              checkbox
            />
            <div className="admin-dashboard-outer">
              <div className="admin-title">
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
                    <label>ProductName</label>
                    <input
                      type="text"
                      placeholder="ProductName"
                      value={values.productName}
                      onChange={(e) =>
                        setValues({ ...values, productName: e.target.value })
                      }
                    />
                    <label>Product Price (in Rupees)</label>
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
                    <label>Driving Range(in km)</label>
                    <input
                      type="text"
                      placeholder="Driving Range(in km)"
                      className="form-control"
                      value={values.DrivingRange}
                      onChange={(e) =>
                        setValues({ ...values, DrivingRange: e.target.value })
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
                    <label>Charger Included</label>
                    <select
                      className=" form form-control"
                      value={values.chargerIncluded}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          chargerIncluded: e.target.value,
                        })
                      }
                    >
                      <option value="" selected>
                        Charger Included(Y/N)
                      </option>
                      <option value="true">YES</option>
                      <option value="false">NO</option>
                    </select>
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
                    <label>Front Brake Type</label>
                    <select
                      className=" form form-control"
                      value={values.frontBrakeType}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          frontBrakeType: e.target.value,
                        })
                      }
                    >
                      <option selected>--Select a field--</option>
                      <option value="disc">Disc</option>
                      <option value="ventilated">Ventilated Disc</option>
                      <option value="hydraulic">Hydraulic Disc</option>
                      <option value="vented">Vented Disc</option>
                      <option value="drum">Drum Disc</option>
                      <option value="mechanical">Mechanical Brake</option>
                      <option value="electronic">Electronic Brake</option>
                    </select>
                    <label>Rear Brake Type</label>
                    <select
                      className=" form form-control"
                      value={values.rearBrakeType}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          rearBrakeType: e.target.value,
                        })
                      }
                    >
                      <option>--Select a field--</option>
                      <option value="disc">Disc</option>
                      <option value="ventilated">Ventilated Disc</option>
                      <option value="hydraulic">Hydraulic Disc</option>
                      <option value="vented">Vented Disc</option>
                      <option value="drum">Drum Disc</option>
                      <option value="mechanical">Mechanical Brake</option>
                      <option value="electronic">Electronic Brake</option>
                    </select>
                    <label>Front Suspension</label>
                    <input
                      type="text"
                      placeholder="frontSuspension"
                      className="form-control"
                      value={values.frontSuspension}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          frontSuspension: e.target.value,
                        })
                      }
                    />
                    <label>Rear Suspension</label>
                    <input
                      type="text"
                      placeholder="Rear Suspension"
                      className="form-control"
                      value={values.rearSuspension}
                      onChange={(e) =>
                        setValues({ ...values, rearSuspension: e.target.value })
                      }
                    />
                    <label>Tyre Type</label>
                    <select
                      className=" form form-control"
                      value={values.tyreType}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          tyreType: e.target.value,
                        })
                      }
                    >
                      <option>--Select a field--</option>
                      <option value="tube">Tube</option>
                      <option value="tubeless">Tubeless</option>
                      <option value="radial">Radial</option>
                      <option value="tubelessradial">
                        Tubeless and Radial
                      </option>
                    </select>
                    <label>Air Bags</label>
                    <input
                      type="text"
                      placeholder="Air Bags"
                      className="form-control"
                      value={values.airbags}
                      onChange={(e) =>
                        setValues({ ...values, airbags: e.target.value })
                      }
                    />
                    <label>Anti-Lock Braking System</label>
                    <select
                      className=" form form-control"
                      value={values.ABS}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          ABS: e.target.value,
                        })
                      }
                    >
                      <option>--Anti-Lock Braking System(Y/N)--</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                    <label>Automatic Emergency Braking</label>
                    <select
                      className=" form form-control"
                      value={values.AEB}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          AEB: e.target.value,
                        })
                      }
                    >
                      <option>--Automatic Emergency Braking(Y/N)--</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                    <label>Parking Assist</label>
                    <select
                      className=" form form-control"
                      value={values.parkingAssist}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          parkingAssist: e.target.value,
                        })
                      }
                    >
                      <option>--Parking Assist(Y/N)--</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                    <label>Reverse Assist</label>
                    <select
                      className=" form form-control"
                      value={values.reverseAssist}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          reverseAssist: e.target.value,
                        })
                      }
                    >
                      <option>--Reverse Assist(Y/N)--</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                    <label>Display</label>
                    <select
                      className=" form form-control"
                      value={values.display}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          display: e.target.value,
                        })
                      }
                    >
                      <option>--Select a field--</option>
                      <option value="digital">Digital</option>
                      <option value="touchScreen">Touch Screen</option>
                      <option value="lcd">LCD</option>
                      <option value="analogue">Analogue</option>
                    </select>
                    <label>Display Size</label>
                    <input
                      type="text"
                      placeholder="Display Size"
                      className="form-control"
                      value={values.displaySize}
                      onChange={(e) =>
                        setValues({ ...values, displaySize: e.target.value })
                      }
                    />
                    <label>Speakers</label>
                    <input
                      type="text"
                      placeholder="Speakers"
                      className="form-control"
                      value={values.speakers}
                      onChange={(e) =>
                        setValues({ ...values, speakers: e.target.value })
                      }
                    />
                    <label>GPS Navigation System</label>
                    <select
                      className=" form form-control"
                      value={values.GPSNavigationSystem}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          GPSNavigationSystem: e.target.value,
                        })
                      }
                    >
                      <option>--GPS Navigation System(Y/N)--</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                    <label>Bluetooth Compatibility</label>
                    <select
                      className=" form form-control"
                      value={values.bluetoothCompatibility}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          bluetoothCompatibility: e.target.value,
                        })
                      }
                    >
                      <option>--Bluetooth Compatibility(Y/N)--</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                    <label>
                      Image
                      <sup>
                        <span style={{ color: "red" }}>*</span>
                      </sup>
                      <input
                        required
                        type="file"
                        multiple
                        placeholder="image"
                        className="form-control"
                        onChange={(e)=>setImage(e.target.files[0])}
                      />
                    </label>
                    <label>Battery Warranty(Years)</label>
                    <input
                      type="text"
                      placeholder="Battery Warranty(Years)"
                      className="form-control"
                      value={values.batteryWarrantyYears}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          batteryWarrantyYears: e.target.value,
                        })
                      }
                    />
                    <label>Battery Warranty(KM)</label>
                    <input
                      type="text"
                      placeholder="Battery Warranty(KM)"
                      className="form-control"
                      value={values.batteryWarrantyKM}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          batteryWarrantyKM: e.target.value,
                        })
                      }
                    />
                    <label>Meta Description</label>
                    <input
                      type="text"
                      placeholder="Meta Description"
                      className="form-control"
                      value={values.metaDescription}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          metaDescription: e.target.value,
                        })
                      }
                    />
                    <label>Interiors</label>
                    <select
                      className=" form form-control"
                      value={values.interior}
                      onChange={(e) =>
                        setValues({ ...values, interior: e.target.value })
                      }
                    >
                      <option value="" selected>
                        Interiors (Dual Tone/Single Tone)
                      </option>
                      <option>Single Tone</option>
                      <option>Dual Tone</option>
                    </select>
                    <label>City</label>
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control"
                      value={values.city}
                      onChange={(e) =>
                        setValues({ ...values, city: e.target.value })
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
                    <div className="code-editor">
                      <h2>HTML</h2>
                      <textarea
                        value={values.addHtmlCode}
                        onChange={(e) =>
                          setValues({ ...values, addHtmlCode: e.target.value })
                        }
                      />
                    </div>

                    <div className="code-editor">
                      <h2>CSS</h2>
                      <textarea
                        value={values.addCssCode}
                        onChange={(e) =>
                          setValues({ ...values, addCssCode: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Updateproduct;