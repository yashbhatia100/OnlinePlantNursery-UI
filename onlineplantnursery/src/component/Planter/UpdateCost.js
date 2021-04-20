import React, { useState } from "react";
import DisplayPlanter from "./DisplayPlanter";
export default function UpdateCost() {
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
  const planterCostRef = React.createRef();
  const initialState = {
    planterCost: undefined,
    planter: undefined,
    errMsg: undefined,
  };
  let [state, setNewState] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();
    const newState = { ...state, planter: undefined, errMsg: errMsg };
    setNewState(newState);
  };

  const setUpdateCostHandler = (event) => {
    const field = planterCostRef.current;
    const fieldValue = field.value;
    const newState = {
      ...state,
      planterCost: fieldValue,
      planter: undefined,
      errMsg: undefined,
    };
    setNewState(newState);
  };

  return (
    <div>
      <h2>Update Planter Cost</h2>
      <form on onSubmit={submitHandler}>
        <label>Enter Planter Cost</label>
        <input
          name="planterCost"
          type="number"
          ref={planterCostRef}
          onChange={() => setUpdateCostHandler()}
        />
        <br />
        <button>Submit</button>
      </form>
      <div>Planter Cost is {state.planterCost}</div>
      <h3>Updated Planter Cost response</h3>
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
