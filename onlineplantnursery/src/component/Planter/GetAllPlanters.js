import React, { useState } from "react";
import DisplayPlanterList from "./DisplayPlanterList";
import commonStyle from "./commonStyle.module.css"
export default function GetAllPlanters() {
  const planter1 = {
    planterId: 1,
    planterHeight: 10,
    planterCapacity: 100,
    planterColor: 2,
    planterDrainageHoles: 1,
    planterShape: "Square",
    planterStock: 100,
    planterCost: 200,
    plantId: 1,
    seedId: 2,
  }

  const planter2 = {
    planterId: 2,
    planterHeight: 10,
    planterCapacity: 100,
    planterColor: 2,
    planterDrainageHoles: 1,
    planterShape: "Rectangle",
    planterStock: 100,
    planterCost: 200,
    plantId: 3,
    seedId: 4,
  }
  let planterList = [planter1, planter2];

  const response = { planters: planterList, errMsg: undefined };
  return(
    <div>
      <h3>Get All Planters</h3>
    <div>
      <ol>
        {
          response.planters?(
            <DisplayPlanterList planters={response.planters}/>
          ):("")}
        </ol>
    </div>

      { response.errMsg? (
        
        <div className={commonStyle.error}>
          Request was unsuccessfull
          {response.errMsg}
    
        </div>
      ):("")
    }
    </div>
    
    
  );
}
