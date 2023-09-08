import "../Admin/admin.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function  MarketingSecurityGate() {

  const navigate = useNavigate();
  const [userEmail, setAdminName] = useState("");
  const handleAdminLogin = async () => {
     let quiry=userEmail
     if('harish'==quiry){
        wheretogo()
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
          placeholder="Enter PassCode"
          type="text"
          value={userEmail}
          onChange={(e) => setAdminName(e.target.value)}
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
export default MarketingSecurityGate;

