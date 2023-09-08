import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UsedVehicleList = () => {
  const [usedVehicle, setUsedVehicle] = useState({});
  let usedVehicleList = usedVehicle.List;
  let usedVehicleCount = usedVehicle.totalconsult;

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

  return (
    <>
      <div id="OUR-CARS">
        <div className="tanker">
        <div className="section-title">
            <h3>Used Electric Vehicle List</h3>
          </div>
          <div className="col-md-6 dealer-address">
            <span className="flatNo">Total Used Vehicle: {usedVehicleCount}</span> 
          </div>
         
          <div className="OUR-CARS-outer">
            {usedVehicleList &&
              usedVehicleList.map((data) => (
                <Link to={`/used-vehicle-details/${data._id}`}>
                  <div class="Carcard" key={data._id}>
                    <img
                      alt="cycle"
                      src={`https://app.fuelfree.in/${data.Image}`}
                    ></img>
                    <div class="title">
                      <h5>{data.vehicleName}</h5>
                      <h6>Seller Name: {data.sellerName}</h6>
                      <h6>Starting at Rs. {data.sellingPrice}</h6>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UsedVehicleList;
