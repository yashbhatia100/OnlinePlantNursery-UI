import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          Seed Module
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/addseed" className="nav-link">
                Add Seed
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/seedbyid/:seedId" className="nav-link">
                Get Seed By Id
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/seedbyname/:commonName" className="nav-link">
                Get Seed By name
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/allseeds" className="nav-link">
                Get All Seeds
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/seedsbytype" className="nav-link">
                Get Seeds By Type
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
