import React, { useState } from "react";
import DisplayPlanterList from "./DisplayPlanterList";
import commonStyle from "./commonStyle.module.css";

import { fetchAllPlantersByShape } from "../../redux/fetchplanterbyshape/fetchPlanterByShapeAction";
import { useDispatch, useSelector } from "react-redux";

export default function GetPlanterByShape() {
  const planterShapeRef = React.createRef();

  const [state, setNewState] = useState({ planterShape: undefined });

  const response = useSelector((state) => {
    return {
      planters: state.fetchAllPlantersByShape.planters,
      error: state.fetchAllPlantersByShape.error,
    };
  });
  const dispatch = useDispatch();

  const changeHandler = (ref) => {
    console.log("Inside Change Handler");
    const fieldVal = planterShapeRef.current.value;
    const newState = { planterShape: undefined };
    setNewState(newState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Inside Submit Handler");
    const planterShape = planterShapeRef.current.value;
   
    dispatch(fetchAllPlantersByShape(planterShape));
  };
  return (
    <div>
      <h3>Get Planters By Shape</h3>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>Enter planterShape to view planters </label>
          <input
            type="text"
            name="planterShape"
            placeholder="Select the Shape "
            onChange={changeHandler}
            ref={planterShapeRef}
            className="form-control"
            list="planterShapeList"
            autoComplete="off"
          />
          <datalist id="planterShapeList">
            <option value="Cylinderical" />
            <option value="Square" />
            <option value="Recatngualr" />
          </datalist>
        </div>
        <button className="btn btn-primary">Get Planters</button>
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

      {response.error ? (
        <div className={commonStyle.error}>
          Request was unsuccessfull
          <br />
          {response.error}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
