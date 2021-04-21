export  default function DisplayCustomer({customer}){
    return(
        <span>
            Name:  {customer.customerName} <br/> Email: {customer.customerEmail} <br/> userName: {customer.userName}<br/>  houseno.: {customer.houseNo} <br/>colony: {customer.colony} <br/> city: {customer.city}<br/> state :{customer.State} <br/> pincode: {customer.pincode} 
            
        </span>
    )
}