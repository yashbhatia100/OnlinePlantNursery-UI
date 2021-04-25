import React, { useEffect, useState } from "react";
import DisplayPlanterList from "./DisplayPlanterList";
import commonStyle from "./commonStyle.module.css"
import { useDispatch, useSelector } from "react-redux";
import {fetchAll} from "../../service/PlanterService"
import {fetchAllPlanters} from "../../redux/fetchallplanters/fetchAllPlantersAction";
export default function GetAllPlanters() {
  // const planter1 = {
  //   planterId: 1,
  //   planterHeight: 10,
  //   planterCapacity: 100,
  //   planterColor: 2,
  //  drainageHoles: 1,
  //   planterShape: "Square",
  //   planterStock: 100,
  //   planterCost: 200,
  //   plantId: 1,
  //   seedId: 2,
  // }

  // const planter2 = {
  //   planterId: 2,
  //   planterHeight: 10,
  //   planterCapacity: 100,
  //   planterColor: 2,
  //   drainageHoles: 1,
  //   planterShape: "Rectangle",
  //   planterStock: 100,
  //   planterCost: 200,
  //   plantId: 3,
  //   seedId: 4,
  // }
  // let planterList = [planter1, planter2];

  const currentState=useSelector(state=>{
    return{
      planters:state.fetchAllPlanters.planters,
      error:state.fetchAllPlanters.error
    };

  })

  const dispatch = useDispatch();
  const fetchAll = () =>{
    console.log("inside use state function");
    dispatch(fetchAllPlanters());
  };

useEffect(fetchAll,[]);

  
console.log("inside get all planters");


  return(
    <div>
      <h3>Get All Planters</h3>
    <div>
      <ol>
        {
          currentState.planters?(
            <DisplayPlanterList planters={currentState.planters}/>
          ):("")}
        </ol>
    </div>

      { currentState.errMsg? (
        
        <div className={commonStyle.error}>
          Request was unsuccessfull
          {currentState.errMsg}
    
        </div>
      ):("")
    }
    </div>
    
    
  );
}
