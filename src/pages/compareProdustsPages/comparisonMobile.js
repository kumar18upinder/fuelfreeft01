import React, { useState, useEffect } from "react";
import "./Comparetion.css";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import axios from "axios";

function ComparisonMobile() {
  const { p1id, p2id } = useParams();

  const [comparison, setCompare] = useState([]);
  let compareData = comparison.comparison;
  const Compare = async () => {
    let result = await axios.get(
      `https://app.fuelfree.in/product/compare/${p1id}/${p2id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let data = await result.data;
    setCompare(data);
    localStorage.removeItem("product");
  };

  useEffect(() => {
    Compare();
  }, []);
  const Vehic1 = compareData ? compareData && compareData[0].VehicleType : "";
  const Vehich2 = compareData
    ? compareData && compareData[0] && compareData[1].VehicleType
    : "";
  return (
    <div id="comparisonMobile">
      <Header />
      {Vehic1 === Vehich2 ? (
        <>
          {" "}
          <div className="tanker">
            <div className="copmpare-item-flex-outer">
              <div className="camapare-vehicle">
                <div className="compare-img" id="first_vs">
                  <div className="com-comapreion-img">
                    <img
                      className="comp-img"
                      src={`https://app.fuelfree.in/${
                        compareData && compareData[0].productImage.length > 0
                          ? compareData[0].productImage[0]
                          : null
                      }`}
                      alt="cpmaprion img"
                    ></img>
                  </div>
                </div>
                <div className="compare-discr">
                  <h3>{compareData && compareData[0].productName}</h3>
                  <p className="comp-prize">
                    <span>₹</span>
                    {compareData && compareData[0].productPrice}
                  </p>
                </div>
              </div>
              <div className="camapare-vehicle">
                <div className="compare-img">
                  <div className="com-comapreion-img">
                    <img
                      className="comp-img"
                      src={`https://app.fuelfree.in/${
                        compareData &&
                        compareData[0] &&
                        compareData[1].productImage.length > 0
                          ? compareData[1].productImage[0]
                          : null
                      }`}
                      alt="cpmaprion img"
                    ></img>
                  </div>
                </div>
                <div className="compare-discr">
                  <h6>
                    {compareData &&
                      compareData[0] &&
                      compareData[1].productName}
                  </h6>
                  <p className="comp-prize">
                    <span>₹</span>
                    {compareData &&
                      compareData[0] &&
                      compareData[1].productPrice}
                  </p>
                </div>
              </div>
            </div>

            <div className="basic-capeion-info">
              <h3>Basic Comparsion</h3>
              <div className="basic-com-info-outer">
                <div className="basic-com-info-content">
                  <div className="comp-review">
                    <h2>
                      {compareData &&
                        compareData[0] &&
                        compareData[1].productName}
                    </h2>
                    {compareData &&
                    compareData[0] &&
                    compareData[1].productPrice ? (
                      <h5>
                        {compareData &&
                          compareData[0] &&
                          compareData[1].productPrice}
                      </h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData && compareData[0] && compareData[1].Brand ? (
                      <h5>
                        {compareData && compareData[0] && compareData[1].Brand}
                      </h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData && compareData[0] && compareData[1].variant ? (
                      <h5>
                        {compareData &&
                          compareData[0] &&
                          compareData[1].variant}
                      </h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData &&
                    compareData[0] &&
                    compareData[1].batteryVoltage ? (
                      <h5>
                        {compareData &&
                          compareData[0] &&
                          compareData[1].batteryVoltage}
                      </h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData &&
                    compareData[0] &&
                    compareData[1].batteryWarrantyYears ? (
                      <h5>
                        {compareData &&
                          compareData[0] &&
                          compareData[1].batteryWarrantyYears}
                      </h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData &&
                    compareData[0] &&
                    compareData[1].batteryWarrantyKM ? (
                      <h5>
                        {compareData &&
                          compareData[0] &&
                          compareData[1].batteryWarrantyKM}
                      </h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData &&
                    compareData[0] &&
                    compareData[1].DrivingRange ? (
                      <h5>
                        {compareData &&
                          compareData[0] &&
                          compareData[1].DrivingRange}
                      </h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData &&
                    compareData[0] &&
                    compareData[1].chargingTime ? (
                      <h5>
                        {compareData &&
                          compareData[0] &&
                          compareData[1].chargingTime}
                      </h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData &&
                    compareData[0] &&
                    compareData[1].topSpeed ? (
                      <h5>
                        {compareData &&
                          compareData[0] &&
                          compareData[1].topSpeed}
                      </h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData &&
                    compareData[0] &&
                    compareData[1].batterySize ? (
                      <h5>
                        {compareData &&
                          compareData[0] &&
                          compareData[1].batterySize}
                      </h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData &&
                    compareData[0] &&
                    compareData[1].chargerIncluded ? (
                      <h5>Yes</h5>
                    ) : (
                      <h5>No</h5>
                    )}
                    {compareData &&
                    compareData[0] &&
                    compareData[1].payloadCapacity ? (
                      <h5>
                        {compareData &&
                          compareData[0] &&
                          compareData[1].payloadCapacity}
                      </h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData &&
                    compareData[0] &&
                    compareData[1].seatingCapacity ? (
                      <h5>
                        {compareData &&
                          compareData[0] &&
                          compareData[1].seatingCapacity}
                      </h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData &&
                    compareData[0] &&
                    compareData[1].frontBrakeType ? (
                      <h5>
                        {compareData &&
                          compareData[0] &&
                          compareData[1].frontBrakeType}
                      </h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData &&
                    compareData[0] &&
                    compareData[1].rearBrakeType ? (
                      <h5>
                        {compareData &&
                          compareData[0] &&
                          compareData[1].rearBrakeType}
                      </h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData &&
                    compareData[0] &&
                    compareData[1].frontSuspension ? (
                      <h5>
                        {compareData &&
                          compareData[0] &&
                          compareData[1].frontSuspension}
                      </h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData &&
                    compareData[0] &&
                    compareData[1].rearSuspension ? (
                      <h5>
                        {compareData &&
                          compareData[0] &&
                          compareData[1].rearSuspension}
                      </h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData &&
                    compareData[0] &&
                    compareData[1].tyreType ? (
                      <h5>
                        {compareData &&
                          compareData[0] &&
                          compareData[1].tyreType}
                      </h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData && compareData[0] && compareData[1].airbags ? (
                      <h5>
                        {compareData &&
                          compareData[0] &&
                          compareData[1].airbags}
                      </h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData && compareData[0] && compareData[1].ABS ? (
                      <h5>Yes</h5>
                    ) : (
                      <h5>No</h5>
                    )}
                    {compareData && compareData[0] && compareData[1].AEB ? (
                      <h5>Yes</h5>
                    ) : (
                      <h5>No</h5>
                    )}
                    {compareData &&
                    compareData[0] &&
                    compareData[1].parkingAssist ? (
                      <h5>Yes</h5>
                    ) : (
                      <h5>No</h5>
                    )}
                    {compareData &&
                    compareData[0] &&
                    compareData[1].reverseAssist ? (
                      <h5>Yes</h5>
                    ) : (
                      <h5>No</h5>
                    )}
                    {compareData &&
                    compareData[0] &&
                    compareData[1].headlight ? (
                      <h5>
                        {compareData &&
                          compareData[0] &&
                          compareData[1].headlight}
                      </h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData &&
                    compareData[0] &&
                    compareData[1].distanceToEmpty ? (
                      <h5>Yes</h5>
                    ) : (
                      <h5>No</h5>
                    )}
                    {compareData && compareData[0] && compareData[1].display ? (
                      <h5>
                        {compareData &&
                          compareData[0] &&
                          compareData[1].display}
                      </h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData &&
                    compareData[0] &&
                    compareData[1].displaySize ? (
                      <h5>
                        {compareData &&
                          compareData[0] &&
                          compareData[1].displaySize}
                      </h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData &&
                    compareData[0] &&
                    compareData[1].speakers ? (
                      <h5>
                        {compareData &&
                          compareData[0] &&
                          compareData[1].speakers}
                      </h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData &&
                    compareData[0] &&
                    compareData[1].GPSNavigationSystem ? (
                      <h5>Yes</h5>
                    ) : (
                      <h5>No</h5>
                    )}
                    {compareData &&
                    compareData[0] &&
                    compareData[1].bluetoothCompatibility ? (
                      <h5>Yes</h5>
                    ) : (
                      <h5>No</h5>
                    )}
                    {compareData &&
                    compareData[0] &&
                    compareData[1].interior ? (
                      <h5>
                        {compareData &&
                          compareData[0] &&
                          compareData[1].interior}
                      </h5>
                    ) : (
                      <h5>null</h5>
                    )}
                  </div>
                </div>
                <div className="middle-compre">
                  <h2>V/S</h2>
                  <h5>Price</h5>
                  {compareData &&
                  compareData[0].Brand &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].Brand ? (
                    <h5>Brand</h5>
                  ) : (
                    <h5>Brand</h5>
                  )}
                  {compareData &&
                  compareData[0].variant &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].variant ? (
                    <h5>variant</h5>
                  ) : (
                    <h5>variant</h5>
                  )}
                  {compareData &&
                  compareData[0].batteryVoltage &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].batteryVoltage ? (
                    <h5>Battery Volt</h5>
                  ) : (
                    <h5>Battery Volt</h5>
                  )}
                  {compareData &&
                  compareData[0].batteryWarrantyYears &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].batteryWarrantyYears ? (
                    <h5>Battery WarrantyYears</h5>
                  ) : (
                    <h5>Battery WarrantyYears</h5>
                  )}
                  {compareData &&
                  compareData[0].batteryWarrantyKM &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].batteryWarrantyKM ? (
                    <h5>Battery WarrantyKM</h5>
                  ) : (
                    <h5>Battery WarrantyKM</h5>
                  )}
                  {compareData &&
                  compareData[0].DrivingRange &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].DrivingRange ? (
                    <h5>Driving Range</h5>
                  ) : (
                    <h5>Driving Range</h5>
                  )}
                  {compareData &&
                  compareData[0].chargingTime &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].chargingTime ? (
                    <h5>Charging Time</h5>
                  ) : (
                    <h5>Charging Time</h5>
                  )}
                  {compareData &&
                  compareData[0].topSpeed &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].topSpeed ? (
                    <h5>Top Speed</h5>
                  ) : (
                    <h5>Top Speed</h5>
                  )}
                  {compareData &&
                  compareData[0].batterySize &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].batterySize ? (
                    <h5>Battery Size</h5>
                  ) : (
                    <h5>Battery Size</h5>
                  )}
                  {compareData &&
                  compareData[0].chargerIncluded &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].chargerIncluded ? (
                    <h5>Charger Included</h5>
                  ) : (
                    <h5>Charger Included</h5>
                  )}
                  {compareData &&
                  compareData[0].payloadCapacity &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].payloadCapacity ? (
                    <h5>Payload Capacity</h5>
                  ) : (
                    <h5>Payload Capacity</h5>
                  )}
                  {compareData &&
                  compareData[0].seatingCapacity &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].seatingCapacity ? (
                    <h5>Seating Capacity</h5>
                  ) : (
                    <h5>Seating Capacity</h5>
                  )}
                  {compareData &&
                  compareData[0].frontBrakeType &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].frontBrakeType ? (
                    <h5>Front BrakeType</h5>
                  ) : (
                    <h5>Front BrakeType</h5>
                  )}
                  {compareData &&
                  compareData[0].rearBrakeType &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].rearBrakeType ? (
                    <h5>Rear BrakeType</h5>
                  ) : (
                    <h5>Rear BrakeType</h5>
                  )}
                  {compareData &&
                  compareData[0].frontSuspension &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].frontSuspension ? (
                    <h5>Front Suspension</h5>
                  ) : (
                    <h5>Front Suspension</h5>
                  )}
                  {compareData &&
                  compareData[0].rearSuspension &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].rearSuspension ? (
                    <h5>Rear Suspension</h5>
                  ) : (
                    <h5>Rear Suspension</h5>
                  )}
                  {compareData &&
                  compareData[0].tyreType &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].tyreType ? (
                    <h5>Tyre Type</h5>
                  ) : (
                    <h5>Tyre Type</h5>
                  )}
                  {compareData &&
                  compareData[0].airbags &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].airbags ? (
                    <h5>Airbags</h5>
                  ) : (
                    <h5>Airbags</h5>
                  )}
                  {compareData &&
                  compareData[0].ABS &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].ABS ? (
                    <h5>Anti break System</h5>
                  ) : (
                    <h5>Anti break System</h5>
                  )}
                  {compareData &&
                  compareData[0].AEB &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].AEB ? (
                    <h5>Auto Emergency Break</h5>
                  ) : (
                    <h5>Auto Emergency Break</h5>
                  )}
                  {compareData &&
                  compareData[0].parkingAssist &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].parkingAssist ? (
                    <h5>Parking Assist</h5>
                  ) : (
                    <h5>Parking Assist</h5>
                  )}
                  {compareData &&
                  compareData[0].reverseAssist &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].reverseAssist ? (
                    <h5>Reverse Assist</h5>
                  ) : (
                    <h5>Reverse Assist</h5>
                  )}
                  {compareData &&
                  compareData[0].headlight &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].headlight ? (
                    <h5>Headlight</h5>
                  ) : (
                    <h5>Headlight</h5>
                  )}
                  {compareData &&
                  compareData[0].distanceToEmpty &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].distanceToEmpty ? (
                    <h5>Distance To Empty</h5>
                  ) : (
                    <h5>Distance To Empty</h5>
                  )}
                  {compareData &&
                  compareData[0].display &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].display ? (
                    <h5>Display</h5>
                  ) : (
                    <h5>Display</h5>
                  )}
                  {compareData &&
                  compareData[0].displaySize &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].displaySize ? (
                    <h5>Display Size</h5>
                  ) : (
                    <h5>Display Size</h5>
                  )}
                  {compareData &&
                  compareData[0].speakers &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].speakers ? (
                    <h5>Speakers</h5>
                  ) : (
                    <h5>Speakers</h5>
                  )}
                  {compareData &&
                  compareData[0].GPSNavigationSystem &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].GPSNavigationSystem ? (
                    <h5>GPS Navigation System</h5>
                  ) : (
                    <h5>GPS Navigation System</h5>
                  )}
                  {compareData &&
                  compareData[0].bluetoothCompatibility &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].bluetoothCompatibility ? (
                    <h5>Bluetooth Compatibility</h5>
                  ) : (
                    <h5>Bluetooth Compatibility</h5>
                  )}
                  {compareData &&
                  compareData[0].interior &&
                  compareData &&
                  compareData[0] &&
                  compareData[1].interior ? (
                    <h5>Interior</h5>
                  ) : (
                    <h5>Interior</h5>
                  )}
                </div>
                <div className="basic-com-info-content">
                  <div className="comp-review">
                    <h2>{compareData && compareData[0].productName}</h2>

                    <h5>{compareData && compareData[0].productPrice}</h5>
                    {compareData && compareData[0].Brand ? (
                      <h5>{compareData && compareData[0].Brand}</h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData && compareData[0].variant ? (
                      <h5>{compareData && compareData[0].variant}</h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData && compareData[0].batteryVoltage ? (
                      <h5>{compareData && compareData[0].batteryVoltage}</h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData && compareData[0].batteryWarrantyYears ? (
                      <h5>
                        {compareData && compareData[0].batteryWarrantyYears}
                      </h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData && compareData[0].batteryWarrantyKM ? (
                      <h5>{compareData && compareData[0].batteryWarrantyKM}</h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData && compareData[0].DrivingRange ? (
                      <h5>{compareData && compareData[0].DrivingRange}</h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData && compareData[0].chargingTime ? (
                      <h5>{compareData && compareData[0].chargingTime}</h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData && compareData[0].topSpeed ? (
                      <h5>{compareData && compareData[0].topSpeed}</h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData && compareData[0].batterySize ? (
                      <h5>{compareData && compareData[0].batterySize}</h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData && compareData[0].chargerIncluded ? (
                      <h5>Yes</h5>
                    ) : (
                      <h5>No</h5>
                    )}
                    {compareData && compareData[0].payloadCapacity ? (
                      <h5>{compareData && compareData[0].payloadCapacity}</h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData && compareData[0].seatingCapacity ? (
                      <h5>{compareData && compareData[0].seatingCapacity}</h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData && compareData[0].frontBrakeType ? (
                      <h5>{compareData && compareData[0].frontBrakeType}</h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData && compareData[0].rearBrakeType ? (
                      <h5>{compareData && compareData[0].rearBrakeType}</h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData && compareData[0].frontSuspension ? (
                      <h5>{compareData && compareData[0].frontSuspension}</h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData && compareData[0].rearSuspension ? (
                      <h5>{compareData && compareData[0].rearSuspension}</h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData && compareData[0].tyreType ? (
                      <h5>{compareData && compareData[0].tyreType}</h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData && compareData[0].airbags ? (
                      <h5>{compareData && compareData[0].airbags}</h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData && compareData[0].ABS ? (
                      <h5>Yes</h5>
                    ) : (
                      <h5>No</h5>
                    )}
                    {compareData && compareData[0].AEB ? (
                      <h5>Yes</h5>
                    ) : (
                      <h5>No</h5>
                    )}
                    {compareData && compareData[0].parkingAssist ? (
                      <h5>Yes</h5>
                    ) : (
                      <h5>No</h5>
                    )}
                    {compareData && compareData[0].reverseAssist ? (
                      <h5>Yes</h5>
                    ) : (
                      <h5>No</h5>
                    )}
                    {compareData && compareData[0].headlight ? (
                      <h5>{compareData && compareData[0].headlight}</h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData && compareData[0].distanceToEmpty ? (
                      <h5>Yes</h5>
                    ) : (
                      <h5>No</h5>
                    )}
                    {compareData && compareData[0].display ? (
                      <h5>{compareData && compareData[0].display}</h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData && compareData[0].displaySize ? (
                      <h5>{compareData && compareData[0].displaySize}</h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData && compareData[0].speakers ? (
                      <h5>{compareData && compareData[0].speakers}</h5>
                    ) : (
                      <h5>null</h5>
                    )}
                    {compareData && compareData[0].GPSNavigationSystem ? (
                      <h5>Yes</h5>
                    ) : (
                      <h5>No</h5>
                    )}
                    {compareData && compareData[0].bluetoothCompatibility ? (
                      <h5>Yes</h5>
                    ) : (
                      <h5>No</h5>
                    )}
                    {compareData && compareData[0].interior ? (
                      <h5>{compareData && compareData[0].interior}</h5>
                    ) : (
                      <h5>null</h5>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <RecentlyComapred /> */}
          <Footer />
        </>
      ) : (
        <h1>Can not Compare</h1>
      )}
    </div>
  );
}

export default ComparisonMobile;
