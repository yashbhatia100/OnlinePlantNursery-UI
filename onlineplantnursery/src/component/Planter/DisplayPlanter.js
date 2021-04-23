export default function DisplayPlanter({ planter }) {
  return (
    
      <div>
        <table className="table table-striped w-40">
          <tr>
            <th>Planter Id</th>
              <td>{planter.planterId}</td>
            
          </tr>
          <tr>
            <th>Planter Height</th>
              <td>{planter.planterHeight}</td>
            
          </tr>
          <tr>
            <th>Planter Capacity</th>
              <td>{planter.planterCapacity}</td>
            
          </tr>
          <tr>
            <th >Planter Draianage Holes  </th>
              <td>{planter.planterDrainageHoles}</td>
           
          </tr>
          <tr>
            <th >Planter Color </th>
              <td>{planter.planterColor}</td>
           
          </tr>
          <tr>
            <th >Planter Shape</th>
              <td>{planter.planterShape}</td>
          </tr>
          <tr>
            <th >Planter Stock</th>
              <td>{planter.planterStock}</td>
           
          </tr>
          <tr>
            <th> Planter Cost </th>
              <td>{planter.planterCost}</td>
            
          </tr>
        </table>
      </div>
  );
}
