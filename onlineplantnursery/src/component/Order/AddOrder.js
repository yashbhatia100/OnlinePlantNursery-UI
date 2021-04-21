import React, { useState } from "react";
import DisplayOrder from "./DisplayOrder";

export default function AddOrder() {
  const order = {
    bookingOrderId: 1,
    transactionMode: "Square",
    quantity: 10,
    totalCost: 207,
    planterId: 1,
    
  };
  let errorMsg = "Cannot add the Order";

  const bookingOrderIdRef = React.createRef();
  const transactionModeRef = React.createRef();
  const quantityRef = React.createRef();
  const totalCostRef = React.createRef();
  const  planterIdRef= React.createRef();
  
  const initialState = {
    bookingOrderId: undefined,
    transactionMode: undefined,
    quantity: undefined,
    totalCost: undefined,
    planterId: undefined,
    formstatus: "",
  };
  const [state, setNewState] = useState(initialState);

  const submitHandler = (event) => {
    console.log("Inside submit Handler");
    event.preventDefault();
    setNewState({ ...state, formstatus: "Form is submitted Successfully" });
  };

  const changeHandler = (ref) => {
    console.log("Inside changeHandler");
    const field = ref.current;
    const fieldName = field.name;
    const fieldValue = field.value;
    let newState = {
      ...state,
      [fieldName]: fieldValue,
      order: undefined,
      errMsg: undefined,
    };
    setNewState(newState);
  };

  return (
    <div>
      <form onSubmit={(event) => submitHandler(event)}>
        <div>
          <label>Enter the bookingOrderId</label>
          <input
            name="bookingOrderId"
            type="number"
            ref={bookingOrderIdRef}
            onChange={() => changeHandler(bookingOrderIdRef)}
          />
        </div>

        <div>
          <label>Enter the transactionMode </label>
          <input
            name="transactionMode"
            type="text"
            ref={transactionModeRef}
            onChange={() => changeHandler(transactionModeRef)}
          />
        </div>

        <div>
          <label>Enter the quantity</label>
          <input
            name="quantity"
            type="number"
            ref={quantityRef}
            onChange={() => changeHandler(quantityRef)}
          />
        </div>

        <div>
          <label>Enter the totalCost</label>
          <input
            name="totalCost"
            type="number"
            ref={totalCostRef}
            onChange={() => changeHandler(totalCostRef)}
          />
        </div>

        <div>
          <label>Enter the planterId</label>
          <input
            name="planterId"
            type="number"
            ref={planterIdRef}
            onChange={() => changeHandler(planterIdRef)}
          />
        </div>
        <br />
        <button type="submit"> Add Order</button>
      </form>
      <h2>{state.formstatus}</h2>
      <h3>Details Entered are </h3>
      bookingOrderId is :{state.bookingOrderId} <br />
      transactionMode is :{state.transactionMode} <br />
      quantity is :{state.quantity}
      <br />
      totalCost is :{state.totalCost}
      <br />
      planterId is :{state.planterId}
      <br />
     
      {state.order ? (
        <div>
          <h3>Order Added Successfully</h3>
          <DisplayOrder order={state.order} />
        </div>
      ) : (
        ""
      )}
      {state.errMsg ? (
        <div>
          <h3> Order was not Added Successfully</h3>
          <br />
          {state.errMsg}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}