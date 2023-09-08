import React, { useState, useEffect } from "react";
import axios from "axios";

const ParticularProductDealer = () => {
    const [chargingStationlist, setchargingStation] = useState({});
    let chargingStation = chargingStationlist.List;
     //console.warn(cycleType, "###");
  // const user = JSON.parse(localStorage.getItem('user'));
  // let uid = user._id
     const bookingChargingStation = async () => {
        let resultChargingStation = await axios.get(
          'https://app.fuelfree.in/vendor/agency/list',
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        let chargingStationData = await resultChargingStation.data;
        setchargingStation(chargingStationData);
      };
  
    useEffect(() => {
      bookingChargingStation();
    }, []);
  return (
    <div>
        <div id="OUR-CARS">
                <div className="tanker">
                  <div className="OUR-CARS-outer">
                    {chargingStation &&
                      chargingStation.map((datacharging) => (
                        <div class="Carcard" key={datacharging._id}>
                          <div class="Cartitle">
                            <h5>{datacharging.name}</h5>
                            <p>
                              <b>E-mail:</b> {datacharging.email}
                            </p>
                            <p>
                              <b>Phone no:</b> {datacharging.whatsappNo}
                            </p>
                            <p>
                              <b>City:</b> {datacharging.city}
                            </p>
                            <p>
                              <b>firmName:</b> {datacharging.firmName}
                            </p>
                            <p>
                              <b>Time:</b> {datacharging.time}
                            </p>
                            <p>
                              <b>Address:</b> {datacharging.address}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
    </div>
  )
}

export default ParticularProductDealer
