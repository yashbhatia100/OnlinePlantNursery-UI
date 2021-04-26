import DisplaySeedDetails from "./DisplaySeedDetails";
import { Link } from "react-router-dom";

export default function DisplaySeedList({ seeds }) {
  return (
    <div>
      <ul className="list-group">
        {seeds.map((seed) => (
          <li key={seed.seedId} className="list-group-item">
            <Link to={"/seedbyid/${seed.SeedId}"}>
              <span>
                {seed.seedId} {seed.commonName}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
