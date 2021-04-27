import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import addPlanterReducer from "./addplanter/addPlanterReducer";
import fetchAllPlantersReducer from "./fetchallplanters/fetchAllPlantersReducer";
import fetchPlanterByCostReducer from "./fetchplanterbycost/fetchPlanterByCostReducer";
import fetchPlanterByIdReducer from "./fetchplanterbyid/fetchPlanterByIdReducer";
import fetchPlanterByShapeReducer from "./fetchplanterbyshape/fetchPlanterByShapeReducer";
import getPlanterOnRequestReducer from "./getPlanterOnRequest/getPlanterOnRequestReducer";

const store = createStore(
  combineReducers({
    addPlanter: addPlanterReducer,
    fetchAllPlanters: fetchAllPlantersReducer,
    getPlanterOnRequest: getPlanterOnRequestReducer,
    fetchAllPlantersByShape: fetchPlanterByShapeReducer,
    fetchAllPlantersByCost: fetchPlanterByCostReducer,
    fetchPlanterById: fetchPlanterByIdReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
