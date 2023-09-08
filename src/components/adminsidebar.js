import { Link } from "react-router-dom";
import logo from "../pages/images/logo.png";

function Adminsidebar() {
  return (
    <div className="admin-side-bar">
      <div className="admin-side-bar-inner">
        <div className="admin-logo">
          <Link to="/">
            <img src={logo} alt="Fuelfree logo"></img>
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/addproduct">Add Product</Link>
          </li>
          <li>
            <Link to="/admindealerlist">vender List</Link>
            <ul className="admin-submenu">
              <li>
                <Link to="/">manifarature</Link>
              </li>
              <li>
                <Link to="/">dealer</Link>
              </li>
              <li>
                <Link>service center</Link>
              </li>
              <li>
                <Link>Charging station</Link>
              </li>
            </ul>
            
          </li>
          <li>
            <Link to="/leadgeneration">Lead Genration</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Adminsidebar;
