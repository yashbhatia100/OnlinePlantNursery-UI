import { Link } from "react-router-dom";

export default function SeedHome(){
    return(
        <div>
            <h3>Seed Module</h3>
            <div>
            <ul className="list-group mt-5">
          <li className="list-group-item bg-light mb-4 border-0">
              <Link to="/addseed" className="nav-link">
                Add Seed
              </Link>
            </li>

            <li className="list-group-item bg-light mb-4 border-0">
              <Link to="/seedbyname/:commonName" className="nav-link">
                Get Seed By name
              </Link>
            </li>

            <li className="list-group-item bg-light mb-4 border-0">
              <Link to="/allseeds" className="nav-link">
                Get All Seeds
              </Link>
            </li>

            <li className="list-group-item bg-light mb-4 border-0">
              <Link to="/seedsbytype" className="nav-link">
                Get Seeds By Type
              </Link>
            </li>
          </ul>
        </div>
        </div>


    );
}