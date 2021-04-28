import React, {  useState } from "react";
import DisplayOrder from "./DisplayOrder";
import commonStyle from './commonStyle.module.css';
import validationMessage from "./validationMessage";
import { useDispatch, useSelector } from "react-redux";
import { getOrderByIdRequestAction } from "../../redux/getOrderByIdRequest/getOrderByIdRequestActions";

export default function GetOrderByIdRequest() {

    const bookingOrderIdRef = React.createRef();

    const response = useSelector(state=>{
        return(
            {
                order: state.getOrderByIdRequest.order, 
                errMsg: state.getOrderByIdRequest.error
            }
        );
    })
    console.log("response",response.order);
    const dispatch = useDispatch();

    const initialState = { bookingOrderId: undefined, validations:{bookingOrderId:undefined} };

    const [currentState, setNewState] = useState(initialState);

    const submitHandler = (event) => {
        event.preventDefault();
        if(currentState.validations.bookingOrderId){
            return;
        }
        dispatch(getOrderByIdRequestAction(currentState.bookingOrderId));
        
    }
   

    const changeHandler = () => {
        const fieldValue = bookingOrderIdRef.current.value;
        let validationMessage = validateIntegerField(fieldValue);
        
        const newValidations = {bookingOrderId:validationMessage};
        const newState = {bookingOrderId: fieldValue, validations: newValidations};
        setNewState(newState);
    }

    const validateIntegerField=(bookingOrderId)=>{
        if(bookingOrderId<=0){
            return validationMessage.lessThanZero;
        }
        return undefined;
    }
    return (
        <div>
            <h3>Get Order By Id On Request</h3>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Enter order name to view: </label>
                        <input 
                            type="number" 
                            name="bookingOrderId" 
                            ref={bookingOrderIdRef} 
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
                        <div className="alert alert-success">
                            Order details fetched successfully!
                        </div>
                        <div>
                            <DisplayOrder order={response.order} />
                        </div>
                        
                    </div>
                ) : ''}
                {response.errMsg ? (
                    <div className="alert alert-danger">
                        Request cannot be processed
                        <br />
                        Error: {response.errMsg}
                    </div>
                ) : ''}
            </div>
        </div >
    );
}