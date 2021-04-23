import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default function Navbar() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">
                    Plant Module
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/all" className="nav-link">
                                Get All Plants
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/addplant" className="nav-link">
                                Add Plant
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/plantbyname/:id" className="nav-link">
                                Get Plant By Name
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/plantbynameonrequest" className="nav-link">
                                Get Plant By Name On Request
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/plantsbytype" className="nav-link">
                                Get Plants By Type
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );

}