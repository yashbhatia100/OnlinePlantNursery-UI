import React, { useState } from "react";
import validationMessage from "./validationMessage";
import commonStyle from "./commonStyle.module.css";
import DisplayPlanterList from "./DisplayPlanterList";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPlantersByCost } from "../../redux/fetchplanterbycost/fetchPlanterByCostAction";

export default function GetPlanterByCost() {
  const initialState = {
    minCost: undefined,
    maxCost: undefined,
    validations: {
      minCost: undefined,
      maxCost: undefined,
    },
  };

  const [state, setNewState] = useState(initialState);
  const minCostRef = React.createRef();
  const maxCostRef = React.createRef();

  const response = useSelector((state) => {
    return {
      planters: state.fetchAllPlantersByCost.planters,
      error: state.fetchAllPlantersByCost.error,
    };
  });
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Inside Submit Handler");

    if (state.validations.maxCost && state.validations.minCost) {
      return;
    }
    const minCost = minCostRef.current.value;
    const maxCost = maxCostRef.current.value;
    dispatch(fetchAllPlantersByCost(minCost, maxCost));
  };

  const changeHandler = (ref) => {
    console.log("In change Handler");
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
      planters: undefined,
      errMsg: undefined,
      validations: newValidations,
    };
    setNewState(newState);
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
      return validationMessage.invalidMaxCost;
    }
    return undefined;
  };

  return (
    <div>
      <h3>Get Planters By Cost Range</h3>
      <form onSubmit={(event) => submitHandler(event)}>
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
            <div className={commonStyle.error}>{state.validations.minCost}</div>
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
            <div className={commonStyle.error}>{state.validations.maxCost}</div>
          ) : (
            ""
          )}
        </div>

        <button className="btn btn-primary" type="submit">
          {" "}
          Get Planters
        </button>
      </form>
      <div className="mt-5">
        <ol>
          {response.planters ? (
            <DisplayPlanterList planters={response.planters} />
          ) : (
            ""
          )}
        </ol>
      </div>
      {response.error ? (
        <div className={commonStyle.error}>
          Request was unsuccessfull
          {response.error}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
