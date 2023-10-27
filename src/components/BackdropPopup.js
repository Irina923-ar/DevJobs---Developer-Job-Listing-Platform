import React from "react";

const BackdropPopup = ({ isVisible, onClosePopup, filters, onSearch, handleInputChange }) => {
  const handlePopupSearch = () => {
    // Update the filters object with the new location
    // const updatedFilters = { ...filters };
    // console.log(filters);
    // Call the onSearch function with updated filters
    onSearch(filters);
    // Close the popup
    onClosePopup();
  };

  return (
    <div
      onClick={onClosePopup}
      className={`backdrop-popup ${isVisible ? "visible" : ""}`}
      style={{ display: isVisible ? "block" : "none" }}
    >
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="location">
          <img className="icon-location" src="assets/desktop/icon-location.svg" alt="" />
          <input
            name="location"
            className="input-location"
            type="text"
            placeholder="Filter by location..."
            value={filters.value}
            onChange={handleInputChange}
          />
        </div>
        <div className="checkbox-container">
          <input
            className="checkbox"
            name="fullTime"
            checked={filters.fullTime}
            onChange={handleInputChange}
            type="checkbox"
          />
          <label htmlFor="checkboxMobile" className="subtitle-checkbox">
            Full Time Only
          </label>
        </div>
        <button className="btn-search btn-search-filter" onClick={handlePopupSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default BackdropPopup;
