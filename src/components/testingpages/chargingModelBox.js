import ".././modalBox.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Select from 'react-select'

const ChargingModelBox = ({isOpen, closeModal}) => {
    const handleSubmit = () => {
        closeModal();
      };
      const options = [
        { value: 'Indore', label: 'Indore' },
        { value: 'Bhopal', label: 'Bhopal' },
        { value: 'gwalior', label: 'gwalior' },
        { value: 'jabalpur', label: 'jabalpur' },
        { value: 'surat', label: 'surat' },
        { value: 'Dewas', label: 'Dewas' },
        { value: 'Ujjain', label: 'Ujjain' },
        { value: 'Vidisha', label: 'Vidisha' },
        { value: 'Sehore', label: 'Sehore' },
        { value: 'Rajgarh', label: 'Rajgarh' },
      ];
      const [selectedOption, setSelectedOption] = useState(null);
      const setcity=(selectedOption)=>{
        setSelectedOption(selectedOption.value);
      }
  
  return (
    <>
      <div className={`modal ${isOpen ? "open" : ""}`}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <h3 className="modal-heading">Find Dealer in your City</h3>
            <Select
        defaultValue={selectedOption}
        onChange={setcity}
        required
        options={options}
      />
          <div className="modal-btn-open">
            <Link
              to={`/near-by-charging-station/${selectedOption}`}
              className="modal-btn-close"
              onClick={handleSubmit}
            >
              Submit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChargingModelBox;