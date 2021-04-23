import React, { useState } from "react";
import commonStyle from "./commonStyle.module.css";
import DisplayCustomer from "./DisplayCustomer";
import validationMessage from '../../validationMessage';

export default function GetCustomerDetailsOnRequest() {
 let customer1 = {
    id: 1,
    customerName: "haha",
    customerEmail: "haha@gmail.com",
    username: "haha123",
    addressId: 234,
    houseNo: "M56",
    colony: "danger",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: 123456,
  }

  const idRef = React.createRef();

  const response = { customer:customer1 , errMsg: undefined };

  const initialState = {
    id: undefined,
    errMsg:undefined,
    customer: undefined,
    validations: {id:undefined },
  };

  const [currentState, setNewState] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();
    if (currentState.validations.id){
      return;
    }
  };

  const setFieldState = (ref) => {
    const idValue = idRef.current.value;

    let validationMsg;
    if(ref==idRef){
      validationMsg = validateId(idValue);
    }
    
    const newValidations = {...currentState.validations, id: validationMsg};
    const newState = {
      ...currentState,
      id: idValue,
      errMsg:undefined,
      customer: undefined,
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
            <DisplayCustomer customer={response.customer} />
          </div>
        ) : (
          " "
        )}
        {response.errMsg ? (
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
