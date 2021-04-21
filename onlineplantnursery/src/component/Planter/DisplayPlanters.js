import DisplayPlanter from "./DisplayPlanter";
export default function DisplayPlanters({ planters }) {
  return (
    <span>
      <ol type="I">
        {planters.map((planter) => (
          <li key={planter.id}>
            <DisplayPlanter planter={planter} />
          </li>
        ))}
      </ol>
    </span>
  );
}
