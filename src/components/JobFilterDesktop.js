import React, { useState } from "react";

const JobFilterDesktop = ({ jobs, onSearch }) => {
  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
    fullTime: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: newValue }));
  };

  const handleSearch = () => {
    const filteredJobs = jobs.filter((job) => {
      // -->Check: position, company and requirments
      const keywordMatch =
        !filters.keyword ||
        job.position.toLowerCase().startsWith(filters.keyword.toLowerCase()) ||
        job.company.toLowerCase().startsWith(filters.keyword.toLowerCase()) ||
        job.requirements.items.some((item) =>
          item.toLowerCase().startsWith(filters.keyword.toLowerCase())
        );

      // -->Search: based on location
      const locationMatch =
        !filters.location ||
        job.location.toLowerCase().startsWith(filters.location.toLowerCase());

      // -->Search: based on contract type
      const fullTimeMatch = !filters.fullTime || job.contract === "Full Time";

      return keywordMatch && locationMatch && fullTimeMatch;
    });

    onSearch(filteredJobs);
  };

  // -->When: the user presses the key enter, we whant to execute the search
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="filter-desktop">
      <div className="search">
        <img
          className="icon-search"
          src="assets/desktop/icon-search.svg"
          alt=""
        />
        <input
          onKeyUp={handleKeyPress}
          name="keyword"
          value={filters.keyword}
          onChange={handleInputChange}
          className="input-search bg-secondary-100 fs-200"
          type="text"
          placeholder="Filter by title, companies, expertise..."
        />
      </div>
      <div className="location">
        <img
          className="icon-location"
          src="assets/desktop/icon-location.svg"
          alt=""
        />
        <input
          onKeyUp={handleKeyPress}
          name="location"
          value={filters.location}
          onChange={handleInputChange}
          className="input-location bg-secondary-100 fs-200"
          type="text"
          placeholder="Filter by location..."
        />
      </div>
      <div className="checkbox-container">
        <input
          className="checkbox"
          name="fullTime"
          checked={filters.fullTime}
          onChange={handleInputChange}
          id="checkbox"
          type="checkbox"
        />
        <label
          htmlFor="checkbox"
          className="subtitle-checkbox text-primary-300 fs-200 fw-bold"
        >
          Full Time Only
        </label>
        <button
          className="btn-search text-secondary-100 bg-primary-100 fs-200 fw-bold"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default JobFilterDesktop;
