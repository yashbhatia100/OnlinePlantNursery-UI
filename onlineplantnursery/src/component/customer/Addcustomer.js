import  React,{ useState } from "react";
import DisplayCustomer from "./DisplayCustomer";

export default function  AddCustomer(){
const customer = {

    id : 1,
    customerName : "abc",
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

const    customerNameref = React.createRef();     
const   customerEmailref = React.createRef();     
const   userNameref = React.createRef();     
const   passwordref = React.createRef();     
const   houseNoref = React.createRef();
const   colonyref = React.createRef();     
const   cityref = React.createRef();     
const    stateref = React.createRef();     
const    pincoderef = React.createRef();

const initialState = {
    customerNameref: undefined,
    customerEmailref: undefined,
    userNameref : undefined,
    passwordref : undefined,
    houseNoref: undefined,
    colonyref: undefined,
    cityref: undefined,
    stateref : undefined,
    pincoderef: undefined,
    customer: customer,
    errMsg: undefined,
    formstatus : "",
};

const [state, setNewState] = useState(initialState);

const submitHandler = (event) => {
  event.preventDefault();
  setNewState({ ...state, formstatus: "Form is submitted Successfully" });
};

const changeHandler = (ref) => {
    const field = ref.current;
    const fieldName = field.name;
    const fieldValue = field.value;
    let newState = {
      ...state,
      [fieldName]: fieldValue,
      customer: undefined,
      errMsg: undefined,
    };
    setNewState(newState);
  };

  return(
    <div>
      <h3> Add Customer</h3>
      <br/>
    <form onSubmit = {(event) => submitHandler(event)}>
    <div>
    <label>Name</label>
    <input name="customerName" type = "text" ref={customerNameref} onChange={()=> changeHandler(customerNameref) } />
    </div><br/>

   
    <div>
    <label>Email</label>
    <input name="customerEmail" type = "email" ref={customerEmailref} onChange={()=> changeHandler(customerEmailref) } />
    </div><br/>

    <div>
    <label>UserName</label>
    <input name="userName" type = "text" ref={userNameref} onChange={()=> changeHandler(userNameref) } />
    </div><br/>

    <div>
    <label>Password</label>
    <input name="password" type = "password" ref={passwordref} onChange={()=> changeHandler(passwordref) } />
    </div><br/>

    <div>
    <label>House No.</label>
    <input name="houseNo" type = "number"  ref={houseNoref} onChange={()=> changeHandler(houseNoref) } /><br/>
    </div><br/>

    <div>
    <label>Colony</label>
    <input name="colony" type = "text" ref={colonyref} onChange={()=> changeHandler(colonyref) } /><br/>
    </div><br/>

    <div>
    <label>City</label>
    <input name="city" type = "text" ref={cityref} onChange={()=> changeHandler(cityref) } /><br/>
    </div><br/>

    <div>
    <label>State</label>
    <input name="State" type = "text" ref={stateref} onChange={()=> changeHandler(stateref) } /><br/>
    </div><br/>

    <div>
    <label>Pincode</label>
    <input name="pincode" type = "number" ref={pincoderef} onChange={()=> changeHandler(pincoderef) } /><br/>
    </div> <br/>

    <br/>

    <button >AddCustomers</button>
 </form>
 <h2>{state.formstatus}</h2><br/>
 <h3>Details: <br/></h3>
 

 <br />
 {state.customer ? (
   <div>
     <h3>Customer Added Successfully</h3>
     <br/>
     <DisplayCustomer customer={ state.customer} />
   </div>
 ) : (
   ""
 )}
 {state.errMsg ? (
   <div>
     <h3> Customer not Added Successfully</h3>
     <br />
     {state.errMsg}
   </div>
 ) : (
   ""
 )}
    </div>
  )
}