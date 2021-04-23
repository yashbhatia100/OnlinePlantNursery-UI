export default function DisplayCustomer({ customer }) {
  return (
    <div>
        <table className="table table-striped w-50">
            <tr>  
                
               <th>Customer ID </th>
               <th>Customer Name</th>
               <th>Customer Email</th>
               <th>Customer username</th>
               <th>Customer AddressID</th>
               <th> House No</th>
               <th> City</th>
               <th>State</th>
               <th>Pincode</th>
               </tr>

      <tr>
          <td>{customer.id}</td>
          <td>{customer.customerName}</td>
          <td>{customer.customerEmail}</td>
          <td>{customer.username}</td>
          <td>{customer.addressId}</td>
          <td>{customer.houseNo}</td>
          <td>{customer.colony}</td>
          <td>{customer.city}</td>
          <td>{customer.state}</td>
          <td>{customer.pincode}</td>
    
      </tr>

      </table>
    </div>
  );
}
