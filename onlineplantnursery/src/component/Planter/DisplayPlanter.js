export default function DisplayPlanter({ planter }) {
  return (
    <span>
      <div class="container-fluid">
        <table className="table  table-striped"> 
          <tr>
            <th> Id </th>
            <th> Height </th>
            <th> Capacity </th>
            <th> DrainageHoles </th>
            <th> Color </th>
            <th> Shape </th>
            <th> Stock </th>
            <th> Cost </th>
            <th> Plant Id </th>
            <th> Seed Id </th>
          </tr>

          <tr>
            <td>{planter.id}</td>
            <td>{planter.planterHeight}</td>
            <td>{planter.planterCapacity}</td>
            <td>{planter.planterDrainageHoles}</td>
            <td>{planter.planterColor}</td>
            <td>{planter.planterShape}</td>
            <td>{planter.planterStock}</td>
            <td>{planter.planterCost}</td>
            <td>{planter.plantId}</td>
            <td>{planter.seedId}</td>
          </tr>
        </table>
      </div>
    </span>
  );
}
