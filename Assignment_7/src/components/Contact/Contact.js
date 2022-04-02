import React from 'react';
import CardResponsive from '../Layout/Card';

const Contact = () => {

  const contantData = [{
    img: "https://airtame.com/wp-content/uploads/2019/01/1-airtame-infrastructure_team-2400x1098.png",
    name: "Infrastructure",
    team_name: "The team which handles the entire infra."
  },
  {
    img: "https://media.istockphoto.com/vectors/financial-app-and-business-team-vector-id936129682",
    name: "Accounts",
    team_name: "The team handling the accounts department"
  },
  {
    img: "https://www.cflowapps.com/wp-content/uploads/2018/03/IT-operations-workflow-improvement.png",
    name: "Operations",
    team_name: "The operations team handling the business"
  },
  {
    img: "https://cdn-cashy-static-assets.lucidchart.com/marketing/blog/2019Q4/what-does-hr-do/what-does-hr-do-header-2.png",
    name: "Human Resources",
    team_name: "The human resources team"
  }];

  return (
    <div className="component">
      <h3>Contact</h3>
      <br></br><br></br>
      <p>You can reach out to below teams</p>
      <br></br>
      <CardResponsive data={contantData}/>
    </div>
  )
}

export default Contact;