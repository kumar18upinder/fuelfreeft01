import { useEffect } from "react";
import Adminsidebar from "../Admin/adminsidebar";
import comapreby from "../images/comapre-by.png";
import comaprecar from "../images/comapre-car.png";
import comaprebus from "../images/comapre-bus.png";
import { Link, useNavigate } from "react-router-dom";
import comapreauto from "../images/comapre-auto.png";
import comapretruck from "../images/comapre-truck.png";
import comaprescooty from "../images/comapre-scooty.png";
import comaprebigtruck from "../images/comapre-bigtruck.png";
import comapremotercycle from "../images/comapre-moter-cycle.png";


function AddNewProd() {
  const Navigate = useNavigate();

  const gologinadmin=()=>{
    if(!localStorage.getItem('Admin-Info')){
          Navigate('/admin')
    }
  }
  useEffect(()=>{
      gologinadmin()
  },[])

  return (
    <div id="CompareType">
      <Adminsidebar/>
      <div className="CompareType">
        <div className="tanker">
          <div className="mobile-cotegory-outer">
          <h3 className="add-new-vehicle" style={{width:"100%"}}>Add New Vehicle</h3>
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
              style={{ background: "#e6bfda" }}
            >
              <Link to="/add-luna"></Link>
              <img src={comaprescooty} alt="capmare-icon"></img>
              <h3>Luna</h3>
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
              <Link to="/auto-add"></Link>
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
            <div
              className="mobile-cotegory-content"
              style={{ background: "#fdf0c6" }}
            >
              <Link to="/solar-add"></Link>
              <img src={comaprecar} alt="capre -icon"></img>
              <h3>Solar</h3>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
}

export default AddNewProd;
