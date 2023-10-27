import React, { useState } from "react";
import BackdropPopup from "./BackdropPopup";
import JobFilterMobile from "./JobFilterMobile";

const FilterMobile = ({ jobs, onSearch }) => {
  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
    fullTime: false,
  });
  const [popupVisible, setPopupVisible] = useState(false);

  const showPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const handleSearch = () => {
    const filteredJobs = jobs.filter((job) => {
      // -->Check: position, company and requirments
      const keywordMatch =
        !filters.keyword ||
        job.position.toLowerCase().startsWith(filters.keyword.toLowerCase()) ||
        job.company.toLowerCase().startsWith(filters.keyword.toLowerCase()) ||
        job.requirements.items.some((item) => item.toLowerCase().startsWith(filters.keyword.toLowerCase()));

      // -->Search: based on location
      const locationMatch = !filters.location || job.location.toLowerCase().startsWith(filters.location.toLowerCase());

      // -->Search: based on contract type
      const fullTimeMatch = !filters.fullTime || job.contract === "Full Time";

      return keywordMatch && locationMatch && fullTimeMatch;
    });

    onSearch(filteredJobs);

    setFilters({
      keyword: "",
      location: "",
      fullTime: false,
    });
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: newValue }));
  };

  return (
    <div>
      <JobFilterMobile
        filters={filters}
        onShowPopup={showPopup}
        handleSearch={handleSearch}
        handleInputChange={handleInputChange}
      />
      <BackdropPopup
        filters={filters}
        onSearch={handleSearch}
        isVisible={popupVisible}
        onClosePopup={closePopup}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};

export default FilterMobile;
