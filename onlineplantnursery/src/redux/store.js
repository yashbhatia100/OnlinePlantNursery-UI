import {applyMiddleware,combineReducers,createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import addCustomerReducer from "./addCustomer/addCustomerReducer";
import updateCustomerNameReducer from "./updateCustomer/updateCustomerNameReducer";


const store=createStore(
    combineReducers({
    addCustomer:addCustomerReducer,
    updateCustomer :updateCustomerNameReducer,
}),
    composeWithDevTools(applyMiddleware(thunk))
    );
export default store;