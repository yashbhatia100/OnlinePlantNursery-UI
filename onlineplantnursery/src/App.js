
import './App.css';
import DisplayCustomer from './component/customer/DisplayCustomer';
import GetCustomer from './component/customer/GetCustomer';
import Addcustomer from './component/customer/Addcustomer';
import GetCustomerDetailsOnRequest from './component/customer/GetCustomerDetailsOnRequest';
import LoginForm from './component/customer/LoginForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './component/customer/Navbar';
import Home from './component/customer/Home';
import ChangeCustomerName from './component/customer/ChangeCustomerName';
import {addCustomer,getCustomer} from './service/CustomerService'
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

};*/


 // const promise = addCustomer(customer);
 // promise.then(response=>console.log("Success",response.data))
 //.catch(error=>console.log("error in  add Customer  component ",error.message));

   const promise= getCustomer();
   promise.then(response=>console.log("Success ",response.data))
   .catch(error=>console.log("error in getCustomer",error.message));

  return(
    <div >
    <Router>
    <Navbar/>
    <div className=" container mt-5">
    <Switch>
    <Route exact path="/" component = {Home} />
    <Route exact path="/addcustomer" component = {Addcustomer} />
    <Route exact path="/login" component = {LoginForm} />
    <Route exact path="/getcustomer" component = {GetCustomer} />
    <Route exact path="/changecustomername" component = {ChangeCustomerName} />
    <Route exact path="/getcustomerdetailsonrequest" component = {GetCustomerDetailsOnRequest} />
    
    </Switch>
    </div>
    </Router>
    
    
    </div>
    
    
    );
}

export default App;


 
     


