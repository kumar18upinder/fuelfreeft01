import { Link, useNavigate } from "react-router-dom";
import Header from "../.././components/header";
import Footer from "../.././components/footer";
import { useState, useEffect } from "react";
import axios from "axios";
import loading from "../../pages/images/loading-new-banner.jpeg";
import loadingBG from "../../pages/images/loadingBG.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminLoadingList({ handleclick }) {
  const navigate = useNavigate();
  const userd = JSON.parse(localStorage.getItem("user"));
  const [fromPrice, setFromPrice] = useState(1000);
  const [toPrice, setToPrice] = useState(500000);

  const id = userd ? userd._id : "";

  const Handleclick = (data) => {
    handleclick(data);
  };
  const [cycleList, setCycleList] = useState({});
  let cycleType = cycleList.type;

  async function getCycleList() {
    let resultCycle = await axios.get(
      "https://app.fuelfree.in/product/loading",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let cycleData = await resultCycle.data;
    cycleData.type = cycleData.type.filter(
      (item) => item.productPrice > fromPrice && item.productPrice < toPrice
    );
    setCycleList(cycleData);
  }

  useEffect(() => {
    getCycleList();
  }, [fromPrice, toPrice]);

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
      console.log(response, "ddd");
      if (response.success === "success") {
        toast.success(response.message);
      } else {
        toast.error("already in favoriteList");
      }
    } catch (error) {
      toast.error("already in favoriteList");
    }
  }; 
  
  //for search====
  const [filteredList, setFilteredList] = new useState(cycleType);
  const filterBySearch = (event) => {
    const query = event.target.value;
    var updatedList = [...cycleType];
    updatedList = updatedList.filter((item) => {
      return item.address.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredList(updatedList);
  };
  const filter = (event) => {
    const query = event.target.value;
    var updatedList = [...cycleType];
    updatedList = updatedList.filter((item) => {
      return item.address.toLowerCase().indexOf(query.toLowerCase()) !== 1;
    });
    setFilteredList(updatedList);
  };

  return (
    <div>
      <Header />
      <ToastContainer />
      <section id="collection-id">
        <img src={loading} alt="bycycle"></img>
        <div className="collection-id-upper">
          <h1>ELECTRIC LOADINGS</h1>
          <p>#switchtoev</p>
        </div>
        <div className="page-wallpaper">
          <div className="tanker">
            <div className="bread-crumb">
              <Link to="/">Home</Link>/<Link to="/collection">Collection</Link>/
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------our cycles------------------------------- */}
      <div id="OUR-CARS">
        <div className="cotegotry-overlay-background">
          <div
            className="cotegory-first-image"
            style={{ backgroundImage: `url(${loadingBG})` }}
          ></div>
          <div
            id="cotegory-secand-image"
            style={{ backgroundImage: `url(${loadingBG})` }}
          >
            <span></span>
          </div>
          <div  id="cotegory-third-image" style={{backgroundImage: `url(${loadingBG})`, }}></div>
        </div>
        <div class="mobile-section-headfing">
          <span></span>
          <h3>EV-Loading</h3>
          <span></span>
        </div>
        <div className="tanker">
          <div className="OUR-CARS-outer">
            {cycleType &&
              cycleType.map((data) => (
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
                  ></img>

                  <div class="Cartitle">
                    <h5>{data.productName}</h5>
                    <p>Starting at Rs. {data.productPrice}</p>
                    <Link
                      to={`/products/${data.productName}/${data._id}/${data.VehicleType}`}
                      class="view-offer-a"
                    >
                      View-offer
                    </Link>
                      <Link
                        // to={`/semifinalCompare/${data._id}`}
                        class="view-offer-a"
                      >
                        Edit Product 
                      </Link>
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

export default AdminLoadingList;
