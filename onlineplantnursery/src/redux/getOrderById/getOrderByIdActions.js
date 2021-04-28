import { getOrderById } from "../../service/OrderService";
import store from "../store";
import getOrderByIdConstants from "./getOrderByIdConstants";

function getOrderByIdSuccess(order){
    return ({
            order:order, 
            error:'', 
            type:getOrderByIdConstants.success
        });
}

function getOrderByIdFail(error){
    return ({
        order:'', 
        error:error, 
        type:getOrderByIdConstants.fail
    });
}

function getOrderByIdAction(data){

    return()=>{
    const promise = getOrderById(data);
    promise.then(response=>store.dispatch(getOrderByIdSuccess(response.data)))
    .catch(error=>store.dispatch(getOrderByIdFail(error.response.data)));
    }
}

export {getOrderByIdSuccess, getOrderByIdFail, getOrderByIdAction};