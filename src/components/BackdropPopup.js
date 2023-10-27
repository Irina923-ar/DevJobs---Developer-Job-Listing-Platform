import React, { useState } from "react";

const BackdropPopup = ({ isVisible, onClosePopup, filters, onSearch }) => {
  const [location, setLocation] = useState("");

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handlePopupSearch = () => {
    // Update the filters object with the new location
    const updatedFilters = { ...filters, location };
    // Call the onSearch function with updated filters
    onSearch(updatedFilters);
    // Close the popup
    onClosePopup();
  };

  console.log(onSearch);

  return (
    <div
      onClick={onClosePopup}
      className={`backdrop-popup ${isVisible ? "visible" : ""}`}
      style={{ display: isVisible ? "block" : "none" }}
    >
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="location">
          <img
            className="icon-location"
            src="assets/desktop/icon-location.svg"
            alt=""
          />
          <input
            name="location"
            className="input-location"
            type="text"
            placeholder="Filter by location..."
            value={location}
            onChange={handleLocationChange}
          />
        </div>
        <div className="checkbox-container">
          <input
            name="checkbox"
            className="checkbox"
            type="checkbox"
            id="checkboxMobile"
          />
          <label htmlFor="checkboxMobile" className="subtitle-checkbox">
            Full Time Only
          </label>
        </div>
        <button
          className="btn-search btn-search-filter"
          onClick={handlePopupSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default BackdropPopup;
