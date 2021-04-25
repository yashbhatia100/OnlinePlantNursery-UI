import React, { useEffect, useState } from "react";
import DisplayOrder from "./DisplayOrder";
import commonStyle from './commonStyle.module.css';
import validationMessage from "./validationMessage";

export default function GetOrderByIdRequest() {

    let mockOrder = {
        bookingOrderId: 1,
    transactionMode: "Square",
    quantity: 10,
    totalCost: 207,
    planterId: 1
    }

    const nameRef = React.createRef();

    const response = {order: mockOrder, errMsg: undefined};

    const initialState = { name: undefined, validations:{name:undefined} };

    const [currentState, setNewState] = useState(initialState);

    const submitHandler = (event) => {
        event.preventDefault();
        if(currentState.validations.bookingOrderId){
            return;
        }
        console.log(currentState.bookingOrderId);
        
    }

    const changeHandler = () => {
        const fieldValue = nameRef.current.value;
        let validationMessage = validateIntegerField(fieldValue);
        
        const newValidations = {bookingOrderId:validationMessage};
        const newState = {bookingOrderId: fieldValue, validations: newValidations};
        setNewState(newState);
    }

    const validateIntegerField=(bookingOrderId)=>{
        if(bookingOrderId!="" && bookingOrderId<=0){
            return validationMessage.lessThanZero
        }
        return undefined;
    }
    return (
        <div>
            <h3>Get Order By Id On Request</h3>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Enter Order Id to view: </label>
                        <input 
                            type="number" 
                            name="bookingOrderId" 
                            ref={nameRef} 
                            onChange={changeHandler} 
                            required = "true"
                            className="form-control" 
                        />
                        {currentState.validations.bookingOrderId?(
                            <div className={commonStyle.error}>
                                {currentState.validations.bookingOrderId}
                            </div>
                        ):''}
                    </div>
                    <button className="btn btn-primary">Get Order</button>
                </form>
            </div>

            <div className="mt-5">
                {response.order ? (
                    <div>
                        <DisplayOrder order={response.order} />
                    </div>
                ) : ''}
                {response.errMsg ? (
                    <div className={commonStyle.error}>
                        Request cannot be processed
                        <br />
                        {response.errMsg}
                    </div>
                ) : ''}
            </div>
        </div >
    );
}