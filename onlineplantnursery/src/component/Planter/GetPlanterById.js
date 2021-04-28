import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlanterById } from "../../redux/fetchplanterbyid/fetchPlanterByIdAction";
import DisplayPlanter from "./DisplayPlanter";

/**
 * 
 * Get Planter Details By Planter Id Component
 * 
 */

export default function GetPlanterById(props) {
  const currentState = useSelector((state) => {
    return {
      planter: state.fetchPlanterById.planter,
      error: state.fetchPlanterById.error,
    };
  });

  const dispatch = useDispatch();

  const fetchPlanterOnRender = () => {
    const id = props.match.params.planterId;
    console.log("inside fetch planter in getbplanterby id", id);
    dispatch(fetchPlanterById(id));
  };
  useEffect(fetchPlanterOnRender,[]);

  return (
    <div>
      <h3>Get Planter By Id </h3>

      {currentState.planter ? (
        <div>
          <h2>Planter Details</h2>
          <DisplayPlanter planter={currentState.planter} />
        </div>
      ) : (
        ""
      )}
      {currentState.error ? (
        <div className="commonStyle.error">
          Request was not successful
          <br />
          {currentState.error}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
