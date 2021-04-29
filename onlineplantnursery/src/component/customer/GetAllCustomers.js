import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllCustomersAction} from "../../redux/getAllCustomers/getAllCustomersActions";
import DisplayCustomerList from "./DisplayCustomerList";

export default function GetAllCustomers(){
    const response = useSelector(state=>{
        return(
            {
                customers: state.getAllCustomers.customers,
                error:state.getAllCustomers.error
            }
        );
    })

    const dispatch = useDispatch();

    const getAllCustomers =()=>{
        dispatch(getAllCustomersAction());
    };


    useEffect(getAllCustomers,[]);

    return(
        <div>
            <h3>Get All Customers</h3>
            <div className="mt-5">
                <div>
                    <ul>
                        {response.customers ?(
                            <div>
                                <div className ="alert alert-success">
                                    All Customers Fetched successfully!
                                </div>
                                <div>
                                    <DisplayCustomerList customers={response.customers}/>
                                </div>
                            </div>
                        ): ''}
                    </ul>
                </div>
                {response.error? (
                    <div className="alert alert-danger">
                        Request Unsuccessful!
                        <br/>
                        {response.error}
                        </div>
                ): ''}
            </div>
        </div>
    );


    
}