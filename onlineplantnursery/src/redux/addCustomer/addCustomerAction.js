import {addCustomer} from "../../service/customerService";
import store from "../store";
import addCustomerConstants from "./addCustomerConstants";

function addCustomerSuccess(customer){

console.log("Inside add Customer Service")
return({customer:customer,error : "",type : addCustomerConstants.success});


}

function addCustomerfail(error){
return({customer:'',error:error,type : addCustomerConstants.fail});

}

function addCustomerAction(data){ return()=>{
    const promise = addCustomer(data);
    promise.then(response=>store.dispatch(addCustomerSuccess(response.data)))
    .catch(error=>store.dispatch(addCustomerfail(error.response.data)));
}
}
   
{/* return()=>{
      const mockCustomer={  customerName : "Saurabh",
        customerEmail : "abc@gmail.com",
        username: "abckg",
        password : "xyz421",
        houseNo : 119,
        colony : "ipsum",
        city  : "chennai",
        state: "TamilNadu",
        pincode : 600001,
    }
    store.dispatch(addCustomerSuccess(mockCustomer));
}
}
}
{/*const promise = addCustomer(data);
promise.then(response=>{const customer = response.data;
                         let actionObj = addCustomerSuccess(customer);
                      store.dispatch(actionObj);
           }).catch(error=>{
                          
                               let actionObj=addCustomerfail(error.message);
            console.log("Inside addCustomer Action error",error.message);
            store.dispatch(actionObj);
        })
          
}*/}

export{addCustomerAction,addCustomerSuccess,addCustomerfail};