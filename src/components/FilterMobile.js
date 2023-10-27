import React, { useState } from "react";
import BackdropPopup from "./BackdropPopup";
import JobFilterMobile from "./JobFilterMobile";

const FilterMobile = ({jobs}) => {
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [popupVisible, setPopupVisible] = useState(false);

    const showPopup = () => {
        console.log("Show popup function called");
        setPopupVisible(true);
    };

    const closePopup = () => {
        console.log("Close popup function called");
        setPopupVisible(false);
    };

    const handleSearch = (filteredJobs) => {
        setFilteredJobs(filteredJobs);
      };

    return (
        <div>
            <JobFilterMobile jobs={jobs} onSearch={handleSearch} onShowPopup={showPopup}/>
            <BackdropPopup isVisible={popupVisible} onClosePopup={closePopup} />
        </div>
    );
};

export default FilterMobile;