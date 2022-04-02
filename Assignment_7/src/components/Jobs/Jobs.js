import React from 'react';
import CardResponsive from '../Layout/Card';

const Jobs = () => {

  const jobsData = [{
    img: "https://via.placeholder.com/150x75",
    name: "Software Developer",
    team_name: "Apps & Tools"
  },
  {
    img: "https://via.placeholder.com/150x75",
    name: "Customer Support",
    team_name: "TechOps"
  },
  {
    img: "https://via.placeholder.com/150x75",
    name: "Security Engineer",
    team_name: "Infrastructure Team"
  },
  {
    img: "https://via.placeholder.com/150x75",
    name: "Customer Support",
    team_name: "TechOps"
  }];

  return (
    <div className="component">
      <h3>Jobs</h3>
      <p>Below are some of the jobs available! Apply Now!</p>
      <CardResponsive data={jobsData}/>
    </div>
  )
}

export default Jobs;