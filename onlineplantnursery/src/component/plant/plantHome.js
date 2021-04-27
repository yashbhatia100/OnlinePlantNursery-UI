import { Link } from "react-router-dom";

export default function plantHome(){
    return(
        <div>
            <h1>Online Plant Nursery</h1>
            <h3>Plant Module</h3>
            <ul className="list-group mt-5">
                    <li className="list-group-item bg-light mb-4 border-0">
                        <Link to="/all" >
                            Get All Plants
                        </Link>
                    </li>
                    <li className="list-group-item bg-light mb-4 border-0">
                        <Link to="/addplant">
                            Add Plant
                        </Link>
                    </li>
                    <li className="list-group-item bg-light mb-4 border-0">
                        <Link to="/plantbynameonrequest">
                            Get Plant By Name On Request
                        </Link>
                    </li>
                    <li className="list-group-item bg-light mb-4 border-0">
                        <Link to="/plantsbytype">
                            Get Plants By Type
                        </Link>
                    </li>
                    <li className="list-group-item bg-light mb-4 border-0">
                        <Link to="/planttoupdate">
                            Update Plant Stock
                        </Link>
                    </li>
                </ul>
        </div>
    );
}