
import Adminsidebar from "../Admin/adminsidebar";
import "./admin.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Addvariant = () => {
  
  const [productImage, setImage] = useState([]);
  const [values, setValues] = useState({
    // id : id,
    productName: "",
    productPrice: "",
    // productImage:[],
    BatteryVolt: "",
    BatterySize: "",
    BatteryKWH: "",
    BatteryAmpere: "",
    ChargerIncluded: "",
    DrivingRange: "",
    ChargingTime: "",
    TopSpeed: "",
    SeatingCapacity: "",
    AirbagsNum: "",
    Ac: "",
    ParkingAssist: "",
    Headlights: "",
    TailLights: "",
    Display: "",
    TouchScreenSize: "",
    Speakers: "",
    SteeringType: "",
    VoiceCommand: "",
    GPSsystem: "",
    BluetoothCompatibility: "",
    BatteryWarranty: "",
    BatteryWarrantyKM: "",
    Interiors: "",
    // OverallRating: "",
    // FuelFreeRating: "",
    VehicleType: "",
    vehicleStatus: "",
    Brand: "",
    city: "",
    isItCommercial: "",
    disc: "",
    ventilatedDisc: "",
    hydraulicDisc: "",
    mechanicBreak: "",
    combiBreak: "",
    // Rating: "",
    description: "",
  });

  const { id } = useParams();
      // (id);

  useEffect(() => {
    axios
      .get(`https://app.fuelfree.in/product/details/${id}`)
      .then((res) =>
        setValues({
          ...values,
          productName: res.data.productDetails.productName,
          productPrice: res.data.productDetails.productPrice,
        //   productImage:res.data.productDetails.productImage  ,
        // productImage:productImage,
          BatteryVolt: res.data.productDetails.BatteryVolt,
          BatterySize: res.data.productDetails.BatterySize,
          BatteryKWH: res.data.productDetails.BatteryKWH,
          BatteryAmpere: res.data.productDetails.BatteryAmpere,
          ChargerIncluded: res.data.productDetails.ChargerIncluded,
          DrivingRange: res.data.productDetails.DrivingRange,
          ChargingTime: res.data.productDetails.ChargingTime,
          TopSpeed: res.data.productDetails.TopSpeed,
          SeatingCapacity: res.data.productDetails.SeatingCapacity,
          AirbagsNum: res.data.productDetails.AirbagsNum,
          Ac: res.data.productDetails.Ac,
          ParkingAssist: res.data.productDetails.ParkingAssist,
          Headlights: res.data.productDetails.Headlights,
          TailLights: res.data.productDetails.TailLights,
          Display: res.data.productDetails.Display,
          TouchScreenSize: res.data.productDetails.TouchScreenSize,
          Speakers: res.data.productDetails.Speakers,
          SteeringType: res.data.productDetails.SteeringType,
          VoiceCommand: res.data.productDetails.VoiceCommand,
          GPSsystem: res.data.productDetails.GPSsystem,
          BluetoothCompatibility:
            res.data.productDetails.BluetoothCompatibility,
          BatteryWarranty: res.data.productDetails.BatteryWarranty,
          BatteryWarrantyKM: res.data.productDetails.BatteryWarrantyKM,
          Interiors: res.data.productDetails.Interiors,
        //   OverallRating: res.data.productDetails.OverallRating,
        //   FuelFreeRating: res.data.productDetails.FuelFreeRating,
          VehicleType: res.data.productDetails.VehicleType,
          vehicleStatus: res.data.productDetails.vehicleStatus,
          Brand: res.data.productDetails.Brand,
          city: res.data.productDetails.city,
          isItCommercial: res.data.productDetails.isItCommercial,
          disc: res.data.productDetails.disc,
          ventilatedDisc: res.data.productDetails.ventilatedDisc,
          hydraulicDisc: res.data.productDetails.hydraulicDisc,
          mechanicBreak: res.data.productDetails.mechanicBreak,
          combiBreak: res.data.productDetails.combiBreak,
        //   Rating: res.data.productDetails.Rating,
          description: res.data.productDetails.description,
        })
      )
      .catch((err) =>     (err));
  }, []);

  let data ={...values,productImage:productImage}
  console.log(data,'daasdf');
  const navigate = useNavigate();
  const handleUpdate =async (e) => {
    e.preventDefault();
  let res=await  axios
      .post(`https://app.fuelfree.in/product/variantsAdd/${id}`, data,{
        headers:{
            "Content-type":"multipart/form-data",
            "Accept":"application/json"
        },
    }
    
    )
    let result= await res.data
    console.log(result,'fff');
        if(result.success==='success'){
            toast.success(result.message)
            // navigate("/editproduct");
        }else{
            toast.error(result.error)
        }

    }
       
    const gologinadmin=()=>{
      if(!localStorage.getItem('Admin-Info')){
        navigate('/admin')
      }
    }
    useEffect(()=>{
        gologinadmin()
    },[])

  return (
    <>
      <div id="admin-page-id">
        <ToastContainer />
        <Adminsidebar />
        <div className="admin-dashboard">
          <form onSubmit={handleUpdate} style={{ width: "100%" }}>
            <div className="admin-dashboard-outer">
              <div className="admin-title">
                <h3>Update product</h3>
              </div>
              <div className="container">
                <div id="full-add-product">
                  <div className="admin-input">
                    <label>ProductName</label>
                    <input
                      type="text"
                      placeholder="ProductName"
                      value={values.productName}
                      onChange={(e) =>
                        setValues({ ...values, productName: e.target.value })
                      }
                    />
                    <label>ProductPrice</label>
                    <input
                      name="productPrice"
                      type="text"
                      placeholder="productPrice"
                      value={values.productPrice}
                      onChange={(e) =>
                        setValues({ ...values, productPrice: e.target.value })
                      }
                    />
                  </div>

                  <div className="admin-input">
                    <label>ChargerIncluded</label>
                    <select
                      className=" form form-control"
                      value={values.ChargerIncluded}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          ChargerIncluded: e.target.value,
                        })
                      }
                    >
                      <option value="" selected>
                        Charger Included(Y/N)
                      </option>
                      <option value="true">YES</option>
                      <option value="false">NO</option>
                    </select>
                  </div>
                  <div className="admin-input">
                    <label>Driving Range(km)</label>
                    <input
                      type="text"
                      placeholder="Driving Range(km)"
                      className="form-control"
                      value={values.DrivingRange}
                      onChange={(e) =>
                        setValues({ ...values, DrivingRange: e.target.value })
                      }
                    />
                    <label>Charging time(hours)</label>
                    <input
                      type="text"
                      placeholder="Charging time(hours)"
                      className="form-control"
                      value={values.ChargingTime}
                      onChange={(e) =>
                        setValues({ ...values, ChargingTime: e.target.value })
                      }
                    />
                    <label>Top Speed (km/h)</label>
                    <input
                      type="text"
                      placeholder="Top Speed (km/h)"
                      className="form-control"
                      value={values.TopSpeed}
                      onChange={(e) =>
                        setValues({ ...values, TopSpeed: e.target.value })
                      }
                    />
                  </div>
                  <div className="admin-input">
                    <label>Seating Capacity</label>
                    <input
                      type="text"
                      placeholder="Seating Capacity"
                      className="form-control"
                      value={values.SeatingCapacity}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          SeatingCapacity: e.target.value,
                        })
                      }
                    />
                  </div>
                  {/* <div className="admin-input"></div> */}
                  <div className="admin-input">
                    <label>Airbags(texts)</label>
                    <input
                      type="text"
                      placeholder="Airbags(texts)"
                      className="form-control"
                      value={values.AirbagsNum}
                      onChange={(e) =>
                        setValues({ ...values, AirbagsNum: e.target.value })
                      }
                    />
                  </div>
                  <div className="admin-input">
                    <label>AC</label>
                    <input
                      type="text"
                      placeholder="AC"
                      className="form-control"
                      value={values.Ac}
                      onChange={(e) =>
                        setValues({ ...values, Ac: e.target.value })
                      }
                    />
                    <label>Parking Assist</label>
                    <input
                      type="text"
                      placeholder="Parking Assist"
                      className="form-control"
                      value={values.ParkingAssist}
                      onChange={(e) =>
                        setValues({ ...values, ParkingAssist: e.target.value })
                      }
                    />

                  </div>
                  <div className="admin-input">
                    <label>Headlights</label>
                    <input
                      type="text"
                      placeholder="Headlights"
                      className="form-control"
                      value={values.Headlights}
                      onChange={(e) =>
                        setValues({ ...values, Headlights: e.target.value })
                      }
                    />
                  </div>
                  <label>Tail Lights</label>
                  <input
                    type="text"
                    placeholder="Tail Lights"
                    className="form-control"
                    value={values.TailLights}
                    onChange={(e) =>
                      setValues({ ...values, TailLights: e.target.value })
                    }
                  />
                </div>
              </div>
              <label>
                Image
                <sup>
                  <span style={{ color: "red" }}>*</span>
                </sup>
              </label>
              <input
                required
                type="file" 
                placeholder="image"
                className="form-control"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <label>Display</label>
              <input
                type="text"
                placeholder="Display"
                className="form-control"
                value={values.Display}
                onChange={(e) =>
                  setValues({ ...values, Display: e.target.value })
                }
              />
              <label>Touch Screen Size(inch)</label>
              <input
                type="text"
                placeholder="Touch Screen Size(inch)"
                className="form-control"
                value={values.TouchScreenSize}
                onChange={(e) =>
                  setValues({ ...values, TouchScreenSize: e.target.value })
                }
              />
              <label>Speakers(texts)</label>
              <input
                type="text"
                placeholder="Speakers(texts)"
                className="form-control"
                value={values.Speakers}
                onChange={(e) =>
                  setValues({ ...values, Speakers: e.target.value })
                }
              />
              <label>Steering Type</label>
              <input
                type="text"
                placeholder="Steering mounted controls/Steering Type"
                className="form-control"
                value={values.SteeringType}
                onChange={(e) =>
                  setValues({ ...values, SteeringType: e.target.value })
                }
              />
              <label>Voice Command</label>
              <input
                type="text"
                placeholder="Voice command"
                className="form-control"
                value={values.VoiceCommand}
                onChange={(e) =>
                  setValues({ ...values, VoiceCommand: e.target.value })
                }
              />
              <label>GPS Navigation System</label>
              <input
                type="text"
                placeholder="GPS Navigation System"
                className="form-control"
                value={values.GPSsystem}
                onChange={(e) =>
                  setValues({ ...values, GPSsystem: e.target.value })
                }
              />
              <label>Bluetooth Compatibility</label>
              <input
                type="text"
                placeholder="Bluetooth Compatibility"
                className="form-control"
                value={values.BluetoothCompatibility}
                onChange={(e) =>
                  setValues({ ...values, BluetoothCompatibility: e.target.value })
                }
              />
              <label>Battery Warranty(Years)</label>
              <input
                type="text"
                placeholder="Battery Warranty(Years)"
                className="form-control"
                value={values.BatteryWarranty}
                onChange={(e) =>
                  setValues({ ...values, BatteryWarranty: e.target.value })
                }
              />
              <label>Battery Warranty(Kilometers)</label>
              <input
                type="text"
                placeholder="Battery Warranty(Kilometers)"
                className="form-control"
                value={values.BatteryWarrantyKM}
                onChange={(e) =>
                  setValues({ ...values, BatteryWarrantyKM: e.target.value })
                }
              />
              {/* {image && ( */}
              <div>
                <input
                  type="file"
                  placeholder="Image"
                  className="form-control"
                //   value={values.productImage}
                onChange={(e) =>
                    setImage( e.target.files[0] )
                  }
                />
              </div>
            
              {/* <div className=" color">
              <div className="inner-color"></div>
            </div>
              <label>Interiors</label>
              <select
                className=" form form-control"
                value={values.Interiors}
                onChange={(e) =>
                  setValues({ ...values, Interiors: e.target.value })
                }
              >
                <option value="" selected>
                  Interiors (Dual Tone/Single Tone)
                </option>
                <option>Single Tone</option>
                <option>Dual Tone</option>
              </select>
              {/* <label>Overall Rating</label> */}
              {/* <input
                type="text"
                placeholder="Overall Rating"
                className="form-control"
                value={values.OverallRating}
                onChange={(e) =>
                  setValues({ ...values, OverallRating: e.target.value })
                }
              /> */}
              {/* <label>Fuel Free Rating</label>
              <input
                type="text"
                placeholder="Fuel Free Rating"
                className="form-control"
                value={values.FuelFreeRating}
                onChange={(e) =>
                  setValues({ ...values, FuelFreeRating: e.target.value })
                }
              /> */}
              <label>E-Vehicle</label>
              <select
                className=" form form-control"
                value={values.VehicleType}
                onChange={(e) =>
                  setValues({ ...values, VehicleType: e.target.value })
                }
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
              </select>
              <label>Vehicle Status</label>
              <select
                className=" form form-control"
                value={values.vehicleStatus}
                onChange={(e) =>
                  setValues({ ...values, vehicleStatus: e.target.value })
                }
              >
                <option value="" selected>
                  Vehicle Status
                </option>
                <option>New</option>
                <option>Old</option>
              </select>
              <label>Brand</label>
              <input
                type="text"
                placeholder="Brand"
                className="form-control"
                value={values.Brand}
                onChange={(e) => setValues({ ...values, Brand: e.target.value })}
              />
              <label>description</label>
              <input
                type="text"
                placeholder="description"
                className="form-control"
                value={values.description}
                onChange={(e) =>
                  setValues({ ...values, description: e.target.value })
                }
              />
              <label>City</label>
              <input
                type="text"
                placeholder="City"
                className="form-control"
                value={values.city}
                onChange={(e) => setValues({ ...values, city: e.target.value })}
              />
              <label>Is it Commerical Vehicle ?</label>
              <select
                className=" form form-control"
                value={values.isItCommercial}
                onChange={(e) =>
                  setValues({ ...values, isItCommercial: e.target.value })
                }
              >
                <option value="" selected>
                  Is it Commerical Vehicle ?
                </option>
                <option>true</option>
                <option>false</option>
              </select>
              <button>Add Variant</button>


            </div>
          </form>
        </div>

        {/* <div className="admin-input">
          <input
            type="text"
            placeholder="ProductName"
            value={values.productName}
            onChange={(e) =>
              setValues({ ...values, productName: e.target.value })
            }
          />
          <input
            name="productPrice"
            type="text"
            placeholder="productPrice"
            value={values.productPrice}
            onChange={(e) =>
              setValues({ ...values, productPrice: e.target.value })
            }
          />

          <button className="btn btn-primary">Add Product</button>
        </div> */}
      </div>
    </>
  );
};

export default Addvariant;
