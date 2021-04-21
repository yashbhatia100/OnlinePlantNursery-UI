export default function DisplayCustomer({customer}){
    return( <div>
            id is {customer.id}
            <br/>
             name is {customer.customerName} 
             <br/>
             email is {customer.customerEmail}
             <br/> 
             username is {customer.username} 
             <br/>
             addressId is {customer.addressId} 
             <br/>
             houseNo is {customer.houseNo} 
             <br/>
             colony is {customer.colony} 
             <br/>
             city is {customer.city} 
             <br/>
             state is {customer.state}
             <br/>
              pincode is {customer.pincode}


        </div>
    );
}