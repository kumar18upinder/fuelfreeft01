import { Link } from "react-router-dom";
import logo from "../../pages/images/logo.png";
import { useNavigate } from "react-router-dom";

function Adminsidebar() {
  const navigate = useNavigate();
  let AdminInfo = localStorage.getItem("Admin-Info")
    ? JSON.parse(localStorage.getItem("Admin-Info"))
    : null;
  let AdminName = AdminInfo && AdminInfo.adminName;
  const handleLogout = () => {
    setTimeout(() => {
      localStorage.removeItem("Admin-Info");
      navigate("/admin");
    }, 1000);
  };

  return (
    <>
      <div className="admin-side-bar">
        <div className="admin-side-bar-inner">
          <div className="admin-logo">
            <Link to="/">
              <img src={logo} alt="Fuelfree logo"></img>
            </Link>
          </div>
          <ul className="admin-sidebar-links">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/Adminaddproductcategory">Add New Product</Link>
            </li>
            <li>
              <Link to="/fuelfree-addreel">Add New Reel</Link>
            </li>
            <li>
              <Link to="/Editproduct">Product List</Link>
            </li>
            <li>
              <Link to="/usedvehicleApproval">Used Vehicle Approval</Link>
            </li>
            <li>
              <Link to="/amindeler">Ev agency Dealers</Link>
            </li>
            <li>
              <Link to="/paid-vendor-list">Paid Dealers</Link>
            </li>
            <li>
              <Link to="/adminchargingstation">Charging Dealer</Link>
            </li>

            <li>
              <Link to="/adminservicecenter">Service center</Link>
            </li>

            <li>
              <Link to="/admin-leads">Leads Form</Link>
            </li>

            <li>
              <Link to="/userList">UserList</Link>
            </li>
            <li>
              <Link to="/adminwishlist">Wishlist</Link>
            </li>
            <li>
              <Link to="/adminvarientlist">Variant List</Link>
            </li>
            <li>
              <Link to="/enquiryadmin">Enquiry data</Link>
            </li>
            <li>
              <Link to="/consultationadmin">Consultation</Link>
            </li>
            <li>
              <Link to="/newsletter">Subscribe NewsLetter</Link>
            </li>
            <li>
              <Link to="/Admintestdrive">All Testdrive</Link>
            </li>
            <li>
              <Link to="/totalchargingbookings">All Charging Booking</Link>
            </li>
            <li>
              <Link to="/totalbookingsAdmin">Total product Bookings</Link>
            </li>
            <li>
              <Link to="/testdriveform"> Testdrive Form</Link>
            </li>

            <li>
              <Link to="/adminoffer">Offers Form</Link>
            </li>
            <li>
              <Link to="/adminofferlist">Offers List</Link>
            </li>
            <li>
              <Link to="/marketing-approve">Marketing Walllah</Link>
            </li>
            <li>
              <Link to="/admin-rental-vehicle-list">Rental Vehicle List</Link>
            </li>
            <li>
              <Link to="/admin-rental-vehicle-vendor">Rental Vehicle Vendor</Link>
            </li>
            <li>
              <Link to="/admin-rental-vehicle-booking">Rental Vehicle BookingList</Link>
            </li>
            <li>
              <Link to="/adminnews">News form</Link>
            </li>
            <li>
              <Link to="/news-list-admin">News List</Link>
            </li>
            <li>
              <Link to="/news-list-admin">News List</Link>
            </li>
          </ul>
        </div>
        <div className="admin-topbar">
          <div className="admin-topbar-outer">
            <div className="admin-topbar-links">
              <div className="admin-logout-div">
                <h5>Admin Name:{AdminName}</h5>
                <Link onClick={handleLogout}>Logout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="admin-bg-div"></div>
    </>
  );
}

export default Adminsidebar;
