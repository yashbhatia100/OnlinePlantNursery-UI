

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
function App() {

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
    <Route exact path="/getcustomerdetailsonrequest" component = {GetCustomerDetailsOnRequest} />
    <Route exact path="/changecustomername" component = {ChangeCustomerName} />
    </Switch>
    </div>
    </Router>
    
    
    </div>
    
    
    );

}

export default App; 


 
     


