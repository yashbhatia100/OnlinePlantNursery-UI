import axios from 'axios';

const baseUrl = "http://localhost:8585";

function addCustomer(data){
    const url= baseUrl + "/customer/add";
    let requestData={
    customerName : data.customerName,
    customerEmail : data.customerEmail,
    username: data.username,
    password : data.password,
    houseNo : data.houseNo,
    colony : data.colony,
    city  : data.city,
    state: data.state,
    pincode : data.pincode,
};
console.log("inside add planter service");
const promise = axios.post(url, requestData);
return promise;

}

/*function fetchCustomerById(id){
    const url = baseUrl+"/customer/fetch/byid/"+id;
    console.log("inside fetch with id", +id);
    const promise = axios.get(url);
    return promise;
}*/

export {addCustomer};