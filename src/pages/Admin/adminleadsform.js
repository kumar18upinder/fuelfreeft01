import axios from "axios";
import * as yup from "yup";
import Adminsidebar from "./adminsidebar";
import { useNavigate, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { MultiSelect } from "react-multi-select-component";
import Select from "react-select";
import { WhatsappShareButton } from "react-share";
import { RiWhatsappFill } from "react-icons/ri";
import { IoIosShareAlt } from "react-icons/io";

const AdminleadsForm = () => {
  const navigate = useNavigate();

  const defaultValue = {
    name: "",
    phoneNo: "",
    city: "",
    vehicleType: "",
  };
  const validationschema = yup.object().shape({
    name: yup.string().required("Enter Name"),
    phoneNo: yup
      .string()
      .matches(
        /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/,
        "Must be valid phone number"
      )
      .required("Phone number is requried"),
    city: yup.string().required("City is required"),
    vehicleType: yup.string().required("Enter Vehicle Type"),
  });

  const [det, setdet] = useState([]);
  const [selected, setSelected] = useState([]);

  const getData = [];
  for (let i = 0; i < selected.length; i++) {
    getData.push(selected[i].value);
  }
  const handleSelectCity = async (e) => {
    const selectedValue = e.value;
    let res = await axios.get(
      `https://app.fuelfree.in/vendor/filterByCityCount?city=${selectedValue}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let result = await res.data;
    let alldata = await result.search;
    const deledetails = alldata.map((data) => ({
      label:
        data.firmName +
        "-------->" +
        data.vehicleDeals +
        "------------------->" +
        data.Brand +
        "------>" +
        data.leadsCount,
      city: data.city,
      value: data._id,
    }));
    setdet(deledetails);
  };

  const formatMessage = (url) => {
    const formattedData =
      `Hello, here is your new lead.\n\n` +
      `Customer-Name=${url.name},\n` +
      `Customer-Phone Number=${url.phoneNo},\n` +
      `City=${url.city},\n` +
      `Interested In=${url.vehicleType}`;
    return formattedData;
  };

  const [url, setValues] = useState("");

  const handlesubmit = async (values) => {
    setValues(JSON.stringify(values));
    const formattedData = formatMessage(values);
    setValues(formattedData);
    let vendorid = getData ? getData : toast.error("first select vendor ");

    const res = await axios.post(
      `https://app.fuelfree.in/lead/add/${vendorid}`,
      values,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let result = await res.data;
    if (result.success === "success") {
      toast.success("Lead sent");
    } else {
      toast.error(result.error);
    }
  };
  const gologinadmin = () => {
    if (!localStorage.getItem("Admin-Info")) {
      navigate("/admin");
    }
  };
  useEffect(() => {
    gologinadmin();
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const options = [
    { value: "Indore", label: "Indore" },
    { value: "Bhopal", label: "Bhopal" },
    { value: "gwalior", label: "gwalior" },
    { value: "jabalpur", label: "jabalpur" },
    { value: "surat", label: "surat" },
    { value: "Dewas", label: "Dewas" },
    { value: "Ujjain", label: "Ujjain" },
    { value: "Vidisha", label: "Vidisha" },
    { value: "Sehore", label: "Sehore" },
    { value: "Rajgarh", label: "Rajgarh" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div id="admin-page-id">
      <ToastContainer />
      <Adminsidebar />
      <div className="admin-dashboard">
        <label style={{ color: "white" }}>Select City</label>
        <Select
          defaultValue={selectedOption}
          onChange={handleSelectCity}
          required
          options={options}
        />
        <div>
          <label style={{ color: "white" }}>Select Vendor Name</label>
          <MultiSelect
            options={det}
            value={selected}
            onChange={setSelected}
            labelledBy="Select"
            checkbox
          />
        </div>
        <div class="admin-title">
          <h3>Dealer</h3>
        </div>

        <Formik
          className="tanker"
          initialValues={defaultValue}
          validationSchema={validationschema}
          onSubmit={handlesubmit}
        >
          <Form>
            <div>
              <Field
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <p className="text-danger">
                <ErrorMessage name="name" />
              </p>
            </div>
            <div>
              <Field
                type="tel"
                name="phoneNo"
                placeholder="phone"
                className="form-control"
              />
              <p className="text-danger">
                <ErrorMessage name="phoneNo" />
              </p>
            </div>
            <div>
              <Field
                type="text"
                name="city"
                placeholder="city"
                className="form-control"
              />
              <p className="text-danger">
                <ErrorMessage name="city" />
              </p>
            </div>
            <div>
              <Field
                type="text"
                name="vehicleType"
                placeholder="vehicleType"
                className="form-control"
              />
              <p className="text-danger">
                <ErrorMessage name="vehicleType" />
              </p>
            </div>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
        <div
          id="share-btunss"
          className={isHovered ? "hover-effect-show-shre" : ""}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="shre-hover-btnss">
            {" "}
            <IoIosShareAlt />
            <span>click here to share on whatsapp</span>
          </div>
          <div 
          // className="share-on-socialss"
          >
            <WhatsappShareButton url={url}>
              <div className="share-on-socialss">
                <RiWhatsappFill />
              </div>
            </WhatsappShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminleadsForm;
