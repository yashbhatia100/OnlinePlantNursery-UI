import React, { useEffect } from "react";
import DisplayOrder from "./DisplayOrder";
import { useDispatch, useSelector } from "react-redux";
import { getOrderByIdAction } from "../../redux/getOrderById/getOrderByIdActions";

export default function GetOrderById(props){

    const response = useSelector(state=>{
        return(
            {
                order: state.getOrderById.order, 
                errMsg: state.getOrderById.error
            }
        );
    })
    console.log("response",response);
    const dispatch = useDispatch();

    const getOrderById=()=>{
        let id=props.match.params.id;
        dispatch(getOrderByIdAction(id));
    }
    useEffect(getOrderById, []);
    return(
        <div>
            <h3>Order Details</h3>
            <div className="mt-5">
            {response.order?(
                <div>
                    <div>
                        <div className="alert alert-success">
                            Order details fetched successfully!
                        </div>
                        <div>
                            <DisplayOrder order={response.order}/>
                        </div>
                       
                    </div>
                </div>
            ):''}

            {response.error?(
                <div className="alert alert-danger">
                    Request cannot be processed
                    <br/>
                    Error: {response.errMsg}
                </div>
            ):''}
            </div>
        </div>
    );
}