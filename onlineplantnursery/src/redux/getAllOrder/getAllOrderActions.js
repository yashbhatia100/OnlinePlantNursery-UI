import { getAllOrder } from "../../service/OrderService";
import store from "../store";
import getAllOrderConstants from "./getAllOrderConstants";

function getAllOrderSuccess(order){

    return ({
            order:order, 
            error:'', 
            type:getAllOrderConstants.success
        });
}

function getAllOrderFail(error){

    return({
            order:'',
            error:error,
            type:getAllOrderConstants.fail 
        });
}

function getAllOrderAction(){

    return()=>{
        //store.dispatch(fetchAllOrderRequest());
        const promise = getAllOrder();
        promise.then(response=> {
            const order = response.data;
            store.dispatch(getAllOrderSuccess(order));
          })
        .catch(error=>store.dispatch(getAllOrderFail(error.response.data)));
    }
}
export {getAllOrderSuccess, getAllOrderFail, getAllOrderAction};