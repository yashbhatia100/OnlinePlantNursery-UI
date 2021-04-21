import React, { useState } from "react";
import DisplayPlanter from "./DisplayPlanter";
export default function UpdatePlanterStock() {
  const planter = {
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

  let errMsg = "Cannot process this response";
  const planterStockRef = React.createRef();
  const initialState = {
    planterStock: undefined,
    planter: undefined,
    errMsg: undefined,
  };
  let [state, setNewState] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();
    const newState = { ...state, planter: undefined, errMsg: errMsg };
    setNewState(newState);
  };

  const setUpdateStockHandler = (event) => {
    const field = planterStockRef.current;
    const fieldValue = field.value;
    const newState = {
      ...state,
      planterStock: fieldValue,
      planter: undefined,
      errMsg: undefined,
    };
    setNewState(newState);
  };

  return (
    <div>
      <h2>Update Planter Stock</h2>
      <form on onSubmit={submitHandler}>
        <label>Enter Planter Stock</label>
        <input
          name="planterStock"
          type="number"
          ref={planterStockRef}
          onChange={() => setUpdateStockHandler()}
        />
        <br />
        <button>Submit</button>
      </form>
      <div>Planter Stock is {state.planterCost}</div>
      <h3>Updated Planter Stock response</h3>
      {state.planter ? (
        <div>
          <DisplayPlanter planter={state.planter} />
        </div>
      ) : (
        ""
      )}
      {state.errMsg ? (
        <div>
          Request was not successful <br />
          {state.errMsg}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
