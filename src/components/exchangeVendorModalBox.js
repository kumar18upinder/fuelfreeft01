import "./modalBox.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import indoreImage from '../pages/images/indore-city.jpeg';
import bhopalImage from '../pages/images/bhopal-city.jpeg';
import gwaliorImage from '../pages/images/gwalior-city.jpeg';
import jabalpurImage from '../pages/images/jabalpur-city.jpeg';
import sehoreImage from '../pages/images/sehore-city.jpeg';
import rajgarhImage from '../pages/images/rajgarh-city.jpeg';
import ujjainImage from '../pages/images/ujjain-city.jpeg';
import dewasImage from '../pages/images/dewas-city.jpeg';
import vidishaImage from '../pages/images/vidisha-city.jpeg';


const ExchangeVendorModalBox = ({ isOpen, closeModal }) => {
  const Navigate = useNavigate();

  const options = [
    { value: 'Indore', label: 'Indore', image: indoreImage },
    { value: 'Bhopal', label: 'Bhopal', image: bhopalImage },
    { value: 'gwalior', label: 'Gwalior', image: gwaliorImage },
    { value: 'jabalpur', label: 'Jabalpur', image: jabalpurImage },
    { value: 'Sehore', label: 'Sehore', image: sehoreImage },
    { value: 'Rajgarh', label: 'Rajgarh', image: rajgarhImage },
    { value: "Ujjain", label: "Ujjain", image: ujjainImage },
    { value: "Dewas", label: "Dewas", image: dewasImage },
    { value: "Vidisha", label: "Vidisha", image: vidishaImage },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    closeModal();
    Navigate(`/near-by-exchange-vendor-in/${option.value}`);
    window.location.reload()
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter options based on searchQuery
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className={`modal ${isOpen ? "open" : ""}`}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <h3 className="modal-heading">Find Exchange Dealer in your City</h3>
          <div className="search-input">
            <input
              type="text"
              placeholder="Search city..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <div className="custom-dropdown">
            {filteredOptions.map((option) => (
              <div
                key={option.value}
                className={`dropdown-option ${
                  selectedOption && selectedOption.value === option.value
                    ? "selected"
                    : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                <img
                  src={option.image}
                  alt={option.label}
                  className="option-image"
                />
                <span className="option-label">{option.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExchangeVendorModalBox;