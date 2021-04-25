  
export default function DisplayOrder({ order }) {

  return (
      <div>
          <table className="table table-striped w-50">
              <tr>
                  <th>bookingOrderId</th>
                  <td>{order.bookingOrderId}</td>
              </tr>
              <tr>
                  <th>transactionMode</th>
                  <td>{order.transactionMode}</td>
              </tr>
              <tr>
                  <th>quantity</th>
                  <td>{order.quantity}</td>
              </tr>
              <tr>
                  <th>totalCost</th>
                  <td>{order.totalCost}</td>
              </tr>
              <tr>
                  <th>planterId</th>
                  <td>{order.planterId}</td>
              </tr>
              
          </table>
      </div>
  );
}