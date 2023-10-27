import React, { useState } from 'react';


const JobFilterMobile = ({ jobs, onSearch, onShowPopup}) => {
  const [filters, setFilters] = useState({
    keyword: '',
    location: '',
    fullTime: false,
  });


  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
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
        !filters.location || job.location.toLowerCase().startsWith(filters.location.toLowerCase());

      // -->Search: based on contract type
      const fullTimeMatch = !filters.fullTime || job.contract === 'Full Time';

      return keywordMatch && locationMatch && fullTimeMatch;
    });

    onSearch(filteredJobs);
  };

  // -->When: the user presses the key enter, we whant to execute the search
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
  }

  return (
    <div className="filter-mobile">
            <div className="search">
                <input 
                    onKeyUp={handleKeyPress}
                    name="keyword" 
                    className="input-search bg-secondary-100 fs-200" 
                    type="text" 
                    value={filters.keyword}
                    onChange={handleInputChange}
                    placeholder="Filter by title..."/>
            </div>
            <button className="btn-filter" onClick={onShowPopup}>
                <img className="icon-filter" src="assets/mobile/icon-filter.svg" alt=""/>
            </button>
            <button className="btn-search" onClick={handleSearch}>
                <svg className="icon-search" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" fill="#5964E0" fillRule="nonzero"/></svg>
            </button>   
      </div>
  );
 };

export default JobFilterMobile;