import React, { useState } from "react";
import DisplayOrder from "./DisplayOrder";
import commonStyle from './commonStyle.module.css';
import validationMessage from './validationMessage';


export default function AddOrder() {
  let order = {
    bookingOrderId: 1,
    transactionMode: "Square",
    quantity: 10,
    totalCost: 207,
    planterId: 1
    
  };


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
    validations: {bookingOrderId: undefined,
      transactionMode: undefined,
      quantity: undefined,
      totalCost: undefined,
      planterId: undefined,}
  };
  const response = { order: order, errMsg: undefined };
  const [currentState, setNewState] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();
    if(currentState.validations.bookingOrderId 
    || currentState.validations.transactionMode 
    || currentState.validations.quantity
    || currentState.validations.totalCost 
    || currentState.validations.planterId
    ){
        return;
    }
    const data = { ...currentState };
    console.log("Order data:", data)
}

const changeHandler = (ref) => {
  const fieldName = ref.current.name;
  const fieldValue = ref.current.value;
  let validationMessage;

  const integerFieldRefs = [bookingOrderIdRef, transactionModeRef, quantityRef, totalCostRef, planterIdRef]
  if(integerFieldRefs.includes(ref)){
      validationMessage = validateIntegerField(fieldValue);
  }
  if(ref === transactionModeRef){
      validationMessage = validateTransactionModeRef(fieldValue);
  }
  
  const newValidations = {...currentState.validations, [fieldName]:validationMessage};
  const newState = { ...currentState, [fieldName]: fieldValue, validations: newValidations };
  setNewState(newState);
}

const validateIntegerField = (field) =>{
  if(field!="" && field<=0){
      return validationMessage.lessThanZero
  }
  return undefined;
}

const validateTransactionModeRef=(transactionMode)=>{
  const valid=["Cash","Online","UPI"];
  if(valid.includes(transactionMode)){
      return undefined;
  }
  return validationMessage.invalidValue;
}


return (
  <div>
      <h3>Add Order</h3>
      <div className="mt-5">
          <form onSubmit={submitHandler}>
              <div className="form-group">
                  <label>Enter OrderBookingId : </label>
                  <input 
                      type="number"
                      name="bookingOrderId"
                      ref={bookingOrderIdRef} 
                      onChange={() => changeHandler(bookingOrderIdRef)}
                      required = {true} 
                      className="form-control" 
                  />
                  {currentState.validations.bookingOrderId?(
                      <div className={commonStyle.error}>
                         {currentState.validations.bookingOrderId} 
                      </div>
                  ):''}

              </div>
              
              
              <div className="form-group">
                  <label>Enter transactionMode: </label>
                  <input 
                      type="text" 
                      name="transactionMode" 
                      ref={transactionModeRef} 
                      onChange={() => changeHandler(transactionModeRef)} 
                      required = {true} 
                      className="form-control" 
                      list="transactionModeList"
                      autoComplete="off"
                  />
                  <datalist id="transactionModeList">
                      <option value="Cash" />
                      <option value="online" />
                      <option value="Upi" />
                  </datalist>
                  {currentState.validations.transactionMode?(
                      <div className={commonStyle.error}>
                         {currentState.validations.transactionMode} 
                      </div>
                  ):''}
              </div>
              <div className="form-group">
                  <label>Enter quantity: </label>
                  <input 
                      type="number" 
                      name="quantity" 
                      ref={quantityRef} 
                      onChange={() => changeHandler(quantityRef)} 
                      required = {true} 
                      className="form-control" 
                  />
                  {currentState.validations.quantity?(
                      <div className={commonStyle.error}>
                         {currentState.validations.quantity} 
                      </div>
                  ):''}
              </div>
              
              <div className="form-group">
                  <label>Enter totalCost: </label>
                  <input 
                      type="number" 
                      name="totalCost" 
                      ref={totalCostRef} 
                      onChange={() => changeHandler(totalCostRef)} 
                      required = {true} 
                      className="form-control" 
                  />
                  {currentState.validations.totalCost?(
                      <div className={commonStyle.error}>
                         {currentState.validations.totalCost} 
                      </div>
                  ):''}
              </div>
              <div className="form-group">
                  <label>Enter planterId: </label>
                  <input 
                      type="number" 
                      name="planterId" 
                      ref={planterIdRef} 
                      onChange={() => changeHandler(planterIdRef)} 
                      required = {true} 
                      className="form-control" 
                  />
                  {currentState.validations.planterId?(
                      <div className={commonStyle.error}>
                         {currentState.validations.planterId} 
                      </div>
                  ):''}
              </div>
              <button className="btn btn-primary">Add Order</button>
          </form>
      </div>
      <div className="mt-5">
      {response.order ? (
          <div>
              <DisplayOrder order={order} />
          </div>
      ) : ''}

      {response.errMsg ? (
          <div className={commonStyle.error}>
              Request cannot be processed
              <br />
              {currentState.errMsg}
          </div>
      ) : ''}
      </div>

  </div >
);
}