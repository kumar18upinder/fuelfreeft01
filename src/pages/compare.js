import "./compare.css";
import React, { useState } from "react";
import addvehicle from "../images/add-car.jpg";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";

function Compare() {
  // for first product
  const [vehicleType, setVehicleType] = useState("");
  const [BrandList, setBrandList] = useState("");
  const uniqueBrandSet = new Set(
    BrandList && BrandList.map((item) => item.Brand.toLowerCase().toUpperCase())
  );
  const uniqueBrandList = Array.from(uniqueBrandSet);

  const getVhicleType = async (vehicleType) => {
    setVehicleType(vehicleType);
    let res = await axios.get(
      `https://app.fuelfree.in/product/productMultiFilter?VehicleType=${vehicleType}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let result = await res.data;
    let brands = await result.searchedProduct;

    setBrandList(brands);
  };

  const [brand, setBrand] = useState("");
  const [productName, setProductName] = useState("");
  const getBrand = async (brand) => {
    setBrand(brand);
    let res = await axios.get(
      `https://app.fuelfree.in/product/productMultiFilter?VehicleType=${vehicleType}&Brand=${brand}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let result = await res.data;
    let brands = await result.searchedProduct;
    setProductName(brands);
  };

  const [firstProduct, setFirst] = useState("");
  const p1_id = firstProduct ? firstProduct._id : null;

  const getFirstProduct = async (productName) => {
    let res = await axios.get(
      `https://app.fuelfree.in/product/productMultiFilter?VehicleType=${vehicleType}&Brand=${brand}&productName=${productName}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let result = await res.data;
    let brands = await result.searchedProduct;
    setFirst(brands[0]);
  };

  //for second product

  const [vehicleType1, setVehicleType1] = useState("");
  const [BrandList1, setBrandList1] = useState("");
  const uniqueBrand1Set = new Set(
    BrandList1 &&
      BrandList1.map((item) => item.Brand.toLowerCase().toUpperCase())
  );
  const uniqueBrand1List = Array.from(uniqueBrand1Set);
  const getVhicleType1 = async (vehicleType) => {
    setVehicleType1(vehicleType);
    let res = await axios.get(
      `https://app.fuelfree.in/product/productMultiFilter?VehicleType=${vehicleType}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let result = await res.data;
    let brands = await result.searchedProduct;
    setBrandList1(brands);
  };

  const [brand1, setBrand1] = useState("");
  const [productName1, setProductName1] = useState("");
  const getBrand1 = async (brand) => {
    setBrand1(brand);
    let res = await axios.get(
      `https://app.fuelfree.in/product/productMultiFilter?VehicleType=${vehicleType1}&Brand=${brand}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let result = await res.data;
    let brands = await result.searchedProduct;
    setProductName1(brands);
  };

  const [secondProduct, setSecond] = useState("");
  const P2_id = secondProduct ? secondProduct._id : undefined;
  const getSecondProduct = async (productName) => {
    let res = await axios.get(
      `https://app.fuelfree.in/product/productMultiFilter?VehicleType=${vehicleType1}&Brand=${brand1}&productName=${productName}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let result = await res.data;
    let brands = await result.searchedProduct;
    setSecond(brands[0]);
  };

  return (
    <div>
      <Header />
      {/* <!-- Breadcrumb row END --> */}
      <div class="section-full p-t50 bg-white content-inner-2 width-percent">
        <div class="container">
          <div className="section-titles">
            <h3>Compare Vehicle</h3>
          </div>

          <div class="row justify-content-center">
            {/* <!-- Side bar start --> */}
            <div class="col-md-3 col-sm-6 m-b30">
              <div class=" bx-style-1 p-a20 text-center compare-cls">
                <div>
                  {firstProduct ? (
                    <img
                      src={`https://app.fuelfree.in/${
                        firstProduct && firstProduct.productImage.length > 0
                          ? firstProduct.productImage[0]
                          : null
                      }`}
                      alt="addvehicle"
                    />
                  ) : (
                    <img src={addvehicle} alt="addvehicle" />
                  )}

                  <h4>{firstProduct?.productName}</h4>
                </div>
                <form>
                  <h4>Select to compare</h4>
                  <div class="input-group m-b20">
                    <select
                      class="form-control"
                      onChange={(e) => getVhicleType(e.target.value)}
                    >
                      <option>-Select vehicleType-</option>
                      {vehicleType1 && vehicleType1 === vehicleType1 ? (
                        <>
                          <option value={vehicleType1}>{vehicleType1}</option>
                        </>
                      ) : (
                        <>
                          <option value="Ev-cars">Ev-cars</option>
                          <option value="Ev-bikes">Ev-bikes</option>
                          <option value="Ev-scooters">Ev-scooters</option>
                          <option value="Ev-cycles">Ev-cycles</option>
                          <option value="Ev-rickshaw">Ev-rickshaw</option>
                          <option value="Ev-loading">Ev-loading</option>
                          <option value="Ev-buses">Ev-buses</option>
                          <option value="E-Logistics">Ev-Logistics</option>
                          <option value="Ev-Luna">Ev-Luna</option>
                        </>
                      )}
                    </select>
                  </div>
                  <div class="input-group m-b20">
                    <select
                      class="form-control"
                      onChange={(e) => getBrand(e.target.value)}
                    >
                      {uniqueBrandList &&
                        uniqueBrandList.map((item) => (
                          <option value={item} key={item}>
                            {item}
                          </option>
                        ))}
                      <option>-Select Brand-</option>
                    </select>
                  </div>
                  <div class="input-group m-b20">
                    <select
                      class="form-control"
                      onChange={(e) => getFirstProduct(e.target.value)}
                    >
                      {productName &&
                        productName.map((data) => (
                          <option value={data.productName} key={data._id}>
                            {data.productName}
                          </option>
                        ))}
                      <option>-Select productName-</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 m-b30">
              <div class=" bx-style-1 p-a20 text-center compare-cls">
                <div>
                  {secondProduct ? (
                    <img
                      src={`https://app.fuelfree.in/${
                        secondProduct && secondProduct.productImage.length > 0
                          ? secondProduct.productImage[0]
                          : null
                      }`}
                      alt="addvehicle"
                    />
                  ) : (
                    <img src={addvehicle} alt="addvehicle" />
                  )}

                  <h4>{secondProduct?.productName}</h4>
                </div>
                <form>
                  <h4>Select to compare</h4>
                  <div class="input-group m-b20">
                    <select
                      class="form-control"
                      onChange={(e) => getVhicleType1(e.target.value)}
                    >
                      <option value={null}>-Select vehicleType-</option>
                      {vehicleType && vehicleType === vehicleType ? (
                        <>
                          <option value={vehicleType}>{vehicleType}</option>
                        </>
                      ) : (
                        <>
                          <option value="Ev-cars">Ev-cars</option>
                          <option value="Ev-bikes">Ev-bikes</option>
                          <option value="Ev-scooters">Ev-scooters</option>
                          <option value="Ev-cycles">Ev-cycles</option>
                          <option value="Ev-rickshaw">Ev-rickshaw</option>
                          <option value="Ev-loading">Ev-loading</option>
                          <option value="Ev-buses">Ev-buses</option>
                          <option value="E-Logistics">Ev-Logistics</option>
                          <option value="Ev-Luna">Ev-Luna</option>
                        </>
                      )}
                    </select>
                  </div>
                  <div class="input-group m-b20">
                    <select
                      class="form-control"
                      onChange={(e) => getBrand1(e.target.value)}
                    >
                      {uniqueBrand1List &&
                        uniqueBrand1List.map((item) => (
                          <option value={item} key={item}>
                            {item}
                          </option>
                        ))}
                      <option>-Select Brand-</option>
                    </select>
                  </div>
                  <div class="input-group m-b20">
                    <select
                      class="form-control"
                      onChange={(e) => getSecondProduct(e.target.value)}
                    >
                      {productName1 &&
                        productName1.map((data) => (
                          <option value={data.productName} key={data._id}>
                            {data.productName}
                          </option>
                        ))}
                      <option value="">-Select productName-</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-12 col-sm-12 text-center ">
              <div class="input-group icon-bx-wraper bx-style-1 p-a20 justify-content-center">
                {p1_id === P2_id ? (
                  <h4>can not compare same Vehicles</h4>
                ) : (
                  <Link
                    class="site-button"
                    to={`/ComparisonMobile/${
                      secondProduct && secondProduct._id
                    }/${firstProduct && firstProduct._id}`}
                  >
                    Compare Now
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Compare;
