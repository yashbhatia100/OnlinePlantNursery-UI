import React, { useState } from "react";
import commonStyle from "./commonStyle.module.css";
import DisplayCustomer from "./DisplayCustomer";

export default function GetCustomer() {
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
  };
  const idRef = React.createRef();

  const initialState = {
    id: undefined,
    customer: customer1,
    errMsg: undefined,
  };
  const [currentState, setNewState] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("current state", currentState);
  };

  const setFieldState = () => {
    const idValue = idRef.current.value;
    const newState = { ...currentState, id: idValue };
    setNewState(newState);
  };
  return (
    <div>
      <h3> Get Customer By ID</h3>
      <br />
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label> Enter Id</label>
          <input name="id" type="number" ref={idRef} onChange={setFieldState} className="form-control"/>
        </div>
        <br />
        <button className= "btn btn-primary">Get Customer</button>
      </form>
      <br />

      {currentState.customer ? (
        <div>
          <DisplayCustomer customer={currentState.customer} />
        </div>
      ) : (
        ""
      )}
      {currentState.errMsg ? (
        <div className={commonStyle.error}>
          Request unsuccessful
          <br />
          {currentState.errMsg}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
