import {applyMiddleware,combineReducers,createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import addPlanterReducer from "./addplanter/addPlanterReducer";
import fetchAllPlantersReducer from "./fetchallplanters/fetchAllPlantersReducer";
import fetchPlanterByIdReducer from "./fetchplanterbyid/fetchPlanterByIdReducer";

const store=createStore(
    combineReducers({
    addPlanter:addPlanterReducer,
    fetchAllPlanters:fetchAllPlantersReducer,
    fetchPlanterById:fetchPlanterByIdReducer
}),
    composeWithDevTools(applyMiddleware(thunk))
    );
export default store;