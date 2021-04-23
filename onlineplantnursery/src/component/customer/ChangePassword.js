import React, { useState } from "react";
import DisplayCustomer from "./DisplayCustomer";
import validationMessage from '../../validationMessage';
import commonStyle from "./commonStyle.module.css";
 
export default function ChangePassword(){
    let customer1 = {
        id: 1,
        customerName: "haha",
        customerEmail: "haha@gmail.com",
        username: "haha123",
        password: "flower",
        addressId: 234,
        houseNo: "M56",
        colony: "danger",
        city: "Chennai",
        state: "Tamil Nadu",
        pincode: 123456,
      };

      const idRef= React.createRef();
      const passwordRef=React.createRef();

      const response={ customer: customer1, errMsg:undefined};

      const initialState={
          id: undefined,
          pasword: undefined,
          errMsg:undefined,
          Validations: {id: undefined, password:undefined}

      };

      const [currentState, setNewState]=useState(initialState);
      const submitHandler = (event) => {
        event.preventDefault();
        if(currentState.validations.id || currentState.validations.password){
            return;
        }
    };

    const setFieldState = (ref)=> {
      const fieldName = ref.current.name;
      const fieldValue = ref.current.value;
      let validationMsg;
      if (ref === idRef) {
        validationMsg = validateId(fieldValue);
      }
      if (ref === passwordRef) {
        validationMsg = validatePassword(fieldValue);
      }

      const newValidations = {...currentState.validations, [fieldName]: validationMsg};
      const newState={
          ...currentState,
          [fieldName]: fieldValue,
    customer: undefined,
    errMsg: undefined,
    validations: newValidations
  };

  setNewState(newState);
 
};

const validateId = (id) =>{
  if (id==0){
    return validationMessage.idZero;
  }
  return undefined;
}

const validatePassword = (password) =>{
  if (password.length < 6){
    return validationMessage.passwordSmall;
  }
  return undefined;
}

return (
  <div>
    <h3> Change Password</h3>

    <div>
      <form onSubmit={submitHandler} className={commonStyle.content}>
        <div className="form-group">
          <label>Enter Id</label>

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
        
        <div className = 'form-group'>
          <label> Enter New Password </label>
          <input
          name="password"
          type="text"
          ref={passwordRef}
          onChange={()=>setFieldState(passwordRef)}
          className="form-control"
          />

          {currentState.validations.password ?(
            <div className={commonStyle.error}>
              {currentState.validations.password}
              </div>
          ) :(" ")}
        </div>

        <div className = 'form-group'>
          <label> Confirm Password </label>
          <input
          name="password"
          type="text"
          ref={passwordRef}
          onChange={()=>setFieldState(passwordRef)}
          className="form-control"
          />

          {currentState.validations.password ?(
            <div className={commonStyle.error}>
              {currentState.validations.password}
              </div>
          ) :(" ")}
        </div>

        <button className="btn btn-primary"> Confirm</button>
      </form>
    </div>

   
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
  
);

}