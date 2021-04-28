import React, { useState } from "react";
import DisplayOrder from "./DisplayOrder";
import commonStyle from './commonStyle.module.css';
import validationMessage from './validationMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addOrderAction } from '../../redux/addOrder/addOrderActions';


export default function AddOrder() {
 /* const order = {
    bookingOrderId: 1,
    transactionMode: "Square",
    quantity: 10,
    totalCost: 207,
    planterId: 1
    
  };*/


  
  const transactionModeRef = React.createRef();
  const quantityRef = React.createRef();

  const  planterIdRef= React.createRef();
  
  const initialState = {
    transactionMode: undefined,
    quantity: undefined,
   
    planterId: undefined,
    validations: {
        
      transactionMode: undefined,
      quantity: undefined,
     
      planterId: undefined}
  };
  const response = useSelector(state=>{ 
    return (
        {
            order: state.addOrder.order,
            errMsg: state.addOrder.error
        }
    );
});
console.log("response",response.order);
const [currentState, setNewState] = useState(initialState);

const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    if(
    currentState.validations.transactionMode 
    || currentState.validations.quantity
    
    || currentState.validations.planterId
    ){
        return;
    }
    
    let data = { ...currentState };
    console.log("submithandler",data);
    dispatch(addOrderAction(data));
};

const changeHandler = (ref) => {
  const fieldName = ref.current.name;
  const fieldValue = ref.current.value;
  let validationMessage

  const integerFieldRefs = [ quantityRef, planterIdRef]/////////
  if(integerFieldRefs.includes(ref)){
    validationMessage = validateIntegerField(fieldValue);
  }
  if(ref === transactionModeRef){
    validationMessage = validateTransactionMode(fieldValue);
  }
  
  const newValidations = { ...currentState.validations, [fieldName]: validationMessage };
  const newState = { ...currentState, [fieldName]: fieldValue, validations: newValidations };
        setNewState(newState);
};


const validateIntegerField = (field) =>{
  if(field!=="" && field<=0){
      return validationMessage.lessThanZero
  }
  return undefined;
}

const validateTransactionMode=(transactionMode)=>{
  const valid=["Cash","Online","Upi"];
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
                      <option value="Online" />
                      <option value="UPI" />
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
                
              </div>
              <button className="btn btn-primary">Add Order</button>
                </form>
            </div>
            <div className="mt-5 mb-5">
            {response.order ? (
                <div>
                    <div className="alert alert-success">
                        Order added successfully!
                    </div>
                    <div>
                        <DisplayOrder order={response.order} />
                    </div>
                </div>
            ) : ''}

            {response.errMsg ? (
                <div className="alert alert-danger">
                    Request cannot be processed! 
                    <br/>
                    Error: {response.errMsg}
                </div>
            ) : ''}
    </div>

  </div >
);
}