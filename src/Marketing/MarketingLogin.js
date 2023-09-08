import "../Admin/admin.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function  MarketingLogin() {
  const navigate = useNavigate();

  const [userEmail, setAdminName] = useState("");
  const [userPassword, setAdminPassword] = useState("");
  const handleAdminLogin = async () => {

    const  MarketingData = { userEmail, userPassword };

    let response = await axios.post(
      `https://app.fuelfree.in/user/signin`,
      MarketingData,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    let result = await response.data;
    if (result.success === "success") {
      let Admin = result.user_details;
      localStorage.setItem("Marketing-Info", JSON.stringify(Admin));
      toast.success(result.message);
      wheretogo();
    } else {
      toast.error(result.error);
    }
  };
  const wheretogo = () => {
    setTimeout(() => {
      navigate("/marketing-dealer-list");
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
          value={userEmail}
          onChange={(e) => setAdminName(e.target.value)}
        ></input>
        <input
          name="Password"
          placeholder="Password"
          type="password"
          value={userPassword}
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
      </div>
    </div>
  );
}
export default MarketingLogin;
