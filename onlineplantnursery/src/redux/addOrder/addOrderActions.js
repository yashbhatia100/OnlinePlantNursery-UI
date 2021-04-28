import { addOrder } from "../../service/OrderService";
import store from "../store";
import addOrderConstants from "./addOrderConstants";

function addOrderSuccess(order){
    return(
        {
            order:order,
            error:'',
            type:addOrderConstants.success
        }
    );
}

function addOrderFail(error){
    return(
        {
            order:'',
            error:error,
            type:addOrderConstants.fail
        }
    );
}

function addOrderAction(data){
    return()=>{
        console.log("action",data);
        const promise = addOrder(data);
        console.log("promise",promise);
        promise.then(response=>store.dispatch(addOrderSuccess(response.data)))
        .catch(error=>store.dispatch(addOrderFail(error.response.data)))
    }
}

export {addOrderSuccess, addOrderFail, addOrderAction};