import React, { useState, useEffect } from "react";
import commonStyle from "./commonStyle.module.css";
import DisplayCustomer from "./DisplayCustomer";
import validationMessage from '../../validationMessage';
import { useDispatch, useSelector } from "react-redux";
import {getCustomerByIdRequestActions} from '../../redux/getCustomerByIdRequest/getCustomerByIdRequestActions';
export default function GetCustomerDetailsOnRequest() {

  const idRef = React.createRef();

  const response = useSelector(state=>{
    return(
      {
        customer:state.getCustomerByIdRequest.customer,
        error:state.getCustomerByIdRequest.error
      }
    );
  })

  const dispatch = useDispatch();

  const initialState = {
    id: undefined,
    validations: {id:undefined },
  };

  const [currentState, setNewState] = useState(initialState);
  

  

  const submitHandler = (event) => {
    event.preventDefault();
    if (currentState.validations.id){
      return;
    }
    dispatch (getCustomerByIdRequestActions(currentState.id));
  }

  const setFieldState = (ref) => {
    const idValue = idRef.current.value;

    let validationMsg;
    if(ref==idRef){
      validationMsg = validateId(idValue);
    }
    
    const newValidations = { id: validationMsg};
    const newState = {
     id: idValue,
      validations: newValidations
    };
    setNewState(newState);
  };

  const validateId = (id) =>{
    if (id<0){
      return validationMessage.idSmallThanZero;
    }
    if (id==0) {
      return validationMessage.idZero;
    }
    return undefined;
  };

  return (
    <div>
      <h3> Get Customer details on Request</h3>

      <div>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label>Enter Customer Id</label>

            <input
              name="id"
              type="number"
              ref={idRef}
              onChange={() => setFieldState(idRef)}
              className="form-control"
            />
            {currentState.validations.id ?(
              <div className={commonStyle.error}>
                {currentState.validations.id}
                </div>
            ) : ''
            }
          </div>

          <button className="btn btn-primary"> Get Customer </button>
        </form>
      </div>

      <div className="mt-5">
        {response.customer ? (
           <div>
           <div className="alert alert-success">
               Customer details fetched successfully!
           </div>
          <div>
            <DisplayCustomer customer={response.customer} />
          </div>
          </div>
        ) : (
          " "
        )}
        {response.error ? (
          <div className={commonStyle.error}>
            Request unsuccessful
            <br />
            {response.errMsg}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
