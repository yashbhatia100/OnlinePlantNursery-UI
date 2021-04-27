import React, { useState } from "react";
import DisplayPlanter from "./DisplayPlanter";
import commonStyle from "./commonStyle.module.css";
import validationMessage from "./validationMessage";
import { useDispatch, useSelector } from "react-redux";
import { getPlanterOnRequest } from "../../redux/getPlanterOnRequest/getPlanterOnRequestAction";

export default function GetPlanterByIdRequest() {
  const planterIdRef = React.createRef();
  const initialState = {
    planterId: undefined,
    validations: { planterId: undefined },
  };
  const [state, setNewState] = useState(initialState);

  const response = useSelector((state) => {
    return {
      planter: state.getPlanterOnRequest.planter,
      error: state.getPlanterOnRequest.error,
    };
  });
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Inside Submit Handler");
    const planterId = planterIdRef.current.value;
    if (state.validations.planterId) {
      return;
    }
    dispatch(getPlanterOnRequest(planterId));
  };

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
      {response.error ? (
        <div className={commonStyle.error}>
          Request was not successful
          <br />
          {response.error}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
