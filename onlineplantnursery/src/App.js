
import './App.css';
import AddCustomer from "./component/Addcustomer";
import DisplayCustomer from "./component/DisplayCustomer";

function App() {
  const customer1 = {
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
  };
  return (
    <div >
      Welcome To Online Plant Nursery<br/><br/>
      <AddCustomer/>
      <DisplayCustomer customer = {customer1}c/>
    </div>
  );
}

export default App;
