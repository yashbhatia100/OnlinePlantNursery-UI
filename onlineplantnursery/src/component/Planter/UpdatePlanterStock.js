import React, { useState } from "react";
import DisplayPlanter from "./DisplayPlanter";
import validationMessage from "./validationMessage";
import commonStyle from "./commonStyle.module.css";
import { useDispatch, useSelector } from "react-redux";
import {updateStock} from "../../redux/updatePlanterStock/updatePlanterStockAction";


export default function UpdatePlanterStock() {

  const planterIdRef=React.createRef();
  const planterStockRef = React.createRef();

  const [state, setNewState] = useState({
    planterId:undefined,
  planterStock: undefined,
 
  validations:{planterId:undefined,planterStock:undefined}});

 const response= useSelector(state=>{
     return({
     planter:state.updatePlanterStock.planter,
     error:state.updatePlanterStock.error
    });

 });

 const dispatch=useDispatch();



  const setUpdateStockHandler = (ref) => {
  
    const fieldName = ref.current.name;
    const fieldValue = ref.current.value;
    let validationMsg;
    if(ref==planterIdRef){
        validationMsg=validatePlanterId(fieldValue);
        }
    if(ref==planterStockRef){
        validationMsg=validatePlanterStock(fieldValue);
    
    }    

const newValidations={...state.validations,[fieldName]:validationMsg};
    
    const newState = {
      ...state,
     [fieldName]:fieldValue,
      planter: undefined,
      errMsg: undefined,
      validations:newValidations,
    };
    setNewState(newState);
  };

  const validatePlanterId=(planterId)=>{
      if(planterId<0){
          return validationMessage.invalidPlanterId;
      }
      return undefined;
  }

  const validatePlanterStock=(planterStock)=>{
      if(planterStock<0){
          return validationMessage.invalidPlanterStock;
      }
      return undefined;
  }

  const submitHandler = (event) => {
      console.log("inside submit Handler");
    event.preventDefault();
    if(state.validations.planterId || state.validations.planterStock){
        return;
    }
    let data={...state};
    dispatch(updateStock(data));

  };

  return (
    <div className="container">
      <div className="form-group">
        <h2>Update Planter Stock</h2>
        <form on onSubmit={submitHandler}>
            <div className="form-group">
          <label>Enter Planter Id</label>
          <input
            name="planterId"
            type="number"
            placeholder="Enter the Planter Id"
            ref={planterIdRef}
            onChange={() => setUpdateStockHandler(planterIdRef)}
            className="form-control"
            required
          />
           {state.validations.planterId?(
            <div className={commonStyle.error}>
              {state.validations.planterId}
              </div>
          ):('')}
    </div>
          <div className="form-group">
          <label>Enter Planter Stock</label>
          <input
            name="planterStock"
            type="number"
            placeholder="Enter the Planter Stock"
            ref={planterStockRef}
            onChange={() => setUpdateStockHandler(planterStockRef)}
            className="form-control"
            required
          />
          {state.validations.planterStock?(
            <div className={commonStyle.error}>
              {state.validations.planterStock}
              </div>
              ):('')}
        </div>
          <button className="btn btn-primary">Submit</button>
        </form>
        <h3>Updated Planter Stock response</h3>
        {response.planter ? (
          <div>
            <DisplayPlanter planter={response.planter} />
          </div>
        ) : (
          ""
        )}
        {response.error ? (
          <div className={commonStyle.error}>
            Request was not successful <br />
            {response.error}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
