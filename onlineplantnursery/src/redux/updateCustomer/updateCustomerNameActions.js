import ChangeCustomerName from "../../component/customer/ChangeCustomerName";
import {updateCustomerName} from "../../service/customerService"
import store from "../store";
import updateCustomerNameConstants from "./updateCustomerNameConstants";

function updateCustomerNameSuccess(customer){

console.log("Inside change Customer Name")
return({customer:customer,error : "",type : updateCustomerNameConstants.success});


}

function updateCustomerNamefail(error){
    return({customer: undefined,error:error,type : updateCustomerNameConstants.fail});

}
function updateCustomerNameAction(data){ 
return()=>{
    const promise = updateCustomerName(data);
    promise.then(response=>store.dispatch(updateCustomerNameSuccess(response.data)))
    .catch(error=>store.dispatch(updateCustomerNamefail(error.response.data)));
}


}

export {updateCustomerNameAction,updateCustomerNameSuccess,updateCustomerNamefail};