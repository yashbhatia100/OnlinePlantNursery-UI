import React from "react";
import DisplayPlanter from "./DisplayPlanter";

export default function GetPlanterById(props) {
  const mockplanter = {
    planterId: 1,
    planterHeight: 10,
    planterCapacity: 100,
    planterColor: 2,
    planterDrainageHoles: 1,
    planterShape: "Square",
    planterStock: 100,
    planterCost: 200,
    plantId: 1,
    seedId: 1,
  };
  const response={planter:mockplanter,errMsg:undefined}
  return (
    <div>
      <h3>Get Planter By Id </h3>
     

      {response.planter ? (
        <div>
          <h2>Planter Details</h2>
          <DisplayPlanter planter={response.planter} />
        </div>
      ) : (
        ""
      )}
      {response.errMsg ? (
        <div className="commonStyle.error">
          Request was not successful
          <br />
          {response.errMsg}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
