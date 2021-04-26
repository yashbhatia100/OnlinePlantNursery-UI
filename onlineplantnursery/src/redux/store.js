import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import addPlantReducer from './addPlant/addPlantReducer';
import getAllPlantsReducer from './getAllPlants.js/getAllPlantsReducer';
import getPlantByNameReducer from './getPlantByName/getPlantByNameReducer';
import getPlantByNameRequestReducer from './getPlantByNameRequest/getPlantByNameRequestReducer';
import getPlantsByTypeReducer from './getPlantsByType/getPlantsByTypeReducer';
import updatePlantStockReducer from './getPlantToUpdate/updatePlantStockReducer';

const store = createStore(
    combineReducers({
        addPlant:addPlantReducer,
        getAllPlants:getAllPlantsReducer,
        getPlantByName:getPlantByNameReducer,
        getPlantByNameRequest:getPlantByNameRequestReducer,
        getPlantsByType:getPlantsByTypeReducer,
        updatePlantStock:updatePlantStockReducer
    }),
    applyMiddleware(thunk));

export default store;