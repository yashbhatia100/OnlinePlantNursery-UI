import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import addOrderReducer from './addOrder/addOrderReducer';
import getAllOrdersReducer from './getAllOrder/getAllOrderReducer';
import getOrderByIdReducer from './getOrderById/getOrderByIdReducer';
import getOrderByIdRequestReducer from './getOrderByIdRequest/getOrderByIdRequestReducer';


const store = createStore(
    combineReducers({
        addOrder:addOrderReducer,
        getAllOrder:getAllOrdersReducer,
        getOrderById:getOrderByIdReducer,
        getOrderByIdRequest:getOrderByIdRequestReducer,
        
    }),
    applyMiddleware(thunk));

export default store;