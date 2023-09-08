import "./admin.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Admin() {
  const navigate = useNavigate();

  const [adminEmail, setAdminName] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const handleAdminLogin = async () => {

    const adminData = { adminEmail, adminPassword };

    let response = await axios.post(
      `https://app.fuelfree.in/admin/login`,
      adminData,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    let result = await response.data;
    let Admin = result.admin_details;

    console.log(result);
    if (result.success === "success") {
      localStorage.setItem("Admin-Info", JSON.stringify(Admin));
      toast.success(result.message);

      wheretogo();
    } else {
      toast.error(result.error);
    }
  };
  const wheretogo = () => {
    setTimeout(() => {
      navigate("/Dashboard");
    }, 3000);
  };

  return (
    <div id="admin-page-id" style={{ display: "block" }}>
      <ToastContainer />
      <h5 className="admin-heading">Login</h5>
      <div id="admin-login">
        <input
          name="userid"
          placeholder="Username"
          type="text"
          value={adminEmail}
          onChange={(e) => setAdminName(e.target.value)}
        ></input>
        <input
          name="Password"
          placeholder="Password"
          type="password"
          value={adminPassword}
          onChange={(e) => setAdminPassword(e.target.value)}
        ></input>
        <div className="admin-login-btn">
          <button
            className="submit-main-btn-login-admin"
            onClick={handleAdminLogin}
          >
            Submit
          </button>
        </div>
        <Link className="admin-registraion-btn" to="/adminregistration">
          Resigistraion form
        </Link>
      </div>
    </div>
  );
}
export default Admin;
