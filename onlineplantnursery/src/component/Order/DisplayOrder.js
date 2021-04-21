  
export default function DisplayOrder({ order }) {
    return (
      <span>
        id is {order.bookingOrderId} transactionMode is {order.transactionMode} quantity is{" "}
        {order.quantity} totalCost is {order.totalCost} planterId is{" "}
        {order.planterId} 
      </span>
    );
  }