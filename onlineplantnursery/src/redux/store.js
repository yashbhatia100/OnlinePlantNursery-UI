import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import addSeedReducer from "./addseed/addSeedReducer";
import fetchAllSeedsReducer from "./fetchallseeds/fetchAllSeedsReducer";
import fetchAllSeedsByTypeReducer from "./fetchallseedsbytype/fetchAllSeedsByTypeReducer";
import fetchSeedByIdReducer from "./fetchseedbyid/fetchSeedByIdReducer";

const store = createStore(
  combineReducers({
    addSeed: addSeedReducer,
    fetchAllSeeds: fetchAllSeedsReducer,
    fetchAllSeedsByType: fetchAllSeedsByTypeReducer,
    fetchSeed:fetchSeedByIdReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
