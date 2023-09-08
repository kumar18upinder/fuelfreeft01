import React, { useState } from "react";

function EMIdesign() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [downPayment, setDownPayment] = useState(0);

  const handleLoanAmountChange = (event) => {
    setLoanAmount(Number(event.target.value));
  };

  const handleInterestRateChange = (event) => {
    setInterestRate(Number(event.target.value));
  };

  const handleLoanTermChange = (event) => {
    setLoanTerm(Number(event.target.value));
  };

  const handleDownPaymentChange = (event) => {
    setDownPayment(Number(event.target.value));
  };

  const handleLoanAmountIncrease = () => {
    setLoanAmount(loanAmount + 1000);
  };

  const handleLoanAmountDecrease = () => {
    if (loanAmount >= 1000) {
      setLoanAmount(loanAmount - 1000);
    }
  };

  const handleDownPaymentIncrease = () => {
    setDownPayment(downPayment + 1000);
  };

  const handleDownPaymentDecrease = () => {
    if (downPayment >= 1000) {
      setDownPayment(downPayment - 1000);
    }
  };

  // Calculate the monthly EMI
  const calculateEMI = () => {
    const principal = loanAmount - downPayment;
    const monthlyInterestRate = interestRate / 1200;
    const termInMonths = loanTerm * 12;
    const emi =
      (principal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, termInMonths)) /
      (Math.pow(1 + monthlyInterestRate, termInMonths) - 1);
    return emi.toFixed(2);
  };

  return (
    <div className="App">
      <h1>EMI Calculator</h1>
      <div>
        <label htmlFor="loanAmount">Loan Amount (in ₹):</label>
        <div>
          <button onClick={handleLoanAmountDecrease}>-</button>
          <input
            type="number"
            id="loanAmount"
            value={loanAmount}
            onChange={handleLoanAmountChange}
          />
          <button onClick={handleLoanAmountIncrease}>+</button>
        </div>
      </div>
      <div>
        <label htmlFor="interestRate">Interest Rate (in %):</label>
        <input
          type="number"
          id="interestRate"
          step="0.01"
          onChange={handleInterestRateChange}
        />
      </div>
      <div>
        <label htmlFor="loanTerm">Loan Term (in years):</label>
        <input type="number" id="loanTerm" onChange={handleLoanTermChange} />
      </div>
      <div>
        <label htmlFor="downPayment">Down Payment (in ₹):</label>
        <div>
          <button onClick={handleDownPaymentDecrease}>-</button>
          <input
            type="number"
            id="downPayment"
            value={downPayment}
            onChange={handleDownPaymentChange}
          />
          <button onClick={handleDownPaymentIncrease}>+</button>
        </div>
      </div>
      <div>
        <p>EMI: ₹{calculateEMI()}</p>
      </div>
    </div>
  );
}

export default EMIdesign;
