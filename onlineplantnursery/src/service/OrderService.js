  
import axios from 'axios';

const baseUrl = "http://localhost:8585/orders";

function AddOrder(data){
    const url = baseUrl+"/add";
    let requestData = {
        bookingOrderId: data.bookingOrderId,
        transactionMode: data.transactionMode,
        quantity: data.quantity,
        totalCost: data.totalCost,
        planterId: data.planterId
    };
    const promise = axios.post(url, requestData);
    return promise;
}

function GetOrderById(bookingOrderId){
    const url=baseUrl+"/fetch/byid/"+bookingOrderId;
    const promise = axios.get(url);
    return promise;
}


function GetAllOrder(){
    const url=baseUrl+"/fetch";
    const promise = axios.get(url);
    return promise;
}



export {AddOrder, GetOrderById, GetAllOrder};