import React, { useState } from "react";
import commonStyle from "./commonStyle.module.css";
import DisplayCustomer from "./DisplayCustomer";
import  {fetchCustomerDetails} from '../../service/customerService';

export default function GetCustomerById(props) {
  let customer1 = {
    id: 1,
    customerName: "haha",
    customerEmail: "haha@gmail.com",
    username: "haha123",
    addressId: 234,
    houseNo: "M56",
    colony: "danger",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: 123456,
  };
  

  const response = {customer: customer1, errMsg: undefined};
  
  
  return (
    <div>
      <h3> Get Customer details</h3>
<div className='mt-5'> 
      {response.customer ? (
        <div>
          <DisplayCustomer customer={response.customer} />
        </div>
      ) : (
        ""
      )}
      {response.errMsg ? (
        <div className={commonStyle.error}>
          Request unsuccessful
          <br />
          {response.errMsg}
        </div>
      ) : (
        ""
      )}
    </div>
    </div>
  );
}
