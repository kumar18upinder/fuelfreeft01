import axios from "axios";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, useParams } from "react-router-dom";

const SolarAddVariant = () => {
  const navigate = useNavigate();
  const [pic, setPic] = useState("");
  const [brochure, setBrochure] = useState("");

  const addUserPic = (e) => {
    setPic(e.target.files[0]);
  };
  const addUserbrochure = (e) => {
    setBrochure(e.target.files[0]);
  };
  const [data, setDetails] = useState("");
  const { id } = useParams();

  async function getProductdetails() {
    let resultDetails = await axios.get(
      `https://app.fuelfree.in/solar/productDetails/${id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let data = await resultDetails.data;
    let details = data.productDetail;
    setDetails(details);
  }

  useEffect(() => {
    getProductdetails();
  }, []);

  const validationSchema = yup.object().shape({
    VehicleType: yup.string().required("vehicle type is required"),
    productName: yup.string().required("Vehicle Name is required"),
    Brand: yup.string().required("Company/Brand is required"),
    variant: yup.string().required("Variant is required"),
    productPrice: yup
      .number()
      .positive("Please Enter Positive number")
      .required("Ex-show Room Price is required"),
    topSpeed: yup
      .number()
      .positive("Please Enter Positive number")
      .required("Top Speed is required"),
    chargingTime: yup
      .number()
      .positive("Please Enter Positive number")
      .required("Charging Time is required"),
    batteryVoltage: yup
      .number()
      .positive("Please Enter Positive number")
      .required("Battery Voltage is required"),
    batterySize: yup
      .number()
      .positive("Please Enter Positive number")
      .required("Battery Size is required"),
    batteryType: yup.string().required("Battery Type is required"),
    payloadCapacity: yup
      .number()
      .positive("Please Enter Positive number")
      .required("Payload Capacity is required"),
    solarPanelType: yup.string().required("Solar Panel Type is required"),
    rangePerCharge: yup
      .number()
      .positive("Please Enter Positive number")
      .required("Range Per Charge is required"),
    seatingCapacity: yup
      .number()
      .positive("Please Enter Positive number")
      .required("Seating Capacity is required"),
    city: yup.string().required("City is required"),
    description: yup.string().required("Description is required"),
  });

  const handleSubmit = async (items) => {
    let carObj = {
      ...items,
      productImage: pic,
    };
    console.log(carObj);
    delete carObj._id;

    const response = await axios.post(
      `https://app.fuelfree.in/solar/add/variant/${id}`,
      carObj,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );
    let result = await response.data;
    console.log(result, "result");

    if (result.success === "success") {
      toast.success(result.message);
      navigate("/EditProduct");
    } else if (result.success === "failure") {
      toast.error(result.error);
    } else {
      toast.error("Unable to add variant");
    }
  };

  return (
    <>
      <div id="admin-page-id-cycle">
        <div className="admin-dashboard-cycle">
          <div className="admin-dashboard-outer-cycle">
            <div className="admin-title-cycle">
              <h3>Add Variant</h3>
            </div>
            <div className="container">
              <Formik
                enableReinitialize={true}
                initialValues={data}
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

                      <label>Ex-Showroom Price(in Rupees)</label>
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

                    <label>Battery Size(in KWH)</label>
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

                    <label>Battery Type</label>
                    <Field
                      type="text"
                      name="batteryType"
                      placeholder="Battery Type"
                      className="form-control"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="batteryType" />
                    </p>

                    <label>Payload Capacity(in kg)</label>
                    <Field
                      type="number"
                      name="payloadCapacity"
                      placeholder="Payload Capacity (in kg)"
                      className="form-control"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="payloadCapacity" />
                    </p>

                    <label>Solar Panel Type</label>
                    <Field
                      type="text"
                      name="solarPanelType"
                      placeholder="Solar Panel Type"
                      className="form-control"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="solarPanelType" />
                    </p>

                    <label>Range Per Charge</label>
                    <Field
                      type="number"
                      name="rangePerCharge"
                      placeholder="Range Per Charge"
                      className="form-control"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="rangePerCharge" />
                    </p>

                    <label>Seating Capacity</label>
                    <Field
                      type="number"
                      name="seatingCapacity"
                      placeholder="Seating Capacity"
                      className="form-control"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="seatingCapacity" />
                    </p>

                    <label>Images:</label>
                    <input
                      type="file"
                      name="productImage"
                      className="add-pic"
                      onChange={addUserPic}
                      accept="image/x-png,image/gif,image/jpeg,image/jpg"
                    />

                    <label>Broucher:</label>
                    <input
                        type="file"
                        name="brochure"
                        className="add-pic"
                        onChange={addUserbrochure}
                        accept="application/pdf, application/vnd.ms-excel" 
                      />

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
                    <button className="cycle-submit" type="submit">
                      Submit
                    </button>
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

export default SolarAddVariant;
