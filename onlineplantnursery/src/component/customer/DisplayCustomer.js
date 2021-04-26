export default function DisplayCustomer({ customer }) {
  return (
    <div>

      <b>Customer ID :</b>  {customer.id}
      <br/>
      <b>Customer Name :</b> {customer.customerName}
      <br/>
     <b>Customer Email :</b> {customer.customerEmail}
      <br/>
      <b>Customer Username : </b>{customer.username}
      <br/>
      <b>Customer AddressId :</b>{customer.addressId}
      <br/>
     <b> House No :</b> {customer.houseNo}
      <br/>
      <b>City :</b> {customer.city}
      <br/>
      <b>Colony :</b> {customer.colony}
      <br/>
      <b>State :</b> {customer.state}
      <br/>
     <b> Pincode :</b> {customer.pincode}
    </div>
  );
}
