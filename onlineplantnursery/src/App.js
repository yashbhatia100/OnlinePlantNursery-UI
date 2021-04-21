
import './App.css';
import DisplayCustomer from './component/DisplayCustomer';
import GetCustomer from './component/GetCustomer';

function App() {
  /*let customer1={
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


  return (
    <div >
     <h2>Welcome To Online Plant Nursery</h2> 
     
     <GetCustomer/>
     
    </div>
  );
}

export default App;
