

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
import {addCustomer,getCustomer,updateCustomerName} from './service/customerService';
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  /*const customer = {


    customerName : "Saurabh",
    customerEmail : "abc@gmail.com",
    username: "abckg",
    password : "xyz421",
    houseNo : 119,
    colony : "ipsum",
    city  : "chennai",
    state: "TamilNadu",
    pincode : 600001,

}; */

let mockUpdate={
  customerId:19,
  customerName: "abeer"
}


  //const promise = addCustomer(customer);
  //promise.then(response=>console.log("Success",response.data))
 //.catch(error=>console.log("error in  add Customer  component ",error.message));

  // const promise= getCustomer(19);
   //promise.then(response=>console.log("Success ",response.data))
   //.catch(error=>console.log("error in getCustomer",error.message));

   const promise = updateCustomerName(mockUpdate);
   promise.then(response=>console.log("success:", response.data))
   .catch(error=>console.log("error in update Customer",error.message));
   
 
  return(
    <div >
    {
      <Provider store={store}>
   <Router>
    <Navbar/>
    <div className=" container mt-5">
    <Switch>
    <Route exact path="/" component = {Home} />
    <Route exact path="/addcustomer" component = {Addcustomer} />
    <Route exact path="/login" component = {LoginForm} />
    <Route exact path="/getcustomerbyid/:id" component = {GetCustomerById} />
    <Route exact path="/getcustomerdetailsonrequest" component = {GetCustomerDetailsOnRequest} />
    <Route exact path="/changecustomername" component = {ChangeCustomerName} />
    
    </Switch>
    </div>
    </Router>
    </Provider>
    }
    </div>
    
    
    );

}

export default App; 


 
     


