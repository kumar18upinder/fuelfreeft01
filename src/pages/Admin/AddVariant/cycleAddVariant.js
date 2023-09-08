import axios from "axios";
import * as yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Field, Formik, ErrorMessage } from "formik";

const CycleAddVariant = () => {
let navigate = useNavigate()

const [cycledetails, setcycledetails] = useState({})
const {id} = useParams();

async function getcycledetails() {
let resultcycledetails = await axios.get(`https://app.fuelfree.in/product/details/${id}`, {
    headers: {
        "Accept": "application/json"
    }
})
let cycledetailsData = await resultcycledetails.data
setcycledetails(cycledetailsData.productDetails)
}

useEffect(() => {
  getcycledetails()
}, [])


  const [pic, setPic] = useState("");
  const [brochure, setBrochure] = useState("")

  const addUserPic = (e) => {
    setPic(e.target.files[0]);
  };

  const addUserbrochure = (e) => {
    setBrochure(e.target.files[0]);
  };

  const validationSchema =yup.object().shape({
    VehicleType:yup.string().required("vehicle type is required"),
    productName:yup.string().required("Vehicle Name is required"),
    Brand:yup.string().required("Company/Brand is required"),
    variant:yup.string().required("Variant is required"),
    productPrice:yup.number().positive("Please Enter Positive number").required("Ex-show Room Price is required"),
    chargerIncluded:yup.string().required("Charger Included is required"),
    display:yup.string().required("Display is required"),
    distanceToEmpty:yup.string().required("Distance to Empty is required"),
    frontBrakeType:yup.string().required("Front Brake Type is required"),
    rearBrakeType:yup.string().required("Rare Brake Type is required"),
    DrivingRange:yup.number().required("Driving Range is required"),
    batteryVoltage:yup.number().positive("Please Enter Positive number").required("Battery Voltage is required"),
    batterySize:yup.number().positive("Please Enter Positive number").required("Battery Size is required"),
    topSpeed:yup.number().positive("Please Enter Positive number").required("Top Speed is required"),
    ABS:yup.string().required("Anti-Lock Braking System  is required"),
    batteryWarrantyYears:yup.number().positive("Please Enter Positive number").required("Battery Warranty(years) is required"),
    batteryWarrantyKM: yup.number().positive("Please Enter Positive number").required("Battery Warranty(KM) is required"),
    description: yup.string().required("Description is required"),
    city: yup.string().required("City is required"),
  });

  const handleSubmit = async(items, { setSubmitting }) => {
    let carObj = {
      ...items,
      productImage: pic,
      brochure: brochure
    };
    delete carObj._id

    const response = await axios.post(`https://app.fuelfree.in/product/variantsAdd/${id}`, carObj, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    });
    let result = await response.data;
    if (result.success === "success") {
      toast.success(result.message);
      navigate('/EditProduct')
    } else if (result.success === "failure") {
      toast.error(result.error);
    } else {
      toast.error("Unable to add variant");
    }
  };

  return (
    <>
      <ToastContainer />
      <div id="admin-page-id-cycle">
        <div className="admin-dashboard-cycle">
          <div className="admin-dashboard-outer-cycle">
            <div className="admin-title-cycle">
              <h3>Add Variant</h3>
            </div>
            <div className="container">
            {cycledetails && cycledetails._id ?(
              <Formik
                enableReinitialize={true}
                initialValues={cycledetails}
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
                      />
                      <p className="text-danger">
                        <ErrorMessage name="VehicleType" />
                      </p>

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
                    </div>

                    <div className="admin-input">
                      <label>Charger Included</label>
                      <Field
                        as="select"
                        className="form-control"
                        name="chargerIncluded"
                        id="chargerIncluded"
                      >
                        <option>--Charger Included--</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </Field>
                      <p className="text-danger">
                        <ErrorMessage name="chargerIncluded" />
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
                        <option>--display--</option>
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
                        <option>--Distance to Empty--</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </Field>
                      <p className="text-danger">
                        <ErrorMessage name="distanceToEmpty" />
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
                        <option>--Front Brake Type--</option>
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
                        <option>--Rare Brake Type--</option>
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

                      <label>Top Speed (km/h)</label>
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
                        <option>Anti-Lock Braking System</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </Field>
                      <p className="text-danger">
                        <ErrorMessage name="ABS" />
                      </p>
                    </div>
                  
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
                        onChange={addUserbrochure} accept="application/pdf, application/vnd.ms-excel"
                      />
                    </div>

                    <div className="admin-input">
                      {" "}
                      <label>Images:</label>
                      <input
                        type="file"
                        name="productImage"
                        className="add-pic"
                        onChange={addUserPic} accept="image/x-png,image/gif,image/jpeg,image/jpg"
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

                    <button className="cycle-submit"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              </Formik>
              ):("")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CycleAddVariant;
