import React, { useState } from "react";
export default function GetAllPlanters() {
  const planter1 = {
    id: 1,
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

  const planter2 = {
    id: 2,
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
  let planterList = [planter1, planter2];

  const initialState = { planters: planterList, errMsg: undefined };
  const [currentState, setNewState] = useState(initialState);
  return (
    <div>
      <h3>Get All Planters</h3>
      <br />
      {currentState.planters ? (
        <table className="table table-striped">
          <tr>
            <th> Id </th>
            <th> Height </th>
            <th> Capacity </th>
            <th> DrainageHoles </th>
            <th> Color </th>
            <th> Shape </th>
            <th> Stock </th>
            <th> Cost </th>
            <th> Plant Id </th>
            <th> Seed Id </th>
          </tr>
          {currentState.planters.map((planter) => (
            <tr>
              <td>{planter.id}</td>
              <td>{planter.planterHeight}</td>
              <td>{planter.planterCapacity}</td>
              <td>{planter.planterDrainageHoles}</td>
              <td>{planter.planterColor}</td>
              <td>{planter.planterShape}</td>
              <td>{planter.planterStock}</td>
              <td>{planter.planterCost}</td>
              <td>{planter.plantId}</td>
              <td>{planter.seedId}</td>
            </tr>
          ))}
        </table>
      ) : (
        ""
      )}

      {currentState.errMsg ? <div>{currentState.errMsg}</div> : ""}
    </div>
  );
}
