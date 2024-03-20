import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import jobs from "./jobs";

function IndividualPage() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const selectedJob = jobs.find((job) => job.id === parseInt(id));

    setJob(selectedJob);
  }, [id, jobs]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="individual-page" key={job.id}>
      <div className="individual-page-header">
        <div
          className="icon-div"
          style={{ backgroundColor: job.logoBackground }}
        >
          <img src={job.logo} className="icon-job" alt="Company Logo" />
        </div>
        <div className="company-job">
          <div className="company-title">{job.company}</div>
          <div className="company-subtitle">{job.company}.com</div>
        </div>
        <div className="">
          <button className="btn-company">
            <a href={job.website}>Company Site</a>
          </button>
        </div>
      </div>
      <div className="individual-page-container">
        <div className="title-container">
          <div>
            <div className="subtitle">
              {job.postedAt} . {job.contract}
            </div>
            <div className="title-container-company">{job.position}</div>
            <div className="country">{job.location}</div>
          </div>
          <div>
            <button className="btn-apply">
              <a href={job.apply}>Apply Now</a>
            </button>
          </div>
        </div>
        <div>
          <div className="text">{job.description}</div>
          {job.requirements && job.requirements.content ? (
            <div>
              <div className="requirements">Requirements</div>
              <div className="text">{job.requirements.content}</div>
              <div className="items">
                <ul>
                  {job.requirements.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}
          {job.role && job.role.content ? (
            <div>
              <div className="role">What You Will Do</div>
              <div className="text">{job.role.content}</div>
              <div className="items">
                <ol>
                  {job.role.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="footer">
        <div className="footer-div">
          <div className="subtitle-footer">
            <div className="title-footer">{job.position}</div>
            <div className="text-secondary-400 fs-200">So Digital Inc.</div>
          </div>
          <button className="btn-apply">
            <a href={job.apply}>Apply Now</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default IndividualPage;
