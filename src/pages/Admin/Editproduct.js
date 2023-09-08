import axios from "axios";
import Adminsidebar from "./adminsidebar";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Editproduct({ handleclick }) {
  const [cycleList, setCycleList] = useState({});
  let cycleType = cycleList.List;
  const navigate = useNavigate();

  async function getCycleList() {
    let resultCycle = await axios.get("https://app.fuelfree.in/product/list", {
      headers: {
        Accept: "application/json",
      },
    });
    let cycleData = await resultCycle.data;
    setCycleList(cycleData);
  }

  useEffect(() => {
    getCycleList();
  }, []);

  const [solarlist, setSolarList] = useState({});
  let solarType = solarlist.List;

  async function getSolarList() {
    let resultSolar = await axios.get(
      "https://app.fuelfree.in/solar/allProduct",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let solarData = await resultSolar.data;
    setSolarList(solarData);
  }

  useEffect(() => {
    getSolarList();
  }, []);

  async function deleteProduct(_id) {
    let res = await axios.delete(
      `https://app.fuelfree.in/product/delete/${_id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let result = await res.data;
    window.location.reload();
  }
  async function deleteSolarProduct(_id) {
    let res = await axios.delete(
      `https://app.fuelfree.in/solar/delete/${_id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let result = await res.data;
    window.location.reload();
  }

  //search
  const [filteredList, setFilteredList] = new useState(cycleType);
  const filterBySearch = (event) => {
    const query = event.target.value.toLowerCase();
   console.log(query,'kya')
    const updatedList = cycleType.filter((item) => {
      const vehicleTypeMatch = item.VehicleType.toLowerCase().indexOf(query) !== -1;
      const productNameMatch = item.productName.toLowerCase().indexOf(query) !== -1;
      const productPriceMatch = item.productPrice.toString().toLowerCase().indexOf(query) !== -1;
      const DrivingRangeMatch = item.DrivingRange.toString().toLowerCase().indexOf(query) !== -1;
      const topSpeedMatch = item.topSpeed.toString().toLowerCase().indexOf(query) !== -1;
  
      return productPriceMatch || productNameMatch||vehicleTypeMatch||DrivingRangeMatch||topSpeedMatch;
    });
  
    setFilteredList(updatedList);
  };
  

  const gologinadmin = () => {
    if (!localStorage.getItem("Admin-Info")) {
      navigate("/admin");
    }
  };
  useEffect(() => {
    gologinadmin();
  }, []);


  const updatePrmotion=async(status, _id)=>{
    let res=await axios.patch(`https://app.fuelfree.in/product/priorityEdit/${_id}?priority=${status}`,{
      headers:{
        "Accept":"application/json"
      }
    })
     window.location.reload('')
  }

  return (
    <div id="admin-page-id">
      <Adminsidebar />
      <div className="admin-dashboard">
        <section id="collection-id">
          <div className="page-wallpaper">
            <div className="tanker">
              <div className="bread-crumb">
                <Link to="/">Home</Link>/
                <Link to="/collection">Collection</Link>/
              </div>
            </div>
          </div>
        </section>
        {/* ---------------------------------our cycles------------------------------- */}
        <div id="OUR-CARS">
          <div className="section-title">
            <h3>Edit Product</h3>
            <div className="search-text">Search Product:</div>
            <input
              id="search-box"
              className="form-controle"
              onChange={filterBySearch}
            />
          </div>
          <div className="tanker">
            <div className="OUR-CARS-outer">
              {filteredList ? (
                <>
                  {filteredList &&
                    filteredList.map((data) => (
                      <div className="Carcard" key={data._id}>
                        <img
                          alt="cycle"
                          src={`https://app.fuelfree.in/${data.productImage}`}
                        ></img>
                        <div class="Car-buttons-flex">
                          <h5>{data.productName}</h5>
                          <p>Starting at Rs. {data.productPrice}</p>
                          <p>{data.productName}</p>
                          </div>
                        <div class="Cartitle">
                          <Link
                            class="view-offer-a"
                            onClick={() => deleteProduct(data._id)}
                          >
                            Delete 
                          </Link>
                          <Link to={`/update/${data._id}`} class="view-offer-a">
                            Update {" "}
                          </Link>
                          {data.VehicleType === "Ev-scooters" ? (
                            <Link
                              to={`/add-scooter-variant/${data._id}`}
                              class="view-offer-a"
                            >
                              Add Variant
                            </Link>
                          ) : (
                            ""
                          )}
                          {data.VehicleType === "Ev-bikes" ? (
                            <Link
                              to={`/bike-variant-add/${data._id}`}
                              class="view-offer-a"
                            >
                              Add Variant
                            </Link>
                          ) : (
                            ""
                          )}
                          {data.VehicleType === "Ev-rickshaw" ? (
                            <Link
                              to={`/add-auto-variant/${data._id}`}
                              class="view-offer-a"
                            >
                              Add Variant
                            </Link>
                          ) : (
                            ""
                          )}
                          {data.VehicleType === "Ev-cars" ? (
                            <Link
                              to={`/add-car-variant/${data._id}`}
                              class="view-offer-a"
                            >
                              Add Variant
                            </Link>
                          ) : (
                            ""
                          )}
                          {data.VehicleType === "Ev-loading" ? (
                            <Link
                              to={`/add-loading-variant/${data._id}`}
                              class="view-offer-a"
                            >
                              Add Variant
                            </Link>
                          ) : (
                            ""
                          )}
                          {data.VehicleType === "Ev-cycles" ? (
                            <Link
                              to={`/add-cycle-variant/${data._id}`}
                              class="view-offer-a"
                            >
                              Add Variant
                            </Link>
                          ) : (
                            ""
                          )}
                          {data.VehicleType === "Ev-buses" ? (
                            <Link
                              to={`/add-bus-variant/${data._id}`}
                              class="view-offer-a"
                            >
                              Add Variant
                            </Link>
                          ) : (
                            ""
                          )}
                          {data.VehicleType === "Ev-logistics" ? (
                            <Link
                              to={`/add-logistics-variant/${data._id}`}
                              class="view-offer-a"
                            >
                              Add Variant
                            </Link>
                          ) : (
                            ""
                          )}
                          {data.VehicleType === "Ev-Luna" ? (
                            <Link
                              to={`/add-luna-variant/${data._id}`}
                              class="view-offer-a"
                            >
                              Add Variant
                            </Link>
                          ) : (
                            ""
                          )}
                          {data.priority === 0 ? (
                            <Link
                            onClick={()=>updatePrmotion(1,data._id)}
                              class="view-offer-a"
                            >
                            Add Priority
                            </Link>
                          ) : (
                            <>
                            <Link
                            onClick={()=>updatePrmotion(0,data._id)}
                              class="view-offer-a"
                            >
                            Remove Priority
                            </Link>
                            <Link
                            class="view-offer-a"
                          >
                            Pramoted
                          </Link>
                          </>
                          )}
                        </div>
                      </div>
                    ))}
                </>
              ) : (
                <>
                  {cycleType &&
                    cycleType.map((data) => (
                      <div class="Carcard" key={data._id}>
                        <img
                          alt="cycle"
                          src={`https://app.fuelfree.in/${data.productImage}`}
                        ></img>
                        <div class="Cartitle">
                          <h5>{data.productName}</h5>
                          <p>Starting at Rs. {data.productPrice}</p>
                          <p>{data.productName}</p>
                          </div>
                        <div class="Car-buttons-flex">
                          <Link
                            class="view-offer-a"
                            onClick={() => deleteProduct(data._id)}
                          >
                            Delete Product
                          </Link>
                          <Link to={`/update/${data._id}`} class="view-offer-a">
                            Update product{" "}
                          </Link>
                          {data.VehicleType === "Ev-scooters" ? (
                            <Link
                              to={`/add-scooter-variant/${data._id}`}
                              class="view-offer-a"
                            >
                              Add Variant
                            </Link>
                          ) : (
                            ""
                          )}
                          {data.VehicleType === "Ev-bikes" ? (
                            <Link
                              to={`/bike-variant-add/${data._id}`}
                              class="view-offer-a"
                            >
                              Add Variant
                            </Link>
                          ) : (
                            ""
                          )}
                          {data.VehicleType === "Ev-rickshaw" ? (
                            <Link
                              to={`/add-auto-variant/${data._id}`}
                              class="view-offer-a"
                            >
                              Add Variant
                            </Link>
                          ) : (
                            ""
                          )}
                          {data.VehicleType === "Ev-cars" ? (
                            <Link
                              to={`/add-car-variant/${data._id}`}
                              class="view-offer-a"
                            >
                              Add Variant
                            </Link>
                          ) : (
                            ""
                          )}
                          {data.VehicleType === "Ev-loading" ? (
                            <Link
                              to={`/add-loading-variant/${data._id}`}
                              class="view-offer-a"
                            >
                              Add Variant
                            </Link>
                          ) : (
                            ""
                          )}
                          {data.VehicleType === "Ev-cycles" ? (
                            <Link
                              to={`/add-cycle-variant/${data._id}`}
                              class="view-offer-a"
                            >
                              Add Variant
                            </Link>
                          ) : (
                            ""
                          )}
                          {data.VehicleType === "Ev-buses" ? (
                            <Link
                              to={`/add-bus-variant/${data._id}`}
                              class="view-offer-a"
                            >
                              Add Variant
                            </Link>
                          ) : (
                            ""
                          )}
                          {data.VehicleType === "Ev-logistics" ? (
                            <Link
                              to={`/add-logistics-variant/${data._id}`}
                              class="view-offer-a"
                            >
                              Add Variant
                            </Link>
                          ) : (
                            ""
                          )}
                          {data.VehicleType === "Ev-Luna" ? (
                            <Link
                              to={`/add-luna-variant/${data._id}`}
                              class="view-offer-a"
                            >
                              Add Variant
                            </Link>
                          ) : (
                            ""
                          )}
                           {data.priority === 0 ? (
                            <Link
                            onClick={()=>updatePrmotion(1,data._id)}
                              class="view-offer-a"
                            >
                            Add Priority
                            </Link>
                          ) : (
                            <>
                            <Link
                            onClick={()=>updatePrmotion(0,data._id)}
                              class="view-offer-a"
                            >
                            Remove Priority
                            </Link>
                            <Link
                            class="view-offer-a"
                          >
                            Pramoted
                          </Link>
                          </>
                          )}
                        </div>
                      </div>
                    ))}
                  {solarType &&
                    solarType.map((data) => (
                      <div class="Carcard" key={data._id}>
                        <img
                          alt={`${data.productName} image`}
                          src={`https://app.fuelfree.in/${data.productImage}`}
                        />

                        <div class="Cartitle">
                          <h5>{data.productName}</h5>
                          <p>Starting at Rs. {data.productPrice}</p>
                          </div>
                        <div class="Cartitle">
                          <Link
                            class="view-offer-a"
                            onClick={() => deleteSolarProduct(data._id)}
                          >
                            Delete Product
                          </Link>
                          {data.VehicleType === "solar" ? (
                            <Link
                              to={`/solar-update-product/${data._id}`}
                              class="view-offer-a"
                            >
                              Update Product
                            </Link>
                          ) : (
                            ""
                          )}
                          {data.VehicleType === "solar" ? (
                            <Link
                              to={`/add-solar-variant/${data._id}`}
                              class="view-offer-a"
                            >
                              Add Variant
                            </Link>
                          ) : (
                            ""
                          )}
                           {data.priority === 0 ? (
                            <Link
                            onClick={()=>updatePrmotion(1,data._id)}
                              class="view-offer-a"
                            >
                            Add Priority
                            </Link>
                          ) : (
                            <>
                            <Link
                            onClick={()=>updatePrmotion(0,data._id)}
                              class="view-offer-a"
                            >
                            Remove Priority
                            </Link>
                            <Link
                            class="view-offer-a"
                          >
                            Pramoted
                          </Link>
                          </>
                          )}
                        </div>
                      </div>
                    ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editproduct;
