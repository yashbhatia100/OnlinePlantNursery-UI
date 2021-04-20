export default function DisplayPlanter({ planter }) {
  return (
    <span>
      id is {planter.id} height is {planter.planterHeight} capacity is{" "}
      {planter.planterCapacity} color is {planter.planterColor} shape is{" "}
      {planter.planterShape} stock is {planter.planterStock} cost is{" "}
      {planter.planterCost} plantId is {planter.plantId} seedId is{" "}
      {planter.seedId}
    </span>
  );
}
