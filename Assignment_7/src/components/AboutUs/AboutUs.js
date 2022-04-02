import React from 'react';
import CardResponsive from '../Layout/Card';

const AboutUs = () => {

  const aboutUsData = [{
    img: "https://via.placeholder.com/150x75",
    name: "John Doe",
    team_name: "CEO"
  },
  {
    img: "https://via.placeholder.com/150x75",
    name: "Foo Bar",
    team_name: "CTO"
  },
  {
    img: "https://via.placeholder.com/150x75",
    name: "RXY",
    team_name: "Director"
  },
  {
    img: "https://via.placeholder.com/150x75",
    name: "ZYQ",
    team_name: "Vice President"
  }];

  return (
    <div className="component">
      <h3>About Us</h3>
      <p>
      Job Search is a global leader in connecting people and jobs. Every day, Job Search aims to make every workplace happier and more productive by transforming the way employers and candidates find the right fit. For 25 years, Job Search has worked to transform the recruiting industry. Today, the company leverages advanced technology using intelligent digital, social and mobile solutions, including the flagship website Job Search.com®, Job Search’s innovative app, and a vast array of products and services.
      </p>
      <div className="aboutUS-container">
        <p>Out Team</p>
        <CardResponsive data={aboutUsData} />
      </div>
    </div>
  )
}

export default AboutUs;