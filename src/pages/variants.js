import React, { useState } from "react";
import DescriptionTab from "../pages/desctiptiontab";
import ReviewTab from "../pages/reviewtab";
import VariantsTab from "../pages/varientstab";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <ul className="tabs">
        <li
          className={activeTab === "description" ? "active" : ""}
          onClick={() => handleTabClick("description")}
        >
          Description
        </li>
        <li
          className={activeTab === "review" ? "active" : ""}
          onClick={() => handleTabClick("review")}
        >
          Review
        </li>
        <li
          className={activeTab === "variants" ? "active" : ""}
          onClick={() => handleTabClick("variants")}
        >
          Variants
        </li>
      </ul>
      <div className="tab-content">
        {activeTab === "description" && <DescriptionTab />}
        {activeTab === "review" && <ReviewTab />}
        {activeTab === "variants" && <VariantsTab />}
      </div>
    </div>
  );
};

export default ProductTabs;
