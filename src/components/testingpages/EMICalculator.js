import "./EMICalculator.css";
import React, { useState } from "react";
import ODYSSEEVOQIS from "../testingpages/ODYSSEEVOQIS.jpg";

function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(149999);
  const [interestRate, setInterestRate] = useState(10);
  const [loanTenure, setLoanTenure] = useState(12);
  const [monthlyEMI, setMonthlyEMI] = useState(0);

  const handleLoanAmountIncrease = () => {
    setLoanAmount(loanAmount + 500);
  };

  const handleLoanAmountDecrease = () => {
    if (loanAmount > 500) {
      setLoanAmount(loanAmount - 500);
    }
  };

  const handleInterestRateIncrease = () => {
    setInterestRate(interestRate + 0.5);
  };

  const handleInterestRateDecrease = () => {
    if (interestRate > 0.5) {
      setInterestRate(interestRate - 0.5);
    }
  };

  const handleLoanTenureIncrease = () => {
    setLoanTenure(loanTenure + 1);
  };

  const handleLoanTenureDecrease = () => {
    if (loanTenure > 1) {
      setLoanTenure(loanTenure - 1);
    }
  };

  const calculateEMI = () => {
    const r = interestRate / (12 * 100);
    const n = loanTenure;
    const p = loanAmount;
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setMonthlyEMI(emi.toFixed(2));
  };

  return (
    <>
    <div className="tanker">
    <div>
        <div>
            <img className="img-one-emi-calc" src={ODYSSEEVOQIS} alt="Your Product"></img>
            <h3 className="price-showroom-one">Showroom Price</h3>
            <h1 className="price-showroom-Two">₹ 1,49,999</h1>
        </div>
    <div className="emi-calculator">
      <div className="emi-inputs">
        <div className="emi-input">
          <label htmlFor="loanAmount">Loan Amount</label>
          <div className="scroll-button">
            <button onClick={handleLoanAmountDecrease}>-</button>
            <span>{`₹${loanAmount.toLocaleString()}`}</span>
            <button onClick={handleLoanAmountIncrease}>+</button>
          </div>
        </div>
        <div className="emi-input">
          <label htmlFor="interestRate">Interest Rate</label>
          <div className="scroll-button">
            <button onClick={handleInterestRateDecrease}>-</button>
            <span>{`${interestRate}%`}</span>
            <button onClick={handleInterestRateIncrease}>+</button>
          </div>
        </div>
        <div className="emi-input">
          <label htmlFor="loanTenure">Loan Tenure (in months)</label>
          <div className="scroll-button">
            <button onClick={handleLoanTenureDecrease}>-</button>
            <span>{loanTenure}</span>
            <button onClick={handleLoanTenureIncrease}>+</button>
          </div>
        </div>
      </div>
      <div className="emi-results">
        <button onClick={calculateEMI}>Calculate EMI</button>
        <div className="emi-result">
          <label>Monthly EMI:</label>
          <span>{`₹${monthlyEMI}`}</span>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default EMICalculator;
