
import './App.css';
import DisplayCustomer from './component/customer/DisplayCustomer';
import GetCustomer from './component/customer/GetCustomer';
import Addcustomer from './component/customer/Addcustomer';
import GetCustomerDetailsOnRequest from './component/customer/GetCustomerDetailsOnRequest';
import LoginForm from './component/customer/LoginForm';
import ChangePassword from './component/customer/ChangePassword';

function App() {




  return (
    <div className="container mt-5">
     <h2>Welcome To Online Plant Nursery</h2> 
     <br/>
     {/*<Addcustomer/>*/}
     {/*<GetCustomerDetailsOnRequest/>*/}
     <ChangePassword/>
     </div>
  );
}

export default App;
     


