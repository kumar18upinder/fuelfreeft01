import axios from "axios";
import * as yup from "yup";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import React, { useState,useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { MultiSelect } from "react-multi-select-component";
import { Form, Field, Formik, ErrorMessage } from "formik";

const BusAddProduct = () => {
  const [P_id, setpid] = useState();

  const [pic, setPic] = useState("");
  const [brochure, setBrochure] = useState("")

  const addUserPic = (e) => {
    setPic(e.target.files[0]);
  };

  const addUserbrochure = (e) => {
    setBrochure(e.target.files[0]);
  };
  const defaultValues = {
    VehicleType: "Ev-buses",
    productName: "",
    Brand: "",
    variant: "",
    productPrice: "",
    DrivingRange: "",
    topSpeed: "",
    chargingTime: "",
    batterySize: "",
    batteryVoltage: "",
    seatingCapacity: "",
    frontSuspension: "",
    rearSuspension: "",
    parkingAssist: "",
    headLight: "",
    distanceToEmpty: "",
    display: "",
    displaySize: "",
    batteryWarrantyYears: "",
    batteryWarrantyKM: "",
    description: "",
    metaDescription: "",
    city: "",
  };

  const validationSchema =yup.object().shape({
    VehicleType:yup.string().required("vehicle type is required"),
    productName:yup.string().required("Vehicle Name is required"),
    Brand:yup.string().required("Company/Brand is required"),
    variant:yup.string().required("Variant is required"),
    productPrice:yup.number().positive("Please Enter Positive number").required("Ex-show Room Price is required"),
    displaySize:yup.number().positive("Please Enter Positive number").required("Display Size is required"),
    frontSuspension:yup.string().matches(/[A-Za-z]/, "Must be a alphabet").required("Front Suspension is required"),
    rearSuspension:yup.string().matches(/[A-Za-z]/, "Must be a alphabet").required("Rear Suspension is required"),
    display:yup.string().required("Display is required"),
    distanceToEmpty:yup.string().required("Distance to Empty is required"),
    DrivingRange:yup.number().required("Driving Range is required"),
    batteryVoltage:yup.number().positive("Please Enter Positive number").required("Battery Voltage is required"),
    batterySize:yup.number().positive("Please Enter Positive number").required("Battery Size is required"),
    topSpeed:yup.number().positive("Please Enter Positive number").required("Top Speed is required"),
    seatingCapacity:yup.number().positive("Please Enter Positive number").required("Seating Capacity is required"),
    parkingAssist:yup.string().required("Parking Assist is required"),
    batteryWarrantyYears:yup.number().positive("Please Enter Positive number").required("Battery Warranty(years) is required"),
    batteryWarrantyKM: yup.number().positive("Please Enter Positive number").required("Battery Warranty(KM) is required"),
    description: yup.string().required("Description is required"),
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
 

  const handleSubmit = async(items) => {
    let carObj = {
      ...items,
      productImage: pic,
      brochure: brochure
    };
    const response = await axios.post(`https://app.fuelfree.in/product/create/${getData}`, carObj, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    });
    let result = await response.data;
    let Product = result.productData;
    let P_id = Product._id;
    setpid(P_id);

    if (result.success === "success") {
      toast.success(result.message)
    } else if (result.success === "failure") {
      toast.error(result.error);
    } else {
      toast.error("Unable to add product");
    }
  };
 
  return (
    <>
      <ToastContainer />
      <label style={{color:"black"}}>Select Vendor Name</label>
          <MultiSelect
            options={det}
            value={selected}
            onChange={setSelected}
            labelledBy="Select"
            checkbox
          />
      <div id="admin-page-id-cycle">
        <div className="admin-dashboard-cycle">
          <div className="admin-dashboard-outer-cycle">
            <div className="admin-title-cycle">
              <h3>Add product</h3>
            </div>
            <div className="container">
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
                    </div>
                   
                    <div className="admin-input">
                      <label>Parking Assist</label>
                      <Field
                        as="select"
                        className="form-control"
                        name="parkingAssist"
                        id="parkingAssist"
                      >
                        <option>--Parking Assist(Y/N)--</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </Field>
                      <p className="text-danger">
                        <ErrorMessage name="parkingAssist" />
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
                    <div className="admin-input">
                      <label>Meta Description</label>
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

                    <button
                      type="submit"
                    >
                    Submit
                    </button>
                    {P_id ? (
                      <Link to={`/add-bus-variant/${P_id}`}>
                        <button>Add Variant</button>
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

export default BusAddProduct;
