import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect } from "react";

function Affiliaterefferalcode() {
  let affiliatdata = localStorage.getItem("affiliateINFO")
    ? JSON.parse(localStorage.getItem("affiliateINFO"))
    : "";
  let reffrel = affiliatdata.referralCode;


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Header />
      <div className="affiliate-code">
        <h3 className="heading-affiliate-code-page">Welcome To Fuelfree</h3>
        <p className="pera-affiliate-code-page">
          Thankyou For Register With fuelfree Your Refferal Code is :-
        </p>
        <p className="code-affiliate-code-page">{reffrel}</p>
      </div>
      <Footer />
    </>
  );
}

export default Affiliaterefferalcode;
