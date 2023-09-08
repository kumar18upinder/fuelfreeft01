import axios from "axios";
import * as yup from "yup";
import GoogleLogins from "./googleLogin";
import Header from "../components/header";
import Footer from "../components/footer";
import { FaFacebook } from 'react-icons/fa';
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";

function SignUp() {
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [mapUrl, setMapUrl] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyA_2eybqcLSYvWm2bn4PIoi_wYCEnjYlkQ`;

          fetch(geocodeUrl)
            .then(response => response.json())
            .then(data => {
              const results = data.results;
              const city = getCityFromResults(results);
              const address = getAddressFromResults(results);
              const mapUrl = getMapUrl(latitude, longitude);

              setCity(city);
              setAddress(address);
              setMapUrl(mapUrl);
            })
            .catch(error => console.log(error));
        },
        error => {
          console.log(error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address + ' ' + city
    )}&key=AIzaSyA_2eybqcLSYvWm2bn4PIoi_wYCEnjYlkQ`;

    fetch(geocodeUrl)
      .then(response => response.json())
      .then(data => {
        if (data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          const newMapUrl = getMapUrl(lat, lng);
          setMapUrl(newMapUrl);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [city, address]);

  function getCityFromResults(results) {
    let city = '';

    for (let i = 0; i < results.length; i++) {
      const result = results[i];

      for (let j = 0; j < result.address_components.length; j++) {
        const addressComponent = result.address_components[j];

        if (addressComponent.types.includes('locality')) {
          city = addressComponent.long_name;
          break;
        }
      }

      if (city !== '') {
        break;
      }
    }

    return city;
  }

  function getAddressFromResults(results) {
    let address = '';

    for (let i = 0; i < results.length; i++) {
      const result = results[i];

      for (let j = 0; j < result.address_components.length; j++) {
        const addressComponent = result.address_components[j];

        if (
          addressComponent.types.includes('street_number') ||
          addressComponent.types.includes('subpremise') ||
          addressComponent.types.includes('premise') ||
          addressComponent.types.includes('establishment') ||
          addressComponent.types.includes('route') ||
          addressComponent.types.includes('sublocality_level_1') ||
          addressComponent.types.includes('sublocality_level_2') ||
          addressComponent.types.includes('locality') ||
          addressComponent.types.includes('administrative_area_level_1') ||
          addressComponent.types.includes('postal_code') ||
          addressComponent.types.includes('country')
        ) {
          address += addressComponent.long_name + ' ';
        }
      }

      if (address !== '') {
        break;
      }
    }

    return address.trim();
  }

  function getMapUrl(latitude, longitude) {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    return mapUrl;
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleAddressChange(event) {
    setAddress(event.target.value);
  }



  //for registration
  const defaultValues = {
    userName: "",
    userEmail: "",
    userPassword: "",
    confirmPassword: "",
    phoneNo: "",
  };
  const navigate = useNavigate()

  const validationSchema = yup.object().shape({
    userName: yup
      .string()
      .matches(/[A-Za-z]/, "Must be an alphabet")
      .required("Name is required"),
    userEmail: yup
      .string()
      .email()
      .matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "Should be valid Email")
      .required("Email is required"),
    userPassword: yup
      .string()
      .matches(
        /^[0-9]{6}$/, "Enter 6-digits number only")
      .required("Please Enter PIN"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("userPassword"), null], "PIN must match")
      .required("Confirm PIN is required"),
    phoneNo: yup
      .string()
      .matches(
        /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/,
        "Must be valid phone number"
      ).required("Phone number is required")
  });

  const handleSubmit = async (items) => {
    let allitems={...items,city:city,address:address,googleMapURL:mapUrl}
    try {
      let res = await axios.post(
        "https://app.fuelfree.in/user/register",
        allitems,
        {
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const result = await res.data;
      if (result.success === "success") {
        toast.success(result.message);
        navigate("/login")
      } else if (result.success === 'failure') {
        toast.error(result.error);
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error('Email is already exists');
    }
  };

  return (
    <div>
      <Header />
      <ToastContainer />
      <div id="login-page-id">
        <div class="login-form-new" id="signup-id">
          <div className="login-inner-contnet">
            <h3>Create new account</h3>
            <div className="social-login">
              <h5>Login using social media</h5>
              <Link><FaFacebook /></Link>
              <GoogleLogins/>
            </div>
            <div className="or-login">
              <span> OR</span>
            </div>
            <Formik
              initialValues={defaultValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <Field
                  type="text"
                  name="userName"
                  placeholder="User Name"
                  className="form-control"
                />
                <p className="text-danger">
                  <ErrorMessage name="userName" />
                </p>
                <Field
                  type="email"
                  name="userEmail"
                  placeholder="User Email"
                  className="form-control"
                />
                <p className="text-danger">
                  <ErrorMessage name="userEmail" />
                </p>
                <Field
                  type="password"
                  name="userPassword"
                  placeholder="Enter 6-digits PIN"
                  className="form-control"
                />
                <p className="text-danger">
                  <ErrorMessage name="userPassword" />
                </p>
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm PIN"
                  className="form-control"
                />
                <p className="text-danger">
                  <ErrorMessage name="confirmPassword" />
                </p>
                <Field
                  type="tel"
                  name="phoneNo"
                  placeholder="Phone No"
                  className="form-control"
                />
                <p className="text-danger">
                  <ErrorMessage name="phoneNo" />
                </p>
                <input
                  className="form-control"
                  placeholder="city"
                  type="text"
                  id="city"
                  name="city"
                  value={city}
                  onChange={handleCityChange}
                />
                <input
                 className="form-control"
                  type="text"
                  id="address"
                  placeholder="address"
                  name="address"
                  value={address}
                  onChange={handleAddressChange}
                />
                <button
                  type="submit"
                  className="btn btn-primary mt-3 userSignup-btn"
                >
                  Submit
                </button>
              </Form>
            </Formik>
          </div>
        </div>
        <div className="login-right-content">
          <h3>Login Here</h3>
          <p>Already have an account<b> In FuelFree</b> </p>
          <Link to="/login">Login</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
