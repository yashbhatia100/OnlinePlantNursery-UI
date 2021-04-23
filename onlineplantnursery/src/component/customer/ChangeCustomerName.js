import  React,{ useState } from "react";
import DisplayCustomer from "./DisplayCustomer";
import validationMessage from '../../validationMessage';
import commonStyle from "./commonStyle.module.css";

export default function ChangeCustomerName(){

    const customer = {

        id : 2,
        customerName : "Saurabh",
        customerEmail : "abc@gmail.com",
        username: "abckg",
        password : "xyz421",
        houseNo : 119,
        addressId : 123,
        colony : "ipsum",
        city  : "chennai",
        State: "TamilNadu",
        pincode : 600001,
    
    };

const idRef = React.createRef();
const customerNameref = React.createRef();

const initialState = {
    idRef : undefined,
    customerNameref : undefined,
    formstatus : "",
    validations : {customerName : undefined}
};

const response = {customer: customer, errMsg: undefined};
const [state, setNewState] = useState(initialState);

const submitHandler = (event) => {
  event.preventDefault();
  setNewState({ ...state, formstatus: "Form is submitted Successfully" });
};

const changeHandler = (ref) => {
    const field = ref.current;
    const fieldName = field.name;
    const fieldValue = field.value;
    let validationMsg;
    if (ref === customerNameref) {
      validationMsg = validateCustomerName(fieldValue);
    }


    const newValidations = { ...state.validations, [fieldName]: validationMsg };
    const newState = {
      ...state,
      [fieldName]: fieldValue,
      customer: undefined,
      errMsg: undefined,
      validations: newValidations
    };

    setNewState(newState);
   
  };
  const validateCustomerName = (customerName) => {
    if (customerName.length < 1) {
      return validationMessage.invalidName;
    }
    return undefined;
  }
  
  return(
    <div>
    <h3> Change Customer Name</h3>
    <br/>
  <form onSubmit = {(event) => submitHandler(event)}>
  
  <div className="form-group">
    <label>Id</label>
    <input name="id" type = "number"  ref={idRef} onChange={()=> changeHandler(idRef) }className="form-control" /><br/>
    </div>
  
  
  <div className="form-group">
  <label>New  Name</label>
  <input name="customerName" type = "text" ref={customerNameref} onChange={()=> changeHandler(customerNameref) }className="form-control" />
  
  {state.validations.customerName ? (
    <div className={commonStyle.error}>
      {state.validations.customerName} 
    </div>
  ) : (
    ""
  )}
</div>
<button className= "btn btn-primary" >Change</button>
</form>
<h2>{state.formstatus}</h2><br/>
<h3>Details: <br/></h3>


<br />
{response.customer ? (
  <div>
    <h3>CustomerName updated Successfully</h3>
    <br/>
    <DisplayCustomer customer={ response.customer} />
  </div>
) : (
  ""
)}
{response.errMsg ? (
  <div>
    <h3> customerName not updated Successfully</h3>
    <br />
    {response.errMsg}
  </div>
) : (
  ""
)}
   </div>
 );
}