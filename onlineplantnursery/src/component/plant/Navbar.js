import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default function Navbar() {

    return (
        <div className="navbar navbar-light bg-light">
            <Link to="/">
                Home
            </Link>
            <br/>
            <Link to="/all">
                Get All Plants
            </Link>
            <br/>
            <Link to="/addplant">
                Add Plant
            </Link>
            <br/>
            <Link to="/plantbyname/:id">
                Get Plant By Name
            </Link>
            <br/>
            <Link to="/plantbynameonrequest">
                Get Plant By Name On Request
            </Link>
            <br/>
            <Link to="/plantsbytype">
                Get Plants By Type
            </Link>
        </div>
    );

}