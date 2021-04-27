import React, { useEffect } from "react";
import DisplayPlanterList from "./DisplayPlanterList";
import commonStyle from "./commonStyle.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPlanters } from "../../redux/fetchallplanters/fetchAllPlantersAction";
export default function GetAllPlanters() {
  const currentState = useSelector((state) => {
    return {
      planters: state.fetchAllPlanters.planters,
      error: state.fetchAllPlanters.error,
    };
  });

  const dispatch = useDispatch();
  const fetchAll = () => {
    console.log("inside use state function");
    dispatch(fetchAllPlanters());
  };

  useEffect(fetchAll, []);

  console.log("inside get all planters");

  return (
    <div>
      <div>
        <ol>
          {currentState.planters ? (
            <DisplayPlanterList planters={currentState.planters} />
          ) : (
            ""
          )}
        </ol>
      </div>

      {currentState.errMsg ? (
        <div className={commonStyle.error}>
          Request was unsuccessfull
          {currentState.errMsg}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
