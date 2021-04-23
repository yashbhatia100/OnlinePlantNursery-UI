
import './App.css';
import DisplayCustomer from './component/customer/DisplayCustomer';
import GetCustomer from './component/customer/GetCustomer';
import Addcustomer from './component/customer/Addcustomer';
import GetCustomerDetailsOnRequest from './component/customer/GetCustomerDetailsOnRequest';
import LoginForm from './component/customer/LoginForm';

function App() {




  return (
    <div className="container mt-5">
     <h2>Welcome To Online Plant Nursery</h2> 

    
    
     <br/>
     {<Addcustomer/>} 
     </div>
  );
}

export default App;
     


