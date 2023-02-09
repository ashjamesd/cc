import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({planeteers}) {

  const mappedPlaneteers = planeteers.map((planeteer)=>(
      <Planeteer key={planeteer.id} name={planeteer.name} location={planeteer.fromUSA} yearBorn={planeteer.born}
      bio={planeteer.bio} quote={planeteer.quote} image={planeteer.pictureUrl} twitterHandle={planeteer.twitter}/>
    
  ))

  return (
    <ul className="cards">
      {mappedPlaneteers}
    </ul>
  );
}

export default PlaneteersContainer;
