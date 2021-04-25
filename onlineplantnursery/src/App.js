import './App.css';
import AddOrder from './component/Order/AddOrder';
import GetAllOrder from './component/Order/GetAllOrder';
import GetOrderByIdRequest from './component/Order/GetOrderByIdRequest';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './component/Order/Navbar';
import home from './component/Order/home';

import { GetOrderById} from './service/OrderService';


function App() {


  return (
    <div>
      <Router>
        <Navbar />
        <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/all" component={GetAllOrder} />
          <Route exact path="/addorder" component={AddOrder} />
          <Route exact path="/orderbyid/:bookingOrderId" component={GetOrderById} />
          <Route exact path="/orderbyidonrequest" component={GetOrderByIdRequest} />
        </Switch>
        </div>
      </Router>
     
    </div>
  );
}

export default App;