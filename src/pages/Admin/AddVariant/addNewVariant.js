import comapreby from ".././component/img/comapre-by.png";
import comapremotercycle from ".././component/img/comapre-moter-cycle.png";
import comaprescooty from ".././component/img/comapre-scooty.png";
import comaprecar from ".././component/img/comapre-car.png";
import comapretruck from ".././component/img/comapre-truck.png";
import comaprebigtruck from ".././component/img/comapre-bigtruck.png";
import comapreauto from ".././component/img/comapre-auto.png";
import comaprebus from ".././component/img/comapre-bus.png";
import { Link } from "react-router-dom";
import './addnewProduct.css'
import SidebarMobile from "../component/sidebarMobile";
import { ToastContainer } from "react-toastify";
import Sidebar from "../component/sidebar";

function AddNewVariant() {
  // const Navigate = useNavigate();

  // const gologinadmin=()=>{
  //   if(!localStorage.getItem('Admin-Info')){
  //         Navigate('/admin')
  //   }
  // }
  // useEffect(()=>{
  //     gologinadmin()
  // },[])

  return (
    <>
     <SidebarMobile />
      <ToastContainer />
      <Sidebar />
    <div id="CompareType">
      <div className="CompareType">
        <div className="tanker">
          <div className="mobile-cotegory-outer">
            <div
              className="mobile-cotegory-content"
              style={{ background: "#cbc2df" }}
            >
              <Link to="/cycle-add"></Link>
              <img src={comapreby} alt="caompre icon"></img>
              <h3>Cycle</h3>
            </div>

            <div
              className="mobile-cotegory-content"
              style={{ background: "#e6bfda" }}
            >
              <Link to="/scooter-add"></Link>
              <img src={comaprescooty} alt="capmare-icon"></img>
              <h3>Scooters</h3>
            </div>

            <div
              className="mobile-cotegory-content"
              style={{ background: "#cbc2df" }}
            >
              <Link to="/bike-add"></Link>
              <img src={comapremotercycle} alt="capmare-icon"></img>
              <h3>Bike</h3>
            </div>

            <div
              className="mobile-cotegory-content"
              style={{ background: "#fdf0c6" }}
            >
              <Link to="/car-add"></Link>
              <img src={comaprecar} alt="capre -icon"></img>
              <h3>Cars</h3>
            </div>

            <div
              className="mobile-cotegory-content"
              style={{ background: "#cbc2df" }}
            >
              <Link to="/loading-add"></Link>
              <img src={comapretruck} alt="capmapre icon"></img>
              <h3>Loading vehicle</h3>
            </div>

            <div
              className="mobile-cotegory-content"
              style={{ background: "#e6bfda" }}
            >
              <Link to="/logistics-add"></Link>
              <img src={comaprebigtruck} alt="capare-icon"></img>
              <h3>Logistics Vehicle</h3>
            </div>

            <div
              className="mobile-cotegory-content"
              style={{ background: "#bfe6c1" }}
            >
              <Link to="/E-auto-add"></Link>
              <img src={comapreauto} alt="capmare-icon"></img>
              <h3> E-auto</h3>
            </div>

            <div
              className="mobile-cotegory-content"
              style={{ background: "#e6c8bf" }}
            >
              <Link to="/bus-add"></Link>
              <img src={comaprebus} alt="comapre icon"></img>
              <h3> Buses</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default AddNewVariant;
