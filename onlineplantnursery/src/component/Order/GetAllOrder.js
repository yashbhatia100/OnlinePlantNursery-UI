import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrderAction } from '../../redux/getAllOrder/getAllOrderActions';
import DisplayOrderList from "./DisplayOrderList";


    export default function GetAllOrder() {

        const response = useSelector(state=>{
            return(
                {
                    orders: state.getAllOrder.orders, 
                    errMsg: state.getAllOrder.error
                }
            );
        })
        console.log("response",response.order);
        const dispatch = useDispatch();
    
        const getAllOrder =()=>{
            
            dispatch(getAllOrderAction());
        };
    
       useEffect(getAllOrder, []);
    
        return (
            <div>
                <h3>Get All Order</h3>
                <div className="mt-5">
                    <div>
                        <ul>
                            {response.orders ? (
                                <div>
                                    <div className="alert alert-success">
                                        All Order fetched successfully!
                                    </div>
                                    <div>
                                        <DisplayOrderList orders={response.orders} />
                                    </div>
                                
                                </div>
                            ) : ''}
                        </ul>
                    </div>
                    {response.errMsg ? (
                        <div className="alert alert-danger">
                            Request cannot be successfull!
                            <br />
                            Error: {response.errMsg}
                        </div>
                    ) : ''}
                </div>
            </div>
        );
    }