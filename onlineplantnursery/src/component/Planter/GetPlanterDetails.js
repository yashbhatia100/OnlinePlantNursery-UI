import React, { useState } from "react";
import DisplayPlanter from "./DisplayPlanter";


export default function GetPlanterDetails() {
  const planter= {
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
  let errorMsg="Unable to fetch the planter"
  const idRef = React.createRef();
  let [state, setNewState] = useState({
    id: undefined,
    planter: undefined,
    errMsg: undefined,
  });

  const setIdHandler = () => {
    console.log("Inside setId Handler");
    let field = idRef.current;
    let fieldValue = field.value;
    let newState = {
      ...state,
      id:fieldValue,
      planter: undefined,
      errMsg: undefined,
      
    }
    setNewState(newState);
  }
  const submitHandler = (event) => {
    console.log("Inside Submit Handler");
    event.preventDefault();
    let newState = {
      ...state,
      planter: undefined,
      errMsg: errorMsg,
    }
    setNewState(newState);
  };


  return (
  <div className="container">
      <h2>Get Planter Details</h2>
      <form onSubmit={(event)=>submitHandler(event)}>
          <div className="form-group">
              <label>Enter the Planter ID</label>
              <input
              name="id"
              type="number"
              ref={idRef}
              onChange={()=>setIdHandler()}
              className="form-control"
              />
          </div>
          <button className="btn btn-primary">Get Planter</button>
      </form>

      {state.planter ? (
       
        <div>
          <h2>
            Planter Details
          </h2>
          <DisplayPlanter planter={state.planter} />
        </div>
      ) : (
        ""
      )}
      {state.errMsg ? (
        <div>
          Request was not successful
          <br />
          {state.errMsg}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}