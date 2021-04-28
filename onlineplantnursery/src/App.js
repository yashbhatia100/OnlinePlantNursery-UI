import './App.css';
import AddOrder from './component/Order/AddOrder';
import GetAllOrder from './component/Order/GetAllOrder';
import GetOrderById from './component/Order/GetOrderById';
import GetOrderByIdRequest from './component/Order/GetOrderByIdRequest';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import orderHome from './component/Order/orderHome';
import { Provider } from 'react-redux';
import Navbar from './component/Navbar';
import store from './redux/store';

function App() {

  return (
    <div>
      <Provider store={store}>
      <Router>
        <Navbar />
        <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={orderHome} />
          <Route exact path="/all" component={GetAllOrder} />
          <Route exact path="/addorder" component={AddOrder} />
          <Route exact path="/orderbyid/:id" component={GetOrderById} />
          <Route exact path="/orderbyidonrequest" component={GetOrderByIdRequest} />
        </Switch>
        </div>
      </Router>
      </Provider>
    </div>
  );
}

export default App;