import React, { useState } from "react";
import validationMessage from "./validationMessage";
import commonStyle from "./commonStyle.module.css";
import DisplayPlanterList from "./DisplayPlanterList";
export default function GetPlanterByCost(props) {
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
  };

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
  };
  let planterList = [planter1, planter2];
 
  const initialState={minCost:undefined, maxCost:undefined};
  const response = { planters: planterList, errMsg: undefined };
  const [state, setNewState] = useState({ initialState});
  const minCostRef = React.createRef();
  const maxCostRef = React.createRef();

  const changeHandler = (ref) => {
    const field = ref.current;
    const fieldName = field.name;
    const fieldValue = field.value;

    let validationMsg;
    if (ref === minCostRef) {
      validationMsg = validateMinCost(fieldValue);
    }
    if (ref === maxCostRef) {
      validationMsg = validateMaxCost(fieldValue);
    }
    const newValidations = { ...state.validations, [fieldName]: validationMsg };
    const newState = {
      ...state,
      [fieldName]: fieldValue,
      planterList: undefined,
      errMsg: undefined,
      validations: newValidations,
    };
    setNewState(newState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Inside Submit Handler");
  };

  const validateMinCost = (minCost) => {
    if (minCost < 0) {
      console.log("inside validate Min Cost");
      return validationMessage.invalidMinCost;
    }
    return undefined;
  };

  const validateMaxCost = (maxCost) => {
    if (maxCost < 0) {
      console.log("inside validate Max Cost");
      return validationMessage.invalidMaxCost
    }
    return undefined;
  };

  return (
    <div>
      <h3>Get Planters By Cost Range</h3>
      <form onSubmit  onSubmit={(event) => submitHandler(event)}>
        <div className="form-group">
          <label>Planter Minimium Cost</label>
          <input
            name="minCost"
            type="number"
            placeholder="Enter the Planter Minimum Cost"
            ref={minCostRef}
            onChange={() => changeHandler(minCostRef)}
            className="form-control"
            required
          />
          {state.validations.minCost ? (
            <div className={commonStyle.error}>
              {state.validations.minCost}
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="form-group">
          <label>Planter Maximum Cost</label>
          <input
            name="maxCost"
            type="number"
            placeholder="Enter the Planter Maximum Cost"
            ref={maxCostRef}
            onChange={() => changeHandler(maxCostRef)}
            className="form-control"
            required
          />
          {state.validations.maxCost ? (
            <div className={commonStyle.error}>
              {state.validations.maxCost}
            </div>
          ) : (
            ""
          )}
        </div>

        <button className ="btn btn-primary" type="submit">
          {" "}
          Get Planters
        </button>
      </form>
      <div>
        <ol>
          {response.planters ? (
            <DisplayPlanterList planters={response.planters} />
          ) : (
            ""
          )}
        </ol>
      </div>

      {response.errMsg ? (
        <div className={commonStyle.error}>
          Request was unsuccessfull
          {response.errMsg}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
