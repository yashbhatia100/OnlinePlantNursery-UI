import React, { useState } from "react";
import DisplayPlanter from "./DisplayPlanter";
import commonStyle from "./commonStyle.module.css";
import validationMessage from "./validationMessage";


export default function GetPlanterByIdRequest() {
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

  const planterIdRef = React.createRef();
  const response = { planter:undefined, errMsg: undefined };
  const initialState = {
    planterId: undefined,
    validations: { planterId: undefined },
  };
  const [state, setNewState] = useState(initialState);

  const setIdHandler = () => {
    console.log("Inside setId Handler");
    const fieldValue = planterIdRef.current.value;
    const validationMsg = validatePlanterId(fieldValue);
    const newValidations = {
      ...state.validations,
      planterId: validationMsg,
    };
    const newState = {
      ...state,
      planterId: fieldValue,
      errMsg: undefined,
      validations: newValidations,
    };
    setNewState(newState);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Inside Submit Handler");
    if (state.validations.planterId) {
      return;
    }
    let data = { ...state };
  
  };

  const validatePlanterId = (planterId) => {
    if (planterId < 0) {
      console.log("inside validate planterId");
      return validationMessage.invalidPlanterId;
    }
    return undefined;
  };

  return (
    <div>
      <h3>Get Planter Details</h3>
      <form onSubmit={(event) => submitHandler(event)}>
        <div className="form-group">
          <label>Enter the Planter ID</label>
          <input
            name="planterId"
            type="number"
            placeholder="Enter the Planter Id"
            ref={planterIdRef}
            onChange={() => setIdHandler()}
            className="form-control"
            required
          />
          {state.validations.planterId ? (
            <div className={commonStyle.error}>
              {state.validations.planterId}
            </div>
          ) : (
            ""
          )}
        </div>
        <button className="btn btn-primary">Get Planter</button>
      </form>

      {response.planter ? (
        <div>
          <h2>Planter Details</h2>
          <DisplayPlanter planter={response.planter} />
        </div>
      ) : (
        ""
      )}
      {response.errMsg ? (
        <div className={commonStyle.error}>
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
