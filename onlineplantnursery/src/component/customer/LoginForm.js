import validationMessage from '../../validationMessage';
import React, { useState } from "react";
import commonStyle from "./commonStyle.module.css";

export default function LoginForm (){
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

      const usernameRef=React.createRef();
      const passwordRef=React.createRef();

      const response = {customer: customer1, errMsg: undefined};

      const initialState={
          username:undefined,
          password:undefined,
          errMsg: undefined,
          validations: {username: undefined, password:undefined},
      };

      const [currentState, setNewState]=useState(initialState);

      const submitHandler = (event) => {
          event.preventDefault();
          if(currentState.validations.username || currentState.validations.password){
              return;
          }
      };

      const setFieldState = (ref)=> {
        const fieldName = ref.current.name;
        const fieldValue = ref.current.value;
        let validationMsg;
        if (ref === usernameRef) {
          validationMsg = validateUsername(fieldValue);
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

  const validateUsername = (username) =>{
    if (username.length < 5){
      return validationMessage.usernameSmall;
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
      <h3> Customer Login</h3>

      <div>
        <form onSubmit={submitHandler} className={commonStyle.content}>
          <div className="form-group">
            <label>Enter username</label>

            <input
              name="username"
              type="text"
              ref={usernameRef}
              onChange={() => setFieldState(usernameRef)}
              className="form-control"
            />
            {currentState.validations.username ?(
              <div className={commonStyle.error}>
                {currentState.validations.username}
                </div>
            ) : ''
            }
          </div>
          
          <div className = 'form-group'>
            <label> Enter Password </label>
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

          <button className="btn btn-primary"> Login </button>
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

        
      
