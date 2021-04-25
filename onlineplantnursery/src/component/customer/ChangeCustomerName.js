import React, { useState } from "react";
import DisplayCustomer from "./DisplayCustomer";
import validationMessage from "../../validationMessage";
import commonStyle from "./commonStyle.module.css";

export default function ChangeCustomerName(props) {
  const customer = {
    id: 2,
    customerName: "Saurabh",
    customerEmail: "abc@gmail.com",
    username: "abckg",
    password: "xyz421",
    houseNo: 119,
    addressId: 123,
    colony: "ipsum",
    city: "chennai",
    State: "TamilNadu",
    pincode: 600001,
  };

  //const idRef = React.createRef();
  const customerNameref = React.createRef();

  const initialState = {
    //idRef : undefined,
    customerName: undefined,
    formstatus: "",
    validations: { customerName: undefined },
  };

  const response = { customer: customer, errMsg: undefined };
  const [state, setNewState] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();
    if (state.validations.customerName) {
      return;
    }
    setNewState({ ...state, formstatus: "Form is submitted Successfully" });
  };

  const changeHandler = () => {
    const fieldValue = customerNameref.current.value;
    let validationMsg = validateCustomerName(fieldValue);

    const newValidations = { customerName: validationMsg };
    const newState = {
      ...state,
      customerName: fieldValue,
      validations: newValidations,
    };

    setNewState(newState);
  };
  const validateCustomerName = (customerName) => {
    if (customerName.length < 1) {
      return validationMessage.invalidName;
    }
    return undefined;
  };

  return (
    <div>
      <h3> Change Customer Name</h3>
      <br />
      <form onSubmit={(event) => submitHandler(event)}>
        <div className="form-group">
          <label>Enter New Name</label>
          <input
            name="customerName"
            type="text"
            ref={customerNameref}
            onChange={changeHandler}
            className="form-control"
          />

          {state.validations.customerName ? (
            <div className={commonStyle.error}>
              {state.validations.customerName}
            </div>
          ) : (
            ""
          )}
        </div>
        <button className="btn btn-primary">Change</button>
      </form>

      <br />
      {response.customer ? (
        <div>
          {state.formstatus}
          <br />
          <DisplayCustomer customer={response.customer} />
        </div>
      ) : (
        ""
      )}
      {response.errMsg ? (
        <div>
          <h3> customer Name not updated Successfully</h3>
          <br />
          {response.errMsg}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
