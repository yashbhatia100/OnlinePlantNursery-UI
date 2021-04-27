import React, { useState } from "react";
import DisplayCustomer from "./DisplayCustomer";
import validationMessage from '../../validationMessage';
import commonStyle from "./commonStyle.module.css";
import { useDispatch,useSelector } from "react-redux";
import { updateCustomerNameAction } from "../../redux/getCustomerByIdRequest/getCustomerByIdRequestActions";

export default function ChangeCustomerName() {

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

    const customerNameref = React.createRef();

    const initialState = {
        customerName: undefined,
        formstatus: "",
        validations: { customerName: undefined }
    };
    const response = useSelector(state => {
        return (
            {
                customer: state.getCustomerByIdRequest.customer,
                errMsg: state.getCustomerByIdRequest.error
            }
        );
    })
    
    const [state, setNewState] = useState(initialState);

    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault();
        if(state.validations.customerName){
            return;
        }
        let data = {id:response.customer.customerId,customerName:state.customerName}
        dispatch(updateCustomerNameAction(data))
        setNewState({...state})
        customerNameref.current.value="";
    }

    const changeHandler = () => {
        const fieldValue = customerNameref.current.value;
        let validationMsg = validateCustomerName(fieldValue);


        const newValidations = {customerName: validationMsg };
        const newState = {
            ...state,
            customerName: fieldValue,
            validations: newValidations
        };

        setNewState(newState);

    };
    const validateCustomerName = (customerName) => {
        if (customerName.length<=1) {
            return validationMessage.invalidName;
        }
        return undefined;
    }

    return (
        <div>
            <h3> Change Customer Name</h3>
            <br />
            <form onSubmit={(event) => submitHandler(event)}>

                <div className="form-group">
                    <label>Enter New Name</label>
                    <input name="customerName" type="text" ref={customerNameref} onChange={changeHandler} className="form-control"  />

                    {state.validations.customerName ? (
                        <div className={commonStyle.error}>
                            {state.validations.customerName}
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <button className="btn btn-primary" >Change</button>
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
                     Name not updated
                    <br />
                    {response.errMsg}
                </div>
            ) : (
                ""
            )}
        </div>
    );
}