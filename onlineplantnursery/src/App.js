
import './App.css';
import DisplayCustomer from './component/DisplayCustomer';
import GetCustomer from './component/GetCustomer';
import Addcustomer from './component/Addcustomer';

function App() {
/*  let customer1={
    id: 1,
    customerName: "haha",
    customerEmail: "haha@gmail.com",
    username:"haha123",
    addressId:234,
    houseNo:"M56",
    colony:"danger",
    city:"Chennai",
    state:"Tamil Nadu",
    pincode:123456

  }*/
 /* const customer1 = {
    customerId : 1,
    customerName : "Saurabh",
    customerEmail : "abc@gmail.com",
    userName: "saurabh123",
    password : "xyz421",
    houseNo : 119,
    colony : "ipsum",
    city  : "chennai",
    State: "TamilNadu",
    pincode : 600001,
  };*/


  return (
    <div >
     <h2>Welcome To Online Plant Nursery</h2> 
     
     <GetCustomer/>
     <br/>
     {<Addcustomer/>}
     
     </div>
  );
}

export default App;
     


