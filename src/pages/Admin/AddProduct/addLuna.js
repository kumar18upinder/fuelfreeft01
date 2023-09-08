import axios from "axios";
import * as yup from "yup";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Form, Field, Formik, ErrorMessage } from "formik";
import { MultiSelect } from "react-multi-select-component";

const AddLuna = () => {
  const [P_id, setpid] = useState();
  const [pic, setPic] = useState("");
  const [brochure, setBrochure] = useState("");

  const addUserPic = (e) => {
    setPic(e.target.files[0]);
  };

  const addUserbrochure = (e) => {
    setBrochure(e.target.files[0]);
  };
  const defaultValues = {
    VehicleType: "Ev-Luna",
    upcomingVehicle: "",
    recentLaunches: "",
    productName: "",
    Brand: "",
    variant: "",
    productPrice: "",
    DrivingRange: "",
    topSpeed: "",
    chargingTime: "",
    batterySize: "",
    batteryVoltage: "",
    chargerIncluded: "",
    frontBrakeType: "",
    rearBrakeType: "",
    frontSuspension: "",
    rearSuspension: "",
    tyreType: "",
    ABS: "",
    AEB: "",
    reverseAssist: "",
    distanceToEmpty: "",
    display: "",
    displaySize: "",
    speakers: "",
    GPSNavigationSystem: "",
    bluetoothCompatibility: "",
    batteryWarrantyYears: "",
    batteryWarrantyKM: "",
    description: "",
    metaDescription: "",
    city: "",
  };

  const validationSchema = yup.object().shape({
    VehicleType: yup.string().required("vehicle type is required"),
    productName: yup.string().required("Vehicle Name is required"),
    Brand: yup.string().required("Company/Brand is required"),
    variant: yup.string().required("Variant is required"),
    productPrice: yup
      .number()
      .positive("Please Enter Positive number")
      .required("Ex-show Room Price is required"),
    displaySize: yup
      .number()
      .positive("Please Enter Positive number")
      .required("Display Size is required"),
    frontSuspension: yup
      .string()
      .matches(/[A-Za-z]/, "Must be a alphabet")
      .required("Front Suspension is required"),
    rearSuspension: yup
      .string()
      .matches(/[A-Za-z]/, "Must be a alphabet")
      .required("Rear Suspension is required"),
    chargerIncluded: yup.string().required("Charger Included is required"),
    bluetoothCompatibility: yup
      .string()
      .required("Bluetooth Compatibility is required"),
    display: yup.string().required("Display is required"),
    distanceToEmpty: yup.string().required("Distance to Empty is required"),
    tyreType: yup.string().required("Tyre type is required"),
    frontBrakeType: yup.string().required("Front Brake Type is required"),
    rearBrakeType: yup.string().required("Rare Brake Type is required"),
    DrivingRange: yup.number().required("Driving Range is required"),
    batteryVoltage: yup
      .number()
      .positive("Please Enter Positive number")
      .required("Battery Voltage is required"),
    batterySize: yup
      .number()
      .positive("Please Enter Positive number")
      .required("Battery Size is required"),
    topSpeed: yup
      .number()
      .positive("Please Enter Positive number")
      .required("Top Speed is required"),
    ABS: yup.string().required("Anti-Lock Braking System  is required"),
    AEB: yup.string().required("Automatic Emergency Braking is required"),
    reverseAssist: yup.string().required("Reverse Assist is required"),
    speakers: yup
      .number()
      .positive("Please Enter Positive number")
      .required("Speaker number is required"),
    GPSNavigationSystem: yup
      .string()
      .required("GPS Navigation System is required"),
    batteryWarrantyYears: yup
      .number()
      .positive("Please Enter Positive number")
      .required("Battery Warranty(years) is required"),
    batteryWarrantyKM: yup
      .number()
      .positive("Please Enter Positive number")
      .required("Battery Warranty(KM) is required"),
    description: yup.string().required("Description is required"),
    metaDescription: yup.string().required("Description is required"),
    city: yup.string().required("City is required"),
  });
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
    const res = await axios.get("https://app.fuelfree.in/vendor/agency/list", {
      headers: {
        Accept: "application/json",
      },
    });
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
  const handleSubmit = async (items) => {
    let carObj = {
      ...items,
      productImage: pic,
      brochure: brochure,
    };
    const response = await axios.post(
      `https://app.fuelfree.in/product/create/${getData}`,
      carObj,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );
    let result = await response.data;
    let Product = result.productData;
    let P_id = Product._id;
    setpid(P_id);

    if (result.success === "success") {
      toast.success(result.message);
    } else if (result.success === "failure") {
      toast.error(result.error);
    } else {
      toast.error("Unable to add product");
    }
  };

  return (
    <>
      <ToastContainer />
      <div id="admin-page-id-cycle">
        <label style={{ color: "black" }}>Select Vendor Name</label>
        <MultiSelect
          className="form-control"
          options={det}
          value={selected}
          onChange={setSelected}
          labelledBy="Select"
          checkbox
        />
      </div>
      <div className="admin-dashboard-cycle">
        <div className="admin-dashboard-outer-cycle">
          <div className="admin-title-cycle">
            <h3>Add product</h3>
          </div>

          <div className="container">
            <div class="admin-title">
              <Formik
                initialValues={defaultValues}
                // validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  <div id="full-add-product">
                    <div className="admin-input">
                      <label>Vehicle Type</label>
                      <Field
                        type="text"
                        name="VehicleType"
                        placeholder="vehicle Type"
                        className="form-control"
                        disabled="disabled"
                      />
                      <p className="text-danger">
                        <ErrorMessage name="VehicleType" />
                      </p>
                      <div className="admin-input">
                        <label>upcomingVehicle</label>
                        <Field
                          as="select"
                          className="form-control"
                          name="upcomingVehicle"
                          id="chargerIncluded"
                        >
                          <option>--upcomingVehicle(Y/N)--</option>
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </Field>
                        <p className="text-danger">
                          <ErrorMessage name="chargerIncluded" />
                        </p>
                      </div>

                      <div className="admin-input">
                        <label>recentLaunches</label>
                        <Field
                          as="select"
                          className="form-control"
                          name="recentLaunches"
                          id="chargerIncluded"
                        >
                          <option>--recentLaunche(Y/N)--</option>
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </Field>
                        <p className="text-danger">
                          <ErrorMessage name="chargerIncluded" />
                        </p>
                      </div>

                      <label>Vehicle Name</label>
                      <Field
                        type="text"
                        name="productName"
                        placeholder="Vehicle Name"
                        className="form-control"
                      />
                      <p className="text-danger">
                        <ErrorMessage name="productName" />
                      </p>

                      <label>Company/Brand</label>
                      <Field
                        type="text"
                        name="Brand"
                        placeholder="Company/Brand"
                        className="form-control"
                      />
                      <p className="text-danger">
                        <ErrorMessage name="Brand" />
                      </p>

                      <label>Variant</label>
                      <Field
                        type="text"
                        name="variant"
                        placeholder="Variant"
                        className="form-control"
                      />
                      <p className="text-danger">
                        <ErrorMessage name="variant" />
                      </p>

                      <label>Ex-Showroom Price (in Rupees)</label>
                      <Field
                        type="number"
                        name="productPrice"
                        placeholder="Ex-Showroom Price (in Rupees)"
                        className="form-control"
                      />
                      <p className="text-danger">
                        <ErrorMessage name="productPrice" />
                      </p>

                      <label>Display Size</label>
                      <Field
                        type="number"
                        name="displaySize"
                        placeholder="Display Size"
                        className="form-control"
                      />
                      <p className="text-danger">
                        <ErrorMessage name="displaySize" />
                      </p>

                      <label>Front Suspension</label>
                      <Field
                        type="text"
                        name="frontSuspension"
                        placeholder="Front Suspension"
                        className="form-control"
                      />

                      <p className="text-danger">
                        <ErrorMessage name="frontSuspension" />
                      </p>

                      <label>Rare Suspension</label>
                      <Field
                        type="text"
                        name="rearSuspension"
                        placeholder="Rare Suspension"
                        className="form-control"
                      />
                      <p className="text-danger">
                        <ErrorMessage name="rearSuspension" />
                      </p>
                    </div>

                    <div className="admin-input">
                      <label>Charger Included</label>
                      <Field
                        as="select"
                        className="form-control"
                        name="chargerIncluded"
                        id="chargerIncluded"
                      >
                        <option>--Charger Included(Y/N)--</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </Field>
                      <p className="text-danger">
                        <ErrorMessage name="chargerIncluded" />
                      </p>
                    </div>

                    <div className="admin-input">
                      <label>Bluetooth Compatibility</label>
                      <Field
                        as="select"
                        className="form-control"
                        name="bluetoothCompatibility"
                        id="bluetoothCompatibility"
                      >
                        <option>--Bluetooth Compatibility(Y/N)--</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </Field>
                      <p className="text-danger">
                        <ErrorMessage name="bluetoothCompatibility" />
                      </p>
                    </div>

                    <div className="admin-input">
                      <label>Display</label>
                      <Field
                        className="form-control"
                        name="display"
                        as="select"
                        id="display"
                      >
                        <option>--Select a field--</option>
                        <option value="digital">Digital</option>
                        <option value="touchScreen">Touch Screen</option>
                        <option value="lcd">LCD</option>
                        <option value="analogue">Analogue</option>
                      </Field>
                      <p className="text-danger">
                        <ErrorMessage name="display" />
                      </p>
                    </div>

                    <div className="admin-input">
                      <label>Distance to Empty</label>
                      <Field
                        as="select"
                        className="form-control"
                        name="distanceToEmpty"
                        id="distanceEmpty"
                      >
                        <option>--Distance to Empty(Y/N)--</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </Field>
                      <p className="text-danger">
                        <ErrorMessage name="distanceToEmpty" />
                      </p>
                    </div>

                    <div className="admin-input">
                      <label>Tyre Type</label>
                      <Field
                        as="select"
                        className="form-control"
                        name="tyreType"
                        id="tyreType"
                      >
                        <option>--Select a field--</option>
                        <option value="tube">Tube</option>
                        <option value="tubeless">Tubeless</option>
                        <option value="radial">Radial</option>
                        <option value="tubelessradial">
                          Tubeless and Radial
                        </option>
                      </Field>
                      <p className="text-danger">
                        <ErrorMessage name="tyreType" />
                      </p>
                    </div>
                    <div className="admin-input">
                      <label>Front Brake Type</label>
                      <Field
                        as="select"
                        className="form-control"
                        name="frontBrakeType"
                        id="frontBrakeType"
                      >
                        <option>--Select a field--</option>
                        <option value="disc">Disc</option>
                        <option value="ventilated">Ventilated Disc</option>
                        <option value="hydraulic">Hydraulic Disc</option>
                        <option value="vented">Vented Disc</option>
                        <option value="drum">Drum Disc</option>
                        <option value="mechanical">Mechanical Brake</option>
                        <option value="electronic">Electronic Brake</option>
                      </Field>
                      <p className="text-danger">
                        <ErrorMessage name="frontBrakeType" />
                      </p>
                    </div>

                    <div className="admin-input">
                      <label>Rare Brake Type</label>
                      <Field
                        as="select"
                        className="form-control"
                        name="rearBrakeType"
                        id="rearBrakeType"
                      >
                        <option>--Select a field--</option>
                        <option value="disc">Disc</option>
                        <option value="ventilated">Ventilated Disc</option>
                        <option value="hydraulic">Hydraulic Disc</option>
                        <option value="vented">Vented Disc</option>
                        <option value="drum">Drum Disc</option>
                        <option value="mechanical">Mechanical Brake</option>
                        <option value="electronic">Electronic Brake</option>
                      </Field>
                      <p className="text-danger">
                        <ErrorMessage name="rearBrakeType" />
                      </p>
                    </div>

                    <div className="admin-input">
                      <label>Driving Range(km)</label>
                      <Field
                        type="number"
                        name="DrivingRange"
                        placeholder="Driving Range(kms)"
                        className="form-control"
                      />
                      <p className="text-danger">
                        <ErrorMessage name="DrivingRange" />
                      </p>

                      <label>BatterySize(in KWH)</label>
                      <Field
                        type="number"
                        name="batterySize"
                        placeholder="BatterySize(in KWH)"
                        className="form-control"
                      />
                      <p className="text-danger">
                        <ErrorMessage name="batterySize" />
                      </p>

                      <label>Battery Voltage</label>
                      <Field
                        type="number"
                        name="batteryVoltage"
                        placeholder="Battery Voltage"
                        className="form-control"
                      />
                      <p className="text-danger">
                        <ErrorMessage name="batteryVoltage" />
                      </p>

                      <label>Charging time(hours)</label>
                      <Field
                        type="number"
                        name="chargingTime"
                        placeholder="Charging time(hours)"
                        className="form-control"
                      />
                      <p className="text-danger">
                        <ErrorMessage name="chargingTime" />
                      </p>

                      <label>Top Speed(km/h)</label>
                      <Field
                        type="number"
                        name="topSpeed"
                        placeholder="Top Speed (km/h)"
                        className="form-control"
                      />
                      <p className="text-danger">
                        <ErrorMessage name="topSpeed" />
                      </p>
                    </div>

                    <div className="admin-input">
                      <label>Anti-Lock Braking System</label>
                      <Field
                        as="select"
                        className="form-control"
                        name="ABS"
                        id="ABS"
                      >
                        <option>--Anti-Lock Braking System(Y/N)--</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </Field>
                      <p className="text-danger">
                        <ErrorMessage name="ABS" />
                      </p>
                    </div>
                    <div className="admin-input">
                      <label>Automatic Emergency Braking</label>
                      <Field
                        as="select"
                        className="form-control"
                        name="AEB"
                        id="AEB"
                      >
                        <option>--Automatic Emergency Braking(Y/N)--</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </Field>
                      <p className="text-danger">
                        <ErrorMessage name="AEB" />
                      </p>
                    </div>

                    <div className="admin-input">
                      <label>Reverse Assist</label>
                      <Field
                        as="select"
                        className="form-control"
                        name="reverseAssist"
                        id="reverseAssist"
                      >
                        <option>--Reverse Assist(Y/N)--</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </Field>
                      <p className="text-danger">
                        <ErrorMessage name="reverseAssist" />
                      </p>
                    </div>

                    <label>GPS Navigation System</label>
                    <Field
                      as="select"
                      className="form-control"
                      name="GPSNavigationSystem"
                      id="GPSNavigationSystem"
                    >
                      <option>--GPS Navigation System(Y/N)--</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </Field>
                    <p className="text-danger">
                      <ErrorMessage name="GPSNavigationSystem" />
                    </p>

                    <label>Battery Warranty(Years)</label>
                    <Field
                      type="number"
                      placeholder="batteryWarrantyYear"
                      name="batteryWarrantyYears"
                      className="form-control"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="batteryWarrantyYears" />
                    </p>

                    <label>Battery Warranty(Kilometers)</label>
                    <Field
                      type="number"
                      placeholder="batteryWarrantyKM"
                      name="batteryWarrantyKM"
                      className="form-control"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="batteryWarrantyKM" />
                    </p>

                    <label>Speaker(in Number)</label>
                    <Field
                      type="number"
                      name="speakers"
                      placeholder="Speaker(in Number)"
                      className="form-control"
                    />

                    <p className="text-danger">
                      <ErrorMessage name="speakers" />
                    </p>

                    <div className="admin-input">
                      <label>City</label>
                      <Field
                        type="text"
                        name="city"
                        className="form-control"
                        placeholder="City"
                      />
                      <p className="text-danger">
                        <ErrorMessage name="city" />
                      </p>
                    </div>

                    <div className="admin-input">
                      {" "}
                      <label>Brochure:</label>
                      <input
                        type="file"
                        name="brochure"
                        className="add-pic"
                        onChange={addUserbrochure}
                        accept="application/pdf, application/vnd.ms-excel"
                      />
                    </div>

                    <div className="admin-input">
                      {" "}
                      <label>Images:</label>
                      <input
                        type="file"
                        name="productImage"
                        className="add-pic"
                        onChange={addUserPic}
                        accept="image/x-png,image/gif,image/jpeg,image/jpg"
                      />
                    </div>

                    <div className="admin-input">
                      <label>Description</label>
                      <Field
                        component="textarea"
                        rows="2"
                        cols="120"
                        name="description"
                        className="form-control textarea-size"
                        placeholder="Description"
                      />
                      <p className="text-danger">
                        <ErrorMessage name="description" />
                      </p>
                    </div>
                    <div className="admin-input">
                      <label>meta Description</label>
                      <Field
                        component="textarea"
                        rows="2"
                        cols="120"
                        name="metaDescription"
                        className="form-control textarea-size"
                        placeholder="metaDescription"
                      />
                      <p className="text-danger">
                        <ErrorMessage name="metaDescription" />
                      </p>
                    </div>

                    <button className="cycle-submit" type="submit">
                      Submit
                    </button>
                    {P_id ? (
                      <Link to={`/add-scooter-variant/${P_id}`}>
                        <button className="cycle-submit">Add Variant</button>
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddLuna;
