import axios from "axios";
import "./modalBox.css";
import config from "../utils/config";
import React, { useState, useEffect } from "react";

const WalletModalBox = ({ isWalletOpen, closeWalletModal }) => {
  let user = localStorage.getItem("user")
    ?JSON.parse((localStorage.getItem("user"))) 
    : "";
    let uid=user?user._id:''

  let affilaite = localStorage.getItem("affiliateINFO")
    ? (localStorage.getItem("affiliateINFO"))
    : "";
  let points = affilaite ? affilaite.points : "";

  const [userdetails,setuserdetails]=useState('')

  const usrDetails=async()=>{
        let res=await axios.get(`https://app.fuelfree.in/user/details/${uid}`,{
          headers:{
            "Accept":"application/json"
          }
        })
        let data=await res.data
        let details=await data.Details
        setuserdetails(details)
  }
  useEffect(()=>{
      usrDetails()
  },[])

  return (
    <>
      <div className={`modal ${isWalletOpen ? "open" : ""}`}>
        <div className="modal-content">
          <h4 className="modal-heading" style={{ color: "#ce8339" }}>
            Fuelfree Wallet
          </h4>
          <div className="wallet-bln">
            <div>Balance: {userdetails && userdetails.walletBalance}</div>
            <p>
              {points ? <p className="">Affiliate points :- {points}</p> : ""}
            </p>
          </div>
          <div className="modal-btn-open">
            <button className="modal-btn-close" onClick={closeWalletModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletModalBox;
