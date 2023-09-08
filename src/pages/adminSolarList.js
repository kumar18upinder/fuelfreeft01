import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import solar from "../pages/images/solar.png";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import solar_banner from "../pages/images/solar_banner.png";
import { toast, ToastContainer } from "react-toastify";

function AdminSolarList({ handleclick }) {
  const navigate = useNavigate();
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

  //for add favorite please login
  let goTologin = () => {
    toast.warning("Please Login");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
    return { _id: null };
  };

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : NaN;

  let uid = user._id;

  const setId = async (productID) => {
    let pId = productID;
    let userid = uid ? uid : goTologin();
    try {
      let Addtofavorite = await axios.post(
        `https://app.fuelfree.in/favorite/add/${userid}/${pId}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      let response = await Addtofavorite.data;
      if (response.success === "success") {
        toast.success(response.message);
      } else {
        toast.error("already in favoriteList");
      }
    } catch (error) {
      toast.error("already in favoriteList");
    }
  };

  return (
    <div>
      <Header />
      <ToastContainer />
      <section id="collection-id">
        <img src={solar_banner} alt="bycycle"></img>
        <div className="collection-id-upper">
          <h1>SOLAR VEHICLE</h1>
        </div>
        <div className="page-wallpaper">
          <div className="tanker">
            <div className="bread-crumb">
              <Link to="/">Home</Link>/<Link to="/collection">Collection</Link>/
            </div>
          </div>
        </div>
      </section>
      {/* ---------------------------------our cars------------------------------- */}
      <div id="OUR-CARS">
        <div class="mobile-section-headfing">
          <span></span>
          <h3>Solar Vehicle</h3>
          <span></span>
        </div>
        <div className="tanker">
          <div className="OUR-CARS-outer">
            <div className="cotegotry-overlay-background">
              <div
                className="cotegory-first-image"
                style={{ backgroundImage: `url(${solar})` }}
              ></div>
              <div
                id="cotegory-secand-image"
                style={{ backgroundImage: `url(${solar})` }}
              >
                <span></span>
              </div>
            </div>

            {solarType &&
              solarType.map((data) => (
                <div class="Carcard" key={data._id}>
                  <Link
                    onClick={() => setId(data._id)}
                    className="favrate-butn"
                    title="Add to favorite"
                  >
                    <i class="fa fa-heart"></i>
                  </Link>
                  <img
                    alt={`${data.productName} image`}
                    src={`https://app.fuelfree.in/${data.productImage}`}
                  />

                  <div class="Cartitle">
                    <h5>{data.productName}</h5>
                    <p>Starting at Rs. {data.productPrice}</p>
                    <Link
                      to={`/solar-product-details/${data._id}`}
                      class="view-offer-a"
                    >
                      View-offer
                    </Link>
                    {localStorage.getItem("product") ? (
                      <Link
                        to={`/semifinalCompare/${data._id}`}
                        class="view-offer-a"
                      >
                        Compare Now
                      </Link>
                    ) : (
                      <Link
                        to={`/semifinalCompare/:id`}
                        class="view-offer-a"
                        onClick={() => handleclick(data)}
                      >
                        Compare Now
                      </Link>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminSolarList;
