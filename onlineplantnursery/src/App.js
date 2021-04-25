

import './App.css';
import DisplayCustomer from './component/customer/DisplayCustomer';
import Addcustomer from './component/customer/Addcustomer';
import GetCustomerDetailsOnRequest from './component/customer/GetCustomerDetailsOnRequest';
import LoginForm from './component/customer/LoginForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './component/customer/Navbar';
import Home from './component/customer/Home';
import ChangeCustomerName from './component/customer/ChangeCustomerName';
import GetCustomerById from './component/customer/GetCustomerById';
import {addCustomer} from './service/customerService';
function App() {

  let mockCustomer={
    customerName : "Saurabh",
    customerEmail : "abc@gmail.com",
    username: "abckg",
    password : "xyz421",
    houseNo : 119,
    colony : "ipsum",
    city  : "chennai",
    State: "TamilNadu",
    pincode : 600001
};

const promise=addCustomer(mockCustomer);
promise.then(response=>console.log("success:", response.data))
.catch(error=>console.log("failure:", error.message));

  return(
    <div >
   <Router>
    <Navbar/>
    <div className=" container mt-5">
    <Switch>
    <Route exact path="/" component = {Home} />
    <Route exact path="/addcustomer" component = {Addcustomer} />
    <Route exact path="/login" component = {LoginForm} />
    <Route exact path="/getcustomerbyid" component = {GetCustomerById} />
    <Route exact path="/getcustomerdetailsonrequest" component = {GetCustomerDetailsOnRequest} />
    <Route exact path="/changecustomername" component = {ChangeCustomerName} />
    </Switch>
    </div>
    </Router>
    
    
    </div>
    
    
    );

}

export default App; 


 
     


