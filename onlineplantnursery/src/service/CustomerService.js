import axios from "axios";
const baseUrl = "http://localhost:8585";

function addCustomer(data){
    const url = baseUrl + "/customer/add";
    let requestData = {
        
        customerName : data.customerName,
        customerEmail : data.customerEmail,
        username : data.username,
        password : data.password,
        houseNo : data.houseNo,
        colony : data.colony,
        city : data.city,
        state : data.state,
        pincode : data.pincode,

    };
    console.log("Inside add Customer service");
    const promise = axios.post(url, requestData);
    return promise;

    
}
 function getCustomer(){
    const url = baseUrl + "/customer/get";
    const promise = axios.get(url);
    return promise;
}
export {addCustomer,getCustomer};