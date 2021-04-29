
import './App.css';


import GetOrderById from './component/Order/GetOrderById';
import AddOrder from './component/Order/AddOrder';

import GetAllOrders from './component/Order/GetAllOrders';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './component/Order/Navbar';
import orderHome from './component/Order/orderHome';
import GetOrderByIdOnRequest from './component/Order/GetOrderByIdOnRequest';



function App() {



  return (
    <div>
      <Router>
        <Navbar />
        <div className="container" style={{ marginTop: '50px' }}>

          <div className="row">

            <div className="col-md-9">

              <Switch>
                <Route exact path="/" component={orderHome} />
                <Route exact path="/all" component={GetAllOrders} />
                <Route exact path="/addorder" component={AddOrder} />
                <Route exact path="/getorderbyid/:bookingorderid" component={GetOrderById} />
                <Route exact path="/getorderbyidonrequest" component={GetOrderByIdOnRequest} />

              </Switch>

            </div>
          </div>
        </div>

      </Router>
    </div>
  );
}

export default App;