import {applyMiddleware,combineReducers,createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import addCustomerReducer from "./addCustomer/addCustomerReducer";
import getCustomerByIdReducer from "./getCustomerById/getCustomerByIdReducer";
import getCustomerByIdRequestReducer from "./getCustomerByIdRequest/getCustomerByIdRequestReducer";

const store=createStore(
    combineReducers({
    addCustomer:addCustomerReducer,
    getCustomerById:getCustomerByIdReducer,
    getCustomerByIdRequest: getCustomerByIdRequestReducer
}),
    composeWithDevTools(applyMiddleware(thunk))
    );
export default store;
