
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import addPlantReducer from './addPlant/addPlantReducer';
import getAllPlantsReducer from './getAllPlants.js/getAllPlantsReducer';
import getPlantByNameReducer from './getPlantByName/getPlantByNameReducer';
import getPlantByNameRequestReducer from './getPlantByNameRequest/getPlantByNameRequestReducer';
import getPlantsByTypeReducer from './getPlantsByType/getPlantsByTypeReducer';
import updatePlantStockReducer from './getPlantToUpdate/updatePlantStockReducer';

import addPlanterReducer from "./addplanter/addPlanterReducer";
import fetchAllPlantersReducer from "./fetchallplanters/fetchAllPlantersReducer";
import fetchPlanterByCostReducer from "./fetchplanterbycost/fetchPlanterByCostReducer";
import fetchPlanterByIdReducer from "./fetchplanterbyid/fetchPlanterByIdReducer";
import fetchPlanterByShapeReducer from "./fetchplanterbyshape/fetchPlanterByShapeReducer";
import getPlanterOnRequestReducer from "./getPlanterOnRequest/getPlanterOnRequestReducer";

import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    combineReducers({
      addPlant:addPlantReducer,
      getAllPlants:getAllPlantsReducer,
      getPlantByName:getPlantByNameReducer,
      getPlantByNameRequest:getPlantByNameRequestReducer,
      getPlantsByType:getPlantsByTypeReducer,
      updatePlantStock:updatePlantStockReducer,
      addPlanter: addPlanterReducer,
      fetchAllPlanters: fetchAllPlantersReducer,
      getPlanterOnRequest: getPlanterOnRequestReducer,
      fetchAllPlantersByShape: fetchPlanterByShapeReducer,
      fetchAllPlantersByCost: fetchPlanterByCostReducer,
      fetchPlanterById: fetchPlanterByIdReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
)
export default store;