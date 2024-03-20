import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FilterMobile from "./FilterMobile";
import JobFilterDesktop from "./JobFilterDesktop";
import jobsData from "./jobs";

function HomePage() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    setJobs(jobsData);
    setFilteredJobs(jobsData);
  }, []);

  console.log(jobs);

  const handleSearch = (filteredJobs) => {
    setFilteredJobs(filteredJobs);
  };

  return (
    <div>
      <JobFilterDesktop jobs={jobs} onSearch={handleSearch} />
      <FilterMobile jobs={jobs} onSearch={handleSearch} />
      <div className="jobs-grid">
        {filteredJobs.map((job) => (
          <div key={job.id} className="card">
            <div
              className="card-icon"
              style={{ backgroundColor: job.logoBackground }}
            >
              <img className="icon-company" src={job.logo} alt="Company Logo" />
            </div>
            <div className="container">
              <div className="subtitle text-secondary-400 fs-200">
                {job.postedAt} . {job.contract}
              </div>
              <Link
                to={`/individual-page/${job.id}`}
                className="btn-title fs-300"
              >
                {job.position}
              </Link>
              <div className="subtitle text-secondary-400 fs-200">
                {job.company}
              </div>
              <div className="country text-primary-100 fs-100">
                {job.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
