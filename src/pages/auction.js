import "./auction.css";
import axios from "axios";
import * as yup from "yup";
import { toast } from "react-toastify";
import Footer from "../components/footer";
import Header from "../components/header";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Formik, Field, ErrorMessage, Form } from "formik";

function Auction() {
  const [usedVehicle, setUsedVehicle] = useState({});
  let usedVehicleList = usedVehicle.List;
  let navigate = useNavigate();

  let goTologin = () => {
    toast.warning("Please Login");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
    return { _id: null };
  };

  let handleUsedVehicle = async () => {
    let response = await axios.get(`https://app.fuelfree.in/usedVehicle/list`, {
      headers: {
        Accept: "application/json",
      },
    });
    let usedVehicleData = await response.data;
    setUsedVehicle(usedVehicleData);
  };

  useEffect(() => {
    handleUsedVehicle();
  }, []);

  const defaultValue = {
    placeYourBid: "",
  };

  const [price, setprice] = useState("");

  const validationscema = yup.object().shape({
    placeYourBid: yup
      .number()

      .max(
        price * 2 - 1,
        `maximum bid amount should be less than ${
          price ? `${price * 2 - 1}` : `double-1`
        }`
      )
      .min(price + 500, `minimum bid amount will be ${price + 500}`)
      .required("Please Enter Bid Amount"),
  });

  //get product id
  const [pID, setid] = useState();

  const getId = (pid, currentprice) => {
    setid(pid);
    setprice(currentprice);
  };

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : NaN;

  const handlesubmit = async (value) => {
    let uid = user ? user._id : goTologin();

    let res = await axios.post(
      `https://app.fuelfree.in/auction/add/${uid}/${pID}`,
      value,
      {
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const result = await res.data;
    if (result.success === "success") {
      window.location.reload();
    }
  };

    //city wise vehicel
    const [citywiseV,setcitywise]=useState('')
    const {city}=useParams()
  
    const cityWiseVehicle=async()=>{
      let res=await axios.get(`https://app.fuelfree.in/usedVehicle/filterByCity?city=${city}`,{
        headers:{
          "Accept":"application/json"
        }
      })
      let result=await res.data
      let products=result.searchedProduct?result.searchedProduct:window.location.reload('')
      let filterByStatus=products.filter(data=>data.status===true)
      setcitywise(filterByStatus)

    }
  
    useEffect(()=>{
      cityWiseVehicle()
    },[city])

  return (
    <div>
      <Header />
      <div id="OUR-CARS">
        <div class="mobile-section-headfing">
          <span></span>
          <h3>Used Vehicle</h3>
          <span></span>
        </div>
        <div className="tanker">
          <div className="OUR-CARS-outer">
            {citywiseV?(<>{citywiseV &&
              citywiseV.map((data) => (
                <div className="auction-card" key={data._id}>
                  <img
                    src={`https://app.fuelfree.in/${data.Image}`}
                    alt="auction-img"
                  />
                  {data.participateInAuction === true ? (
                    <>
                      <div className="auction-details">
                        <h3>{data.vehicleName}</h3>
                        <p>Bid Amount : Minimum Bid ₹{data.minimumBid}</p>
                      </div>

                      <Formik
                        initialValues={defaultValue}
                        validationSchema={validationscema}
                        onSubmit={handlesubmit}
                      >
                        <div className="div-2">
                          <h2>Bid Now</h2>
                          <Form>
                            <Field
                              type="number"
                              name="placeYourBid"
                              placeholder="Bid Amount"
                            />

                            <button
                              type="submit"
                              onClick={() => getId(data._id, data.minimumBid)}
                            >
                              Place Bid
                            </button>
                          </Form>
                          <p className="text-danger">
                            <ErrorMessage name="placeYourBid" />
                          </p>
                        </div>
                      </Formik>
                    </>
                  ) : (
                    <div className="auction-details">
                      <h3>{data.vehicleName}</h3>
                      <p>Price ₹{data.minimumBid}</p>
                    </div>
                  )}

                  <Link to={`/used-vehicle-details/${data._id}`}>
                    View Details
                  </Link>
                </div>
              ))}</>):(<><h2>No product found</h2></>)}
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Auction;
