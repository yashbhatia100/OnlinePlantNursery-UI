import { getOrderById } from "../../service/OrderService";
import store from "../store";
import getOrderByIdRequestConstants from "./getOrderByIdRequestConstants";

function getOrderByIdRequestSuccess(order){

    return(
        {
            order:order,
            error:'',
            type:getOrderByIdRequestConstants.success
        }
    )
}
function getOrderByIdRequestFail(error){
    
    return(
        {
            order:'',
            error:error,
            type:getOrderByIdRequestConstants.fail
        }
    )
}
function getOrderByIdRequestAction(data){
    
    return()=>{
        console.log("action",data);
    const promise = getOrderById(data);
    console.log("promise",promise);
    promise.then(response=>store.dispatch(getOrderByIdRequestSuccess(response.data)))
    .catch(error=>store.dispatch(getOrderByIdRequestFail(error.response.data)))
}
}

export {getOrderByIdRequestSuccess, getOrderByIdRequestFail, getOrderByIdRequestAction}